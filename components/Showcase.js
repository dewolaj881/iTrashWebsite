import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div>
        <img className="bg-contain" src="../ShowcaseImage.jpg" alt="" />
      </div>
    </section>
  );
}

export default Nav;