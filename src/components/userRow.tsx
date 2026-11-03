 export interface User {
  id: number;
  name: string;
  role: string;
  city: string;
}
interface UserRowProps {
  user: User;
  onDelete: (id: number) => void;
}

 function UserRow({user, onDelete }: UserRowProps) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border border-slate-300 p-2 text-sm text-slate-700">{user.name}</td>
      <td className="border border-slate-300 p-2 text-sm text-slate-700">{user.role}</td>
      <td className="border border-slate-300 p-2 text-sm text-slate-700">{user.city}</td>
      <td className="border border-slate-300 p-2 text-center">
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;