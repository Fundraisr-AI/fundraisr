import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FundraiserDeal } from "./screens/FundraiserDeal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FundraiserDeal />
  </StrictMode>,
);
