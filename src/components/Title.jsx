const Title = ({
    title,
    textColour = 'text-primaryBlack',
    hierarchy = 'h1'
}) => {
    const HeadingTag = hierarchy;

    return (
        <HeadingTag className={`font-bold ${textColour}`}>{title}</HeadingTag>
    );
};

export default Title;
