import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Navlinks from "./components/navbar/components/Navlinks";
import Header from "./components/home/components/Header";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navlinks/>
      <Header />
      <div>
        Here new section
      </div>
    </div>
  );
}
