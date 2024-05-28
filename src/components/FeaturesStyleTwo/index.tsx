import SectionTitle from "../Common/SectionTitle";
import SingleFeatureStyleTwo from "./SingleFeatureStyleTwo";
import featuresStyleTwoData from "./featuresStyleTwoData";

const FeaturesStyleTwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Explore our amazing features"
            paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
            center
            width="735px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresStyleTwoData.map((feature) => (
              <SingleFeatureStyleTwo key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesStyleTwo;
