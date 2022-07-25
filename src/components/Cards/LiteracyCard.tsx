import {BsGithub} from "react-icons/bs";
import BaseCard from "./BaseCard";

const LiteracyCard = () => (
  <BaseCard
    title="Literacy"
    blurb="Educational spelling app with on screen or physical keyboard."
    imgSrc="/literacy/demo.gif"
    imgAlt="Literacy app demo"
    codeLink="https://github.com/EnakNalla/adaptive-games/tree/master/apps/literacy"
  >
    <a
      href="https://github.com/EnakNalla/adaptive-games/tree/master/apps/literacy"
      rel="noreferrer"
      target="_blank"
      className="btn"
    >
      Code <BsGithub className="ml-2" />
    </a>
    <a
      href="https://docs.enak-nalla.dev/literacy"
      rel="noreferrer"
      target="_blank"
      className="btn"
    >
      Docs
    </a>
    <a
      href="https://literacy.enak-nalla.dev"
      rel="noreferrer"
      target="_blank"
      className="btn btn-primary"
    >
      Visit
    </a>
  </BaseCard>
);

export default LiteracyCard;
