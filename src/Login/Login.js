import '../Login/Login.css'
import {useState} from "react";
import Home from "../Home/Home";

const states = {
    form: {
        email: '' ,
        password: '' ,
    },
    isValid: false,
    isLoggedIn: false
}


function Login() {

    const [state, setState]  = useState(states)



    const handleEmail = (e) => {
        let email = e.target.value
        if(email !== ''){
            setState({...state, form: {...state.form , email : email }})
        }else{
            setState({...state, form: {...state.form , email : email }})
        }
    }
    const handlePassword = (e) => {
        let password = e.target.value
        if(password !== ''){
            setState({ ...state, form: {...state.form , password :password }})
        }else{
            setState({ ...state, form: {...state.form , password : password }})
        }
    }
    const handleSubmit = () => {
        if (state.form.email !=='' && state.form.password !==''){
            setState({ ...state,isLoggedIn: true})
        }
    }
    const handleLogout = (e) => {
        setState({
                form: {
                    email: '' ,
                    password: '' ,
                },
                isValid: false,
                isLoggedIn: false
            }
        )
    }



    return(
        <>
        { (!state.isLoggedIn) ?
    <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
            <form>
                <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input className="form-control email" type="email" name="email" placeholder="name@example.com" onChange={(e)=> handleEmail(e)} />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input className="form-control password" type="password" name="password" placeholder="Password" onChange={(e)=> handlePassword(e)} />
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox"  /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={()=>{
                    handleSubmit()}
                } >Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div>
    </div>
            :
            <Home
            onClick={handleLogout}
            />
        }
        </>
    )
}
export default Login;