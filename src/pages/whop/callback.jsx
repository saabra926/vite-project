import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WhopCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");
        if (code) {
            console.log("Received code:", code);
        }
        navigate("/");
    }, []);

    return <div>Processing login...</div>;
}
