import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const handleSelectItem = () => {
    setMenuOpened(false)}

  return (
    <>
      <header>
        <div className={`menu ${menuOpened ? "": "menu--closed"}`}>
          <button className="menu__btn" onClick={()=> setMenuOpened(!menuOpened)}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem}/>
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem}/>
            <MenuItem text="Kontakt" onSelect={handleSelectItem}/>
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
