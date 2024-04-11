import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

export default function Login() {
    const usernameRef = useRef();
    const ref = collection(firestore, "users");

    const handleClick = async (event) => {
        event.preventDefault();
        console.log(usernameRef.current.value);

        let data = {
            username: usernameRef.current.value,
        };

        try {
            addDoc(ref, data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" ref={usernameRef} />
                <button type="submit">Test</button>
            </form>
        </div>
    )
}