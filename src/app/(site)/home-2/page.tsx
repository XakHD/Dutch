import AboutStyleTwo from "@/components/AboutStyleTwo";
import SingleBlogStyleTwo from "@/components/BlogStyleTwo/SingleBlogStyleTwo";
import BrandsStyleTwo from "@/components/BrandsStyleTwo";
import SectionTitle from "@/components/Common/SectionTitle";
import FaqSection from "@/components/Faq";
import FeaturesStyleTwo from "@/components/FeaturesStyleTwo";
import HeroStyleTwo from "@/components/HeroStyleTwo";
import NewsLatter from "@/components/Newslatter";
import PricingStyleTwo from "@/components/PricingStyleTwo";
import TestimonialsStyleTwo from "@/components/TestimonialsStyleTwo";
import { getPosts } from "@/sanity/sanity-utils";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page 2 - Startup Pro",
  description: "This is Home for Startup Pro",
  // other metadata
};

const HomePageStyleTwo = async () => {
  const posts = await getPosts();

  return (
    <>
      <HeroStyleTwo />
      <BrandsStyleTwo />
      <FeaturesStyleTwo />
      <AboutStyleTwo />
      <PricingStyleTwo />
      <TestimonialsStyleTwo />
      <FaqSection />
      <NewsLatter />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div>
            <SectionTitle
              title="The latest from our blog"
              paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
              center
              width="735px"
              mb="60px"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((blog, index) => (
              <SingleBlogStyleTwo key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageStyleTwo;
