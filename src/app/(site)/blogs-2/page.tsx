import SingleBlogStyleTwo from "@/components/BlogStyleTwo/SingleBlogStyleTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page 2 - Startup Pro",
  description: "This is Home Blog page for Startup Pro",
  // other metaDescription
};

export default async function BlogPageStyleTwo() {
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 &&
              posts.map((blog, index) => (
                <SingleBlogStyleTwo key={index} blog={blog} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
