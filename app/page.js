import Image from "next/image";
import Header from "../component/Header";
import Menu from "../component/Menu";

export default function Home() {
  return (
    <div className="flex m-8 justify-center">
      <Header />
      <div className="mx-5 my-10">
        <Menu />
      </div>
    </div>
  );
}
