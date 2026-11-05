    //import { useState } from 'react';

interface RoleSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
}

const ROLES = [
  {value:0, label: 'Select Role'},
  { value: '1', label: 'Frontend Developer' },
  { value: '2', label: 'Backend Developer' },
  { value: '3', label: 'UI/UX Designer' },
  { value: '4', label: 'Fullstack Developer' },
  { value: '5', label: 'Project Manager' },
  { value: '6', label: 'Project Director' }
];

export default function RoleSelect({ value, onChange }: RoleSelectProps) {

    return (
    <select
        value={value}
        onChange={onChange}
        className="border border-slate-300 p-2 rounded"
    >
        {ROLES.map((role) => (
            <option key={role.value} value={role.label}>
                {role.label}
            </option>
        ))}
    </select> 
    )}