import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {SiElectron, SiJest, SiTypescript, SiVite} from "react-icons/si";

const AdaptiveMusic = () => {
  return (
    <div>
      <div className="alert shadow-lg flex-col mb-8">
        <div className="grid md:grid-cols-2">
          <h1 className="text-2xl text-right">Touch literacy</h1>
          <div>
            <a
              className="btn btn-primary"
              href="https://github.com/EnakNalla/adaptive-music-player/releases/download/1.0.0-beta/adaptive-music-player.exe"
              download
              rel="noreferrer"
            >
              Download
            </a>
            <a
              className="btn ml-2"
              href="https://github.com/EnakNalla/adaptive-music-player"
              rel="noreferrer"
              target="_blank"
            >
              View code <BsGithub className="ml-2" />
            </a>
          </div>
        </div>
        <div className="gap-6">
          <SiVite size="30" />
          <SiJest size="30" />
          <SiTypescript color="3178C6" size="30" />
          <SiElectron size="30" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <img src="/adaptive-music.png" alt="Adaptive music" />
        </div>
        <div>
          <p className="mt-4">
            Similar to
            <Link href="/project/adaptive-yt">
              <a className="text-primary"> Adaptive YouTube </a>
            </Link>
            this app accepts multiple inputs. Plays music from the local file
            system, pausing at the designated interval. It includes a visualiser
            library for the music. When using a switch it tracks the amount of
            times the switch was hit while the music was playing. This is useful
            for gauging how the user is understanding the cause and effect
            aspect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveMusic;
