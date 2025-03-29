import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CharacterContainer = styled.div`
  background: linear-gradient(135deg, #2b5876, #4e4376);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const BackButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  text-decoration: none;
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const CharacterCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#ffcc00' : 'transparent'};
  box-shadow: ${props => props.selected ? '0 0 15px #ffcc00' : 'none'};
  transition: all 0.3s ease;
`;

const CharacterImage = styled.div`
  width: 180px;
  height: 180px;
  background: url(${props => props.image}) no-repeat center;
  background-size: contain;
  margin-bottom: 1rem;
`;

const CharacterName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const CharacterStats = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const StatBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
`;

const StatValue = styled.div`
  width: 60%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value}%;
    background: ${props => props.color || '#ffcc00'};
  }
`;

const ConfirmButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #fe8c00, #f83600);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
  margin-top: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function Character() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const characters = [
    {
      id: 1,
      name: 'Goku',
      image: '/goku.png',
      stats: {
        power: 95,
        speed: 90,
        technique: 85,
        special: 100
      }
    },
    {
      id: 2,
      name: 'Vegeta',
      image: '/vegeta.png',
      stats: {
        power: 90,
        speed: 85,
        technique: 90,
        special: 95
      }
    },
    {
      id: 3,
      name: 'Piccolo',
      image: '/piccolo.png',
      stats: {
        power: 80,
        speed: 75,
        technique: 95,
        special: 85
      }
    },
    {
      id: 4,
      name: 'Gohan',
      image: '/gohan.png',
      stats: {
        power: 85,
        speed: 80,
        technique: 90,
        special: 90
      }
    },
    {
      id: 5,
      name: 'Trunks',
      image: '/trunks.png',
      stats: {
        power: 85,
        speed: 90,
        technique: 80,
        special: 80
      }
    },
    {
      id: 6,
      name: 'Krillin',
      image: '/krillin.png',
      stats: {
        power: 70,
        speed: 75,
        technique: 80,
        special: 70
      }
    }
  ];
  
  const handleSelectCharacter = (id) => {
    setSelectedCharacter(id);
  };
  
  return (
    <CharacterContainer>
      <Header>
        <Title>Character Selection</Title>
        <BackButton to="/">Back to Menu</BackButton>
      </Header>
      
      <CharacterGrid>
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            selected={selectedCharacter === character.id}
            onClick={() => handleSelectCharacter(character.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CharacterImage image={character.image} />
            <CharacterName>{character.name}</CharacterName>
            
            <CharacterStats>
              <StatBar>
                <StatLabel>Power</StatLabel>
                <StatValue value={character.stats.power} color="#ff5252" />
              </StatBar>
              <StatBar>
                <StatLabel>Speed</StatLabel>
                <StatValue value={character.stats.speed} color="#4caf50" />
              </StatBar>
              <StatBar>
                <StatLabel>Technique</StatLabel>
                <StatValue value={character.stats.technique} color="#2196f3" />
              </StatBar>
              <StatBar>
                <StatLabel>Special</StatLabel>
                <StatValue value={character.stats.special} color="#9c27b0" />
              </StatBar>
            </CharacterStats>
          </CharacterCard>
        ))}
      </CharacterGrid>
      
      <ConfirmButton
        as={Link}
        to="/game"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={!selectedCharacter}
        style={{ opacity: selectedCharacter ? 1 : 0.5, pointerEvents: selectedCharacter ? 'auto' : 'none' }}
      >
        Start Game
      </ConfirmButton>
    </CharacterContainer>
  );
}

export default Character; 