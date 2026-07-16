import React from 'react';
import { useCursos } from './hooks/useCursos';
import { CursoForm } from './components/CursoForm';
import { CursoList } from './components/CursoList';

const App: React.FC = () => {
    const { cursos, loading, error, agregarCurso, eliminarCurso } = useCursos();

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Gestión de Cursos - Dirección Académica</h1>
            
            {error && <div style={{ color: 'white', backgroundColor: 'red', padding: '10px' }}>{error}</div>}
            
            <CursoForm onAdd={agregarCurso} />
            
            {loading ? (
                <p>Cargando cursos...</p>
            ) : (
                <CursoList cursos={cursos} onDelete={eliminarCurso} />
            )}
        </div>
    );
};

export default App;