import React, { useState } from 'react';
import type { Curso } from '../types/Curso';

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
        <article>
            <header>
                <h2 style={{ margin: 0 }}>Registrar Curso</h2>
            </header>
            <form onSubmit={handleSubmit} style={{ margin: 0 }}>
                <label>
                    Nombre:
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
                </label>
                <label>
                    Docente:
                    <input type="text" value={docente} onChange={e => setDocente(e.target.value)} required />
                </label>
                <label>
                    Nivel:
                    <select value={nivel} onChange={e => setNivel(e.target.value)}>
                        <option value="Básico">Básico</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                </label>
                <label>
                    Créditos:
                    <input type="number" value={creditos} onChange={e => setCreditos(Number(e.target.value))} required />
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Registrar</button>
            </form>
        </article>
    );
};