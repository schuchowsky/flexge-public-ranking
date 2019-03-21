import React, { useEffect, useState } from "react";
import "./App.css";
import Podium from "./Podium";
import logo from "./logo.png";
import RankingPosition from "./RankingPosition";
import axios from "axios";
import get from "lodash/get";

const App = () => {
  const [ranking, setRanking] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const fetch = () => {
    setFetching(true);
    axios
      .get(
        "https://api.flexge.com/public/reports/schools/Colégio do Salvador/ranking?from=2019-03-01&to=2019-03-30",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "test"
          }
        }
      )
      .then(result => {
        setRanking(result.data);
        setFetching(false);
      });
  };
  useEffect(() => {
    if (!isFetching) {
      if (countdown <= 0) {
        setCountdown(10);
        fetch();
        return;
      }
      const timeout = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isFetching, countdown]);

  useEffect(() => {
    fetch();
  }, []);
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
            maxWidth: 600,
            margin: "auto"
          }}
        >
          <Podium
            position={get(ranking, "[1].position")}
            name={get(ranking, "[1].name")}
            points={get(ranking, "[1].points")}
            picture={get(ranking, "[1].profilePicture")}
          />
          <Podium
            position={get(ranking, "[0].position")}
            name={get(ranking, "[0].name")}
            points={get(ranking, "[0].points")}
            picture={get(ranking, "[0].profilePicture")}
          />
          <Podium
            position={get(ranking, "[2].position")}
            name={get(ranking, "[2].name")}
            points={get(ranking, "[2].points")}
            picture={get(ranking, "[2].profilePicture")}
          />
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
        {[3, 4, 5, 6, 7, 8, 9].map(index => (
          <div style={{ marginTop: 20 }}>
            <RankingPosition
              position={get(ranking, `[${index}].position`)}
              name={get(ranking, `[${index}].name`)}
              points={get(ranking, `[${index}].points`)}
              picture={get(ranking, `[${index}].profilePicture`)}
            />
          </div>
        ))}
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
