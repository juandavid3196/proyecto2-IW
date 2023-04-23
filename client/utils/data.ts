
interface ProductsItem {
    id: number;
    img: string;
    price: string;
    discount: string;
    message: string;
    value: boolean;
}


export const products : ProductsItem[] = [
    {
        id: 1,
        img: './img/offer-img/silla.svg',
        price: '210.900',
        discount: '32',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 2,
        img: './img/offer-img/soporte-micro.svg',
        price: '74.990',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 3,
        img: './img/offer-img/afeitadora.svg',
        price: '134.950',
        discount: '50',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 4,
        img: './img/offer-img/closet.svg',
        price: '149.900',
        discount: '30',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 5,
        img: './img/offer-img/cortina.svg',
        price: '69.990',
        discount: '17',
        message: 'false',
        value: true
    },
];
