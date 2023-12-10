import TV1 from "./assets/images/Tv1.jpeg";
import TV2 from "./assets/images/Tv2.jpeg";
import TV5 from "./assets/images/Tv5.jpeg";
import TV6 from "./assets/images/Tv6.jpeg";
import TV7 from "./assets/images/Tv7.jpeg";
import TV10 from "./assets/images/Tv10.jpeg";
import TV12 from "./assets/images/Tv12.jpeg";
import AC1 from "./assets/images/AC1.jpeg";
import AC2 from "./assets/images/AC2.jpeg";
import AC4 from "./assets/images/AC4.jpeg";
import AC from "./assets/images/AC.jpeg";
import Refrigerator1 from "./assets/images/Refrigerator1.jpeg";
import XBOOM1 from "./assets/images/XBOOM1.jpeg";
import XBOOM2 from "./assets/images/XBOOM2.jpeg";
import Gen from "./assets/images/Gen.jpeg";
import Gen1 from "./assets/images/Gen1.jpeg";
import Refrigerator from "./assets/images/Refrigerator.jpeg";
import Refrigerator6 from "./assets/images/Refrigerator6.jpeg";
import machine from "./assets/images/wahing-machine.jpeg";
import machine1 from "./assets/images/wahing-machine1.jpeg";
import SHOWGLASS from "./assets/images/SHOWGLASS.jpeg";
import Burna from "./assets/images/Burna.jpeg";
import r from "./assets/images/r.jpeg";

const menu = [
  {
    id: 1,
    title: "Infinix 55 Inch",
    category: "TV",
    price: "450,000",
    desc: `infinix presents a cutting-edge 56-inch 4K UHD Smart TV priced at ₦521,050.Featuring Android TV,Smart Set capabilities,Hostspot,Screen Mirroring,Bluetooth,infinix Life app,and a sleek frameless design for am immersive 4K UD experience `,
    img: TV1,
  },

  {
    id: 2,
    title: "Sharp",
    category: "AC",
    price: 15.99,
    img: AC,
    desc: `The Sharp 1.5HP Air Conditioner combines sleek design with powerful and efficient cooling for optimal comfort in medium-sized rooms. Upgrade your space with Sharp's reliable and innovative climate control solution. `,
  },

  {
    id: 3,
    title: "Sumec Firman",
    category: "Generator",
    price: "189,999",
    img: Gen,
    desc: `Explore the Sumec Firman Generator SPG 3000, featuring a 220V/50Hz AC output,power rating from 2.5 KVA to 2.8 KVA,manual start,100% copper components,fueled by petrol.Available at ₦189,999.00 with stock availability. `,
  },
  {
    id: 4,
    title: "Snowsea",
    category: "Refrigerator",
    price: "318,000",
    img: Refrigerator1,
    desc: `The Snowsea Double Door Standing Fridge offers spacious and convenient cooling solutions. With its double-door design, it provides ample storage for your perishables. This fridge is designed for efficiency and easy access to your items. `,
  },
  {
    id: 5,
    title: "LG  XBOOM",
    category: "XBOOM",
    price: "380,000",
    img: XBOOM1,
    desc: `Experience the LG 2350Watts XBOOM Bluetooth HiFi Home Theater System CL87,priced at ₦343,900.Elevate your audio with powerfull LG 2350Watts XBOOM Bluetooth HiFi Home Theater System,now available for ₦380,000  `,
  },
  {
    id: 6,
    title: "Infinix 55 Inch",
    category: "TV",
    price: "450,000",
    desc: `infinix presents a cutting-edge 56-inch 4K UHD Smart TV priced at ₦521,050.Featuring Android TV,Smart Set capabilities,Hostspot,Screen Mirroring,Bluetooth,infinix Life app,and a sleek frameless design for am immersive 4K UD experience `,
    img: TV2,
  },
  {
    id: 7,
    title: "Elepaq Gen",
    category: "Generator",
    price: "225,000",
    img: Gen1,
    desc: `The Elepaq Generator SV 5200 2.8KVA ensures reliable power with a robust capacity, perfect for keeping essential appliances running smoothly. Its efficient performance and durable build make it a dependable choice for both power outages and portable power needs.`,
  },
  {
    id: 8,
    title: "Sumec Firman",
    category: "AC",
    price: "282,000",
    img: AC1,
    desc: `The Sumec Firman Gen Smartcool Inverter 1.1HP AC is a smart and efficient air conditioner, designed for optimal cooling performance. With a 1.1HP capacity, it provides reliable cooling while being energy-efficient. This inverter AC is equipped with intelligent features for precise temperature control, making it a smart choice for your comfort needs.  `,
  },

  {
    id: 9,
    title: "Skyrun Air Conditioner",
    category: "AC",
    price: "276,000",
    img: AC2,
    desc: `The Sharp 1.5HP Air Conditioner combines sleek design with powerful and efficient cooling for optimal comfort in medium-sized rooms. Upgrade your space with Sharp's reliable and innovative climate control solution.`,
  },

  {
    id: 10,
    title: "Homeflower ",
    category: "XBOOM",
    price: "87,200",
    img: XBOOM2,
    desc: `Available now,the Homeflower HF9900/2.1 with a weight of 7.00kg is in stock at the price of ₦87,200 `,
  },
  {
    id: 11,
    title: "air conditioners",
    category: "AC",
    price: "276,000",
    img: AC4,
    desc: `Explore a range of Hisense air conditioners categorized by type, including split, floor standing,portable,and ceiling cassette. We also offer commercial air conditioners.Brands available include LG and Hisense, with price starting from ₦276,000. All items are currently in stock.  `,
  },

  {
    id: 12,
    title: "Hisense 43 Inches ",
    category: "TV",
    price: "237,513",
    img: TV5,
    desc: `Explore the Hisense 43 Inches 4K LED Smart TV (43A6H) in sleek black,  complete with a year warranty, priced at ₦237,513.This TV features a  Direct LED blacklight  source,a pixel resolution of 1920x1080,1 AV input, and 2 HDMI inputs.Currently in stock.`,
  },
  {
    id: 13,
    title: "HD Home Theatre",
    category: "XBOOM",
    price: "278,000",
    img: TV6,
    desc: `Experience cinematic brilliance with the Sony 5.1 Full HD 3D Blu-ray Disc Home Theatre System,boasting 1000 Watts of power and Bluetooth connectivity. Now available at ₦278,000 with a 36% discount. Explore the immersive world of the Sony 5.1 Inch Home Theatre system.   `,
  },

  {
    id: 14,
    title: "Snowsea Freezer",
    category: "Refrigerator",
    price: "136,000",
    img: Refrigerator,
    desc: `Discover the reliability of the Snowsea Freezer 29kg , a practical solution for frozen storage. With a commitment to efficiency and durability, this freezer offers a dependable way to preserve your perishables. Invest in the Snowsea Freezer for quality freezing capabilities `,
  },
  {
    id: 15,
    title: "TCL 55 Inch",
    category: "TV",
    price: "450,000",
    img: TV7,
    desc: `Experience the brilliance of the TCL 55 Inch UHD Smart Android 4K Ultra Slim HDR Television priced at ₦450,000, and elevate your viewing with the TCL 55 Inch Ultra HD Android Smart QLED Google TV 55C645.  `,
  },

  {
    id: 16,
    title: "HD Home Theatre",
    category: "XBOOM",
    price: "278,000",
    img: TV6,
    desc: `Experience cinematic brilliance with the Sony 5.1 Full HD 3D Blu-ray Disc Home Theatre System,boasting 1000 Watts of power and Bluetooth connectivity. Now available at ₦278,000 with a 36% discount. Explore the immersive world of the Sony 5.1 Inch Home Theatre system.   `,
  },
  {
    id: 17,
    title: "LG 65 inch ",
    category: "TV",
    price: 814900.0,
    img: TV10,
    desc: `immerse yourself in the LG 65-inch UR73 series UHD 4K Smart TV,delivering vibrant colors and exceptional details through 4K HDR10 Pro. Elevate your viewing with the a% AI Processor for a smarter experience,featuring ThinQ AI and Gen^ Smart Functionality. Priced at ₦810,900.00`,
  },

  {
    id: 18,
    title: "TV",
    category: "TV",
    price: "323,200",
    img: TV12,
    desc: `55-inch UHD 4K SMART TV with Bluetooth, 3 HDMI ports, 2 USB ports, includes a complimentary Wall Bracket, LAN/WiFi connectivity, and Voice Recognition.  `,
  },
  {
    id: 19,
    title: "Snowsea Freezer",
    category: "Refrigerator",
    price: "280,000",
    img: Refrigerator6,
    desc: ` introducing the Snowsea Chest Freezer BD37OG with a 370L capacity,featuring rapid freezing, extended ice retention for up to 3  days,anti-rust construction,inner glass covering, and priced at ₦280,000`,
  },
  {
    id: 20,
    title: "Hisense Washing Machine",
    category: "Washing Machine",
    price: "240,000",
    img: machine,
    desc: `Upgrade your laundry routine with the Hisense Washing Machine. Experience cutting-edge technology and efficiency as this appliance takes care of your laundry needs. Trust in Hisense for a reliable and powerful washing machine solution`,
  },
  {
    id: 21,
    title: "Midea Washing Machine",
    category: "Washing Machine",
    price: "200,000",
    img: machine1,
    desc: `Elevate your laundry routine with the Midea Washing Machine, boasting a 7kg capacity for both washing and spinning. This versatile appliance ensures thorough cleaning and efficient spinning, making it a reliable choice for your laundry needs. Enjoy convenience and performance in one compact design.`,
  },
  {
    id: 22,
    title: " Showcase Chiller",
    category: " Showcase Chiller",
    price: "286,000",
    img: SHOWGLASS,
    desc: `Experience superior cooling with the Skyrun Showcase Chiller. This appliance combines style and functionality to keep your perishables fresh and easily accessible. The Skyrun Showcase Chiller is designed for convenience and efficiency, making it an ideal addition to your home.`,
  },

  {
    id: 23,
    title: " Maxi 4 Burners Gas Cooker",
    category: " Gas Cooker",
    price: "132,000",
    img: Burna,
    desc: `Elevate your culinary experience with the Maxi 4 Burners Gas Cooker. With a sleek black and grey design measuring 50cm x 50cm, this cooker combines style and functionality. Enjoy efficient and precise cooking with the reliability of Maxi's quality gas cooker`,
  },
  {
    id: 24,
    title: "Royal Chest Freezer",
    category: "Refrigerator",
    price: "312,000.00",
    img: r,
    desc: `Introducing the Brand New Royal Chest Freezer Chest Freezer featuring an external compressor in a sleek silver finish. This spacious and efficient freezer offers ample storage capacity, ensuring your frozen goods are kept at optimal conditions. Upgrade to reliable freezing with  quality.`,
  },
];
export default menu;
