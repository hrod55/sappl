import './App.css';

function App() {
  return (
    <main className="App">
      <h1>When pigs fly</h1>
      <div className="sky">
        <img
          className="flying-pig"
          src={`${process.env.PUBLIC_URL}/flying-pig.svg`}
          alt="A pig with wings flying through the sky"
        />
      </div>
      <a
        className="art-credit"
        href="https://openclipart.org/detail/355672/when-pigs-fly"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pig illustration by j4p4n on Openclipart · CC0
      </a>
    </main>
  );
}

export default App;
