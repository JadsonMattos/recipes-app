import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

type HeaderProps = {
  title: string;
  search?: boolean;
};

function Header({ title, search = false }: HeaderProps) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(false);

  function handleProfileClick() {
    navigate('/profile');
  }

  function handleSearchInput() {
    setSearchInput(!searchInput);
  }

  return (
    <header>
      <button
        onClick={ handleProfileClick }
        onKeyDown={ handleProfileClick }
      >
        <img
          alt="profileIcon"
          data-testid="profile-top-btn"
          src="src/images/profileIcon.svg"
        />
      </button>
      {search && (
        <button
          onClick={ handleSearchInput }
          onKeyDown={ handleSearchInput }
        >
          <img
            alt="searchIcon"
            data-testid="search-top-btn"
            src="src/images/searchIcon.svg"
          />
        </button>
      )}
      {searchInput && (
        <SearchBar title={ title } />
      )}
      <title data-testid="page-title">{title}</title>
    </header>
  );
}

export default Header;
