import Character from '../class/Character';

test("Ошибка в name", () => {
  expect(() => new Character("A", "Bowman")).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  expect(() => new Character("ОченьДлинноеИмя", "Bowman")).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test("Ошибка в type", () => {
  expect(() => new Character("Alex", "UnknownType")).toThrow('Неизвестное существо');
});

test("Правильно создается объект", () => {
  const warior = new Character("Alex", "Bowman");
  const correct = {
    name: "Alex",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 10,
    defence: 10  
  };

  expect(warior).toEqual(correct);
});

test('levelUp увеличивает уровень и характеристики', () => {
  const character = new Character('Alex', 'Bowman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.health).toBe(100);
});

test('levelUp генерирует ошибку, если персонаж мертв', () => {
  const character = new Character('Alex', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('damage правильно уменьшает здоровье', () => {
  const character = new Character('Alex', 'Bowman');
  character.defence = 50;
  character.damage(40);
  expect(character.health).toBe(80);
});

test('damage устанавливает здоровье в 0, если урон слишком велик', () => {
  const character = new Character('Alex', 'Bowman');
  character.defence = 10;
  character.damage(200);
  expect(character.health).toBe(0);
});
