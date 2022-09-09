import React, { useRef } from 'react';
import { useState } from 'react';
import { auth } from '../utils/firebase.config';

const SignUp = () => {
    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setdisplayName] = useState("");

    const handleRegister = (e) =>{
        e.preventDefault();
        try {
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value, 
                registerPassword.current.value)
                .then(async (userAuth) => {
                    await userAuth.user.updateProfile({
                        displayName
                    })
                })
                
        } catch (error) {
            console.log(error.message());
        }
        
    }

    return (
        <div className='signup-container'>
            <div className="signup">
                <h3>S'inscrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input type="text" id="pseudo" required placeholder='Pseudo' onChange={(e)=> {setdisplayName(e.target.value)}}/>
                    <input type='email' id="email" required placeholder='email' ref={registerEmail} />
                    <input type='password' id="password" required placeholder='mot de passe' ref={registerPassword} />
                    <input type="submit" value="Valider"/> 
                </form>
            </div>
        </div>
    );
};

export default SignUp;