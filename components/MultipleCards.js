import React from "react";
import Card from "../components/Card"

function MultipleCards() {
  return (
    <section className="bg-gray-200">
      <div className="block justify-between mx-20 bg-gray-200 md:flex">
        <Card src="../earth.png" alt="text" heading="Ratuj..."></Card>
        <Card src="../earth.png" alt="text" heading="Ratuj..."></Card>
        <Card src="../earth.png" alt="text" heading="Ratuj..."></Card>
        <Card src="../earth.png" alt="text" heading="Ratuj..."></Card>
      </div>
    </section>
  );
}

export default MultipleCards;