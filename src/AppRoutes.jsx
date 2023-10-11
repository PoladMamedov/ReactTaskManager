import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Finished from "./pages/finished/Finished";
import Unfinished from "./pages/unfinished/Unfinished";

export function AppRoutes() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finished" element={<Finished />} />
        <Route path="/unfinished" element={<Unfinished />} />
      </Routes>
    </Container>
  );
}
