import Link from 'next/link';

const AdaptiveMusicCard = () => {
  return (
    <div className="card bg-base-200 shadow-xl w-96">
      <figure>
        <img src="/adaptive-music.png" alt="Adaptive music Player page" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Adaptive Music Player</h2>

        <p>
          Electron app designed to help children with disabilities learn an
          appropriate computer interface, i.e eye gaze, switch, touch.
        </p>

        <div className="card-actions justify-end">
          <Link href="/project/adaptive-yt">
            <a className="btn">Details</a>
          </Link>

          <a
            className="btn btn-primary"
            href="https://github.com/EnakNalla/adaptive-music-player/releases/download/1.0.0-beta/adaptive-music-player.exe"
            download
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveMusicCard;
