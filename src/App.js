import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Destination from "./DestinationPage/Destination";
import Crew from "./CrewPage/Crew";
import Tech from "./TechnologyPage/Tech";


function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="tech" element={<Tech />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
