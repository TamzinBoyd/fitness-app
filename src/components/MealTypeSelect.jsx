const MealTypeSelect = ({ children, bgColour, value, selected, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(value)}
            className={`MealTypeSelect flex justify-center items-center ${bgColour} rounded-full
                 ${
                     selected ? 'bg-primaryBlue' : 'bg-pastelOne'
                 } aspect-square w-full hover:border-primaryBlack hover:cursor-pointer transition-all duration-300`}
        >
            <div className="svg-wrapper hover:text-primaryBlack transition-colors duration-300">
                {children}
            </div>
        </div>
    );
};

export default MealTypeSelect;
