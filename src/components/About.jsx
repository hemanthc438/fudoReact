import { Outlet } from "react-router-dom";
import {Component} from 'react'
class About extends Component{
    constructor(props){
        super(props)
        this.state={
            user:"name dummy"
        }
    }
    render(){
        return (
            <div className="flex h-screen">
                <h1>ABOUT</h1>
                <Outlet/>
            </div>
        )
    }
}

export default About;