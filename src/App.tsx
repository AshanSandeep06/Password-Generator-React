import React, { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, TextField } from "@mui/material";
import $ from "jquery";

export default function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <section className="w-screen h-screen font-poppins font-semibold">
      <form className="w-full h-full py-8 px-32 flex flex-col gap-3 items-center justify-center">
        <div className="pt-5 w-1/2 px-16 flex flex-col gap-4 items-center shadow-xl drop-shadow-md h-1/2 rounded-xl border border-slate-100">
          <div className="mb-4 mt-3">
            <h1 className="text-[25px]">Automatic Password Generator</h1>
          </div>

          <div className="w-3/4 mb-5">
            <TextField
              id="pwdField"
              label="Password"
              type="text"
              variant="outlined"
              placeholder="Your generated password"
              fullWidth={true}
            />
          </div>

          <div className="flex gap-8 justify-center w-full">
            <button
              type="button"
              className="mt-2 bg-blue-900 text-white py-[10px] px-[18px] rounded-lg font-medium"
            >
              Generate Password
            </button>

            <button
              type="button"
              className="mt-2 border border-yellow-500 text-yellow-500 py-[10px] px-[18px] rounded-lg font-medium hover:bg-yellow-500 hover:text-white"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
