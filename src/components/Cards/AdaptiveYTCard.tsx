import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

const AdaptiveYTCard = () => {
  return (
    <div className="card bg-base-200 shadow-xl w-96">
      <figure>
        <img
          src="/adaptive-yt-player.png"
          alt="Adaptive YT Player video page"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Adaptive YT Player</h2>

        <p>
          YouTube app designed to help children with disabilities learn an
          appropriate computer interface, i.e eye gaze, switch, touch.
        </p>
        <span className="text-lg my-2 font-bold">
          Live app requires google login
        </span>

        <div className="card-actions justify-around">
          <a
            className="btn ml-2"
            href="https://github.com/EnakNalla/adaptive-yt-player"
            rel="noreferrer"
            target="_blank"
          >
            code <BsGithub className="ml-2" />
          </a>

          <Link href="/project/adaptive-yt">
            <a className="btn">Details</a>
          </Link>

          <a
            className="btn btn-primary"
            href="https://youtubev2.enak-nalla.dev"
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveYTCard;
