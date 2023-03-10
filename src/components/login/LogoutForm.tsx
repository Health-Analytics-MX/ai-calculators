import { FormEvent, useEffect, useState } from "react";
import { useSession } from "./hooks/useSession";
import { Locked } from "./components/Locked"
import type { User } from "./auth/cookies";
import type { AuthFlowFormProps } from "./AuthFlow";
import LoginButton from "./components/LoginButton";

/** Provide a logout button and current user information. */
const LogoutForm = ({setForm}: AuthFlowFormProps) => {
    const { setSession, getSession } = useSession();
    const [ user, setUser ] = useState<User | undefined | null>(undefined);
    
    useEffect(() => {
        getSession()
        .then(session => setUser(session.user))
        .catch(() => setUser(null))
    }, [])
    
    /** Remove session data and set form to login */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setSession(undefined);
        setForm('login');
        window.location.href = window.location.pathname;
    }
    return (
      <form
        onSubmit={handleSubmit}
        className={"container border p-5 rounded-1"}
        style={{width:"20em"}}
      >
        <h4 
          className={"mb-2 text-center"}
        >User Info
        </h4>
        <p className={"form-text text-center"}>Current user information</p>
          <Locked
            name="Username"
            value={(user && user.username !== 'undefined') ? user?.username : ''}
          />
          <Locked
            name="Full Name"
            value={(user && user.name !== 'undefined') ? user?.name : ''}
          />
        <div className={"d-flex justify-content-center pt-2"}>
          <LoginButton>Logout</LoginButton>
        </div>
      </form>
    )
}

export default LogoutForm