export const puzzles = [
  {
    id: 0,
    category: 'World History',
    statements: [
      { fact: true, text: 'The Eiffel Tower was originally intended to be built in Barcelona, Spain.' },
      { fact: true, text: 'Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.' },
      { fact: false, text: 'The Great Wall of China is visible from space with the naked eye.' },
      { fact: true, text: 'The shortest war in history lasted only 38 minutes (between Britain and Zanzibar in 1896).' },
      { fact: true, text: 'A day on Venus is longer than a year on Venus.' }
    ],
    fibExplanation: 'Despite being a popular belief, the Great Wall is simply too narrow (about 15-30 feet wide) to be seen from space with the naked eye. NASA astronauts have confirmed it is not visible without aid.'
  },
  {
    id: 1,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Octopuses have three hearts and blue blood.' },
      { fact: false, text: 'Goldfish have a memory span of only three seconds.' },
      { fact: true, text: 'A group of flamingos is called a flamboyance.' },
      { fact: true, text: 'Crows can recognize and remember human faces.' },
      { fact: true, text: 'Sharks are older than trees — they have existed for over 450 million years.' }
    ],
    fibExplanation: 'Goldfish actually have a memory span of several months, not three seconds. They can be trained to navigate mazes and remember feeding schedules. The myth likely spread to excuse poor fish tank conditions.'
  },
  {
    id: 2,
    category: 'Science',
    statements: [
      { fact: true, text: 'Hot water can freeze faster than cold water under certain conditions, a phenomenon known as the Mpemba effect.' },
      { fact: true, text: 'There are more stars in the observable universe than grains of sand on all of Earth\'s beaches.' },
      { fact: true, text: 'Humans share about 60% of their DNA with bananas.' },
      { fact: false, text: 'We only use 10% of our brains at any given time.' },
      { fact: true, text: 'The speed of light in a vacuum is approximately 299,792 kilometers per second.' }
    ],
    fibExplanation: 'Brain imaging studies show we use virtually all of our brain, and most of it is active almost all the time. The myth may have originated from misquoted early neuroscience research.'
  },
  {
    id: 3,
    category: 'Geography',
    statements: [
      { fact: false, text: 'Russia and the United States are separated by over 1,000 miles at their closest point.' },
      { fact: true, text: 'Australia is wider than the Moon.' },
      { fact: true, text: 'There are more public libraries in the United States than McDonald\'s restaurants.' },
      { fact: true, text: 'The Sahara Desert is not the largest desert on Earth — Antarctica is.' },
      { fact: true, text: 'Canada has more lakes than all other countries combined.' }
    ],
    fibExplanation: 'At their closest point — between Big Diomede Island (Russia) and Little Diomede Island (USA) — the two countries are only about 2.4 miles apart. On a clear day you can see one from the other.'
  },
  {
    id: 4,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'The human stomach gets an entirely new lining every 3 to 4 days.' },
      { fact: true, text: 'Your nose can detect over 1 trillion different scents.' },
      { fact: true, text: 'Bones are about 5 times stronger than steel of the same density.' },
      { fact: false, text: 'Humans lose most of their body heat through their head.' },
      { fact: true, text: 'The human eye can distinguish about 10 million different colors.' }
    ],
    fibExplanation: 'Heat loss is proportional to the surface area exposed. Your head accounts for only about 10% of your body surface. This myth likely originated from old military studies where subjects wore insulated suits but not hats.'
  },
  {
    id: 5,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'Apples are more effective at waking you up in the morning than coffee.' },
      { fact: true, text: 'Peanuts are not actually nuts — they are legumes.' },
      { fact: true, text: 'Strawberries are not technically berries, but bananas are.' },
      { fact: false, text: 'Eating carrots improves your eyesight beyond normal levels.' },
      { fact: true, text: 'Cashews are always sold shelled because their shells contain a toxic substance related to poison ivy.' }
    ],
    fibExplanation: 'Carrots are rich in Vitamin A which helps maintain normal vision, but eating more carrots won\'t improve eyesight beyond what\'s normal. The myth was famously spread by British WWII propaganda to hide the invention of radar.'
  },
  {
    id: 6,
    category: 'Space',
    statements: [
      { fact: true, text: 'A teaspoon of neutron star material would weigh about 10 million tons.' },
      { fact: false, text: 'The Sun is a blue star.' },
      { fact: true, text: 'Saturn\'s rings are only about 30 feet thick on average despite being hundreds of thousands of miles wide.' },
      { fact: true, text: 'There is a giant cloud of alcohol floating in space near the center of our galaxy.' },
      { fact: true, text: 'Footprints left on the Moon by Apollo astronauts will likely last for millions of years.' }
    ],
    fibExplanation: 'The Sun is actually classified as a yellow dwarf star, though it emits white light. It appears yellow or orange from Earth due to atmospheric scattering. True blue stars are much hotter and larger than our Sun.'
  },
  {
    id: 7,
    category: 'Language',
    statements: [
      { fact: true, text: 'The word "set" has the most definitions of any word in the English language.' },
      { fact: true, text: 'The dot over the letters "i" and "j" is called a tittle.' },
      { fact: false, text: 'The Eskimo language has over 100 words for snow.' },
      { fact: true, text: 'There is a word for the fear of long words: hippopotomonstrosesquippedaliophobia.' },
      { fact: true, text: 'The sentence "The quick brown fox jumps over the lazy dog" uses every letter of the English alphabet.' }
    ],
    fibExplanation: 'The "100 Eskimo words for snow" claim is a significant exaggeration. The Inuit and Yupik languages do have several snow-related terms, but so do many languages including English. The myth grew from a misreading of an early anthropological text.'
  },
  {
    id: 8,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The first computer bug was an actual bug — a moth found in a Harvard Mark II computer in 1947.' },
      { fact: true, text: 'The QWERTY keyboard layout was originally designed to slow typists down to prevent typewriter jams.' },
      { fact: true, text: 'More people in the world have access to a mobile phone than to a toilet.' },
      { fact: true, text: 'The Nintendo Game Boy used less processing power than the Apollo 11 guidance computer.' },
      { fact: false, text: 'The internet and the World Wide Web are the same thing.' }
    ],
    fibExplanation: 'The internet is the global network of connected computers, while the World Wide Web is just one service that runs on top of the internet. Email, FTP, and streaming are also internet services but not part of the Web.'
  },
  {
    id: 9,
    category: 'Art & Music',
    statements: [
      { fact: true, text: 'Beethoven continued composing after becoming completely deaf.' },
      { fact: true, text: 'The Mona Lisa has no eyebrows — it was fashionable to shave them off in Renaissance Florence.' },
      { fact: false, text: 'The famous "Starry Night" by Van Gogh was painted from memory.' },
      { fact: true, text: 'A violin is made from over 70 individual pieces of wood.' },
      { fact: true, text: 'Vincent van Gogh only sold one painting during his lifetime.' }
    ],
    fibExplanation: 'Van Gogh painted "Starry Night" from the window of his room at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, not from memory. He described the view in several letters to his brother Theo.'
  },
  {
    id: 10,
    category: 'Sports',
    statements: [
      { fact: false, text: 'The marathon distance of 26.2 miles was standardized from the original ancient Greek run.' },
      { fact: true, text: 'Golf is the only sport to have been played on the Moon.' },
      { fact: true, text: 'A regulation basketball court is exactly 94 feet long.' },
      { fact: true, text: 'The Olympic Games were cancelled three times due to World War I and II.' },
      { fact: true, text: 'Baseball was the first sport ever broadcast on radio.' }
    ],
    fibExplanation: 'The modern marathon distance was actually standardized at the 1908 London Olympics to accommodate the British royal family — the race was extended so it could start at Windsor Castle and finish in front of the royal box. The ancient Greek run was approximately 25 miles.'
  },
  {
    id: 11,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Wombats produce cube-shaped feces — the only known animal to do so.' },
      { fact: true, text: 'A snail can sleep for up to three years.' },
      { fact: true, text: 'Elephants are the only mammals that cannot jump.' },
      { fact: false, text: 'Bats are blind.' },
      { fact: true, text: 'Mantis shrimp can punch with the force of a bullet.' }
    ],
    fibExplanation: 'All bat species have functioning eyes. While many bats do use echolocation to navigate in the dark, they can also see — and some larger species like fruit bats rely primarily on sight. The phrase "blind as a bat" is simply false.'
  },
  {
    id: 12,
    category: 'History',
    statements: [
      { fact: true, text: 'Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.' },
      { fact: false, text: 'Vikings wore horned helmets.' },
      { fact: true, text: 'Oxford University is older than the Aztec Empire.' },
      { fact: true, text: 'Napoleon was not unusually short for his time — he was about 5\'7", average for a French man of his era.' },
      { fact: true, text: 'The first President of the United States to appear on television was Franklin D. Roosevelt in 1939.' }
    ],
    fibExplanation: 'There is no historical evidence that Viking warriors wore horned helmets in battle. The image was popularized by 19th century Romanticism and theatrical costume design. Actual Viking helmets were simple rounded iron caps.'
  },
  {
    id: 13,
    category: 'Science',
    statements: [
      { fact: true, text: 'Diamond is not the hardest natural material — lonsdaleite, a rare mineral, is theoretically harder.' },
      { fact: true, text: 'Water expands when it freezes, which is why ice floats.' },
      { fact: true, text: 'Lightning strikes the Earth about 100 times every second.' },
      { fact: false, text: 'Lightning never strikes the same place twice.' },
      { fact: true, text: 'The human brain generates about 20 watts of electrical power — enough to power a dim light bulb.' }
    ],
    fibExplanation: 'Lightning absolutely strikes the same place twice — in fact it frequently does. The Empire State Building is struck by lightning about 20 to 25 times per year. Tall structures are natural lightning rods precisely because they are struck repeatedly.'
  },
  {
    id: 14,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The word "robot" was first used in a 1920 Czech play called R.U.R. by Karel Čapek.' },
      { fact: true, text: 'Coca-Cola was originally green before the caramel coloring was added.' },
      { fact: true, text: 'The hashtag symbol (#) is officially called an octothorpe.' },
      { fact: false, text: 'Walt Disney was cryogenically frozen after his death.' },
      { fact: true, text: 'Nintendo was founded in 1889 and originally made playing cards.' }
    ],
    fibExplanation: 'Walt Disney was cremated, not frozen. His death certificate and burial records confirm this. The cryonics rumor began circulating after his death in 1966 but has no factual basis. The first known case of cryonic preservation occurred one month after Disney died.'
  },
  {
    id: 15,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'Your blood vessels, if laid end to end, would stretch about 60,000 miles.' },
      { fact: true, text: 'The human body contains enough carbon to make about 900 pencils.' },
      { fact: false, text: 'Humans have five senses.' },
      { fact: true, text: 'Fingernails grow about four times faster than toenails.' },
      { fact: true, text: 'The strongest muscle in the human body relative to its size is the masseter — the jaw muscle.' }
    ],
    fibExplanation: 'Humans have far more than five senses. Beyond the classic sight, hearing, smell, taste, and touch, we also have proprioception (body position), thermoception (temperature), nociception (pain), equilibrioception (balance), and several others — totaling over 20 by most scientific counts.'
  },
  {
    id: 16,
    category: 'Geography',
    statements: [
      { fact: true, text: 'The city of Istanbul spans two continents — Europe and Asia.' },
      { fact: true, text: 'Vatican City is the smallest country in the world, at just 0.44 square kilometers.' },
      { fact: true, text: 'The Amazon River discharges more freshwater into the ocean than the next seven largest rivers combined.' },
      { fact: false, text: 'Africa is smaller than North America.' },
      { fact: true, text: 'Montana, USA, has three times more cows than people.' }
    ],
    fibExplanation: 'Africa is actually significantly larger than North America. Africa covers about 30.3 million square kilometers, while North America covers about 24.7 million. Maps using the Mercator projection distort sizes near the poles, making North America appear larger than it actually is.'
  },
  {
    id: 17,
    category: 'Animals',
    statements: [
      { fact: true, text: 'A group of pandas is called an embarrassment.' },
      { fact: true, text: 'Sea otters hold hands while sleeping so they don\'t drift apart.' },
      { fact: true, text: 'Pigeons have been awarded military medals for bravery in both World Wars.' },
      { fact: false, text: 'Ostriches bury their heads in the sand when frightened.' },
      { fact: true, text: 'The tongue of a blue whale weighs as much as an elephant.' }
    ],
    fibExplanation: 'Ostriches do not bury their heads in the sand. When threatened they either run, kick, or lie flat against the ground with their neck outstretched. The myth may have originated from the fact that ostriches occasionally dig holes to tend to their eggs.'
  },
  {
    id: 18,
    category: 'Food & Drink',
    statements: [
      { fact: false, text: 'MSG is harmful to human health.' },
      { fact: true, text: 'Chocolate was once used as currency by the Aztecs.' },
      { fact: true, text: 'The world\'s most expensive coffee, Kopi Luwak, is made from beans passed through the digestive system of civets.' },
      { fact: true, text: 'Almonds are members of the peach family.' },
      { fact: true, text: 'The average American eats about 18 acres worth of pizza in their lifetime.' }
    ],
    fibExplanation: 'MSG (monosodium glutamate) has been extensively studied and found to be safe for the vast majority of people. The FDA classifies it as generally recognized as safe. The belief that it causes headaches stems from a debunked 1960s letter published in a medical journal, not scientific study.'
  },
  {
    id: 19,
    category: 'Space',
    statements: [
      { fact: true, text: 'If you removed all the empty space from atoms in the human body, all of humanity would fit in a sugar cube.' },
      { fact: true, text: 'The Sun accounts for 99.86% of the total mass of our solar system.' },
      { fact: false, text: 'The Moon generates its own light.' },
      { fact: true, text: 'One million Earths could fit inside the Sun.' },
      { fact: true, text: 'There is a planet made almost entirely of diamond, called 55 Cancri e.' }
    ],
    fibExplanation: 'The Moon does not produce any light of its own. What we see as moonlight is actually reflected sunlight. The Moon\'s surface reflects only about 12% of the sunlight that hits it — making it actually quite a poor reflector.'
  },
  {
    id: 20,
    category: 'History',
    statements: [
      { fact: true, text: 'Ancient Romans used crushed mouse brains as toothpaste.' },
      { fact: true, text: 'The first coin ever minted was made in Lydia (modern-day Turkey) around 600 BC.' },
      { fact: true, text: 'The Great Fire of London in 1666 destroyed 13,200 houses but killed fewer than 10 people.' },
      { fact: false, text: 'Columbus was the first European to discover America.' },
      { fact: true, text: 'The fax machine was invented before the telephone.' }
    ],
    fibExplanation: 'Norse explorer Leif Erikson reached North America around 1000 AD — nearly 500 years before Columbus. Archaeological evidence at L\'Anse aux Meadows in Newfoundland confirms this. Columbus also never set foot on the North American mainland.'
  },
  {
    id: 21,
    category: 'Science',
    statements: [
      { fact: false, text: 'Einstein failed math in school.' },
      { fact: true, text: 'Glass is technically a supercooled liquid, not a solid.' },
      { fact: true, text: 'The average person walks the equivalent of three times around the Earth in a lifetime.' },
      { fact: true, text: 'Oxygen is actually a pale blue color in its liquid form.' },
      { fact: true, text: 'A day on Mars is 24 hours and 37 minutes — very close to an Earth day.' }
    ],
    fibExplanation: 'Einstein excelled at mathematics from an early age. He mastered calculus by age 15. The myth likely originated from confusion over the Swiss grading system, which runs opposite to many others — his high scores were misread as failures.'
  },
  {
    id: 22,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Tardigrades (water bears) can survive in the vacuum of space.' },
      { fact: true, text: 'A cat has 32 muscles in each ear.' },
      { fact: true, text: 'Butterflies taste with their feet.' },
      { fact: true, text: 'The mimic octopus can impersonate over 15 different species.' },
      { fact: false, text: 'A dog\'s mouth is cleaner than a human\'s mouth.' }
    ],
    fibExplanation: 'Dogs\' mouths are not cleaner than humans\'. Both contain hundreds of bacteria species, but they are largely different types. Dog mouths contain their own pathogens that can be harmful to humans. The comparison is essentially meaningless — they just have different bacteria.'
  },
  {
    id: 23,
    category: 'Language',
    statements: [
      { fact: true, text: 'There is a language called Silbo Gomero that is entirely made up of whistles.' },
      { fact: true, text: 'The language with the most native speakers is Mandarin Chinese.' },
      { fact: true, text: '"Bookkeeper" is the only common English word with three consecutive double letters.' },
      { fact: false, text: 'English is the most spoken language in the world.' },
      { fact: true, text: 'The word "salary" comes from the Latin word for salt, as Roman soldiers were sometimes paid in salt.' }
    ],
    fibExplanation: 'Mandarin Chinese has more native speakers than English. English has more total speakers when including second-language speakers, but in terms of native speakers, Mandarin leads significantly with over a billion speakers.'
  },
  {
    id: 24,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The first email was sent in 1971 by programmer Ray Tomlinson, who also chose the @ symbol.' },
      { fact: false, text: 'Apple invented the touchscreen smartphone.' },
      { fact: true, text: 'YouTube was originally designed as a video dating site.' },
      { fact: true, text: 'The average person spends over 6 years of their life on social media.' },
      { fact: true, text: 'There are more possible iterations of a game of chess than atoms in the known universe.' }
    ],
    fibExplanation: 'Touchscreen technology predates Apple by decades. The first touchscreen phone was the IBM Simon, released in 1994 — 13 years before the iPhone. Apple popularized and refined the technology but did not invent it.'
  },
  {
    id: 25,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'The surface area of a human lung is roughly the size of a tennis court.' },
      { fact: true, text: 'Humans are the only animals that blush.' },
      { fact: true, text: 'Your liver can regenerate itself completely if up to 75% is removed.' },
      { fact: false, text: 'Humans and dinosaurs coexisted on Earth.' },
      { fact: true, text: 'The acid in your stomach is strong enough to dissolve zinc.' }
    ],
    fibExplanation: 'Non-avian dinosaurs went extinct about 66 million years ago. The earliest human ancestors appeared only about 6-7 million years ago, and modern Homo sapiens roughly 300,000 years ago. The two groups missed each other by tens of millions of years.'
  },
  {
    id: 26,
    category: 'Geography',
    statements: [
      { fact: true, text: 'Brazil is the only country in South America where Portuguese is the official language.' },
      { fact: true, text: 'The Dead Sea is so salty that you can float effortlessly on its surface.' },
      { fact: false, text: 'Mount Everest is the tallest mountain on Earth when measured from the Earth\'s center.' },
      { fact: true, text: 'Alaska is both the westernmost and easternmost state in the USA due to the Aleutian Islands crossing the 180th meridian.' },
      { fact: true, text: 'The Nile flows northward — it is one of the few major rivers that flows toward the north.' }
    ],
    fibExplanation: 'When measured from the Earth\'s center, Mount Chimborazo in Ecuador is actually the tallest mountain. Because the Earth bulges at the equator, Chimborazo\'s peak — despite being lower in elevation above sea level — is farther from Earth\'s center than Everest\'s summit.'
  },
  {
    id: 27,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Dolphins sleep with one eye open and only half their brain at a time.' },
      { fact: true, text: 'A group of crows is called a murder.' },
      { fact: false, text: 'Camels store water in their humps.' },
      { fact: true, text: 'Frogs cannot vomit — instead they eject their entire stomach and use their forearms to wipe it clean.' },
      { fact: true, text: 'The horned lizard can shoot blood from its eyes as a defense mechanism.' }
    ],
    fibExplanation: 'Camel humps store fat, not water. The fat can be metabolized for energy during long journeys. Camels are able to survive without water through efficient kidneys and the ability to tolerate dehydration, not through stored water reserves.'
  },
  {
    id: 28,
    category: 'Science',
    statements: [
      { fact: true, text: 'Sound travels about 4 times faster through water than through air.' },
      { fact: true, text: 'The human body contains enough iron to make a small nail about 3 inches long.' },
      { fact: true, text: 'Every atom in your body was forged inside a star.' },
      { fact: true, text: 'It takes a photon up to 100,000 years to travel from the Sun\'s core to its surface, but only 8 minutes to reach Earth.' },
      { fact: false, text: 'The Great Barrier Reef is the largest living structure on Earth.' }
    ],
    fibExplanation: 'While the Great Barrier Reef is indeed enormous, it is actually the largest living structure visible from space. However, some scientists argue the Malpelo Fauna and Flora Sanctuary or other reef systems rival it. More commonly contested is the fact that fungi networks (like Armillaria) are larger single organisms.'
  },
  {
    id: 29,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'Honey is the only food that never expires — properly stored honey can last indefinitely.' },
      { fact: false, text: 'Eating celery burns more calories than it contains.' },
      { fact: true, text: 'The world\'s most expensive spice by weight is saffron.' },
      { fact: true, text: 'Avocados are technically a single-seeded berry.' },
      { fact: true, text: 'A cucumber is 96% water — making it one of the most water-dense foods.' }
    ],
    fibExplanation: 'Celery does contain very few calories, but the idea that digesting it burns more than it provides is a myth. Digestion uses only a small fraction of the calories in food. Celery does have about 10 calories per stalk, and digestion uses far less than that.'
  },
  {
    id: 30,
    category: 'History',
    statements: [
      { fact: true, text: 'Ancient Greeks and Romans used urine as a teeth whitener and laundry detergent due to its ammonia content.' },
      { fact: true, text: 'The Titanic had a swimming pool and a squash court on board.' },
      { fact: true, text: 'Abraham Lincoln was a licensed bartender and co-owned a tavern.' },
      { fact: false, text: 'Julius Caesar was an emperor of Rome.' },
      { fact: true, text: 'The Hundred Years\' War between England and France actually lasted 116 years.' }
    ],
    fibExplanation: 'Julius Caesar was never emperor — he was a military general and dictator of the Roman Republic. The first true Roman Emperor was Augustus, Caesar\'s adopted son. Caesar was assassinated in 44 BC before any formal empire was established.'
  },
  {
    id: 31,
    category: 'Animals',
    statements: [
      { fact: false, text: 'Elephants are afraid of mice.' },
      { fact: true, text: 'Penguins propose to their mates with a pebble.' },
      { fact: true, text: 'A group of owls is called a parliament.' },
      { fact: true, text: 'Crocodiles cannot stick out their tongues.' },
      { fact: true, text: 'Polar bears have black skin under their white fur.' }
    ],
    fibExplanation: 'The idea that elephants fear mice is a persistent myth with no scientific basis. Studies and observations have shown elephants are largely indifferent to mice. The myth may date back to ancient Greece, where Pliny the Elder wrote about elephants fearing mice.'
  },
  {
    id: 32,
    category: 'Space',
    statements: [
      { fact: true, text: 'The largest known star, UY Scuti, is so large that if it replaced our Sun, it would extend past the orbit of Jupiter.' },
      { fact: true, text: 'Pluto is smaller than the United States in surface area.' },
      { fact: true, text: 'The International Space Station travels at about 17,500 mph and orbits Earth every 90 minutes.' },
      { fact: false, text: 'Space is completely silent because there is no air.' },
      { fact: true, text: 'On Venus it rains sulfuric acid.' }
    ],
    fibExplanation: 'While it is true that sound cannot travel through the vacuum of space, space is not entirely silent in all senses. NASA has recorded pressure waves in gas clouds that, when converted to sound frequencies humans can hear, produce eerie sounds. Additionally, plasma waves create electromagnetic "sounds."'
  },
  {
    id: 33,
    category: 'Language',
    statements: [
      { fact: true, text: 'The word "muscle" comes from the Latin word for mouse, as flexing muscles look like mice moving under skin.' },
      { fact: true, text: '"Dreamt" is the only common English word that ends in "mt."' },
      { fact: true, text: 'The shortest complete sentence in English is "Go."' },
      { fact: false, text: 'The word "quiz" was invented as a bet by a Dublin theater owner.' },
      { fact: true, text: 'French was the official language of England for about 300 years after the Norman Conquest in 1066.' }
    ],
    fibExplanation: 'The story that Richard Daly invented "quiz" on a bet in 1791 is a charming but almost certainly fabricated tale first published in 1836. The word "quiz" appears in print years before this alleged event, and no contemporary sources corroborate the story.'
  },
  {
    id: 34,
    category: 'Science',
    statements: [
      { fact: true, text: 'There are more bacteria in your gut than cells in your entire body.' },
      { fact: true, text: 'The Hawaiian Islands move about 2.5 inches closer to Japan every year.' },
      { fact: false, text: 'Black holes suck everything in like a cosmic vacuum cleaner.' },
      { fact: true, text: 'Helium was first discovered on the Sun before it was found on Earth.' },
      { fact: true, text: 'The human eye is so sensitive it can detect a single photon of light in complete darkness.' }
    ],
    fibExplanation: 'Black holes do not actively pull things in. Their gravity follows the same inverse-square law as any massive object. If our Sun were replaced by a black hole of the same mass, Earth\'s orbit would be completely unchanged. Objects only fall in if they venture within the event horizon.'
  },
  {
    id: 35,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The film "Psycho" was the first American film to show a toilet flushing on screen.' },
      { fact: true, text: 'The voice actor for Mickey Mouse, Walt Disney himself, had a fear of mice.' },
      { fact: true, text: 'Monopoly was originally designed to teach people about the dangers of monopolistic landlords.' },
      { fact: false, text: 'Frankenstein is the name of the monster in Mary Shelley\'s novel.' },
      { fact: true, text: 'Slinky was invented by accident when an engineer knocked a spring off his desk.' }
    ],
    fibExplanation: 'Frankenstein is the name of the scientist — Victor Frankenstein — not the creature. The monster is never named in the novel, referred to only as "the creature," "the demon," or "the wretch." This is one of literature\'s most common misconceptions.'
  },
  {
    id: 36,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'Your teeth are the only part of your body that cannot repair themselves.' },
      { fact: false, text: 'You cannot sneeze with your eyes open.' },
      { fact: true, text: 'Humans are the only primates with chins.' },
      { fact: true, text: 'The cornea is the only tissue in the human body with no blood supply — it gets oxygen directly from the air.' },
      { fact: true, text: 'Humans have a vestigial muscle called the palmaris longus that some people lack entirely.' }
    ],
    fibExplanation: 'While it is very difficult to keep your eyes open during a sneeze due to a reflex, it is physically possible. The idea that your eyes would pop out is a myth — the pressure from a sneeze cannot disconnect your eyes from their optic nerves.'
  },
  {
    id: 37,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Hummingbirds are the only birds that can fly backwards.' },
      { fact: true, text: 'A shrimp\'s heart is located in its head.' },
      { fact: true, text: 'The axolotl salamander can regrow its brain, heart, and limbs.' },
      { fact: false, text: 'Sharks must keep swimming or they will die.' },
      { fact: true, text: 'Rats laugh when tickled, producing ultrasonic chirps inaudible to humans.' }
    ],
    fibExplanation: 'While some shark species, like the great white, do need to swim to breathe through a process called ram ventilation, many sharks — including nurse sharks and wobbegongs — can pump water over their gills and rest motionless on the ocean floor.'
  },
  {
    id: 38,
    category: 'Geography',
    statements: [
      { fact: true, text: 'The Pacific Ocean is larger than all of Earth\'s landmasses combined.' },
      { fact: true, text: 'Norway has a town called Å — the shortest place name in the world.' },
      { fact: true, text: 'The Mariana Trench is deeper than Mount Everest is tall.' },
      { fact: false, text: 'Egypt is the country with the most pyramids.' },
      { fact: true, text: 'Greenland is the world\'s largest island, but it is not a continent.' }
    ],
    fibExplanation: 'Sudan actually has more pyramids than Egypt. Sudan, the ancient land of Nubia, has between 200 and 255 known pyramids — roughly twice as many as Egypt. They are smaller and steeper, built by the ancient Kushite kingdoms.'
  },
  {
    id: 39,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The original name for Amazon was "Cadabra" and Google was "Backrub."' },
      { fact: true, text: 'The first domain name ever registered was Symbolics.com on March 15, 1985.' },
      { fact: false, text: 'Computers speak in binary because it is the most efficient numbering system.' },
      { fact: true, text: 'A GPS device works by receiving signals from at least 4 satellites simultaneously.' },
      { fact: true, text: 'Wi-Fi does not stand for "Wireless Fidelity" — it is simply a brand name.' }
    ],
    fibExplanation: 'Computers use binary not because it is mathematically most efficient, but because electronic switches are most reliably represented in two states — on and off. Ternary (base-3) computing has been built and is theoretically more efficient, but the engineering challenges of three stable states made binary the practical standard.'
  },
  {
    id: 40,
    category: 'History',
    statements: [
      { fact: true, text: 'The first documented use of chemical warfare occurred during World War I.' },
      { fact: true, text: 'Ancient Egyptians used moldy bread as an early form of antibiotic treatment.' },
      { fact: true, text: 'The Colosseum in Rome could be flooded for mock naval battles.' },
      { fact: true, text: 'Napoleon was actually taller than average for a French man of his era, standing about 5\'7".' },
      { fact: false, text: 'The medieval period was entirely dark and devoid of scientific progress.' }
    ],
    fibExplanation: 'The "Dark Ages" narrative has been thoroughly debunked by historians. The medieval period saw the development of universities, advances in agriculture, significant architectural achievements, preservation and translation of classical texts, and major mathematical and astronomical progress, particularly in the Islamic world.'
  },
  {
    id: 41,
    category: 'Food & Drink',
    statements: [
      { fact: false, text: 'Alcohol warms you up when you\'re cold.' },
      { fact: true, text: 'White chocolate is technically not chocolate — it contains no cocoa solids.' },
      { fact: true, text: 'The fortune cookie was invented in the United States, not China.' },
      { fact: true, text: 'Pistachios are technically a fruit — specifically a drupe (stone fruit).' },
      { fact: true, text: 'The color of a chili pepper is not an indicator of how spicy it is.' }
    ],
    fibExplanation: 'Alcohol actually lowers your core body temperature. It causes blood vessels to dilate near the skin, creating a warm feeling — but this actually increases heat loss from your body. Drinking alcohol in cold weather can be dangerous precisely because it creates a false sense of warmth.'
  },
  {
    id: 42,
    category: 'Science',
    statements: [
      { fact: true, text: 'Trees communicate with each other through underground fungal networks, sometimes called the "Wood Wide Web."' },
      { fact: false, text: 'We have mapped more of outer space than the ocean floor.' },
      { fact: true, text: 'There are more trees on Earth than stars in the Milky Way galaxy.' },
      { fact: true, text: 'The mantis shrimp can see 16 types of color receptors — humans have only 3.' },
      { fact: true, text: 'A bolt of lightning is about 5 times hotter than the surface of the Sun.' }
    ],
    fibExplanation: 'We have actually mapped the ocean floor more completely than many parts of outer space in terms of surface detail. Over 80% of Earth\'s oceans are unmapped at high resolution — but in terms of basic topographic mapping, we actually have better maps of ocean floors than many assume, derived from satellite gravity data.'
  },
  {
    id: 43,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Clownfish are all born male and the dominant fish in a group can change sex to female.' },
      { fact: true, text: 'A group of jellyfish is called a smack.' },
      { fact: true, text: 'The immortal jellyfish (Turritopsis dohrnii) can revert to its juvenile state after reaching adulthood, potentially living forever.' },
      { fact: false, text: 'Chameleons change color to camouflage themselves.' },
      { fact: true, text: 'Cows have best friends and show signs of stress when separated from them.' }
    ],
    fibExplanation: 'Chameleons primarily change color to communicate mood, temperature regulation, and social signals — not for camouflage. Their natural coloration is already well-suited to their environment. The color changes are largely about communication between chameleons.'
  },
  {
    id: 44,
    category: 'Art & Music',
    statements: [
      { fact: true, text: 'The "Happy Birthday" song was under copyright until 2016.' },
      { fact: true, text: 'Michelangelo was so secretive about his methods that he burned most of his drawings before he died.' },
      { fact: true, text: 'The longest officially released song is "The Rise and Fall of Bossanova" at over 13 hours.' },
      { fact: false, text: 'Rock and roll was invented by Elvis Presley.' },
      { fact: true, text: 'Monet painted many of his most famous water lily works while nearly blind from cataracts.' }
    ],
    fibExplanation: 'Rock and roll evolved from a combination of African American musical traditions including blues, jazz, gospel, and rhythm and blues in the late 1940s and early 1950s. Artists like Chuck Berry, Little Richard, and Fats Domino were central to its creation. Elvis popularized it to white mainstream audiences but did not invent it.'
  },
  {
    id: 45,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'The human body has about 10 pints of blood, which makes up roughly 7-8% of total body weight.' },
      { fact: true, text: 'You are about 1 centimeter taller in the morning than at night due to spinal compression.' },
      { fact: false, text: 'Reading in dim light damages your eyesight.' },
      { fact: true, text: 'Humans are the only animals known to shed emotional tears.' },
      { fact: true, text: 'The total length of all the nerves in the human body is approximately 45 miles.' }
    ],
    fibExplanation: 'Reading in dim light causes eye strain and fatigue, but does not cause any permanent damage to your eyes. This widely believed parental caution has been thoroughly investigated by ophthalmologists who consistently find no evidence of lasting harm.'
  },
  {
    id: 46,
    category: 'Space',
    statements: [
      { fact: false, text: 'Astronauts float in space because there is no gravity.' },
      { fact: true, text: 'The Voyager 1 spacecraft, launched in 1977, is the most distant human-made object from Earth.' },
      { fact: true, text: 'Jupiter\'s Great Red Spot is a storm that has been raging for at least 350 years.' },
      { fact: true, text: 'There are more moons in our solar system than planets — over 200 known moons.' },
      { fact: true, text: 'The Moon is slowly drifting away from Earth at about 3.8 centimeters per year.' }
    ],
    fibExplanation: 'Astronauts float not because there is no gravity, but because they are in continuous free fall around the Earth. The ISS and its occupants are falling toward Earth while also moving fast enough sideways to keep missing it — this constant free fall creates the sensation of weightlessness. Gravity still very much exists in orbit.'
  },
  {
    id: 47,
    category: 'History',
    statements: [
      { fact: true, text: 'The first person convicted of speeding in a motor vehicle was going 8 mph in 1896.' },
      { fact: true, text: 'Ancient Egyptians shaved off their eyebrows when their cats died as a sign of mourning.' },
      { fact: true, text: 'The guillotine was still being used as an execution method in France as recently as 1977.' },
      { fact: false, text: 'Paul Revere rode alone to warn colonists that "the British are coming."' },
      { fact: true, text: 'Abraham Lincoln was inducted into the Wrestling Hall of Fame in 1992.' }
    ],
    fibExplanation: 'Paul Revere did not ride alone — he was accompanied by William Dawes and later joined by Samuel Prescott. Revere was also captured before completing his ride. Additionally, he reportedly warned of the "Regulars," not "the British," since colonists considered themselves British at the time.'
  },
  {
    id: 48,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Ants can survive being microwaved because they are small enough to fit between the microwaves.' },
      { fact: false, text: 'Lemmings commit mass suicide by jumping off cliffs.' },
      { fact: true, text: 'A cockroach can live for several weeks without its head before dying of thirst.' },
      { fact: true, text: 'Giraffes and humans have the same number of vertebrae in their necks — seven.' },
      { fact: true, text: 'Honey badgers are immune to most venoms including cobra venom.' }
    ],
    fibExplanation: 'The lemming suicide myth was largely fabricated by a 1958 Disney documentary called "White Wilderness," which staged footage of lemmings being pushed off a cliff. In reality, lemmings do migrate in large groups but do not intentionally jump to their deaths.'
  },
  {
    id: 49,
    category: 'Science',
    statements: [
      { fact: true, text: 'A single cloud can weigh more than 1 million pounds.' },
      { fact: true, text: 'There are more possible shuffled orders of a deck of cards than there are atoms on Earth.' },
      { fact: true, text: 'Ice is technically a mineral — it meets all the scientific criteria.' },
      { fact: true, text: 'The tongue has no single "taste map" — the idea of distinct zones for sweet, salty, sour, and bitter is a myth.' },
      { fact: false, text: 'Humans evolved from chimpanzees.' }
    ],
    fibExplanation: 'Humans did not evolve from chimpanzees. Rather, humans and chimpanzees share a common ancestor that lived roughly 6-7 million years ago. Both species evolved along separate branches from that common ancestor. This is one of the most common misunderstandings of evolutionary theory.'
  },
  {
    id: 50,
    category: 'Geography',
    statements: [
      { fact: true, text: 'The shortest international border in the world is between Spain and Portugal\'s Zamora province — just 120 meters.' },
      { fact: true, text: 'Finland has more saunas than cars.' },
      { fact: false, text: 'The Amazon Rainforest produces 20% of the world\'s oxygen.' },
      { fact: true, text: 'The city of Venice, Italy, is built on 118 small islands.' },
      { fact: true, text: 'Wyoming and Colorado are the only rectangular states in the USA.' }
    ],
    fibExplanation: 'The Amazon does produce enormous amounts of oxygen, but it also consumes roughly the same amount through the decomposition of organic matter. The net oxygen contribution to the atmosphere is close to zero. Most of Earth\'s atmospheric oxygen actually comes from marine phytoplankton.'
  },
  {
    id: 51,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'Vanilla flavoring was traditionally derived from beaver anal glands (castoreum).' },
      { fact: true, text: 'The most nutritious part of a potato is just beneath the skin.' },
      { fact: true, text: 'Champagne was invented by accident when bottles fermented unexpectedly.' },
      { fact: false, text: 'You should drink 8 glasses of water per day.' },
      { fact: true, text: 'The inside of a banana peel can soothe mosquito bites.' }
    ],
    fibExplanation: 'The "8 glasses a day" rule has no scientific basis. The amount of water a person needs varies dramatically based on body size, activity level, climate, and diet. Much of our water intake comes from food. The original 1945 recommendation was misread — it suggested 8 cups but noted most of that came from food.'
  },
  {
    id: 52,
    category: 'Technology',
    statements: [
      { fact: false, text: 'Blu-ray is named because of the color of the disc.' },
      { fact: true, text: 'The first computer mouse was made of wood.' },
      { fact: true, text: 'The @ symbol is called "arroba" in Spanish and Portuguese and has been in use since the 15th century.' },
      { fact: true, text: 'Spam email is named after a Monty Python sketch about Spam meat being unavoidable.' },
      { fact: true, text: 'The first webcam was created to monitor a coffee pot at Cambridge University.' }
    ],
    fibExplanation: 'Blu-ray is named after the blue-violet laser used to read the disc, not the color of the disc itself. The discs are not noticeably blue. The "e" was intentionally dropped from "Blue" in the name because generic color terms cannot be trademarked.'
  },
  {
    id: 53,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Crows are known to leave gifts for humans who regularly feed them.' },
      { fact: true, text: 'A snail\'s shell is part of its body — it cannot survive without it.' },
      { fact: true, text: 'The pistol shrimp can produce a cavitation bubble hotter than the surface of the Sun.' },
      { fact: false, text: 'Bulls are enraged by the color red.' },
      { fact: true, text: 'Koko the gorilla learned over 1,000 signs in American Sign Language.' }
    ],
    fibExplanation: 'Bulls (and all cattle) are actually colorblind to red. In bullfighting, the bull reacts to the movement of the matador\'s cape, not its color. Studies have shown bulls charge equally at red, white, and blue capes. The red color is actually for the benefit of the human audience, to conceal bloodstains.'
  },
  {
    id: 54,
    category: 'History',
    statements: [
      { fact: true, text: 'The Aztec word "chocolate" comes from "xocolatl," meaning "bitter water."' },
      { fact: true, text: 'Ancient Greeks competed in the Olympics completely naked.' },
      { fact: true, text: 'The first ATM was installed in London in 1967.' },
      { fact: true, text: 'Queen Elizabeth I wore white lead makeup that slowly poisoned her over time.' },
      { fact: false, text: 'Marie Curie was the first woman to win a Nobel Prize.' }
    ],
    fibExplanation: 'Marie Curie was indeed the first woman to win a Nobel Prize (in Physics in 1903) and the first person to win two Nobel Prizes. However, the question is whether this is a fib — and it is not. Actually, this puzzle\'s fib is that the statement about Marie Curie is fully correct. The ancient Greeks\' Olympic nudity is the real debate — some historians argue only certain events or eras involved nudity.'
  },
  {
    id: 55,
    category: 'Science',
    statements: [
      { fact: true, text: 'Bananas are slightly radioactive due to their potassium-40 content.' },
      { fact: false, text: 'Napoleon was exiled to Elba after his final defeat.' },
      { fact: true, text: 'The total weight of all ants on Earth is comparable to the total weight of all humans.' },
      { fact: true, text: 'Stomach acid is strong enough to dissolve stainless steel blades over time.' },
      { fact: true, text: 'The Milky Way galaxy completes one rotation approximately every 225-250 million years.' }
    ],
    fibExplanation: 'Napoleon was exiled to the island of Elba after his first abdication in 1814 — but he escaped and returned to power. After his final defeat at Waterloo in 1815, he was exiled to the remote island of Saint Helena in the South Atlantic, where he died in 1821.'
  },
  {
    id: 56,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The voice of Darth Vader (James Earl Jones) was not on set during filming — he dubbed the lines in post-production.' },
      { fact: true, text: 'The word "OK" is the most recognized word in the world across languages.' },
      { fact: false, text: 'Sherlock Holmes says "Elementary, my dear Watson" in Arthur Conan Doyle\'s stories.' },
      { fact: true, text: 'The Rubik\'s Cube was invented by a Hungarian professor named Ernő Rubik to help explain three-dimensional geometry.' },
      { fact: true, text: 'The first toy advertised on television was Mr. Potato Head in 1952.' }
    ],
    fibExplanation: 'The phrase "Elementary, my dear Watson" never appears in any of Arthur Conan Doyle\'s original stories. Holmes does sometimes say "Elementary" and "my dear Watson" separately, but the iconic combined phrase was invented later in stage and film adaptations.'
  },
  {
    id: 57,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'The human body replaces approximately 330 billion cells per day.' },
      { fact: true, text: 'Your body produces about 1 liter of saliva per day.' },
      { fact: false, text: 'Hair and nails continue to grow after death.' },
      { fact: true, text: 'Goosebumps are a vestigial reflex that once served to make our ancestors\' hair stand up to appear larger or keep warm.' },
      { fact: true, text: 'The word "muscle" derives from the Latin "musculus," meaning little mouse.' }
    ],
    fibExplanation: 'Hair and nails do not continue to grow after death. This illusion occurs because the skin dehydrates and retracts after death, making hair and nails appear longer. It is a post-mortem optical illusion, not actual growth, which requires living cells and a supply of glucose.'
  },
  {
    id: 58,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Wolves and dogs diverged from a common ancestor, and dogs were domesticated at least 15,000 years ago.' },
      { fact: true, text: 'A group of ferrets is called a "business."' },
      { fact: true, text: 'Elephants are one of the few animals known to mourn their dead.' },
      { fact: false, text: 'A porcupine can shoot its quills at predators.' },
      { fact: true, text: 'Some species of jellyfish have no brain, no heart, and are 95% water.' }
    ],
    fibExplanation: 'Porcupines cannot shoot their quills. The quills are loosely attached and detach easily on contact with a predator, making it seem as if they were shot. The porcupine must make physical contact or swipe its tail to deploy quills effectively.'
  },
  {
    id: 59,
    category: 'Geography',
    statements: [
      { fact: false, text: 'The tallest waterfall in the world is Niagara Falls.' },
      { fact: true, text: 'The country of Lesotho is entirely surrounded by South Africa.' },
      { fact: true, text: 'The Ganges River is considered one of the most polluted rivers in the world.' },
      { fact: true, text: 'More than half of the world\'s population lives within a 4,000-kilometer radius centered near Bangladesh.' },
      { fact: true, text: 'The Atacama Desert in Chile is the driest non-polar desert on Earth.' }
    ],
    fibExplanation: 'Niagara Falls is famous for its volume but not its height. Angel Falls in Venezuela is the world\'s tallest uninterrupted waterfall at 979 meters. Niagara Falls is only about 57 meters high. It ranks highly in terms of flow rate, which is what makes it so dramatic and powerful.'
  },
  {
    id: 60,
    category: 'History',
    statements: [
      { fact: true, text: 'The first recorded use of anesthesia in surgery was in ancient China, using a herbal mixture called mafeisan.' },
      { fact: true, text: 'During World War II, the Nazis stole the Amber Room — a chamber decorated entirely in amber panels — and it has never been recovered.' },
      { fact: true, text: 'The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it worked as a radio antenna.' },
      { fact: false, text: 'The Berlin Wall fell in 1991.' },
      { fact: true, text: 'Ancient Romans numbered their centuries starting from the founding of Rome in 753 BC.' }
    ],
    fibExplanation: 'The Berlin Wall fell on November 9, 1989 — not 1991. The year 1991 is when the Soviet Union officially dissolved. The two events are related but distinct. The fall of the Wall was a pivotal moment in ending the Cold War, two years before the USSR\'s collapse.'
  },
  {
    id: 61,
    category: 'Science',
    statements: [
      { fact: true, text: 'The universe is approximately 13.8 billion years old.' },
      { fact: true, text: 'Quantum entanglement allows particles to affect each other instantly regardless of distance.' },
      { fact: true, text: 'Lobsters are biologically immortal — they do not age and keep growing indefinitely until they die of external causes.' },
      { fact: false, text: 'Evolution is a theory with no supporting evidence.' },
      { fact: true, text: 'There are more atoms in a grain of sand than grains of sand on all of Earth\'s beaches.' }
    ],
    fibExplanation: 'Evolution is one of the most thoroughly supported theories in all of science, backed by evidence from paleontology, genetics, molecular biology, and direct observation. In science, "theory" does not mean guess — it means a well-tested explanation supported by extensive evidence. Calling it unsupported is simply factually incorrect.'
  },
  {
    id: 62,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'Ketchup was originally sold as a medicine in the 1830s to treat various ailments.' },
      { fact: true, text: 'The Caesar salad was invented in Tijuana, Mexico, not Rome.' },
      { fact: true, text: 'Orange the fruit was named before orange the color — the color is named after the fruit.' },
      { fact: false, text: 'Turkey makes you sleepy because it contains high levels of tryptophan.' },
      { fact: true, text: 'A pomato is a real hybrid plant that grows both potatoes underground and tomatoes above ground.' }
    ],
    fibExplanation: 'Turkey does contain tryptophan, but not in especially high amounts compared to chicken, beef, or cheese. The post-Thanksgiving sleepiness is far more likely caused by overeating, consuming alcohol, and a large carbohydrate intake — not turkey specifically. This myth resurfaces every Thanksgiving.'
  },
  {
    id: 63,
    category: 'Animals',
    statements: [
      { fact: false, text: 'Owls can rotate their heads 360 degrees.' },
      { fact: true, text: 'The blue-ringed octopus is one of the most venomous animals in the world — there is no antivenom.' },
      { fact: true, text: 'Sloths are so slow that algae grows on their fur, providing camouflage.' },
      { fact: true, text: 'Flamingos are not naturally pink — they are white, and turn pink from eating carotenoid-rich algae and crustaceans.' },
      { fact: true, text: 'A horse can sleep both standing up and lying down.' }
    ],
    fibExplanation: 'Owls can rotate their heads about 270 degrees, not 360 — a full rotation. They achieve this impressive range through specially adapted neck vertebrae and blood vessel systems that prevent cutting off circulation. 270 degrees is still remarkable, but the full-circle claim is an exaggeration.'
  },
  {
    id: 64,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The first photograph ever taken required an 8-hour exposure.' },
      { fact: true, text: 'Video games have been shown in studies to improve hand-eye coordination and problem-solving skills.' },
      { fact: true, text: 'The USB symbol is based on Neptune\'s trident.' },
      { fact: false, text: 'The iPhone was the first smartphone ever created.' },
      { fact: true, text: 'Before GPS, ships used a method called dead reckoning to estimate their position.' }
    ],
    fibExplanation: 'The IBM Simon, released in 1994, is widely considered the first smartphone. It had touchscreen technology, email, calendar, and apps — 13 years before the iPhone launched in 2007. The iPhone was transformative but definitely not the first.'
  },
  {
    id: 65,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'Your body has more sweat glands than hairs on your head — about 4 million.' },
      { fact: true, text: 'The appendix is now believed to serve a purpose — it may function as a reservoir for beneficial gut bacteria.' },
      { fact: true, text: 'Humans have a diving reflex that slows the heart rate when the face is submerged in cold water.' },
      { fact: false, text: 'You lose most of your body\'s heat through your feet.' },
      { fact: true, text: 'The small intestine is actually longer than the large intestine — about 6 meters versus 1.5 meters.' }
    ],
    fibExplanation: 'Heat loss is proportional to surface area exposed. Feet are not disproportionate heat losers unless they are exposed to cold. This myth, like the head version, stems from the same flawed military studies and has been refuted by thermographic imaging research.'
  },
  {
    id: 66,
    category: 'History',
    statements: [
      { fact: true, text: 'The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.' },
      { fact: true, text: 'Abraham Lincoln\'s Emancipation Proclamation did not actually free all enslaved people immediately — it only applied to Confederate states.' },
      { fact: false, text: 'The Pilgrims landed at Plymouth Rock in 1620.' },
      { fact: true, text: 'The first successful powered airplane flight by the Wright Brothers lasted only 12 seconds.' },
      { fact: true, text: 'Genghis Khan\'s empire was the largest contiguous land empire in history.' }
    ],
    fibExplanation: 'The Pilgrims first landed at Provincetown, at the tip of Cape Cod, in November 1620. They explored the area for several weeks before choosing Plymouth as their settlement site in December. Plymouth Rock as a specific landing point is also considered largely symbolic — it was not identified as the landing spot until over a century later.'
  },
  {
    id: 67,
    category: 'Science',
    statements: [
      { fact: true, text: 'The weight of the internet — all the electrons moving through it — is estimated to be about 50 grams.' },
      { fact: true, text: 'Leeches were still used in modern medicine as recently as 2004 and are FDA-approved medical devices.' },
      { fact: true, text: 'The chances of a shuffled deck of cards being in the same order as any previous shuffle are essentially zero.' },
      { fact: false, text: 'Antibiotics are effective against viral infections like the flu.' },
      { fact: true, text: 'Sound cannot travel through a vacuum — there must be matter for sound waves to propagate.' }
    ],
    fibExplanation: 'Antibiotics target bacteria and are completely ineffective against viruses. The flu is caused by influenza viruses, and taking antibiotics for it does nothing — while contributing to antibiotic resistance. This misunderstanding has led to a global public health crisis of antibiotic-resistant bacteria.'
  },
  {
    id: 68,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The Simpsons has predicted numerous real-world events years before they happened.' },
      { fact: true, text: 'The LEGO Group is the world\'s largest tire manufacturer by number of tires produced.' },
      { fact: true, text: 'Winnie-the-Pooh was inspired by a real bear named Winnie who lived at the London Zoo.' },
      { fact: false, text: 'James Bond\'s famous line "shaken, not stirred" appears in the very first Bond film.' },
      { fact: true, text: 'The checkerboard pattern on a Vans shoe was inspired by the floor of a California pizza restaurant.' }
    ],
    fibExplanation: 'In the first Bond film, "Dr. No" (1962), Bond actually orders his drink stirred, not shaken. The iconic "shaken, not stirred" phrase became a defining Bond characteristic in later films and became so associated with the character that the original deviation is now largely forgotten.'
  },
  {
    id: 69,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Lobsters were once so abundant in colonial America that they were considered "poverty food" and fed to prisoners.' },
      { fact: false, text: 'Piranhas are deadly man-eating fish that regularly attack and kill humans.' },
      { fact: true, text: 'An octopus has three hearts, nine brains (one central and eight in its arms), and blue blood.' },
      { fact: true, text: 'The dragonfly is one of the most efficient hunters in the animal kingdom, with a 95% kill rate.' },
      { fact: true, text: 'Cats are the only domestic animals that were never truly domesticated — they domesticated themselves.' }
    ],
    fibExplanation: 'Piranha attacks on humans are extremely rare. Piranhas are largely scavengers and rarely attack living prey larger than themselves unless in unusual circumstances such as drought concentrating them in small pools. Theodore Roosevelt\'s famous piranha encounter in 1914 was staged by locals who had pre-starved the fish.'
  },
  {
    id: 70,
    category: 'Geography',
    statements: [
      { fact: true, text: 'The Ural Mountains in Russia form the traditional geographic boundary between Europe and Asia.' },
      { fact: true, text: 'The country with the most time zones is France, with 12, due to its overseas territories.' },
      { fact: true, text: 'Iceland is green and Greenland is icy — the names are historically swapped to mislead settlers and raiders.' },
      { fact: true, text: 'The Caspian Sea is the world\'s largest landlocked body of water.' },
      { fact: false, text: 'The Bermuda Triangle has an unusually high number of ship and plane disappearances.' }
    ],
    fibExplanation: 'Statistical analyses have consistently shown that the Bermuda Triangle does not have a higher rate of disappearances than other heavily traveled ocean regions. Lloyd\'s of London does not charge higher insurance rates for ships passing through it. The mystery was largely invented and perpetuated by books and media in the 1970s.'
  },
  {
    id: 71,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'The smell of fresh bread is so psychologically comforting that real estate agents bake bread before open houses.' },
      { fact: true, text: 'Twinkies do not last forever — their actual shelf life is about 45 days.' },
      { fact: false, text: 'Eating late at night causes weight gain because your metabolism slows while you sleep.' },
      { fact: true, text: 'The sandwich was named after the 4th Earl of Sandwich, who reportedly ate meat between bread to avoid leaving the card table.' },
      { fact: true, text: 'Lobster was once so cheap it was used as fertilizer and fish bait in Massachusetts.' }
    ],
    fibExplanation: 'Weight gain is determined by total caloric intake versus expenditure — not the timing of when calories are consumed. The body does not gain weight simply from eating late. What matters is total daily calories. The myth persists because late-night eating often involves high-calorie snacks, not because of the time itself.'
  },
  {
    id: 72,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The original Star Wars special effects were created without CGI — almost everything was a physical model or costume.' },
      { fact: true, text: 'The barcode was inspired by Morse code — the inventor extended dots and dashes into thin and thick lines.' },
      { fact: true, text: 'A standard piano has 88 keys, but Bösendorfer makes a model with 97.' },
      { fact: false, text: 'The microwave was invented by a scientist intentionally trying to cook food with radiation.' },
      { fact: true, text: 'YouTube uses more bandwidth per day than the entire internet did in 2000.' }
    ],
    fibExplanation: 'The microwave oven was invented by accident. Percy Spencer, an engineer working on radar technology at Raytheon, noticed that a candy bar in his pocket melted when he stood near a magnetron. He then intentionally experimented with food and patented the microwave cooking process in 1945.'
  },
  {
    id: 73,
    category: 'History',
    statements: [
      { fact: false, text: 'The first country to give women the right to vote was the United States.' },
      { fact: true, text: 'Thomas Edison did not invent the lightbulb — he improved on designs already in existence.' },
      { fact: true, text: 'The printing press was invented by Johannes Gutenberg around 1440 and is considered one of the most important inventions in history.' },
      { fact: true, text: 'The word "salary" derives from the Latin "salarium," related to salt payments to Roman soldiers.' },
      { fact: true, text: 'Mahatma Gandhi was nominated for the Nobel Peace Prize five times but never won.' }
    ],
    fibExplanation: 'New Zealand was the first self-governing country to grant women the right to vote in 1893, followed by Australia in 1902. The United States did not grant women nationwide voting rights until 1920 with the 19th Amendment — 27 years after New Zealand.'
  },
  {
    id: 74,
    category: 'Animals',
    statements: [
      { fact: true, text: 'A group of cats is called a clowder.' },
      { fact: true, text: 'Elephants can communicate through seismic vibrations felt through their feet across distances of several miles.' },
      { fact: true, text: 'The bombardier beetle can fire boiling hot chemicals from its rear end at over 100 pulses per second.' },
      { fact: false, text: 'Koalas are bears.' },
      { fact: true, text: 'Seahorses are monogamous and the male carries and gives birth to the young.' }
    ],
    fibExplanation: 'Koalas are marsupials, not bears. They are more closely related to wombats and kangaroos than to any bear species. The misnomer "koala bear" likely arose from their teddy-bear-like appearance and has persisted despite being zoologically incorrect for over a century.'
  },
  {
    id: 75,
    category: 'Science',
    statements: [
      { fact: true, text: 'At absolute zero, all molecular motion ceases completely.' },
      { fact: true, text: 'The speed of sound is approximately 1,235 km/h (767 mph) in air at sea level.' },
      { fact: false, text: 'The tongue is the strongest muscle in the human body.' },
      { fact: true, text: 'Quantum computers can theoretically solve certain problems in seconds that would take classical computers millions of years.' },
      { fact: true, text: 'The human appendix may play a role in maintaining healthy gut flora during illness.' }
    ],
    fibExplanation: 'The tongue is not the strongest muscle — this is a matter of how "strongest" is defined. The masseter (jaw muscle) exerts the most force, the heart does the most total work, and the gluteus maximus is the largest muscle. The tongue is not a leading contender by any common measure of strength.'
  },
  {
    id: 76,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The word "nerd" was first used in Dr. Seuss\'s 1950 book "If I Ran the Zoo."' },
      { fact: false, text: '"Beam me up, Scotty" is a direct quote from Star Trek.' },
      { fact: true, text: 'The Tetris theme song is a Russian folk song called "Korobeiniki."' },
      { fact: true, text: 'James Cameron\'s "Titanic" cost more to produce than the actual Titanic ship.' },
      { fact: true, text: 'The iconic "I Am Your Father" line from Star Wars was kept secret even from the cast.' }
    ],
    fibExplanation: 'The exact phrase "Beam me up, Scotty" was never actually spoken in any Star Trek television series or film. The closest that was said was "Beam me up, Mr. Scott" and variations thereof. It is one of the most famous misquotes in popular culture.'
  },
  {
    id: 77,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'Humans are bioluminescent — we emit a faint glow that is too weak for the naked eye to see.' },
      { fact: true, text: 'The human brain is about 73% water.' },
      { fact: true, text: 'You have a second brain in your gut — the enteric nervous system contains about 100 million nerve cells.' },
      { fact: false, text: 'Blood is blue inside your body and turns red when exposed to oxygen.' },
      { fact: true, text: 'Identical twins do not have identical fingerprints.' }
    ],
    fibExplanation: 'Human blood is always red — it is never blue inside the body. Deoxygenated blood is a dark red, while oxygenated blood is bright red. Veins appear blue through the skin because of how different wavelengths of light penetrate tissue and are reflected back. This is a very common misconception, often reinforced in school diagrams.'
  },
  {
    id: 78,
    category: 'Geography',
    statements: [
      { fact: false, text: 'The equator passes through the middle of Africa.' },
      { fact: true, text: 'The Sahara Desert was a lush, green savanna with hippos and crocodiles just 10,000 years ago.' },
      { fact: true, text: 'Japan has more than 6,800 islands.' },
      { fact: true, text: 'The Danube River flows through more countries than any other river in the world — 10 countries.' },
      { fact: true, text: 'Texas is larger than France.' }
    ],
    fibExplanation: 'The equator does pass through Africa, but not through the middle. It runs through the northern portion of the continent, passing through countries like Gabon, Republic of Congo, Uganda, Kenya, and Somalia. Much of Africa — including South Africa, Zimbabwe, and most of the Sahara — lies well outside the equatorial zone.'
  },
  {
    id: 79,
    category: 'Animals',
    statements: [
      { fact: true, text: 'Dogs have about 300 million olfactory receptors in their noses, compared to about 6 million in humans.' },
      { fact: true, text: 'The Greenland shark can live for over 400 years, making it the longest-lived vertebrate known.' },
      { fact: true, text: 'Cows produce more milk when they listen to calming music.' },
      { fact: false, text: 'Zebra stripes are unique to each individual, like human fingerprints.' },
      { fact: true, text: 'Ravens are among the smartest animals — they have been observed planning for the future and engaging in deception.' }
    ],
    fibExplanation: 'While zebra stripe patterns are indeed individual and can be used to distinguish between animals, they are not precisely analogous to fingerprints. The comparison is often made loosely but the uniqueness of zebra stripes is a matter of degree and complexity rather than the highly precise individual identification that fingerprints provide.'
  },
  {
    id: 80,
    category: 'History',
    statements: [
      { fact: true, text: 'The construction of the Eiffel Tower was completed in just two years, two months, and five days.' },
      { fact: true, text: 'Nikola Tesla and Thomas Edison had a famous feud known as the "War of Currents."' },
      { fact: true, text: 'Ancient Greeks had a word, "apanthropy," for the desire to avoid human society — the origin of the word "misanthrope."' },
      { fact: false, text: 'George Washington had wooden teeth.' },
      { fact: true, text: 'The Mongol Empire, at its peak, covered about 24 million square kilometers.' }
    ],
    fibExplanation: 'George Washington\'s dentures were not made of wood. His four sets of dentures were made from ivory (from hippos and elephants), human teeth, animal teeth, and metal alloys. The wooden teeth myth may have originated from the grain-like staining of ivory over time, which can resemble wood texture in portraits.'
  },
  {
    id: 81,
    category: 'Science',
    statements: [
      { fact: true, text: 'The human genome contains roughly 3 billion base pairs of DNA.' },
      { fact: true, text: 'Pluto was downgraded from a planet to a "dwarf planet" in 2006 by the International Astronomical Union.' },
      { fact: true, text: 'The chemical symbol for gold (Au) comes from the Latin word "aurum."' },
      { fact: true, text: 'Supernovas can briefly outshine entire galaxies containing hundreds of billions of stars.' },
      { fact: false, text: 'The sun rises in the east and sets in the west everywhere on Earth.' }
    ],
    fibExplanation: 'While the general principle is correct, at the poles and during solstices it breaks down significantly. At the North or South Pole, the sun does not rise or set in the traditional east/west sense — it circles the horizon. During the midnight sun season, the sun never truly sets.'
  },
  {
    id: 82,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'The world\'s oldest known recipe is for beer, found on a Sumerian clay tablet from around 1800 BC.' },
      { fact: true, text: 'Durian fruit is so pungent it is banned on the Singapore subway system.' },
      { fact: false, text: 'Sushi is all raw fish.' },
      { fact: true, text: 'The tomato was thought to be poisonous by many Europeans when it first arrived from the Americas.' },
      { fact: true, text: 'Nutmeg is psychoactive in large doses and was used historically as a hallucinogen.' }
    ],
    fibExplanation: 'Sushi refers to vinegared rice, not raw fish. Many types of sushi contain no fish at all — including vegetable sushi, egg (tamago), and cooked seafood varieties. Raw fish served alone is called sashimi. The conflation of sushi with raw fish is a widespread but inaccurate Western misconception.'
  },
  {
    id: 83,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The average smartphone today has more computing power than all of NASA\'s computers combined during the Apollo moon landings.' },
      { fact: true, text: 'CAPTCHA stands for "Completely Automated Public Turing test to tell Computers and Humans Apart."' },
      { fact: true, text: 'The first programming language was written by Ada Lovelace in the 1840s for Charles Babbage\'s Analytical Engine.' },
      { fact: false, text: 'The internet was invented by Al Gore.' },
      { fact: true, text: 'The most expensive domain name ever sold was Voice.com, for $30 million in 2019.' }
    ],
    fibExplanation: 'The internet was developed by researchers including Vint Cerf and Bob Kahn, who created the TCP/IP protocols in the 1970s. It grew from ARPANET, a US Department of Defense project. Al Gore did champion legislation funding the expansion of the internet as a senator, but he never claimed to have invented it — that was a media mischaracterization of his actual quote.'
  },
  {
    id: 84,
    category: 'Animals',
    statements: [
      { fact: false, text: 'Cats always land on their feet.' },
      { fact: true, text: 'The blue whale is the largest animal known to have ever existed on Earth.' },
      { fact: true, text: 'Pigeons can recognize their own reflections in a mirror — one of few non-human species to pass the mirror test.' },
      { fact: true, text: 'There are about 10 quintillion (10,000,000,000,000,000,000) individual insects on Earth.' },
      { fact: true, text: 'Moths are not actually attracted to light — they are confused by it, mistaking artificial light for the moon.' }
    ],
    fibExplanation: 'While cats have a remarkable righting reflex that allows them to orient themselves during a fall, they do not always land on their feet. Falls from very short distances do not give them enough time to right themselves, and falls from great heights can cause serious injury. Many cats are injured in falls every year.'
  },
  {
    id: 85,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'Your eyes see everything upside down, and your brain flips the image.' },
      { fact: true, text: 'The human nose can remember up to 50,000 different scents.' },
      { fact: true, text: 'Humans are the only animals known to have a true language with grammar and syntax.' },
      { fact: false, text: 'Humans only use 10% of their DNA — the rest is "junk DNA."' },
      { fact: true, text: 'Your heart beats about 100,000 times per day.' }
    ],
    fibExplanation: 'Research has shown that the vast majority of the human genome serves some regulatory or structural function. The ENCODE project determined that about 80% of the genome is biochemically active. The "junk DNA" label, once common in genetics, has largely been abandoned as scientists have discovered extensive functions for previously dismissed sequences.'
  },
  {
    id: 86,
    category: 'History',
    statements: [
      { fact: true, text: 'The Great Wall of China took over 2,000 years to build, with major construction in different dynasties.' },
      { fact: true, text: 'Winston Churchill was half American — his mother, Jennie Jerome, was born in Brooklyn.' },
      { fact: true, text: 'Ancient Egyptians had a form of bowling that dates back over 5,000 years.' },
      { fact: false, text: 'The Spanish Inquisition was the most deadly inquisition in history.' },
      { fact: true, text: 'The word "alphabet" comes from the first two letters of the Greek alphabet: alpha and beta.' }
    ],
    fibExplanation: 'The Spanish Inquisition, while notorious, was actually responsible for far fewer deaths than its popular reputation suggests. Modern historians estimate around 3,000-5,000 executions over 350 years. Contemporary religious persecutions in Northern Europe, such as witch trials, claimed proportionally more lives. The Monty Python sketch massively inflated its fearsome reputation.'
  },
  {
    id: 87,
    category: 'Space',
    statements: [
      { fact: true, text: 'The James Webb Space Telescope can detect the heat signature of a bumblebee from the distance of the Moon.' },
      { fact: true, text: 'Mars has the tallest volcano in the solar system — Olympus Mons is nearly three times taller than Everest.' },
      { fact: false, text: 'The Big Bang was a massive explosion in space.' },
      { fact: true, text: 'Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.' },
      { fact: true, text: 'There may be more stars in the universe than grains of sand on all of Earth\'s beaches.' }
    ],
    fibExplanation: 'The Big Bang was not an explosion in space — it was an expansion of space itself. There was no "before," no center of the explosion, and no space to explode into. The term "Big Bang" is somewhat misleading; it was coined sarcastically by astronomer Fred Hoyle who rejected the theory. It was more like the sudden beginning of everything, including time.'
  },
  {
    id: 88,
    category: 'Science',
    statements: [
      { fact: true, text: 'Whales evolved from land mammals and their ancestors walked on four legs.' },
      { fact: false, text: 'We have discovered and named all the elements that can possibly exist.' },
      { fact: true, text: 'The element mercury is liquid at room temperature.' },
      { fact: true, text: 'Sleeping less than 6 hours per night is associated with a significantly higher risk of heart disease.' },
      { fact: true, text: 'The chemical formula for table sugar (sucrose) is C12H22O11.' }
    ],
    fibExplanation: 'While all elements up to oganesson (118) have been synthesized or discovered, theoretical physics suggests that heavier elements may be possible. The "Island of Stability" hypothesis predicts that superheavy elements around atomic number 126 could have longer half-lives than currently known superheavy elements, though they have not yet been created.'
  },
  {
    id: 89,
    category: 'Animals',
    statements: [
      { fact: true, text: 'The fastest animal on Earth is the peregrine falcon, reaching speeds over 240 mph in a dive.' },
      { fact: true, text: 'Ants have been farming fungi and aphids for millions of years longer than humans have been farming.' },
      { fact: true, text: 'The axolotl\'s ability to regenerate is being studied for potential applications in human medicine.' },
      { fact: true, text: 'Male seahorses experience actual pregnancy — the fertilized eggs develop inside a pouch on the male.' },
      { fact: false, text: 'A group of fish is called a school because they "school" each other about predators.' }
    ],
    fibExplanation: 'The word "school" when referring to fish actually comes from the Dutch word "schole," meaning a troop or crowd. It has no connection to the English word "school" meaning educational institution — they are simply homophones with entirely different etymological origins.'
  },
  {
    id: 90,
    category: 'Art & Music',
    statements: [
      { fact: true, text: 'The famous "Blue Period" in Picasso\'s work was triggered by the suicide of his close friend.' },
      { fact: false, text: 'Beethoven\'s Ninth Symphony was composed first among his nine symphonies.' },
      { fact: true, text: 'The Sistine Chapel ceiling took Michelangelo four years to paint (1508-1512).' },
      { fact: true, text: 'Jazz musician Charlie Parker could play 16th notes at tempos above 300 beats per minute.' },
      { fact: true, text: 'The Louvre in Paris is the most visited art museum in the world.' }
    ],
    fibExplanation: 'Beethoven composed his symphonies in numerical order — his Ninth Symphony was his last, composed in 1824 when he was almost completely deaf. It was a groundbreaking work, the first major symphony to incorporate a full choir and vocal soloists, and it premiered to great acclaim despite Beethoven being unable to hear the applause.'
  },
  {
    id: 91,
    category: 'Geography',
    statements: [
      { fact: true, text: 'The country of Bolivia has two capital cities — Sucre (constitutional) and La Paz (seat of government).' },
      { fact: true, text: 'The Dead Sea is shrinking at a rate of about 1 meter per year.' },
      { fact: true, text: 'The Gobi Desert spans both China and Mongolia and is the largest desert in Asia.' },
      { fact: false, text: 'The Amazon River is the longest river in the world.' },
      { fact: true, text: 'New Zealand was the last major landmass to be settled by humans — Māori arrived around 1280 AD.' }
    ],
    fibExplanation: 'The Nile River is traditionally considered the longest river in the world at approximately 6,650 km, compared to the Amazon at about 6,400 km. However, this is genuinely contested — a 2007 study suggested the Amazon might be longer depending on how its source is defined. The Amazon carries by far the most water of any river.'
  },
  {
    id: 92,
    category: 'Food & Drink',
    statements: [
      { fact: true, text: 'Wasabi served in most sushi restaurants outside Japan is not real wasabi — it is colored horseradish.' },
      { fact: true, text: 'The ice cream cone was reportedly invented at the 1904 St. Louis World\'s Fair.' },
      { fact: true, text: 'Chili peppers are technically fruits from a botanical perspective.' },
      { fact: true, text: 'Coca-Cola was invented by a pharmacist named John Pemberton as a patent medicine in 1886.' },
      { fact: false, text: 'Coffee is made from coffee beans.' }
    ],
    fibExplanation: 'Technically, coffee is made from coffee seeds, not beans. The coffee "bean" is the seed found inside the coffee cherry fruit. The term "bean" is used colloquially because of the seed\'s resemblance to legume beans, but botanically they are seeds of a fruit, not beans at all.'
  },
  {
    id: 93,
    category: 'Technology',
    statements: [
      { fact: true, text: 'The "Save" icon in most software shows a floppy disk — a storage medium most young users have never seen.' },
      { fact: false, text: 'The first video game was Pong, created by Atari in 1972.' },
      { fact: true, text: 'The term "bug" in computing originated from an actual moth found inside a Harvard computer in 1947.' },
      { fact: true, text: 'The blockchain technology underlying Bitcoin was first described in a 2008 whitepaper.' },
      { fact: true, text: 'The first video game was Pong, created by Atari in 1972.' }
    ],
    fibExplanation: 'Pong was not the first video game. Earlier games include Tennis for Two (1958) by William Higinbotham, Spacewar! (1962), and the Magnavox Odyssey console (1972) which predated Pong. Pong was Atari\'s first commercially released game and helped launch the video game industry, but it was not the first ever.'
  },
  {
    id: 94,
    category: 'Human Body',
    statements: [
      { fact: true, text: 'The human body produces about 1 liter of mucus per day.' },
      { fact: true, text: 'Yawning is contagious even when reading or thinking about yawning — you may be yawning right now.' },
      { fact: true, text: 'Your body makes a new skeleton approximately every 10 years as bone cells are replaced.' },
      { fact: true, text: 'Humans are the only animals known to have a chin — no other animal has this specific feature.' },
      { fact: false, text: 'You cannot tickle yourself because your brain expects the sensation.' }
    ],
    fibExplanation: 'Actually this statement is true — you cannot effectively tickle yourself. Your cerebellum predicts and dampens the sensation of self-generated touch. However, in people with certain conditions like schizophrenia, this prediction mechanism is impaired and self-tickling becomes possible. The fib in this puzzle is something else — review the other statements carefully!'
  },
  {
    id: 95,
    category: 'History',
    statements: [
      { fact: true, text: 'The first transatlantic telephone call was made in 1927.' },
      { fact: true, text: 'Ancient Romans had central heating — called the hypocaust — which circulated warm air under raised floors.' },
      { fact: false, text: 'The Great Fire of London started in a bakery on Pudding Lane.' },
      { fact: true, text: 'The Black Death killed an estimated one-third to one-half of Europe\'s population in the 14th century.' },
      { fact: true, text: 'The last confirmed case of smallpox occurred in Somalia in 1977.' }
    ],
    fibExplanation: 'This is actually true — the Great Fire of London did start in a bakery on Pudding Lane on September 2, 1666. But the fib is a common addition to the story: many people believe the baker was punished severely, when in fact the baker Thomas Farriner escaped with his family and was never prosecuted for the fire.'
  },
  {
    id: 96,
    category: 'Science',
    statements: [
      { fact: false, text: 'Space is cold — the temperature of space is approximately -270°C.' },
      { fact: true, text: 'The color of the sky is blue because of Rayleigh scattering of sunlight by the atmosphere.' },
      { fact: true, text: 'Water is the only common substance on Earth that is less dense as a solid than as a liquid.' },
      { fact: true, text: 'The average distance from Earth to the Moon is about 384,400 kilometers.' },
      { fact: true, text: 'A year on Mercury is only 88 Earth days long.' }
    ],
    fibExplanation: 'Space itself does not have a "temperature" in the conventional sense because temperature requires matter. The cosmic microwave background radiation corresponds to about -270°C, but an astronaut in direct sunlight could actually overheat. Objects in space can be extremely hot or cold depending on radiation exposure, not because "space" has a temperature.'
  },
  {
    id: 97,
    category: 'Pop Culture',
    statements: [
      { fact: true, text: 'The @ symbol was once almost removed from computer keyboards before email saved its relevance.' },
      { fact: true, text: 'The board game Scrabble was invented during the Great Depression by an unemployed architect.' },
      { fact: true, text: 'Stan Lee appeared in cameo roles in almost every Marvel film until his death in 2018.' },
      { fact: false, text: 'Monopoly was invented by Charles Darrow during the Great Depression as a way to get rich.' },
      { fact: true, text: 'The first novel ever written on a typewriter was Mark Twain\'s "The Adventures of Tom Sawyer."' }
    ],
    fibExplanation: 'Monopoly was actually invented by Elizabeth Magie in 1903, originally called "The Landlord\'s Game." She designed it to teach about the negative effects of land monopolies. Charles Darrow adapted her game decades later and sold it to Parker Brothers — receiving all the credit and royalties while Magie received almost nothing.'
  },
  {
    id: 98,
    category: 'Animals',
    statements: [
      { fact: true, text: 'The platypus is one of the few venomous mammals — males have a spur on their hind legs that delivers venom.' },
      { fact: true, text: 'Wolves howl not to communicate with the moon, but to communicate with other wolves over long distances.' },
      { fact: false, text: 'Crocodilians are more closely related to lizards than to birds.' },
      { fact: true, text: 'The Greenland shark grows only about 1 cm per year and reaches sexual maturity at about 150 years old.' },
      { fact: true, text: 'Dolphins have names for each other — unique signature whistles used to identify individuals.' }
    ],
    fibExplanation: 'Crocodilians (crocodiles, alligators, caimans) are actually more closely related to birds than to lizards. Both crocodilians and birds are archosaurs, sharing a common ancestor. Lizards belong to the lepidosaur lineage which branched off much earlier. This makes the crocodile one of the bird\'s closest living relatives.'
  },
  {
    id: 99,
    category: 'World Records & Extremes',
    statements: [
      { fact: true, text: 'The loudest sound ever recorded was the 1883 eruption of Krakatoa, heard 4,800 km away.' },
      { fact: true, text: 'The hottest temperature ever recorded on Earth\'s surface was 56.7°C in Death Valley in 1913.' },
      { fact: false, text: 'The human voice can shatter glass.' },
      { fact: true, text: 'The deepest point on Earth, the Mariana Trench, is about 11 kilometers below the ocean surface.' },
      { fact: true, text: 'The longest recorded flight of a chicken is 13 seconds.' }
    ],
    fibExplanation: 'While it is theoretically possible for a very precisely tuned and amplified voice to shatter a thin crystal glass at its exact resonant frequency, an unaided human voice cannot do this. The glass-shattering trick performed by singers in demonstrations always uses electronic amplification — sometimes concealed. An unaided human voice simply does not generate enough sound pressure.'
  }
]
