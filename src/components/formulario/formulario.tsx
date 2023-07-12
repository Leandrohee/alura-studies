import Botao from "../botao/botao";
import style from './style.module.scss'

export default function Formulario() {
    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que vc quer estudar?" required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required/>
            </div>
            <Botao/>
        </form>
    )
}