import {useState} from 'react';
import { Menu, User } from 'lucide-react';
import './css/SideBarStyle.css';

function SideBar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isMounted, setIsMounted] = useState(false);

  const toggleSidebar = () => {
    if (!isOpen) setIsMounted(true);   
    setIsOpen(!isOpen);
  };

  const handleAnimationEnd = () => {
    if (!isOpen) setIsMounted(false);  
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <Menu size={18} />
      </button>

      {isMounted && (
        <div
          className={`sidebar-container ${isOpen ? 'opening' : 'closing'}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <aside className="sidebar">
            <h2>Menu</h2>
            <ul>
              <li><a href="#"><User />About me</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contatti</a></li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}

export default SideBar;