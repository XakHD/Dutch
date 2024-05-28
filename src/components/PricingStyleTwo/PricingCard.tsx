import axios from "axios";
import OfferItem from "./OfferItem";
import { Price } from "@/types/priceItem";

const PricingCard = ({ product }: { product: Price }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white px-6 py-9 shadow-three duration-300 hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark sm:px-9 md:px-7 xl:px-9">
        <h3 className="mb-6 text-[22px] font-bold leading-tight text-black dark:text-white">
          {product.nickname} Plan
        </h3>

        <div className="flex items-center">
          <span className="self-end pb-1 text-lg font-medium text-body-color dark:text-body-color-dark">
            $
          </span>
          <span className="px-1 text-[38px] font-bold leading-tight text-black dark:text-white">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "USD",
            })}
          </span>
          <span className="text-base font-medium text-body-color dark:text-body-color-dark">
            {/* /{duration} */}
          </span>
        </div>
        <p className="mb-7 text-sm text-body-color dark:text-body-color-dark">
          (No credit card required)
        </p>

        <button
          onClick={handleSubscription}
          className={`mb-8 flex w-full items-center justify-center rounded-sm py-3 text-base font-medium text-white duration-300 dark:shadow-two ${
            product.nickname === "Premium"
              ? "bg-primary hover:bg-primary/90"
              : "bg-black hover:bg-black/90 dark:bg-[#333844] dark:hover:bg-[#333844]/90"
          }`}
        >
          Purchase Now
        </button>

        <div className="space-y-[18px]">
          {product.nickname === "Basic" && (
            <>
              <OfferItem
                status="active"
                text="Sell your accounts in one place"
              />
              <OfferItem
                status="active"
                text="Create a budget & manage money"
              />
              <OfferItem
                status="active"
                text="Manage your money on the cross desktop + web + mobile"
              />
              <OfferItem status="inactive" text="Free Lifetime Updates" />
            </>
          )}
          {product.nickname === "Premium" && (
            <>
              <OfferItem
                status="active"
                text="Sell your accounts in one place"
              />
              <OfferItem
                status="active"
                text="Create a budget & manage money"
              />
              <OfferItem
                status="active"
                text="Manage your money on the cross desktop + web + mobile"
              />
              <OfferItem status="active" text="Free Lifetime Updates" />
            </>
          )}
          {product.nickname === "Business" && (
            <>
              <OfferItem
                status="active"
                text="Sell your accounts in one place"
              />
              <OfferItem
                status="active"
                text="Create a budget & manage money"
              />
              <OfferItem
                status="active"
                text="Manage your money on the cross desktop + web + mobile"
              />
              <OfferItem status="active" text="Free Lifetime Updates" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
