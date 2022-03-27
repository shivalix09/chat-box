import React from "react";
import { getToken } from "../../Helper";

const Auth = (ComposedComponet) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isAuthenticated: false };
    }
    componentDidMount() {
      const { history } = this.props;
      const token = getToken();
      if (token) {
        const pathname = history.location.pathname;
        this.setState({ isAuthenticated: true });
        if (pathname === "/" || pathname === "/login") {
          history.push("/chatScreen");
        }
      } else {
        this.setState({ isAuthenticated: false });
        history.push("/login");
      }
    }
    render() {
      return <ComposedComponet {...this.props} />;
    }
  };
};
export default Auth;
