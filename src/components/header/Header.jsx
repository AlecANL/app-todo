import './header.css';
import Wrapper from 'components/wrapper/Wrapper';
import { useHistory } from 'react-router-dom';

function Header({ icon, title, page = '' }) {
  const history = useHistory();
  function handleBackHome() {
    history.goBack();
  }
  function renderHeader() {
    switch (page) {
      case 'search':
        return (
          <>
            <input placeholder="Search" type="search" />
            <span>cancel</span>
          </>
        );
      default:
        return (
          <>
            <div className="logo">
              <img
                src={icon}
                alt={`${title} icon`}
                width={32}
                height={32}
                onClick={handleBackHome}
              />
              <span>{title}</span>
            </div>
          </>
        );
    }
  }

  return (
    <header className="header">
      <Wrapper>
        <div className="header-content">{renderHeader()}</div>
      </Wrapper>
    </header>
  );
}

export default Header;
