import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "theme";

import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard";
import Login from "scenes/Register/Login";
import Register from "scenes/Register/Register";
import Rooms from "scenes/Room";
import SingleRoom from "scenes/SingleRoom";
import AddRoom from "scenes/AddRoom";
import PageNotFound from "scenes/PageNotFound";

function App() {
  const [theme, colorMode] = useMode();
  const value = JSON.parse(localStorage.getItem("resortProfile"));

  return (
    <div className="app">
      {value?.token ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route element={<Layout />}>
                <Route
                  path="/home"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/room" element={<Rooms />} />
                <Route path="/singleroom" element={<SingleRoom />} />
                <Route path="/addroom" element={<AddRoom />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    </div>
  );
}

export default App;
