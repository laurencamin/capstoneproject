import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm.js"

export default function AuthPage ({ setUser }) {
    return (
        <>
         <h1>Welcome to ConnectedCorps!</h1>
         <SignUpForm setUser={setUser} />
         <LoginForm setUser={setUser} />
        </>
    );
}

