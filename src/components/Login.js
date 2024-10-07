import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userLogged, setUserLogged] = useState(true)
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault();
        try {
            let res = await axios.post("http://localhost:8080/api/user/login",{email,password})

            if(res.status===200){
                console.log(res.data);
                navigate("/")
            }else{
                // navigate("/login")
                setUserLogged(false);
            }
        } catch (error) {
            console.log('Login error:', error);
            setUserLogged(false);
            navigate('/login')
        }
    }


    return(
            <div className="flex justify-center items-center section-min-height  ">
                <form action="" onSubmit={handleSubmit} className="text-2xl w-1/4 bg-slate-500 p-10 flex flex-col gap-10">

                    <div className="flex justify-between">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                    {
                    !userLogged && (
                        <p className="text-red-700">The user credentials did not match.</p>
                    )
                    }
                </form>
            </div>
    )
}