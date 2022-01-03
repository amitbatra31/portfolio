import React from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <div className="flex gap-1 justify-self-auto  w-full h-screen">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
