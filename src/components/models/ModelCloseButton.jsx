import "./ModelWindow.scss";
import { useTodos } from "../../TodosContext";
export default function ModelCloseButton() {
  const store = useTodos();
  return (
    <>
      <button
        className="close-btn"
        onClick={() => {
          store.setModelIsActive(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          />
        </svg>
      </button>
    </>
  );
}
