"use client";
import Container from "@/Components/Container/Container";
import { ICONS } from "@/public/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import Link from "next/link";

type TSubCategory = {
  _id: string;
  name: string;
};

type TCategory={
  _id:string;
  name:string;
  description:string[];
  subCategories:TSubCategory[]
  thumbnail:{
    fileId:string;
    name:string;
    url:string;
    thumbnailUrl:string;
    _id:string;
  }
}

const ExploreTopics = () => {
  const [categories, setCategories]=useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://blogbackend-theta.vercel.app/api/v1/category');
      const data = await response.json();
      setCategories(data)
    }
    fetchCategories()

  }, []);
  console.log(categories)
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <div className="font-Inter">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-2xl font-semibold leading-[38px]">
            Explore More Topics
          </h1>

          <div className="flex items-center gap-6">
            {/* Left button */}
            <div ref={prevButtonRef} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g>
                  <g clipPath="url(#clip0_1_1961)">
                    <path
                      d="M23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5C18.3513 23.5 23.5 18.3513 23.5 12Z"
                      stroke="#524CC6"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M11.0091 12.1667L14.5044 15.6858C14.7647 15.9483 14.7647 16.374 14.5044 16.6365C14.2441 16.899 13.822 16.899 13.5617 16.6365L9.59516 12.642C9.33481 12.3795 9.33481 11.9538 9.59516 11.6913L13.5617 7.69688C13.822 7.43437 14.2441 7.43437 14.5044 7.69688C14.7647 7.95938 14.7647 8.38499 14.5044 8.64749L11.0091 12.1667Z"
                      fill="#524CC6"
                      fillOpacity="0.7"
                    />
                  </g>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="#524CC6"
                    strokeOpacity="0.7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1961">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Right button */}
            <div ref={nextButtonRef} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g>
                  <g clipPath="url(#clip0_1_1968)">
                    <path
                      d="M23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5C18.3513 23.5 23.5 18.3513 23.5 12Z"
                      stroke="#F2F2F2"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M13.4406 12.1667L9.94523 8.64749C9.68492 8.38499 9.68492 7.95938 9.94523 7.69688C10.2055 7.43437 10.6276 7.43437 10.8879 7.69688L14.8545 11.6913C15.1148 11.9538 15.1148 12.3795 14.8545 12.642L10.8879 16.6365C10.6276 16.899 10.2055 16.899 9.94523 16.6365C9.68492 16.374 9.68492 15.9483 9.94523 15.6858L13.4406 12.1667Z"
                      fill="#524CC6"
                    />
                  </g>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="#524CC6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1968">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: prevButtonRef.current as HTMLElement,
            nextEl: nextButtonRef.current as HTMLElement,
          } as NavigationOptions}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            360: { slidesPerView: 1.4 }, // For small screens
            640: { slidesPerView: 2 }, // For small screens
            768: { slidesPerView: 3 }, // For medium screens
            1024: { slidesPerView: 4 }, // For large screens
            1366: { slidesPerView: 4.2 }, // For large screens
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
                // Enable navigation buttons after swiper initialization
                if (swiper?.params?.navigation) {
                  (swiper.params.navigation as NavigationOptions).prevEl = prevButtonRef.current;
                  (swiper.params.navigation as NavigationOptions).nextEl = nextButtonRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          className="mt-[18px] pb-10"
        >
          {categories?.map((category:TCategory, index) => (
            <SwiperSlide key={index}>
              <div className="bg-primary-70 rounded-lg w-[222px] h-[262px] mb-12 relative">
  <Image
    fill
    src={category.thumbnail.thumbnailUrl}
    alt="feature-category"
    className="rounded-t-lg object-cover"
  />
  <Link href={`/category/${category.name}`} className="text-primary-10 font-medium leading-6 flex items-center justify-center py-2 gap-2 absolute bottom-0 w-full bg-primary-70 rounded-b-lg">
    {category.name}
    <Image src={ICONS.view} alt="view-icon" className="w-6 h-6" />
  </Link>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default ExploreTopics;
