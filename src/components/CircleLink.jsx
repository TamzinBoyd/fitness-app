const CircleLink = ({ children, bgColour, url, styles }) => {
    return (
        <a
            href={url}
            rel="noopener noreferrer"
            className={`circleLink flex justify-center items-center ${bgColour} rounded-full ${styles} border-4 border-primaryWhite hover:border-primaryBlack hover:cursor-pointer transition-all duration-300`}
        >
            <div className="svg-wrapper hover:text-primaryBlack transition-colors duration-300">
                {children}
            </div>
        </a>
    );
};

export default CircleLink;
