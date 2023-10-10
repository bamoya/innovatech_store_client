const sliderData = [
    {
        id: 1,
        image: 'https://media.topachat.com/media/s1000/64da0f004109b77e3b63be65.webp',
        title: 'Office 365 2023',
        description: 'Save 20% on Software Key !!!',
        link: '#', // Replace with the actual link to the promotion page
      },
      {
        id: 2,
        image: 'https://media.topachat.com/media/s1000/64da18f67d89db1fcf632542.webp',
        title: 'Windows 11 Pro Edition',
        description: 'save more than 30% by buying windows right this week',
        link: '#', // Replace with the actual link to the promotion page
      },
]


const products = [
    { id: 1, name: 'Avast Pro Antivirus', price: '19.99', image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 2, name: 'Product 2', price: '24.99', image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
    { id: 3, name: 'Product 3', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/02uzazyH3C1xNU8CEqB10Ue-20.fit_lim.size_1200x630.v1597339266.png' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 4, name: 'Product 4', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/024gPgj28vYUnYBkpEUumbA-24..v1629126923.jpg' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 5, name: 'Product 4', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/024gPgj28vYUnYBkpEUumbA-24..v1629126923.jpg' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 6, name: 'Avast Pro Antivirus', price: '$19.99', image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    // { id: 7, name: 'Product 2', price: '24.99', image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
    // { id: 8, name: 'Product 3', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/02uzazyH3C1xNU8CEqB10Ue-20.fit_lim.size_1200x630.v1597339266.png' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    // { id: 9, name: 'Product 4', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/024gPgj28vYUnYBkpEUumbA-24..v1629126923.jpg' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    
];

const discountedProducts = [
    
    { id: 1, name: 'Avast Pro Antivirus', oldPrice: '19.99', newPrice : '10.99' , discountPercentage :'20' , image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 2, name: 'Product 2', oldPrice: '24.99',newPrice : '10.99' ,discountPercentage :'20' , image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
    { id: 1, name: 'Avast Pro Antivirus', oldPrice: '19.99',newPrice : '10.99' ,discountPercentage :'20' , image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    { id: 2, name: 'Product 2', oldPrice: '24.99',newPrice : '10.99' ,discountPercentage :'20' , image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
    // { id: 1, name: 'Avast Pro Antivirus', price: '19.99', image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
    // { id: 2, name: 'Product 2', price: '24.99', image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
    
]

const categories = [
    {
        id: 1,
        name : "PC Components",
        quantity: 12,
        imageSrc: "https://c4.wallpaperflare.com/wallpaper/560/247/682/asus-pc-gaming-graphics-card-sli-wallpaper-preview.jpg",
        href : "/category/components",
        imageAlt: "",
        description: "gsgsgs sgsfgfsgsfg gsfgfsgs",
    },
    {
        id: 2,
        name : "Laptops",
        quantity: 12,
        imageSrc: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/laptop-category-latitude-14-9440-lf-rf-800x620.png",
        href : "/category/laptops",
        imageAlt: "",
        description: "gsgsgs sgsfgfsgsfg gsfgfsgs",
    },
    {
        id: 3,
        name : "Softwares",
        quantity: 12,
        imageSrc: "https://www.wroffy.com/wp-content/uploads/2018/02/office365forbusiness.jpg",
        href : "/category/softwares",
        imageAlt: "",
        description: "gsgsgs sgsfgfsgsfg gsfgfsgs",
    },
]

const promotions = [
    {
      id: 1,
      image: 'https://cnie.dz/wp-content/uploads/2019/03/microsoft-office-365-bi-cam-o-duc.png',
      heading: 'Office 365 2023',
      subheading: 'Save 20% on Software Key !!!',
      link: '#', // Replace with the actual link to the promotion page
    },
    {
      id: 2,
      image: 'https://images.frandroid.com/wp-content/uploads/2021/06/windows-11-logo-hero.jpg',
      heading: 'Windows 11 Pro Edition',
      subheading: 'save more than 30% by buying windows right this week',
      link: '#', // Replace with the actual link to the promotion page
    },
    // Add more promotions as needed
  ];

const softwareProducts = [
  { id: 1, name: 'Avast Pro Antivirus', price: '19.99', image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
  { id: 2, name: 'Product 2', price: '24.99', image: 'https://pic.clubic.com/v1/images/1784143/raw?fit=max&width=1200&hash=59683d135537f49be5382b58de605755c8fde93c' ,description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL'  },
  { id: 3, name: 'Product 3', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/02uzazyH3C1xNU8CEqB10Ue-20.fit_lim.size_1200x630.v1597339266.png' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
  { id: 4, name: 'Product 4', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/024gPgj28vYUnYBkpEUumbA-24..v1629126923.jpg' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
  { id: 5, name: 'Product 4', price: '29.99', image: 'https://i.pcmag.com/imagery/reviews/024gPgj28vYUnYBkpEUumbA-24..v1629126923.jpg' , description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
  { id: 6, name: 'Avast Pro Antivirus', price: '$19.99', image: 'https://www.logicielsmaroc.com/wp-content/uploads/2022/07/Microsoft-Windows-11-Pro-1-licences-au-Maroc.jpg', description:'Avast Pro Antivirus PC 1 Device 1 Year Avast Key GLOBAL' },
  
]
const pcComponentsProducts = [
  { id: 1, name: 'NVIDIA RTX 3050', price: '499', image: 'https://www.ultrapc.ma/19229/msi-geforce-rtx-3050-gaming-x-8gb-gddr6-cartes-graphiques.jpg', description:'MSI GeForce RTX 3050 GAMING X 8GB GDDR6' },
  { id: 2, name: 'AMD RYZEN 7', price: '300', image: 'https://www.tera.ma/wp-content/uploads/2020/07/p_3_2_1_7_3217-AMD-Ryzen-7-3800X-Wraith-Prism-LED-RGB-3.9-GHz-4.5-GHz-maroc.jpg' ,description:'Processeur AMD Ryzen 7 3800x'  },
  { id: 3, name: 'NVIDIA RTX 3050', price: '499', image: 'https://www.ultrapc.ma/19229/msi-geforce-rtx-3050-gaming-x-8gb-gddr6-cartes-graphiques.jpg', description:'MSI GeForce RTX 3050 GAMING X 8GB GDDR6' },
  { id: 4, name: 'AMD RYZEN 7', price: '300', image: 'https://www.tera.ma/wp-content/uploads/2020/07/p_3_2_1_7_3217-AMD-Ryzen-7-3800X-Wraith-Prism-LED-RGB-3.9-GHz-4.5-GHz-maroc.jpg' ,description:'Processeur AMD Ryzen 7 3800x'  },
  { id: 5, name: 'NVIDIA RTX 3050', price: '499', image: 'https://www.ultrapc.ma/19229/msi-geforce-rtx-3050-gaming-x-8gb-gddr6-cartes-graphiques.jpg', description:'MSI GeForce RTX 3050 GAMING X 8GB GDDR6' },
  { id: 6, name: 'AMD RYZEN 7', price: '300', image: 'https://www.tera.ma/wp-content/uploads/2020/07/p_3_2_1_7_3217-AMD-Ryzen-7-3800X-Wraith-Prism-LED-RGB-3.9-GHz-4.5-GHz-maroc.jpg' ,description:'Processeur AMD Ryzen 7 3800x'  },
]
const laptopsProducts = [
  { id: 1, name: 'Lenovo Legion', price: '1500', image: 'https://micromagma.ma/media/k2/items/cache/40fff60293b297e40a289e448b412759_XL.jpg' ,description:'Lenovo Legion 7 15IMH05 I9 1To 32Go RAM '  },
  { id: 2, name: 'Asus ROG STRIX', price: '1800', image: 'https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg' ,description:'ASUS ROG Strix G15 (2021) Ordinateur portable de jeu, 15,6 €'  },
  { id: 3, name: 'Lenovo Legion', price: '1500', image: 'https://micromagma.ma/media/k2/items/cache/40fff60293b297e40a289e448b412759_XL.jpg' ,description:'Lenovo Legion 7 15IMH05 I9 1To 32Go RAM '  },
  { id: 4, name: 'Asus ROG STRIX', price: '1800', image: 'https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg' ,description:'ASUS ROG Strix G15 (2021) Ordinateur portable de jeu, 15,6 €'  },
  { id: 5, name: 'Lenovo Legion', price: '1500', image: 'https://micromagma.ma/media/k2/items/cache/40fff60293b297e40a289e448b412759_XL.jpg' ,description:'Lenovo Legion 7 15IMH05 I9 1To 32Go RAM '  },
  { id: 6, name: 'Asus ROG STRIX', price: '1800', image: 'https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg' ,description:'ASUS ROG Strix G15 (2021) Ordinateur portable de jeu, 15,6 €y'  },

]

const promotion = {
  image : "https://e7.pngegg.com/pngimages/294/999/png-clipart-laptop-asus-rog-gl552-asus-rog-g501jw-intel-core-laptop-laptop-asus-rog.png",
  title : "Asus ROG STRIX",
  description : "Buy the NEW ASUS ROG STRIX and get 30% discout",
  link: "promotion/id",
}

const footerData = {
  company: {
    logoImg : "logo",
    name: "innovaKey",
    description : "best choise",
  },
  pages : {
    categories : [
      {name : 'Softwares', link : '/category=softwares'},
      {name : 'PC Components', link : '/category=pc'},
      {name : 'Laptops', link : '/category=laptops'},
    ],
    various : [
      { name : "legals" , link : "/legals"},
      { name : "about us" , link: "/about"},
      { name : "contact" , link: "/contact"},
    ]
  },
  contactInfo : {
    email : "contact@innovakey.com",
    tele : "00000000",
    address : "location, casa, maroc",
  },
  paymentImg : 'https://www.topachat.com/_nuxt/img/paiements-400.ac0c779.png',
}
const brands = [
  {
      id : "1",
      name : "MSI",
      quantity : "20",

  },
  {
      id : "2",
      name : "ASUS",
      quantity : "15",

  },
  {
      id : "3",
      name : "MICROSOFT",
      quantity : "10",

  },
]

const sortBy = [
  {
      id: '1',
      name: 'Default'
  },
  {
      id: '2',
      name: 'lowest price first'
  },
  {
      id: '3',
      name: 'highest price first'
  },
  
]

const productDetails = {
  name: "LAPTOP ROG STRIX",
  categry: "laptops",
  description: "Le PC Portable Gaming ASUS ROG STRIX SCAR 16 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran mini-LED QHD 240 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
  images: {
    img1: "https://mediazone.ma/uploads/images/products/14161/14161-WODPcFOn.webp",
    img2: "https://mediazone.ma/uploads/images/products/14161/11117DFB-8E79-C7BB-A98A-50AF9A0C8A0A.webp",
    img3: "https://mediazone.ma/uploads/images/products/14161/1120D0AD-8EE1-5C2E-DF3D-5AB32469C61B.webp",
    img4: "https://mediazone.ma/uploads/images/products/14161/1A521EC8-FA94-B7AA-2BF3-FC2173475D28.webp",
  },
  price: "3500"
  
}


export  { products, discountedProducts, categories, sliderData, laptopsProducts, softwareProducts, 
  pcComponentsProducts, promotion, footerData, brands,
  sortBy,productDetails }