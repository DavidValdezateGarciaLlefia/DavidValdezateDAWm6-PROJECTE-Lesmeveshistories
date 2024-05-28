
import './App.css'

import {Button} from "@nextui-org/react";
import { Camera } from 'lucide-react';

export default function App() {
  return (
    
    <div className="flex flex-wrap gap-4 items-center">
      <h1>David Valdezate les meves histories
        
      </h1>
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="faded">
        Faded
      </Button>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="flat">
        Flat
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
      <Camera color="red" size={48} />
    </div>
  );
}