import useFullPageSlide from "hooks/useFullPageSlide";
import { Outlet } from "react-router-dom";

const urls = ["/about", "/about/main", "/about/benefits", "/about/team"];

const AboutRoute = () => {
  useFullPageSlide(urls);
  return <Outlet />;
};

export default AboutRoute;
