import { OrderDetail } from "@/components/layout/OrderDetail";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Address } from "@/components/ui/Address";
export default function testing() {
  const [orderStatus, setOrderStatus] = useState({
    status: "Хүлээгдэж байна",
    color: "#0468C8",
  });
  const [infoStatus, setInfoStatus] = useState({
    status: "Хүлээгдэж байна",
    color: "#0468C8",
  });
  const [cart, setCart] = useState([{}]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [con, setCon] = useState(false);
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [apartment, setApartment] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [cardOrCredit, setCardOrCredit] = useState("");
  async function sendOrder() {
    const sendOrder = await fetch("http://localhost:8080/order/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({uId: localStorage.getItem("jwt"), fId: }),
    });
  }
    function getTotal() {
    let total = 0;
    cart.forEach((obj) => {
      total += obj.price;
    });
    setTotalPrice(total);
  }
  async function getCart() {
    // add cart
  }
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
