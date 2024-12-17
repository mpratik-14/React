import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_=+\\|{};:/?.>";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className="app-container">
        <div className="password-container">
          <input
            type="text"
            value={password}
            className="password-input"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="copy-button">
            Copy
          </button>
        </div>

        <div className="settings-container">
          <div className="setLength">
            <div className="slider-checkbox-container">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="length-slider"
                onChange={(e) => setLength(e.target.value)}
              />

              <label className="length-label">Length: {length}</label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) => !prev)}
                />
                Numbers
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={characterAllowed}
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                />
                Characters
              </label>
            </div>

            <button className="generate-button" onClick={passwordGenerator}>
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
