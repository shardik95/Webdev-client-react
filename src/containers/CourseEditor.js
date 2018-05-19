import React from 'react';
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicTabs from "./TopicTabs";
import CourseCard from "../components/CourseCard";

class CourseEditor extends React.Component{

    constructor(props){
        super(props);
        this.state={
            courseId:''
        }
        this.selectCourse=this.selectCourse.bind(this);
    }

    componentDidMount(){
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(id){
        this.setState({courseId:id});
    }

    render(){
        return (
            <div>
                <div>
                <h3>Editing course:{this.state.courseId}</h3>
                <div className="row">
                    <div className="col-2">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-10">
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
                </div>
            </div>
        );
    }

}

export default CourseEditor;