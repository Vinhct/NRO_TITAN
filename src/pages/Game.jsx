import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameContainer = styled.div`
  background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url('/goku-avatar.png') no-repeat center;
  background-size: cover;
  border: 2px solid gold;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.2rem 0;
`;

const ProgressBar = styled.div`
  width: 100px;
  height: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: ${props => props.color || '#00ff00'};
  width: ${props => props.value}%;
`;

const GameArea = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BattleArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Character = styled(motion.div)`
  width: 150px;
  height: 200px;
  background: url(${props => props.image}) no-repeat center;
  background-size: contain;
`;

const ControlPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: 1rem;
`;

const ActionButton = styled(motion.button)`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  z-index: 10;
`;

const EnergyBall = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(#4facfe, #00f2fe);
  box-shadow: 0 0 20px #4facfe;
  z-index: 5;
`;

function Game() {
  const [playerStats, setPlayerStats] = useState({
    health: 100,
    energy: 100,
    level: 1,
    xp: 0
  });
  
  const [enemyStats, setEnemyStats] = useState({
    health: 100,
    name: 'Frieza',
    image: '/frieza.png'
  });
  
  const [isAttacking, setIsAttacking] = useState(false);
  const [attackType, setAttackType] = useState(null);
  const [energyBall, setEnergyBall] = useState({ visible: false, position: {} });
  
  useEffect(() => {
    if (isAttacking) {
      const timer = setTimeout(() => {
        // Simulate damage to enemy
        setEnemyStats(prev => ({
          ...prev,
          health: Math.max(0, prev.health - (attackType === 'special' ? 20 : 10))
        }));
        
        // Reduce player energy
        setPlayerStats(prev => ({
          ...prev,
          energy: Math.max(0, prev.energy - (attackType === 'special' ? 30 : 10))
        }));
        
        setIsAttacking(false);
        setEnergyBall({ visible: false, position: {} });
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isAttacking, attackType]);
  
  const handleAttack = (type) => {
    if (isAttacking) return;
    
    if (type === 'special' && playerStats.energy < 30) {
      // Not enough energy
      return;
    }
    
    setAttackType(type);
    setIsAttacking(true);
    
    if (type === 'special') {
      setEnergyBall({
        visible: true,
        position: { left: '25%' }
      });
    }
  };
  
  return (
    <GameContainer>
      <Header>
        <PlayerInfo>
          <Avatar />
          <Stats>
            <StatBar>
              HP:
              <ProgressBar>
                <Progress value={playerStats.health} color="#ff0000" />
              </ProgressBar>
              {playerStats.health}/100
            </StatBar>
            <StatBar>
              Energy:
              <ProgressBar>
                <Progress value={playerStats.energy} color="#00ccff" />
              </ProgressBar>
              {playerStats.energy}/100
            </StatBar>
            <StatBar>
              Level: {playerStats.level} (XP: {playerStats.xp}/100)
            </StatBar>
          </Stats>
        </PlayerInfo>
        
        <div>
          <h3>Enemy: {enemyStats.name}</h3>
          <StatBar>
            HP:
            <ProgressBar>
              <Progress value={enemyStats.health} color="#ff0000" />
            </ProgressBar>
            {enemyStats.health}/100
          </StatBar>
        </div>
      </Header>
      
      <GameArea>
        <BackButton to="/">Back to Menu</BackButton>
        
        <BattleArea>
          <Character
            image="/goku.png"
            animate={isAttacking ? { x: [0, 50, 0] } : {}}
            transition={{ duration: 0.5 }}
          />
          
          {energyBall.visible && (
            <EnergyBall
              initial={{ left: '25%' }}
              animate={{ left: '70%' }}
              transition={{ duration: 0.8 }}
            />
          )}
          
          <Character
            image={enemyStats.image}
            animate={isAttacking && attackType === 'special' ? { x: [0, 10, -10, 0], y: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </BattleArea>
        
        <ControlPanel>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAttack('normal')}
            disabled={isAttacking}
          >
            Punch
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAttack('normal')}
            disabled={isAttacking}
          >
            Kick
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAttack('special')}
            disabled={isAttacking || playerStats.energy < 30}
            style={{ opacity: playerStats.energy < 30 ? 0.5 : 1 }}
          >
            Kamehameha (30 Energy)
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Defend
          </ActionButton>
        </ControlPanel>
      </GameArea>
    </GameContainer>
  );
}

export default Game; 