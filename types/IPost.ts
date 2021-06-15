export interface IPost {

    numericCode: number,
    name: string;
    capital: string;
    population:number;
    flag:string;
    nativeName:string;
    currencies?:[
        name:string
    ];
  }