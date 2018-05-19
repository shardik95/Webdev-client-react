import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../Services/CourseService";

class CourseList extends React.Component{

    constructor(){
        super();
        this.courseService=CourseService.instance;
        this.state={
            course:{title:""},
            courses:[]
        }
        this.titleChanged=this.titleChanged.bind(this);
        this.courseChanged=this.courseChanged.bind(this);
    }

    componentDidMount(){
        this.findAllCourses();
    }

    findAllCourses(){
        return this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    renderAllCourses(){
        return this.state.courses.map(function (course) {
            return <CourseRow course={course} key={course.id}/>
        });
    }

    titleChanged(event){
        this.setState({course:{title:event.target.value}});
    }

    courseChanged() {
        this.courseService.createCourse(this.state.course)
            .then(()=>{
                this.findAllCourses();
            });
    }


    render(){
        return (
            <div>
                <h3>Course List</h3>
            <div className="col-3">
                <table className="table">
                    <thead>
                        <tr><th>Title</th>
                        <th></th></tr>
                        <tr><th>
                            <input type="text" className="form-control" placeholder="CS1100" onChange={this.titleChanged}/></th>
                            <th><button type="button" className="btn btn-primary" onClick={this.courseChanged} >Add</button>
                        </th></tr>
                    </thead>
                    <tbody>
                    {this.renderAllCourses()}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }

}

export default CourseList;