export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 0
  ) { }

  rateUp(): boolean {
    if(this.rating === 5) { return false; }
    this.rating++;
    return true;
  }

  rateDown(): boolean {
    if(this.rating === 0) { return false; }
    this.rating--;
    return true;
  }
}
