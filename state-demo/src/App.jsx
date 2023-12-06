import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";

function App() {
    return (
        <>
            {/* <h1>State Demo!</h1>
            <Counter></Counter>
            <Dumbo></Dumbo> */}
            <ScoreKeeper numPlayes={4} target={3}></ScoreKeeper>
            {/* <EmojiClicker></EmojiClicker> */}
        </>
    );
}

export default App;
