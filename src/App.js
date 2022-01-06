import React from "react";
import Content from "./Components/Content";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <div className="flex gap-1 w-full h-screen">
        <Navbar className="flex-grow"/>
        <Content>z</Content>
      </div>
    </div>
  );
}
