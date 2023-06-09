import { Route, Routes } from "react-router-dom";
import Counter from "../components/contents/counter";
import { Home } from "../pages";

export const RoutesManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};
