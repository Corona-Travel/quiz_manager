db = db.getSiblingDB("corona_travel");

// сначала lng, потом lat
// <field>: [<longitude>, <latitude>]

db.places.createIndex({ place_id: 1 }, { unique: true });
db.places.createIndex({ pos: "2dsphere" });
db.places.insertMany([
  {
    name: "Moscow",
    place_id: "moscow",
    pos: { type: "Point", coordinates: [37.6203479, 55.7539765] },
  },
  {
    name: "Madrid",
    place_id: "madrid",
    pos: { type: "Point", coordinates: [-3.70379, 40.416775] },
  },
  {
    name: "New York",
    place_id: "ny",
    pos: { type: "Point", coordinates: [-73.935242, 40.73061] },
  },
  {
    name: "Canberra",
    place_id: "ca",
    pos: { type: "Point", coordinates: [149.12383, -35.27583] },
  },
  {
    name: "Vienna",
    place_id: "vien",
    pos: { type: "Point", coordinates: [16.311865, 48.184517] },
  },
  {
    name: "Buenos Aires",
    place_id: "buen",
    pos: { type: "Point", coordinates: [-58.369523, -34.603625] },
  },
  {
    name: "Minsk",
    place_id: "minsk",
    pos: { type: "Point", coordinates: [27.558972, 53.9006011] },
  },
  {
    name: "Brussel",
    place_id: "brussel",
    pos: { type: "Point", coordinates: [4.3571696, 50.8476424] },
  },
  {
    name: "Sofia",
    place_id: "sofia",
    pos: { type: "Point", coordinates: [23.323177, 42.699368] },
  },
  {
    name: "Baku",
    place_id: "baku",
    pos: { type: "Point", coordinates: [49.86876, 40.40194] },
  },
  {
    name: "Kabul",
    place_id: "kabul",
    pos: { type: "Point", coordinates: [69.207486, 34.5553494] },
  },
  {
    name: "Tirana",
    place_id: "tirana",
    pos: { type: "Point", coordinates: [19.8186982, 41.3275459] },
  },
  {
    name: "Algiers",
    place_id: "algiers",
    pos: { type: "Point", coordinates: [3.0876732, 36.7312661] },
  },
  {
    name: "Andorra la Vella",
    place_id: "andorra la vella",
    pos: { type: "Point", coordinates: [1.521835, 42.506317] },
  },
  {
    name: "Luanda",
    place_id: "luanda",
    pos: { type: "Point", coordinates: [13.2301756, -8.8146556] },
  },
  {
    name: "Yerevan",
    place_id: "yerevan",
    pos: { type: "Point", coordinates: [44.515209, 40.1872023] },
  },
  {
    name: "Ottawa",
    place_id: "ottawa",
    pos: { type: "Point", coordinates: [-75.6971931, 45.4215296] },
  },
  {
    name: "Beijing",
    place_id: "beijing",
    pos: { type: "Point", coordinates: [116.407395, 39.904211] },
  },
  {
    name: "Zagreb",
    place_id: "zagreb",
    pos: { type: "Point", coordinates: [15.9819189, 45.8150108] },
  },
  {
    name: "Prague",
    place_id: "prague",
    pos: { type: "Point", coordinates: [14.4378005, 50.0755381] },
  },
  {
    name: "Copenhagen",
    place_id: "copenhagen",
    pos: { type: "Point", coordinates: [12.5683372, 55.6760968] },
  },
  {
    name: "London",
    place_id: "london",
    pos: { type: "Point", coordinates: [-0.1275862, 51.5072178] },
  },
  {
    name: "Helsinki",
    place_id: "helsinki",
    pos: { type: "Point", coordinates: [24.9383791, 60.1698557] },
  },
  {
    name: "Paris",
    place_id: "paris",
    pos: { type: "Point", coordinates: [2.3522219, 48.856614] },
  },
  {
    name: "Tbilisi",
    place_id: "tbilisi",
    pos: { type: "Point", coordinates: [44.827096, 41.7151377] },
  },
  {
    name: "Berlin",
    place_id: "berlin",
    pos: { type: "Point", coordinates: [13.404954, 52.5200066] },
  },
  {
    name: "Budapest",
    place_id: "budapest",
    pos: { type: "Point", coordinates: [19.040235, 47.4979127] },
  },
  {
    name: "Tokyo",
    place_id: "tokyo",
    pos: { type: "Point", coordinates: [139.7690174, 35.6803997] },
  },
  {
    name: "Bishkek",
    place_id: "bishkek",
    pos: { type: "Point", coordinates: [74.5697617, 42.8746212] },
  },
  {
    name: "Riga",
    place_id: "riga",
    pos: { type: "Point", coordinates: [24.1051865, 56.9496487] },
  },
  {
    name: "Oslo",
    place_id: "oslo",
    pos: { type: "Point", coordinates: [10.7522454, 59.9138688] },
  },
]);

db.facts.createIndex({ fact_id: 1 }, { unique: true });
db.facts.createIndex({ pos: "2dsphere" });
db.facts.insertMany([
  {
    name: "Req Square",
    description: "Red Square was built in 16-th century",
    fact_id: "moscow_red_sqr",
    pos: { type: "Point", coordinates: [37.620302, 55.754131] },
  },
  {
    name: "Christ the Saviour Cathedral",
    description: "The most important and the lergest cathedral in Russia",
    fact_id: "moscow_chr_sav_cath",
    pos: { type: "Point", coordinates: [37.6054939, 55.7446375] },
  },
  {
    name: "Tretyakov Gallery",
    description:
      "The Tretyakov Gallery is home to 170,000 art works ranging from the 11th to the 20th century",
    fact_id: "moscow_tret_gall",
    pos: { type: "Point", coordinates: [37.6208639, 55.741389] },
  },
  {
    name: "Gorky Park",
    description:
      "In winter this park turns into the biggest ice rink in Europe.",
    fact_id: "moscow_gorky_park",
    pos: { type: "Point", coordinates: [37.6012474, 55.729458] },
  },
  {
    name: "Moscow-City",
    description: "Here is Moscow's highest observation platform",
    fact_id: "moscow_mos_city",
    pos: { type: "Point", coordinates: [37.5391668, 55.7472154] },
  },
  {
    name: "The Armoury Chamber",
    description:
      "The main part of the museum's collection consists of precious objects that had been stored in the tsar's treasury and the Patriarch's Sacristy for centuries",
    fact_id: "moscow_arm_ch",
    pos: { type: "Point", coordinates: [37.6134111, 55.7495732] },
  },
  {
    name: "Moscow Kremlin",
    description:
      "Now this historical and artistic complex - the heart and symbol of the capital - is not only an architectural monument, but also the social and political center of Russia, known to the whole world",
    fact_id: "moscow_kreml",
    pos: { type: "Point", coordinates: [37.6174994, 55.7520233] },
  },
  {
    name: "Lenin's Mausoleum",
    description:
      "Here the embalmed body of Vladimir Lenin rests in a transparent sarcophagus",
    fact_id: "moscow_lenin_maus",
    pos: { type: "Point", coordinates: [37.6198845, 55.7537117] },
  },
  {
    name: "Saint Basil's Cathedral",
    description:
      "It was built in the 16th century, and consisted of 11 churches, standing on the same foundation and united into a single cathedral by the decree of Ivan the Terrible",
    fact_id: "moscow_basil_cath",
    pos: { type: "Point", coordinates: [37.6230868, 55.7525229] },
  },
  {
    name: "GUM",
    description:
      "The famous GUM is a large shopping mall with its facade overlooking Red Square. It was erected after the fire of 1812, which completely destroyed the trading rows of Kitay-Gorod",
    fact_id: "moscow_gum",
    pos: { type: "Point", coordinates: [37.6215216, 55.7546967] },
  },
  {
    name: "Kitay-gorod",
    description:
      "Kitay-Gorod is a large historical district of the capital, which existed since the 16th century",
    fact_id: "moscow_kitay",
    pos: { type: "Point", coordinates: [37.6211384, 55.7521239] },
  },
  {
    name: "Zaryadye park",
    description:
      "The park's most-visited attraction is the Soaring Bridge - a 70-meter-high console with no support structures soaring over the embankment and the Moskva River at an altitude of 15 metres",
    fact_id: "moscow_zaryadye",
    pos: { type: "Point", coordinates: [37.6287988, 55.7514578] },
  },
  {
    name: "Manhattan",
    description: "Manhattan is historical center on NY",
    fact_id: "ny_manh",
    pos: { type: "Point", coordinates: [-73.935242, 40.73061] },
  },
  {
    name: "The Royal Palace of Madrid",
    description:
      "The Royal Palace of Madrid is the official residence of the Spanish royal family at the city of Madrid, although now used only for state ceremonies",
    fact_id: "madrid_palace",
    pos: { type: "Point", coordinates: [-3.714312, 40.417953] },
  },
  {
    name: "City Hill",
    description:
      "City Hill is a five hectare landscaped hill located in the centre of Canberra and surrounded by Vernon Circle",
    fact_id: "city_hill_Canberra",
    pos: { type: "Point", coordinates: [149.12383, -35.27583] },
  },
  {
    name: "The Heydar Aliyev Center",
    description:
      "The Heydar Aliyev Center is a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles",
    fact_id: "thac",
    pos: { type: "Point", coordinates: [49.86683, 40.3905] },
  },
  {
    name: "Palais Schönborn",
    description:
      "Palais Schönburg is a magnificent baroque jewel located in the centre of Vienna, boasting a wonderfully large and serene garden away from the hustle and bustle of the city. ",
    fact_id: "p_schon",
    pos: { type: "Point", coordinates: [16.311865, 48.184517] },
  },
  {
    name: "Centro Cultural Kirchner",
    description:
      "The Kirchner Cultural Centre is a cultural centre located in Buenos Aires, Argentina. It is the largest of Latin America, and the third or fourth largest in the world.",
    fact_id: "cent_cult_kirch",
    pos: { type: "Point", coordinates: [-58.369523, 34.603625] },
  },
  {
    name: "Belarusian National Arts Museum",
    description: "The National Art Museum is a cultural house of Belarus",
    fact_id: "nat_art_mus",
    pos: { type: "Point", coordinates: [27.5607685, 53.8984747] },
  },
  {
    name: "The Grand-Place",
    description:
      "The Grand-Place is the central square of the City of Brussels",
    fact_id: "gr_pal",
    pos: { type: "Point", coordinates: [4.3525, 50.8467] },
  },
  {
    name: "Sofia History Museum",
    description:
      "The Sofia History Museum is housed in the former building of the Central Mineral Baths and is devoted to ethnography, archaeology, economy, and cultural life in Sofia and its region",
    fact_id: "shm",
    pos: { type: "Point", coordinates: [23.323177, 42.699368] },
  },
]);

db.quizzes.createIndex({ quiz_id: 1 }, { unique: true });
db.quizzes.createIndex({ pos: "2dsphere" });
db.quizzes.insertOne({
  quiz_id: "1",
  name: "Moscow center",
  questions: [
    {
      question:
        "When  was the beginning of the period of the new heyday of the Red Square?",
      answers: [
        { option: "12th century", correct: false },
        { option: "19th century", correct: true },
        { option: "20th century", correct: false },
      ],
    },
    {
      question: "When was Lenin's Mausoleum at Red Square opened?",
      answers: [
        { option: "it is not a Mausoleum", correct: false },
        { option: "1930", correct: true },
        { option: "1941", correct: false },
      ],
    },
    {
      question: "What is GUM famous for among the tourists?",
      answers: [
        { option: "clothes", correct: false },
        { option: "height of the building", correct: false },
        { option: "ice cream", correct: true },
      ],
    },
    {
      question: "What kind of sport could you do right on the Red Square?",
      answers: [
        { option: "ice skating", correct: true },
        { option: "golfing", correct: false },
        { option: "swimming", correct: false },
      ],
    },
    {
      question: "What happened on Nikolsakaya street in summer 2018?",
      answers: [
        { option: "massive football fans' festivities", correct: true },
        { option: "meeting of all presidents", correct: false },
        { option: "carnival", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.620795, 55.7539303] },
});

db.quizzes.insertOne({
  quiz_id: "2",
  name: "Moscow history",
  questions: [
    {
      question: "When were the first written mentions about Moscow made?",
      answers: [
        { option: "In the XI century", correct: false },
        { option: "In the XII century", correct: true },
        { option: "In the XV century", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of Russia?",
      answers: [
        { option: "In 1200", correct: false },
        { option: "In 1340", correct: true },
        { option: "In 1147", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of the Soviet state?",
      answers: [
        { option: "1931", correct: false },
        { option: "1925", correct: false },
        { option: "1922", correct: true },
      ],
    },
    {
      question:
        "The only sculptured monument on the square is a bronze statue of:",
      answers: [
        { option: "Kuzma Minin and Dmitry Pozharsky", correct: true },
        { option: "Tsar Nicholas and Empress Alexandra", correct: false },
        { option: "Ivan III", correct: false },
      ],
    },
    {
      question: "When did Moscow host the summer Olympic games?",
      answers: [
        { option: "In 1980", correct: true },
        { option: "In 1978", correct: false },
        { option: "In 1970", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.619556, 55.754496] },
});

db.quizzes.insertOne({
  quiz_id: "3",
  name: "Moscow government",
  questions: [
    {
      question: "When is the Constitution Day?",
      answers: [
        { option: "November 7", correct: false },
        { option: "June 12", correct: true },
        { option: "December 12", correct: false },
      ],
    },
    {
      question:
        "What are the three colors of the Russian flag from top to bottom?",
      answers: [
        { option: "red, blue, white", correct: false },
        { option: "white, blue, red", correct: true },
        { option: "blue, white, red", correct: false },
      ],
    },
    {
      question: "When did Moscow become the capital of the Soviet state?",
      answers: [
        { option: "1931", correct: false },
        { option: "1925", correct: false },
        { option: "1922", correct: true },
      ],
    },
    {
      question:
        "What is the lower house of the bi-cameral Russian parliament called?",
      answers: [
        { option: "Duma", correct: true },
        { option: "Parliament", correct: false },
        { option: "Rada", correct: false },
      ],
    },
    {
      question: "Moscow was named after...",
      answers: [
        {
          option: "The Moskva river, which runs through the centre",
          correct: true,
        },
        {
          option: "The Moskva army commanded by Prince Yuri Dolgorukiy",
          correct: false,
        },
        {
          option: "The Moskva wall built after the Mongol invasion in 1238",
          correct: false,
        },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.615706, 55.757625] },
});

db.quizzes.insertOne({
  quiz_id: "4",
  name: "Moscow streets",
  questions: [
    {
      question:
        "What was the name of the oldest street in Moscow whose name has survived in history?",
      answers: [
        { option: "Tverskaya", correct: false },
        { option: "Borovitskaya", correct: true },
        { option: "Arbat", correct: false },
      ],
    },
    {
      question: "The longest street in Moscow (Warsaw Highway) is ...",
      answers: [
        { option: "7 km", correct: false },
        { option: "19 km", correct: true },
        { option: "13 km", correct: false },
      ],
    },
    {
      question: "Moscow's widest street is ...",
      answers: [
        { option: "Warsaw highway", correct: false },
        { option: "Tverskaya Street", correct: false },
        { option: "Leningradsky Prospect", correct: true },
      ],
    },
    {
      question:
        "How many streets does Moscow include (taking into account New Moscow streets)?",
      answers: [
        { option: "Around 4800", correct: true },
        { option: "Around 5500", correct: false },
        { option: "Around 7000", correct: false },
      ],
    },
    {
      question:
        "Which of the city's central streets was called Rozhdestvenskaya in the 16th-17th centuries?",
      answers: [
        { option: "Stoleshnikov Lane", correct: true },
        { option: "Leninsky Prospect", correct: false },
        { option: "Tverskaya", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.625272, 55.757757] },
});

db.quizzes.insertOne({
  quiz_id: "5",
  name: "Moscow the most ...",
  questions: [
    {
      question: "Who is the biggest monument in Moscow?",
      answers: [
        { option: "Yuri Gagarin", correct: false },
        { option: "Peter The Grate", correct: true },
        { option: "Alexander Vasilievich Suvorov", correct: false },
      ],
    },
    {
      question: "Which bridge in Moscow is the highest?",
      answers: [
        { option: "Great Stone Bridge", correct: false },
        { option: "Picturesque Bridge", correct: true },
        { option: "Crimean bridge", correct: false },
      ],
    },
    {
      question: "Where is the largest clock in Russia located?",
      answers: [
        { option: "Kazansky Railway Station", correct: false },
        { option: "On Spasskaya Tower", correct: false },
        { option: "On the building of Moscow State University", correct: true },
      ],
    },
    {
      question:
        "Which city is connected to Moscow by the longest straight stretch of railway in Russia?",
      answers: [
        { option: "St Petersburg", correct: true },
        { option: "Kaliningrad", correct: false },
        { option: "Voronezh", correct: false },
      ],
    },
    {
      question:
        "Where in Moscow can you see the most monuments and sculptures in the open air?",
      answers: [
        { option: "The Museon Park", correct: true },
        { option: "The Kremlin", correct: false },
        { option: "In the Hermitage Garden", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.610932, 55.737108] },
});

db.quizzes.insertOne({
  quiz_id: "6",
  name: "Moscow sights",
  questions: [
    {
      question: "Where is the kilometre zero sign in Moscow?",
      answers: [
        { option: "Lubyanka Square", correct: false },
        { option: "On Red Square", correct: true },
        { option: "Bolotnaya Square", correct: false },
      ],
    },
    {
      question: "What is the total length of the Kremlin walls?",
      answers: [
        { option: "3 065 metres", correct: false },
        { option: "2,235 metres", correct: true },
        { option: "2,450 metres", correct: false },
      ],
    },
    {
      question: "Who was the first monument erected in Moscow?",
      answers: [
        { option: "Cyril and Methodius", correct: false },
        { option: "Emperor Alexander I", correct: false },
        { option: "Minin and Pozharsky", correct: true },
      ],
    },
    {
      question: "What was the purpose of the Place of the Public in Moscow?",
      answers: [
        { option: "For announcing the Tsar's decrees", correct: true },
        { option: "For executions", correct: false },
        { option: "For public festivals", correct: false },
      ],
    },
    {
      question:
        'To which street is the proverb "A penny candle made all Moscow burn" associated?',
      answers: [
        { option: "Arbat", correct: true },
        { option: "Ostozhenka", correct: false },
        { option: "Ilyinka", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.618906, 55.752052] },
});

db.quizzes.insertOne({
  quiz_id: "7",
  name: "Moscow Bolshoi Theatre",
  questions: [
    {
      question: "What was the name of the Bolshoi Theatre in 1776-1789?",
      answers: [
        { option: "Catherine's", correct: false },
        { option: "Petrovsky", correct: true },
        { option: "Imperial", correct: false },
      ],
    },
    {
      question: "In what year was the Bolshoi Theatre founded?",
      answers: [
        { option: "1862", correct: false },
        { option: "1776", correct: true },
        { option: "1812", correct: false },
      ],
    },
    {
      question:
        "Which bronze figure adorns the Bolshoi Theatre and is a symbol of this work of architecture?",
      answers: [
        { option: "Rotunda", correct: false },
        { option: "Pyramid", correct: false },
        { option: "Quadriga", correct: true },
      ],
    },
    {
      question: "Which award was twice presented to the Bolshoi Theatre?",
      answers: [
        { option: "Order of Lenin", correct: true },
        { option: "Order of Stalin", correct: false },
        { option: "Order of St. Anna", correct: false },
      ],
    },
    {
      question: "Which empress gave the go-ahead to establish this theatre?",
      answers: [
        { option: "Catherine II", correct: true },
        { option: "Sophia Mikhailovna", correct: false },
        { option: "Anna Ioannovna", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.618221, 55.759234] },
});

db.quizzes.insertOne({
  quiz_id: "8",
  name: "Moscow facts",
  questions: [
    {
      question:
        "Moscow is one of the world's top ten cities in terms of population. Approximately how many people live in Moscow in 2017?",
      answers: [
        { option: "10-13 million", correct: false },
        { option: "12-17 million", correct: true },
        { option: "17-19 million", correct: false },
      ],
    },
    {
      question:
        "When it was built, Ostankino Tower was the tallest building in the world. Nowadays it is already on the 10th height after several skyscrapers and TV towers. How many meters tall is the Ostankino Tower?",
      answers: [
        { option: "700 m", correct: false },
        { option: "540 m", correct: true },
        { option: "360 m", correct: false },
      ],
    },
    {
      question:
        "In pagan times, the place where the Moscow Kremlin stands now was called the Witcher's Mountain, where the temple was located. What is the name of the hill in the centre of Moscow nowadays?",
      answers: [
        { option: "Spassky", correct: false },
        { option: "Tsarsky", correct: false },
        { option: "Borovitsky", correct: true },
      ],
    },
    {
      question: "How many towers does the Moscow Kremlin have?",
      answers: [
        { option: "20", correct: true },
        { option: "23", correct: false },
        { option: "16", correct: false },
      ],
    },
    {
      question:
        "Only the fourth generation of people living permanently in Moscow can be considered native Muscovites. How many indigenous Muscovites are there in the city at the moment?",
      answers: [
        { option: "3%", correct: true },
        { option: "7%", correct: false },
        { option: "19%", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.613692, 55.748748] },
});

db.quizzes.insertOne({
  quiz_id: "9",
  name: "Russian librirary",
  questions: [
    {
      question: "Who is the author of The History of the Russian State?",
      answers: [
        { option: "A.S. Pushkin", correct: false },
        { option: "N.M. Karamzin", correct: true },
        { option: "N.V. Gogol", correct: false },
      ],
    },
    {
      question: "Which of the above writers died in a duel?",
      answers: [
        { option: "L.N. Tolstoy", correct: false },
        { option: "M.Y. Lermontov", correct: true },
        { option: "I.V. Turgenev", correct: false },
      ],
    },
    {
      question: "Who of the following writers emigrated to the United States?",
      answers: [
        { option: "M.A. Bulgakov", correct: false },
        { option: "M. Gorky", correct: false },
        { option: "V.V. Nabokov", correct: true },
      ],
    },
    {
      question: "Who is the most famous Russian fable writer?",
      answers: [
        { option: "I.A. Krylov", correct: true },
        { option: "V.A. Zhukovsky", correct: false },
        { option: "D.V. Davydov", correct: false },
      ],
    },
    {
      question:
        'To whom the lines belong: "Moscow will always be the true capital of Russia"?',
      answers: [
        { option: "M.V. Lomonosov", correct: false },
        { option: "N.M. Karamzin", correct: true },
        { option: "G.R. Derzhavin", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.609372, 55.751316] },
});

db.quizzes.insertOne({
  quiz_id: "10",
  name: "MGU ",
  questions: [
    {
      question: "On whose proposal was the Moscow University opened in 1755?",
      answers: [
        { option: "Peter the Great", correct: false },
        { option: "M.V. Lomonosov", correct: true },
        { option: "A.S. Pushkin", correct: false },
      ],
    },
    {
      question: "What was the name of Moscow University before 1917?",
      answers: [
        { option: "Peter the Great University", correct: false },
        { option: "Imperial University", correct: true },
        { option: "The Great Empress Catherine's University", correct: false },
      ],
    },
    {
      question:
        "Which building was chosen as the first building for Moscow University?",
      answers: [
        { option: "In a building on Mokhovaya Street", correct: false },
        { option: "The house where Lomonosov lived", correct: false },
        {
          option: "The building of the Historical Museum on Red Square",
          correct: true,
        },
      ],
    },
    {
      question: "What was the original faculty of the university?",
      answers: [
        { option: "philosophy faculty", correct: true },
        { option: "linguistics department", correct: false },
        { option: "physics faculty", correct: false },
      ],
    },
    {
      question:
        "How many faculties are operating at Lomonosov Moscow State University nowadays?",
      answers: [
        { option: "41", correct: true },
        { option: "38", correct: false },
        { option: "26", correct: false },
      ],
    },
  ],
  pos: { type: "Point", coordinates: [37.535227, 55.705297] },
});

db.media.createIndex({ media_id: 1 }, { unique: true });
db.media.createIndex({ pos: "2dsphere" });
db.media.insertMany([
  {
    media_id: "red_sq_photo",
    name: "Red Square",
    type: "photo",
    pos: { type: "Point", coordinates: [37.5967391, 55.7446371] },
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lonelyplanet.com%2Farticles%2Fmoscow-e2-80-99s-red-square&psig=AOvVaw0mznzK4RolAkwM1p7E5cE_&ust=1639402766684000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOii77Cx3vQCFQAAAAAdAAAAABAS",
  },
  {
    media_id: "gum_photo",
    name: "GUM",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6215216, 55.7546967] },
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgum.ru%2Fnews%2F7721635%2F15.06.2020%2F&psig=AOvVaw2Ezg_5YJ2dweQbZgzdHVHW&ust=1639402989493000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDYh5qy3vQCFQAAAAAdAAAAABAD",
  },
  {
    media_id: "red_sq_video",
    name: "Red Square",
    type: "video",
    pos: { type: "Point", coordinates: [37.619845, 55.7543362] },
    url: "https://www.youtube.com/watch?v=jCcd_96P5BA",
  },
  {
    media_id: "gu_video",
    name: "GUM",
    type: "video",
    pos: { type: "Point", coordinates: [37.621275, 55.754154] },
    url: "https://www.youtube.com/watch?v=GfwnH3ccEnc",
  },
  {
    media_id: "lobn_video",
    name: "Lobnoe mesto",
    type: "video",
    pos: { type: "Point", coordinates: [37.6225886, 55.7532491] },
    url: "https://www.youtube.com/watch?v=VIn5alKa6Yk",
  },
  {
    media_id: "spas_video",
    name: "Spasskaya tower",
    type: "video",
    pos: { type: "Point", coordinates: [37.621828, 55.752708] },
    url: "https://www.youtube.com/watch?v=c0mtdU6wV3I",
  },
  {
    media_id: "gostinyy_dvor",
    name: "Gostinnyy Dvor",
    type: "photo",
    pos: { type: "Point", coordinates: [37.623925, 55.754277] },
    url: "http://www.robertodemicheli.com/album_test/index.html?folder=Architecture/&file=IMG_2060.jpg",
  },
  {
    media_id: "ploshad_rev",
    name: "Ploshad Revolutsii",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6218699, 55.7565575] },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ploshchad_revolyutsii_Metro_2010.jpg/1280px-Ploshchad_revolyutsii_Metro_2010.jpg",
  },
  {
    media_id: "bolsh_theat",
    name: "Bolshoi theatre",
    type: "video",
    pos: { type: "Point", coordinates: [37.619085, 55.759611] },
    url: "https://www.youtube.com/watch?v=uE2fjFMag7E",
  },
  {
    media_id: "cafe_sobr",
    name: "Cafe_Sobranie",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6172352, 55.758649] },
    url: "https://www.sobranierf.ru/upload/medialibrary/cf9/cf98d21ea3efa0e2b2ac6cb856d747d3.png",
  },
  {
    media_id: "cdm",
    name: "Central children's store",
    type: "photo",
    pos: { type: "Point", coordinates: [37.624407, 55.759574] },
    url: "https://mos-holidays.ru/wp-content/uploads/2020/07/centralnyi-detskiy-mir-1.jpg",
  },
  {
    media_id: "biblio-globus",
    name: "Biblio Globus",
    type: "video",
    pos: { type: "Point", coordinates: [37.629739, 55.7583604] },
    url: "https://www.youtube.com/watch?v=u2nY9MmlbvM",
  },
  {
    media_id: "zaryad",
    name: "Zaryadie park",
    type: "video",
    pos: { type: "Point", coordinates: [37.62428, 55.752072] },
    url: "https://www.youtube.com/watch?v=vnShcoOxx4Y",
  },
  {
    media_id: "kolch_shop",
    name: "Kolchuga shop",
    type: "photo",
    pos: { type: "Point", coordinates: [37.6276069, 55.7528956] },
    url: "https://retaildesignblog.net/wp-content/uploads/2013/12/Kolchugas-Weapons-Salon-by-ARCHPOINT-Moscow-Russia.jpg",
  },
]);
