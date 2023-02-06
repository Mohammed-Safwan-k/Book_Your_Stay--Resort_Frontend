import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "theme";

import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard";
import Login from "scenes/Register/Login";
import Room from "scenes/Room";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route
                path="/home"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/room" element={<Room />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
