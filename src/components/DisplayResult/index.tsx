type DisplayResultProps = {
    playerChoice: string | null
    computerChoice: string | null
    result: string | null
}

const DisplayResult = ({ playerChoice, computerChoice, result }: DisplayResultProps) => {
    console.log(playerChoice);
    return (
        <>
            {!result && <p>Choose Rock, Paper or Scissors!</p>}
            {result &&
                <div className="flex flex-col items-center mt-10 text-lg">
                    <p>You chose {playerChoice}</p>
                    <p>Computer chose {computerChoice}</p>
                    <p>{result}</p>
                </div>
            }
        </>
    )
};

export default DisplayResult
