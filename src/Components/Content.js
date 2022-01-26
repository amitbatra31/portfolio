import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typewriter from "typewriter-effect";
import { Fab } from "@mui/material";
function Content({ scrollRef }) {
  return (
    <div className="flex flex-col lg:mt-30 mx-auto gap-5">
      <div className="p-6 md:mt-20 flex flex-col gap-5 md:flex-row items-center justify-center md:justify-between md:gap-0 w-full space-y-4 md:px-20 mx-auto">
        <div className="flex flex-col text-4xl md:text-6xl lg:text-7xl  space-y-10 font-['Jetbrains_Mono'] w-full leading-3">
          <h1 className="pb-3 font-semibold">Hi!</h1>
          <p>I am Amit</p>
          <div className="text-2xl md:text-4xl text-blue-700 ">
            <Typewriter
              options={{
                strings: [
                  "a student",
                  "a Full Stack Developer",
                  "a Web Developer",
                  "a Web Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                cursor: "|",
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
        <div className="min-w-[50px] w-1/2 md:w-1/5 aspect-square ">
          <img
            className=" object-fit-cover rounded-full border-4 border-blue-400 shadow-xl "
            src="images/profile.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="flex md:mt-10 lg:mt-20 p-4 mx-6 items-center h-full pb-4 md:pb-0">
        <p className="text-base md:text-2xl font-bold font-mono md:mx-20 text-center">
          I am a Full Stack Developer with a passion for building web
          applications. Currently I am a second year Software Engineering (UG)
          student at DTU
        </p>
      </div>
      <div className="flex mt-2 items-end justify-center">
        <Fab className="h-12 w-12 bg-gray-100">
          <ExpandMoreIcon
            onClick={() =>
              scrollRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </Fab>
      </div>
    </div>
  );
}

export default Content;
