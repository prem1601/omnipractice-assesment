import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainRouter = () => {
  return (
    <>
      <Header />
      <div className="px-6 py-3">
        <Outlet />
      </div>
    </>
  );
};

export default MainRouter;
