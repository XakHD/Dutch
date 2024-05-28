import Signup from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page for Dutch Uncle",
  description: "This is Sign Up page for Dutch Uncle",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
