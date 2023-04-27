import { atom } from "recoil";

let usersDataFromLocal = "";

if (JSON.parse(localStorage.getItem("users"))) {
  usersDataFromLocal = JSON.parse(localStorage.getItem("users"));
}


export const userData = atom({
  key: "userData",
  default: [
    {
      fname: "Satyadeep",
      lname: "Raj",
      email: "Satyadeepraj@gmail.com",
      password: "Satya123",
    },
    ...usersDataFromLocal,
  ],
});





export const showHome = atom({
  key: "showHome",
  default: false,
});

