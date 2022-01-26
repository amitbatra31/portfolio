import Card from "./Card";
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import projects from "../db/projects.json";
import { useState } from "react";
function Info() {
  const matches = useMediaQuery("(max-width:768px)");
  const [choice, setChoice] = useState("all");
  return (
    <div className="flex flex-col space-y-10 m-4 md:m-10 pb-20 " id="projects">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Homemade_Apple'] mt-10 pb-3 px-6 mx-auto ">
        Projects
      </h1>

      <ButtonGroup
        disableElevation
        variant="contained"
        size="large"
        className="mx-auto font-bold"
        color="info"
        aria-label="outlined secondary button group"
        orientation={matches ? "vertical" : "horizontal"}
      >
        <Button className="focus:bg-blue-700" onClick={() => setChoice("all")}>
          All
        </Button>
        <Button
          className="focus:bg-blue-700"
          onClick={() => setChoice("Blockchain")}
        >
          Blockchain
        </Button>
        <Button className="focus:bg-blue-700" onClick={() => setChoice("Game")}>
          Game
        </Button>
        <Button
          className="focus:bg-blue-700"
          onClick={() => setChoice("Frontend")}
        >
          Frontend
        </Button>
        <Button
          className="focus:bg-blue-700"
          onClick={() => setChoice("Backend")}
        >
          Backend
        </Button>
        <Button
          className="focus:bg-blue-700"
          onClick={() => setChoice("Machine Learning")}
        >
          Machine Learning
        </Button>
      </ButtonGroup>
      <div className="flex flex-col flex-wrap md:flex-row gap-4 md:gap-6 lg:gap-10 ">
        {projects
          .filter(
            (project) => project.type.filter((i) => i === choice).length > 0
          )

          .map((p) => (
            <Card
              key={p.id}
              title={p.title}
              image={p.image}
              description={p.description}
              link={p.link}
            />
          ))}
      </div>
    </div>
  );
}

export default Info;
