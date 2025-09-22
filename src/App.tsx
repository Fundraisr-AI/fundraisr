import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FundraisrHomepage } from "./screens/FundraisrHomepage/FundraisrHomepage";
import { FundraisrOutreach } from "./routes/FundraisrOutreach/screens/FundraisrOutreach";
import { FundraiserDeal } from "./routes/FundraiserDeal/screens/FundraiserDeal";
import { FundraisingAgent } from "./routes/FundraisingAgent/screens/FundraisingAgent";
import { FundraiserCalendar } from "./routes/FundraiserCalendar/screens/FundraiserCalendar";
import { FundraiserDue } from "./routes/FundraiserDue/screens/FundraiserDue";
import { FundraiserDealRoom } from "./routes/FundraiserDealRoom/screens/FundraiserDealRoom";
import { FundraiserNotifications } from "./routes/FundraiserNotifications/screens/FundraiserNotifications";
import { FundraiserSupport } from "./routes/FundraiserSupport/screens/FundraiserSupport";
import { FundraiserSettings } from "./routes/FundraiserSettings/screens/FundraiserSettings";
import { LoadingScreen } from "./components/LoadingScreen";

// Component to handle loading state within Router context
const AppRoutes = (): JSX.Element => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading briefly when path changes
    setIsLoading(true);
    
    // Smooth, natural timing - feels right
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<FundraisrHomepage />} />
        <Route path="/outreach" element={<FundraisrOutreach />} />
        <Route path="/pipeline" element={<FundraiserDeal />} />
        <Route path="/pipeline-notes" element={<FundraiserDeal />} />
        <Route path="/fundraising-agent" element={<FundraisingAgent />} />
        <Route path="/calendar" element={<FundraiserCalendar />} />
        <Route path="/due-diligence" element={<FundraiserDue />} />
        <Route path="/deal-room" element={<FundraiserDealRoom />} />
        <Route path="/notifications" element={<FundraiserNotifications />} />
        <Route path="/support" element={<FundraiserSupport />} />
        <Route path="/settings" element={<FundraiserSettings />} />
      </Routes>
    </>
  );
};

export const App = (): JSX.Element => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
