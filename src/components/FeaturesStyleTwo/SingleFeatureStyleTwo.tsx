import { Feature } from "@/types/feature";

const SingleFeatureStyleTwo = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="group px-2 text-center">
        <div className="mx-auto mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-primary shadow-three duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E39] dark:text-white dark:shadow-feature-2">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-body-color">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeatureStyleTwo;
