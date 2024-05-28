import { Tarjeta } from "./Card"


export function Cards(){
    return(
       <div className="container relative mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-2 mt-4">Mis historias</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
           
        </div>
    )
}