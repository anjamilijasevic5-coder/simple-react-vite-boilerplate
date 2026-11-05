//import { useState } from "react";
import { toast } from 'sonner';
 export interface User {
  id: number;
  name: string;
  role: string;
  city: string;
}
interface UserRowProps {
  user: User;
  onDelete: (id: number) => void;
  onUpdateRole: (id: number, newRole: string) => void;
    editingId: number | null;
    tempName: string;
    setTempName: React.Dispatch<React.SetStateAction<string>>;
    handleSave: (id: number) => void;
    handleStartEdit: (user: {id: number, name: string}) => void;   
}
const ROLES = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Fullstack Developer', 'Project Manager','Project Director'];

 function UserRow({user, onDelete, onUpdateRole, editingId, tempName, setTempName, handleSave, handleStartEdit }: UserRowProps) {

  return (
    <tr className="hover:bg-slate-50">
      <td className="border border-slate-300 p-2 text-sm text-slate-700">
        {editingId === user.id ? (
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onBlur={() => handleSave(user.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave(user.id);}}
              autoFocus
            className="border border-slate-300 p-1 rounded w-full"
          />
        ) : (
          <span onClick={() => handleStartEdit(user)} className="cursor-pointer">
            {user.name}
          </span>
        )}
      </td>
      <td className="border border-slate-300 p-2 text-sm text-slate-700">
        <select
          value={user.role}
          onChange={(e) => onUpdateRole(user.id, e.target.value)}
          className="border border-slate-300 p-2 rounded"
        >
          <option value="">Select Role</option>

          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </td>
      <td className="border border-slate-300 p-2 text-sm text-slate-700">{user.city}</td>
      <td className="border border-slate-300 p-2 text-center">
        <button
          onClick={() => {
            onDelete(user.id);
            toast.success('User deleted successfully!');
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;