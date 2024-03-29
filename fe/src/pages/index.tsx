import { Container } from "@mui/material";
import { Signup } from "../components/ui/Signup";
import { LoginModal } from "@/components/Modals";
import { ErrorModal } from "@/components/Modals";
import { ErrorMessage } from "@/components/Modals";
import { NotFound } from "@/components/ui/NotFound";

export default function Home() {
  return (
    <Container>
      <NotFound></NotFound>
    </Container>
  );
}
