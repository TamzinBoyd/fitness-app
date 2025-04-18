import { useState } from 'react';
import MealTypeSelect from './MealTypeSelect';

const MealTypesContainer = () => {
    const [selectedMeal, setSelectedMeal] = useState(null);

    const handleSelect = (mealType) => {
        setSelectedMeal(mealType);
    };
    return (
        <div className="mealTypes flex gap-4">
            {['B', 'L', 'D', 'S'].map((meal) => (
                <div key={meal} className="flex-1">
                    <MealTypeSelect
                        value={meal}
                        bgColour="bg-pastelOne"
                        selected={selectedMeal === meal}
                        onSelect={handleSelect}
                    >
                        <span className="flex font-bold text-7xl text-primaryWhite pb-2">
                            {meal}
                        </span>
                    </MealTypeSelect>
                </div>
            ))}
        </div>
    );
};

export default MealTypesContainer;
