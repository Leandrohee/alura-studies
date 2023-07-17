import style from '../../lista/style.module.scss'


interface PropsItem{
    titulo:string
    tempo:string
    id:string
    enviaId:any
    clicado:boolean
    completado: boolean    
}

export default function Item({titulo,tempo,id,enviaId,clicado,completado}: PropsItem){

    function foiClicado(e:any){
        enviaId(e.target.id)
    }

    return(
        <li 
            id={id} 
            className={`
                ${style.item} 
                ${clicado == true ? style.itemSelecionado : ""}
                ${completado == true ? style.itemCompletado : ""}
                `} 
            onClick={(e)=>!completado && foiClicado(e)}                                             //!true eh false. Entao sempre que estiver completado vai impedir de ser clicado
        >
            <h3>{titulo}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}    //Renderizacao condicional
        </li>
    )
}