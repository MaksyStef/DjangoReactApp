import { createContext } from "react";

const UserContext = createContext({
  firstName: 'User',
  secondName: 'Anonym'
});

export default UserContext;