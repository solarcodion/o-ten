import useFullPageSlide from "hooks/useFullPageSlide";
import { Outlet } from "react-router-dom";

const slides = ["/sneaker", "/sneaker/intro"];

const SneakerRoute = () => {
  useFullPageSlide(slides);
  return <Outlet />;
};

export default SneakerRoute;
