import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./HelloWorld";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from "./containers/CourseManager";
import Hello from "./components/Hello";
import Stateless from "./components/Stateless";
import App from "./examples/App";

ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);