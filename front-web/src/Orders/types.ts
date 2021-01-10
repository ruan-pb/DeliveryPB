import { type } from "os";
import { NumericLiteral } from "typescript";

export type Product ={
    id:number;
    name:string;
    price:number;
    description:string;
    imageUri:string
}

export type OrderLocationDate = {
    latiude:number;
    longitude:number;
    adderss:string;
}
type ProductId = {
    id:number;
}

export type OrderPayload = {
    products:ProductId[];

}&OrderLocationDate;
