import "./Header.scss";
import { useTodos } from "../TodosContext.jsx";
function Header({ appName }) {
  const store = useTodos();
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-side">
            <h1>{appName}</h1>
          </div>
          <div className="header-side">
            <button
              className="btn secondary"
              onClick={() => {
                store.setModelIsActive(true);
              }}
            >
              + Add To-Do
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
