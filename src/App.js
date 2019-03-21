import React, { useEffect, useState } from "react";
import "./App.css";
import Podium from "./Podium";
import logo from "./logo.png";
import RankingPosition from "./RankingPosition";
import axios from "axios";

const App = () => {
  const [ranking, setRanking] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [countdown, setCountdown] = useState(10);
  useEffect(() => {
    console.log("countdonw", countdown);
    if (!isFetching) {
      if (countdown <= 0) {
        setCountdown(10);
        setFetching(true);
        axios
          .get(
            `https://api.flexge.com/public/reports/schools/Technos Vila A/ranking?from=2019-03-01&to=2019-03-30`
          )
          .then(result => {
            console.log("result", result);
            setFetching(false);
          });
        return;
      }
      const timeout = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isFetching, countdown]);
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
        <div style={{ textAlign: "right" }}>
          <img src={logo} alt="logo-flexge" style={{ height: 60 }} />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={4} name="Camilinha" points="865" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={5} name="Camilinha" points="863" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={6} name="Camilinha" points="862" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={7} name="Camilinha" points="861" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={8} name="Camilinha" points="860" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={9} name="Camilinha" points="700" />
        </div>
        <div style={{ marginTop: 20 }}>
          <RankingPosition position={10} name="Camilinha" points="600" />
        </div>
        <div style={{ marginTop: 20 }}>
          {isFetching ? (
            <i className="fa fa-spinner fa-spin" />
          ) : (
            `Recarregando em ${countdown} segundos...`
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
