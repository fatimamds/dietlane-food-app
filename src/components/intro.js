import React from "react";
import history from "./history";

export function Hello() {
  return (
    <div
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Hello from DietLane</h1>
      <h2 style={{ paddingBottom: "100px" }}>
        Your ultimate food tracking app!
      </h2>
      <button
        type="submit"
        class="btn btn-dark"
        onClick={() => history.push("/foodassessment")}
      >
        Evaluate My Plate
      </button>
    </div>
  );
}
