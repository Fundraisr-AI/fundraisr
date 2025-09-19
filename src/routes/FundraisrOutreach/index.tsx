import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FundraisrOutreach } from "./screens/FundraisrOutreach";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FundraisrOutreach />
  </StrictMode>,
);
