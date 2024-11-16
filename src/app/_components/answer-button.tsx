const AnswerButton = ({ item, onClick }: { item: any, onClick: () => void }) => {
    return (
        <button
            className="hover:opacity-15"
            onClick={onClick}>
            <img src={item.src} alt="logo" className="w-full object-cover" />
        </button>
    );
}

export default AnswerButton;