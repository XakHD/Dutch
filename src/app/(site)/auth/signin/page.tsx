import SignIn from "@/components/Auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In Page - Startup Pro",
  description: "This is Sign In page for Startup Pro",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SigninPage;
