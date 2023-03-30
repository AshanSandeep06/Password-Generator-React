import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, TextField } from "@mui/material";

export default function App() {
  return (
    <section className="w-screen h-screen font-poppins font-semibold">
      <form className="w-full h-full py-8 px-32 flex flex-col gap-3 items-center justify-center">
        <div className="pt-5 w-1/2 px-16 flex flex-col gap-4 items-center shadow-xl drop-shadow-md h-1/2 rounded-xl border border-slate-100">
          <div className="mb-4 mt-3">
            <h1 className="text-[25px]">Automatic Password Generator</h1>
          </div>

          <div className="w-3/4 mb-5">
            <TextField
              label="Password"
              type="text"
              variant="outlined"
              placeholder="Your generated password"
              fullWidth={true}
            />
          </div>

          <div>
            <button
              type="button"
              className="mt-2 bg-blue-900 text-white py-[10px] px-[18px] rounded-lg font-medium"
            >
              Generate Password
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
