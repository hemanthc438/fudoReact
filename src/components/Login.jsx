import { useState } from "react";
const Login = () =>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className="flex h-svh">
            <div className="flex flex-col p-10 h-50 mx-auto">
                <h1 className="text-3xl p-3 font-bold text-center text-orange-600">LOGIN</h1>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e=>{setEmail(e.target.value)}}
                    className="h-10 m-3 p-2 bg-white rounded border border-neutral-300"
                ></input>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e=>{setPassword(e.target.value)}}
                    className="h-10 m-3 p-2 bg-white rounded border border-neutral-300"
                ></input>
            </div>
        </div>
    )
}

export default Login;