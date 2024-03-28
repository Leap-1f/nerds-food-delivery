import { OrderDetail } from "@/components/layout/OrderDetail";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Address } from "@/components/ui/Address";
import { DisabledByDefault } from "@mui/icons-material";
export default function testing() {
  const [orderStatus, setOrderStatus] = useState({
    status: "Хүлээгдэж байна",
    color: "#0468C8",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [con, setCon] = useState(false);
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [apartment, setApartment] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function getStatus() {
    /* Insert backend code here, maybe should run it every 30 seconds or so and make it apply status to stat.*/
    var stat = "WAITING";
    if (stat === "WAITING") {
      setOrderStatus({ status: "Хүлээгдэж байна", color: "#0468C8" });
      setCon(false);
    } else if (stat === "DONE") {
      setOrderStatus({ status: "Дуусan байна", color: "green" });
      setCon(true);
    } else if (stat === "CANCELLED") {
      setOrderStatus({ status: "Цуцлагдсан байна", color: "red" });
      setCon(false);
    } else if (stat === "TIMEDOUT") {
      setOrderStatus({ status: "Хугацаа хэтэрсэн байна", color: "gray" });
      setCon(false);
    }
  }
  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {Address(
        orderStatus.status,
        orderStatus.color,
        setDistrict,
        district,
        setArea,
        area,
        setApartment,
        apartment,
        setDescription,
        description,
        setPhoneNumber,
        phoneNumber
      )}
      {OrderDetail(orderStatus.status, orderStatus.color, !btnDisabled)}
    </Stack>
  );
}
