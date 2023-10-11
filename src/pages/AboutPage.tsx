import AboutIntro from "containers/AboutIntro";
import { WithAppbar } from "layouts/WithAppbar";

const AboutPage = () => {
  return <AboutIntro />;
};

export default WithAppbar(AboutPage);
