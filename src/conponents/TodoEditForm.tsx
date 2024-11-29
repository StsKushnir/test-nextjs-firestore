interface TodoEditFormProps {
  editTodoName: string;
  editTodoDescription: string;
  setEditTodoName: React.Dispatch<React.SetStateAction<string>>;
  setEditTodoDescription: React.Dispatch<React.SetStateAction<string>>;
  saveEdit: (name: string, description: string) => void; 
  cancelEditing: () => void;
}

export const TodoEditForm = ({
  editTodoName,
  editTodoDescription,
  setEditTodoName,
  setEditTodoDescription,
  saveEdit,
  cancelEditing,
}: TodoEditFormProps) => (
  <div className="flex flex-col gap-2">
    <input
      type="text"
      className="border p-2 text-black"
      value={editTodoName}
      onChange={(e) => setEditTodoName(e.target.value)}
    />
    <textarea
      className="border p-2 text-black"
      value={editTodoDescription}
      onChange={(e) => setEditTodoDescription(e.target.value)}
    />
    <div className="flex justify-between mt-2">
      <button
        onClick={() => saveEdit(editTodoName, editTodoDescription)}  
        className="bg-green-500 text-white py-1 px-4"
      >
        Save
      </button>
      <button
        onClick={cancelEditing}
        className="bg-gray-500 text-white py-1 px-4"
      >
        Cancel
      </button>
    </div>
  </div>
);
