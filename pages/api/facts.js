const getRandomFact = () => {
    const facts = [
        "In 1987 cats overtook dogs as the number one pet in America.",
    "Cats that live together sometimes rub each others heads to show that they have no intention of fighting."
    + " Young cats do this more often, especially when they are excited.",
    "Mother cats teach their kittens to use the litter box.",
    "To unsubscribe from catfacts, reply the following code: tj3G5de$se",
    "You gotta be kitten me! are you sure you want to unsubscribe? send YES or NO",
    "Invalid Command, CatFacts!",
    "The way you treat kittens in the early stages of it\"s life will render it\"s personality traits later in life.",
    "Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech , "
    + "and seems to enjoy human companionship.",
    "When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
    "Neutering a cat extends its life span by two or three years.",
    "To unsubscribe from catfacts, reply the following code: tj3G5de$se",
    "You gotta be kitten me! are you sure you want to unsubscribe? send YES or NO",
    "Invalid Command, CatFacts!",
    "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.",
    "Cats can not taste sweets.",
    "Cats must have fat in their diet because they cannot produce it on their own.",
    "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
    "Tylenol and chocolate are both poisionous to cats.",
    "Many cats cannot properly digest cows milk. Milk and milk products give them diarrhea.",
    "The average cat food meal is the equivalent to about five mice.",
    "Cats can get tapeworms from eating fleas. These worms live inside the cat forever, or until they are re"
    + "moved with medication. They reproduce by shedding a link from the end of their long bodies. This link c"
    + "rawls out the cat\"s anus, and sheds hundreds of eggs. These eggs are injested by flea larvae, and the "
    + "cycles continues. Humans may get these tapeworms too, but only if they eat infected fleas. Cats with ta"
    + "peworms should be dewormed by a veterinarian.",
    "Cats can get tapeworms from eating mice. If your cat catches a mouse it is best to take the prize away "
    + "from it.",
    "A form of AIDS exists in cats.",
    "The color of the points in Siamese cats is heat related. Cool areas are darker.",
    "Siamese kittens are born white because of the heat inside the mother\"s uterus before birth. This heat "
    + "keeps the kittens\" hair from darkening on the points.",
    "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident c"
    + "at is bathed regularly the allergic people tolerate it better.",
    "Studies now show that the allergen in cats is related to their scent glands. Cats have scent glands on "
    + "their faces and at the base of their tails. Entire male cats generate the most scent. If this secretion"
    + " from the scent glands is the allergen, allergic people should tolerate spayed female cats the best.",
    "Cats do not think that they are little people. They think that we are big cats. This influences their b"
    + "ehavior in many ways.",
    "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet o"
    + "r the cat dentist once a year.",
    "Many people fear catching a protozoan disease, Toxoplasmosis, from cats. This disease can cause illness"
    + " in the human, but more seriously, can cause birth defects in the unborn. Toxoplasmosis is a common dis"
    + "ease, sometimes spread through the feces of cats. It is caused most often from eating raw or rare beef."
    + " Pregnant women and people with a depressed immune system should not touch the cat litter box. Other th"
    + "an that, there is no reason that these people have to avoid cats.",
    "The ancestor of all domestic cats is the African Wild Cat which still exists today.",
    "In ancient Egypt, killing a cat was a crime punishable by death.",
    "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In"
    + " one ancient city, over 300,000 cat mummies were found.",
    "In the Middle Ages, during the Festival of Saint John, cats were burned alive in town squares.",
    "The first cat show was in 1871 at the Crystal Palace in London.",
    "Today there are about 100 distinct breeds of the domestic cat.",
    "Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Ea"
    + "rth\"s magnetic field. A cat taken far from its home can return to it. But if a cat\"s owners move far "
    + "from its home, the cat can\"t find them.",
    "Cats bury their feces to cover their trails from predators.",
    "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If y"
    + "ou poke the tail of a sleeping cat, it will respond accordingly.",
    "Besides smelling with their nose, cats can smell with an additional organ called the Jacobson\"s organ,"
    + " located in the upper surface of the mouth.",
    "The chlorine in fresh tap water irritates sensitive parts of the cat\"s nose. Let tap water sit for 24 "
    + "hours before giving it to a cat.",
    "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
    "Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
    "Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
    "The word 'cat' in various languages: French: chat; German: katze; Italian: gatto; Spanish/Portugese: ga"
    + "to; Yiddish: kats; Maltese: qattus; Swedish/Norwegian: katt; Dutch: kat; Icelandic: kottur; Greek: catt"
    + "a; Hindu: katas; Japanese:neko; Polish: kot; Ukranian: kotuk; Hawiian: popoki; Russian: koshka; Latin: "
    + "cattus; Egyptian: mau; Turkish: kedi; Armenian: Gatz; Chinese: mio; Arabic: biss; Indonesian: qitta; Bu"
    + "lgarian: kotka; Malay: kucing; Thai/Vietnamese: meo; Romanian: pisica; Lithuanian: katinas; Czech: kock"
    + "a; Slovak: macka; Armenian: gatz; Basque: catua; Estonian: kass; Finnish: kissa; Swahili: paka.",
    "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!",
    "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The yo"
    + "unger the cat is, the easier it will be for them to learn.",
    "Purring not always means happiness. Purring could mean a cat is in terrible pain such as during childbi"
    + "rth. Kitten will purr to their mother to let her know they are getting enough milk while nursing. Purri"
    + "ng is a process of inhaling and exhaling, usually performed while the mouth is closed. But don\"t worry"
    + ", if your cat is purring while your gently petting her and holding her close to you - that is a happy c"
    + "at!",
    "The catnip plant contains an oil called hepetalactone which does for cats what marijuana does to some p"
    + "eople. Not all cats react to it those that do appear to enter a trancelike state. A positive reaction t"
    + "akes the form of the cat sniffing the catnip, then licking, biting, chewing it, rub & rolling on it rep"
    + "eatedly, purring, meowing & even leaping in the air.",
    "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while"
    + " walking. All species of wild cats hold their talk horizontally or tucked between their legs while walk"
    + "ing.",
    "A happy cat holds her tail high and steady.",
    "Almost 10% of a cat\"s bones are in its tail, and the tail is used to maintain balance.",
    "Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever po"
    + "ssible.",
    "Baking chocolate is the most dangerous chocolate to your cat.",
    "You check your cats pulse on the inside of the back thigh, where the leg joins to the body. Normal for "
    + "cats: 110-170 beats per minute.",
    "Jaguars are the only big cats that don\"t roar.",
    "A cats field of vision is about 185 degrees.",
    "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers whi"
    + "le others exercise their claws vertically.",
    "The Maine Coone is the only native American long haired breed.",
    "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
    "Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.",
    "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I"
    + "n the cat family, only cheetahs cannot retract their claws.",
    "Not every cat gets 'high' from catnip. Whether or not a cat responds to it depends upon a recessive gen"
    + "e: no gene, no joy.",
    "A cat can sprint at about thirty-one miles per hour.",
    "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mo"
    + "urning.",
    "Cats have been domesticated for half as long as dogs have been.",
    "A cat\"s whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to wa"
    + "lk through.",
    "A cat can spend five or more hours a day grooming himself.",
    "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hair"
    + "s between their paw pads.",
    "Both humans and cats have identical regions in the brain responsible for emotion.",
    "To unsubscribe from catfacts, reply the following code: tj3G5de$se",
    "You gotta be kitten me! are you sure you want to unsubscribe? send YES or NO",
    "Invalid Command, CatFacts!",
    "A cat\"s brain is more similar to a man\"s brain than that of a dog.",
    "A cat has more bones than a human; humans have 206, and the cat - 230.",
    "Cats have 30 vertebrae--5 more than humans have.",
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "Cats have over 20 muscles that control their ears.",
    "A group of cats is called a clowder.",
    "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
    "Cats sleep 70% of their lives.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "A cat has ran for mayor of Mexico City in 2013.",
    "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
    "When cats grimace, they are usually 'taste-scenting.' They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
    "Cats can not taste sweetness.",
    "Owning a cat can reduce the risk of stroke and heart attack by a third.",
    "Wikipedia has a recording of a cat meowing because why not?",
    "The worlds largest cat measured 48.5 inches long. https://www.youtube.com/watch?v=gc5M0aGc_EI",
    "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypts pharaohs.",
    "A cats purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.",
    "Similarly, the frequency of a domestic cats purr is the same at which muscles and bones repair themselves.",
    "Adult cats only meow to communicate with humans.",
    "The worlds richest cat is worth $13 million after his human passed away and left her fortune to him.",
    "Your cat recognizes your voice but just acts too cool to care (probably because they are).",
    "Cats are often lactose intolerant, so stop giving them milk!",
    "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    "The technical term for a cat’s hairball is a “bezoar.”",
    "A group of cats is called a “clowder.”",
    "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
    "Cats make about 100 different sounds. Dogs make only about 10.",
    "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
    "Approximately 24 cat skins can make a coat.",
    "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
    "During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.",
    "During the Middle Ages, cats were associated with withcraft, and on St. John’s Day, people all over Europe would stuff them into sacks and toss the cats into bonfires. On holy days, people celebrated by tossing cats from church towers.",
    "The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.",
    "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.",
    "The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy.",
    "Approximately 40,000 people are bitten by cats in the U.S. annually.",
    "Cats are the world's most popular pets, outnumbering dogs by as many as three to one",
    "Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.",
    "According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.",
    "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.",
    "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.",
    "A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat’s scent.",
    "Researchers are unsure exactly how a cat purrs. Most veterinarians believe that a cat purrs by vibrating vocal folds deep in the throat. To do this, a muscle in the larynx opens and closes the air passage about 25 times per second.",
    "When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice.",
    "In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and carted off to be used by farmers in England and the U.S. for fertilizer.",
    "Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.",
    "Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities.",
    "The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the Proailurus, which means “first cat” in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.",
    "The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg).",
    "Cats have 300 million neurons; dogs have about 160 million",
    "A cat’s brain is biologically more similar to a human brain than it is to a dog’s. Both humans and cats have identical regions in their brains that are responsible for emotions.",
    "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head.",
    "Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an “M” for Mohammed on top of their heads because Mohammad would often rest his hand on the cat’s head.",
    "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky.",
    "The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.",
    "The smallest pedigreed cat is a Singapura, which can weigh just 4 lbs (1.8 kg), or about five large cans of cat food. The largest pedigreed cats are Maine Coon cats, which can weigh 25 lbs (11.3 kg), or nearly twice as much as an average cat weighs.",
    "Some cats have survived falls of over 65 feet (20 meters), due largely to their “righting reflex.” The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.",
    "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes.",
    "Researchers believe the word “tabby” comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city.",
    "Cats have \"nine lives\" thanks to a flexible spine and powerful leg and back muscles",
    "A cat can jump up to five times its own height in a single bound.",
    "Cats hate the water because their fur does not insulate well when it’s wet. The Turkish Van, however, is one cat that likes swimming. Bred in central Asia, its coat has a unique texture that makes it water resistant.",
    "The Egyptian Mau is probably the oldest breed of cat. In fact, the breed is so ancient that its name is the Egyptian word for “cat.”",
    "The first commercially cloned pet was a cat named \"Little Nicky.\" He cost his owner $50,000, making him one of the most expensive cats ever.",
    "A cat usually has about 12 whiskers on each side of its face.",
    "A cat’s eyesight is both better and worse than humans. It is better because cats can see in much dimmer light and they have a wider peripheral view. It’s worse because they don’t see color as well as humans do. Scientists believe grass appears red to cats.",
    "Spanish-Jewish folklore recounts that Adam’s first wife, Lilith, became a black vampire cat, sucking the blood from sleeping babies. This may be the root of the superstition that a cat will smother a sleeping baby or suck out the child’s breath.",
    "Perhaps the most famous comic cat is the Cheshire Cat in Lewis Carroll’s Alice in Wonderland. With the ability to disappear, this mysterious character embodies the magic and sorcery historically associated with cats.",
    "The smallest wildcat today is the Black-footed cat. The females are less than 20 inches (50 cm) long and can weigh as little as 2.5 lbs (1.2 kg).",
    "On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
    "Most cats sleep around 16 hours a day",
    "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
    "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called “ear furnishings.”",
    "The ability of a cat to find its way home is called “psi-traveling.” Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses.",
    "Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy.",
    "The world’s rarest coffee, Kopi Luwak, comes from Indonesia where a wildcat known as the luwak lives. The cat eats coffee berries and the coffee beans inside pass through the stomach. The beans are harvested from the cat’s dung heaps and then cleaned and roasted. Kopi Luwak sells for about $500 for a 450 g (1 lb) bag.",
    "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.",
    "Cats don't actually meow at each other, just at humans. Cats typically will spit, purr, and hiss at other cats.",
    "Like humans, cats tend to favor one paw over another",
    "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.",
    "A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.",
    "All cats have claws, and all except the cheetah sheath them when at rest.",
    "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it.",
    "A cat lover is called an Ailurophilia (Greek: cat+lover).",
    "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding.",
    "One reason that kittens sleep so much is because a growth hormone is released only during sleep.",
    "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).",
    "The heaviest cat on record is Himmy, a Tabby from Queensland, Australia. He weighed nearly 47 pounds (21 kg). He died at the age of 10.",
    "The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to August 6, 2005, three days after her 38th birthday. A cat typically can live up to 20 years, which is equivalent to about 96 human years.",
    "The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.",
    "Approximately 1/3 of cat owners think their pets are able to read their minds.",
    "The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.",
    "A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.",
    "In the 1750s, Europeans introduced cats into the Americas to control pests.",
    "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.",
    "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot’s Old Possum’s Book of Practical Cats.",
    "The normal body temperature of a cat is between 100.5 ° and 102.5 °F. A cat is sick if its temperature goes below 100 ° or above 103 °F.",
    "A cat has 230 bones in its body. A human has 206. A cat has no collarbone, so it can fit through any opening the size of its head.",
    "Cats control the outer ear using 32 muscles; humans use 6",
    "Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees.",
    "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
    "If they have ample water, cats can tolerate temperatures up to 133 °F.",
    "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that’s for human consumption can cause malnutrition.",
    "A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.",
    "A cat’s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.",
    "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens.",
    "Relative to its body size, the clouded leopard has the biggest canines of all animals’ canines. Its dagger-like teeth can be as long as 1.8 inches (4.5 cm).",
    "Cats spend nearly 1/3 of their waking hours cleaning themselves.",
    "Grown cats have 30 teeth. Kittens have about 26 temporary teeth, which they lose when they are about 6 months old.",
    "Cat paws act as tempetature regulators, shock absorbers, hunting and grooming tools, sensors, and more",
    "Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.",
    "A cat called Dusty has the known record for the most kittens. She had more than 420 kittens in her lifetime.",
    "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k).",
    "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can.",
    "In contrast to dogs, cats have not undergone major changes during their domestication process.",
    "A female cat is called a queen or a molly.",
    "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white.",
    "There are up to 60 million feral cats in the United States alone.",
    "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.",
    "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).",
    "Cats have supersonic hearing",
    "In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on.",
    "The most expensive cat was an Asian Leopard cat (ALC)-Domestic Shorthair (DSH) hybrid named Zeus. Zeus, who is 90% ALC and 10% DSH, has an asking price of £100,000 ($154,000).",
    "The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/.06 km) and survived.",
    "Rome has more homeless cats per square mile than any other city in the world.",
    "The richest cat is Blackie who was left £15 million by his owner, Ben Rea.",
    "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
    "Cats can drink seawater."
    ]

    return facts
}

const facts = (req, res) => {
    res.status(200).json(getRandomFact())
}