const DropdownDots = () => {
    return (
        <div className="dropdown absolute top-0 right-1">
            <div
                tabIndex={0}
                role="button"
                className="text-2xl text-primaryBlack"
            >
                ⋮
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    );
};

export default DropdownDots;
