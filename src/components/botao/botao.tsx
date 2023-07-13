import style from './style.module.scss'

export default function Botao({children}: {children: string}){
    return(
        <button className={style.botao}>{children}</button>
    )
}
