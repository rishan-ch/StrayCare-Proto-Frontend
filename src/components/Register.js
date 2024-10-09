import axios from "axios";
import { useState } from "react"
import {  useNavigate } from "react-router-dom";

export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        let user = {name, email, password}

        try{
            let res = await axios.post("http://localhost:8080/api/user/add",user)

            if(res.status === 200){
                console.log("success")
                navigate('/login')
            }else{
                console.log("fail "+res.status)
            }

        } catch(error){
            console.log(error)
        }

    }
    return(
            <div className="flex justify-center items-center section-min-height  ">
                <form action="" onSubmit={handleSubmit} className="text-2xl w-1/4 bg-slate-500 p-10 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" onChange={e=> setName(e.target.value)}/>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
    )
}