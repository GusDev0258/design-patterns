import { Size } from "./size";

export class Dimension {

  private _size: Size | undefined;

  public constructor(private readonly _name: string, private readonly _value: number ) {}

  set size(size: Size) {
    this._size = size;
  }

  get size(): Size | undefined {
    return this._size;
  }

  get value(): number {
    return this._value;
  }

  get name(): string {
    return this._name;
  }
}
