import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter
  // basename="/wolt-calculator"
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
      <ToastContainer />
    </LocalizationProvider>
  </BrowserRouter>
);
