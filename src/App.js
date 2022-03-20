import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatScreen } from "./Component/ChatScreen/ChatScreen";
import Auth from "./Component/Hoc/Auth";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import routes from "./route";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={<Auth>{route.element}</Auth>}
              />
            );
          })}      
          <Route path="/login" element={<Auth><Login /></Auth>} />
          <Route path="/register" element={<Auth><Register /></Auth>} />
          <Route path="/chatScreen" element={<Auth><ChatScreen /></Auth>} /> 
          <Route />
        </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
