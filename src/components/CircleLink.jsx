const CircleLink = ({ children, bgColour, url, fixed = false }) => {
    return (
        <a
            href={url}
            rel="noopener noreferrer"
            className={`circleLink flex justify-center items-center ${bgColour} rounded-full ${
                fixed ? 'w-32 h-32 p-5' : 'p-2'
            } border-4 border-primaryWhite hover:border-primaryBlack hover:cursor-pointer transition-all duration-300`}
        >
            <div className="svg-wrapper hover:text-primaryBlack transition-colors duration-300">
                {children}
            </div>
        </a>
    );
};

export default CircleLink;
