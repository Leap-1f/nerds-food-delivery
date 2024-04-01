
import {FoodCart} from "@/components/ui/FoodCart";
import { InfoCard } from "@/components/ui/InfoCard";
import { Container } from "@mui/material";
import { Signup } from "../components/ui/Signup";
import { LoginModal } from "@/components/Modals";
import { ErrorModal } from "@/components/Modals";
import { ErrorMessage } from "@/components/Modals";
import { NotFound } from "@/components/ui/NotFound";

export default function Home() {
  return (
    <>
      <InfoCard />
      <FoodCart />
    </>
  );
}
