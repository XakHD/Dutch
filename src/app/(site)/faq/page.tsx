import Breadcrumb from "@/components/Common/Breadcrumb";
import FaqSection from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page - Startup Pro",
  description: "This is Faq Page for Startup Pro",
  // other metadata
};

const FaqPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="FAQ Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <FaqSection />
    </>
  );
};

export default FaqPage;
