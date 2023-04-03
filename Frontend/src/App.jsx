import React, { useState, createContext, useReducer, useContext } from "react";
import Home from "./Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Home/Components/Services";
import Admin from "./Admin/Screens/Admin";
import ASignin from "./Admin/Screens/Asignin";
import PSignin from "./Professional/Screens/Psignin";
import PSignup from "./Professional/Screens/Psignup";
import CSignin from "./Consumer/Screens/Csignin";
import CSignup from "./Consumer/Screens/Csignup";
import Professional from "./Professional/Screens/Professional";
import Consumer from "./Consumer/Screens/Consumer";
import Meet from "./Meet/Meet"
import { initialState,reducer } from "./Reducer/Usered";

export const UserContext = createContext();
// const {state, dispatch} = useContext(UserContext)

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Home />} />
          <Route path="/adminsignin" element={<ASignin />} />
          <Route path="/professionalsignin" element={<PSignin />} />
          <Route path="/professionalsignup" element={<PSignup />} />
          <Route path="/consumersignin" element={<CSignin />} />
          <Route path="/consumersignup" element={<CSignup />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/consumer/*" element={<Consumer />} />
          <Route path="/professional/*" element={<Professional />} />
          <Route path="/meet/:meetId" element={<Meet />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
