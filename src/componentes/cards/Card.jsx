import { Card, CardHeader, CardFooter, Button, CardBody } from "@nextui-org/react";
import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from "react";
import ModalForm from "../modals/ModalForm";

export function Tarjeta({ historia }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataHistoria, setDataHistoria] = useState(historia);

    const abrirModal = () => { 
        console.log('actualizando historia');
        setIsModalOpen(true);
    };

    const cerrarModal = () => setIsModalOpen(false);

    const handleUpdate = (updatedData) => {
        console.log(updatedData);
    };

    const controladorBorrarHistoria = () => {
        console.log("Borrando la historia con id: ", dataHistoria.id);
    };

    return (
        <div className="m-0.5"> 
            <Card radius="lg" className="border-none" style={{ width: '475px', height: '350px', backgroundImage: `url("${dataHistoria.imagen}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'transparent' }}>
                    <p className="text-tiny uppercase font-bold" style={{ color: 'white' }}>{dataHistoria.titulo}</p>
                    <h3 className="text-default-500 font-bold" style={{ color: 'white' }}>{dataHistoria.fecha}</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-2 relative">
                </CardBody>
                <CardFooter className="justify-between border-white/20 border-1 overflow-hidden absolute bottom-0 left-0 shadow-small z-10"
                    style={{ backdropFilter: 'blur(10px)', zIndex: 11, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px 5px', width: '475px' }}>
                    <p className="text-tiny text-white/80">{dataHistoria.comentario}</p>
                    <Button onClick={abrirModal} className="ml-1 text-tiny text-white bg-black/10" variant="flat" color="default" radius="lg" size="sm"
                        style={{ borderColor: 'yellow', color: 'yellow', borderWidth: '2px', height: '40px',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Pencil />
                    </Button>
                    <Button onClick={controladorBorrarHistoria} className="text-tiny text-white ml-5 bg-black/10 " variant="flat" color="default" radius="lg" size="sm"
                        style={{ borderColor: 'red', color: 'red', borderWidth: '2px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Trash2 />
                    </Button>
                </CardFooter>
            </Card>
            
            <ModalForm 
                isOpen={isModalOpen} 
                onClose={cerrarModal} 
                initialData={dataHistoria} 
                onSubmit={handleUpdate} 
            />
        </div>
    );
}