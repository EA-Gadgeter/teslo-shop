export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Sizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidType;
    gender: Category;
}

export type Sizes = "XS"|"S"|"M"|"L"|"XL"|"XXL"|"XXXL";
export type ValidType = "shirts"|"pants"|"hoodies"|"hats";
export type Category = "men"|"women"|"kid"|"unisex";