import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonialStyleTwo = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const { name, image, designation, content } = testimonial;
  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-7 shadow-three transition-all duration-300 hover:-translate-y-1.5 dark:bg-gray-dark dark:shadow-two">
        <div className="mb-6 flex items-center">
          <div className="relative mr-4 aspect-square w-full max-w-[50px] overflow-hidden rounded-full">
            <Image width={50} height={50} src={image} alt={name} />
          </div>
          <div>
            <h3 className="text-base font-medium text-black dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-primary"> - {designation} </p>
          </div>
        </div>

        <div className="text-base text-body-color dark:text-body-color-dark">
          {content}
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialStyleTwo;
