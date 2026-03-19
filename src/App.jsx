import React, { useState } from "react";

export default function App() {
  const [sales, setSales] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    // Simple fake AI logic
    const value = parseInt(sales);
    if (!isNaN(value)) {
      setPrediction(Math.round(value * 1.1)); // +10% estimate
    } else {
      setPrediction("Enter valid data");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">
          AI Food Prediction
        </h1>

        <input
          type="number"
          placeholder="Enter yesterday sales"
          className="w-full p-2 border rounded mb-4"
          value={sales}
          onChange={(e) => setSales(e.target.value)}
        />

        <button
          onClick={handlePredict}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Predict
        </button>

        {prediction && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Predicted Food:</p>
            <p className="text-xl text-green-600">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}
