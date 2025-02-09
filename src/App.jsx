import { useState, useEffect } from "react";
import "./App.css";
import NavTabs from "../Components/NavTabs";
import { Outlet } from "react-router-dom";

function MyComponent() {
  useEffect(() => {
    document.title = "My New Title";
  }, []);
}

function App() {
  return (
    <>
      <head>
        <title>Mike Norris Portfolio</title>
      </head>
      <header>
        <NavTabs />
      </header>
      <main class="d-flex flex-wrap justify-content-center">
        <Outlet />
      </main>
      <footer class="d-flex flex-wrap justify-content-center ">
        <a href={"https://github.com/mnorris3"} target="_blank">
          <img
            src="./public/github.webp"
            style={{ width: "50px", height: "50px" }}
            class="m-3 my-5"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/michael-norris3/"}
          target="_blank"
        >
          <img
            src="./public/linkedin.webp"
            style={{ width: "50px", height: "50px" }}
            class="m-3 my-5"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
