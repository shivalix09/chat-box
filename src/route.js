import { ChatScreen } from "./Component/ChatScreen/ChatScreen";
import Auth from "./Component/Hoc/Auth";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

const routes = [
  { name: "Login", path: "/login", component: Login, hoc: Auth },
  { name: "Login", path: "/", component: Login, hoc: Auth },
  { name: "Register", path: "/register", component: Register, hoc: Auth },
  { name: "ChatScreen", path: "/chatScreen", component: ChatScreen, hoc: Auth },
];
export default routes;
