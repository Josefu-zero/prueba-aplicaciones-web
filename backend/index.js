// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Arreglo en memoria
let cursos = [
    { id: 1, nombre: "Ingeniería de Software", docente: "Dr. Jaime Sayago-Heredia", nivel: "Avanzado", creditos: 4 }
];

// GET: Listar todos los cursos
app.get('/api/cursos', (req, res) => {
    res.status(200).json(cursos);
});

// GET: Consultar curso específico (Opcional en rúbrica)
app.get('/api/cursos/:id', (req, res) => {
    const curso = cursos.find(c => c.id === parseInt(req.params.id));
    if (!curso) return res.status(404).json({ error: 'Curso no encontrado' });
    res.status(200).json(curso);
});

// POST: Registrar nuevo curso
app.post('/api/cursos', (req, res) => {
    const { nombre, docente, nivel, creditos } = req.body;
    const nuevoCurso = {
        id: cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 1,
        nombre,
        docente,
        nivel,
        creditos
    };
    cursos.push(nuevoCurso);
    res.status(201).json(nuevoCurso);
});

// DELETE: Eliminar curso
app.delete('/api/cursos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = cursos.findIndex(c => c.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }
    
    cursos.splice(index, 1);
    res.status(204).send(); // 204 No Content
});

app.listen(PORT, () => {
    console.log(`Backend ejecutándose en http://localhost:${PORT}`);
});