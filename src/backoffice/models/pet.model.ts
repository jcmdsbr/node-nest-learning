export class Pet {
  constructor(name: string, gender: string, kind: string, brand: string) {
    this.name = name;
    this.gender = gender;
    this.kind = kind;
    this.brand = brand;
  }

  name: string;
  gender: string;
  kind: string;
  brand: string;
}
