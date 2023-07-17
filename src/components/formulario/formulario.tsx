import Botao from "../botao/botao";
import style from './style.module.scss'
import {useState} from 'react'

export default function Formulario({addlista}: {addlista?:any}) {
    
    const [novatarefa,setNovaTarefa] = useState("")
    const [novotempo,setNovoTempo] = useState("00:00")


    function enviaNovaTarefa(e:React.FormEvent,ntarefa:string,ntempo:string){
        e.preventDefault()
        addlista(ntarefa,ntempo)
    }

    console.log("formulario renderizado")
    return (
        <form 
            className={style.novaTarefa}
            onSubmit={(e)=>enviaNovaTarefa(e,novatarefa,novotempo)}
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
                Adicionar
            </Botao>
        </form>
    )
}