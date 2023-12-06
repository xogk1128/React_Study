import { useState } from "react";

const EmojiClicker = () => {
    const [emojis, setEmojis] = useState(["😭"]);
    return (
        <div>
            {emojis.map((e) => {
                <span style={{ fontSize: "4rem" }}>{e}</span>;
            })}
            ;<button>Add Emoji</button>
        </div>
    );
};

export default EmojiClicker;
