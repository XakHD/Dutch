"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";
import { pricingData } from "@/stripe/pricingData";

const PricingStyleTwo = () => {
  return (
    <div className="bg-gradient-to-t from-transparent to-[#F0F2F9] pt-16 dark:to-bg-color-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div>
          <SectionTitle
            title="Get Exclusive Plans"
            mb="40px"
            center
            width="735px"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData &&
            pricingData.map((product) => (
              <PricingCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingStyleTwo;
