import { useState } from "react"

export default function Player({ initialName, symbol }) {
      const [playerName,setPlayerName] = useState(initialName);
      const [isEditing, setIsEdititng] = useState(false);

      function handleEditClick() {
            //When updating state based on prev state always use function instead of setIsEdititng(!isEditing); 
            // bcz react cannot update state instantly instead it schedules...
            setIsEdititng((editing) => !editing);
      }

      function handleChange(event) {
            setPlayerName(event.target.value)
      }


      let editablePlayerName = <span className="player-name">{playerName}</span>
      if (isEditing) {
            editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
      }
      return (
            <li>
                  <span className="player">
                        {editablePlayerName}
                        <span className="player-symbol">{symbol}</span>
                  </span>
                  <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
      );
}