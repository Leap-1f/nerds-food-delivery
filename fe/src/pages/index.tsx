import { FoodCart, InfoCard } from "@/components/ui/index";
import Menu from "./menu";
import { Banner } from "@/components/layout/Banner"; 

export default function Home() {
  return (
    <>
    <Banner/>
      <InfoCard />
      <FoodCart/>
    </>
  );
}