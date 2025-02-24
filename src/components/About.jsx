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
            <div className="flex m-10">
                <Outlet/>
            </div>
        )
    }
}

export default About;