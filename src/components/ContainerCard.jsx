const ContainerCard = ({ children, borderColour }) => {
    return (
        <div class={`card bg-base-100 w-full shadow-md border ${borderColour}`}>
            <div class="card-body p-2">{children}</div>
        </div>
    );
};

export default ContainerCard;
