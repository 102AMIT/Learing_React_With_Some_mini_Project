import React,{useState} from 'react'
import './form.css'
const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);


    const submitForm = (e)=>{
        e.preventDefault();

        if(email && password){

        const newEntry ={id:new Date().getTime().toString() ,email:email,password:password};

        setAllEntry([...allEntry,newEntry])

        setEmail("");
        setPassword("");
        }else{
            alert("Please fill the form data");
        }
    } 
  return (
        <>
            <form action="" onSubmit={submitForm}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <div className="brand-title">HELLO</div>
                    <div className="inputs">
                        <label htmlFor='email'>EMAIL</label>
                        <input type="email" placeholder="example@test.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor='password'>PASSWORD</label>
                        <input type="password" placeholder="Min 6 charaters long" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit">LOGIN</button>
                    </div>
                </div>
            </form>


            <div className="brand-title1">
                {
                    allEntry.map((current)=>{
                        return (
                            <div key={current.id} className="list">
                            <div>
                                <p>{current.email}</p>

                                <p>{current.password}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </>
  )
}

export default Form