import React from "react";

export default function FullpageBG() {
  return (
    <div
      className="fullpage-bg"
      style={{
        backgroundImage: "url(/mainbg.jpg)",
      }}
    >
      <div className="fullpage-bg__overlay"></div>
    </div>
  );
}
