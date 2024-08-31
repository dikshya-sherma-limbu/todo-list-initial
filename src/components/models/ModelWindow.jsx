import ModelCloseButton from "./ModelCloseButton";
import "./ModelWindow.scss";

function ModelWindow({ children }) {
  return (
    <>
      <div
        className="modal-wrapper"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="inner">
          <ModelCloseButton />
          {children}
        </div>
      </div>
    </>
  );
}

export default ModelWindow;
