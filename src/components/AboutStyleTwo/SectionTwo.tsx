"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const SectionTwo = () => {
  const { theme } = useTheme();
  return (
    <section className="pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 flex lg:mb-0 lg:justify-end">
              <div className="lg:text-right">
                <SectionTitle
                  title="Offers All Essential Integrations"
                  paragraph="Designed specifically for SaaS startups, our comprehensive starter template package includes all the essential features and seamless integrations you require."
                  width="570px"
                  mb="44px"
                />

                <Link
                  href="/about"
                  className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  More About us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative max-w-[465px] overflow-hidden rounded-md p-7 text-center shadow-three dark:bg-gray-dark dark:shadow-two lg:mx-auto">
              <div className="relative aspect-[25/24]">
                <Image
                  src="/images/about-2/image-2-dark.svg"
                  alt="about image"
                  fill
                  className="hidden dark:block"
                />
                <Image
                  src="/images/about-2/image-2-light.svg"
                  alt="about image"
                  fill
                  className="dark:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
