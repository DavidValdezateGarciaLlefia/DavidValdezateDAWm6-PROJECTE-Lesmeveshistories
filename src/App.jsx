import './App.css';
import { Button } from "@nextui-org/react";
import { Cards } from './componentes/cards/Cards';
import { GlobalContextProvider } from './context/globalContext';
import ModalForm from './componentes/modals/ModalForm';
import React, { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHistoria, setCurrentHistoria] = useState(null);

  const abrirModal = (historia = null) => {
    console.log(historia ? 'Editando historia' : 'Creando historia');
    setCurrentHistoria(historia);
    setIsModalOpen(true);
  };

  const cerrarModal = () => setIsModalOpen(false);

  const controladorNuevaHistoria = (nuevaHistoria) => {
    console.log("Nueva historia creada:", nuevaHistoria);
    cerrarModal();
  };

  return (
    <GlobalContextProvider>
      <div className="flex flex-wrap gap-4 items-center">
        <Cards abrirModal={abrirModal} />
        <button className="absolute right-4 bottom-4 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg hover:bg-green-600 focus:outline-none"
          onClick={() => abrirModal({})}>
          +
        </button>
        <ModalForm
          isOpen={isModalOpen}
          onClose={cerrarModal}
          initialData={currentHistoria || { titulo: '', fecha: '', experiencia: '', comentario: '', imagen: '' }}
          onSubmit={currentHistoria ? controladorNuevaHistoria : controladorNuevaHistoria}
        />
      </div>
    </GlobalContextProvider>
  );
}