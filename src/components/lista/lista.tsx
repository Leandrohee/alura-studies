import style from './style.module.scss'
import Item from './item/item'

export default function Lista({tarefas,enviaId}: {tarefas:any,enviaId:any}) {

    function RecebeId(id:any){
        enviaId(id)
    }

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudo do dia
            </h2>
            <ul>
                {tarefas.map((elemento:any,index:number)=>(
                    <Item 
                        id = {elemento.id}
                        key={elemento.id} 
                        titulo={elemento.titulo} 
                        tempo={elemento.tempo}
                        clicado ={elemento.clicado}
                        completado={elemento.completado}
                        enviaId={(id:any)=> RecebeId(id)}
                    />
                ))}
            </ul>
        </aside>
    )
}