import Hero from "../../Components/Hero/Hero";
import CategorizedPosts from "../../Components/CategorizedPosts/CategorizedPosts";
import ExploreTopics from "../../Components/ExploreTopics/ExploreTopics";
// import NewsletterSubscribe from "./components/NewsletterSubscribe/NewsletterSubscribe";

export type TPost= {
  _id:string;
  title: string;
  content: string;
  category:{
    _id:string;
    name:string;
  };
  author:{
    _id:string,
    full_name:string,
  };
  createdAt: string;
  thumbnail: {
    fileId: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    _id: string;
  };
}

export type TCategorySection= {
  sectionHeading: string;
  isBordervisible: boolean;
  isLinkAvailable: boolean;
  path?: string;
  data: TPost[];
}

export default async function page() {
  const response = await fetch("https://blogbackend-theta.vercel.app/api/v1/blog", {
    cache : 'no-store'
  });
  const dynamicPosts = await response.json();
  console.log(dynamicPosts)

  // console.log(dynamicPosts);
  // console.log(Array.isArray(dynamicPosts.data));

  const homePageCategorizedPosts : TCategorySection[] = [
    {
      sectionHeading : "Top Featured Posts",
      isBordervisible:false,
      isLinkAvailable:false,
      data : dynamicPosts?.data?.slice(0,2)
    },
    {
      sectionHeading : "Travel",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/category/Travel",
      data : dynamicPosts?.data?.filter((data:TPost) => data?.category.name === "Travel")
    },
    {
      sectionHeading : "Gossips",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/category/Gossips",
      data : dynamicPosts?.data?.filter((data:TPost) => data?.category.name === "Gossips")
    },
    {
      sectionHeading : "Entertainment",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/category/Entertainment",
      data : dynamicPosts?.data?.filter((data:TPost) => data?.category.name === "Entertainment")
    },
    {
      sectionHeading : "Technology",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/category/Technology",
      data : dynamicPosts?.data?.filter((data:TPost) => data?.category?.name === "Technology")
    },
    {
      sectionHeading : "Reviews",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/category/Reviews",
      data : dynamicPosts?.data?.filter((data:TPost) => data?.category.name === "Reviews")
    },
  ];




  return (
    <div className="flex flex-col">
      <Hero/>
      <div className='bg-primary-60 py-[64px] flex flex-col gap-[64px]'>
      {
        homePageCategorizedPosts.map((section, index) => 
        <CategorizedPosts key={index} section={section} />
        )
      }
      <ExploreTopics/>
      </div>
      {/* <NewsletterSubscribe/> */}
    </div>
  );
}
