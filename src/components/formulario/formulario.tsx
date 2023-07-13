import Botao from "../botao/botao";
import style from './style.module.scss'
import {useState} from 'react'

export default function Formulario({alista}: {alista?:any}) {
    
    const [novatarefa,setNovaTarefa] = useState("")
    const [novotempo,setNovoTempo] = useState("00:00")


    function addNovaTarefa(e:React.FormEvent,ntarefa:string,ntempo:string){
        e.preventDefault()
        alista(ntarefa,ntempo)
    }

    console.log("formulario renderizado")
    return (
        <form 
            className={style.novaTarefa}
            onSubmit={(e)=>addNovaTarefa(e,novatarefa,novotempo)}
        >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que vc quer estudar?" 
                    required
                    value={novatarefa}
                    onChange={e => setNovaTarefa(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    name="tempo" 
                    id="tempo" 
                    step="1" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required
                    value={novotempo}
                    onChange={e=> {setNovoTempo(e.target.value)}}
                />
            </div>
            <Botao>
                Botão
            </Botao>
        </form>
    )
}