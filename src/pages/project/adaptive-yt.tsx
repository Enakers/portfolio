import {BsGithub} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {SiDocker, SiMongodb, SiPrisma, SiTypescript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

const AdaptiveYT = () => {
  return (
    <div className="">
      <div className="alert shadow-lg flex-col mb-8">
        <div className="grid md:grid-cols-2">
          <h1 className="text-2xl text-center sm:text-right">Adaptive YouTube player</h1>
          <div>
            <a
              href="https://yt.enak-nalla.dev"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Visit (Login required)
            </a>
            <a
              className="btn ml-2"
              href="https://github.com/EnakNalla/adaptive-yt-player"
              rel="noreferrer"
              target="_blank"
            >
              View code <BsGithub className="ml-2" />
            </a>
          </div>
        </div>
        <div className="gap-6">
          <TbBrandNextjs color="black" size="30" />
          <SiTypescript color="3178C6" size="30" />
          <FcGoogle size="30" />
          <SiPrisma size="30" />
          <SiMongodb color="00ED64" size="30" />
          <SiDocker size="30" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <img src="/adaptive-yt-player.png" alt="Adaptive YT Player video page" />
        </div>
        <div>
          <p className="mt-4">
            From my experience working with children in special Schools I have found YouTube to be
            an almost universal motivator.
            <br />
            <br />
            I designed this app so that children who otherwise might remain uninterested in other
            options can be engaged in learning how they can interact with a computer.
            <br />
            <br />
            This is primarily cause and effect. The user responds to the input and the video plays
            for a predetermined amount of time.
            <br />
            Custom pause points can also be set in a video. This can be used for pausing at the end
            of each page of a story for example.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Possible Inputs</h3>

        <h4 className="text-lg my-2 font-semibold">Eye gaze</h4>

        <p>
          The user must dwell on the symbol for a predetermined amount of time, while dwelling there
          is an animation to indicate this.
        </p>

        <h4 className="text-lg my-2 font-semibold">Switch</h4>
        <p>
          The user must press the switch to trigger the video. The switch option also has a 2 switch
          mode where one switch plays the video and the other can be used to select a video from a
          playlist.
        </p>

        <h4 className="text-lg my-2 font-semibold">Touch & Mouse</h4>
        <p>The user must either click on or touch the symbol.</p>
      </div>
    </div>
  );
};

export default AdaptiveYT;
