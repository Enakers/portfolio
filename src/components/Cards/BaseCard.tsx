import Image from "next/future/image";
import {FC, ReactNode} from "react";

type Props = {
  title: string;
  blurb: string;
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
  codeLink: string;
};

const BaseCard: FC<Props> = ({
  blurb,
  children,
  imgAlt,
  imgSrc,
  title,
  codeLink
}) => (
  <div className="card bg-base-200 shadow-xl w-96">
    <figure>
      <Image src={imgSrc} alt={imgAlt} />
    </figure>

    <div className="card-body">
      <h2 className="card-title justify-center">{title}</h2>

      <p>{blurb}</p>

      <div className="card-actions justify-around">{children}</div>
    </div>
  </div>
);

export default BaseCard;
