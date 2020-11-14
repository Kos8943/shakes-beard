import { format } from "mysql";
import React, { useState, useEffect } from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";



//做在我的帳戶  點了如果不是登入狀態 就導向 登入頁面

function TestAuth(props) {
  const { isAuth, setIsAuth } = props;

  if(isAuth===false) return <Redirect to="/signup" /> 

  return (
    <>
      <div>{(isAuth)?"現在狀態:登入":"現在狀態:登出"}</div>
      <button onClick={()=>setIsAuth(true)}>登入</button>

      <button onClick={()=>setIsAuth(false)}>登出</button>
    </>
  );
}

export default TestAuth;
