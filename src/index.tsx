import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Admin } from "./features/Administrative/presentation/pages";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter basename="/ ">
    <Routes>
      <Route path="/freight-app" element={<App />} />
      <Route
        path="admin"
        element={
          <div>
            <Outlet />
          </div>
        }
      >
        <Route index element={<Admin />} />
        <Route path="entry" element={<div>entry</div>} />
      </Route>
      <Route path="core-1" element={<div>core-1</div>} />
      <Route path="core-2" element={<div>core-2</div>} />
      <Route path="hr-1" element={<div>hr-2</div>} />
      <Route path="hr-2" element={<div>hr-2</div>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
