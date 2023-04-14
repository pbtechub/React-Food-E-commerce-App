import deliScooterImg from './img/c0bb85d3a6347b2ec070a8db694588261616149578.avif'
import dinningImg from './img/30fa0a844f3ba82073e5f78c65c18b371616149662.avif'
import nightLifeImg from './img/855687dc64a5e06d737dae45b7f6a13b1616149818.webp'
import {RiFilterOffLine} from 'react-icons/ri';
import {TbArrowsDownUp} from 'react-icons/tb';
import {BsChevronCompactDown} from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import {FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa'



export const categories = [
    {
        id: 1,
        cateImg : deliScooterImg,
        title: 'Delivery',
        path: 'delivery'
    },
    {
        id: 2,
        cateImg : dinningImg,
        title: 'Dinning Out',
        path: 'dinningout'
    },
    {
        id: 3,
        cateImg : nightLifeImg,
        title: 'Night Life',
        path: 'nightlife'
    }
]

export const filterMenu = [
    {
        id: 1,
        title: 'Sort by',
    },
    {
        id: 2,
        title: 'Cuisines',
    },
    {
        id: 3,
        title: 'Rating',
    },
    {
        id: 4,
        title: 'Cost per person',
    },
    {
        id: 5,
        title: 'More filters',
    }
]


export const sortByList = [
    {
        id: 1,
        title: 'Polpularity',
    },
    {
        id: 2,
        title: 'Rating: High to Low',
    },
    {
        id: 3,
        title: 'Delivery Time',
    },
    {
        id: 4,
        title: 'Cost: Low to High',
    },
    {
        id: 5,
        title: 'Cost: High to Low',
    }
]

export const ratings = [
    {
        id: 1,
        title: 'Any',
    },
    {
        id: 2,
        title: '3.5',
    },
    {
        id: 3,
        title: '4',
    },
    {
        id: 4,
        title: '4.5',
    },
    {
        id: 5,
        title: '5',
    }
]


export const menuBtn = [
    {
        id: 1,
        btnImg: <RiFilterOffLine />,
        title: 'Filters',
        subCate: [
            {
                id: 1,
                subCateTitle: 'cuisins',
                cuisins: [
                    {
                        title: 'America',
                        selected: true 
                    },
                    {
                        title: 'America',
                        selected: true 
                    },
                    {
                        title: 'America',
                        selected: true 
                    },
                    {
                        title: 'America',
                        selected: true 
                    },
                    {
                        title: 'America',
                        selected: true 
                    },
                    {
                        title: 'America',
                        selected: true 
                    }
                ]
            },
            {
                id: 2,
                subCateTitle: 'Ratings',
            },
            {
                id: 3,
                subCateTitle: 'Cost per Person',
            },
            {
                id: 4,
                subCateTitle: 'More filters',
            }
        ]
    },
    {
        id: 2,
        btnImg: <TbArrowsDownUp />,
        title: 'Delivery Time',
        
    },
    {
        id: 3,
        btnImg: '',
        title: 'Rating',
        
    },
    {
        id: 4,
        btnImg: '',
        title: 'Pure Veg',
        
    },
    {
        id: 5,
        btnImg: <BsChevronCompactDown />,
        title: 'Cuisines',
        
    },
    {
        id: 6,
        btnImg: <BsChevronCompactDown />,
        title: 'More filters',
        
    }
]



export const foods = [
    {
        id: 1,
        foodImg: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
        foodName: 'Biryani'
    },
    {
        id: 2,
        foodImg: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
        foodName: 'Chicken'

    },
    {
        id: 3,
        foodImg: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
        foodName: 'Pizza'

    },
    {
        id: 4,
        foodImg: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
        foodName: 'Burger'

    },
    {
        id: 5,
        foodImg: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
        foodName: 'Thali'

    },
    {
        id: 6,
        foodImg: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
        foodName: 'Rolls'

    }
  
]

export const brands = [
    {
        id: 1,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp',
        brandName: "Domino's Pizza",
        time: '30 min'
        
    },
    {
        id: 2,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp',
        brandName: 'Empire Restaurant',
        time: '26 min'
        
    },
    {
        id: 3,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp',
        brandName: 'Truffles',
        time: '26 min'
        
    },
    {
        id: 4,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp',
        brandName: 'Meghana foods',
        time: '22 min'
        
    },
    {
        id: 5,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp',
        brandName: "McDonald's",
        time: '20 min'
        
    },
    {
        id: 6,
        brandImg: 'https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp',
        brandName: 'FreshMenu',
        time: '27 min'
        
    }
]


export const restaurants = [
    {
        id: 1,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/8/18173078/67b0460675d4d07e6180defe10ef1676_o2_featured_v2.jpg?output-format=webp',
        time: '30 min',
        restoName: 'BOX8 - Desi Meals',
        ratings: '4.2',
        foodCat: 'Wraps North Indian, Fast...',
        price: '250',
        totalOrd: '1725'
    },
    {
        id: 2,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/1/50471/6fa39637442e85efb64a5c0db7b31b7f_o2_featured_v2.jpg?output-format=webp',
        time: '35 min',
        restoName: 'Empire Restaurant',
        ratings: '4.1',
        foodCat: 'North Indian, Biryani...',
        price: '250',
        totalOrd: '1452'
    },
    {
        id: 3,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/1/51571/af8fe6df3d53d9df39e651d9ecde28c5_o2_featured_v2.jpg?output-format=webp',
        time: '24 min',
        restoName: 'Hari Super Sandwich',
        ratings: '3.8',
        foodCat: 'Sandwich, Fast Food, stre...',
        price: '250',
        totalOrd: '1550'
    },
    {
        id: 4,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp',
        time: '34 min',
        restoName: 'Truffles',
        ratings: '4.2',
        foodCat: 'Burger, American, Bakery...',
        price: '250',
        totalOrd: '15456'
    },
    {
        id: 5,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/4/50674/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
        time: '26 min',
        restoName: "McDonald's",
        ratings: '4.1',
        foodCat: 'Burger, Fast Food',
        price: '250',
        totalOrd: '1750'
    },
    {
        id: 6,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg',
        time: '42 min',
        restoName: 'Sri Udupi Food Hub',
        ratings: '4.1',
        foodCat: 'South Indian, North...',
        price: '250',
        totalOrd: '2600'
    },
    {
        id: 7,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/2/50382/54bbb7b60771d08224b41d8aa95f5059_o2_featured_v2.jpg?output-format=webp',
        time: '25 min',
        restoName: "Domino's Pizza",
        ratings: '3.9',
        foodCat: 'Pizza, Italian, Pasta, Fast... ',
        price: '250',
        totalOrd: '1345'
    },
    {
        id: 8,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp',
        time: '34 min',
        restoName: 'Truffles',
        ratings: '4.2',
        foodCat: 'Burger, American, Bakery...',
        price: '250',
        totalOrd: '15456'
    },
    {
        id: 9,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/4/50674/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
        time: '26 min',
        restoName: "McDonald's",
        ratings: '4.1',
        foodCat: 'Burger, Fast Food',
        price: '250',
        totalOrd: '1750'
    },
    {
        id: 10,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/8/18173078/67b0460675d4d07e6180defe10ef1676_o2_featured_v2.jpg?output-format=webp',
        time: '30 min',
        restoName: 'BOX8 - Desi Meals',
        ratings: '4.2',
        foodCat: 'Wraps North Indian, Fast...',
        price: '250',
        totalOrd: '1725'
    },
    {
        id: 11,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/1/50471/6fa39637442e85efb64a5c0db7b31b7f_o2_featured_v2.jpg?output-format=webp',
        time: '35 min',
        restoName: 'Empire Restaurant',
        ratings: '4.1',
        foodCat: 'North Indian, Biryani...',
        price: '250',
        totalOrd: '1452'
    },
    {
        id: 12,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/1/51571/af8fe6df3d53d9df39e651d9ecde28c5_o2_featured_v2.jpg?output-format=webp',
        time: '24 min',
        restoName: 'Hari Super Sandwich',
        ratings: '3.8',
        foodCat: 'Sandwich, Fast Food, stre...',
        price: '250',
        totalOrd: '1550'
    },
    {
        id: 13,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp',
        time: '34 min',
        restoName: 'Truffles',
        ratings: '4.2',
        foodCat: 'Burger, American, Bakery...',
        price: '250',
        totalOrd: '15456'
    },
    {
        id: 14,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/4/50674/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
        time: '26 min',
        restoName: "McDonald's",
        ratings: '4.1',
        foodCat: 'Burger, Fast Food',
        price: '250',
        totalOrd: '1750'
    },
    {
        id: 15,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg',
        time: '42 min',
        restoName: 'Sri Udupi Food Hub',
        ratings: '4.1',
        foodCat: 'South Indian, North...',
        price: '250',
        totalOrd: '2600'
    },
    {
        id: 16,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/2/50382/54bbb7b60771d08224b41d8aa95f5059_o2_featured_v2.jpg?output-format=webp',
        time: '25 min',
        restoName: "Domino's Pizza",
        ratings: '3.9',
        foodCat: 'Pizza, Italian, Pasta, Fast... ',
        price: '250',
        totalOrd: '1345'
    },
    {
        id: 17,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp',
        time: '34 min',
        restoName: 'Truffles',
        ratings: '4.2',
        foodCat: 'Burger, American, Bakery...',
        price: '250',
        totalOrd: '15456'
    },
    {
        id: 18,
        foodImg: 'https://b.zmtcdn.com/data/pictures/chains/4/50674/a153257d68de3a60406ac31c98f39ccc_o2_featured_v2.jpg?output-format=webp',
        time: '26 min',
        restoName: "McDonald's",
        ratings: '4.1',
        foodCat: 'Burger, Fast Food',
        price: '250',
        totalOrd: '1750'
    },
]



export const collections = [
    {
        id: 1,
        collectionImg: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
        descriptio: '!7 Places to #BaskInLove',
        place: '17 Places'
    },
    {
        id: 2,
        collectionImg: 'https://images.pexels.com/photos/1378424/pexels-photo-1378424.jpeg?auto=compress&cs=tinysrgb&w=600',
        descriptio: '!7 Places to #BaskInLove',
        place: '17 Places'

    },
    {
        id: 3,
        collectionImg: 'https://images.pexels.com/photos/2440525/pexels-photo-2440525.jpeg?auto=compress&cs=tinysrgb&w=600',
        descriptio: '!7 Places to #BaskInLove',
        place: '17 Places'

    },
    {
        id: 4,
        collectionImg: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
        descriptio: '!7 Places to #BaskInLove',
        place: '17 Places'

    }
    
  
]


export const footers =[
    {
        id: 1,
        title: 'About Zomato',
        subTit: ['Who We Are', 'Blog', 'Work With Us', 'Investor Relations', 'Report Fraud', 'Contact Us' ]
    },
    {
        id: 2,
        title: 'Zomaverse',
        subTit: ['Zomato', 'Blinkit', 'Feeding India', 'Hyperpure', 'Zomaland' ]
    },
    {
        id: 3,
        title: 'For Restaurants',
        subTit: ['Partner With Us', 'Apps For You']
    },
    {
        id: 4,
        title: 'Learn More',
        subTit: ['Privacy', 'Security', 'Terms', 'Sitemap']
    },
    {
        id: 5,
        title: 'Social Links',
        subTit: [<GrLinkedinOption />, <FaInstagram/>, <AiOutlineTwitter />, <AiFillYoutube />, <FaFacebookF />]
    },


] 