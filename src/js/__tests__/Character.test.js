import Character from '../class/Character';

test("Ошибка в name", () => {
  expect(() => new Character("A", "Bowman")).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
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
    attack: undefined,
    defence: undefined
  };

  expect(warior).toEqual(correct);
});
