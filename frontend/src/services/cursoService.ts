import axios from 'axios';
import type { Curso } from '../types/Curso';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const getCursos = async (): Promise<Curso[]> => {
    const response = await api.get('/cursos');
    return response.data;
};

export const createCurso = async (curso: Omit<Curso, 'id'>): Promise<Curso> => {
    const response = await api.post('/cursos', curso);
    return response.data;
};

export const deleteCurso = async (id: number): Promise<void> => {
    await api.delete(`/cursos/${id}`);
};