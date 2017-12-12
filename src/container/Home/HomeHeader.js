import React,{Component} from "react";
import ReactDOM from "react-dom";
import "index.less"

export default class HomeHeader extends Component {
    constructor(){
        super();
        this.state={
            showList:false
        }
    }
    handleClick = ()=>{
        this.setState({showList:!this.state.showList})
    }
    render(){
        return(
            <div className="home-header">
                <div className="home-log">
                    <img src={require("../../../images/logo.png")} />
                    <div onClick={this.handleClick}>
                        {
                            this.state.showList?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// 图片上传服务器后引用外链绝对连接    或者   yarn  add  url-loader