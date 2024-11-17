import { IMAGES } from "@/public/assets";
import Image from "next/image";
import ContentSlider from "./ContentSlider";


const Hero = () => {
    return (
        <div className="bg-primary-10 w-full px-0 md:px-8 xl:px-[150px] font-Inter">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-7 md:gap-5 xl:gap-10">
                {/* Left content */}
                <ContentSlider/>
               

               <Image src={IMAGES.heroImage} alt="right-arrow" className="w-full md:max-w-[330px] xl:max-w-[550px] rounded-t-none xl:rounded-t-2xl" />
            </div>
        </div>
    );
};

export default Hero;