type SelectionPanelProps = {
    onSelect: (weapon: string) => void
}


const SelectionPanel = ({ onSelect }:SelectionPanelProps) => {
    const handleClick = (weapon:string) => {
        onSelect(weapon)
    }
    return (
        <div>
            <button onClick={() => handleClick("Rock")} className="w-24 bg-blue-500 py-1 px-3 rounded text-white font-bold">Rock</button>
            <button onClick={() => handleClick("Paper")} className="w-24 mx-3 bg-blue-500 py-1 px-3 rounded text-white font-bold">Paper</button>
            <button onClick={() => handleClick("Scissors")} className="w-24  bg-blue-500 py-1 px-3 rounded text-white font-bold">Scissors</button>
        </div>
    )
};

export default SelectionPanel
