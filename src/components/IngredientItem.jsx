const IngredientItem = ({ IngName, measure, cals }) => {
    return (
        <div className="ingredientItem p-2 grid grid-cols-[1fr_auto_1fr] gap-3 justify-between border border-pastelOne text-primaryBlack">
            <p>{IngName}</p>
            <p className="text-center">{measure}</p>
            <p className="text-right">{cals}cals</p>
        </div>
    );
};

export default IngredientItem;
