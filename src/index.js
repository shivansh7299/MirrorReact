import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const layoutConfig = require("./modules.config.json");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

layoutConfig.top_left.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("top-left")
  );
});

layoutConfig.top_center.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("top-center")
  );
});

layoutConfig.top_right.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("top-right")
  );
});

layoutConfig.main_left.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("main-left")
  );
});

layoutConfig.main_center.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("main-center")
  );
});

layoutConfig.main_right.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("main-right")
  );
});

layoutConfig.bottom_left.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("bottom-left")
  );
});

layoutConfig.bottom_center.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("bottom-center")
  );
});

layoutConfig.bottom_right.forEach((moduleName) => {
  const Module = require(`./modules/${moduleName}/${moduleName}`).default;
  const config = require(`./modules/${moduleName}/${moduleName}.config`);
  ReactDOM.render(
    <Module config={config} />,
    document.getElementById("bottom-right")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
