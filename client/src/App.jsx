import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [predictionText, setPredictionText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/predict_api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setPredictionText(data);
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crop Prediction Using Soil Health Analysis
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            (Enter parameters received from sensors and click Predict to get the
            result.)
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="N"
            value={formData.N}
            onChange={handleChange}
            placeholder="N (Nitrogen)"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="P"
            value={formData.P}
            onChange={handleChange}
            placeholder="P (Potassium)"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="K"
            value={formData.K}
            onChange={handleChange}
            placeholder="K (Phosphorus)"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            placeholder="Temperature"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            placeholder="Humidity"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="ph"
            value={formData.ph}
            onChange={handleChange}
            placeholder="ph"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="text"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            placeholder="Rainfall"
            required
            className="appearance-none rounded-md shadow-sm block w-full py-3 px-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Predict
            </button>
          </div>
        </form>
        {predictionText !== "" && (
          <div className="text-center text-sm text-gray-600">
            Prediction: {predictionText}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
