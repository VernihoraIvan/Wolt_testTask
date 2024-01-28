import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./utilities/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter
  // basename="/wolt-calculator"
  >
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
        <ToastContainer />
      </LocalizationProvider>
    </ThemeProvider>
  </BrowserRouter>
);
