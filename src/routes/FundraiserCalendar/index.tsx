import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FundraiserCalendar } from "./screens/FundraiserCalendar";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FundraiserCalendar />
  </StrictMode>,
);
