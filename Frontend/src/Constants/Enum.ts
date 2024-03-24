export const categories = ['Speciality', 'Atta', 'Dal', 'Dry Fruits', 'Masale', 'Millets', 'Ready Mix', 'Rice', 'Sugar & Jaggery', 'Super Foods & Seeds'];

export interface IProducts {
    id: number;
    category: string;
    name: string;
    price: string;
    unit: string;
    quantity: number;
};

export interface ICategory {
    id: number;
    name: string;
    slug: string;
    products: IProducts[]
};

export interface IOrderState {
    products: IProducts[];
    changeQuantity: Function;
    changeUnit: Function;
}

export const units = [
    {
        label: "Kg",
        value: "KG"
    },
    {
        label: "Gm",
        value: "GM"
    },
    {
        label: "Pc",
        value: "Pc"
    }
];

export const categoryValueMap: {[categoryName: string]: string} = {
    "SPECIALITY": "19no SPECIALITY",
    "ATTA": "ATTA",
    "DAL": "DAL",
    "DRY FRUITS": "DRY FRUITS",
    "MASALE": "MASALE",
    "MILLETS": "MILLETS",
    "READY MIX": "READY MIX",
    "RICE": "RICE",
    "SUGAR & JAGGERY": "SUGAR & JAGGERY",
    "SUPER FOODS & SEEDS": "SUPER FOODS & SEEDS"
};

export const productsArr: IProducts[] = [
    {
        "id": 123,
        "category": "19no SPECIALITY",
        "name": "Bedmi Puri Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 127,
        "category": "19no SPECIALITY",
        "name": "Chai Masala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 128,
        "category": "19no SPECIALITY",
        "name": "Chatu Chat Masala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 124,
        "category": "19no SPECIALITY",
        "name": "Hing",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 126,
        "category": "19no SPECIALITY",
        "name": "Instant Pudina Chutney",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 125,
        "category": "19no SPECIALITY",
        "name": "Methi Chutney",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 129,
        "category": "19no SPECIALITY",
        "name": "Ready Seasoning",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 130,
        "category": "19no SPECIALITY",
        "name": "Tea Special",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 189,
        "category": "ATTA",
        "name": "Ararot",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 190,
        "category": "ATTA",
        "name": "Bajra Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 191,
        "category": "ATTA",
        "name": "Bajra Khichdi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 192,
        "category": "ATTA",
        "name": "Bajra Kutta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 193,
        "category": "ATTA",
        "name": "Bajra Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 194,
        "category": "ATTA",
        "name": "Bedmi Puri Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 195,
        "category": "ATTA",
        "name": "Besan",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 197,
        "category": "ATTA",
        "name": "Besan Mota",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 196,
        "category": "ATTA",
        "name": "Besan (Rajdhani)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 198,
        "category": "ATTA",
        "name": "Chakki Atta ( Ash)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 199,
        "category": "ATTA",
        "name": "Chakki Atta Loose",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 200,
        "category": "ATTA",
        "name": "Channa Roasted",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 201,
        "category": "ATTA",
        "name": "Channa Sattu",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 202,
        "category": "ATTA",
        "name": "Chawal Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 203,
        "category": "ATTA",
        "name": "Desi Channa Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 205,
        "category": "ATTA",
        "name": "Joe Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 204,
        "category": "ATTA",
        "name": "Joe Sattu",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 206,
        "category": "ATTA",
        "name": "Jwar Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 208,
        "category": "ATTA",
        "name": "Kuttu Giri",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 207,
        "category": "ATTA",
        "name": "Kuttu Giri Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 209,
        "category": "ATTA",
        "name": "Maida",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 210,
        "category": "ATTA",
        "name": "Makka Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 211,
        "category": "ATTA",
        "name": "Moong Dhuli Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 212,
        "category": "ATTA",
        "name": "Mota Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 213,
        "category": "ATTA",
        "name": "Mp Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 214,
        "category": "ATTA",
        "name": "Oats Αtta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 221,
        "category": "ATTA",
        "name": "Quinoa Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 215,
        "category": "ATTA",
        "name": "Raggi Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 216,
        "category": "ATTA",
        "name": "Rajgiri (Amranth) Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 217,
        "category": "ATTA",
        "name": "Samak Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 218,
        "category": "ATTA",
        "name": "Samak Chawal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 219,
        "category": "ATTA",
        "name": "Singhara Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 220,
        "category": "ATTA",
        "name": "Urad Dhuli Atta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 5,
        "category": "DAL",
        "name": "Arhar Choti",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 4,
        "category": "DAL",
        "name": "Arhar special",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 6,
        "category": "DAL",
        "name": "Chiwra Poha",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 7,
        "category": "DAL",
        "name": "Dal Chana",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 8,
        "category": "DAL",
        "name": "Dalia",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 9,
        "category": "DAL",
        "name": "Dalia joe",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 10,
        "category": "DAL",
        "name": "Daliya Roasted",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 11,
        "category": "DAL",
        "name": "Kala Channa Desi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 12,
        "category": "DAL",
        "name": "Kulth Dal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 13,
        "category": "DAL",
        "name": "Lobiya Lal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 14,
        "category": "DAL",
        "name": "Lobiya Safed",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 35,
        "category": "DAL",
        "name": "Maida (Superfine)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 15,
        "category": "DAL",
        "name": "Malka Lal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 16,
        "category": "DAL",
        "name": "Malka Lal Dali",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 17,
        "category": "DAL",
        "name": "Masoor Kaali Barrik",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 18,
        "category": "DAL",
        "name": "Masoor Kali",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 19,
        "category": "DAL",
        "name": "Matar Safed",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 20,
        "category": "DAL",
        "name": "Mix Dal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 21,
        "category": "DAL",
        "name": "Moong Chilka",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 22,
        "category": "DAL",
        "name": "Moong Dhuli",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 24,
        "category": "DAL",
        "name": "Moongfali Dana",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 23,
        "category": "DAL",
        "name": "Moong Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 25,
        "category": "DAL",
        "name": "Moth Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 26,
        "category": "DAL",
        "name": "Popcorn",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 27,
        "category": "DAL",
        "name": "Rajma Chitra",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 28,
        "category": "DAL",
        "name": "Rajma Kashmiri",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 29,
        "category": "DAL",
        "name": "Rajma Kullu Mota",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 30,
        "category": "DAL",
        "name": "Sabudana",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 31,
        "category": "DAL",
        "name": "Safed Chana Dollar",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 33,
        "category": "DAL",
        "name": "Safed Chana Medium",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 32,
        "category": "DAL",
        "name": "Safed Chana Pindi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 34,
        "category": "DAL",
        "name": "Soyabean",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 36,
        "category": "DAL",
        "name": "Suji Barrik",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 37,
        "category": "DAL",
        "name": "Suji Moti",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 38,
        "category": "DAL",
        "name": "Tea Special (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 39,
        "category": "DAL",
        "name": "Urad Chilka",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 40,
        "category": "DAL",
        "name": "Urad Dhuli",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 41,
        "category": "DAL",
        "name": "Urad Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 131,
        "category": "DRY FRUITS",
        "name": "Akhrot Giri",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 132,
        "category": "DRY FRUITS",
        "name": "Anjeer",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 134,
        "category": "DRY FRUITS",
        "name": "Badam Giri (American)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 133,
        "category": "DRY FRUITS",
        "name": "Badam (Gurbandi)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 135,
        "category": "DRY FRUITS",
        "name": "Badam Maamra",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 136,
        "category": "DRY FRUITS",
        "name": "Chironji",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 137,
        "category": "DRY FRUITS",
        "name": "Chuwara (kala)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 138,
        "category": "DRY FRUITS",
        "name": "Chuwara (Pila)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 139,
        "category": "DRY FRUITS",
        "name": "Gola Kas",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 140,
        "category": "DRY FRUITS",
        "name": "Gola Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 141,
        "category": "DRY FRUITS",
        "name": "Gond",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 142,
        "category": "DRY FRUITS",
        "name": "Gond Katira",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 143,
        "category": "DRY FRUITS",
        "name": "Kaju 2pc",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 144,
        "category": "DRY FRUITS",
        "name": "Kaju 4Pc",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 145,
        "category": "DRY FRUITS",
        "name": "Kaju W-240",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 146,
        "category": "DRY FRUITS",
        "name": "Kaju W-320",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 147,
        "category": "DRY FRUITS",
        "name": "Khumani",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 148,
        "category": "DRY FRUITS",
        "name": "Kishmish Gol",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 149,
        "category": "DRY FRUITS",
        "name": "Kishmish Lambi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 150,
        "category": "DRY FRUITS",
        "name": "Magaj Kharbuja",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 151,
        "category": "DRY FRUITS",
        "name": "Magaj Mota",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 152,
        "category": "DRY FRUITS",
        "name": "Makhane",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 153,
        "category": "DRY FRUITS",
        "name": "Munnakka",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 154,
        "category": "DRY FRUITS",
        "name": "Pista Dodi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 155,
        "category": "DRY FRUITS",
        "name": "Pista Pishori",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 42,
        "category": "MASALE",
        "name": "Aam Achar Masala",
        "price": "0",
        "quantity": 0,
        "unit": "GM"
    },
    {
        "id": 43,
        "category": "MASALE",
        "name": "Ajwain",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 44,
        "category": "MASALE",
        "name": "Amchur powder",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 45,
        "category": "MASALE",
        "name": "Amchur Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 97,
        "category": "MASALE",
        "name": "Biryani Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 46,
        "category": "MASALE",
        "name": "Chai Masala (19 no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 98,
        "category": "MASALE",
        "name": "Chana Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 47,
        "category": "MASALE",
        "name": "Chatu Chat Masala (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 99,
        "category": "MASALE",
        "name": "Chicken Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 48,
        "category": "MASALE",
        "name": "Chilli Flakes (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 100,
        "category": "MASALE",
        "name": "Chunky Chat (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 101,
        "category": "MASALE",
        "name": "Dal Makhni Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 102,
        "category": "MASALE",
        "name": "Deggi mirch (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 49,
        "category": "MASALE",
        "name": "Deggi Mirch pd (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 50,
        "category": "MASALE",
        "name": "Dhaniya Koota",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 51,
        "category": "MASALE",
        "name": "Dhaniya Powder",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 52,
        "category": "MASALE",
        "name": "Dhaniya Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 103,
        "category": "MASALE",
        "name": "Garam Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 53,
        "category": "MASALE",
        "name": "Garam Masala pd",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 54,
        "category": "MASALE",
        "name": "Garam Masala Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 55,
        "category": "MASALE",
        "name": "Green Tea",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 56,
        "category": "MASALE",
        "name": "Haldi Powder",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 57,
        "category": "MASALE",
        "name": "Haldi Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 58,
        "category": "MASALE",
        "name": "Hing (Ram Dev)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 59,
        "category": "MASALE",
        "name": "Hing Special (19no)( 20/50 gm)",
        "price": "0",
        "quantity": 0,
        "unit": "GM"
    },
    {
        "id": 60,
        "category": "MASALE",
        "name": "Imli (Chapati)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 61,
        "category": "MASALE",
        "name": "Jaljeera Masala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 62,
        "category": "MASALE",
        "name": "Jeera Kala Namak",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 63,
        "category": "MASALE",
        "name": "Jeera Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 86,
        "category": "MASALE",
        "name": "Kala Chat Masala(19no) (100g)",
        "price": "0",
        "quantity": 0,
        "unit": "Pc"
    },
    {
        "id": 64,
        "category": "MASALE",
        "name": "Kala Jeera (shah)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 65,
        "category": "MASALE",
        "name": "Kali Mirch Powder",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 66,
        "category": "MASALE",
        "name": "Kali Mirch Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 104,
        "category": "MASALE",
        "name": "Kasuri Methi (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 105,
        "category": "MASALE",
        "name": "Kitchen King (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 67,
        "category": "MASALE",
        "name": "Lal Mirch Kuti",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 68,
        "category": "MASALE",
        "name": "Lal Mirch pd",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 69,
        "category": "MASALE",
        "name": "Lal Mirch Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 70,
        "category": "MASALE",
        "name": "Loung",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 87,
        "category": "MASALE",
        "name": "Matra Kulcha Masala 19no (100g)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 106,
        "category": "MASALE",
        "name": "Meat Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 71,
        "category": "MASALE",
        "name": "Meetha Soda",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 72,
        "category": "MASALE",
        "name": "Meethi Saunth",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 73,
        "category": "MASALE",
        "name": "Methi Chutney(longi)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 74,
        "category": "MASALE",
        "name": "Methi Dana",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 223,
        "category": "MASALE",
        "name": "Namak kala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 222,
        "category": "MASALE",
        "name": "Namak sendha( vart wala)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 75,
        "category": "MASALE",
        "name": "Namak Tata",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 76,
        "category": "MASALE",
        "name": "Panipuri Masala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 77,
        "category": "MASALE",
        "name": "Pao Bhaji (Everest)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 79,
        "category": "MASALE",
        "name": "Peepal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 78,
        "category": "MASALE",
        "name": "Pizza & Pasta Masala 19no (Seasoning)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 80,
        "category": "MASALE",
        "name": "Pudina Chat Masala(Instant chutney)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 81,
        "category": "MASALE",
        "name": "Rai pd",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 82,
        "category": "MASALE",
        "name": "Rai Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 107,
        "category": "MASALE",
        "name": "Rajma Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 83,
        "category": "MASALE",
        "name": "Safed Mirch",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 84,
        "category": "MASALE",
        "name": "Safed Mirch pd",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 85,
        "category": "MASALE",
        "name": "Safed Til",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 108,
        "category": "MASALE",
        "name": "Sambar Masala (MDH)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 88,
        "category": "MASALE",
        "name": "Sambhar Masala (everest)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 89,
        "category": "MASALE",
        "name": "Sarson Kali",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 90,
        "category": "MASALE",
        "name": "Sarson Peeli",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 91,
        "category": "MASALE",
        "name": "Saunf Barrik",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 92,
        "category": "MASALE",
        "name": "Saunf Moti",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 93,
        "category": "MASALE",
        "name": "Shikanji Masala",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 94,
        "category": "MASALE",
        "name": "Sounth pd",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 95,
        "category": "MASALE",
        "name": "Sounth Sabut",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 96,
        "category": "MASALE",
        "name": "Tej Patta",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 109,
        "category": "MASALE",
        "name": "Thandai",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 181,
        "category": "MILLETS",
        "name": "Banyard Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 185,
        "category": "MILLETS",
        "name": "Brown Top Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 188,
        "category": "MILLETS",
        "name": "Buckwheat Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 184,
        "category": "MILLETS",
        "name": "Foxtail Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 182,
        "category": "MILLETS",
        "name": "Kodo Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 183,
        "category": "MILLETS",
        "name": "Little Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 187,
        "category": "MILLETS",
        "name": "Pearl Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 186,
        "category": "MILLETS",
        "name": "Raggi Millet",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 163,
        "category": "READY MIX",
        "name": "Bedmi Puri Atta(19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 164,
        "category": "READY MIX",
        "name": "Bhatura Mix",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 166,
        "category": "READY MIX",
        "name": "Dhokla Mix (420)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 165,
        "category": "READY MIX",
        "name": "Missi Roti Atta Mix",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 167,
        "category": "READY MIX",
        "name": "Moong Dal Pakodi(420)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 169,
        "category": "READY MIX",
        "name": "Rice Dosa Mix (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 168,
        "category": "READY MIX",
        "name": "Rice Idli Mix (19no)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 121,
        "category": "RICE",
        "name": "Black Rice",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 119,
        "category": "RICE",
        "name": "Brown Rice",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 112,
        "category": "RICE",
        "name": "Chawal Basmati 110",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 113,
        "category": "RICE",
        "name": "Chawal Basmati 80",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 115,
        "category": "RICE",
        "name": "Chawal Dehraduni 150",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 110,
        "category": "RICE",
        "name": "Chawal Parmal Silky",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 111,
        "category": "RICE",
        "name": "Chawal Parmal Staff",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 116,
        "category": "RICE",
        "name": "Chawal Special 170",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 114,
        "category": "RICE",
        "name": "Chawal Tibar 130",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 117,
        "category": "RICE",
        "name": "Lal Quilla",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 120,
        "category": "RICE",
        "name": "Red Rice",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 122,
        "category": "RICE",
        "name": "Samak Chawal",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 118,
        "category": "RICE",
        "name": "Sela Golden (Special)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 156,
        "category": "SUGAR & JAGGERY",
        "name": "Bura",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 157,
        "category": "SUGAR & JAGGERY",
        "name": "Desi Khand",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 158,
        "category": "SUGAR & JAGGERY",
        "name": "Gur",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 159,
        "category": "SUGAR & JAGGERY",
        "name": "Karara",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 160,
        "category": "SUGAR & JAGGERY",
        "name": "Shakkar",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 161,
        "category": "SUGAR & JAGGERY",
        "name": "Sugar Branded",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 162,
        "category": "SUGAR & JAGGERY",
        "name": "Sugar Loose (Mawana)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },{
        "id": 170,
        "category": "SUPER FOODS & SEEDS",
        "name": "Alsi",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 171,
        "category": "SUPER FOODS & SEEDS",
        "name": "Barley Flakes",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 172,
        "category": "SUPER FOODS & SEEDS",
        "name": "Black Rice",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 173,
        "category": "SUPER FOODS & SEEDS",
        "name": "Brown Rice",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 174,
        "category": "SUPER FOODS & SEEDS",
        "name": "Chia Seeds",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 180,
        "category": "SUPER FOODS & SEEDS",
        "name": "Millets (all types)",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 175,
        "category": "SUPER FOODS & SEEDS",
        "name": "Oats Regular",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 176,
        "category": "SUPER FOODS & SEEDS",
        "name": "Oats Rolled",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 177,
        "category": "SUPER FOODS & SEEDS",
        "name": "Pumpkin Seeds",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 178,
        "category": "SUPER FOODS & SEEDS",
        "name": "Quinoa",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    },
    {
        "id": 179,
        "category": "SUPER FOODS & SEEDS",
        "name": "Sunflower Seeds",
        "price": "0",
        "quantity": 0,
        "unit": "KG"
    }
];

export const initialState: IOrderState = {
    products: productsArr,
    changeQuantity: ()=>{},
    changeUnit: ()=>{},
};
