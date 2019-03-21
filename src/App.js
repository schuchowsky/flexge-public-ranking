import React, { Component } from "react";
import "./App.css";
import Podium from "./Podium";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            backgroundColor: "#059688",
            flex: "1 1 50%",
            padding: 50,
            position: "relative"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#FFFF03", fontSize: 60 }}>TOP RANKING</h1>
            <h2
              style={{
                color: "#005D54",
                fontSize: 30,
                marginTop: -30,
                marginBottom: 40
              }}
            >
              GEDUC 2019
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: 500,
              margin: "auto"
            }}
          >
            <Podium position={2} name="Marcello" points="1.250" />
            <Podium position={1} name="Felipe" points="2.250" />
            <Podium position={3} name="Juciel" points="1.050" />
          </div>
          <div
            style={{
              padding: 40,
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "#017B6E",
              color: "#fff",
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 18
            }}
          >
            Solicite sua senha e concorra a prêmios!
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            flex: "1 1 50%",
            padding: 50
          }}
        >
          2
        </div>
      </div>
    );
  }
}

export default App;
