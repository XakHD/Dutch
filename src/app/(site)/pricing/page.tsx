import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import PricingStyleTwo from "@/components/PricingStyleTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page - Startup Pro",
  description: "This is Pricing page for Startup Pro",
  // other metaDescription
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div className="mt-14">
        <PricingStyleTwo />

        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
