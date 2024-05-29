
import './App.css'

import {Button} from "@nextui-org/react";
import { Camera } from 'lucide-react';
import { Cards } from './componentes/cards/Cards';
import { GlobalContextProvider } from './context/globalContext';

export default function App() {
  return (
    <GlobalContextProvider>
    <div className="flex flex-wrap gap-4 items-center">
    
      <Cards></Cards>
      <button className="absolute right-4 bottom-4 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg hover:bg-green-600 focus:outline-none"
                    onClick={() => { console.log("Add new item"); }}>
                +
            </button>
    </div>
    </GlobalContextProvider>
  );
}