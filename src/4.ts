class Key { 
}

class MyHouse {
  private doorIsOpen: boolean = false;

  constructor(private key: Key) {   
  }

  openDoor(key: Key): void {
    if (this.key === key) {
      this.doorIsOpen = true;
      console.log('Двері відчинені.');
    } else {
      console.log('Неправильний ключ. Двері не відкрилися.');
    }
  }

  comeIn(person: Person): void {
    if (this.doorIsOpen) {
      console.log(`${person.getName()} входить у будинок.`);
    } else {
      console.log('Двері закриті. Спробуйте відкрити двері ключем.');
    }
  }
}

class Person {
  constructor(private key: Key) {   
  }

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    
    return 'John Doe';
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
