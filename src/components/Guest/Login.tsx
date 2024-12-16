import {useState} from "react";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = () => {
        // TODO handleClickLogin
        alert('Sign in');
    }

    const handlClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <label>Login:
                <input
                    type="text"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button onClick={handleClickLogin}>Sign in</button>
            <button onClick={handlClickClear}>Clear</button>
        </>
    );
};

export default Login;