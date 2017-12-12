import React,{Component} from "react";
import ReactDOM from "react-dom";
import ReactSwipe from "react-swipe"
import {getSliders} from "../../../../api/home";

export default class HomeSlider extends Component {
    componentDidMount(){
        getSliders().then(sliders=>{
            console.log(sliders)
        })
    }
    render(){
        let swipeOptions = {
            auto:3000,
            continuous:true,
            callback:(index,elem)=>{}
        }
        return(
            <div className="home-sliders">
                <ReactSwipe swipeOptions={swipeOptions}>
                    <div>panel1</div>
                    <div>panel2</div>
                    <div>panel3</div>
                </ReactSwipe>
            </div>
        )
    }
}