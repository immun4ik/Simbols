import Team from './Team';

const char1 = {
  name: '������1',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: '������2',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char3 = {
  name: '������',
  type: 'Swordsman',
  health: 100,
  level: 2,
  attack: 80,
  defence: 20,
};

const myTeam = new Team();

myTeam.add(char1);
myTeam.addAll(char2, char3);

for (const character of myTeam) {
  console.log(character);
}

const teamArray = myTeam.toArray();
console.log(teamArray);
