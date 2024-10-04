import { useState } from "react"
export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event){
        event.preventDefault();

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