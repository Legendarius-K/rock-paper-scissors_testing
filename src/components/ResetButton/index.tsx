type ResetButtonProps = {
    onReset: () => void
}

const ResetButton = ({onReset}:ResetButtonProps) => {

    const handleClick = () => {
        onReset()
    }

    return (
        <button onClick={handleClick} className="w-36  bg-blue-500 py-2 px-3 rounded text-white font-bold">
            Reset Game
        </button>
    )
};

export default ResetButton
