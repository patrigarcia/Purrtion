import { create } from 'zustand';


interface EstadoGato {
    nombre: string;
    edad: number;
    tipoGato: 'cachorro' | 'adulto' | 'exterior' | 'interior' | 'mixto';
    peso: number;
    nivelActividad: 'activo' | 'normal' | 'perezoso';

}

interface AccionesGato {
    setNombre: (nombre: string) => void;
    setEdad: (edad: number) => void;
    setTipoGato: (tipoGato: 'cachorro' | 'adulto' | 'exterior' | 'interior' | 'mixto') => void;
    setPeso: (peso: number) => void;
    setNivelActividad: (nivelActividad: 'activo' | 'normal' | 'perezoso') => void;
   
}

const useStore = create<EstadoGato & AccionesGato>((set) => ({
 
    nombre: '',
    edad: 1,
    tipoGato: 'cachorro',
    peso: 0.2,
    nivelActividad: 'activo',
   
    setNombre: (nombre) => set({ nombre }),
    setEdad: (edad) => set({ edad }),
    setTipoGato: (tipoGato) => set({ tipoGato }),
    setPeso: (peso) => set({ peso }),
    setNivelActividad: (nivelActividad) => set({ nivelActividad }),
}));

export default useStore;
