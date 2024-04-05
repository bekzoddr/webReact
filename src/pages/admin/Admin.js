import React from "react";
import admin from "../../assets/images/purple-free-admin-dashboard-e1597995165506.png";
function Admin() {
  return (
    <div style={{ margin: "100px 0" }}>
      <img
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        src={admin}
        alt=""
      />
    </div>
  );
}

export default Admin;
