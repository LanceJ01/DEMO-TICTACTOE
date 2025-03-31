import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing((editing) => !editing); 

  if (isEditing) {
    onChangeName(symbol, playerName);
  }
}

function handleChange(event) {
  console.log(event);
  setPlayerName(event.target.value);
}

//? if isEditing is false
let editablePlayerName = <span className="player-name">{playerName}</span>;
//? if isEditing is true
if(isEditing) {
  //? value will prepopulate the input box
  editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
}

return (
  <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
)
};
