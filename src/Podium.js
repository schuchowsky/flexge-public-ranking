import React from "react";

const getColorByPosition = position =>
  ({
    1: "#F0BB13",
    2: "#666666",
    3: "#D69B23"
  }[position]);

const Podium = ({ position, name, points }) => (
  <div style={{ marginTop: position !== 1 ? 100 : 0, textAlign: "center" }}>
    {position === 1 && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: getColorByPosition(position)
        }}
      >
        <i className="fa fa-star" style={{ fontSize: 20, marginRight: 10 }} />
        <i
          className="fa fa-star"
          style={{ fontSize: 26, marginTop: -30, marginRight: 10 }}
        />
        <i className="fa fa-star" style={{ fontSize: 20 }} />
      </div>
    )}
    <div
      style={{
        borderRadius: "50%",
        border: `2px solid ${getColorByPosition(position)}`,
        height: position === 1 ? 130 : 100,
        width: position === 1 ? 130 : 100,
        background: "#CCCCCC",
        margin: "auto"
      }}
    />
    <div
      style={{
        textAlign: "center",
        margin: "15px 0",
        fontSize: 20,
        fontWeight: "bold",
        color: getColorByPosition(position)
      }}
    >
      {position}
      <sup>
        <small>{position === 1 ? "st" : position === 2 ? "nd" : "rd"}</small>
      </sup>
    </div>
    <div
      style={{
        textAlign: "center",
        margin: "15px 0",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
      }}
    >
      {name}
      <br />
      {points} pontos
    </div>
  </div>
);

export default Podium;
