import Link from 'next/link';

const TouchLiteracyCard = () => {
  return (
    <div className="card bg-base-200 shadow-xl w-96">
      <figure>
        <img src="/touch-literacy.png" alt="Touch literacy game" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Touch Literacy</h2>

        <p>Educational literacy app designed for touch screens.</p>

        <div className="card-actions justify-end">
          <Link href="/project/touch-literacy">
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
