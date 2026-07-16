import React, { useState } from 'react';
import { Curso } from '../types/Curso';

interface Props {
    onAdd: (curso: Omit<Curso, 'id'>) => void;
}

export const CursoForm: React.FC<Props> = ({ onAdd }) => {
    const [nombre, setNombre] = useState('');
    const [docente, setDocente] = useState('');
    const [nivel, setNivel] = useState('Básico');
    const [creditos, setCreditos] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nombre || !docente || !creditos) return;
        
        onAdd({ nombre, docente, nivel, creditos: Number(creditos) });
        setNombre('');
        setDocente('');
        setNivel('Básico');
        setCreditos('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', background: '#f9f9f9' }}>
            <h2>Registrar Nuevo Curso</h2>
            <div>
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Docente: </label>
                <input type="text" value={docente} onChange={e => setDocente(e.target.value)} required />
            </div>
            <div>
                <label>Nivel: </label>
                <select value={nivel} onChange={e => setNivel(e.target.value)}>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </div>
            <div>
                <label>Créditos: </label>
                <input type="number" value={creditos} onChange={e => setCreditos(Number(e.target.value))} required />
            </div>
            <button type="submit" style={{ marginTop: '10px' }}>Registrar</button>
        </form>
    );
};