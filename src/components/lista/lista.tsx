import style from './style.module.scss'
import Item from './item/item'
import {useState} from 'react'

export default function Lista({tarefas}: {tarefas:any}) {

    console.log(tarefas)

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudo do dia
            </h2>
            <ul>
                {tarefas.map((elemento:any,index:number)=>(
                    <Item 
                        key={index} 
                        titulo={elemento.titulo} 
                        tempo={elemento.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}