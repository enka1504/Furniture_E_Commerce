import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Navlinks from "./components/navbar/components/Navlinks";
import Header from "./components/home/components/Header";
import Categories from "./components/home/components/Categories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navlinks/>
      <Header />
      <Categories />
    </div>
  );
}
