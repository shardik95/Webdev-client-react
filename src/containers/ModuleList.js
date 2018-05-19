import React from 'react';
import ModuleListItem from "../components/ModuleListItem";
import ModuleService from "../Services/ModuleService";

class ModuleList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            module:{title:""},
            modules:[],
            courseId:''
        };
        this.titleChanged=this.titleChanged.bind(this);
        this.createModule=this.createModule.bind(this);
        this.setCourseId=this.setCourseId.bind(this);
        this.moduleService=ModuleService.instance;
    }

    setCourseId(courseId){
        this.setState({courseId:courseId});
    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }


    setModules(modules) {
        this.setState({modules: modules})
    }


    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)

    }

    createModule(){
        this.moduleService.createModule(this.state.courseId,this.state.module)
            .then(() => {
            this.findAllModulesForCourse
            (this.state.courseId);
        });
    }

    titleChanged(event){
        this.setState({module:{title:event.target.value}});
    }

    render(){
        return(
            <div>
                <h3>{this.state.courseId}</h3>
                <input type="text" placeholder="Module" className="form-control" onChange={this.titleChanged} value={this.state.module.title}/>
                <button className="btn btn-primary btn-block" onClick={this.createModule}><i className="fa fa-plus"></i></button>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }

    renderListOfModules(){

         let moduleList = this.state.modules.map(function (module) {
             return <ModuleListItem title={module.title} key={module.id}/>
         })

        return moduleList;
    }


}

export default ModuleList;