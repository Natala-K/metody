export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error("Неизвестное существо");
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = 10; 
    this.defence = 10; 
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
