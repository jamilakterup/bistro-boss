import {useContext} from "react";
import {FaGoogle} from "react-icons/fa";
import {AuthContext} from "../../../providers/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, {replace: true})
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center mb-6">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;