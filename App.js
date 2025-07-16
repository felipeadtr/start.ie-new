
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Housing from "./Housing";
import Jobs from "./Jobs";
import Tutorials from "./Tutorials";
import Schools from "./Schools";
import Services from "./Services";
import VisaBenefits from "./VisaBenefits";
import JourneyProgress from "./JourneyProgress";
import Experiences from "./Experiences";
import SocialGroups from "./SocialGroups";
import Activities from "./Activities";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/services" element={<Services />} />
        <Route path="/visa-benefits" element={<VisaBenefits />} />
        <Route path="/journey-progress" element={<JourneyProgress />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/social-groups" element={<SocialGroups />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
}
