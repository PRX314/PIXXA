
const pizzeClassiche = [
  {
    nome: "Margherita",
    ingredienti: ["Pomodoro", "Mozzarella", "Basilico"]
  },
  {
    nome: "Marinara",
    ingredienti: ["Pomodoro", "Aglio", "Origano"]
  },
  {
    nome: "Margherita",
    ingredienti: ["Pomodoro", "Mozzarella", "Basilico", "Olio extravergine"],
    note: "La regina delle pizze. Nata a Napoli, rappresenta i colori dell’Italia."
  },
  {
    nome: "Marinara",
    ingredienti: ["Pomodoro", "Aglio", "Origano", "Olio extravergine"],
    note: "La pizza più antica, senza formaggio. Semplice, intensa, napoletana."
  },
  {
    nome: "Diavola",
    ingredienti: ["Pomodoro", "Mozzarella", "Salame piccante"],
    note: "Piccante e saporita, amatissima dai fan della Margherita con carattere."
  },
  {
    nome: "Capricciosa",
    ingredienti: ["Pomodoro", "Mozzarella", "Prosciutto cotto", "Funghi", "Carciofi", "Olive"],
    note: "Un mix di sapori diversi che funziona alla grande."
  },
  {
    nome: "Quattro Stagioni",
    ingredienti: ["Pomodoro", "Mozzarella", "Prosciutto", "Funghi", "Carciofi", "Olive"],
    note: "Stessi ingredienti della Capricciosa, ma disposti a spicchi."
  },
  {
    nome: "Quattro Formaggi",
    ingredienti: ["Mozzarella", "Gorgonzola", "Fontina", "Parmigiano"],
    note: "Base bianca cremosa e filante, regno del formaggio fuso."
  },
  {
    nome: "Prosciutto e Funghi",
    ingredienti: ["Pomodoro", "Mozzarella", "Prosciutto cotto", "Funghi champignon"],
    note: "Equilibrata e classica. Una delle più richieste."
  },
  {
    nome: "Napoli",
    ingredienti: ["Pomodoro", "Mozzarella", "Acciughe", "Origano", "Capperi (facoltativi)"],
    note: "Saporita e marina. Un classico napoletano per veri amanti del salato."
  },
  {
    nome: "Würstel e Patatine",
    ingredienti: ["Mozzarella", "Würstel", "Patatine fritte"],
    note: "La pizza dell'infanzia. Amatissima dai bambini (e non solo)."
  },
  {
    nome: "Tonno e Cipolla",
    ingredienti: ["Pomodoro", "Mozzarella", "Tonno", "Cipolla bianca o rossa"],
    note: "La classica mediterranea dal gusto intenso."
  },
  {
    nome: "Boscaiola",
    ingredienti: ["Mozzarella", "Funghi", "Salsiccia", "Panna"],
    note: "Rustica e cremosa. Nata nei boschi, amatissima ovunque."
  },
  {
    nome: "Frutti di Mare",
    ingredienti: ["Pomodoro", "Frutti di mare misti", "Prezzemolo", "Aglio"],
    note: "Sapore di mare puro. Da mangiare con forchetta e coltello."
  },
  {
    nome: "Vegetariana",
    ingredienti: ["Pomodoro", "Mozzarella", "Verdure grigliate (zucchine, melanzane, peperoni)"],
    note: "Colorata, leggera, gustosa e senza carne."
  },
  {
    nome: "Crudo e Rucola",
    ingredienti: ["Mozzarella", "Prosciutto crudo", "Rucola", "Scaglie di grana"],
    note: "Servita a crudo, fresca ed elegante. Perfetta in estate."
  },
  {
    nome: "Bufalina",
    ingredienti: ["Pomodoro", "Mozzarella di bufala", "Basilico"],
    note: "Versione nobile della Margherita. Mozzarella aggiunta a crudo dopo la cottura."
  },
{
  nome: "Parmigiana",
  ingredienti: ["Pomodoro", "Mozzarella", "Melanzane fritte", "Parmigiano", "Basilico"],
  note: "Ispirata alla parmigiana di melanzane. Ricca, filante e intramontabile."
},
{
  nome: "Speck e Brie",
  ingredienti: ["Mozzarella", "Speck", "Brie", "Rucola (opzionale)"],
  note: "Un mix nordico e cremoso molto apprezzato, specialmente in inverno."
},
{
  nome: "Zola e Noci",
  ingredienti: ["Mozzarella", "Gorgonzola", "Noci"],
  note: "Semplice ma elegante, con il contrasto tra la forza dello zola e la croccantezza delle noci."
},
{
  nome: "Funghi",
  ingredienti: ["Pomodoro", "Mozzarella", "Funghi champignon"],
  note: "Una delle più semplici e amate, spesso base per combinazioni più ricche."
},
{
  nome: "Salame",
  ingredienti: ["Pomodoro", "Mozzarella", "Salame dolce o piccante"],
  note: "Una variante classica e gustosa, alternativa alla Diavola."
},
{
  nome: "Tirolese",
  ingredienti: ["Mozzarella", "Speck", "Funghi", "Scamorza affumicata"],
  note: "Pizza affumicata e saporita, tipica del nord Italia."
},
{
  nome: "Salsiccia e Friarielli",
  ingredienti: ["Mozzarella", "Salsiccia", "Friarielli (cime di rapa)", "Aglio", "Olio evo"],
  note: "Icona napoletana, sapore forte e deciso. Da forno a legna."
},
{
  nome: "Bianca al Rosmarino",
  ingredienti: ["Olio extravergine", "Rosmarino", "Sale grosso"],
  note: "Semplice e fragrante. La base perfetta per un antipasto o accompagnamento."
},
{
  nome: "Crostino",
  ingredienti: ["Mozzarella", "Prosciutto cotto"],
  note: "Minimal ma irresistibile. Versione pizza del classico toast italiano."
},
{
  nome: "Pugliese",
  ingredienti: ["Pomodoro", "Mozzarella", "Cipolla rossa", "Origano", "Olive nere"],
  note: "Con cipolla dolce e sapori mediterranei. Una delle bianche più diffuse nel sud."
},
{
  nome: "Tonno e Mais",
  ingredienti: ["Mozzarella", "Tonno", "Mais dolce"],
  note: "Una combo anni ‘90 che ha spopolato per la sua dolcezza e cremosità."
},
{
  nome: "Bresaola e Grana",
  ingredienti: ["Mozzarella", "Bresaola", "Rucola", "Scaglie di grana"],
  note: "Fresca e proteica, amatissima da chi cerca leggerezza senza rinunciare al gusto."
},
{
  nome: "Rustica",
  ingredienti: ["Mozzarella", "Salsiccia", "Patate", "Rosmarino"],
  note: "Perfetta in inverno, saporita e sostanziosa. La regina delle pizze al taglio rustiche."
},
{
  nome: "Carbonara",
  ingredienti: ["Mozzarella", "Guanciale", "Crema d’uovo", "Pecorino", "Pepe"],
  note: "Ispirata al celebre piatto romano. Ormai un classico anche in pizzeria."
},
{
  nome: "Würstel e Funghi",
  ingredienti: ["Pomodoro", "Mozzarella", "Würstel", "Funghi"],
  note: "Semplice, perfetta per i bambini. Una pizza da mensa scolastica e cuore caldo."
},
{
  nome: "Montanara (versione al forno)",
  ingredienti: ["Pomodoro", "Mozzarella", "Grana", "Basilico"],
  note: "Non fritta, ma cotta in forno: omaggio alla classica montanara partenopea."
},
{
  nome: "Tricolore",
  ingredienti: ["Pomodoro", "Mozzarella", "Rucola", "Pomodorini", "Grana"],
  note: "Freschissima e patriottica. I tre colori d’Italia sulla base bianca."
},
{
  nome: "Prosciutto Crudo",
  ingredienti: ["Pomodoro", "Mozzarella", "Prosciutto crudo"],
  note: "Una delle pizze più ordinate al mondo. Da servire con crudo messo a crudo!"
},
{
  nome: "Funghi Porcini",
  ingredienti: ["Mozzarella", "Funghi porcini", "Prezzemolo", "Aglio"],
  note: "Profumata e pregiata. La trovi spesso in stagione o come variante gourmet."
},
{
  nome: "Gamberetti e Zucchine",
  ingredienti: ["Mozzarella", "Gamberetti", "Zucchine", "Prezzemolo"],
  note: "Delicata e marina, amata da chi cerca gusto senza troppi eccessi."
},
{
  nome: "Pizza Romana",
  ingredienti: ["Pomodoro", "Mozzarella", "Acciughe", "Capperi", "Origano"],
  note: "Simile alla Napoli, ma con un tocco più aromatico grazie all’origano abbondante."
},
{
  nome: "Pizza Ortolana",
  ingredienti: ["Pomodoro", "Mozzarella", "Melanzane", "Zucchine", "Peperoni"],
  note: "Versione classica della vegetariana, con verdure a fette o grigliate."
},
{
  nome: "Pizza al Salame Dolce",
  ingredienti: ["Pomodoro", "Mozzarella", "Salame dolce italiano"],
  note: "Una delle pizze più richieste negli anni ‘90. Gustosa e semplice."
},
{
  nome: "Pizza al Salame Piccante",
  ingredienti: ["Pomodoro", "Mozzarella", "Salame piccante calabrese"],
  note: "Variante della Diavola, molto usata nel nord Italia con salame tagliato fine."
},
{
  nome: "Pizza Patate e Salsiccia",
  ingredienti: ["Mozzarella", "Patate a fette", "Salsiccia", "Rosmarino"],
  note: "Rustica e amatissima nelle panetterie del centro-sud. Piatto unico travestito da pizza."
},
{
  nome: "Pizza al Pesto",
  ingredienti: ["Mozzarella", "Pesto di basilico", "Pomodorini", "Grana"],
  note: "Versione ligure gourmet. Il pesto si aggiunge a fine cottura per non rovinarne il profumo."
},
{
  nome: "Pizza al Gorgonzola",
  ingredienti: ["Mozzarella", "Gorgonzola", "Noci (opzionale)"],
  note: "Semplice e intensa. Spesso è la base per molte bianche con carattere."
},
{
  nome: "Pizza Bianca con Prosciutto",
  ingredienti: ["Mozzarella", "Prosciutto cotto", "Olio evo"],
  note: "Una delle bianche più essenziali. La trovi anche nei forni e nei bar."
},
{
  nome: "Pizza con Uovo",
  ingredienti: ["Pomodoro", "Mozzarella", "Uovo intero cotto in forno", "Pepe nero"],
  note: "Ispirata alla Bismarck, si trova spesso tra le pizze speciali. Molto proteica!"
},
{
  nome: "Pizza con Spinaci e Ricotta",
  ingredienti: ["Mozzarella", "Spinaci", "Ricotta", "Grana"],
  note: "Leggera e cremosa. Molto ordinata da chi vuole una pizza “verde” ma nutriente."
}
];
