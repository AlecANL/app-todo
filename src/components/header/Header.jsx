function Header({ icon, title, page = '' }) {
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
            <img src={icon} alt={`${title} icon`} />
            <span>{title}</span>
          </>
        );
    }
  }

  return <header className="header">{renderHeader()}</header>;
}

export default Header;
