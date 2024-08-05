import { useState } from "react";
import Logo from "../../assets/Dowell_logo.png";
import CustomSelect from "../../components/CustomSelect";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";



const WorkspaceLogin = () => {
  const navigate  = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [portfolioId, setPortfolioId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!selectedWorkspace || selectedWorkspace === "Select workspace") {
      errors.workspace = "Please select a workspace.";
    }
    if (!portfolioId) errors.portfolioId = "Portfolio ID is required.";
    if (!password) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      setErrors(validationErrors);
      return;
    }

    // I  Simulated API call or some asynchronous operation
    setTimeout(() => {
      setLoading(false);
      // To handle successful submission
    navigate("/dowelleducation/workspace-dashboard")
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          Welcome to Dowell Workspace
        </h1>
        <img src={Logo} width={300} height={300} alt="Dowell Logo" />
      </div>
      <form
        className="max-w-sm flex flex-col gap-6 items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <CustomSelect
            onChange={(workspace) => {
              setSelectedWorkspace(workspace);
              setErrors((prev) => ({ ...prev, workspace: "" }));
            }}
          />
          {errors.workspace && <p className="text-red-500 text-sm">{errors.workspace}</p>}
        </div>
        <div className="w-full">
          <input
            type="text"
            value={portfolioId}
            onChange={(e) => {
              setPortfolioId(e.target.value);
              setErrors((prev) => ({ ...prev, portfolioId: "" }));
            }}
            placeholder="Enter Portfolio ID"
            className="cursor-pointer bg-gray-50 border flex items-center justify-between font-semibold p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.portfolioId && <p className="text-red-500 text-sm">{errors.portfolioId}</p>}
        </div>
        <div className="w-full">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            placeholder="Enter Password"
            className="cursor-pointer bg-gray-50 border flex items-center justify-between font-semibold p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className={`w-40 py-2 text-sm font-semibold rounded-md ${
            loading ? "bg-green-100 cursor-not-allowed text-green-950" : "bg-green-900"
          } text-white`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <CircularProgress color="success" size={20} />
              Loading...
            </div>
          ) : (
            "Confirm"
          )}
        </button>
      </form>
    </div>
  );
};

export default WorkspaceLogin;
