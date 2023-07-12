import style from './style.module.scss'

export default function Lista() {

    const tarefas = [
       {
        titulo: "React",
        tempo: "02:00:00"
       },
       {
        titulo: "Javascript",
        tempo: "01:00:00"
       },
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((elemento,index)=>(
                    <li key={index} className={style.item}>
                        <h3>{elemento.titulo}</h3>
                        <span>{elemento.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}