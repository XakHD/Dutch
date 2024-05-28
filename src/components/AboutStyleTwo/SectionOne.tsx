"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const SectionOne = () => {
  const { theme } = useTheme();
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mb-12 max-w-[465px] overflow-hidden rounded-md p-7 text-center shadow-three dark:bg-gray-dark dark:shadow-two lg:mx-auto">
              <div className="relative aspect-[25/24]">
                <Image
                  src="/images/about-2/image-1-light.svg"
                  alt="about image"
                  fill
                  className="dark:hidden"
                />
                <Image
                  src="/images/about-2/image-1-dark.svg"
                  alt="about image"
                  fill
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp">
              <SectionTitle
                title="Create and Launch Your SaaS Product Faster."
                paragraph="Designed specifically for SaaS startups, our comprehensive starter template package includes all the essential features and seamless integrations you require."
                width="570px"
                mb="44px"
              />

              <Link
                href="/about"
                className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
