import SectionTitle from "../Common/SectionTitle";
import SingleTestimonialStyleTwo from "./SingleTestimonialStyleTwo";
import testimonialStyleTwoData from "./testimonialStyleTwoData";

const TestimonialsStyleTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div>
          <SectionTitle
            title="A few words from our users"
            paragraph="Our user-friendly interface and intuitive dashboards make it easy for you to explore and analyze your data, regardless of your technical expertise."
            width="735px"
            center
            mb="60px"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialStyleTwoData.map((testimonial, index) => (
            <SingleTestimonialStyleTwo key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStyleTwo;
