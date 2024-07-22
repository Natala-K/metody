import Character from './Character';

describe('Character class tests', () => {
  test('should create a character correctly', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
  });

  test('should level up correctly', () => {
    const char = new Character('Hero', 'Swordsman');
    char.health = 50;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBeCloseTo(48); // 40 * 1.2
    expect(char.defence).toBeCloseTo(12); // 10 * 1.2
    expect(char.health).toBe(100);
  });

  test('should not level up if health is 0', () => {
    const char = new Character('Hero', 'Magician');
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('should apply damage correctly', () => {
    const char = new Character('Hero', 'Undead');
    char.damage(20);
    expect(char.health).toBeCloseTo(85); // 100 - 20 * (1 - 25 / 100)
  });

  test('health should not be negative', () => {
    const char = new Character('Hero', 'Zombie');
    char.damage(200);
    expect(char.health).toBe(0);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  // Additional tests for edge cases
  test('should throw an error for non-string name', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw an error for empty string name', () => {
    expect(() => new Character('', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw an error for null name', () => {
    expect(() => new Character(null, 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw an error for undefined name', () => {
    expect(() => new Character(undefined, 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  });

  test('should throw an error for non-string type', () => {
    expect(() => new Character('Hero', 123)).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('should throw an error for empty string type', () => {
    expect(() => new Character('Hero', '')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('should throw an error for null type', () => {
    expect(() => new Character('Hero', null)).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('should throw an error for undefined type', () => {
    expect(() => new Character('Hero', undefined)).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
});
