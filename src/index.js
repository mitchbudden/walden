import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import Article from "./components/article.jsx";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faCamera
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faEnvelope, faCamera);

ReactDOM.render(
  <Provider>
    <Router path="/" history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/:id" component={Article} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
