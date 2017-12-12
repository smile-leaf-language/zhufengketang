import React,{Component} from "react";
import ReactDOM from "react-dom";
import HomeHeader from "./HomeHeader/index";
import "./index.less"
import HomeSlider from "./HomeHeader/HomeSlider/index";

export default class Home extends Component {
    render(){
        return(
            <div className="home">
                <HomeHeader/>
                <div className="main-content">
                    <HomeSlider/>
                </div>
            </div>
        )
    }
}