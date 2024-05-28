import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactStyleTwo from "@/components/ContactStyleTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page - Startup Pro",
  description: "This is Contact page for Startup Pro",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <ContactStyleTwo />
    </>
  );
};

export default ContactPage;
