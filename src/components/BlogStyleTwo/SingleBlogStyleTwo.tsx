import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlogStyleTwo = ({ blog }: { blog: Blog }) => {
  const { title, mainImage, slug, tags, publishedAt } = blog;

  return (
    <div className="w-full overflow-hidden rounded-sm bg-white shadow-three duration-300 hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
      <div className="relative block h-[230px] overflow-hidden">
        <Link href={`/blogs-2/${slug.current}`}>
          <Image
            src={imageBuilder(mainImage).url()}
            alt={title}
            fill
            className="object-cover object-center transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
          />
        </Link>
      </div>

      <div className="p-6">
        <div className="mb-2.5 flex items-center">
          <Link
            href={`/blogs/tags/${tags && tags[0]}`}
            className="text-sm text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
          >
            { tags && tags[0]}
          </Link>
          <span className="mx-4 inline-block h-3 w-px bg-stroke dark:bg-stroke-dark"></span>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            { publishedAt && new Date(publishedAt).toDateString().split(" ").slice(1).join(" ")}
          </p>
        </div>

        <div>
          <h3>
            <Link
              href={`/blogs-2/${slug.current}`}
              className="text-xl font-semibold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {`${title.slice(0, 50)}...`}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogStyleTwo;
