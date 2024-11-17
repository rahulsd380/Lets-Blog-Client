import Container from "@/Components/Container/Container";
import Heading from "@/Components/Shared/Heading/Heading";
import React from "react";
import { TCategorySection } from "../../app/(commonLayout)/page";
import BlogCard from "@/Components/Shared/BlogCard/BlogCard";

interface CategorizedPostsProps {
  section: TCategorySection;
}

const CategorizedPosts: React.FC<CategorizedPostsProps> = ({ section }) => {
  return (
    <Container>
      <div className="flex flex-col gap-[15px]">
        <Heading
          title={section.sectionHeading}
          isBordervisible={section.isBordervisible}
          isLinkAvailable={section.isLinkAvailable}
          path={section.path}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        {section?.data?.length > 0 ? (
  section?.data?.map((content, index) => {
    // console.log("Content:", content.title);
    return (
      <BlogCard
        key={index}
        id={content._id}
        title={content.title}
        content={content.content}
        author={content.author}
        createdAt={content.createdAt}
        thumbnail={content.thumbnail}
      />
    );
  })
) : (
  <p>No posts available for this category.</p>
)}

        </div>
      </div>
    </Container>
  );
};

export default CategorizedPosts;
