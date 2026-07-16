import { useState, useEffect } from 'react';
import type { Curso } from '../types/Curso';
import { getCursos, createCurso, deleteCurso } from '../services/cursoService';

export const useCursos = () => {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const cargarCursos = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getCursos();
            setCursos(data);
        } catch {
            setError('Error al obtener los cursos desde el servidor.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const cargarDesdeServidor = async () => {
            try {
                const data = await getCursos();
                if (isMounted) {
                    setCursos(data);
                }
            } catch {
                if (isMounted) {
                    setError('Error al obtener los cursos desde el servidor.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        void cargarDesdeServidor();

        return () => {
            isMounted = false;
        };
    }, []);

    const agregarCurso = async (nuevoCurso: Omit<Curso, 'id'>) => {
        try {
            await createCurso(nuevoCurso);
            await cargarCursos(); 
        } catch (err) {
            setError('Error al registrar el curso.');
        }
    };

    const eliminarCurso = async (id: number) => {
        try {
            await deleteCurso(id);
            await cargarCursos();
        } catch (err) {
            setError('Error al eliminar el curso.');
        }
    };

    return { cursos, loading, error, agregarCurso, eliminarCurso };
};