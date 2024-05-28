import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SingleBlog from "@/components/Blog/SingleBlog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { getPosts } from "@/sanity/sanity-utils";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dutch Uncle",
  description: "This is Home for Dutch Uncle",
  // other metadata
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      {/* <section
        id="blog"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
         <div className="container">
          <SectionTitle
            title="Our Latest Blogs"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            mb="60px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.slice(0, 3).map((blog, index) => (
              <SingleBlog key={index} blog={blog} /> 
            ))}
          </div> 
        </div>
      </section> */}
      <Contact />
    </>
  );
}
