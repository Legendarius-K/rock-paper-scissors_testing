'use client'

import ChooseName from "@/components/ChooseName";
import SelectionPanel from "@/components/SelectionPanel";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState<string | null>(null)
  const [weapon, setWeapon] = useState<string | null>(null)
  const [botWeapon, setBotWeapon] = useState<string | null>(null)


  useEffect(() => {
    const weapons = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * weapons.length)
    setBotWeapon(weapons[randomIndex])

    if (weapon) {
      if (weapon === "Rock" && botWeapon === "Rock" || weapon === "Paper" && botWeapon === "Paper" || weapon === "Scissors" && botWeapon === "Scissors") {
        console.log("TIE");
      } else if (weapon === "Rock" && botWeapon === "Scissors" || weapon === "Paper" && botWeapon === "Rock" || weapon === "Scissors" && botWeapon === "Paper") {
        console.log("HUMAN WINS");
      } else {
        console.log("BOT WINS");
      }
    }
    setWeapon(null)
  }, [weapon])

  return (
    <main className="h-screen flex justify-center items-center">
      {!name && <ChooseName updateName={setName} />}
      {name && <SelectionPanel onSelect={setWeapon} />}
    </main>
  );
}
