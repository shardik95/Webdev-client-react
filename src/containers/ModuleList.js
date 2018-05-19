import React from 'react';
import ModuleListItem from "../components/ModuleListItem";

class ModuleList extends React.Component{

    constructor(){
        super();
        this.state={
            module:{title:""},
            modules:[
                {title:"Angular",id:123},
                {title:"React",id:456}
            ],

        };
        this.titleChanged=this.titleChanged.bind(this);
        this.createModule=this.createModule.bind(this);
    }

    createModule(){
        console.log(this.state.module);
    }

    titleChanged(event){
        this.setState({module:{title:event.target.value}});
    }

    render(){
        return(
            <div>
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