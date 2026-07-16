import React from 'react';
import type { Curso } from '../types/Curso';

interface Props {
    curso: Curso;
    onDelete: (id: number) => void;
}

export const CursoCard: React.FC<Props> = ({ curso, onDelete }) => {
    return (
        <article style={{ marginBottom: '20px' }}>
            <header>
                <h3 style={{ margin: 0 }}>{curso.nombre}</h3>
            </header>
            <p><strong>Docente:</strong> {curso.docente}</p>
            <p><strong>Nivel:</strong> {curso.nivel}</p>
            <p><strong>Créditos:</strong> {curso.creditos}</p>
            
            <footer style={{ textAlign: 'right' }}>
                <button 
                    onClick={() => onDelete(curso.id)} 
                    style={{ backgroundColor: '#d32f2f', color: 'white', border: 'none', width: 'auto' }}>
                    Eliminar
                </button>
            </footer>
        </article>
    );
};