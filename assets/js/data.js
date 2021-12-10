const items = [
  {
    ID: "1",
    name: "Piebald vaas",
    description:
      "Uitzonderlijke Murano vaas van ontwerper Fulvio Bianconi.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/Piebald_hpe2zc.jpg",
    images: [
      "https://assets.catawiki.nl/assets/2021/10/13/f/8/b/f8b13fc9-110f-4f97-9448-9edfec4fc718.jpg",
      "https://assets.catawiki.nl/assets/2021/10/13/7/9/2/7929713e-f0e8-4d29-97de-8960bb4de5cf.jpg",
      "https://assets.catawiki.nl/assets/2021/10/13/b/c/c/bccbb7d2-882d-4ef3-98a9-82fd38b76db4.jpg"
    ],
    number: "1",
    material: "glass",
    designer: "Fulvio Bianconi",
    brand: "Murano",
    style: "modern",
    period: "1960",
    state: "as new",
    sellerId: "1",
    price: 1450.00
  },
  {
    ID: "2",
    name: "Arclumis kandelaars",
    description: "Stijlvol en tijdloos ontwerp van Matthew Hilton.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/3/swan_yxts4u.jpg",
    images: [
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638785944/webshop/3/bda9591b-894a-4cd8-97d9-ad940ec72b42_wvye67.jpg",
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638785975/webshop/3/94a3850f-a642-4b5f-a953-779f549a31ff_zbdivy.jpg",
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786022/webshop/3/46b5cdc9-1ee5-4dc0-ad20-92866e66eda5_pnazjw.jpg",
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786105/webshop/3/feef3a63-ffe7-44d9-a5a2-6bcd4eae197c_htnkvr.jpg",
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1638786128/webshop/3/7987aee3-4020-473f-a842-78e7cdd1ec19_vor2lo.jpg"
    ],
    number: "2",
    material: "aluminium",
    designer: "Matthew Hilton",
    brand: "-",
    style: "modern",
    period: "1970",
    state: "as new",
    sellerId: "1",
    price: 61.00
  },
  {
    ID: "3",
    name: "Flow Fruitschaal",
    description:
      "Prachtige verzilverde fruitschaal gemaakt door Gijs bakker voor Keltum.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263115/webshop/GB/174_Fruit-Bowl_2000_kvj5ch.jpg",
    images: [
      "https://assets.catawiki.nl/assets/2020/2/22/8/d/0/8d0062ae-4b9c-45bc-858d-b9d58090e26f.jpg",
      "https://assets.catawiki.nl/assets/2020/2/22/5/d/0/5d0ecb32-f6d3-412a-a136-16c879c7c485.jpg",
      "https://assets.catawiki.nl/assets/2020/2/22/c/1/5/c1558615-b5d3-4c5e-8493-d4d1fe5b0d4e.jpg"
    ],
    number: "1",
    material: "aluminium, zilver",
    designer: "Gijs Bakker",
    brand: "Keltum",
    style: "modern",
    period: "2000",
    state: "used",
    sellerId: "2",
    price: 152.00,
  },
  {
    ID: "4",
    name: "3 Point 7 Necklace",
    description: "Zeer zeldzame ketting gemaakt voor Jan Matthesius.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263108/webshop/GB/389_3_Point_7_Necklace_worn_HD_kopie_zitnph.jpg",
    images: [
      "http://gijsbakker.com/media/studio/jewellery/000%201600px/389_3%20Point%207%20Necklace_worn_HD%20kopie.jpg",
      "http://gijsbakker.com/media/studio/jewellery/000%201600px/381_3%20Point%207%20Necklace.jpg"
    ],
    number: "1",
    material:
      "acrylic, glass, aluminium, gold, jade, silver, stainless steel, tantalum, titanium",
    designer: "Gijs Bakker",
    brand: "-",
    style: "modern",
    period: "2014",
    state: "new",
    sellerId: "3",
    price: 699.90,
  },
  {
    ID: "5",
    name: "Blue Sea Broche",
    description:
      "Unieke broche uit de Real serie, gemaakt van saffier en witgoud.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263933/webshop/GB/REAL1_BlueSeaBrooch_m98uyw.jpg",
    images: ["http://www.gijsbakker.com/media/studio/jewellery/REAL1_BlueSeaBrooch.jpg"],
    number: "1",
    material: "sapphire, gold",
    designer: "Gijs Bakker",
    brand: "",
    style: "modern",
    period: "2004",
    state: "as new",
    sellerId: "4",
    price: 1890.00,
  },
  {
    ID: "6",
    name: "Bolpoottafel",
    description: "Uniek ontwerp gemaakt voor het Holes Project in '93.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1637263116/webshop/GB/135.Bolpoottafel.1993_sbt4iz.jpg",
    images: ["http://gijsbakker.com/media/studio/projects/forWEB/135.Bolpoottafel.1993.jpg"],
    number: "1",
    material: "maple wood",
    designer: "Gijs Bakker",
    brand: "-",
    style: "modern",
    period: "1993",
    state: "used",
    sellerId: "4",
    price: 595.00,
  },
  {
    ID: "7",
    name: "Saw-cut Chair",
    description:
      "Unieke variant van de 'Finger Chair', ontworpen voor Designum",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_1600,w_1600/v1637264067/webshop/GB/098.Saw-cut-chair.1983_sqvkpr.jpg",
    images: ["https://www.botterweg.com/Portals/0/auction/Maart%202020/highres/44-20803-1_1.jpg",
      "https://www.botterweg.com/Portals/0/auction/Maart%202020/highres/44-20803-1_3.jpg",
      "https://www.botterweg.com/Portals/0/auction/Maart%202020/highres/44-20803-1_6.jpg"
    ],
    number: "1",
    material: "steel, mahogany",
    designer: "Gijs Bakker",
    brand: "Designum",
    style: "modern",
    period: "1983",
    state: "used",
    sellerId: "4",
    price: 2490.00
  },
  {
    ID: "8",
    name: "Joyride",
    description:
      "Een penisvormige pijp van zwart porselein in opdracht van Ornamentum Gallery",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/c_crop,h_871,w_871/v1637263110/webshop/GB/Joyride_2020_r8xf8w.png",
    images: ["https://res.cloudinary.com/dct-media/images/w_1024,h_1024,c_scale/q_auto:good/v1634688557/wordpress_assets/Ornamentum_Gijs-Bakker_Joyride_Pipe_Black2-Stefan-Friedemann/Ornamentum_Gijs-Bakker_Joyride_Pipe_Black2-Stefan-Friedemann-1024x1024.jpg?_i=AA"],
    number: "1",
    material: "black porcelain",
    designer: "Gijs Bakker",
    brand: "Ornamentum Gallery",
    style: "modern",
    period: "2020",
    state: "new",
    sellerId: "4",
    price: 75.00
  },
  {
    ID: "9",
    name: "Mahoniehouten serveerwagen",
    description: "Prachtige serveerwagen uit Milan, jaren 50.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248994/webshop/trolley_n4d9pc.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/11/3/3/1/f/31f2ccae-9620-43e6-8bb4-e7df4a34f29f.jpg",
      "https://assets.catawiki.nl/assets/2021/11/3/9/0/7/90745fc1-d4d0-442f-9c77-b74d8b9d5696.jpg",
      "https://assets.catawiki.nl/assets/2021/11/3/5/b/4/5b400f4a-2d03-48da-b5d2-6e0404fd3a3a.jpg"],
    number: "1",
    material: "mahogany, copper",
    designer: "-",
    brand: "-",
    style: "MCM",
    period: "1950",
    state: "used",
    sellerId: "1",
    price: 249.00,
  },
  {
    ID: "10",
    name: "Teakhouten ladekast",
    description:
      "Mooi vintage kastje met 2 lades. Gemaakt in de jaren 60 te Duitsland.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248992/webshop/teak_mopbxe.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/11/3/e/9/d/e9d93f46-ca4b-4bbf-98d3-a67d718279c6.jpg",
      "https://assets.catawiki.nl/assets/2021/11/3/2/f/b/2fb2fc03-7094-4d27-812f-d57f2588a8d3.jpg",
      "https://assets.catawiki.nl/assets/2021/11/3/e/e/7/ee74ced3-8caf-4a14-b9b0-e98d563afab5.jpg",
      "https://assets.catawiki.nl/assets/2021/11/3/2/d/0/2d06f90c-96e3-425e-b9a6-cac0512b5a25.jpg"
    ],
    number: "1",
    material: "teak wood",
    designer: "-",
    brand: "-",
    style: "MCM",
    period: "1960",
    state: "used",
    sellerId: "5",
    price: 149.95
  },
  {
    ID: "11",
    name: "Glazen vaas Kovaca",
    description:
      "Prachtige glazen vaas naar ontwerp van Kovaca voor glasblazerij Leerdam 2006.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248991/webshop/blue_kgfyxx.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/11/10/4/d/0/4d0bdbb4-0a0b-4ee2-bf58-180aeca5ee68.jpg",
      "https://assets.catawiki.nl/assets/2021/11/10/3/9/e/39eb7126-bf16-4d4c-8e92-7cce9c4b1004.jpg",
      "https://assets.catawiki.nl/assets/2021/11/10/b/f/2/bf24eb7e-5d26-4318-9316-5d1829dea116.jpg"],
    number: "1",
    material: "glass",
    designer: "Kovaca",
    brand: "Leerdam",
    style: "modern",
    period: "2006",
    state: "new",
    sellerId: "6",
    price: 156.00
  },
  {
    ID: "12",
    name: "Marmer zwart en gouden salontafel",
    description: "Elegante tafel van zwart marmer en goud voor TM Design.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/marble_ldb73q.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/11/10/3/3/7/33705ad7-93a1-4fee-b3ed-948dbd21edc4.jpg",
      "https://assets.catawiki.nl/assets/2021/11/10/a/0/7/a073a1ac-c9ac-4713-be86-6d031c744963.jpg",
      "https://assets.catawiki.nl/assets/2021/11/10/7/a/b/7abb6273-ec6b-4d0c-b921-83a827622a69.jpg",
      "https://assets.catawiki.nl/assets/2021/11/10/9/5/5/955c0721-fc04-4d5d-a2d5-ee3f0c489256.jpg"
    ],
    number: "1",
    material: "marble, gold",
    designer: "-",
    brand: "TM Design",
    style: "modern",
    period: "-",
    state: "new",
    sellerId: "7",
    price: 450.00
  },
  {
    ID: "13",
    name: "Wierookhouder",
    description:
      "Bijzondere wierookhouder in strak vormgegeven Art Deco stijl uit de jaren 20.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/wierook_vzwrsl.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/10/24/3/d/a/3da9187b-ba5d-49d4-9b4c-1b0f1111ddd2.jpg",
      "https://assets.catawiki.nl/assets/2021/10/24/f/e/0/fe020a26-c985-47d4-a2c5-8ebba6aa3485.jpg",
      "https://assets.catawiki.nl/assets/2021/10/24/8/a/a/8aac9f65-1fc8-4461-ae3d-1b169164f068.jpg"],
    number: "1",
    material: "silver",
    designer: "-",
    brand: "-",
    style: "Art Deco",
    period: "1920",
    state: "used",
    sellerId: "8",
    price: 60.00
  },
  {
    ID: "14",
    name: "Art Deco windhond",
    description:
      "Mooie bronzen windhond in Art Deco stijl op zwart marmeren sokkel.",
    thumbnail:
      "https://res.cloudinary.com/dezwo7e6f/image/upload/v1637248993/webshop/greyhound_y9gbkg.jpg",
    images: ["https://assets.catawiki.nl/assets/2021/11/4/c/e/3/ce323aec-4c2a-4ade-8b44-57018486d463.jpg",
      "https://assets.catawiki.nl/assets/2021/11/4/9/3/e/93e8c827-ee0b-4628-9eca-695ba22cefc2.jpg",
      "https://assets.catawiki.nl/assets/2021/11/4/0/8/0/08054a5e-d5e6-4350-80c3-6a21a1107581.jpg",
      "https://assets.catawiki.nl/assets/2021/11/4/a/0/6/a06445e0-ed0d-4f94-a174-1274030aff88.jpg"],
    number: "1",
    material: "bronze, marble",
    designer: "-",
    brand: "-",
    style: "Art Deco",
    period: "1920",
    state: "used",
    sellerId: "9",
    price: 130.00
  },
]