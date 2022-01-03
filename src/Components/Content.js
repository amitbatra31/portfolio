import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fab, Zoom } from "@mui/material";
function Content() {
  return (
    <div className="flex flex-col lg:mt-30 mx-auto justify-around ">
      <div className="p-6 md:mt-20 flex flex-col items-start justify-center md:flex-row h-fit gap-10 md:justify-around md:gap-0 w-full">
        <div className="flex flex-col text-6xl lg:text-7xl font-bold font-mono space-y-10 ">
          <h1 className="pb-3">Hi!</h1>
          <p>I am Amit</p>
        </div>
        <div className="h-48 w-48 lg:h-60 lg:w-60  ">
          <img
            className="object-fit-cover aspect-square rounded-full border-2 border-blue-700 shadow-xl "
            src="images/profile.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="flex p-4 mt-2 mx-6 items-center relative -top-2 ">
        <p className="text-2xl font-bold font-mono md:mx-20 text-center">
          I am a Full Stack Developer with a passion for building web
          applications. Currently I am a second year Software Engineering (UG)
          student at DTU
        </p>
      </div>
      <div className="flex mt-2 items-end justify-center relative -top-5 ">
        <Fab className="h-24 w-24">
          <ExpandMoreIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Content;
