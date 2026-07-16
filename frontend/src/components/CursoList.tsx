import React from 'react';
import { Curso } from '../types/Curso';
import { CursoCard } from './CursoCard';

interface Props {
    cursos: Curso[];
    onDelete: (id: number) => void;
}

export const CursoList: React.FC<Props> = ({ cursos, onDelete }) => {
    if (cursos.length === 0) return <p>No hay cursos registrados.</p>;

    return (
        <div>
            <h2>Listado de Cursos</h2>
            {cursos.map(curso => (
                <CursoCard key={curso.id} curso={curso} onDelete={onDelete} />
            ))}
        </div>
    );
};