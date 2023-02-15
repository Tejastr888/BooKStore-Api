export class Book {
    id: number;
    title: string;
    price: number;
    isbn: string;
    description: string;
    unitCost: number;
    publicationDate: Date;
    nbOfPages: number;
    imgUrl: string;
    language: number;
  
    constructor(id: number, title: string, price: number,
         isbn: string, description: string,unitCost: number, publicationDate: Date,nbOfPages: number,imgUrl: string,language: number) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.isbn = isbn;
      this.description=description;
      this.unitCost=unitCost;
      this.publicationDate=publicationDate;
      this.nbOfPages=nbOfPages;
      this.imgUrl=imgUrl;
      this.language=language;
    }
  }