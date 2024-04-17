import React from "react";
import Home from "./components/home";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import FourthSection from "./components/fourthSection";
import FifthSection from "./components/fifthSection";
import AskedQuestion from "./components/askedQuestion";
import Footer from "./components/footer";
const Page = () => {
  return (
    <>
      <Home />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <AskedQuestion />
      <Footer />
    </>
  );
};

export default Page;
