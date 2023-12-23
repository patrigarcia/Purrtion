import { create } from 'zustand';


interface EstadoGato {
    nombre: string;
    edad: number;
    tipoGato: 'cachorro' | 'adulto' | 'exterior' | 'interior' | 'mixto';
    peso: number;
    nivelActividad: 'activo' | 'normal' | 'perezoso';
    expandedPost: number; 
}

interface AccionesGato {
    setNombre: (nombre: string) => void;
    setEdad: (edad: number) => void;
    setTipoGato: (tipoGato: 'cachorro' | 'adulto' | 'exterior' | 'interior' | 'mixto') => void;
    setPeso: (peso: number) => void;
    setNivelActividad: (nivelActividad: 'activo' | 'normal' | 'perezoso') => void;
    setExpandedPost: (index: number) => void; 
}

const useStore = create<EstadoGato & AccionesGato>((set) => ({
   
    nombre: '',
    edad: 1,
    tipoGato: 'cachorro',
    peso: 0.2,
    nivelActividad: 'activo',
    expandedPost: -1, 

    
    setNombre: (nombre) => set({ nombre }),
    setEdad: (edad) => set({ edad }),
    setTipoGato: (tipoGato) => set({ tipoGato }),
    setPeso: (peso) => set({ peso }),
    setNivelActividad: (nivelActividad) => set({ nivelActividad }),
    setExpandedPost: (index) => set({ expandedPost: index }), 
}));

export default useStore;
