import { useContext } from "react";
import { AppContext } from "../context";

function useApp() {
  const context = useContext(AppContext);
  
  if (!context) {
      throw new Error("The App must be used within a AppProvider")
  }

  return context;
}

export { useApp }