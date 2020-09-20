import React, { createContext, useState, useContext } from "react";

interface UserData {
  username: string;
}

const UDContext = createContext<
  | undefined
  | [
      UserData | undefined,
      React.Dispatch<React.SetStateAction<UserData | undefined>>
    ]
>(undefined);

const UserDataContext: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserData>();

  return (
    <UDContext.Provider value={[userData, setUserData]}>
      {children}
    </UDContext.Provider>
  );
};

export default UserDataContext;

export const useUserData = () => {
  const userData = useContext(UDContext);

  return userData;
  // This only works if we explicitely type the returned valued.
  //   return userData as [
  //     UserData | undefined,
  //     React.Dispatch<React.SetStateAction<UserData | undefined>>
  //   ];
};
