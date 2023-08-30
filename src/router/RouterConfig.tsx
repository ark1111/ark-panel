import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard";

type Props = {};

const RouterConfig = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default RouterConfig;
