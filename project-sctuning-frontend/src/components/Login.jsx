import { useState } from "react";
import { auth, signInWithEmailAndPassword } from '../utils/firebase';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin();
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;