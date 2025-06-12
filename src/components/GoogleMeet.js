function GoogleMeet() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>google meet webinar</h1>
        <button onClick={() => window.open("https://meet.google.com/aej-pefn-inv", "_blank")}>
          Join Google Meet
        </button>
      </header>
    </div>
  );
}

export default GoogleMeet;
