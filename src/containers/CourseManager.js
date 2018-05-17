import React,{Component} from 'react';
import CourseCard from "../components/CourseCard";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicTabs from "./TopicTabs";
import CourseEditor from "./CourseEditor";

class CourseManager extends Component{
    render(){
        return (
            <div className="container-fluid">
                 <h1>Course Manager</h1>
                <CourseEditor/>
            </div>
        );
    }
}

export default CourseManager;