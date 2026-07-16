import React from 'react';
import { useCursos } from './hooks/useCursos';
import { CursoForm } from './components/CursoForm';
import { CursoList } from './components/CursoList';

const App: React.FC = () => {
    const { cursos, loading, error, agregarCurso, eliminarCurso } = useCursos();

    return (
        <main className="container" style={{ marginTop: '30px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Gestión de Cursos - Dirección Académica</h1>
            
            {error && <article style={{ backgroundColor: '#ffcdd2', color: '#b71c1c' }}>{error}</article>}
            
            {/* Aquí usamos "grid" para dividir en dos columnas */}
            <div className="grid">
                {/* Columna Izquierda */}
                <div>
                    <CursoForm onAdd={agregarCurso} />
                </div>
                
                {/* Columna Derecha */}
                <div>
                    {loading ? (
                        <p aria-busy="true">Cargando cursos...</p>
                    ) : (
                        <CursoList cursos={cursos} onDelete={eliminarCurso} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default App;