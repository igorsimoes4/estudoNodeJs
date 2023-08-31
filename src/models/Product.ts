
type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto Z', price: 20},
    {title: 'Produto G', price: 200}
];

export const Product = {
    getall: (): Product[] => {
        return data;
    },
    getPriceAfter: (price: number): Product[] => {
        return data.filter(item => {
            if(item.price >= price) {
                return true;
            } else {
                return false;
            }
        });
    }
};