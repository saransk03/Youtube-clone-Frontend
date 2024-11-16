import { createContext, useEffect, useState } from "react";

export const MenuToggle = createContext();

const MenuToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFunction = () => {
    setToggle(!toggle);
    console.log("toggle function");
  };

  return (
    <MenuToggle.Provider value={{ toggle, toggleFunction }}>
      {children}
    </MenuToggle.Provider>
  );
};
export default MenuToggleProvider;
