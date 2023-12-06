import { v4 as uuid } from "uuid";
import { useState } from "react";

function randomEmoji() {
    const choices = ["⭐️", "🍞", "🐶", "🕋"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const EmojiClicker = () => {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😭" }]);
    const addEmoji = () => {
        setEmojis([...emojis, { id: uuid(), emoji: randomEmoji() }]);
    };

    const deleteEmoji = (id) => {
        console.log(id);
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e) => e.id !== id);
        });
    };
    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
};

export default EmojiClicker;
