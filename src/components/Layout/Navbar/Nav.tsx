import Link from 'next/link';

interface Props {
  className: string;
}

const Nav = ({ className }: Props) => {
  return (
    <ul className={className}>
      <li>
        <Link href="/project/touch-literacy">
          <a>Touch Literacy</a>
        </Link>
      </li>

      <li>
        <Link href="/project/adaptive-yt">
          <a>Adaptive YT</a>
        </Link>
      </li>

      <li>
        <Link href="/project/adaptive-music">
          <a>Adaptive Music</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
