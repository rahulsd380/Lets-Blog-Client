"use client"
import { ICONS } from "@/public/assets";
import Image from "next/image";
import { useCallback, useState } from "react";

const ContentSlider = () => {
    const contents = [
        {
            title : "Welcome to Comfort",
            description :  [
                "Discover unique travel destinations that inspire wanderlust.",
                "Stay updated with the latest gossips and trends in entertainment.",
                "Get tech-savvy with our in-depth reviews and guides.",
                "Navigate laws and regulations made simple for everyone.",
                "Your go-to guide for lifestyle tips that add joy to your everyday."
            ]
        },
        {
            title : "Welcome to Comfort",
            description :  [
                "Discover unique travel destinations that inspire wanderlust.",
                "Stay updated with the latest gossips and trends in entertainment.",
                "Get tech-savvy with our in-depth reviews and guides.",
                "Navigate laws and regulations made simple for everyone.",
                "Your go-to guide for lifestyle tips that add joy to your everyday."
            ]
        },
        {
            title : "Welcome to Comfort",
            description :  [
                "Discover unique travel destinations that inspire wanderlust.",
                "Stay updated with the latest gossips and trends in entertainment.",
                "Get tech-savvy with our in-depth reviews and guides.",
                "Navigate laws and regulations made simple for everyone.",
                "Your go-to guide for lifestyle tips that add joy to your everyday."
            ]
        },
    ]
    const [currentSlider, setCurrentSlider] = useState(0);
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? contents.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === contents.length - 1 ? 0 : currentSlider + 1), [contents.length]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlider();
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [nextSlider]);
    return (
        <div className="overflow-hidden w-full">
            {/* Left content */}
             <div className="py-[41px] px-5 md:px-0 flex flex-col justify-between gap-[50px] md:gap-10 lg:gap-0 h-full">
                <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
    {
        contents.map((content, index) => 
            <div key={index} className="min-w-full flex flex-col gap-[27px]">
                <h1 className="text-white text-2xl md:text-[30px] xl:text-[48px] font-semibold leading-normal">{content.title}</h1>
                <div className="flex flex-col gap-[6px]">
                    {
                        content.description.map((description, index) => 
                            <div key={index} className="flex items-center gap-[2px]">
                                <Image src={ICONS.rightArrow} alt="right-arrow" className="size-[14px]" />
                                <p className="text-primary-20 text-xs xl:text-sm leading-[16px] max-w-[304px] md:m">{description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
</div>


                {/* Slide controll button and pointer */}
               <div className="flex items-center justify-between">
               <Image onClick={prevSlider} src={ICONS.lefttIcon} alt="left-arrow" className="size-6 cursor-pointer" />
               {/* pointers */}
               <div className="flex items-center gap-2"> 
               {
               contents.map((img, idx) => (
              <button key={`${img}_${idx}`} onClick={() => setCurrentSlider(idx)} className={`size-[6px] bg-primary-20 rounded-full ${currentSlider === idx ? "w-8" : "w-2"} h-2`}></button>
            ))}
               </div>

               <Image onClick={nextSlider} src={ICONS.rightIcon} alt="right-arrow" className="size-6 cursor-pointer" />
               </div>
               
               </div>
          
      </div>
    );
};

export default ContentSlider;