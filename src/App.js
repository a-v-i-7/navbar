/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😊" />
        <NavItem icon="😊" />
        <NavItem icon="😊" />
        <NavItem icon="😊" />
        <NavItem icon="😊">
          <Dropdown />
        </NavItem>
      </Navbar>
    </div>
  );
}

const Dropdown = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null)

  const calcHeight = (el) => {
    console.log(el.offsetHeight);
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height:menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon="😊"
            rightIcon="❤"
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            item 1
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}

      >
        <div className="menu">
          <DropdownItem
            leftIcon="😊"
            rightIcon="❤"
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          >
            secondry Item
          </DropdownItem>
          <DropdownItem
            leftIcon="😊"
            rightIcon="❤"
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          >
            secondry Item
          </DropdownItem>
          <DropdownItem
            leftIcon="😊"
            rightIcon="❤"
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          >
            secondry Item
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

const DropdownItem = ({
  leftIcon,
  rightIcon,
  children,
  goToMenu,
  setActiveMenu,
}) => {
  return (
    <a
      href="#/"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button"> {leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ children, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen((val) => !val)}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
};
export default App;
