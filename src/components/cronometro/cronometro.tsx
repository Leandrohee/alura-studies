import Botao from "../botao/botao";
import Relogio from "./relogio/relogio";
import style from "./style.module.scss"
import { useEffect, useState } from "react";
import transformaTempo from "../../funcoes/transformaTempo";


interface PropsCronometro{
    tarefaselecionada:Array<any>
    tarefafinalizada:any
}


export default function Cronometro({ tarefaselecionada,tarefafinalizada }: PropsCronometro) {

    const [tempo, setTempo]: any = useState()

    useEffect(() => {
        if (tarefaselecionada.length > 0) {                                           //Se tem algum item selecionado autoriza a prosseguir
            setTempo(transformaTempo(tarefaselecionada[0].tempo))
        }
    },[tarefaselecionada[0]])

    console.log(tempo)

    function clickRegressiva(tempo: number|any) {                                   //Contagem regressiva
        setTimeout(()=>{
            if(tempo>0){
                setTempo(tempo-1)
                return clickRegressiva(tempo-1)
            }
            else{
                tarefafinalizada(tarefaselecionada[0].id)
            }
        },1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=>{clickRegressiva(tempo)}}>
                Começar!
            </Botao>
        </div>
    )
}
