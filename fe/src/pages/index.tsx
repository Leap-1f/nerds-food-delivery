import { Container } from "@mui/material";
import { Signup } from "../components/ui/Signup";
import { LoginModal } from "@/components/Modals";

export default function Home() {
  return (
    <Container>
      <LoginModal></LoginModal>
    </Container>
  );
}
