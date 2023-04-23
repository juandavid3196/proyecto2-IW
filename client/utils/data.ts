
interface ProductsItem {
    id: number;
    name:string;
    img: string;
    price: string;
    discount: string;
    message: string;
    value: boolean;
}


export const products : ProductsItem[] = [
    {
        id: 1,
        name:'Silla',
        img: './img/offer-img/silla.svg',
        price: '210.900',
        discount: '32',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 2,
        name:'Microfono',
        img: './img/offer-img/soporte-micro.svg',
        price: '74.990',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 3,
        name:'Afeitadora',
        img: './img/offer-img/afeitadora.svg',
        price: '134.950',
        discount: '50',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 4,
        name:'Closet',
        img: './img/offer-img/closet.svg',
        price: '149.900',
        discount: '30',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 5,
        name:'Cortina',
        img: './img/offer-img/cortina.svg',
        price: '69.990',
        discount: '17',
        message: 'false',
        value: true
    },
    {
        id: 6,
        name:'Bicicleta',
        img: './img/offer-img/bicicleta.webp',
        price: '210.900',
        discount: '32',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 7,
        name:'Macbook',
        img: './img/offer-img/camara.webp',
        price: '74.990',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 8,
        name:'Tenis',
        img: './img/offer-img/computador.png',
        price: '134.950',
        discount: '50',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 9,
        name:'Secador',
        img: './img/offer-img/secador.webp',
        price: '149.900',
        discount: '30',
        message: 'Envío gratis',
        value: true
    },
    {
        id: 10,
        name:'Gafas',
        img: './img/offer-img/gafas.webp',
        price: '69.990',
        discount: '17',
        message: 'false',
        value: true
    },
];
