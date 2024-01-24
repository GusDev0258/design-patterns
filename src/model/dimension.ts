export class Dimension {

  constructor(private readonly name: string, private readonly value: number) {
    this.name = name;
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
  getName(): string {
    return this.name
  }
}