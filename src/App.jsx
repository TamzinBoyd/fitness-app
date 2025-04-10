import React, { useEffect, useState } from "react";
import {
  getAllIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient
} from "./services/ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    ingredientName: "",
    gram: {
      measure: "100g",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    },
    tablespoon: {
      measure: "tbsp",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    },
    serving: {
      measure: "serving",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    },
    other: {
      measure: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: ""
    }
  });

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await getAllIngredients();
      setIngredients(data);
      setLoading(false);
    };
    fetchIngredients();
  }, []);

  const handleInputChange = (section, field, value) => {
    if (section === "ingredientName") {
      setFormData(prev => ({ ...prev, ingredientName: value }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
  };

  //Temp form to add ingredients in browser
  const handleAdd = async () => {
    const measureKeys = ["gram", "tablespoon", "serving", "other"];
    const measures = {};

    measureKeys.forEach((key) => {
      const { measure, calories, protein, carbs, fat } = formData[key];

      const hasAnyValue =
        calories !== "" || protein !== "" || carbs !== "" || fat !== "";

      if (hasAnyValue) {
        measures[key] = {
          measure,
          calories: parseFloat(calories),
          protein: parseFloat(protein),
          carbs: parseFloat(carbs),
          fat: parseFloat(fat)
        };
      }
    });

    const formattedData = {
      ingredientName: formData.ingredientName,
      measures
    };

    await addIngredient(formattedData);
    const updated = await getAllIngredients();
    setIngredients(updated);

    setFormData({
      ingredientName: "",
      gram: { measure: "100g", calories: "", protein: "", carbs: "", fat: "" },
      tablespoon: { measure: "tbsp", calories: "", protein: "", carbs: "", fat: "" },
      serving: { measure: "serving", calories: "", protein: "", carbs: "", fat: "" },
      other: { measure: "", calories: "", protein: "", carbs: "", fat: "" }
    });
  };
  

  const handleDelete = async (id) => {
    await deleteIngredient(id);
    setIngredients(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdate = async (id) => {
    await updateIngredient(id, {
      "measures.tablespoon.calories": 95
    });
    const updated = await getAllIngredients();
    setIngredients(updated);
  };

  if (loading) return <div>Loading ingredients...</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Ingredients</h1>

      <div className="space-y-4 border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">➕ Add New Ingredient</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded col-span-2"
            placeholder="Ingredient Name"
            value={formData.ingredientName}
            onChange={(e) => handleInputChange("ingredientName", null, e.target.value)}
          />
          {["gram", "tablespoon", "serving", "other"].map(section => (
            <div key={section} className="border p-2 rounded space-y-2">
              <strong className="capitalize">{section}</strong>
              <input
                className="border p-1 w-full"
                placeholder="Measure (e.g. g, tbsp)"
                value={formData[section].measure}
                onChange={(e) => handleInputChange(section, "measure", e.target.value)}
              />
              <input
                className="border p-1 w-full"
                type="number"
                placeholder="Calories"
                value={formData[section].calories}
                onChange={(e) => handleInputChange(section, "calories", e.target.value)}
              />
              <input
                className="border p-1 w-full"
                type="number"
                placeholder="Protein"
                value={formData[section].protein}
                onChange={(e) => handleInputChange(section, "protein", e.target.value)}
              />
              <input
                className="border p-1 w-full"
                type="number"
                placeholder="Carbs"
                value={formData[section].carbs}
                onChange={(e) => handleInputChange(section, "carbs", e.target.value)}
              />
              <input
                className="border p-1 w-full"
                type="number"
                placeholder="Fat"
                value={formData[section].fat}
                onChange={(e) => handleInputChange(section, "fat", e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Ingredient
        </button>
      </div>
    </div>
  );
};

export default App;
