export const characters = [
  {
    id: 1,
    name: 'Goku',
    race: 'Saiyan',
    image: '/images/characters/goku.png',
    transformations: ['Super Saiyan', 'Super Saiyan Blue', 'Ultra Instinct'],
    stats: {
      power: 95,
      speed: 90,
      technique: 85,
      special: 100
    },
    description: 'Earth\'s greatest defender and a Saiyan warrior from Planet Vegeta.',
    signature_moves: ['Kamehameha', 'Spirit Bomb', 'Dragon Fist']
  },
  {
    id: 2,
    name: 'Vegeta',
    race: 'Saiyan',
    image: '/images/characters/vegeta.png',
    transformations: ['Super Saiyan', 'Super Saiyan Blue', 'Ultra Ego'],
    stats: {
      power: 90,
      speed: 85,
      technique: 90,
      special: 95
    },
    description: 'The proud prince of all Saiyans and Goku\'s greatest rival.',
    signature_moves: ['Final Flash', 'Big Bang Attack', 'Galick Gun']
  },
  {
    id: 3,
    name: 'Gohan',
    race: 'Human/Saiyan',
    image: '/images/characters/gohan.png',
    transformations: ['Super Saiyan', 'Ultimate Form', 'Beast Form'],
    stats: {
      power: 85,
      speed: 80,
      technique: 90,
      special: 90
    },
    description: 'Goku\'s son who has the potential to be the strongest warrior.',
    signature_moves: ['Masenko', 'Father-Son Kamehameha', 'Special Beam Cannon']
  },
  {
    id: 4,
    name: 'Piccolo',
    race: 'Namekian',
    image: '/images/characters/piccolo.png',
    transformations: ['Super Namekian', 'Orange Piccolo'],
    stats: {
      power: 80,
      speed: 75,
      technique: 95,
      special: 85
    },
    description: 'A wise Namekian warrior and Gohan\'s mentor.',
    signature_moves: ['Special Beam Cannon', 'Light Grenade', 'Hellzone Grenade']
  },
  {
    id: 5,
    name: 'Frieza',
    race: 'Frost Demon',
    image: '/images/characters/frieza.png',
    transformations: ['Final Form', 'Golden Form', 'Black Frieza'],
    stats: {
      power: 95,
      speed: 85,
      technique: 90,
      special: 95
    },
    description: 'The emperor of the universe and one of the most fearsome villains.',
    signature_moves: ['Death Beam', 'Nova Strike', 'Death Ball']
  },
  {
    id: 6,
    name: 'Trunks',
    race: 'Human/Saiyan',
    image: '/images/characters/trunks.png',
    transformations: ['Super Saiyan', 'Super Saiyan Rage'],
    stats: {
      power: 85,
      speed: 90,
      technique: 80,
      special: 85
    },
    description: 'A time traveler from the future and Vegeta\'s son.',
    signature_moves: ['Burning Attack', 'Heat Dome Attack', 'Final Hope Slash']
  }
];

export const transformations = {
  'Super Saiyan': {
    power_multiplier: 50,
    aura_color: '#FFD700', // Gold
    requirements: 'Extreme emotion and Saiyan blood'
  },
  'Super Saiyan Blue': {
    power_multiplier: 100,
    aura_color: '#1E90FF', // Blue
    requirements: 'God ki mastery'
  },
  'Ultra Instinct': {
    power_multiplier: 200,
    aura_color: '#FFFFFF', // Silver/White
    requirements: 'Perfect mind and body harmony'
  }
}; 