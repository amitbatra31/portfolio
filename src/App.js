import React, { useRef } from "react";
import Content from "./Components/Content";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
export default function App() {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="flex gap-1 w-full h-screen ">
        <Navbar className="flex-grow absolute fixed overflow-hidden" />
        <div className="overflow-scroll">
          <Content scrollRef={scrollRef} />
          <div ref={scrollRef}>
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
