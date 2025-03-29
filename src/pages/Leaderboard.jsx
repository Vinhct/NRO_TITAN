import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LeaderboardContainer = styled.div`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
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

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#ffcc00' : 'transparent'};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const LeaderboardTable = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

const TableRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const RankCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => {
    if (props.rank === 1) return '#ffd700';
    if (props.rank === 2) return '#c0c0c0';
    if (props.rank === 3) return '#cd7f32';
    return 'white';
  }};
`;

const PlayerCell = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border: 2px solid ${props => props.rank <= 3 ? '#ffcc00' : 'transparent'};
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
`;

function Leaderboard() {
  const [activeTab, setActiveTab] = useState('power');
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  const mockLeaderboardData = {
    power: [
      { id: 1, name: 'SaiyanGod99', character: 'Goku', value: 9999, battles: 285 },
      { id: 2, name: 'PrinceOfSaiyans', character: 'Vegeta', value: 9850, battles: 271 },
      { id: 3, name: 'UltraInstinct', character: 'Goku', value: 9730, battles: 253 },
      { id: 4, name: 'FriezaSlayer', character: 'Trunks', value: 8900, battles: 198 },
      { id: 5, name: 'CellBuster', character: 'Gohan', value: 8750, battles: 187 },
      { id: 6, name: 'NamekWarrior', character: 'Piccolo', value: 7600, battles: 165 },
      { id: 7, name: 'KrillinTime', character: 'Krillin', value: 6500, battles: 132 },
      { id: 8, name: 'SenzuBean', character: 'Goku', value: 6200, battles: 104 },
      { id: 9, name: 'KaiokenMaster', character: 'Goku', value: 5800, battles: 97 },
      { id: 10, name: 'SaiyaElite', character: 'Vegeta', value: 5300, battles: 86 }
    ],
    wins: [
      { id: 3, name: 'UltraInstinct', character: 'Goku', value: 245, battles: 253 },
      { id: 1, name: 'SaiyanGod99', character: 'Goku', value: 235, battles: 285 },
      { id: 2, name: 'PrinceOfSaiyans', character: 'Vegeta', value: 210, battles: 271 },
      { id: 5, name: 'CellBuster', character: 'Gohan', value: 175, battles: 187 },
      { id: 4, name: 'FriezaSlayer', character: 'Trunks', value: 150, battles: 198 },
      { id: 6, name: 'NamekWarrior', character: 'Piccolo', value: 120, battles: 165 },
      { id: 8, name: 'SenzuBean', character: 'Goku', value: 90, battles: 104 },
      { id: 7, name: 'KrillinTime', character: 'Krillin', value: 75, battles: 132 },
      { id: 9, name: 'KaiokenMaster', character: 'Goku', value: 70, battles: 97 },
      { id: 10, name: 'SaiyaElite', character: 'Vegeta', value: 65, battles: 86 }
    ],
    level: [
      { id: 2, name: 'PrinceOfSaiyans', character: 'Vegeta', value: 85, battles: 271 },
      { id: 1, name: 'SaiyanGod99', character: 'Goku', value: 82, battles: 285 },
      { id: 3, name: 'UltraInstinct', character: 'Goku', value: 78, battles: 253 },
      { id: 6, name: 'NamekWarrior', character: 'Piccolo', value: 70, battles: 165 },
      { id: 4, name: 'FriezaSlayer', character: 'Trunks', value: 67, battles: 198 },
      { id: 5, name: 'CellBuster', character: 'Gohan', value: 65, battles: 187 },
      { id: 7, name: 'KrillinTime', character: 'Krillin', value: 54, battles: 132 },
      { id: 9, name: 'KaiokenMaster', character: 'Goku', value: 49, battles: 97 },
      { id: 8, name: 'SenzuBean', character: 'Goku', value: 45, battles: 104 },
      { id: 10, name: 'SaiyaElite', character: 'Vegeta', value: 42, battles: 86 }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setLeaderboard(mockLeaderboardData[activeTab]);
      setLoading(false);
    }, 500);
  }, [activeTab]);

  const getValueLabel = () => {
    switch (activeTab) {
      case 'power': return 'Power Level';
      case 'wins': return 'Total Wins';
      case 'level': return 'Player Level';
      default: return 'Value';
    }
  };

  const getCharacterImage = (character) => {
    switch (character.toLowerCase()) {
      case 'goku': return '/goku-avatar.png';
      case 'vegeta': return '/vegeta-avatar.png';
      case 'piccolo': return '/piccolo-avatar.png';
      case 'gohan': return '/gohan-avatar.png';
      case 'trunks': return '/trunks-avatar.png';
      case 'krillin': return '/krillin-avatar.png';
      default: return '/default-avatar.png';
    }
  };

  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 } 
    })
  };

  return (
    <LeaderboardContainer>
      <Header>
        <Title>Leaderboard</Title>
        <BackButton to="/">Back to Menu</BackButton>
      </Header>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'power'} 
          onClick={() => setActiveTab('power')}
        >
          Power Level
        </Tab>
        <Tab 
          active={activeTab === 'wins'} 
          onClick={() => setActiveTab('wins')}
        >
          Total Wins
        </Tab>
        <Tab 
          active={activeTab === 'level'} 
          onClick={() => setActiveTab('level')}
        >
          Player Level
        </Tab>
      </TabsContainer>
      
      <LeaderboardTable
        key={activeTab}
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <TableHeader>
          <div>Rank</div>
          <div>Player</div>
          <div>Character</div>
          <div>{getValueLabel()}</div>
          <div>Total Battles</div>
        </TableHeader>
        
        {loading ? (
          <NoResults>Loading...</NoResults>
        ) : leaderboard.length === 0 ? (
          <NoResults>No results found</NoResults>
        ) : (
          leaderboard.map((player, index) => (
            <TableRow 
              key={player.id}
              custom={index}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
            >
              <RankCell rank={index + 1}>#{index + 1}</RankCell>
              <PlayerCell>
                <Avatar 
                  image={getCharacterImage(player.character)}
                  rank={index + 1}
                />
                {player.name}
              </PlayerCell>
              <div>{player.character}</div>
              <div>{player.value.toLocaleString()}</div>
              <div>{player.battles}</div>
            </TableRow>
          ))
        )}
      </LeaderboardTable>
    </LeaderboardContainer>
  );
}

export default Leaderboard; 