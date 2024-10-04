import axios from "axios";
import { useState } from "react"
export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event){
        event.preventDefault();
        let user = {name, email, password}

        try{
            let res = await axios.post("http://localhost:8080/api/addUser",user)

            if(res.status === 200){
                console.log("success")
            }else{
                console.log("fail "+res.status)
            }

        } catch(error){
            console.log(error)
        }

    }
    return(
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" onChange={e=> setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}