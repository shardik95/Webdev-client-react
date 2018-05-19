import React,{Component} from 'react';
import CourseCard from "../components/CourseCard";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicTabs from "./TopicTabs";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseList from "./CourseList";

class CourseManager extends Component{
    render(){
        return (
            <Router>
            <div className="container-fluid">
                 <h1>Course Manager</h1>
                <div className="row">
                    <div className="col-2">
                        <Route path="/course" component={CourseList}/>
                    </div>
                    <div className="col-10">
                        <Route path='/course/:courseId' component={CourseEditor}/>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default CourseManager;