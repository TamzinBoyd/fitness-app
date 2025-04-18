import ContainerCard from './ContainerCard';
import DropdownDots from './DropdownDots';
import IngredientItem from './IngredientItem';
import MacroTotals from './MacroTotals';
import Title from './Title';

const MealCard = () => {
    return (
        <ContainerCard borderColour="border-pastelOne">
            <div className="flex justify-between pr-4">
                <Title title="Meal type" />
                <Title title="total cals" />
                <DropdownDots />
            </div>
            <MacroTotals pro="20g" carb="20g" cal="20g" />

            <IngredientItem IngName="test" measure="test" cals="test" />
            <IngredientItem
                IngName="Bakes beans"
                measure="can 1/2"
                cals="230"
            />
            <IngredientItem IngName="test" measure="test" cals="test" />
        </ContainerCard>
    );
};

export default MealCard;
