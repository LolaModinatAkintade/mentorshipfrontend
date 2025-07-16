import React from 'react';
import xios from 'axios';
import { useState} from 'react';


function Login(){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const submit = async (e:React.FormEvent<HTMLFormElement>) =>{

        try  {
        e.preventDefault()
        console.log(email)
        console.log(password)
git 

        }  catch (error)
    }
}
return(
    <div classname="">
        <h1 classname=""> Mentorship Login page</h1>
        <form  classname="" onsubmit={submit}></form>
        <h1 classname="">Login account</h1>
        <div classname="">
            <label htmlFor="email" classname="">Email address</label>
        <input value={email} onchange={(e) => setEmail(e.target.value)}type="email" placeholder="enter your email"/>   
        <div classname="mt-5">
        </div>
        </div>
    </div>
)