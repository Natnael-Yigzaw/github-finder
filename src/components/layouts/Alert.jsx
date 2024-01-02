import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-start mb-3 space-x-1">
        {alert.type === "error" && <FaTimes className="w-auto" />}
        <p className="flex-1 text-base ml-3 font-semibold text-white">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
};

export default Alert;
