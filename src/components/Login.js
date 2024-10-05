import axios from "axios";
import { useState } from "react"
export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event){
        event.preventDefault();

        let res = await axios.post("http://localhost:8080/api/user/login",{email,password})

        if(res.status===200){
            console.log(res.data);
        }

    }


    return(
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}