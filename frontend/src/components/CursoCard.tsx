import React from 'react';
import { Curso } from '../types/Curso';

interface Props {
    curso: Curso;
    onDelete: (id: number) => void;
}

export const CursoCard: React.FC<Props> = ({ curso, onDelete }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>{curso.nombre}</h3>
            <p><strong>Docente:</strong> {curso.docente}</p>
            <p><strong>Nivel:</strong> {curso.nivel}</p>
            <p><strong>Créditos:</strong> {curso.creditos}</p>
            <button onClick={() => onDelete(curso.id)} style={{ color: 'red' }}>Eliminar Curso</button>
        </div>
    );
};