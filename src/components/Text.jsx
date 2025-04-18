const Text = ({
    textAlign = 'text-left',
    colour = 'text-primaryBlack',
    bold,
    children,
    smallFont = false
}) => {
    return (
        <p
            className={`w-full ${textAlign} ${colour} ${
                bold ? 'font-bold' : ''
            } ${smallFont ? 'text-sm' : ''}`}
        >
            {children}
        </p>
    );
};

export default Text;
