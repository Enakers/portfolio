import Link from "next/link";
import {BsGithub} from "react-icons/bs";

const TouchLiteracyCard = () => {
  return (
    <div className="card bg-base-200 shadow-xl w-96">
      <figure>
        <img src="/literacy.png" alt="Touch literacy game" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Literacy</h2>

        <p>
          Educational literacy app featuring touch keyboard or physical keyboard
          use.
        </p>

        <div className="card-actions justify-around">
          <a
            className="btn ml-2"
            href="https://github.com/EnakNalla/literacy"
            rel="noreferrer"
            target="_blank"
          >
            code <BsGithub className="ml-2" />
          </a>
          <Link href="/project/literacy">
            <a className="btn">Details</a>
          </Link>

          <a
            className="btn btn-primary"
            href="https://literacy.enak-nalla.dev"
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

export default TouchLiteracyCard;
