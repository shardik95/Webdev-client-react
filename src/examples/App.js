import React from 'react';
import Hello from "../components/Hello";
import {BrowserRouter as Router, Link, Route} from  'react-router-dom';
import HelloWorld from "../HelloWorld";

const Page1 = () => {
    return(<h2>Page 1</h2>)
};

const Page2 = () => {
    return(<h2>Page 2</h2>)
};

const pageParam = ({match}) => {
    return <h1>{match.params.id}</h1>
}

class PageUpdate extends React.Component{

    constructor(props){
        super(props);
        this.state={
          id : ''
        };
        this.updateId=this.updateId.bind(this);
    }

    componentDidMount(){
        this.updateId(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps){
            this.updateId(newProps.match.params.id);
    }

    render(){
        return (
            <h1>{this.state.id}</h1>
        );
    }

    updateId(id){
        this.setState({id:id});
    }



}

const App = () => {
    return (
        <Router>
            <div>
                <Link to="/hello">Hello</Link>|
                <Link to="/page1">Page1</Link>|
                <Link to="/page2">Page2</Link>|
                <Link to="/pageParam/123">Page123</Link>|
                <Link to="/pageParam/456">Page456</Link>|
                <Link to="/pageUpdate/345">
                    PageUpdate 345</Link>|
                <Link to="/pageUpdate/456">
                    PageUpdate 456</Link>
                <Route path="/hello" component={HelloWorld}></Route>
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
                <Route path="/pageParam/:id" component={pageParam}></Route>
                <Route path='/pageUpdate/:id' component={PageUpdate}/>
            </div>
        </Router>
    );
};

export default App;