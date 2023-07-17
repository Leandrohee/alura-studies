import Cronometro from '../components/cronometro/cronometro';
import Formulario from '../components/formulario/formulario';
import Lista from '../components/lista/lista';
import style from './style.module.scss'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App() {

  const [tarefas, setTarefas]: Array<any> = useState([])

  function recebeId(id: any) {                                                //Essa eh a funcao responsavel por receber o id do li clicado e mudar o clicado de false para true ou de true para false
    const idIndex = tarefas.findIndex(((tarefa: any) => tarefa.id === id))    //Verifica qual eh o index do li clicado


    if (idIndex !== -1) {                                                     //Se for -1 quer dizer que o id nao foi encontrado no array tarefas
      const novasTarefas = tarefas.map((tarefa:any)=>{                        //coloco todos os elementos do array com clicado como false
        return({
          ...tarefa,
          clicado: false
        })
      })                                                                      

      novasTarefas[idIndex] = {
        ...novasTarefas[idIndex],
        clicado: tarefas[idIndex].clicado === false ? true : false            //Muda de true para false quando clicado e de false para true
      }

      setTarefas(novasTarefas)                                                //Atualiza a tarefas baseada na tarefaNovas
    }
    else{
      console.log("nao foi encontrado o id")
    }
  }

  function recebeTarefaFinalizada(id: any){                                   //Essa eh a funcao que conclui a tarefa
    const idIndex = tarefas.findIndex(((tarefa: any) => tarefa.id === id))    //Verifica qual eh o index do li concluido

    if (idIndex !== -1) {                                                     //Se for -1 quer dizer que o id nao foi encontrado no array tarefas
      const novasTarefas = [...tarefas]                                        

      novasTarefas[idIndex] = {
        ...novasTarefas[idIndex],
        clicado: false,
        completado: true                                                     //Muda para true 
      }

      setTarefas(novasTarefas)                                                //Atualiza a tarefas baseada na tarefaNovas
    }
    else{
      console.log("nao foi encontrado o id")
    }

  }

  function addLista(ntarefa: string, ntempo: string) {                         //Essa funcao adiciona tarefas na lista
    setTarefas([
      ...tarefas,
      {
        id: uuidv4(),
        titulo: ntarefa,
        tempo: ntempo,
        completado: false,
        clicado: false,
      }
    ])
  }

const tarefaSelecionada:any = tarefas.filter((tarefa:any)=>{                        //Filtra somente a tarefa que contem o clicado como true, ou seja a tarefa selecionada
    return tarefa.clicado ===  true
})

  console.log(tarefas)
  console.log("App renderizado")
  return (
    <div className={style.AppStyle}>
      <Formulario addlista={(ntarefa: string, ntempo: string) => addLista(ntarefa, ntempo)} />
      <Lista tarefas={tarefas} enviaId={(id: any) => recebeId(id)} />
      <Cronometro tarefaselecionada={tarefaSelecionada} tarefafinalizada={(id:any)=> recebeTarefaFinalizada(id)}/>
    </div>
  );




}





