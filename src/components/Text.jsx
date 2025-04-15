const Text = ({ textAlign, colour, bold, children }) => {
    return (
        <p className={`${textAlign} ${colour} ${bold ? 'font-bold' : ''}`}>
            {children}
        </p>
    );
};

export default Text;
