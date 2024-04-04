import { OrderDetail } from "@/components/layout/OrderDetail";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Address } from "@/components/ui/Address";
import { DisabledByDefault, Info } from "@mui/icons-material";
import { info } from "console";
export default function testing() {
  const [orderStatus, setOrderStatus] = useState({
    status: "Хүлээгдэж байна",
    color: "#0468C8",
  });
  const [infoStatus, setInfoStatus] = useState({
    status: "Хүлээгдэж байна",
    color: "#0468C8",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [con, setCon] = useState(false);
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [apartment, setApartment] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardOrCredit, setCardOrCredit] = useState("");
  function validation() {
    if (
      phoneNumber.length != 8 ||
      district === "" ||
      area === "" ||
      apartment === "" ||
      cardOrCredit === ""
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
      setInfoStatus({ status: "Оруулсан", color: "#18BA51" });
    }
  }
  useEffect(() => {
    validation();
  }, [apartment, area, district, phoneNumber, cardOrCredit]);
  function getStatus() {
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
        gap: "4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Address(
        infoStatus.status,
        infoStatus.color,
        setDistrict,
        district,
        setArea,
        area,
        setApartment,
        apartment,
        setDescription,
        description,
        setPhoneNumber,
        phoneNumber,
        setCardOrCredit,
        cardOrCredit
      )}
      {OrderDetail(orderStatus.status, orderStatus.color, !btnDisabled)}
    </Stack>
  );
}
