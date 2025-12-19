import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Exams } from "./components/Exams";
import { Login } from "./components/Login";
import { Tules } from "./components/Tules";
import { Theory } from "./components/Theory";
import { Account } from "./components/Account";
import { MainLayout } from "./components/MainLayout";

function App() {
  const isLogged = true;

  if (!isLogged) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Exams />} />
          <Route path="/tules" element={<Tules />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
