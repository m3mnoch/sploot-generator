let data = {};

data.commonFirstNames = ["Alexander", "Amanda", "Amy", "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Barbara", "Benjamin", "Betty", "Brandon", "Brenda", "Brian", "Carol", "Carolyn", "Catherine", "Charles", "Christine", "Christopher", "Cynthia", "Daniel", "David", "Deborah", "Debra", "Dennis", "Donald", "Donna", "Dorothy", "Edward", "Elizabeth", "Emily", "Emma", "Eric", "Frank", "Gary", "George", "Gregory", "Helen", "Jack", "Jacob", "James", "Janet", "Jason", "Jeffrey", "Jennifer", "Jerry", "Jessica", "John", "Jonathan", "Joseph", "Joshua", "Justin", "Karen", "Katherine", "Kathleen", "Kenneth", "Kevin", "Kimberly", "Larry", "Laura", "Linda", "Lisa", "Margaret", "Maria", "Mark", "Mary", "Matthew", "Melissa", "Michael", "Michelle", "Nancy", "Nicholas", "Nicole", "Pamela", "Patricia", "Patrick", "Paul", "Rachel", "Raymond", "Rebecca", "Richard", "Robert", "Ronald", "Ruth", "Ryan", "Samantha", "Samuel", "Sandra", "Sarah", "Scott", "Sharon", "Shirley", "Stephanie", "Stephen", "Steven", "Susan", "Thomas", "Timothy", "William"];
data.commonLastNames = ["Adams", "Allen", "Alvarez", "Anderson", "Bailey", "Baker", "Bennet", "Brooks", "Brown", "Campbell", "Carter", "Castillo", "Chavez", "Clark", "Collins", "Cook", "Cooper", "Cox", "Cruz", "Davis", "Diaz", "Edwards", "Evans", "Flores", "Foster", "Garcia", "Gomez", "Gonzales", "Gray", "Green", "Gutierrez", "Hall", "Harris", "Hernandez", "Hill", "Howard", "Hughes", "Jackson", "James", "Jimenez", "Johnson", "Jones", "Kelly", "Kim", "King", "Lee", "Lewis", "Long", "Lopez", "Martin", "Martinez", "Mendoza", "Miller", "Mitchell", "Moore", "Morales", "Morgan", "Morris", "Murphy", "Myers", "Nelson", "Nguyen", "Ortiz", "Parker", "Patel", "Perez", "Peterson", "Phillips", "Price", "Ramirez", "Ramos", "Reed", "Reyes", "Richardson", "Rivera", "Roberts", "Robinson", "Rodriguez", "Rogers", "Ross", "Ruiz", "Sanchez", "Sanders", "Scott", "Smith", "Stewart", "Taylor", "Thomas", "Thompson", "Torres", "Turner", "Walker", "Ward", "Watson", "White", "Williams", "Wilson", "Wood", "Wright", "Young"];
data.uncommonFirstNames = ["Achilles", "Ahma", "Aisha", "Alexis", "Almas", "Andrea", "Angela", "Annabelle", "Avi", "Axel", "Ayham", "Azza", "Betty", "Bishop", "Bishti", "Brantley", "Chloe", "Colson", "Cristiano ", "Davian", "Declan", "Delta", "Denise", "Dharv", "Easton", "Edith", "Eleanor", "Elliot", "Elsa", "Emmett", "Faith", "Fiona", "Foster", "Freja", "Friederike", "Gatlin", "Gavin ", "Genesis", "Glen", "Gorakh", "Greta", "Hana", "Helena", "Hitomi", "Houria", "Ichiro", "Ingrid", "Jacqueline", "Jemimah", "Jo", "Judson", "Kadek", "Kai", "King", "Kobe", "Koji", "Koko", "Kylen", "Lathan", "Ledger", "Leif", "Lestat", "Luqman", "Lyle", "Malaika", "Marcel", "Marina", "Maverick", "Mavis", "Melinda", "Namya", "Niall", "Nidal", "Nikita", "Nova", "Obodas", "Penny", "Pradeep", "Priscilla", "Rafael", "Rayne", "Roberto", "Sakura", "Sammie", "Shanice", "Shepherd", "Shirley", "Silas", "Siobhan", "Teka", "Tetsu", "Trish", "Tristian", "Troy", "Vince", "Wael", "Wesley", "Yolanda", "Zane", "Zayd"];
data.uncommonLastNames = ["Acharya", "Agnor", "Alvin", "Anouilh", "Auclair", "Awolowo", "Bain", "Bajwa", "Bardot", "Barrere", "Bassett", "Beauregard", "Beckon", "Bellamy", "Bhatt", "Blaine", "Bockham", "Bonds", "Brassard", "Braun", "Brierman", "Caparasso", "Cellier", "Channing", "Cienfuegos", "Coachman", "Dardar", "De", "Ezekwesili", "Fēngē", "Fisk", "Flammia", "Floquet", "Fontana", "Fonua", "Freed", "Fukushima", "Furyk", "Garg", "Gaumond", "Gifford", "Ginsberg", "Guǎngchǎng", "Hamilcar", "Hanlon", "Hatterfield", "Hinode", "Houde", "Hoyabembe", "Hubert", "Humphrey", "Ironsi", "Jacaranda", "Jessup", "Johnstone", "Joubert", "Kobayashi", "Kuàng", "Lafitte", "Lù", "Machal", "Mangiarotti", "Maroney", "McCulloch", "McGowan", "McGregor", "McKenzie", "McKneese", "Mikan", "Momo", "Nabopolassar", "Najafzadeh", "O'Callaghan", "O'Connell", "Ogreson", "Oyatsu", "Ozanne", "Palomer", "Paquet", "Pedigrue", "Prevost", "Puabi", "Sanders", "Sargon", "Shinobi", "Shukla", "Sketchkov", "Smithsonian", "Stafford", "Swedge", "Tasse", "Tokei", "Trout", "Tsukumo", "van der Beek", "Varville", "Washington", "Yates", "Yeshua", "Zhǒng"];
data.weirdNames = ["Aristotle", "Armpit", "Backsplash", "Bastardly", "Beaverclown", "Beef", "Berry", "Biggums", "Blade", "Bloviate", "Brick", "Candy", "Cemetary", "Chief", "Chilly", "Chipper", "Cilantro", "Cleopatra", "Collywobbles", "Colon", "Constantinople", "Conundrum", "Corncake", "Cowardly", "Crabwalk", "Crayola", "Creepy", "Cruel", "Dewlap", "Disco", "Dumfoozle", "Featherskin", "Fingers", "Fishery", "Flinch", "Fury", "Gardyloo", "Glasshouse", "Handsome", "Helvetica", "Hero ", "Hideous", "Kitten", "Lasagna", "Le Stonks", "Legend", "Leghair", "Love", "Lowshelfspace", "Magic", "Markcosmisplats", "Market", "Marmaduke", "Marmalade", "Mercutio", "Moon", "Moreplease", "Mountainous", "Newcarsmell", "Nincompoop", "Noddy", "O'Yacklebrunt", "Oldmanbutt", "Outstanding", "Oysterbury", "Periscope", "Philtrum", "Pigpen", "Piles", "Pooney", "Prunella", "Rastafloods", "Ribeye", "Scrawnie", "Shivers", "Shrimpgun", "Sialoquent", "Silverback", "Sir", "Skyscraper", "Snuggles", "So-sure", "Sod", "Spike", "Stumble", "Sweet Tea", "Teeth", "Tidy", "Tiger", "Tweetly", "Van Clamberwobble", "Van Winkle", "Vanilla", "Wabbit", "Whatnot", "Widdershins", "Wigglebottom", "Woodstaff", "Zeus", "Zoro"];
data.uniqueNames = ["Will Barrow", "Neil Down", "Danny Dan-Dandy", "Flick Balls", "Anil Probes", "Bon Jontovi", "Shania Grain", "Bunny Bundtcake", "Inspector Ratchet", "Paula Logan", "Indigo Foreverago", "Crackle Poppins", "Mary Kate", "Babe Truth", "Sue Ndamukong", "Wally World", "Rustie Wingnut", "Crescent Moon", "Lily Liliac", "Constance Sufferman", "Vincent Van No", "Cobbed Corn", "Hugh Jackedman", "Ty Slob", "Kat Inmouse", "Kid Rockins", "Entire Pizza", "Glorious Esteban", "Leroy Jenkins", "Gray Matter", "Anita Hit", "Miranda Wright", "Goodwill Hunting"];

data.personalities = ["Placid", "Appreciative", "Compassionate", "Confident", "Focused", "Humorous", "Idealistic", "Innovative", "Modest", "Passionate", "Romantic", "Sage", "Stoic", "Wise"];

data.playerClasses = ["General", "Support", "Hype", "Consistency", "Investigator", "Closer", "Specialist"];
data.fanClasses = ["Die-hard", "Fair-weather", "There for the booze", "Hardcore", "Barstool", "Full kit wanker", "Pessimist", "Gambler", "Corporate guest", "Optimist", "Scarf Guy"];
data.staffClasses = ["Groundskeeper", "Cook", "Kit Manager", "Zookeeper", "Physio", "Mental coach", "Performance coach", "Security guard", "Social media intern", "Media team", "Ball handler", "Masseuse", "Yoga instructor", "Contract negotiater", "Scout", "Analyst", "Brand manager", "Intern", "Marketing manager", "Middle manager", "Data Analyst", "Doctor", "Sponsorship director", "Hype person", "Waterperson", "Player liaison officer", "Mycologist", "Mascot", "Sports Journalist", "Investigative journalist", "Clickbaiter", "Objective reporter", "Match reporter", "Columnist"];
data.managementClasses = ["Assistant Coach", "Director", "Head Coach", "GM", "Owner"];

data.phobias = ["Affairs", "Aging", "Alarm clocks", "Algorythms", "Ambulances", "Anime", "Arcades", "Astrology", "Bad Vibes", "Balconies", "Bar Fights", "Barbers", "Basements", "Basilisks", "Beer", "Betting", "Bibles", "Birds", "Black Sand", "Blankets", "Blenders", "Blue", "Boogers", "Breakfast", "Bricks", "Bright Lights", "Broomsticks", "Buffets", "Burps", "Buttons", "Calculus", "Calories", "Candles", "Carbohydrates", "Cat Hair", "Caviar", "Chains", "Champagne", "Cheese", "Cherries", "Children", "Clowns", "Coffee Beans", "Commitment", "Concerts", "Contortionists", "Cracks", "Credit cards", "Crows", "Crying", "Curry", "Cuttlery", "Debt", "Denmark", "Diet Soda", "Dinosaurs", "Dogs", "Door Stops", "Dreadlocks", "Duct Tape", "Dust", "Ears", "Earthquakes", "EDM", "Eggs", "Electrocution", "Elves", "Email", "Exotic Dancers", "Eyelids", "Fast food", "Feet", "Fights", "Fish", "Flares", "Flying", "Fog", "Forks", "Gambling", "Gin", "Glass", "Goats", "Grass", "Gravel", "Groundhogs", "Guitar Strings", "Guns", "Hate mail", "Heights", "Highways", "Homeopathy", "Horses", "Hot chocolate", "Hot Dogs", "Hot Tubs", "Hotel Soaps", "Hypnosis", "Improv Comedy", "Insomnia", "Irony", "Jeans", "Kangroos", "Keyboards", "Kilts", "Lava Lamps", "Lids", "Loud music", "Love", "Lube", "Macaques", "Magnetism", "Magpies", "Manual Transmissions", "Marching Bands", "McDonald's", "Mercury in Retrograde", "Meteor Showers", "Midnight", "Milk", "Mirrors", "Modems", "Mouse Traps", "Moustaches", "Music", "Mythical Creatures", "Nail Salons", "Neighbors", "New York", "News", "NFTs", "Numbers", "Office Environments", "Opium", "Oranges", "Paper", "Parasites", "Passwords", "Pasta", "Petrol", "Pianos", "Pigeons", "Pillow Talk", "Pimples", "Pineapples", "Pizza ovens", "Plants", "Plastic", "Plates", "Post-it notes", "Priests", "Prime Numbers", "Programmers", "Promiscuity", "Prosthetic Limbs", "Protein Powder", "Public Bathrooms", "Radiohead", "Rain", "Raincoats", "Reading", "Relatives", "Religion", "Riptides", "Rugs", "Salt", "Sandals", "Santa Claus", "Scaffolding", "Scissors", "Scooters", "Screeching", "Self-driving Vehicles", "Shoe laces", "Short Fingernails", "Showers", "SIlence", "Sitcoms", "Sleep", "Slippers", "Snakes", "Sneezes", "Snow", "Soap", "Socks", "Sour Candy", "Spatulas", "Sporks", "Sprinting", "Squat racks", "Statuary", "Stingrays", "Styrofoam", "Submarines", "Subtitles", "Success", "Sunflower Seeds", "Sunglasses", "Supermarkets", "Swimming", "T-shirts", "Taxes", "Tennis Elbow", "The 80s", "The Eagles", "The Internet", "The Letter 'S'", "The Moon", "The Number 9", "Theme Parks", "Toilet Paper", "Tomato Juice", "Toothbrushes", "Touch", "Trains", "Travel", "Truck Drivers", "Typos", "Vanilla extract", "Vegans", "VHS tapes", "Vodka", "VR Technology", "Warm Weather", "Windows", "Witchcraft", "Wood"];
data.vices = ["1AM", "3rd Base", "90s Rock", "Abatoirs", "Acid", "Air Conditioning", "AM Radio", "Amsterdam", "Antibiotics", "Ants", "Argon", "Attics", "Bad Speling", "Baloons", "Bangs", "Barbecue Sauce", "Beanbags", "Beards", "Beat Poetry", "Bees", "Billboards", "Bio-diesel", "Birth", "Boardgames", "Body Spray", "Books", "Bracelets", "Brazil", "Breakfast", "Buffets", "Burritos", "Buses", "Buttered Toast", "Butterflies", "Caffeine", "Candles", "Carpets", "Cars", "Cat Food", "Catapults", "Chainsmoking", "Charities", "Cheerleaders", "Cheese", "Cheeseburgers", "Children", "Chips", "Choking", "Church", "Cigars", "Clapping", "Cleaning", "Clocks", "Clouds", "Cognac", "Commercialism", "Confetti", "Conmen", "Construction", "Coral Reefs", "Craft Beer", "Custom Vans", "Cute Animals", "Darts", "Dentists", "Depression", "Depth", "Diabetes", "Diet Soda", "Disneyland", "Dracula", "Dreams", "Dumbells", "Dust", "Dyslexia", "Eclipses", "Elevators", "Emojis", "England", "Exobiology", "Exorcisms", "Facepaint", "Fairies", "Fan Mail", "Feet", "Fire", "Flies", "Flying", "Folk Dance", "Forced Entry", "Fraud", "Freedom", "Frost", "Fungi", "Fungible Tokens", "Geese", "Glasses", "Gossip", "Graffiti", "Grandfather", "Grannies", "Gravel", "Gray", "Greeting Cards", "Guns", "Gym", "Hair Bands", "Haircuts", "Halloween", "Handwriting", "Hawaiian Pizza", "Hit and Runs", "Holiday Smells", "Hope", "Horseracing", "Hot chips", "Huffing", "Iron Gates", "Jean shorts", "Jewelery", "Jokers", "Justice", "Kangaroos", "Kittens", "Lanterns", "Laser Pointers", "Laughing Gas", "Laxatives", "Magic Tricks", "Marble", "Massages", "Mattresses", "Meditating", "Memes", "Mice", "Mothers", "Motivational Posters", "Movies", "Museums", "Mushrooms", "Music", "Mythology", "New Socks", "NFTs", "Night Driving", "Nightclubs", "Oreos", "Pajamas", "Pancakes", "Parachutes", "Passports", "Pastrami", "Paychecks", "PE Teachers", "Peanut butter", "Pencil Sharpeners", "Photosynthesis", "Pilots", "Ping Pong Balls", "Pizza", "Pogs", "Poker", "Porn", "Power", "Presidents", "Prison breaks", "Public Speaking", "Punctuality", "Puns", "Pyramids", "Racecars", "Rain", "Reality TV", "Religion", "Restaurants", "Running water", "Samurai Art", "Sand Pipers", "Sandwiches", "Sci-Fi", "Scotland", "Shoe horns", "Shouting", "Sister-in-Laws", "Sitcoms", "Snogging", "Soap", "Software Piracy", "Soldiers", "Solid furniture", "Spicy Food", "Staplers", "Stickers", "Summer Breeze", "Sunsets", "Sweat", "Swimming Pools", "Tax Evasion", "Teachers", "Tequila", "The Mafia", "The Moon", "The Void", "Thesaurus", "Tipping", "Toothbrushes", "Torture", "Toxoplasmosis", "Toy Phones", "Train Sets", "Tree Sap", "TSA Agents", "Tuna", "Turkish Markets", "Underwear", "Venus", "Vigilantes", "Warmth", "Watches", "Weapons", "Wetness", "White wine", "Zoos"];

module.exports = data;
