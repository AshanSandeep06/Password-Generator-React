import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <section className="w-screen h-screen">
      <form className="w-full h-full py-8 px-32 flex flex-col gap-3 items-center justify-center">
        <div className="pt-5 w-1/2 px-16 flex flex-col gap-4 items-center shadow-xl drop-shadow-md h-1/2 rounded-xl border border-slate-100">
          <div>
            <h1>Automatic Password Generator</h1>
          </div>

          <div>
            <input type="text" />
          </div>

          <div>
            <button>Generate Password</button>
          </div>
        </div>
      </form>
    </section>
  );
}
