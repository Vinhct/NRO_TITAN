import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 165, 0, 0.2);
`;

const NavLogo = styled(Link)`
  font-family: 'Impact', sans-serif;
  font-size: 1.8rem;
  color: #FFA500;
  text-decoration: none;
  text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .icon {
    font-size: 2rem;
  }
`;

const LogoImage = styled(motion.img)`
  height: 60px;
  padding-left: 20px;
  filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.7));
  
  @keyframes scale-pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes energize {
    0% {
      filter: brightness(1) drop-shadow(0 0 8px rgba(255, 165, 0, 0.7));
    }
    25% {
      filter: brightness(1.2) drop-shadow(0 0 12px rgba(255, 165, 0, 0.8));
    }
    50% {
      filter: brightness(1.4) drop-shadow(0 0 16px rgba(255, 165, 0, 0.9));
    }
    75% {
      filter: brightness(1.2) drop-shadow(0 0 12px rgba(255, 165, 0, 0.8));
    }
    100% {
      filter: brightness(1) drop-shadow(0 0 8px rgba(255, 165, 0, 0.7));
    }
  }
  
  animation: 
    scale-pulse 3s infinite ease-in-out,
    energize 4s infinite ease-in-out;
    
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoText = styled(motion.span)`
  background: linear-gradient(135deg, #FFA500, #FF6B00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  @keyframes text-pulse {
    0% {
      opacity: 0.85;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.85;
      transform: scale(1);
    }
  }
  
  animation: text-pulse 4s infinite ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #FFA500, transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s ease;
  }
  
  ${NavLogo}:hover &::after {
    transform: scaleX(1);
  }
  
  ${NavLogo}:hover & {
    animation-play-state: paused;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #FFA500, #FF6B00);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  background: linear-gradient(45deg, #FFA500, #FF6B00);
  border: none;
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
  }
`;

const Navbar = () => {
  const location = useLocation();
  
  return (
    <NavbarContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLogo to="/">
        <LogoImage 
          src="/dragon-banner.png" 
          alt="Dragon Realm Logo"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 300 }
          }}
        />
        <LogoText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
         VimCT
        </LogoText>
      </NavLogo>
      <NavLinks>
        <NavLink 
          to="/character" 
          className={location.pathname === '/character' ? 'active' : ''}
        >
          Characters
        </NavLink>
        <NavLink 
          to="/timeline"
          className={location.pathname === '/timeline' ? 'active' : ''}
        >
          Timeline
        </NavLink>
        <NavLink 
          to="/leaderboard"
          className={location.pathname === '/leaderboard' ? 'active' : ''}
        >
          Leaderboard
        </NavLink>
        <NavButton to="/game">Play Now</NavButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;