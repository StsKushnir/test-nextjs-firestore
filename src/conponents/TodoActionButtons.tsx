interface TodoActionButtonsProps {
  onChange: () => void;
  onDelete: () => void;
}

export function TodoActionButtons({ onChange, onDelete }: TodoActionButtonsProps) {
  return (
    <div className="flex flex-row justify-between mt-4">
      <button
        onClick={onChange}
        className="text-[#0000CD] font-bold hover:underline"
      >
        Change
      </button>
      <button
        onClick={onDelete}
        className="text-[#FF4500] font-bold hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
