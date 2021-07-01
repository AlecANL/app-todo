import Logo from 'assets/logo.svg';
import './loading-page.css';

function LoadingPage() {
  return (
    <main className="loadingPage">
      <div className="loading-logo">
        <img src={Logo} alt="logo app" width="100" height="100" />
      </div>
    </main>
  );
}

export default LoadingPage;
