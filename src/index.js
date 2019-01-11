import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

var config = {
  apiKey: "AIzaSyBlnbhAaL7rEOZAtEXyocWLBvVWG-k17DI",
  authDomain: "vidly-app-001.firebaseapp.com",
  databaseURL: ",",
  projectId: "vidly-app-001",
  storageBucket: "vidly-app-001.appspot.com",
  messagingSenderId: "259059510891"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
