import FullPageNav from "components/FullPageNav";
import useFullPageSlide from "hooks/useFullPageSlide";
import useStore from "hooks/useStore";
import { Outlet } from "react-router-dom";

const urls = [
  "/sneaker",
  "/sneaker/intro",
  "/sneaker/more",
  "/sneaker/gallery",
  "/sneaker/desc",
];

const SneakerRoute = () => {
  const { store } = useStore();
  useFullPageSlide(urls);
  return (
    <>
      <FullPageNav urls={urls} horizontal={store.isTablet} />
      <Outlet />
    </>
  );
};

export default SneakerRoute;
