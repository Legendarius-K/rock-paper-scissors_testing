type ScoreBoardProps = {
    userName: string
    computerScore: number
    playerScore: number
}

const ScoreBoard = ({ userName, computerScore, playerScore }:ScoreBoardProps) => {
    return (
        <div className="text-lg my-10">
            <div className="flex justify-center">
                <p data-testid="player-score" className="">{userName}: {playerScore}</p>
            </div>
            <div className="flex justify-center">
                <p data-testid="computer-score" className="">Computer: {computerScore}</p>
            </div>
        </div>
    )
};

export default ScoreBoard
