const ContainerCard = ({ children, borderColour }) => {
    return (
        <div class={`card w-full rounded-xl shadow-md border ${borderColour}`}>
            <div class="card-body p-3">{children}</div>
        </div>
    );
};

export default ContainerCard;
