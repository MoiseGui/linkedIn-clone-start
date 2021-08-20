import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice'
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")

    const dispatch = useDispatch();

    const register = () => {
        if(!(name && email && password)){
            return alert("Full name, email and Password are required");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl
            }).then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: photoUrl,
            }));
        })
        }).catch(error => alert(error))
    };
    const loginToApp = (e) => {
        e.preventDefault();
        if(!(email && password)){
            return alert("Email and Password are required");
        }
        console.log(email, password)
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input type="text"
                 placeholder="Full name (required if registering)"
                 value={name}
                 onChange={e => setName(e.target.value)}
                />
                <input type="text"
                 placeholder="Profile pic URL (optional)"
                 value={photoUrl}
                 onChange={e => setPhotoUrl(e.target.value)}
                />
                <input type="email"
                 placeholder="Email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                />
                <input type="password" 
                 placeholder="Password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
                <p>Not a member ?
                    <span className='login__register' onClick={register}> Register now</span>
                </p>
            </form>
        </div>
    )
}

export default Login
