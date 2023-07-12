import Formulario from '../components/formulario/formulario';
import Lista from '../components/lista/lista';
import style from './style.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

