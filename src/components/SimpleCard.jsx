const SimpleCard = ({ borderColour = 'border-pastelOne', children }) => {
    return (
        <div
            className={`border ${borderColour} flex justify-between gap-3 rounded-lg p-3`}
        >
            {children}
        </div>
    );
};

export default SimpleCard;
