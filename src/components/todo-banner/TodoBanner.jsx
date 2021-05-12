import screen1 from '../../assets/screen-1.png';
import './todo-banner.css';

export function TodoBanner() {
  return (
    <div className="todoBanner">
      <div className="banner-screen">
        <img src={screen1} alt="screen 1" width="268" height="172" />
      </div>
      <div className="banner-description">
        <p className="heading">Mantén tus tareas organizadas en proyectos</p>
        <p className="sub-heading">
          Mantén tus tareas organizadas en proyectos
        </p>
      </div>
    </div>
  );
}
