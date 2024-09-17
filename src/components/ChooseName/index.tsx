import { SetStateAction, useState } from "react";

type ChooseNameProps = {
    updateName: (name: string | null) => void
}

const ChooseName = ({ updateName }:ChooseNameProps) => {
    const [name , setName] = useState<string | null>("string")

    const handleChange = (e: { target: { value: SetStateAction<string | null>; }; }) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        updateName(name)
    }

    return (
        <div className="">
            <label htmlFor="name">Enter your name</label>
            <input onChange={handleChange} className="mx-2" placeholder="Enter your name here" type="text" id="name" />
            <button onClick={handleClick} className="bg-blue-500 py-1 px-3 rounded text-white font-bold">Add name</button>
        </div>
    )
};

export default ChooseName
