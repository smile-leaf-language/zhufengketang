import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.less"

export default class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            showList: false
        }
    }

    handleClick = () => {
        this.setState({showList: !this.state.showList})
    }
    getMenuList = ()=>(
        <ul className="menu-list">
            <li data-type=""> 全部课程</li>
            <li data-type="react">React课程</li>
            <li data-type="vue"> Vue课程</li>
        </ul>
    )

    render() {
        /*let menuList={
            <ul className="memu-list">
                    <li> 全部课程</li>
                    <li>React课程</li>
                    <li> Vue课程</li>
                </ul>
        }*/
        return (
            <div className="home-header">
                <div className="home-logo">
                    <img src={require("../../../images/logo.png")}/>
                    <div onClick={this.handleClick}>
                        {
                            this.state.showList ? <i className="iconfont icon-guanbi"></i> :
                                <i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                {
                    //this.state.showList?menuList:null;
                    //this.state.showList&&menuList
                    this.state.showList&&this.getMenuList()
                }

            </div>

        )
    }
}

    // 图片上传服务器后引用外链绝对连接    或者   yarn  add  url-loader