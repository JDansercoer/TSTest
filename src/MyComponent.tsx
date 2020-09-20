import React from "react";
import { useUserData } from "./MyContext";

const MyComponent = () => {
  const [userData] = useUserData();

  if (!userData) {
    return <div>Loading username</div>;
  }

  return <div>{userData.username}</div>;
};

export default MyComponent;
