import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Fundraiser } from "./screens/Fundraiser";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Fundraiser />
  </StrictMode>,
);
