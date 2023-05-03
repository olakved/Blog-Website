import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="px-20 py-2">
      <h1>Footer</h1>
      <p>&#x00A9; {date} Olakved Adekunle Oluwole. All rights reserved. </p>
    </div>
  );
}

export default Footer;
