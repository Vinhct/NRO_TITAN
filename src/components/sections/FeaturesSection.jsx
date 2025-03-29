import { motion } from 'framer-motion';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';

const FeaturesContainer = styled.div`
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const FeatureItem = styled(motion.div)`
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 165, 0, 0.3);
  }
`;

const FeatureImage = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${FeatureItem}:hover img {
    transform: scale(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    z-index: 1;
  }
`;

const FeatureIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 165, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const FeatureContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #FFA500, #FF6B00);
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const FeaturePoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const FeaturePoint = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  &::before {
    content: '✓';
    color: #FFA500;
  }
`;

const FeatureButton = styled(motion.a)`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: linear-gradient(45deg, rgba(255, 165, 0, 0.5), rgba(255, 107, 0, 0.5));
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #FFA500, #FF6B00);
  }
`;

const DragonBallIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IntroContent = styled.div`
  color: white;
`;

const IntroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #FFA500, #FF6B00);
  }
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
`;

const IntroImage = styled.div`
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  height: 100%;
  min-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: '🌟',
      title: 'Epic Battles',
      description: 'Experience intense battles with classic Dragon Ball characters and new challengers from across the multiverse.',
      image: 'https://i.ytimg.com/vi/_jqxXyOYGo4/maxresdefault.jpg',
      points: [
        'Real-time combat system',
        'Special moves and combos',
        'Team battles with up to 3 characters'
      ]
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Power Ups',
      description: 'Train your character, learn new techniques, and unlock transformations from Super Saiyan to Ultra Instinct.',
      image: 'https://i.ytimg.com/vi/MHow6beWpcE/maxresdefault.jpg',
      points: [
        'Multiple transformation levels',
        'Skill tree progression',
        'Customizable power-ups'
      ]
    },
    {
      id: 3,
      icon: '🌍',
      title: 'Explore the Universe',
      description: 'Travel across planets from the series like Earth, Namek, and beyond with stunning visuals and interactive environments.',
      image: 'https://bantool.net/images/uploads/products/thumb-game.png',
      points: [
        'Open world exploration',
        'Hidden collectibles',
        'Dynamic weather systems'
      ]
    },
    
  ];
  
  return (
    <FeaturesContainer id="features">
      <SectionTitle>Key Features</SectionTitle>
      
      <DragonBallIntro>
        <IntroContent>
          <IntroTitle>Thế giới Dragon Ball</IntroTitle>
          <IntroText>
            Dragon Ball là một trong những series anime và manga nổi tiếng nhất mọi thời đại, được sáng tạo bởi Akira Toriyama. Bắt đầu từ năm 1984, câu chuyện xoay quanh cuộc phiêu lưu của Son Goku và những người bạn trong hành trình tìm kiếm Ngọc Rồng - bảy viên ngọc có khả năng triệu hồi rồng thần Shenron để thực hiện điều ước.
          </IntroText>
          <IntroText>
            Từ một cậu bé có đuôi khỉ với sức mạnh phi thường, Goku dần khám phá ra nguồn gốc người Saiyan của mình và tham gia vào những trận chiến bảo vệ Trái Đất khỏi nhiều kẻ thù nguy hiểm, từ Frieza, Cell đến Majin Buu. Dragon Ball không chỉ nổi tiếng với những trận đánh mãn nhãn mà còn truyền tải thông điệp về tình bạn, sự kiên trì và vượt qua giới hạn bản thân.
          </IntroText>
        </IntroContent>
        <IntroImage>
          <img src="https://th.bing.com/th/id/OIP.v7CqGLoZtr0O7C2hUKZF7gHaKX?rs=1&pid=ImgDetMain" alt="Dragon Ball Heroes" style={{ width: '80%', height: '100%', objectFit: 'cover' }}/>
        </IntroImage>
      </DragonBallIntro>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureImage>
              <img src={feature.image} alt={feature.title} />
              <FeatureIcon>{feature.icon}</FeatureIcon>
            </FeatureImage>
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeaturePoints>
                {feature.points.map((point, idx) => (
                  <FeaturePoint key={idx}>{point}</FeaturePoint>
                ))}
              </FeaturePoints>
              <FeatureButton
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </FeatureButton>
            </FeatureContent>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 