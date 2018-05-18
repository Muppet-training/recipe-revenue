import React from "react";

export default function RecipeListItem(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.cost}</div>
    </div>
  );
}
