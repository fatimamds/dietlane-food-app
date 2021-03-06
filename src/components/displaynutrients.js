import React from "react";
import { FoodTable } from "./food-details";
//import Jumbotron from "react-bootstrap/Jumbotron";

export function NutrientOutput(props) {
  return (
    <div style={{ paddingTop: "50px" }}>
      <h5 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
        Nutrient Profile of your Plate
      </h5>
      <FoodTable profile={props.profile} />
    </div>
  );
}

//export const MemoizedOutput = React.memo(NutrientOutput);

//style={{ }}
