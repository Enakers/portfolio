import {useCallback} from "react";

interface Props {
  title: string;
  body?: string;
  type: "bg-success" | "bg-error" | "bg-warning" | "bg-info";
}

const Toast = ({title, type, body}: Props) => {
  let showTime = 5000;
  const progress = useCallback((node: HTMLProgressElement) => {
    const interval = setInterval(() => {
      if (!node) {
        clearInterval(interval);
        return;
      }
      node.value++;
    }, showTime / 100);
  }, []);

  return (
    <div className={`card ${type} z-50`}>
      <progress className="progress" value="0" max="100" ref={progress} />
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        {body && <p className="text-black">{body}</p>}
      </div>
    </div>
  );
};

export default Toast;
