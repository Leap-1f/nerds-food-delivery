import {
  Apartment,
  DoNotDisturbOnTotalSilenceTwoTone,
} from "@mui/icons-material";
import { UserCircleDashed } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
// create order. mainly for use i nthe order section. hooking up everything may take a little while.
async function createOrder() {
  const createOrder = await fetch("http://localhost:8080/order/create", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //   uId: userId,
      //   fId: foodId,
      //   totalPrice: totalPrice,
      //   district: district,
      //   khoroo: area,
      //   apartment: Apartment,
    }),
  });
}
// edit Order, mainly used to change the state of the order. Not sure if I should add the "Paid" and "Not-Paid"
async function editOrder() {
  const editOrder = await fetch("http://localhost:8080/order/edit", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // state: state,
    }),
  });
}
// delete order, used with the dropdown on every order. Maybe add confirmation modal. Remember to set the usestate Id and then call this function or it will not work.
async function deleteOrder() {
  const deleteOrder = await fetch("http://localhost:8080/order/delete", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //   id: oId,
    }),
  });
}
// Get Orders, It gets all orders and then you can use those orders how ever you would like. I think i'll add a universal type of code we can take from -- Danz.
async function getOrders() {
  const getOrders = await fetch("http://localhost:8080/order/get", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      //add where to add orders. Usestate preferable.
    });
}
