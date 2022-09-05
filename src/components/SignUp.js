import React, { useRef } from 'react';
import { auth } from '../utils/firebase.config.js';

const SignUp = () => {
    const registerEmail = useRef();
    const registerPassword = useRef();

    const handleRegister = (e) =>{
        console.log(e);
        e.preventDefault();
        try {
            console.log("###################")
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value, 
                registerPassword.current.value);
        } catch (error) {
            console.log(error.message());
        }
        
    }


    return (
        <div className='signup-container'>
            <div className="signup">
                <h3>S'inscrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input type="text" id="pseudo" required placeholder='Pseudo' />
                    <input type='email' id="email" required placeholder='email' ref={registerEmail} />
                    <input type='password' id="password" required placeholder='mot de passe' ref={registerPassword} />
                    <input type="submit" value="Valider"/>
                </form>
            </div>
        </div>
    );
};

export default SignUp;