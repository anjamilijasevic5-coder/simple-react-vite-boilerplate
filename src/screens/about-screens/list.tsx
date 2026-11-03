import { useState } from 'react';
import UserRow from "@/components/userRow";
import TableHeader from "@/components/tableHeader";

function UserTable() {
  
  const initialData = [
    { id: 1, name: 'Anja Milijasevic', role: 'Frontend Developer', city: 'Belgrade' },
    { id: 2, name: 'Marko Markovic', role: 'Backend Developer', city: 'Novi Sad' },
    { id: 3, name: 'Jovana Petrovic', role: 'UI/UX Designer', city: 'Nis' },
    { id: 4, name: 'Petar Jovanovic', role: 'Fullstack Developer', city: 'Kragujevac' },
    { id: 5, name: 'Maja Stojanovic', role: 'Project Manager', city: 'Subotica' }
  ];

  const [users, setUsers] = useState(initialData);

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-slate-800">List of Users (JSON table)</h2>     
      <table className="w-full border-collapse border border-slate-300 text-left">
        <TableHeader />
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UserRow key={user.id} user={user} onDelete={handleDelete} />
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4 text-slate-500 text-sm">
                No more data in the table.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;