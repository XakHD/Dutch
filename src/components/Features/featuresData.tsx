import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
  id: 1,
  icon: (
    <Image className="animate-float1" src="/images/box3.png" alt="Your Icon Description" width="40" height="40" />
  ),
  title: "Free and Open-Source",
  paragraph:
    "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
},
  {
    id: 1,
    icon: (
      <Image src="/images/box3.png" alt="Your Icon Description" width="40" height="40" />
    ),
    title: "Tailored Growth",
    paragraph:
      "Customized strategies and DeFi solutions for startups, designed to navigate the complexities of blockchain with ease and ensure sustainable growth.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/box1.png" alt="Your Icon Description" width="40" height="40" />
     
    ),
    title: "Design Meets Decentralization",
    paragraph:
      "Innovative and high-quality design services fused with the power of decentralized technology, ensuring your platform is both aesthetically pleasing and functionally superior.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/box2.png" alt="Your Icon Description" width="40" height="40" />
    ),
    title: "Customizable DeFi Ecosystems",
    paragraph:
      "Flexible and adaptable DeFi ecosystems that align with your project's unique vision, offering a personalized path to success in the blockchain world.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/box1.png" alt="Your Icon Description" width="40" height="40" />
    ),
    title: "Open Source Collaboration",
    paragraph:
      "Advocating for an open, collaborative DeFi community, we leverage and contribute to open-source software, pushing the boundaries of innovation and collective growth.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/box2.png" alt="Your Icon Description" width="40" height="40" />
    ),
    title: "Transform Your Future with Our Coaching Services",
    paragraph:
      "Discover the power of personalized coaching to unlock your full potential. Our coaching services are designed to cater to your unique needs, offering comprehensive support and guidance. Whether you're looking to advance your career, improve your personal life, or achieve specific goals, our experienced coaches are here to help you succeed. Join us today and start your journey towards a brighter future.",
  },

];
export default featuresData;
