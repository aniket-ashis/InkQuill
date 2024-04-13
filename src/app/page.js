import CardList from "@/components/CardList";
import CatagoryList from "@/components/CatagoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" p-6">
      <Featured />
      <CatagoryList />
      <div className="flex p-2">
        <CardList />
        <div className="ml-3">
          <Menu />
          {/* <CatagoryList/> */}
        </div>
      </div>
    </div>
  );
}
