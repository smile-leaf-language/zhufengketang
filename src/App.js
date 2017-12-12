import React,{Component} from "react";
import Tab from "./components/Tab/index";
import {HashRouter as Router,Route} from "react-router-dom";
import "./style/comm.less"
import Home from "./container/Home";
import Course from "./container/Course";
import Profile from "./container/Profile";

export default class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/course" component={Course}/>
                    <Route path="/profile" component={Profile}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}
/*
* import {Router} from "react-router-dom"
* Router里面也有history的实现  但是需要外面传入
*
* */