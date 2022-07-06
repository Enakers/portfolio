import { SiElectron, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const TouchLiteracy = () => {
  return (
    <div className="">
      <div className="alert shadow-lg flex-col mb-8">
        <div className="grid md:grid-cols-2">
          <h1 className="text-2xl text-center">Touch literacy</h1>
          <a
            href="https://literacy.enak-nalla.dev"
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Visit
          </a>
        </div>
        <div className="gap-6">
          <TbBrandNextjs color="black" size="30" />
          <SiTypescript color="3178C6" size="30" />
          <SiElectron size="30" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <img src="/touch-literacy.png" alt="Touch literacy game" />
        </div>
        <div>
          <p className="mt-4">
            Educational app to help children learn spelling. Input a list of
            words and start the game. The user can peak the word, or listen to
            it spoken by the speechSynthesis api. Feedback when the answer is
            wrong/correct and shows stats at the end of the game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouchLiteracy;
