const app = require('express')();
require("dotenv").config();
// const app = express();
// const mongoose = require('mongoose')
// const URI = process.env.uri || undefined
const port = process.env.PORT || 3000;

// mongoose.connect(URI)
// .then(()=>{
// console.log('database connect successfully');

// })
// .catch(err => console.log(err));  


const foods = [
    { 
        name: "Pizza", 
        origin: "Italy", 
        popular_countries: ["USA", "UK", "Germany"], 
        landmass: "301,340 km²", 
        population: 60360000, 
        landmarks: ["Colosseum", "Leaning Tower of Pisa"], 
        pictures: ["pizza.jpg", "colosseum.jpg"] 
    },
    { 
        name: "Sushi", 
        origin: "Japan", 
        popular_countries: ["Japan", "USA", "Canada"], 
        landmass: "377,975 km²", 
        population: 126300000, 
        landmarks: ["Mount Fuji", "Tokyo Tower"], 
        pictures: ["sushi.jpg", "mount_fuji.jpg"] 
    },
    { 
        name: "Jollof Rice", 
        origin: "West Africa", 
        popular_countries: ["Nigeria", "Ghana", "Senegal"], 
        landmass: "923,768 km²", 
        population: 206100000, 
        landmarks: ["Zuma Rock", "Yankari National Park"], 
        pictures: ["jollof_rice.jpg", "zuma_rock.jpg"] 
    },
    { 
        name: "Tacos", 
        origin: "Mexico", 
        popular_countries: ["Mexico", "USA", "Spain"], 
        landmass: "1,964,375 km²", 
        population: 128900000, 
        landmarks: ["Chichen Itza", "Teotihuacan"], 
        pictures: ["tacos.jpg", "chichen_itza.jpg"] 
    },
    { 
        name: "Pasta", 
        origin: "Italy", 
        popular_countries: ["Italy", "France", "UK"], 
        landmass: "301,340 km²", 
        population: 60360000, 
        landmarks: ["Colosseum", "Leaning Tower of Pisa"], 
        pictures: ["pasta.jpg", "leaning_tower_of_pisa.jpg"] 
    },
    { 
        name: "Burger", 
        origin: "Germany", 
        popular_countries: ["USA", "Germany", "Canada"], 
        landmass: "357,022 km²", 
        population: 83190000, 
        landmarks: ["Brandenburg Gate", "Neuschwanstein Castle"], 
        pictures: ["burger.jpg", "brandenburg_gate.jpg"] 
    },
    { 
        name: "Shawarma", 
        origin: "Middle East", 
        popular_countries: ["Turkey", "Lebanon", "Nigeria"], 
        landmass: "783,356 km²", 
        population: 84340000, 
        landmarks: ["Hagia Sophia", "Cappadocia"], 
        pictures: ["shawarma.jpg", "hagia_sophia.jpg"] 
    }
];

const animals = [
    { 
        name: "Elephant", 
        origin: "Africa", 
        popular_countries: ["Kenya", "South Africa", "India"], 
        landmass: "30,370,000 km²", 
        population: 1340000000, 
        landmarks: ["Maasai Mara", "Kruger National Park"], 
        pictures: ["elephant.jpg", "maasai_mara.jpg"] 
    },
    { 
        name: "Kangaroo", 
        origin: "Australia", 
        popular_countries: ["Australia"], 
        landmass: "7,692,024 km²", 
        population: 25690000, 
        landmarks: ["Sydney Opera House", "Great Barrier Reef"], 
        pictures: ["kangaroo.jpg", "sydney_opera_house.jpg"] 
    },
    { 
        name: "Panda", 
        origin: "China", 
        popular_countries: ["China"], 
        landmass: "9,596,961 km²", 
        population: 1402000000, 
        landmarks: ["Great Wall of China", "Terracotta Army"], 
        pictures: ["panda.jpg", "great_wall_of_china.jpg"] 
    },
    { 
        name: "Lion", 
        origin: "Africa", 
        popular_countries: ["Kenya", "South Africa", "Tanzania"], 
        landmass: "30,370,000 km²", 
        population: 1340000000, 
        landmarks: ["Serengeti National Park", "Victoria Falls"], 
        pictures: ["lion.jpg", "serengeti.jpg"] 
    },
    { 
        name: "Penguin", 
        origin: "Antarctica", 
        popular_countries: ["Antarctica"], 
        landmass: "14,000,000 km²", 
        population: 1000, 
        landmarks: ["South Pole", "McMurdo Station"], 
        pictures: ["penguin.jpg", "south_pole.jpg"] 
    },
    { 
        name: "Tiger", 
        origin: "Asia", 
        popular_countries: ["India", "Bangladesh", "Nepal"], 
        landmass: "44,579,000 km²", 
        population: 4600000000, 
        landmarks: ["Sundarbans", "Ranthambore National Park"], 
        pictures: ["tiger.jpg", "sundarbans.jpg"] 
    },
    { 
        name: "Polar Bear", 
        origin: "Arctic", 
        popular_countries: ["Canada", "Norway", "Russia"], 
        landmass: "15,558,000 km²", 
        population: 40000, 
        landmarks: ["Svalbard", "Churchill"], 
        pictures: ["polar_bear.jpg", "svalbard.jpg"] 
    }
];

const countries = [
    { 
        name: "France", 
        population: 67081000, 
        landmass: "551,695 km²", 
        landmarks: ["Eiffel Tower", "Louvre Museum"], 
        pictures: ["eiffel_tower.jpg", "louvre_museum.jpg"] 
    },
    { 
        name: "USA", 
        population: 331000000, 
        landmass: "9,833,520 km²", 
        landmarks: ["Statue of Liberty", "Grand Canyon"], 
        pictures: ["statue_of_liberty.jpg", "grand_canyon.jpg"] 
    },
    { 
        name: "Japan", 
        population: 126300000, 
        landmass: "377,975 km²", 
        landmarks: ["Mount Fuji", "Tokyo Tower"], 
        pictures: ["mount_fuji.jpg", "tokyo_tower.jpg"] 
    },
    { 
        name: "United Kingdom", 
        population: 67886000, 
        landmass: "243,610 km²", 
        landmarks: ["Big Ben", "London Eye"], 
        pictures: ["big_ben.jpg", "london_eye.jpg"] 
    },
    { 
        name: "Australia", 
        population: 25690000, 
        landmass: "7,692,024 km²", 
        landmarks: ["Sydney Opera House", "Great Barrier Reef"], 
        pictures: ["sydney_opera_house.jpg", "great_barrier_reef.jpg"] 
    },
    { 
        name: "Germany", 
        population: 83190000, 
        landmass: "357,022 km²", 
        landmarks: ["Brandenburg Gate", "Neuschwanstein Castle"], 
        pictures: ["brandenburg_gate.jpg", "neuschwanstein_castle.jpg"] 
    },
    { 
        name: "UAE", 
        population: 9890400, 
        landmass: "83,600 km²", 
        landmarks: ["Burj Khalifa", "Palm Jumeirah"], 
        pictures: ["burj_khalifa.jpg", "palm_jumeirah.jpg"] 
    }
];


app.get('/api', (req, res) => {
        res.send(foods)    
});
app.get('/api2', (req, res) => {
        res.send(animals)    
});

app.get('/api3', (req, res) => {
        res.send(countries)    
});

app.get("/", (req, res) => {
    // res.send("working");
    res.sendFile(__dirname +'/public/index.html')
    // res.send(__dirname)
  })
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  

