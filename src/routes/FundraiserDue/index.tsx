import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FundraiserDue } from "./screens/FundraiserDue";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FundraiserDue />
  </StrictMode>,
);
