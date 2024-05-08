import { useState } from "react";

const Form = () => {

    const inputClassName = "bg-gray-200 border-2 border-gray-600 text-black w-80 h-10 m-2 p-2 rounded";

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassowrd] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        if(password.length < 6){
            setError('Please enter a valid Password.');
        }
        else{
            setError('');
        }
        console.log(name,email,password);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handlePasswordChang = e =>{
        setPassowrd(e.target.value);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }


    return (
        <div className="text-center my-32">
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} className={inputClassName} type="text" name="name" placeholder="Your Name" />
                <br />
                <input onChange={handleEmailChange} className={inputClassName} type="email" name="email" placeholder="Your Email" />
                <br />
                <input onChange={handlePasswordChang} className={inputClassName} type="password" name="password" placeholder="Password" />
                <br />
                <input className="bg-gray-800 m-2 px-4 py-2 rounded cursor-pointer" type="submit" value="Submit" />
                {
                    error || <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Form;