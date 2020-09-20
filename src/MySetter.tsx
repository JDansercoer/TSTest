import { useEffect } from "react";
import { useUserData } from "./MyContext";

const MySetter = () => {
  const [, setUserData] = useUserData();

  // Fakes an API call
  useEffect(() => {
    setTimeout(() => {
      setUserData({ username: "FooBar" });
    }, 750);
  });

  return null;
};

export default MySetter;
