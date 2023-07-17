import style from './style.module.scss'

export default function Botao({children,onClick}: {children: string,onClick?:()=>void}){                //tipei a funcao onlick para n ter parametro(void)


    return(
        <button 
            className={style.botao}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
