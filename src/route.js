import { ChatScreen } from "./Component/ChatScreen/ChatScreen";
// import Auth from "./Component/Hoc/Auth";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

const routes = [
  { name: "Login", path: "/login", element: <Login /> },
  { name: "Register", path: "/register", element: <Register /> },
  { name: "ChatScreen", path: "/chatScreen", element: <ChatScreen /> },
];
export default routes;
