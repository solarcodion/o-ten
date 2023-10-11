import Teams from "containers/Teams";
import { WithAppbar } from "layouts/WithAppbar";

const TeamsPage = () => {
  return <Teams />;
};

export default WithAppbar(TeamsPage);
