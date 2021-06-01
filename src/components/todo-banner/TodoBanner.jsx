import './todo-banner.css';

export function TodoBanner({ screen, title, subTitle }) {
  return (
    <div className="todoBanner">
      <div className="banner-screen">
        <img src={screen} alt="screen 1" width="268" height="172" />
      </div>
      <div className="banner-description">
        <p className="banner-heading">{title}</p>
        <p className="sub-heading">{subTitle}</p>
      </div>
    </div>
  );
}
