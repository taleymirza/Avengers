import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
}
