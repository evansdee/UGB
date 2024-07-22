import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CheckContext } from "./useSome";

export function usePathLocation() {
  const { setCheck } = useContext(CheckContext);

  const location = useLocation();

  useEffect(() => {
    const checkPaths = [
      "/rooms/first-rooms/",
      "/rooms/modern-rooms/",
      "/rooms/luxurious-rooms/",
    ];
    // You can adjust the path check here to handle more complex logic if needed
    if (location.pathname.endsWith("booking")) {
      setCheck("none");
    } else if (checkPaths.some((path) => location.pathname.startsWith(path))) {
      // if (location.pathname.startsWith("/rooms/modern-rooms/" || "/rooms/luxurious-rooms/")) {
      setCheck("all");
    } else {
      setCheck(null);
    }
  }, [location, setCheck]);

  return { location };
}
