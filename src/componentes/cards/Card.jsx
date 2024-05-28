
import {Card, CardHeader, CardFooter,Button, CardBody, Image} from "@nextui-org/react";
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';

import React from "react";

export function Tarjeta(){
    return(
        <div className="m-0.5"> 
            <Card radius="lg" className="border-none" style={{ width: '475px', height: '350px', backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gokyo_Lake%2C_Ngozumpa_Glacier%2C_Arakamtse%2C_Cholatse%2C_Nepal%2C_Himalayas.jpg/640px-Gokyo_Lake%2C_Ngozumpa_Glacier%2C_Arakamtse%2C_Cholatse%2C_Nepal%2C_Himalayas.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'transparent' }}>
                    <p className="text-tiny uppercase font-bold" style={{ color: 'white' }}>Viaje a Nepal</p>
                    <h3 className="text-default-500 font-bold" style={{ color: 'white' }}>Agosto de 2024</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-2 relative">
                </CardBody>
                <CardFooter className="justify-between border-white/20 border-1 overflow-hidden absolute bottom-0 left-0 shadow-small z-10"
                    style={{ backdropFilter: 'blur(10px)', zIndex: 11, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px 5px', width: '475px' }}>
                    <p className="text-tiny text-white/80">¡Una aventura alucinante! 17 días de viaje mochilero por un paraiso. Recorrimos todo el norte de Nepal caminando...</p>
                    <Button className="ml-1 text-tiny text-white bg-black/10" variant="flat" color="default" radius="lg" size="sm"
                        style={{ borderColor: 'yellow', color: 'yellow', borderWidth: '2px', height: '40px',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Pencil />
                    </Button>
                    <Button className="text-tiny text-white ml-5 bg-black/10 " variant="flat" color="default" radius="lg" size="sm"
                        style={{ borderColor: 'red', color: 'red', borderWidth: '2px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Trash2 />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
   