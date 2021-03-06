import React from "react";

const RankingPosition = ({ position, name, picture, points }) => (
  <div style={{ display: "flex", fontWeight: "bold" }}>
    <div
      style={{
        width: 180,
        backgroundColor: "#BDE1DE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 70px",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        fontSize: 22
      }}
    >
      <div>
        {position}
        <sup>
          <small>th</small>
        </sup>
      </div>
    </div>
    <div
      style={{
        backgroundColor: "#EDEDED",
        padding: 10,
        paddingRight: 20,
        display: "flex",
        alignItems: "center",
        flex: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
      }}
    >
      <div
        style={{
          height: 50,
          width: 50,
          borderRadius: "50%",
          marginRight: 10,
          backgroundColor: "#CCCCCC",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {picture ? (
          <img
            alt="user-img"
            src={`https://assets.flexge.com/${picture}`}
            style={{ height: 50, width: 50 }}
          />
        ) : (
          <i className="fa fa-user" style={{ fontSize: 25 }} />
        )}
      </div>
      <div
        style={{
          fontSize: 20
        }}
      >
        {name}
      </div>
      <div
        style={{
          flex: 1,
          textAlign: "right",
          justifySelf: "flex-end",
          color: "#059688",
          fontSize: 20
        }}
      >
        {points} pontos
      </div>
    </div>
  </div>
);

export default RankingPosition;
