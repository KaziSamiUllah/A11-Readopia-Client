import { Typewriter } from 'react-simple-typewriter'
const TypingEffect = ({text, wordArray}) => {
    return (
        <div className="App">
          <h1
            style={{ paddingTop: "", margin: "auto 0", fontWeight: "normal" }}
          >
            {text}{" "}
            <span style={{ color: "maroon", fontWeight: "bold" }}>
              <Typewriter
                words={wordArray}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      );
};

export default TypingEffect;