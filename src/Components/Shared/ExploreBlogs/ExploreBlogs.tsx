/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import "./ExploreBlogs.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "../Card/Card";

interface SubCategory {
  _id: string;
  name: string;
}

interface ExploreBlogsProps {
  subCategory: SubCategory[];
}

const ExploreBlogs: React.FC<ExploreBlogsProps> = ({ subCategory }) => {
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>(subCategory?.[0]?.name || "");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch("https://blogbackend-theta.vercel.app/api/v1/blog");
        const data = await response.json();
        setAllBlogs(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchAllBlogs();
  }, []);

  // Filter blogs based on the active tab (subcategory name)
  const filteredBlogs = allBlogs?.filter((blog) => blog.subCategory === activeTab);

  return (
    <div className="section ExploreBlogs overflow-hidden">
      <div className="title">
        <h4>Explore the blogs</h4>
        <p className="font-medium">
          Join me on a delightful journey filled with travel tales, tasty recipes, and lifestyle tips that inspire warmth and connection.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex tab-container gap-1">
        {subCategory?.map((tab) => (
          <button
            key={tab._id}
            className={`py-2 px-4 tab ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <h5>{tab.name}</h5>
          </button>
        ))}
      </div>

      {/* Loader or Render Filtered Blogs */}
      <div className="mt-4 blog-container">
        {isLoading ? (
          // Loader animation
          <div className="size-10 flex gap-2 items-center justify-center mx-auto">
            <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
          </div>
        ) : filteredBlogs?.length > 0 ? (
          <motion.div
            className="blog-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredBlogs?.map((blog, index) => (
              <Link key={index} href={`/blogs/${blog._id}`}>
                <Card
                  tags={blog.tags}
                  title={blog.title}
                  description={blog.content}
                  author={blog.author}
                  date={blog.createdAt}
                  imageUrl={blog.thumbnail?.thumbnailUrl}
                />
              </Link>
            ))}
          </motion.div>
        ) : (
          <div>No blogs found for this category</div>
        )}
      </div>
    </div>
  );
};

export default ExploreBlogs;
