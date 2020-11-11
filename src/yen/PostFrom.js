import React, { useState, useEffect } from "react";
function App(props) {
  const [account, setAccount] = useState('')


  function data() {
    const fd = new FormData(document.form1)

    console.log(fd)

    fetch("http://localhost:3000/try-qs", {
      method: "POST",
      body: fd,

    })

      .then(r =>r.json())
 
      .then(obj => {
        console.log(obj)
      })
    // .then((res) => res.json())
    // .catch((error) => console.error("Error:", error))
    // .then((response) => console.log("Success:", response));
  }


  return (
    <>
      <form method="post" name="form1" onSubmit={(e) => {
        e.preventDefault();
        data();
      }}>

        <label for="account">account</label>
        <input
          type="account"
          class="form-control"
          id="account"
          name="account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}

        ></input>
        <label for="password">password</label>
        <input
          type="text"
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
