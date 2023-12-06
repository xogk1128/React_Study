import { v4 as uuid } from "uuid";
import { useState } from "react";

const EmojiClicker = () => {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😭" }]);
    const addEmoji = () => {
        setEmojis([...emojis, { id: uuid(), emoji: "😄" }]);
    };
    return (
        <div>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
};

export default EmojiClicker;
