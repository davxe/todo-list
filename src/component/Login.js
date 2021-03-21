import React,{useState} from 'react'
const Login =(props)=>{
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [userNameError,setUserNameError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    //on change of username input field
    const handleChangeUsername=(e)=>{
        setUserName(e.target.value)
        setUserNameError('')
    }
        //on change of password input field
    const handleChangePassword=(e)=>{
        setPassword(e.target.value)
        setPasswordError('')
    }
    //for input validation
    const validation =()=>{
        let userNameError='',passwordError=''
        if(!userName){
            userNameError='*username cannot be empty'
        }
        else if(userName.length<6){
            userNameError='*username must be of 6 char'
        }
        if(!password){
            passwordError='*password cannot be empty'
        }
        else if(password.length<6){
            passwordError='*password shold not less than 6'
        }
        if(userNameError||passwordError){
            setUserNameError(userNameError);
            setPasswordError(passwordError);
            return false
        }
        return true
    }
    //on submit of form
    const handleSubmit=(e)=>{
        e.preventDefault()
        const isValid=validation();
        if(isValid){
            const formData={
                username:userName,
                password:password
            }
            setPassword("");
            setUserName("");
            console.log('login data',formData)
            props.history.push('/todo')
        }
    }
    return(
        <div className='loginContainer'>
            <div className="formContainer">
                <div className="formHeader">
                    <h1 className="loginHeader">Login here</h1>
                </div>
                <div className="userInput">
                    <table>
                        <tr>
                            <th className="label"><label htmlFor='username'>Username</label></th>
                            <td className="input"><input className="field" id='username' type="text" value={userName} onChange={handleChangeUsername}/><div className='usernameError'>{userNameError}</div></td>
                        </tr>
                    </table>
                </div>
                <div className="passwordInput">
                    <table>
                        <tr>
                            <th className="label"><label htmlFor='password'>Password</label></th>
                            <td className="inputp"><input className="field" id='password' type="password" value={password} onChange={handleChangePassword}/><div className='passwordError'>{passwordError}</div></td>
                        </tr>
                    </table>
                </div>
                <div className="button">
                    <table>
                        <tr>
                            <input type='button' className="buttontag" onClick={handleSubmit} value='Login'/>
                        </tr>
                    </table>
                </div>
            </div>    
        </div>
    )
}
export default Login
