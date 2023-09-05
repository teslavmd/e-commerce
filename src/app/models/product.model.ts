export class Product{

    public id: number;
    public name: string;
    public price: string;
    public image: string;
    public description: string;
    public type: string;


    constructor(
        id : number,
        name : string,
        price : string,
        image : string,
        description : string,
        type : string, 
    ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.type = type;
    }

    
}