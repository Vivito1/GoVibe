const paises = {
  "Alemanha": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Alemão",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 13500,
    "visitas_anuais": "37.5 milhões",
    "principais_cidades": [
      "Berlim",
      "Munique",
      "Hamburgo",
    ],
    "porcentagem_recomendacao": 90,
  },
  "Angola": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Português",
    "moeda": "Kwanza (AOA)",
    "custo_vida_reais": 4900,
    "visitas_anuais": "0.2 milhão",
    "principais_cidades": [
      "Luanda",
      "Benguela",
      "Lubango",
    ],
    "porcentagem_recomendacao": 60,
  },
  "Argentina": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Peso Argentino (ARS)",
    "custo_vida_reais": 3900,
    "visitas_anuais": "7.4 milhões",
    "principais_cidades": [
      "Buenos Aires",
      "Córdoba",
      "Mendoza",
    ],
    "porcentagem_recomendacao": 86,
  },
  "Arábia Saudita": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Riyal Saudita (SAR)",
    "custo_vida_reais": 6700,
    "visitas_anuais": "18 milhões",
    "principais_cidades": [
      "Riade",
      "Jidá",
      "Meca",
    ],
    "porcentagem_recomendacao": 72,
  },
  "Austrália": {
    "localizacao": "Oceania",
    "hemisferio": "Sul",
    "idioma": "Inglês",
    "moeda": "Dólar Australiano (AUD)",
    "custo_vida_reais": 9700,
    "visitas_anuais": "9.5 milhões",
    "principais_cidades": [
      "Sydney",
      "Melbourne",
      "Brisbane",
    ],
    "porcentagem_recomendacao": 92,
  },
  "Bangladesh": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Bengali",
    "moeda": "Taka (BDT)",
    "custo_vida_reais": 2600,
    "visitas_anuais": "0.3 milhão",
    "principais_cidades": [
      "Daca",
      "Chittagong",
      "Khulna",
    ],
    "porcentagem_recomendacao": 55,
  },
  "Bolívia": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Boliviano (BOB)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "1.1 milhão",
    "principais_cidades": [
      "La Paz",
      "Santa Cruz de la Sierra",
      "Cochabamba",
    ],
    "porcentagem_recomendacao": 77,
  },
  "Botsuana": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Inglês e Tswana",
    "moeda": "Pula (BWP)",
    "custo_vida_reais": 4100,
    "visitas_anuais": "0.3 milhão",
    "principais_cidades": [
      "Gaborone",
      "Francistown",
      "Maun",
    ],
    "porcentagem_recomendacao": 70,
  },
  "Brasil": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Português",
    "moeda": "Real (BRL)",
    "custo_vida_reais": 4500,
    "visitas_anuais": "6.3 milhões",
    "principais_cidades": [
      "Rio de Janeiro",
      "São Paulo",
      "Salvador",
    ],
    "porcentagem_recomendacao": 92,
  },
  "Butão": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Dzongkha",
    "moeda": "Ngultrum (BTN)",
    "custo_vida_reais": 3500,
    "visitas_anuais": "0.07 milhão",
    "principais_cidades": [
      "Thimphu",
      "Paro",
      "Punakha",
    ],
    "porcentagem_recomendacao": 85,
  },
  "Cabo Verde": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Português",
    "moeda": "Escudo cabo-verdiano (CVE)",
    "custo_vida_reais": 4200,
    "visitas_anuais": "0.8 milhão",
    "principais_cidades": [
      "Praia",
      "Mindelo",
      "Santa Maria",
    ],
    "porcentagem_recomendacao": 80,
  },
  "Camarões": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Francês e Inglês",
    "moeda": "Franco CFA (XAF)",
    "custo_vida_reais": 3500,
    "visitas_anuais": "0.9 milhão",
    "principais_cidades": [
      "Yaoundé",
      "Dualá",
      "Garoua",
    ],
    "porcentagem_recomendacao": 65,
  },
  "Camboja": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Khmer",
    "moeda": "Riel (KHR)",
    "custo_vida_reais": 2800,
    "visitas_anuais": "6.6 milhões",
    "principais_cidades": [
      "Phnom Penh",
      "Siem Reap",
      "Sihanoukville",
    ],
    "porcentagem_recomendacao": 83,
  },
  "Canadá": {
    "localizacao": "América do Norte",
    "hemisferio": "Norte",
    "idioma": "Inglês e Francês",
    "moeda": "Dólar Canadense (CAD)",
    "custo_vida_reais": 11000,
    "visitas_anuais": "22 milhões",
    "principais_cidades": [
      "Toronto",
      "Vancouver",
      "Montreal",
    ],
    "porcentagem_recomendacao": 90,
  },
  "Catar": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Riyal do Catar (QAR)",
    "custo_vida_reais": 8700,
    "visitas_anuais": "2.1 milhões",
    "principais_cidades": [
      "Doha",
      "Al Wakrah",
      "Al Khor",
    ],
    "porcentagem_recomendacao": 78,
  },
  "Chile": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Peso Chileno (CLP)",
    "custo_vida_reais": 5100,
    "visitas_anuais": "4.5 milhões",
    "principais_cidades": [
      "Santiago",
      "Valparaíso",
      "San Pedro de Atacama",
    ],
    "porcentagem_recomendacao": 87,
  },
  "China": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Mandarim",
    "moeda": "Yuan (CNY)",
    "custo_vida_reais": 5200,
    "visitas_anuais": "65.7 milhões",
    "principais_cidades": [
      "Pequim",
      "Xangai",
      "Guangzhou",
    ],
    "porcentagem_recomendacao": 84,
  },
  "Colômbia": {
    "localizacao": "América do Sul",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Peso Colombiano (COP)",
    "custo_vida_reais": 3900,
    "visitas_anuais": "4.5 milhões",
    "principais_cidades": [
      "Bogotá",
      "Cartagena",
      "Medellín",
    ],
    "porcentagem_recomendacao": 82,
  },
  "Coreia do Sul": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Coreano",
    "moeda": "Won sul-coreano (KRW)",
    "custo_vida_reais": 6800,
    "visitas_anuais": "17.5 milhões",
    "principais_cidades": [
      "Seul",
      "Busan",
      "Incheon",
    ],
    "porcentagem_recomendacao": 89,
  },
  "Costa Rica": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Colón costa-riquenho (CRC)",
    "custo_vida_reais": 5300,
    "visitas_anuais": "3.1 milhões",
    "principais_cidades": [
      "San José",
      "Liberia",
      "Alajuela",
    ],
    "porcentagem_recomendacao": 91,
  },
  "Costa do Marfim": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Francês",
    "moeda": "Franco CFA (XOF)",
    "custo_vida_reais": 3300,
    "visitas_anuais": "1.6 milhão",
    "principais_cidades": [
      "Abidjan",
      "Yamoussoukro",
      "Bouaké",
    ],
    "porcentagem_recomendacao": 68,
  },
  "Cuba": {
    "localizacao": "Caribe",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Peso Cubano (CUP)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "4 milhões",
    "principais_cidades": [
      "Havana",
      "Santiago de Cuba",
      "Trinidad",
    ],
    "porcentagem_recomendacao": 80,
  },
  "Dinamarca": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Dinamarquês",
    "moeda": "Coroa dinamarquesa (DKK)",
    "custo_vida_reais": 12000,
    "visitas_anuais": "12.5 milhões",
    "principais_cidades": [
      "Copenhague",
      "Aarhus",
      "Odense",
    ],
    "porcentagem_recomendacao": 93,
  },
  "Egito": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Libra egípcia (EGP)",
    "custo_vida_reais": 2900,
    "visitas_anuais": "11.7 milhões",
    "principais_cidades": [
      "Cairo",
      "Alexandria",
      "Luxor",
    ],
    "porcentagem_recomendacao": 85,
  },
  "El Salvador": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Dólar Americano (USD)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "2.5 milhões",
    "principais_cidades": [
      "San Salvador",
      "Santa Ana",
      "La Libertad",
    ],
    "porcentagem_recomendacao": 76,
  },
  "Emirados Árabes": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Dirham dos EAU (AED)",
    "custo_vida_reais": 8800,
    "visitas_anuais": "22 milhões",
    "principais_cidades": [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
    ],
    "porcentagem_recomendacao": 94,
  },
  "Equador": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Dólar Americano (USD)",
    "custo_vida_reais": 3500,
    "visitas_anuais": "1.7 milhão",
    "principais_cidades": [
      "Quito",
      "Guayaquil",
      "Cuenca",
    ],
    "porcentagem_recomendacao": 81,
  },
  "Escócia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Inglês e Gaélico Escocês",
    "moeda": "Libra Esterlina (GBP)",
    "custo_vida_reais": 10800,
    "visitas_anuais": "3.5 milhões",
    "principais_cidades": [
      "Edimburgo",
      "Glasgow",
      "Inverness",
    ],
    "porcentagem_recomendacao": 88,
  },
  "Espanha": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 7500,
    "visitas_anuais": "83.7 milhões",
    "principais_cidades": [
      "Madri",
      "Barcelona",
      "Sevilha",
    ],
    "porcentagem_recomendacao": 93,
  },
  "Estados Unidos": {
    "localizacao": "América do Norte",
    "hemisferio": "Norte",
    "idioma": "Inglês",
    "moeda": "Dólar Americano (USD)",
    "custo_vida_reais": 14500,
    "visitas_anuais": "79.3 milhões",
    "principais_cidades": [
      "Nova York",
      "Los Angeles",
      "Chicago",
    ],
    "porcentagem_recomendacao": 95,
  },
  "Filipinas": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Filipino e Inglês",
    "moeda": "Peso Filipino (PHP)",
    "custo_vida_reais": 2900,
    "visitas_anuais": "5.4 milhões",
    "principais_cidades": [
      "Manila",
      "Cebu",
      "Davao",
    ],
    "porcentagem_recomendacao": 82,
  },
  "Finlândia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Finlandês e Sueco",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 11500,
    "visitas_anuais": "3 milhões",
    "principais_cidades": [
      "Helsinque",
      "Turku",
      "Tampere",
    ],
    "porcentagem_recomendacao": 91,
  },
  "Gana": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Inglês",
    "moeda": "Cedi Ganês (GHS)",
    "custo_vida_reais": 3200,
    "visitas_anuais": "1.1 milhão",
    "principais_cidades": [
      "Acra",
      "Kumasi",
      "Tamale",
    ],
    "porcentagem_recomendacao": 70,
  },
  "Grécia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Grego",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 7100,
    "visitas_anuais": "31.3 milhões",
    "principais_cidades": [
      "Atenas",
      "Salônica",
      "Heraclião",
    ],
    "porcentagem_recomendacao": 92,
  },
  "Guatemala": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Quetzal (GTQ)",
    "custo_vida_reais": 3000,
    "visitas_anuais": "2.6 milhões",
    "principais_cidades": [
      "Cidade da Guatemala",
      "Antígua",
      "Quetzaltenango",
    ],
    "porcentagem_recomendacao": 75,
  },
  "Guiné-Bissau": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Português",
    "moeda": "Franco CFA (XOF)",
    "custo_vida_reais": 2600,
    "visitas_anuais": "0.05 milhão",
    "principais_cidades": [
      "Bissau",
      "Bafatá",
      "Gabú",
    ],
    "porcentagem_recomendacao": 58,
  },
  "Haiti": {
    "localizacao": "Caribe",
    "hemisferio": "Norte",
    "idioma": "Francês e Crioulo Haitiano",
    "moeda": "Gourde (HTG)",
    "custo_vida_reais": 2800,
    "visitas_anuais": "0.5 milhão",
    "principais_cidades": [
      "Porto Príncipe",
      "Cap-Haïtien",
      "Les Cayes",
    ],
    "porcentagem_recomendacao": 60,
  },
  "Honduras": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Lempira (HNL)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "2.2 milhões",
    "principais_cidades": [
      "Tegucigalpa",
      "San Pedro Sula",
      "La Ceiba",
    ],
    "porcentagem_recomendacao": 72,
  },
  "Ilhas Fiji": {
    "localizacao": "Oceania",
    "hemisferio": "Sul",
    "idioma": "Inglês e Fijiano",
    "moeda": "Dólar de Fiji (FJD)",
    "custo_vida_reais": 4700,
    "visitas_anuais": "0.9 milhão",
    "principais_cidades": [
      "Suva",
      "Nadi",
      "Lautoka",
    ],
    "porcentagem_recomendacao": 85,
  },
  "Ilhas Malvinas": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Inglês",
    "moeda": "Libra das Malvinas (FKP)",
    "custo_vida_reais": 5500,
    "visitas_anuais": "0.005 milhão",
    "principais_cidades": [
      "Stanley",
    ],
    "porcentagem_recomendacao": 66,
  },
  "Indonésia": {
    "localizacao": "Ásia",
    "hemisferio": "Sul",
    "idioma": "Indonésio",
    "moeda": "Rupia (IDR)",
    "custo_vida_reais": 3000,
    "visitas_anuais": "16.1 milhões",
    "principais_cidades": [
      "Jacarta",
      "Bali (Denpasar)",
      "Yogyakarta",
    ],
    "porcentagem_recomendacao": 89,
  },
  "Iraque": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe e Curdo",
    "moeda": "Dinar Iraquiano (IQD)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "1.5 milhão",
    "principais_cidades": [
      "Bagdá",
      "Erbil",
      "Basra",
    ],
    "porcentagem_recomendacao": 55,
  },
  "Irlanda": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Inglês e Irlandês",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 12500,
    "visitas_anuais": "11.3 milhões",
    "principais_cidades": [
      "Dublin",
      "Cork",
      "Galway",
    ],
    "porcentagem_recomendacao": 91,
  },
  "Irã": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Persa (Farsi)",
    "moeda": "Rial Iraniano (IRR)",
    "custo_vida_reais": 2800,
    "visitas_anuais": "5.9 milhões",
    "principais_cidades": [
      "Teerã",
      "Isfahan",
      "Shiraz",
    ],
    "porcentagem_recomendacao": 70,
  },
  "Islândia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Islandês",
    "moeda": "Coroa Islandesa (ISK)",
    "custo_vida_reais": 13500,
    "visitas_anuais": "2.3 milhões",
    "principais_cidades": [
      "Reykjavik",
      "Akureyri",
      "Hafnarfjörður",
    ],
    "porcentagem_recomendacao": 90,
  },
  "Israel": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Hebraico e Árabe",
    "moeda": "Novo Shekel Israelense (ILS)",
    "custo_vida_reais": 9700,
    "visitas_anuais": "4.6 milhões",
    "principais_cidades": [
      "Tel Aviv",
      "Jerusalém",
      "Haifa",
    ],
    "porcentagem_recomendacao": 88,
  },
  "Itália": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Italiano",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 9400,
    "visitas_anuais": "58.3 milhões",
    "principais_cidades": [
      "Roma",
      "Veneza",
      "Florença",
    ],
    "porcentagem_recomendacao": 95,
  },
  "Iêmen": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Rial Iemenita (YER)",
    "custo_vida_reais": 2400,
    "visitas_anuais": "0.05 milhão",
    "principais_cidades": [
      "Sana'a",
      "Áden",
      "Taiz",
    ],
    "porcentagem_recomendacao": 45,
  },
  "Jamaica": {
    "localizacao": "Caribe",
    "hemisferio": "Norte",
    "idioma": "Inglês",
    "moeda": "Dólar Jamaicano (JMD)",
    "custo_vida_reais": 3800,
    "visitas_anuais": "2.5 milhões",
    "principais_cidades": [
      "Kingston",
      "Montego Bay",
      "Ocho Rios",
    ],
    "porcentagem_recomendacao": 82,
  },
  "Japão": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Japonês",
    "moeda": "Iene (JPY)",
    "custo_vida_reais": 9800,
    "visitas_anuais": "31.9 milhões",
    "principais_cidades": [
      "Tóquio",
      "Quioto",
      "Osaka",
    ],
    "porcentagem_recomendacao": 96,
  },
  "Laos": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Laociano",
    "moeda": "Kip (LAK)",
    "custo_vida_reais": 2500,
    "visitas_anuais": "4.7 milhões",
    "principais_cidades": [
      "Vientiane",
      "Luang Prabang",
      "Pakse",
    ],
    "porcentagem_recomendacao": 75,
  },
  "Líbano": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Libra Libanesa (LBP)",
    "custo_vida_reais": 4300,
    "visitas_anuais": "1.9 milhão",
    "principais_cidades": [
      "Beirute",
      "Trípoli",
      "Byblos",
    ],
    "porcentagem_recomendacao": 77,
  },
  "Maldivas": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Dhivehi",
    "moeda": "Rufiyaa Maldiva (MVR)",
    "custo_vida_reais": 7200,
    "visitas_anuais": "1.6 milhão",
    "principais_cidades": [
      "Malé",
      "Maafushi",
      "Hulhumalé",
    ],
    "porcentagem_recomendacao": 95,
  },
  "Malásia": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Malaio",
    "moeda": "Ringgit Malaio (MYR)",
    "custo_vida_reais": 3700,
    "visitas_anuais": "26.1 milhões",
    "principais_cidades": [
      "Kuala Lumpur",
      "George Town",
      "Johor Bahru",
    ],
    "porcentagem_recomendacao": 87,
  },
  "Marrocos": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Árabe e Berbere",
    "moeda": "Dirham Marroquino (MAD)",
    "custo_vida_reais": 4100,
    "visitas_anuais": "12.9 milhões",
    "principais_cidades": [
      "Marrakech",
      "Casablanca",
      "Fez",
    ],
    "porcentagem_recomendacao": 88,
  },
  "Mianmar": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Birmanês",
    "moeda": "Kyat (MMK)",
    "custo_vida_reais": 2500,
    "visitas_anuais": "4.4 milhões",
    "principais_cidades": [
      "Yangon",
      "Mandalay",
      "Naypyidaw",
    ],
    "porcentagem_recomendacao": 74,
  },
  "Moçambique": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Português",
    "moeda": "Metical (MZN)",
    "custo_vida_reais": 2900,
    "visitas_anuais": "2 milhões",
    "principais_cidades": [
      "Maputo",
      "Beira",
      "Nampula",
    ],
    "porcentagem_recomendacao": 70,
  },
  "México": {
    "localizacao": "América do Norte",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Peso Mexicano (MXN)",
    "custo_vida_reais": 4100,
    "visitas_anuais": "45 milhões",
    "principais_cidades": [
      "Cidade do México",
      "Cancún",
      "Guadalajara",
    ],
    "porcentagem_recomendacao": 89,
  },
  "Namíbia": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Inglês",
    "moeda": "Dólar Namíbio (NAD)",
    "custo_vida_reais": 3600,
    "visitas_anuais": "1.1 milhão",
    "principais_cidades": [
      "Windhoek",
      "Swakopmund",
      "Walvis Bay",
    ],
    "porcentagem_recomendacao": 72,
  },
  "Nepal": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Nepalês",
    "moeda": "Rupia Nepalesa (NPR)",
    "custo_vida_reais": 2700,
    "visitas_anuais": "1.2 milhão",
    "principais_cidades": [
      "Katmandu",
      "Pokhara",
      "Lalitpur",
    ],
    "porcentagem_recomendacao": 84,
  },
  "Nicarágua": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Córdoba (NIO)",
    "custo_vida_reais": 2900,
    "visitas_anuais": "1.4 milhão",
    "principais_cidades": [
      "Manágua",
      "Granada",
      "León",
    ],
    "porcentagem_recomendacao": 75,
  },
  "Nigéria": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Inglês",
    "moeda": "Naira (NGN)",
    "custo_vida_reais": 3200,
    "visitas_anuais": "2.3 milhões",
    "principais_cidades": [
      "Lagos",
      "Abuja",
      "Kano",
    ],
    "porcentagem_recomendacao": 66,
  },
  "Noruega": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Norueguês",
    "moeda": "Coroa Norueguesa (NOK)",
    "custo_vida_reais": 13800,
    "visitas_anuais": "6.1 milhões",
    "principais_cidades": [
      "Oslo",
      "Bergen",
      "Trondheim",
    ],
    "porcentagem_recomendacao": 92,
  },
  "Nova Zelândia": {
    "localizacao": "Oceania",
    "hemisferio": "Sul",
    "idioma": "Inglês e Maori",
    "moeda": "Dólar Neozelandês (NZD)",
    "custo_vida_reais": 9400,
    "visitas_anuais": "3.9 milhões",
    "principais_cidades": [
      "Auckland",
      "Wellington",
      "Queenstown",
    ],
    "porcentagem_recomendacao": 91,
  },
  "Omã": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Rial Omanense (OMR)",
    "custo_vida_reais": 7200,
    "visitas_anuais": "4.1 milhões",
    "principais_cidades": [
      "Mascate",
      "Salalah",
      "Sohar",
    ],
    "porcentagem_recomendacao": 80,
  },
  "Palestina": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Shekel Israelense (ILS) e Dinar Jordaniano (JOD)",
    "custo_vida_reais": 3300,
    "visitas_anuais": "0.7 milhão",
    "principais_cidades": [
      "Ramallah",
      "Belém",
      "Hebron",
    ],
    "porcentagem_recomendacao": 68,
  },
  "Panamá": {
    "localizacao": "América Central",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Balboa (PAB) e Dólar Americano (USD)",
    "custo_vida_reais": 4500,
    "visitas_anuais": "2.5 milhões",
    "principais_cidades": [
      "Cidade do Panamá",
      "Colón",
      "David",
    ],
    "porcentagem_recomendacao": 85,
  },
  "Papua-Nova Guiné": {
    "localizacao": "Oceania",
    "hemisferio": "Sul",
    "idioma": "Inglês, Tok Pisin, Hiri Motu",
    "moeda": "Kina (PGK)",
    "custo_vida_reais": 3700,
    "visitas_anuais": "0.2 milhão",
    "principais_cidades": [
      "Port Moresby",
      "Lae",
      "Mount Hagen",
    ],
    "porcentagem_recomendacao": 62,
  },
  "Paquistão": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Urdu e Inglês",
    "moeda": "Rupia Paquistanesa (PKR)",
    "custo_vida_reais": 2500,
    "visitas_anuais": "1.9 milhão",
    "principais_cidades": [
      "Islamabad",
      "Karachi",
      "Lahore",
    ],
    "porcentagem_recomendacao": 70,
  },
  "Paraguai": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol e Guarani",
    "moeda": "Guarani (PYG)",
    "custo_vida_reais": 2700,
    "visitas_anuais": "1.3 milhão",
    "principais_cidades": [
      "Assunção",
      "Ciudad del Este",
      "Encarnación",
    ],
    "porcentagem_recomendacao": 73,
  },
  "Peru": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Sol (PEN)",
    "custo_vida_reais": 3200,
    "visitas_anuais": "4.4 milhões",
    "principais_cidades": [
      "Lima",
      "Cusco",
      "Arequipa",
    ],
    "porcentagem_recomendacao": 85,
  },
  "Polônia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Polonês",
    "moeda": "Zloty (PLN)",
    "custo_vida_reais": 6200,
    "visitas_anuais": "21 milhões",
    "principais_cidades": [
      "Varsóvia",
      "Cracóvia",
      "Gdansk",
    ],
    "porcentagem_recomendacao": 88,
  },
  "Portugal": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Português",
    "moeda": "Euro (EUR)",
    "custo_vida_reais": 6500,
    "visitas_anuais": "28 milhões",
    "principais_cidades": [
      "Lisboa",
      "Porto",
      "Faro",
    ],
    "porcentagem_recomendacao": 94,
  },
  "Quênia": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Suaíli e Inglês",
    "moeda": "Xelim Queniano (KES)",
    "custo_vida_reais": 3200,
    "visitas_anuais": "2.4 milhões",
    "principais_cidades": [
      "Nairóbi",
      "Mombaça",
      "Kisumu",
    ],
    "porcentagem_recomendacao": 80,
  },
  "República Dominicana": {
    "localizacao": "Caribe",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Peso Dominicano (DOP)",
    "custo_vida_reais": 4100,
    "visitas_anuais": "7.2 milhões",
    "principais_cidades": [
      "Santo Domingo",
      "Punta Cana",
      "Santiago de los Caballeros",
    ],
    "porcentagem_recomendacao": 90,
  },
  "Ruanda": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Quiniaruanda, Francês e Inglês",
    "moeda": "Franco Ruandês (RWF)",
    "custo_vida_reais": 3000,
    "visitas_anuais": "1.3 milhão",
    "principais_cidades": [
      "Kigali",
      "Butare",
      "Gisenyi",
    ],
    "porcentagem_recomendacao": 75,
  },
  "Rússia": {
    "localizacao": "Europa e Ásia",
    "hemisferio": "Norte",
    "idioma": "Russo",
    "moeda": "Rublo Russo (RUB)",
    "custo_vida_reais": 4800,
    "visitas_anuais": "24.4 milhões",
    "principais_cidades": [
      "Moscou",
      "São Petersburgo",
      "Novosibirsk",
    ],
    "porcentagem_recomendacao": 83,
  },
  "Senegal": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Francês",
    "moeda": "Franco CFA (XOF)",
    "custo_vida_reais": 3400,
    "visitas_anuais": "1.5 milhão",
    "principais_cidades": [
      "Dacar",
      "Thiès",
      "Saint-Louis",
    ],
    "porcentagem_recomendacao": 74,
  },
  "Singapura": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Inglês, Malaio, Mandarim e Tâmil",
    "moeda": "Dólar de Singapura (SGD)",
    "custo_vida_reais": 9500,
    "visitas_anuais": "19.1 milhões",
    "principais_cidades": [
      "Singapura",
    ],
    "porcentagem_recomendacao": 96,
  },
  "Sri Lanka": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Cingalês e Tâmil",
    "moeda": "Rúpia do Sri Lanka (LKR)",
    "custo_vida_reais": 3200,
    "visitas_anuais": "2.3 milhões",
    "principais_cidades": [
      "Colombo",
      "Kandy",
      "Galle",
    ],
    "porcentagem_recomendacao": 83,
  },
  "Suécia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Sueco",
    "moeda": "Coroa Sueca (SEK)",
    "custo_vida_reais": 11800,
    "visitas_anuais": "7.4 milhões",
    "principais_cidades": [
      "Estocolmo",
      "Gotemburgo",
      "Malmö",
    ],
    "porcentagem_recomendacao": 91,
  },
  "Suíça": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Alemão, Francês, Italiano, Romanche",
    "moeda": "Franco Suíço (CHF)",
    "custo_vida_reais": 14500,
    "visitas_anuais": "11.8 milhões",
    "principais_cidades": [
      "Zurique",
      "Genebra",
      "Berna",
    ],
    "porcentagem_recomendacao": 95,
  },
  "São Tomé e Príncipe": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Português",
    "moeda": "Dobra (STN)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "0.05 milhão",
    "principais_cidades": [
      "São Tomé",
      "Santo António",
      "Neves",
    ],
    "porcentagem_recomendacao": 72,
  },
  "Síria": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Libra Síria (SYP)",
    "custo_vida_reais": 2000,
    "visitas_anuais": "0.2 milhão",
    "principais_cidades": [
      "Damasco",
      "Aleppo",
      "Homs",
    ],
    "porcentagem_recomendacao": 40,
  },
  "Tailândia": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Tailandês",
    "moeda": "Baht Tailandês (THB)",
    "custo_vida_reais": 3600,
    "visitas_anuais": "39.8 milhões",
    "principais_cidades": [
      "Bangkok",
      "Chiang Mai",
      "Phuket",
    ],
    "porcentagem_recomendacao": 93,
  },
  "Tanzânia": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Suaíli e Inglês",
    "moeda": "Xelim Tanzaniano (TZS)",
    "custo_vida_reais": 3000,
    "visitas_anuais": "1.5 milhão",
    "principais_cidades": [
      "Dodoma",
      "Dar es Salaam",
      "Arusha",
    ],
    "porcentagem_recomendacao": 81,
  },
  "Timor-Leste": {
    "localizacao": "Ásia",
    "hemisferio": "Sul",
    "idioma": "Tétum e Português",
    "moeda": "Dólar Americano (USD)",
    "custo_vida_reais": 2800,
    "visitas_anuais": "0.07 milhão",
    "principais_cidades": [
      "Díli",
      "Baucau",
      "Maliana",
    ],
    "porcentagem_recomendacao": 65,
  },
  "Trinidad e Tobago": {
    "localizacao": "Caribe",
    "hemisferio": "Norte",
    "idioma": "Inglês",
    "moeda": "Dólar de Trinidad e Tobago (TTD)",
    "custo_vida_reais": 4200,
    "visitas_anuais": "0.5 milhão",
    "principais_cidades": [
      "Port of Spain",
      "San Fernando",
      "Arima",
    ],
    "porcentagem_recomendacao": 76,
  },
  "Tunísia": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Árabe",
    "moeda": "Dinar Tunisiano (TND)",
    "custo_vida_reais": 3300,
    "visitas_anuais": "9.4 milhões",
    "principais_cidades": [
      "Túnis",
      "Sfax",
      "Sousse",
    ],
    "porcentagem_recomendacao": 84,
  },
  "Turquia": {
    "localizacao": "Europa e Ásia",
    "hemisferio": "Norte",
    "idioma": "Turco",
    "moeda": "Lira Turca (TRY)",
    "custo_vida_reais": 5100,
    "visitas_anuais": "51.2 milhões",
    "principais_cidades": [
      "Istambul",
      "Ancara",
      "Esmirna",
    ],
    "porcentagem_recomendacao": 92,
  },
  "Ucrânia": {
    "localizacao": "Europa",
    "hemisferio": "Norte",
    "idioma": "Ucraniano",
    "moeda": "Hryvnia (UAH)",
    "custo_vida_reais": 2900,
    "visitas_anuais": "2.5 milhões",
    "principais_cidades": [
      "Kiev",
      "Lviv",
      "Odessa",
    ],
    "porcentagem_recomendacao": 75,
  },
  "Uganda": {
    "localizacao": "África",
    "hemisferio": "Norte",
    "idioma": "Inglês e Suaíli",
    "moeda": "Xelim Ugandês (UGX)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "1.4 milhão",
    "principais_cidades": [
      "Kampala",
      "Entebbe",
      "Gulu",
    ],
    "porcentagem_recomendacao": 74,
  },
  "Uruguai": {
    "localizacao": "América do Sul",
    "hemisferio": "Sul",
    "idioma": "Espanhol",
    "moeda": "Peso Uruguaio (UYU)",
    "custo_vida_reais": 4200,
    "visitas_anuais": "3.2 milhões",
    "principais_cidades": [
      "Montevidéu",
      "Punta del Este",
      "Salto",
    ],
    "porcentagem_recomendacao": 88,
  },
  "Venezuela": {
    "localizacao": "América do Sul",
    "hemisferio": "Norte",
    "idioma": "Espanhol",
    "moeda": "Bolívar Venezuelano (VES)",
    "custo_vida_reais": 2300,
    "visitas_anuais": "0.6 milhão",
    "principais_cidades": [
      "Caracas",
      "Maracaibo",
      "Valência",
    ],
    "porcentagem_recomendacao": 55,
  },
  "Vietnã": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Vietnamita",
    "moeda": "Dong (VND)",
    "custo_vida_reais": 3000,
    "visitas_anuais": "18 milhões",
    "principais_cidades": [
      "Hanói",
      "Cidade de Ho Chi Minh",
      "Da Nang",
    ],
    "porcentagem_recomendacao": 89,
  },
  "Zimbábue": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Inglês, Shona, Ndebele",
    "moeda": "Dólar Zimbabuano (ZWL)",
    "custo_vida_reais": 3100,
    "visitas_anuais": "2.2 milhões",
    "principais_cidades": [
      "Harare",
      "Bulawayo",
      "Victoria Falls",
    ],
    "porcentagem_recomendacao": 68,
  },
  "Zâmbia": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Inglês",
    "moeda": "Kwacha Zambiano (ZMW)",
    "custo_vida_reais": 3300,
    "visitas_anuais": "1.1 milhão",
    "principais_cidades": [
      "Lusaka",
      "Livingstone",
      "Ndola",
    ],
    "porcentagem_recomendacao": 72,
  },
  "África do Sul": {
    "localizacao": "África",
    "hemisferio": "Sul",
    "idioma": "Inglês, Africâner, Zulu e outros",
    "moeda": "Rand (ZAR)",
    "custo_vida_reais": 4100,
    "visitas_anuais": "10.2 milhões",
    "principais_cidades": [
      "Cidade do Cabo",
      "Joanesburgo",
      "Durban",
    ],
    "porcentagem_recomendacao": 90,
  },
  "Índia": {
    "localizacao": "Ásia",
    "hemisferio": "Norte",
    "idioma": "Hindi e Inglês",
    "moeda": "Rupia Indiana (INR)",
    "custo_vida_reais": 2700,
    "visitas_anuais": "17.9 milhões",
    "principais_cidades": [
      "Nova Délhi",
      "Mumbai",
      "Bangalore",
    ],
    "porcentagem_recomendacao": 87,
  },
};

document.addEventListener("DOMContentLoaded", async function() {
    const container = document.getElementById('cards-container');
    const destinos = JSON.parse(localStorage.getItem('paisesRecomendados')) || [];
    const motivo = localStorage.getItem('motivoRecomendado') || "Baseado no seu perfil, esse destino é perfeito para você.";

    if (destinos.length === 0) {
        container.innerHTML = "<p>Nenhum destino recomendado encontrado.</p>";
        return;
    }

    for (let nome of destinos) {
        const dados = await buscarDadosDoPais(nome);
        dados.motivo = motivo;

        const card = document.createElement('div');
        card.className = 'card';

        const imagensHtml = dados.imagens.map((url, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}">
                <img src="${url}" alt="${dados.nome}">
            </div>
        `).join('');

        card.innerHTML = `
            <div class="carousel">
                ${imagensHtml}
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
            </div>
            <h2>${dados.nome}</h2>
            <ul>
                <li><strong>Localização:</strong> ${dados.localizacao}</li>
                <li><strong>Hemisfério:</strong> ${dados.hemisferio}</li>
                <li><strong>Clima:</strong> ${dados.clima}</li>
                <li><strong>Custo de vida:</strong> ${dados.custo}</li>
                <li><strong>Idioma:</strong> ${dados.idioma}</li>
                <li><strong>Moeda:</strong> ${dados.moeda}</li>
                <li><strong>Visitas por ano:</strong> ${dados.visitas}</li>
                <li><strong>Recomendado:</strong> ${dados.recomendado}</li>
            </ul>
            <button class="ver-mais-btn">Ver mais</button>
        `;

        container.appendChild(card);
        adicionarCarrossel(card);
        adicionarModal(card, dados);
    }
});

function adicionarModal(card, dados) {
    const btn = card.querySelector('.ver-mais-btn');
    btn.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${dados.nome}</h2>
                </div>
                <div class="modal-carousel">
                    ${dados.imagens.map(url => `<img src="${url}" alt="${dados.nome}">`).join('')}
                </div>
                <div class="modal-section">
                    <h3>Informações Gerais</h3>
                    <ul>
                        <li><strong>Localização:</strong> ${dados.localizacao}</li>
                        <li><strong>Hemisfério:</strong> ${dados.hemisferio}</li>
                        <li><strong>Clima:</strong> ${dados.clima}</li>
                        <li><strong>Custo de vida:</strong> ${dados.custo}</li>
                        <li><strong>Idioma:</strong> ${dados.idioma}</li>
                        <li><strong>Moeda:</strong> ${dados.moeda}</li>
                        <li><strong>Visitas por ano:</strong> ${dados.visitas}</li>
                        <li><strong>Recomendado:</strong> ${dados.recomendado}</li>
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>Por que recomendamos:</h3>
                    <ul>
                        ${dados.motivo.split('. ').filter(Boolean).map(item => `<li>${item.trim().replace(/\.$/, '')}.</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>Cidades recomendadas</h3>
                    <ul>
                        ${dados.cidades.map(c => `<li><strong>${c.nome}:</strong> ${c.destaque}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>Explore no Mapa</h3>
                    <div class="modal-maps-container">
                        <iframe src="https://www.google.com/maps?q=${encodeURIComponent(dados.nome)}&output=embed" class="modal-maps" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
    });
}

async function buscarDadosDoPais(nome) {
    const dados = paises[nome];
    if (!dados) {
        return {
            nome,
            imagens: [`https://via.placeholder.com/300x180?text=${nome}`],
            localizacao: "Desconhecida",
            hemisferio: "Desconhecido",
            clima: "Clima não disponível",
            idioma: "Indefinido",
            moeda: "Indefinida",
            custo: "Indefinido",
            visitas: "Não informado",
            recomendado: "0%",
            cidades: []
        };
    }

    

    const unsplashKey = "pUQSReFRft_4aL-o9uQCi5TGG1tUuNDC54HdPTY27CM";
    const openWeatherKey = "ebd1ae677b31d0c64ca74a7f6e1b4417";
    let imagens = [`https://via.placeholder.com/300x180?text=${nome}`];
    let clima = "Clima típico da região";

const traducoesUnsplash = {
  "Butão": "Bhutan",
  "Trinidad e Tobago": "Trinidad and Tobago",
  "Cabo Verde": "Cape Verde",
  "Quênia": "Kenya" // adicionado
};


const nomeBusca = traducoesUnsplash[nome] || nome;

    // 🌄 Imagens do Unsplash
    try {
        const resImg = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(nomeBusca)}&client_id=${unsplashKey}&per_page=5`);
        if (resImg.ok) {
            const dadosImg = await resImg.json();
            if (dadosImg.results.length > 0) {
                imagens = dadosImg.results.map(img => img.urls.regular);
            }
        }
    } catch (e) {
        console.warn("Erro ao buscar imagens do Unsplash:", e);
    }

    // 🌦️ Clima real usando OpenWeather com nome do país (fallback básico)
    try {
        const resGeo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(nome)}&limit=1&appid=${openWeatherKey}`);
        if (resGeo.ok) {
            const geoData = await resGeo.json();
            if (geoData.length > 0) {
                const { lat, lon } = geoData[0];
                const resClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric&lang=pt`);
                if (resClima.ok) {
                    const dadosClima = await resClima.json();
                    const temp = dadosClima.main.temp;
                    const desc = dadosClima.weather[0].description;
                    clima = `${temp}°C, ${desc}`;
                }
            }
        }
    } catch (e) {
        console.warn("Erro ao buscar clima:", e);
    }

    return {
        nome,
        imagens,
        localizacao: dados.localizacao,
        hemisferio: dados.hemisferio,
        clima,
        idioma: dados.idioma,
        moeda: dados.moeda,
        custo: `R$${dados.custo_vida_reais}`,
        visitas: dados.visitas_anuais,
        recomendado: `${dados.porcentagem_recomendacao}%`,
        cidades: dados.principais_cidades.map(nome => ({
            nome,
            destaque: "Cidade popular para turistas"
        }))
    };
}


function adicionarCarrossel(card) {
    const slides = card.querySelectorAll('.slide');
    const next = card.querySelector('.next');
    const prev = card.querySelector('.prev');
    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[i].classList.add('active');
    }

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });
}
