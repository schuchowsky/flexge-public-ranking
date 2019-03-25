import React from "react";

const getColorByPosition = position =>
  ({
    1: "#F0BB13",
    2: "#666666",
    3: "#D69B23"
  }[position]);

const Podium = ({ position, name, points, picture }) => (
  <div style={{ marginTop: position !== 1 ? 100 : 0, textAlign: "center" }}>
    {position === 1 && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: getColorByPosition(position),
          marginBottom: 15
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
        border: `3px solid ${getColorByPosition(position)}`,
        height: position === 1 ? 160 : 130,
        width: position === 1 ? 160 : 130,
        background: "#CCCCCC",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
      className="avatar"
    >
      {picture ? (
        <img
          alt="user-img"
          src={`https://assets.flexge.com/${picture}`}
          style={{
            height: position === 1 ? 160 : 130,
            width: position === 1 ? 160 : 130,
            boxShadow: "0 5px 15px 0px rgba(0, 0, 0, 0.6)"
          }}
        />
      ) : (
        <i className="fa fa-user" style={{ fontSize: 70 }} />
      )}
    </div>
    <div
      style={{
        textAlign: "center",
        margin: "15px 0",
        fontSize: 46,
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
        fontSize: 22,
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
