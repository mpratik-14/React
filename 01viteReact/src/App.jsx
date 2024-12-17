import Chai from "./Chai";

function App() {
  const username = "chai and code"
  return (
    <>
      <Chai />
      <h1>Chai and react {username}</h1>
      {/*  {username} it is called as expression
      and the whole line is called as evaluated expression
      evaluation expression means you write only the final outcome 
      after performing some operations on the variable
      all operation you do outside the return block
      */}
      <p>Test para</p>
    </>
  );
}

export default App
