import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { MyPage } from "./pages/MyPage";
import { Upload } from "./pages/Upload";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";
import { Layout } from "./components/layout/layout";
import { Course } from "./pages/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MYPAGE} element={<MyPage />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.UPLOAD} element={<Upload />} />
        <Route path={ROUTES.COURSE} element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
