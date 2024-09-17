'use client'

import ChooseName from "@/components/ChooseName";
import DisplayResult from "@/components/DisplayResult";
import ResetButton from "@/components/ResetButton";
import ScoreBoard from "@/components/ScoreBoard";
import SelectionPanel from "@/components/SelectionPanel";
import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState<string | null>(null)
    const [weapon, setWeapon] = useState<string | null>(null)
    const [botWeapon, setBotWeapon] = useState<string | null>(null)
    const [computerScore, setComputerScore] = useState<number>(0)
    const [playerScore, setPlayerScore] = useState<number>(0)
    const [result, setResult] = useState<string | null>(null)
    const [triggerEffect , setTriggerEffect] = useState<boolean>(false)

    const handleClick = (weapon: string) => {
        setWeapon(weapon)
        
        const weapons = ["Rock", "Paper", "Scissors"]
        const randomIndex = Math.floor(Math.random() * weapons.length)
        setBotWeapon(null)
        setBotWeapon(weapons[randomIndex])
        setTriggerEffect(!triggerEffect)
    }

    useEffect(() => {
        if (weapon && botWeapon) {
            if (weapon === "Rock" && botWeapon === "Rock" || weapon === "Paper" && botWeapon === "Paper" || weapon === "Scissors" && botWeapon === "Scissors") {
                console.log("TIE");
                setResult("It's a tie!")
            } else if (weapon === "Rock" && botWeapon === "Scissors" || weapon === "Paper" && botWeapon === "Rock" || weapon === "Scissors" && botWeapon === "Paper") {
                console.log("HUMAN WINS");
                setPlayerScore(playerScore + 1)
                setResult("You winnn!")
            } else if (weapon === "Rock" && botWeapon === "Paper" || weapon === "Paper" && botWeapon === "Scissors" || weapon === "Scissors" && botWeapon === "Rock") {
                console.log("BOT WINS");
                setComputerScore(computerScore + 1)
                setResult("Stupid bot computer wins!")
            }
        }
    }, [triggerEffect])

    const resetGame = () => {
        setWeapon(null)
        setBotWeapon(null)
        setComputerScore(0)
        setPlayerScore(0)
        setResult(null)
    }

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            {!name && <ChooseName updateName={setName} />}
            {name &&
                <>
                    <h1 className="my-10">Welcome, {name}!</h1>
                    <SelectionPanel onSelect={handleClick} />
                    <DisplayResult playerChoice={weapon} computerChoice={botWeapon} result={result} />
                    <ScoreBoard userName={name} playerScore={playerScore} computerScore={computerScore} />
                    <ResetButton onReset={resetGame} />
                </>
            }
        </main>
    );
}
