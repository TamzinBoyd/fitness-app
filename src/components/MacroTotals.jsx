const MacroTotals = ({ pro, carb, cal }) => {
    return (
        <div className="macroTotals flex justify-end gap-4">
            <span>Pro: {pro}</span> <span>Carbs: {carb}</span>{' '}
            <span>Cals: {cal}</span>
        </div>
    );
};

export default MacroTotals;
