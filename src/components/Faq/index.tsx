import SectionTitle from "../Common/SectionTitle";
import Accordion from "./Accordion";
import faqData from "./faqData";

const FaqSection = () => {
  const faqs_1 = faqData.slice(0, Math.ceil(faqData.length / 2));
  const faqs_2 = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div>
          <SectionTitle
            title="Frequently asked questions"
            paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
            center
            width="735px"
            mb="60px"
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <Accordion faqData={faqs_1} />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <Accordion faqData={faqs_2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
