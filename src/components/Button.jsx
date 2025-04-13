const Button = ({ type = 'primary', ariaLabel, text, fullWdith = false }) => {
    const styles =
        type === 'primary'
            ? 'bg-secondaryBlue text-primaryWhite hover:bg-primaryBlue hover:text-primaryWhite'
            : 'bg-primaryWhite text-secondaryBlue border border-secondaryBlue hover:bg-primaryBlue';

    return (
        <button
            aria-label={ariaLabel || 'primary button'}
            type="button"
            className={`py-2 px-8 font-bold rounded-full ${styles} ${
                fullWdith ? 'w-full' : ''
            }
                `}
        >
            {text}
        </button>
    );
};

export default Button;
