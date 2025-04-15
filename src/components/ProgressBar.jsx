const ProgressBar = ({
    colour = 'bg-secondaryBlue',
    strokeColour,
    value,
    total,
    text,
    type = 'large'
}) => {
    const percent = Math.min((value / total) * 100, 100);
    const borderClass = strokeColour ? `border ${strokeColour}` : '';

    return (
        <div className="flex items-center relative">
            {text && (
                <span className="absolute w-full text-center text-primaryBlack font-bold">
                    {text}
                </span>
            )}

            <div
                className={`w-full ${(type = 'large'
                    ? 'h-12'
                    : 'h-4')} bg-primaryWhite rounded-full overflow-hidden ${
                    strokeColour && borderClass
                } flex items-center gap-2`}
            >
                <div
                    className={`${colour} ${(type = 'large'
                        ? 'h-12'
                        : 'h-4')} rounded-full transition-all duration-300`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
