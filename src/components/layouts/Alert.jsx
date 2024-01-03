import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-4`}
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{alert?.msg}</span>
      </div>
    </div>
  );
};

export default Alert;
