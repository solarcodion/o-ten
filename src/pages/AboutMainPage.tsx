import AboutMain from "containers/AboutMain";
import { WithAppbar } from "layouts/WithAppbar";

const AboutMainPage = () => {
  return <AboutMain />;
};

export default WithAppbar(AboutMainPage);
