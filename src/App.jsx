import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home/HomePage"));
const Exercise1 = lazy(() => import("./pages/Exercise1/Exercise1"));
const Exercise2 = lazy(() => import("./pages/Exercise2/Exercise2"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
