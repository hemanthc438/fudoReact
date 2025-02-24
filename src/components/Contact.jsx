import React from 'react'

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data : {},
            count:0 ,
            int : setInterval(()=>{
                console.log("seconds")
            },1000),
        }
        
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/hemanthc438")
        const json = await data.json()
        this.setState({
            data:json
        })
        
    }
    componentDidUpdate(){
        console.log("count:",this.state.count)
    }
    componentWillUnmount(){
        clearInterval(this.state.int)
    }
    render(){
        const {count,data} = this.state
        return (
        <div className='flex flex-col'>
            <img className='w-50 h-50 rounded-full' src={data?.avatar_url}/>
            <p>{data?.name}</p>
            <button onClick={()=>{
                this.setState({
                    count:count+1
                })
            }}>{count}</button>
        </div>)
    }
}
export default Contact;