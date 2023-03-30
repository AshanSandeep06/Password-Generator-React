import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <section className="h-full">
      <form className="w-full h-full py-8 px-32 flex flex-col gap-3 items-center justify-center">
        <div className="pt-5 w-1/2 px-16 flex flex-col gap-4 items-center shadow-xl h-[300px] rounded-xl">
          <h1>Login Form</h1>
        </div>
      </form>
    </section>
  );
}