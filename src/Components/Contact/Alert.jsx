import React from "react";

const Alert = (props) => {

  const { color, alert } = props;
  return alert ? (
    <div className={`alert_box show_alert_box ${color}`}>{alert}</div>
  ) : (
    <div className="alert_box"></div>
  );
};

export default Alert;
