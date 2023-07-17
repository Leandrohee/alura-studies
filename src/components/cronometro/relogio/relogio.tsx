import style from './style.module.scss'

interface PropsRelogio{
    tempo: number
}


export default function Relogio({tempo=0}: PropsRelogio){                           //Defini o tempo padrao como 0, mas pode ser alterado depois 

    const minutos = Math.floor(tempo/60)                                            //Pegando somente os minutos (ex. 13:44 = 13)
    const segundos = tempo % 60                                                     //Pegando o resto da divisao do tempo por 60
    const [priDigMinuto,segDigMinuto]:any = String(minutos).padStart(2,"0")         //Pega o primeiro e segundo digito dos min
    const [priDigSegundos,segDigSegundos]:any = String(segundos).padStart(2,"0")    //Pega o primeiro e segundo digito dos segundos

    return(
        <>
            <span className={style.relogioNumero}>{priDigMinuto}</span>
            <span className={style.relogioNumero}>{segDigMinuto}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{priDigSegundos}</span>
            <span className={style.relogioNumero}>{segDigSegundos}</span>
        </>
    )
}




/*
minutos = "5"

------------------
priDigMin = String(minutos)[0].padStart(2,"0") = 5
segDigMin = String(minutos)[1].padStart(2,"0") = 0

ISSO EH A MESMA COISA DISSO

[priDigMin,segDigMin] = String(minutos).padStart(2,"0")
*/