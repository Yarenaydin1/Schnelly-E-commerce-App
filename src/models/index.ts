export declare class Category {
    readonly id:string;
    readonly name:string;
    readonly src:string;
    readonly subCategories:string[];
}
export declare class Product{
    readonly id:string;
    readonly image:string;
    readonly images :string[];
    readonly name:string;
    readonly quantity:number;
    readonly price: number;
    readonly discountedPrice?: number;
  readonly unit: string;

}
export declare class Filtering {
    readonly id: string;
    readonly name: string;
  }

  export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;  
    discountedPrice?: number; 


};

export type RootStackParamList = {
    ProductDetails: { product: Product }; 
    CategoryDetails: { category: Category }; 
  };