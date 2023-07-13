import Cronometro from '../components/cronometro/cronometro';
import Formulario from '../components/formulario/formulario';
import Lista from '../components/lista/lista';
import style from './style.module.scss'
import {useState} from 'react'

export default function App() {

  const [tarefas, setTarefas] = useState(
    [
        {
         titulo: "React",
         tempo: "02:00:00"
        },
     ])

  function aLista(ntarefa:string,ntempo:string){
    setTarefas([...tarefas,{titulo: ntarefa,tempo: ntempo}])
  }


  console.log("App renderizado")
  return (
    <div className={style.AppStyle}>
      <Formulario alista={(ntarefa:string,ntempo:string)=>aLista(ntarefa,ntempo)} />
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

