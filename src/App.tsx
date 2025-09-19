import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FundraisrHomepage } from "./screens/FundraisrHomepage/FundraisrHomepage";
import { FundraisrOutreach } from "./routes/FundraisrOutreach/screens/FundraisrOutreach";
import { FundraiserDeal } from "./routes/FundraiserDeal/screens/FundraiserDeal";
import { Fundraiser } from "./routes/Fundraiser/screens/Fundraiser";
import { FundraiserCalendar } from "./routes/FundraiserCalendar/screens/FundraiserCalendar";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FundraisrHomepage />} />
        <Route path="/outreach" element={<FundraisrOutreach />} />
        <Route path="/pipeline" element={<FundraiserDeal />} />
        <Route path="/pipeline-notes" element={<FundraiserDeal />} />
        <Route path="/fundraising-agent" element={<Fundraiser />} />
        <Route path="/calendar" element={<FundraiserCalendar />} />
      </Routes>
    </Router>
  );
};
