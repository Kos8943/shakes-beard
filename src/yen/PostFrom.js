import React, { useState, useEffect } from "react";
function App(props) {
  async function data() {
    const fd = { username: "example" };
    fetch("http://localhost:3000/try-qs", {
      method: "POST",
      body: JSON.stringify(fd),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <form method="post" name="form1" onsubmit="return false" novalidate>
        <label for="account">account</label>
        <input
          type="account"
          class="form-control"
          id="account"
          name="account"
        ></input>
        <label for="password">password</label>
        <input
          type="tel"
          class="form-control"
          id="password"
          name="password"
        ></input>
        <button type="submit" class="btn btn-primary">
          登入
        </button>
      </form>
    </>
  );
}

export default App;
