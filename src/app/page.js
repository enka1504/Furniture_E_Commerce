import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Navlinks from "./components/navbar/components/Navlinks";
import Header from "./components/home/components/Header";
import Categories from "./components/home/components/Categories";
import BestModernSec from "./components/home/components/BestModernSec";
import { Suspense } from "react";
import PageLoader from "./utils/loaders/loading.js";
import Blogs from "./components/home/components/Blogs";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<PageLoader />}>
      <Navbar />
      <Navlinks/>
      <Header />
      <Categories />
      <BestModernSec />
      <Blogs />
      </Suspense>
    </div>
  );
}
