import React, { useState, useEffect, useContext } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";
import { Calendar, Pencil, Image as ImageIcon } from 'lucide-react';
import { GlobalContext } from "../../context/globalContext";

export default function ModalForm({ isOpen, onClose, initialData }) {
    const [formData, setFormData] = useState(initialData);
    const { agregarHistoria, editarHistoria } = useContext(GlobalContext);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const controladorFormHistoria = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const controladorEnvio = (e) => {
        e.preventDefault();
        if (formData.id) {
            editarHistoria(formData.id, formData);
        } else {
            agregarHistoria(formData);
        }
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} placement="center">
            <ModalContent>
                <form onSubmit={controladorEnvio}>
                    <ModalHeader>
                    <ModalHeader>
    {formData.id ? `Editar historia` : "Crear nueva historia"}
</ModalHeader>
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            clearable
                            underlined
                            label="Título"
                            placeholder="Título de la historia"
                            name="titulo"
                            value={formData.titulo}
                            onChange={controladorFormHistoria}
                            endContent={<Pencil className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        />
                        <Input
                            clearable
                            underlined
                            label="Fecha"
                            placeholder="Ejemplo: Junio de 2023"
                            name="fecha"
                            value={formData.fecha}
                            onChange={controladorFormHistoria}
                            endContent={<Calendar className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        />
                        <Textarea
                            underlined
                            label="Experiencia"
                            placeholder="Describe tu experiencia"
                            name="experiencia"
                            value={formData.experiencia}
                            onChange={controladorFormHistoria}
                        />
                        <Textarea
                            underlined
                            label="Comentario"
                            placeholder="Escribe comentarios"
                            name="comentario"
                            value={formData.comentario}
                            onChange={controladorFormHistoria}
                        />
                        <Input
                            clearable
                            underlined
                            label="Imagen"
                            placeholder="URL de la imagen"
                            name="imagen"
                            value={formData.imagen}
                            onChange={controladorFormHistoria}
                            endContent={<ImageIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button auto flat color="error" onPress={onClose} style={{ backgroundColor: '#f87171', color: 'white' }}>
                            Cerrar
                        </Button>
                        <Button auto type="submit" color="primary" style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                            {formData.titulo ? "Editar Historia" : "Crear Historia"}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}