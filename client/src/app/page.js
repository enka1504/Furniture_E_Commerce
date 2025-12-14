import Image from "next/image";
import Navbar from "./components/navbar/Header";
import Navlinks from "./components/navbar/components/Navlinks";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navlinks/>
    </div>
  );
}
