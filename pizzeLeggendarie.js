const pizzeLeggendarie = [
  {
    nome: "Sfincione Palermitano",
    ingredienti: ["Impasto alto", "Pomodoro", "Cipolla", "Acciughe", "Pangrattato", "Caciocavallo"],
    provenienza: "Palermo, Sicilia",
    note: "La cipolla è stufata lentamente e il pangrattato viene insaporito con acciughe e olio."
  },
  {
    nome: "Pizza Chiena",
    ingredienti: ["Salame", "Uova", "Formaggio", "Pasta frolla salata"],
    provenienza: "Campania",
    note: "Tradizionale pizza pasquale ripiena, tipica del beneventano."
  },
  {
    nome: "Pizza con Cime di Rapa e Salsiccia",
    ingredienti: ["Mozzarella", "Cime di rapa", "Salsiccia", "Peperoncino"],
    provenienza: "Puglia",
    note: "Versione pizzata di uno dei piatti più amati del Sud."
  },
  {
    nome: "Pizza alla Nduja",
    ingredienti: ["Pomodoro", "Mozzarella", "Nduja di Spilinga", "Cipolla rossa"],
    provenienza: "Calabria",
    note: "Piccante e sapida, con la nduja che fonde e invade ogni morso."
  },
  {
    nome: "Pizza Fichi e Prosciutto",
    ingredienti: ["Fichi freschi", "Prosciutto crudo", "Mozzarella", "Rucola"],
    provenienza: "Centro Italia",
    note: "Un perfetto equilibrio tra dolcezza e sapidità."
  },
  {
    nome: "Pizza al Nero di Seppia",
    ingredienti: ["Impasto al nero di seppia", "Gamberetti", "Zucchine", "Aglio"],
    provenienza: "Coste del Sud Italia",
    note: "Scura, marina, elegante e saporita."
  },
  {
    nome: "Pizza con Porchetta e Rosmarino",
    ingredienti: ["Mozzarella", "Porchetta affettata", "Rosmarino"],
    provenienza: "Lazio / Umbria",
    note: "Profuma di sagra e ricorda i panini rustici di un tempo."
  },
  {
    nome: "Pizza all'Aglio Orsino",
    ingredienti: ["Mozzarella", "Aglio orsino", "Olio extravergine", "Fior di latte"],
    provenienza: "Appennino Centrale",
    note: "L’aglio selvatico primaverile dona un profumo delicato e unico."
  },
  {
    nome: "Pizza al Tartufo Nero",
    ingredienti: ["Mozzarella", "Tartufo nero", "Crema di funghi", "Parmigiano"],
    provenienza: "Umbria",
    note: "Una pizza da re: intensa, aromatica, inconfondibile."
  },
  {
    nome: "Pizza alla Carbonara",
    ingredienti: ["Mozzarella", "Guanciale", "Crema d’uovo", "Pecorino", "Pepe"],
    provenienza: "Roma, Lazio",
    note: "Con crema versata a fine cottura e guanciale croccante, come vuole la tradizione."
  },
{
  nome: "Pizza alla Bismarck",
  ingredienti: ["Mozzarella", "Pomodoro", "Uovo al centro", "Prosciutto cotto"],
  provenienza: "Nord Italia",
  note: "Ispirata alla passione del cancelliere tedesco per le uova: semplice e d’effetto."
},
{
  nome: "Pizza con Scarola",
  ingredienti: ["Scarola", "Olive nere", "Uvetta", "Pinoli", "Acciughe"],
  provenienza: "Napoli, Campania",
  note: "Agrodolce, racchiusa tra due strati d’impasto. Specialità natalizia partenopea."
},
{
  nome: "Pizza Rianata",
  ingredienti: ["Pomodoro", "Acciughe", "Aglio", "Origano", "Pecorino"],
  provenienza: "Trapani, Sicilia",
  note: "Il suo nome viene dall’uso abbondante di origano: rustica, intensa, siciliana al 100%."
},
{
  nome: "Pizza Estiva alla Caprese",
  ingredienti: ["Mozzarella di bufala", "Pomodorini freschi", "Basilico", "Olio evo"],
  provenienza: "Campania",
  note: "Servita fredda su base bianca o appena tiepida. Un’insalata su pizza!"
},
{
  nome: "Pizza con Lardo di Colonnata",
  ingredienti: ["Base bianca", "Lardo IGP", "Rosmarino"],
  provenienza: "Toscana",
  note: "Il lardo viene posato appena sfornata: si scioglie e profuma come burro speziato."
},
{
  nome: "Pizza con Cipolle di Tropea",
  ingredienti: ["Mozzarella", "Cipolla rossa di Tropea", "Origano", "Olio evo"],
  provenienza: "Calabria",
  note: "Dolce e delicata, una delle pizze più amate nella costa ionica."
},
{
  nome: "Pizza alla Norma",
  ingredienti: ["Pomodoro", "Melanzane fritte", "Ricotta salata", "Basilico"],
  provenienza: "Catania, Sicilia",
  note: "Come la pasta alla Norma, ma su base di pizza: melanzana e ricotta in perfetto equilibrio."
},
{
  nome: "Pizza al Formaggio di Fossa",
  ingredienti: ["Mozzarella", "Formaggio di fossa", "Noci", "Miele (opzionale)"],
  provenienza: "Emilia-Romagna / Marche",
  note: "Profonda e stagionata. Il formaggio stagionato sotto terra ha un gusto unico, perfetto con frutta secca."
},
{
  nome: "Pizza con Patate e Rosmarino",
  ingredienti: ["Mozzarella", "Patate a fette", "Rosmarino", "Sale grosso", "Olio evo"],
  provenienza: "Centro Italia",
  note: "Una delle bianche più semplici e amate. Le patate si ammorbidiscono creando una crosta dorata."
},
{
  nome: "Pizza Rustica di Pasquetta",
  ingredienti: ["Uova sode", "Salame", "Formaggio", "Pasta sfoglia"],
  provenienza: "Centro-Sud Italia",
  note: "Servita nei picnic pasquali, è un mix tra pizza e torta rustica. Ogni morso sa di primavera."
},
{
  nome: "La Pizzata",
  ingredienti: ["Pomodoro", "Mozzarella", "Salame piccante", "Cipolla", "Origano", "Peperoncino"],
  provenienza: "Napoli, Campania",
  note: "Pizzata = pizza carica, saporita e ignorante al punto giusto. Nasce nei forni rionali e conquista con intensità."
},
{
  nome: "Focaccia di Recco",
  ingredienti: ["Pasta sottilissima", "Formaggio fresco (Stracchino)"],
  provenienza: "Recco, Liguria",
  note: "Non è una pizza ma è un capolavoro: due sfoglie finissime che racchiudono il formaggio fuso. Croccante e cremosa."
},
{
  nome: "Montanarina Classica",
  ingredienti: ["Impasto fritto", "Pomodoro", "Parmigiano", "Basilico"],
  provenienza: "Napoli, Campania",
  note: "Mini pizza fritta tonda. Uno dei cibi da strada più iconici e irresistibili della cucina napoletana."
},
{
  nome: "Montanarina Ricca",
  ingredienti: ["Impasto fritto", "Pomodoro", "Ricotta salata", "Salsiccia", "Basilico"],
  provenienza: "Napoli, Campania",
  note: "Versione 'da festa' della montanarina. Il contrasto tra ricotta e pomodoro si arricchisce con salsiccia sbriciolata."
},
{
  nome: "Pizza ai Broccoli e Salsiccia",
  ingredienti: ["Mozzarella", "Broccoli", "Salsiccia", "Aglio", "Peperoncino"],
  provenienza: "Lazio / Campania",
  note: "Piatto casalingo tradizionale portato su pizza. Comfort food da forno a legna."
},
{
  nome: "Pizza con Zucca e Gorgonzola",
  ingredienti: ["Mozzarella", "Crema di zucca", "Gorgonzola", "Noci"],
  provenienza: "Nord Italia",
  note: "Dolce e cremosa, bilanciata dal sapore pungente del gorgonzola. Pizza d'autunno elegante e corposa."
},
{
  nome: "Pizza con Alici e Burrata",
  ingredienti: ["Pomodoro", "Alici", "Burrata", "Prezzemolo"],
  provenienza: "Puglia / Campania",
  note: "L’alice sapida viene smorzata dalla burrata fresca. Va servita calda con burrata fredda a crudo."
},
{
  nome: "Pizza al Castelmagno",
  ingredienti: ["Mozzarella", "Castelmagno", "Noci", "Timo"],
  provenienza: "Piemonte",
  note: "Il Castelmagno, formaggio DOP delle valli piemontesi, regala note erbacee e consistenza cremosa. Per intenditori."
},
{
  nome: "Pizza con Paté di Olive Taggiasche",
  ingredienti: ["Mozzarella", "Paté di olive", "Pomodorini", "Origano"],
  provenienza: "Liguria",
  note: "Saporita e mediterranea, è una fusione tra pizza e focaccia ligure. Il paté viene spalmato sulla base a crudo o cotto."
},
{
  nome: "Pizza al Ragù Bianco",
  ingredienti: ["Mozzarella", "Ragù bianco di maiale", "Rosmarino", "Parmigiano"],
  provenienza: "Toscana / Emilia",
  note: "Ragù senza pomodoro cotto lentamente con vino bianco e aromi. Una pizza rustica che profuma di cucina della nonna."
},
{
  nome: "Pizzata con Acciughe e Capperi",
  ingredienti: ["Pomodoro", "Acciughe sotto sale", "Capperi", "Aglio", "Origano", "Olio evo"],
  provenienza: "Sud Italia",
  note: "Pizzata rustica e sapida. Variante amata nelle panetterie di paese, perfetta con un impasto alto e ben lievitato."
},
{
  nome: "Pizza con Cipolla Bianca e Tonno",
  ingredienti: ["Mozzarella", "Cipolla bianca", "Tonno", "Origano"],
  provenienza: "Lazio / Sicilia",
  note: "Una bianca di mare, fresca e intensa. Tonno sott’olio e cipolla dolce creano un contrasto delicato e aromatico."
},
{
  nome: "Pizza 'Nduja e Miele",
  ingredienti: ["Mozzarella", "Nduja", "Miele", "Peperoncino"],
  provenienza: "Calabria gourmet",
  note: "Il piccante della 'nduja incontra la dolcezza del miele: esplosiva, moderna, amatissima nei locali street food."
},
{
  nome: "Pizza con Cavolo Nero e Salsiccia",
  ingredienti: ["Mozzarella", "Cavolo nero", "Salsiccia", "Aglio", "Olio evo"],
  provenienza: "Toscana",
  note: "Ispirata alla ribollita. Il cavolo nero viene saltato e abbraccia la salsiccia su una base rustica."
},
{
  nome: "Pizza Speck e Brie",
  ingredienti: ["Mozzarella", "Speck", "Brie", "Rucola"],
  provenienza: "Nord Italia",
  note: "Scioglievole e affumicata. Il brie aggiunge cremosità, lo speck croccante regala profondità."
},
{
  nome: "Pizza alle Pere e Pecorino",
  ingredienti: ["Mozzarella", "Pere a fette", "Pecorino", "Noci", "Miele"],
  provenienza: "Centro Italia",
  note: "Tradizione contadina reinterpretata in chiave pizza. Dolce, salata, croccante e cremosa."
},
{
  nome: "Pizza con Pomodorini Secchi e Ricotta Salata",
  ingredienti: ["Mozzarella", "Pomodori secchi", "Ricotta salata", "Basilico"],
  provenienza: "Sicilia",
  note: "La sapidità della ricotta stagionata si unisce al concentrato di sole dei pomodori secchi."
},
{
  nome: "Pizza ai Carciofi e Salame Piccante",
  ingredienti: ["Mozzarella", "Carciofi", "Salame piccante", "Scaglie di grana"],
  provenienza: "Centro-Sud",
  note: "Insolita ma bilanciatissima. I carciofi morbidi bilanciano il salame piccante e il grana a crudo."
},
{
  nome: "Pizza con Rucola e Grana",
  ingredienti: ["Mozzarella", "Rucola fresca", "Grana a scaglie", "Pomodorini"],
  provenienza: "Tutta Italia",
  note: "Una delle pizze bianche più richieste: fresca, elegante, perfetta anche nei mesi caldi."
},
{
  nome: "Pizza con Friggione",
  ingredienti: ["Cipolla stufata", "Pomodoro", "Lardo", "Impasto rustico"],
  provenienza: "Bologna, Emilia-Romagna",
  note: "Ispirata al 'friggione bolognese', è una pizza golosa con cipolla cotta lentamente e lardo sciolto."
}
];
