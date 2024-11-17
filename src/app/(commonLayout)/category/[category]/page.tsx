
// import NewsletterSubscribe from "../../components/NewsletterSubscribe/NewsletterSubscribe";
import CategoryHero from "@/Components/Shared/CategoryHero/CategoryHero";
import ExploreBlogs from "@/Components/Shared/ExploreBlogs/ExploreBlogs";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const response = await fetch(
    `https://blogbackend-theta.vercel.app/api/v1/category/${params.category}`
  );
  const dynamicCategoryData = await response.json();

  console.log("category",dynamicCategoryData)

  return (
    <>
      <CategoryHero
        title={`${params.category}`}
        description={dynamicCategoryData?.description}
        heroImage={dynamicCategoryData?.category?.thumbnail?.thumbnailUrl}

      />
      <ExploreBlogs subCategory={dynamicCategoryData?.category?.subCategory}/>
      {/* <NewsletterSubscribe /> */}
    </>
  );
};

export default CategoryPage;
