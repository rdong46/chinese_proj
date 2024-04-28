import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chicken from "./Chicken";
import Milk from "./Milk";
import KungPo from "./KungPo";
import Fish from "./Fish";
import Rice from "./Rice";
import Boba from "./Boba";
import Melon from "./Melon";
import Zong from "./Zong";
import Bean from "./Bean";
import Onion from "./Onion";
import Celery from "./Celery";
import Noodle from "./Noodle";
import Tofu from "./Tofu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Chicken />} />
        <Route path="/2" element={<Bean />} />
        <Route path="/3" element={<Fish />} />
        <Route path="/4" element={<Noodle />} />
        <Route path="/5" element={<Tofu />} />
        <Route path="/6" element={<Celery />} />
        <Route path="/7" element={<Rice />} />
        <Route path="/8" element={<Onion />} />
        <Route path="/9" element={<Zong />} />
        <Route path="/10" element={<KungPo />} />
        <Route path="/11" element={<Melon />} />
        <Route path="/12" element={<Milk />} />
        <Route path="/13" element={<Boba />} />
      </Routes>
    </BrowserRouter>
  );
}
