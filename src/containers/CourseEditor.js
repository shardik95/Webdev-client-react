import React from 'react';
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicTabs from "./TopicTabs";
import CourseCard from "../components/CourseCard";

class CourseEditor extends React.Component{

    render(){
        return (
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                    <br/>
                    <TopicTabs/>
                    <br/>
                    <div className="card-deck">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>
        );
    }

}

export default CourseEditor;