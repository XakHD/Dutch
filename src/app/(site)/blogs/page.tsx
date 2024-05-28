import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Startup Pro",
  description: "This is Home Blog page for Startup Pro",
  // other metaDescription
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.length > 0 &&
              posts.map((blog, index) => (
                <SingleBlog key={index} blog={blog} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
