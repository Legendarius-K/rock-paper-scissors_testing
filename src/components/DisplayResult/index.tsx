type DisplayResultProps = {
    playerChoice: string | null
    computerChoice: string | null
    result: string | null
}

const DisplayResult = ({ playerChoice, computerChoice, result }: DisplayResultProps) => {
    console.log(playerChoice);
    return (
        <>
            {!result && <p className="my-10">Choose Rock, Paper or Scissors!</p>}
            {playerChoice && computerChoice &&
                <div className="flex flex-col items-center mt-10 text-lg">
                    <p>You chose <span data-testid="player-choice">{playerChoice}</span></p>
                    <p>Computer chose <span data-testid="computer-choice">{computerChoice}</span></p>
                </div>
            }
            {result &&
                <div className="flex flex-col items-center mt-10 text-lg">
                    <p className="text-2xl" data-testid="who-won">{result}</p>
                </div>
            }
        </>
    )
};

export default DisplayResult
