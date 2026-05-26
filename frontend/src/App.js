import React, { useState, createContext } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CandidateForm from "./pages/CandidateForm";

import FormFilled from "./pages/FormFilled";


export const ThemeContext = createContext();

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >

      <div className={darkMode ? "dark" : ""}>

        <BrowserRouter>

          <Routes>

            <Route
              path="/"
              element={<CandidateForm />}
            />

            <Route
              path="/form_filled"
              element={<FormFilled />}
            />

          </Routes>

        </BrowserRouter>

      </div>

    </ThemeContext.Provider>
  );
}

export default App;