import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Header = () =>{
    return (
        <header className="flex p-7 text-white justify-between h-11">
            <div>
                <h1 className="font-bold text-4xl">
                    MH
                </h1>
            </div>
            <div className="space-x-2 flex">
               <a href="https://www.linkedin.com/in/alexandre-mahumane-5a1b42278">
                    <FaLinkedin size={30}/>
                </a>
               <a href="https://github.com/AlexandreMahumane">
                    <FaGithub size={30}/>
                </a>
            </div>
        </header>
    );
}