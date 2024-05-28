const checkIcon = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <g clipPath="url(#clip0_1025_298)">
      <path
        d="M9.16667 13.9074L17.5927 5.48047L18.8898 6.77664L9.16667 16.4997L3.33301 10.6661L4.62917 9.36989L9.16667 13.9074Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const crossIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.75"
    stroke="currentColor"
    className="h-[22px] w-[22px]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const OfferItem = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex text-base text-body-color dark:text-body-color-dark">
      <span className="mr-3">
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p>{text}</p>
    </div>
  );
};

export default OfferItem;
