import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { characters } from '../data/characters';

const CharactersContainer = styled.div`
  background: linear-gradient(135deg, #2b5876, #4e4376);
  min-height: 100vh;
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
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const TransformationOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const TransformationContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: white;
`;

const TransformationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const TransformationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  
  .aura {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.auraColor};
    box-shadow: 0 0 10px ${props => props.auraColor};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: #ff8a00;
  }
`;

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };
  
  const closeTransformations = () => {
    setSelectedCharacter(null);
  };
  
  return (
    <CharactersContainer>
      <Header>
        <Title>Choose Your Warrior</Title>
        <BackButton to="/">Back to Menu</BackButton>
      </Header>
      
      <CharacterGrid>
        {characters.map((character) => (
          <motion.div
            key={character.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              image={character.image}
              title={character.name}
              stats={character.stats}
              onClick={() => handleCardClick(character)}
            />
          </motion.div>
        ))}
      </CharacterGrid>
      
      {selectedCharacter && (
        <TransformationOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeTransformations}
        >
          <TransformationContent
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <CloseButton onClick={closeTransformations}>&times;</CloseButton>
            <h2>{selectedCharacter.name}'s Transformations</h2>
            <TransformationList>
              {selectedCharacter.transformations.map((transformation, index) => (
                <TransformationItem
                  key={index}
                  auraColor={
                    transformation.includes('Super Saiyan Blue') ? '#1E90FF' :
                    transformation.includes('Super Saiyan') ? '#FFD700' :
                    transformation.includes('Ultra Instinct') ? '#FFFFFF' :
                    '#FF8C00'
                  }
                >
                  <div className="aura" />
                  <div>
                    <h3>{transformation}</h3>
                    <p>Power Multiplier: {
                      transformation.includes('Super Saiyan Blue') ? '100x' :
                      transformation.includes('Super Saiyan') ? '50x' :
                      transformation.includes('Ultra Instinct') ? '200x' :
                      '25x'
                    }</p>
                  </div>
                </TransformationItem>
              ))}
            </TransformationList>
          </TransformationContent>
        </TransformationOverlay>
      )}
    </CharactersContainer>
  );
}

export default Characters; 