import React from "react";
import UserDataContext from "./MyContext";
import MyComponent from "./MyComponent";
import MySetter from "./MySetter";

export default function App() {
  return (
    <UserDataContext>
      <MySetter />
      <MyComponent />
    </UserDataContext>
  );
}
