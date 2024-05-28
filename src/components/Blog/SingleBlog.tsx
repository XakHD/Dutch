import { imageBuilder } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, mainImage, slug, metadata, author, tags, publishedAt } = blog;

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blogs/${slug?.current}`}
          className="relative block aspect-[37/22] w-full overflow-hidden"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white duration-300 hover:bg-primary/90">
            {tags && tags[0]}
          </span>

          <Image
            src={imageBuilder(mainImage).url()}
            alt={title}
            fill
            className="transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blogs/${slug?.current}`}
              className="mb-4 block text-xl font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary sm:text-[22px]"
            >
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color/10 pb-6 text-base text-body-color dark:border-white/10 dark:text-body-color-dark">
            {metadata?.slice(0, 100)}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Link href={`/blogs/author/${author?.slug.current}`}>
                    <Image
                      src={
                        author?.image ? imageBuilder(author?.image).url() : "/"
                      }
                      alt={author?.name as string}
                      fill
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  <Link href={`/blogs/author/${author?.slug.current}`}>
                    By {author?.name}
                  </Link>
                </h4>

                <div className="text-xs text-body-color">
                  <PortableText value={author?.bio as any} />
                </div>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color dark:text-body-color-dark">
                {publishedAt &&
                  new Date(publishedAt)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
