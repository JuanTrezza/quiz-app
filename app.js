const preguntas = {
  tecnologia: {
    facil: [
      {
        pregunta: "¿Qué significa HTML?",
        opciones: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Modern Links", "Hyper Transfer Markup Language"],
        correcta: 0  // índice de la opción correcta (empieza en 0)
      },
      {
        pregunta: "¿Cuál de estos es un lenguaje de programación?",
        opciones: ["Python", "Photoshop", "Firefox", "Windows"],
        correcta: 0
      },
      {
        pregunta: "¿Qué hace CSS?",
        opciones: ["Da estilo visual a las páginas web", "Gestiona bases de datos", "Crea servidores", "Maneja redes"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es un navegador web?",
        opciones: ["Programa para acceder a internet", "Sistema operativo", "Lenguaje de programación", "Base de datos"],
        correcta: 0
      },
      {
        pregunta: "¿Cuál es la extensión de un archivo JavaScript?",
        opciones: [".js", ".java", ".jsx", ".json"],
        correcta: 0
      },
      {
        pregunta: "¿Qué significa URL?",
        opciones: ["Uniform Resource Locator", "Universal Remote Link", "Unified Resource Language", "User Remote Location"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es Git?",
        opciones: ["Sistema de control de versiones", "Editor de código", "Lenguaje de programación", "Base de datos"],
        correcta: 0
      },
      {
        pregunta: "¿Qué significa API?",
        opciones: ["Application Programming Interface", "Advanced Processing Integration", "Automated Program Interface", "Application Protocol Internet"],
        correcta: 0
      },
      {
        pregunta: "¿Cuál es el lenguaje de la web para dar interactividad?",
        opciones: ["JavaScript", "Python", "PHP", "Ruby"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es un servidor?",
        opciones: ["Computadora que provee recursos a otras", "Tipo de cable de red", "Programa de diseño", "Protocolo de internet"],
        correcta: 0
      }
    ],
    medio: [
      {
        pregunta: "¿Qué es el DOM?",
        opciones: ["Document Object Model", "Data Object Manager", "Dynamic Output Module", "Document Order Map"],
        correcta: 0
      },
      {
        pregunta: "¿Qué método de array devuelve un nuevo array filtrado?",
        opciones: [".filter()", ".find()", ".map()", ".reduce()"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es localStorage?",
        opciones: ["Almacenamiento en el navegador del cliente", "Base de datos del servidor", "Sistema de archivos", "Protocolo de red"],
        correcta: 0
      },
      {
        pregunta: "¿Qué hace 'async/await' en JavaScript?",
        opciones: ["Maneja código asincrónico de forma legible", "Crea animaciones CSS", "Define variables constantes", "Importa módulos"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es un componente en Angular?",
        opciones: ["Bloque reutilizable de UI con su lógica", "Archivo de estilos", "Servicio de red", "Base de datos local"],
        correcta: 0
      },
      {
        pregunta: "¿Qué devuelve fetch() en JavaScript?",
        opciones: ["Una Promise", "Un array", "Un objeto DOM", "Un string"],
        correcta: 0
      },
      {
        pregunta: "¿Cuál es la diferencia entre let y const?",
        opciones: ["const no puede reasignarse, let sí", "let es global, const es local", "const es más rápido", "No hay diferencia"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es TypeScript?",
        opciones: ["JavaScript con tipado estático", "Un framework de CSS", "Un lenguaje de backend", "Una base de datos"],
        correcta: 0
      },
      {
        pregunta: "¿Qué hace el método .map() en un array?",
        opciones: ["Transforma cada elemento y devuelve nuevo array", "Filtra elementos", "Ordena el array", "Busca un elemento"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es una PWA?",
        opciones: ["Progressive Web App", "Programmed Web Application", "Protocol Web Access", "Private Web App"],
        correcta: 0
      }
    ],
    dificil: [
      {
        pregunta: "¿Qué es el Event Loop en JavaScript?",
        opciones: ["Mecanismo que maneja operaciones asíncronas en un solo hilo", "Un tipo de bucle for", "Un evento del DOM", "Una función recursiva"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es el patrón de diseño Observer?",
        opciones: ["Un objeto notifica a sus dependientes cuando cambia su estado", "Un patrón para crear objetos", "Un método de ordenamiento", "Una estructura de árbol"],
        correcta: 0
      },
      {
        pregunta: "¿Qué hace el operador spread (...) en JavaScript?",
        opciones: ["Expande iterables en elementos individuales", "Multiplica arrays", "Crea objetos vacíos", "Elimina duplicados"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es el prototype en JavaScript?",
        opciones: ["Objeto del que heredan propiedades otros objetos", "Una función constructora", "Un tipo de variable", "Un módulo de Node.js"],
        correcta: 0
      },
      {
        pregunta: "¿Qué diferencia hay entre == y === en JavaScript?",
        opciones: ["=== compara valor Y tipo, == solo valor con conversión", "=== es más lento", "== solo funciona con números", "No hay diferencia práctica"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es el closure en JavaScript?",
        opciones: ["Función que recuerda el scope donde fue creada", "Un método para cerrar conexiones", "Un tipo de loop", "Una clase abstracta"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es tree shaking en bundlers como Webpack?",
        opciones: ["Eliminar código muerto no utilizado del bundle final", "Reorganizar el árbol del DOM", "Ordenar imports alfabéticamente", "Comprimir imágenes"],
        correcta: 0
      },
      {
        pregunta: "¿Qué hace el método Promise.all()?",
        opciones: ["Ejecuta múltiples promesas en paralelo y espera todas", "Cancela todas las promesas", "Ejecuta promesas en secuencia", "Crea una nueva promesa vacía"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es el Virtual DOM en frameworks como React?",
        opciones: ["Representación en memoria del DOM real para optimizar updates", "Un DOM sin estilos", "Un iframe oculto", "Una copia del servidor"],
        correcta: 0
      },
      {
        pregunta: "¿Qué es debouncing en JavaScript?",
        opciones: ["Retrasar la ejecución de una función hasta que paren los eventos", "Eliminar eventos duplicados", "Acelerar animaciones", "Cachear resultados de funciones"],
        correcta: 0
      }
    ]
  },

  ciencia: {
    facil: [
      { pregunta: "¿Cuántos planetas tiene el sistema solar?", opciones: ["8", "9", "7", "10"], correcta: 0 },
      { pregunta: "¿Cuál es el elemento más abundante en la atmósfera terrestre?", opciones: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], correcta: 0 },
      { pregunta: "¿Qué órgano bombea la sangre en el cuerpo humano?", opciones: ["Corazón", "Pulmón", "Hígado", "Riñón"], correcta: 0 },
      { pregunta: "¿A qué velocidad viaja la luz?", opciones: ["300.000 km/s", "150.000 km/s", "500.000 km/s", "1.000.000 km/s"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula del agua?", opciones: ["H₂O", "CO₂", "NaCl", "H₂SO₄"], correcta: 0 },
      { pregunta: "¿Qué planeta es el más grande del sistema solar?", opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"], correcta: 0 },
      { pregunta: "¿Cuántos huesos tiene el cuerpo humano adulto?", opciones: ["206", "186", "226", "196"], correcta: 0 },
      { pregunta: "¿Qué es la fotosíntesis?", opciones: ["Proceso por el que las plantas producen su alimento con luz solar", "Reproducción de bacterias", "Digestión de minerales", "Movimiento celular"], correcta: 0 },
      { pregunta: "¿Cuál es el planeta más cercano al Sol?", opciones: ["Mercurio", "Venus", "Tierra", "Marte"], correcta: 0 },
      { pregunta: "¿Qué científico formuló la teoría de la relatividad?", opciones: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"], correcta: 0 }
    ],
    medio: [
      { pregunta: "¿Qué es el ADN?", opciones: ["Ácido desoxirribonucleico, portador de información genética", "Una proteína estructural", "Un tipo de grasa celular", "Una enzima digestiva"], correcta: 0 },
      { pregunta: "¿Qué ley describe la gravedad de Newton?", opciones: ["Todo objeto atrae a otro con fuerza proporcional a sus masas", "La energía no se crea ni destruye", "Acción y reacción iguales y opuestas", "Los gases se comprimen con presión"], correcta: 0 },
      { pregunta: "¿Qué es la mitosis?", opciones: ["División celular que produce dos células idénticas", "Fusión de dos células", "Muerte celular programada", "Síntesis de proteínas"], correcta: 0 },
      { pregunta: "¿Cuál es el número atómico del carbono?", opciones: ["6", "8", "12", "4"], correcta: 0 },
      { pregunta: "¿Qué es un neutrón?", opciones: ["Partícula subatómica sin carga eléctrica", "Partícula con carga positiva", "Partícula con carga negativa", "Fotón de energía"], correcta: 0 },
      { pregunta: "¿Qué es la entropía?", opciones: ["Medida del desorden o aleatoriedad de un sistema", "Energía cinética de un gas", "Velocidad de una reacción", "Temperatura absoluta"], correcta: 0 },
      { pregunta: "¿Cuántos cromosomas tiene una célula humana normal?", opciones: ["46", "23", "48", "44"], correcta: 0 },
      { pregunta: "¿Qué es un isótopo?", opciones: ["Átomo del mismo elemento con distinto número de neutrones", "Molécula con igual masa", "Ion con carga negativa", "Compuesto orgánico"], correcta: 0 },
      { pregunta: "¿Qué estudia la epidemiología?", opciones: ["Distribución y causas de enfermedades en poblaciones", "Estructura del ADN", "Comportamiento animal", "Formación de rocas"], correcta: 0 },
      { pregunta: "¿Qué es la osmosis?", opciones: ["Paso de agua a través de membrana semipermeable de menor a mayor concentración", "Digestión de grasas", "Transporte activo de iones", "Síntesis de glucosa"], correcta: 0 }
    ],
    dificil: [
      { pregunta: "¿Qué postula el principio de incertidumbre de Heisenberg?", opciones: ["No se puede conocer con precisión simultánea posición y momento de una partícula", "La energía se conserva siempre", "Los electrones orbitan en niveles fijos", "La materia y energía son equivalentes"], correcta: 0 },
      { pregunta: "¿Qué es la constante de Planck?", opciones: ["Relaciona la energía de un fotón con su frecuencia (6.626×10⁻³⁴ J·s)", "Velocidad de la luz en el vacío", "Carga del electrón", "Número de Avogadro"], correcta: 0 },
      { pregunta: "¿Qué describe la ecuación de Schrödinger?", opciones: ["Evolución temporal de la función de onda de un sistema cuántico", "Movimiento de cuerpos rígidos", "Flujo de calor en sólidos", "Campo gravitacional"], correcta: 0 },
      { pregunta: "¿Qué es el bosón de Higgs?", opciones: ["Partícula que confiere masa a otras partículas elementales", "Antimateria del protón", "Tipo de neutrino", "Partícula de luz polarizada"], correcta: 0 },
      { pregunta: "¿Qué es la teoría de cuerdas?", opciones: ["Propone que las partículas son vibraciones de cuerdas unidimensionales", "Describe el comportamiento de fluidos", "Explica la formación de galaxias", "Modela reacciones nucleares"], correcta: 0 },
      { pregunta: "¿Qué es la epigenética?", opciones: ["Cambios en expresión génica sin alterar la secuencia de ADN", "Mutaciones en el genoma", "Síntesis de ARN mensajero", "Replicación del ADN"], correcta: 0 },
      { pregunta: "¿Qué es el efecto Compton?", opciones: ["Dispersión de fotones por electrones con cambio de longitud de onda", "Emisión de electrones por luz", "Refracción de luz en cristales", "Absorción de rayos X"], correcta: 0 },
      { pregunta: "¿Qué es la supersimetría en física?", opciones: ["Teoría que propone un compañero superpartner para cada partícula conocida", "Simetría de moléculas orgánicas", "Equilibrio de fuerzas nucleares", "Teoría del campo unificado"], correcta: 0 },
      { pregunta: "¿Qué describe la ecuación de Drake?", opciones: ["Estimación del número de civilizaciones extraterrestres detectables", "Velocidad de expansión del universo", "Órbita de planetas extrasolares", "Fusión nuclear estelar"], correcta: 0 },
      { pregunta: "¿Qué es la resonancia magnética nuclear?", opciones: ["Absorción de radiofrecuencia por núcleos atómicos en campo magnético", "Emisión de rayos gamma", "Aceleración de protones", "Fisión de átomos pesados"], correcta: 0 }
    ]
  },

  historia: {
    facil: [
      { pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", opciones: ["1939", "1941", "1936", "1945"], correcta: 0 },
      { pregunta: "¿Quién fue el primer presidente de Estados Unidos?", opciones: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Benjamin Franklin"], correcta: 0 },
      { pregunta: "¿En qué año llegó Cristóbal Colón a América?", opciones: ["1492", "1482", "1502", "1512"], correcta: 0 },
      { pregunta: "¿Qué civilización construyó las pirámides de Giza?", opciones: ["Egipcia", "Romana", "Griega", "Mesopotámica"], correcta: 0 },
      { pregunta: "¿En qué año cayó el Muro de Berlín?", opciones: ["1989", "1991", "1987", "1985"], correcta: 0 },
      { pregunta: "¿Quién fue Napoleón Bonaparte?", opciones: ["Emperador francés y militar", "Rey de España", "Filósofo griego", "Papa de Roma"], correcta: 0 },
      { pregunta: "¿Qué guerra enfrentó a la Unión y la Confederación en EE.UU.?", opciones: ["Guerra Civil Americana", "Guerra de Independencia", "Guerra de Secesión del Norte", "Guerra Hispano-Americana"], correcta: 0 },
      { pregunta: "¿En qué año declaró Argentina su independencia?", opciones: ["1816", "1810", "1820", "1806"], correcta: 0 },
      { pregunta: "¿Quién fue Nelson Mandela?", opciones: ["Líder anti-apartheid y presidente de Sudáfrica", "Presidente de Kenya", "Activista de EE.UU.", "Líder de Nigeria"], correcta: 0 },
      { pregunta: "¿Qué evento marcó el inicio de la Primera Guerra Mundial?", opciones: ["Asesinato del archiduque Francisco Fernando", "Invasión de Polonia", "Revolución Rusa", "Caída del Imperio Otomano"], correcta: 0 }
    ],
    medio: [
      { pregunta: "¿Qué fue la Revolución Francesa?", opciones: ["Movimiento que derrocó a la monarquía en Francia en 1789", "Guerra entre Francia e Inglaterra", "Revolución industrial en París", "Reforma religiosa francesa"], correcta: 0 },
      { pregunta: "¿Qué fue el Imperio Romano de Oriente?", opciones: ["Imperio Bizantino, continuación del Imperio Romano en el este", "Parte del Imperio Persa", "Colonia romana en Asia", "Estado vasallo de Roma"], correcta: 0 },
      { pregunta: "¿Qué fue la Reforma Protestante?", opciones: ["Movimiento religioso del siglo XVI liderado por Lutero contra la Iglesia Católica", "Guerra entre España y Alemania", "Cisma dentro del Islam", "Reforma de la Iglesia Ortodoxa"], correcta: 0 },
      { pregunta: "¿Qué fue la Guerra Fría?", opciones: ["Tensión geopolítica entre EE.UU. y la URSS tras la WWII", "Conflicto armado en el Ártico", "Guerra entre bloques asiáticos", "Disputa comercial del siglo XX"], correcta: 0 },
      { pregunta: "¿Quién fue Simón Bolívar?", opciones: ["Libertador de varios países sudamericanos de la colonia española", "Presidente de México", "General español en América", "Fundador de Brasil"], correcta: 0 },
      { pregunta: "¿Qué fue el Holocausto?", opciones: ["Genocidio de judíos y otros grupos por los nazis durante la WWII", "Masacre en la Primera Guerra Mundial", "Persecución religiosa en la URSS", "Esclavitud en América colonial"], correcta: 0 },
      { pregunta: "¿Qué fue la Revolución Industrial?", opciones: ["Transformación de la producción hacia fábricas y máquinas, siglo XVIII-XIX", "Revolución política en Francia", "Reforma agraria en Inglaterra", "Modernización militar de Europa"], correcta: 0 },
      { pregunta: "¿Qué civilización construyó Machu Picchu?", opciones: ["Inca", "Azteca", "Maya", "Olmeca"], correcta: 0 },
      { pregunta: "¿Qué fue el Plan Marshall?", opciones: ["Ayuda económica de EE.UU. a Europa tras la WWII", "Plan militar de la OTAN", "Tratado de paz de la WWI", "Acuerdo comercial con Japón"], correcta: 0 },
      { pregunta: "¿Quién lideró la Revolución Cubana?", opciones: ["Fidel Castro", "Che Guevara", "Fulgencio Batista", "Raúl Castro"], correcta: 0 }
    ],
    dificil: [
      { pregunta: "¿Qué fue la Paz de Westfalia (1648)?", opciones: ["Tratados que terminaron la Guerra de los Treinta Años y establecieron el sistema de estados soberanos", "Acuerdo entre España y Portugal sobre colonias", "Tratado que dividió el Imperio Romano", "Paz entre el Sacro Imperio y el Papado"], correcta: 0 },
      { pregunta: "¿Qué fue el Consenso de Washington?", opciones: ["Conjunto de políticas económicas liberales impulsadas en los 90 para países en desarrollo", "Acuerdo de paz tras la Guerra Fría", "Tratado de libre comercio americano", "Declaración de derechos humanos de la OEA"], correcta: 0 },
      { pregunta: "¿Qué fue el Tratado de Brest-Litovsk (1918)?", opciones: ["Acuerdo entre Rusia soviética y las potencias centrales que sacó a Rusia de la WWI", "Paz entre Austria-Hungría y Serbia", "Tratado que creó Polonia moderna", "Acuerdo de armisticio en el frente occidental"], correcta: 0 },
      { pregunta: "¿Qué fue la Doctrina Monroe?", opciones: ["Política exterior de EE.UU. que declaraba América fuera de la influencia europea (1823)", "Tratado de defensa mutua americano", "Declaración de guerra contra España", "Principio de neutralidad estadounidense"], correcta: 0 },
      { pregunta: "¿Qué fue la Batalla de Lepanto (1571)?", opciones: ["Victoria de la Liga Santa sobre el Imperio Otomano que detuvo su expansión en el Mediterráneo", "Conquista española de América Central", "Derrota de la Armada Invencible", "Primera Cruzada medieval"], correcta: 0 },
      { pregunta: "¿Qué fue la Conspiración de la Pólvora (1605)?", opciones: ["Intento fallido de católicos ingleses de volar el Parlamento y matar al rey Jacobo I", "Revuelta campesina en Francia", "Atentado contra Felipe II de España", "Conspiración para asesinar a Cromwell"], correcta: 0 },
      { pregunta: "¿Qué fue el Gran Juego?", opciones: ["Rivalidad estratégica entre el Imperio Británico y el Imperio Ruso por Asia Central en el siglo XIX", "Torneo diplomático entre potencias europeas", "Competencia comercial en el Pacífico", "Disputa colonial en África"], correcta: 0 },
      { pregunta: "¿Qué fue la Noche de los Cuchillos Largos (1934)?", opciones: ["Purga ordenada por Hitler que eliminó a la cúpula de las SA y opositores", "Masacre de judíos en Berlín", "Golpe de estado fallido en Alemania", "Asesinato de líderes sindicales nazis"], correcta: 0 },
      { pregunta: "¿Qué fue el Edicto de Nantes (1598)?", opciones: ["Decreto de Enrique IV de Francia que otorgó derechos a los hugonotes protestantes", "Expulsión de judíos de Francia", "Unificación religiosa del reino francés", "Tratado de paz con España"], correcta: 0 },
      { pregunta: "¿Qué fue la Conferencia de Yalta (1945)?", opciones: ["Reunión de Churchill, Roosevelt y Stalin que definió el orden mundial de posguerra", "Firma del armisticio con Japón", "Creación de la ONU en San Francisco", "Conferencia de paz con Alemania"], correcta: 0 }
    ]
  },

  cine: {
    facil: [
      { pregunta: "¿Quién dirigió Titanic (1997)?", opciones: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Ridley Scott"], correcta: 0 },
      { pregunta: "¿En qué película aparece el personaje de Jack Sparrow?", opciones: ["Piratas del Caribe", "Master and Commander", "La isla del tesoro", "Waterworld"], correcta: 0 },
      { pregunta: "¿Qué estudio creó Toy Story, la primera película animada completamente en 3D?", opciones: ["Pixar", "DreamWorks", "Disney", "Warner Bros"], correcta: 0 },
      { pregunta: "¿Qué actor interpreta a Iron Man en el MCU?", opciones: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], correcta: 0 },
      { pregunta: "¿Cuántas películas tiene la saga principal de Star Wars?", opciones: ["9", "6", "12", "8"], correcta: 0 },
      { pregunta: "¿En qué año se estrenó El Rey León de Disney?", opciones: ["1994", "1992", "1996", "1998"], correcta: 0 },
      { pregunta: "¿Qué película ganó el Oscar a Mejor Película en 2020?", opciones: ["Parásitos", "1917", "Joker", "Historia de un matrimonio"], correcta: 0 },
      { pregunta: "¿Quién interpreta a Hermione Granger en Harry Potter?", opciones: ["Emma Watson", "Emma Stone", "Keira Knightley", "Natalie Portman"], correcta: 0 },
      { pregunta: "¿Qué película tiene la frase 'Que la fuerza te acompañe'?", opciones: ["Star Wars", "Star Trek", "Dune", "Avatar"], correcta: 0 },
      { pregunta: "¿Quién dirigió la trilogía de El Señor de los Anillos?", opciones: ["Peter Jackson", "James Cameron", "Guillermo del Toro", "Ridley Scott"], correcta: 0 }
    ],
    medio: [
      { pregunta: "¿Qué película de Kubrick está basada en una novela de Stephen King?", opciones: ["El resplandor", "La naranja mecánica", "Full Metal Jacket", "2001: Odisea del espacio"], correcta: 0 },
      { pregunta: "¿Quién ganó el Oscar a Mejor Director por 'El paciente inglés'?", opciones: ["Anthony Minghella", "Steven Spielberg", "Clint Eastwood", "Martin Scorsese"], correcta: 0 },
      { pregunta: "¿Qué película protagonizó Marlon Brando como Vito Corleone?", opciones: ["El Padrino", "Apocalypse Now", "Un tranvía llamado deseo", "Ultimo tango en Paris"], correcta: 0 },
      { pregunta: "¿En qué película de Tarantino aparece la banda Uma Thurman/John Travolta?", opciones: ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown"], correcta: 0 },
      { pregunta: "¿Qué director es conocido por 'El laberinto del fauno' y 'La forma del agua'?", opciones: ["Guillermo del Toro", "Alfonso Cuarón", "Alejandro González Iñárritu", "Pedro Almodóvar"], correcta: 0 },
      { pregunta: "¿Qué película de Spielberg trata sobre dinosaurios clonados?", opciones: ["Jurassic Park", "The Lost World", "Congo", "Predator"], correcta: 0 },
      { pregunta: "¿En qué país se filmó la película 'Roma' de Alfonso Cuarón?", opciones: ["México", "España", "Argentina", "Colombia"], correcta: 0 },
      { pregunta: "¿Qué actriz protagoniza 'La La Land'?", opciones: ["Emma Stone", "Emma Watson", "Margot Robbie", "Natalie Portman"], correcta: 0 },
      { pregunta: "¿Quién interpretó a Joker en la película de 2019?", opciones: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], correcta: 0 },
      { pregunta: "¿Qué película de animación japonesa ganó el Oscar en 2003?", opciones: ["El viaje de Chihiro", "Mi vecino Totoro", "La princesa Mononoke", "Nausicaä"], correcta: 0 }
    ],
    dificil: [
      { pregunta: "¿Quién escribió el guión original de Chinatown (1974)?", opciones: ["Robert Towne", "Roman Polanski", "Jack Nicholson", "Francis Ford Coppola"], correcta: 0 },
      { pregunta: "¿En qué película de Bergman una mujer muda cuida a una actriz en crisis?", opciones: ["Persona", "El séptimo sello", "Gritos y susurros", "Fanny y Alexander"], correcta: 0 },
      { pregunta: "¿Qué movimiento cinematográfico representó la Nouvelle Vague francesa?", opciones: ["Ruptura con el cine clásico mediante cámara en mano, locaciones reales e improvisación", "Cinema de terror europeo de los 60", "Cine político latinoamericano", "Expresionismo alemán de posguerra"], correcta: 0 },
      { pregunta: "¿Quién dirigió 'Rashomon' (1950), film que exploró la subjetividad de la verdad?", opciones: ["Akira Kurosawa", "Yasujiro Ozu", "Kenji Mizoguchi", "Hiroshi Teshigahara"], correcta: 0 },
      { pregunta: "¿Qué técnica narrativa usa 'Memento' de Nolan para contar su historia?", opciones: ["Secuencias en orden inverso intercaladas con secuencias cronológicas", "Narrador no confiable en primera persona", "Múltiples líneas temporales paralelas", "Punto de vista subjetivo exclusivo"], correcta: 0 },
      { pregunta: "¿Qué película de Tarkovsky usa el agua como símbolo recurrente de memoria?", opciones: ["El espejo", "Stalker", "Andrei Rublev", "Solaris"], correcta: 0 },
      { pregunta: "¿Qué director es el creador del Dogma 95 junto a Lars von Trier?", opciones: ["Thomas Vinterberg", "Bille August", "Susanne Bier", "Nicolas Winding Refn"], correcta: 0 },
      { pregunta: "¿En qué película de Fellini el director Guido Anselmi tiene una crisis creativa?", opciones: ["8½", "La dolce vita", "Amarcord", "Roma"], correcta: 0 },
      { pregunta: "¿Qué cinematógrafo filmó Schindler's List y Saving Private Ryan de Spielberg?", opciones: ["Janusz Kamiński", "Roger Deakins", "Emmanuel Lubezki", "Gordon Willis"], correcta: 0 },
      { pregunta: "¿Qué película de Orson Welles introdujo el uso del plano secuencia y la profundidad de campo?", opciones: ["Ciudadano Kane", "El tercer hombre", "Sed de mal", "Falstaff"], correcta: 0 }
    ]
  },

  geografia: {
    facil: [
      { pregunta: "¿Cuál es la capital de Francia?", opciones: ["París", "Lyon", "Marsella", "Burdeos"], correcta: 0 },
      { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Nilo", "Amazonas", "Yangtsé", "Mississippi"], correcta: 0 },
      { pregunta: "¿En qué continente está Brasil?", opciones: ["América del Sur", "América Central", "América del Norte", "África"], correcta: 0 },
      { pregunta: "¿Cuál es el océano más grande del mundo?", opciones: ["Pacífico", "Atlántico", "Índico", "Ártico"], correcta: 0 },
      { pregunta: "¿Cuál es la montaña más alta del mundo?", opciones: ["Everest", "K2", "Kangchenjunga", "Makalu"], correcta: 0 },
      { pregunta: "¿Cuántos países forman América del Sur?", opciones: ["12", "10", "14", "8"], correcta: 0 },
      { pregunta: "¿Cuál es la capital de Japón?", opciones: ["Tokio", "Osaka", "Kioto", "Hiroshima"], correcta: 0 },
      { pregunta: "¿Qué desierto es el más grande del mundo?", opciones: ["Sahara", "Gobi", "Patagónico", "Arábigo"], correcta: 0 },
      { pregunta: "¿En qué país está la Torre Eiffel?", opciones: ["Francia", "Bélgica", "Italia", "España"], correcta: 0 },
      { pregunta: "¿Cuál es el país más grande del mundo por superficie?", opciones: ["Rusia", "Canadá", "China", "EE.UU."], correcta: 0 }
    ],
    medio: [
      { pregunta: "¿Cuál es la capital de Australia?", opciones: ["Canberra", "Sídney", "Melbourne", "Brisbane"], correcta: 0 },
      { pregunta: "¿Qué estrecho separa Europa de África?", opciones: ["Gibraltar", "Bósforo", "Dardanelos", "Messina"], correcta: 0 },
      { pregunta: "¿En qué país están las Cataratas del Iguazú del lado argentino?", opciones: ["Argentina y Brasil las comparten", "Solo Argentina", "Solo Brasil", "Argentina, Brasil y Paraguay"], correcta: 0 },
      { pregunta: "¿Cuál es el lago más profundo del mundo?", opciones: ["Baikal", "Tanganica", "Superior", "Titicaca"], correcta: 0 },
      { pregunta: "¿Qué país tiene más fronteras terrestres?", opciones: ["China y Rusia (14 países cada uno)", "Brasil", "EE.UU.", "Alemania"], correcta: 0 },
      { pregunta: "¿Cuál es el punto más bajo de la Tierra?", opciones: ["Mar Muerto", "Lago Assal", "Valle de la Muerte", "Depresión de Qattara"], correcta: 0 },
      { pregunta: "¿En qué continente está Madagascar?", opciones: ["África", "Asia", "Oceanía", "América"], correcta: 0 },
      { pregunta: "¿Cuál es el país más pequeño del mundo?", opciones: ["Ciudad del Vaticano", "Mónaco", "San Marino", "Liechtenstein"], correcta: 0 },
      { pregunta: "¿Qué país sudamericano no tiene salida al mar?", opciones: ["Bolivia y Paraguay", "Solo Bolivia", "Solo Paraguay", "Ninguno"], correcta: 0 },
      { pregunta: "¿Cuál es la ciudad más poblada del mundo?", opciones: ["Tokio", "Shanghai", "Delhi", "Ciudad de México"], correcta: 0 }
    ],
    dificil: [
      { pregunta: "¿Qué es el Meridiano de Greenwich?", opciones: ["Línea de longitud 0° que divide el hemisferio este y oeste y define la hora UTC", "Línea del Ecuador", "Trópico de Cáncer", "Paralelo 45°N"], correcta: 0 },
      { pregunta: "¿Cuál es la capital de Kazajistán?", opciones: ["Astana (Nur-Sultán)", "Almaty", "Shymkent", "Karaganda"], correcta: 0 },
      { pregunta: "¿Qué es la Corriente de Humboldt?", opciones: ["Corriente oceánica fría del Pacífico sur que recorre la costa de Chile y Perú", "Corriente cálida del Atlántico Norte", "Viento polar antártico", "Corriente del Golfo de México"], correcta: 0 },
      { pregunta: "¿En qué país está el lago Titicaca completamente?", opciones: ["Lo comparten Perú y Bolivia", "Solo Perú", "Solo Bolivia", "Perú, Bolivia y Chile"], correcta: 0 },
      { pregunta: "¿Qué es el Cinturón de Fuego del Pacífico?", opciones: ["Zona de alta actividad sísmica y volcánica que rodea el océano Pacífico", "Corriente oceánica cálida", "Zona de alta presión atmosférica", "Franja desértica costera"], correcta: 0 },
      { pregunta: "¿Cuál es el río más largo de Europa?", opciones: ["Volga", "Danubio", "Rin", "Loire"], correcta: 0 },
      { pregunta: "¿Qué es la Polinesia?", opciones: ["Región del océano Pacífico con más de 1000 islas entre Hawaii, Nueva Zelanda y la Isla de Pascua", "Archipiélago del sudeste asiático", "Conjunto de islas del Caribe", "Zona costera de Australia"], correcta: 0 },
      { pregunta: "¿Cuál es el punto más alto de América?", opciones: ["Aconcagua (Argentina, 6.961m)", "Ojos del Salado (Chile)", "Monte McKinley (EE.UU.)", "Chimborazo (Ecuador)"], correcta: 0 },
      { pregunta: "¿Qué país tiene la línea costera más larga del mundo?", opciones: ["Canadá", "Rusia", "Indonesia", "Australia"], correcta: 0 },
      { pregunta: "¿Qué es la fosa de las Marianas?", opciones: ["El punto más profundo del océano, en el Pacífico occidental, a ~11.000m de profundidad", "Cadena de volcanes submarinos", "Depresión continental en Asia", "Fosa tectónica en el Atlántico"], correcta: 0 }
    ]
  },

  deportes: {
    facil: [
      { pregunta: "¿Cuántos jugadores tiene un equipo de fútbol en cancha?", opciones: ["11", "9", "10", "12"], correcta: 0 },
      { pregunta: "¿En qué país se inventó el básquet?", opciones: ["Estados Unidos", "Canadá", "Inglaterra", "Francia"], correcta: 0 },
      { pregunta: "¿Cada cuántos años se celebra el Mundial de Fútbol?", opciones: ["4 años", "2 años", "3 años", "5 años"], correcta: 0 },
      { pregunta: "¿Qué deporte se juega en Wimbledon?", opciones: ["Tenis", "Cricket", "Golf", "Rugby"], correcta: 0 },
      { pregunta: "¿Cuántos sets se necesitan para ganar en tenis (Grand Slam masculino)?", opciones: ["3 de 5", "2 de 3", "3 de 4", "2 de 4"], correcta: 0 },
      { pregunta: "¿Qué país ganó más Mundiales de Fútbol?", opciones: ["Brasil (5)", "Alemania (4)", "Italia (4)", "Argentina (3)"], correcta: 0 },
      { pregunta: "¿Cuántos aros tiene el símbolo olímpico?", opciones: ["5", "4", "6", "7"], correcta: 0 },
      { pregunta: "¿Qué deporte practica LeBron James?", opciones: ["Básquetbol", "Fútbol americano", "Béisbol", "Tenis"], correcta: 0 },
      { pregunta: "¿En qué país se originó el rugby?", opciones: ["Inglaterra", "Francia", "Australia", "Nueva Zelanda"], correcta: 0 },
      { pregunta: "¿Cuántos puntos vale un try en rugby?", opciones: ["5", "3", "4", "6"], correcta: 0 }
    ],
    medio: [
      { pregunta: "¿Quién tiene más Balones de Oro, Messi o Cristiano Ronaldo?", opciones: ["Messi (8)", "Cristiano (5)", "Empatan en 6", "Cristiano (6)"], correcta: 0 },
      { pregunta: "¿En qué año ganó Argentina su tercer Mundial de Fútbol?", opciones: ["2022", "2014", "2018", "2010"], correcta: 0 },
      { pregunta: "¿Qué equipo ganó más Champions League?", opciones: ["Real Madrid (15)", "Barcelona (5)", "Milan (7)", "Bayern (6)"], correcta: 0 },
      { pregunta: "¿Cuántas medallas olímpicas tiene Michael Phelps?", opciones: ["23 de oro (28 en total)", "19 de oro (23 en total)", "20 de oro (25 en total)", "18 de oro (22 en total)"], correcta: 0 },
      { pregunta: "¿Quién tiene el récord de más Grand Slams masculinos en tenis?", opciones: ["Novak Djokovic (24)", "Rafael Nadal (22)", "Roger Federer (20)", "Pete Sampras (14)"], correcta: 0 },
      { pregunta: "¿Qué ciudad organizó los Juegos Olímpicos de verano de 2024?", opciones: ["París", "Los Ángeles", "Tokio", "Brisbane"], correcta: 0 },
      { pregunta: "¿Cuál es el circuito más largo del calendario de Fórmula 1?", opciones: ["Spa-Francorchamps", "Monza", "Silverstone", "Suzuka"], correcta: 0 },
      { pregunta: "¿En qué deporte se usa el término 'slam dunk'?", opciones: ["Básquetbol", "Voleibol", "Béisbol", "Rugby"], correcta: 0 },
      { pregunta: "¿Qué club tiene más títulos en la historia del fútbol argentino?", opciones: ["River Plate", "Boca Juniors", "Racing Club", "Independiente"], correcta: 0 },
      { pregunta: "¿Cuántos sets necesita ganar una mujer en Grand Slam?", opciones: ["2 de 3", "3 de 5", "2 de 4", "3 de 4"], correcta: 0 }
    ],
    dificil: [
      { pregunta: "¿Qué es el índice de eficiencia de un lanzador en béisbol (ERA)?", opciones: ["Carreras limpias promedio por 9 entradas lanzadas", "Porcentaje de ponches totales", "Velocidad promedio de los lanzamientos", "Ratio de victorias y derrotas"], correcta: 0 },
      { pregunta: "¿En qué año se introdujo el VAR en la Copa del Mundo FIFA?", opciones: ["2018 (Rusia)", "2014 (Brasil)", "2022 (Qatar)", "2010 (Sudáfrica)"], correcta: 0 },
      { pregunta: "¿Cuál es el récord de goles en una sola edición de la Copa del Mundo?", opciones: ["Just Fontaine con 13 goles en 1958", "Ronaldo con 8 goles en 2002", "Gerd Müller con 10 goles en 1970", "Sandor Kocsis con 11 goles en 1954"], correcta: 0 },
      { pregunta: "¿Qué es el sistema ELO en ajedrez?", opciones: ["Sistema de calificación que calcula el rendimiento relativo entre jugadores", "Apertura de ajedrez clásica", "Torneos por eliminación directa", "Técnica de memorización de aperturas"], correcta: 0 },
      { pregunta: "¿Cuántas vueltas tiene el Tour de Francia aproximadamente?", opciones: ["21 etapas (aprox. 3.500 km)", "18 etapas (aprox. 2.800 km)", "25 etapas (aprox. 4.200 km)", "15 etapas (aprox. 2.500 km)"], correcta: 0 },
      { pregunta: "¿Qué es un 'hat-trick natural' en fútbol?", opciones: ["Tres goles consecutivos sin que otros jugadores anoten entre ellos", "Tres goles en el mismo tiempo del partido", "Tres goles de cabeza", "Tres goles en la misma jugada"], correcta: 0 },
      { pregunta: "¿Quién es el único jugador en ganar el Mundial Sub-17, Sub-20 y mayor?", opciones: ["No hay ninguno que haya ganado los tres", "Ronaldo (Brasil)", "Messi (Argentina)", "Pelé (Brasil)"], correcta: 0 },
      { pregunta: "¿Qué es el 'line-out' en rugby?", opciones: ["Reanudación del juego cuando el balón salió por la línea lateral, con salto entre dos filas de jugadores", "Penalidad por juego sucio", "Formación defensiva cerrada", "Saque inicial del partido"], correcta: 0 },
      { pregunta: "¿Cuál es la distancia oficial de un maratón?", opciones: ["42,195 km", "40 km", "42 km", "42,5 km"], correcta: 0 },
      { pregunta: "¿Qué equipo de la NBA tiene más campeonatos en la historia?", opciones: ["Boston Celtics (18)", "Los Angeles Lakers (17)", "Chicago Bulls (6)", "Golden State Warriors (7)"], correcta: 0 }
    ]
  }
};




// ================================
// SELECTORES DEL DOM
// ================================

// document.getElementById busca un elemento HTML por su id
// Lo guardamos en variables para no buscarlo cada vez que lo necesitamos

// Pantallas

const pantallaInicio = document.getElementById('inicio');
const pantallaJuego = document.getElementById('juego');
const pantallaResultado = document.getElementById('resultado');

//Pantalla INICIO

const contenedorCategorias = document.getElementById('categorias');
const botonesDificultad = document.querySelectorAll('.diff'); // Va devolver todos los que tengan esa clase.
const btnJugar = document.getElementById('btn-jugar');

//Pantalla JUEGO

const progresoBarra = document.getElementById('progreso-fill');
const contadorTexto = document.getElementById('contador');
const timerTexto = document.getElementById('tiempo');
const timerContenedor = document.getElementById('timer');
const preguntaTexto = document.getElementById('pregunta');
const opcionesContenedor = document.getElementById('opciones');

//Pantalla RESULTADO

const emojiResultado = document.getElementById('emoji-resultado');
const tituloResultado = document.getElementById('titulo-resultado');
const puntajeTexto = document.getElementById('puntaje-texto');
const resumenContenedor = document.getElementById('resumen');
const btnReiniciar = document.getElementById('btn-reiniciar');





// ================================
// ESTADO DEL JUEGO
// ================================

let categoriaSeleccionada = null;
let dificultadSeleccionada = 'facil';
let preguntasJuego = [];
let indicePreguntaActual = 0;
let puntaje = 0;
let intervaloTimer = null;
let tiempoRestante = 15;
let respuestasDelJuego = [];


// ================================
// INICIALIZACIÓN
// ================================

function inicializar() {

  // Definimos las categorías con sus datos visuales
  // Esto es un array de objetos — cada objeto tiene 3 propiedades
  const categorias = [
    { id: 'tecnologia', nombre: 'Tecnología', icono: '💻' },
    { id: 'ciencia',    nombre: 'Ciencia',    icono: '🔬' },
    { id: 'historia',   nombre: 'Historia',   icono: '📜' },
    { id: 'cine',       nombre: 'Cine',       icono: '🎬' },
    { id: 'geografia',  nombre: 'Geografía',  icono: '🌍' },
    { id: 'deportes',   nombre: 'Deportes',   icono: '⚽' },
  ];

  // .map() transforma cada objeto del array en un string de HTML
  // .join('') une todos esos strings en uno solo sin separador
  contenedorCategorias.innerHTML = categorias.map(cat => `
    <button class="btn-categoria" data-cat="${cat.id}">
      <span class="cat-icon">${cat.icono}</span>
      <span class="cat-nombre">${cat.nombre}</span>
      <span class="cat-info">10 preguntas</span>
    </button>
  `).join('');

  // Después de crear los botones, les agregamos el evento click
  // querySelectorAll devuelve una NodeList, usamos forEach para recorrerla
  document.querySelectorAll('.btn-categoria').forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitamos .seleccionado de todos
      document.querySelectorAll('.btn-categoria').forEach(b => b.classList.remove('seleccionado'));
      // Se lo ponemos solo al clickeado
      btn.classList.add('seleccionado');
      // Guardamos qué categoría eligió — leemos el data-cat del HTML
      categoriaSeleccionada = btn.dataset.cat;
    });
  });

  // Eventos para los botones de dificultad
  botonesDificultad.forEach(btn => {
    btn.addEventListener('click', () => {
      botonesDificultad.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      dificultadSeleccionada = btn.dataset.diff;
    });
  });

  // Evento del botón jugar
  btnJugar.addEventListener('click', iniciarJuego);

  // Evento del botón reiniciar
  btnReiniciar.addEventListener('click', reiniciar);
}

// Llamamos a inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializar);



// ================================
// LÓGICA DEL JUEGO
// ================================

function iniciarJuego() {
  // Validación: si no eligió categoría, avisamos
  if (!categoriaSeleccionada) {
    alert('¡Elegí una categoría primero!');
    return; // cortamos la función acá
  }

  // Reseteamos el estado para empezar limpio
  indicePreguntaActual = 0;
  puntaje = 0;
  respuestasDelJuego = [];

  // Tomamos las preguntas de la categoría y dificultad elegidas
  // y las mezclamos con la función mezclar()
  preguntasDelJuego = mezclar([...preguntas[categoriaSeleccionada][dificultadSeleccionada]]);
  // El spread [...array] crea una copia para no modificar el original

  // Cambiamos de pantalla
  mostrarPantalla('juego');

  // Mostramos la primera pregunta
  mostrarPregunta();
}


function mostrarPregunta() {
  // Tomamos la pregunta actual del array
  const preguntaActual = preguntasDelJuego[indicePreguntaActual];

  // Actualizamos la barra de progreso
  // Si estamos en pregunta 3 de 10 → (3/10)*100 = 30%
  const porcentaje = (indicePreguntaActual / preguntasDelJuego.length) * 100;
  progresoBarra.style.width = porcentaje + '%';

  // Actualizamos el contador "Pregunta X de Y"
  contadorTexto.textContent = `Pregunta ${indicePreguntaActual + 1} de ${preguntasDelJuego.length}`;

  // Ponemos el texto de la pregunta
  preguntaTexto.textContent = preguntaActual.pregunta;

  // Creamos los botones de opciones dinámicamente
  // También mezclamos las opciones para que no siempre esté la correcta en el mismo lugar
  const opcionesmezcladas = mezclarOpciones(preguntaActual.opciones, preguntaActual.correcta);

  opcionesContenedor.innerHTML = opcionesmezcladas.map((opcion, indice) => `
    <button class="opcion" data-indice="${indice}">
      ${opcion.texto}
    </button>
  `).join('');

  // Agregamos el evento click a cada opción
  document.querySelectorAll('.opcion').forEach(btn => {
    btn.addEventListener('click', () => {
      // Pasamos el índice de la opción clickeada y si era la correcta
      responderPregunta(parseInt(btn.dataset.indice), opcionesmezcladas, preguntaActual);
    });
  });

  // Iniciamos el timer
  iniciarTimer();
}


function responderPregunta(indiceElegido, opcionesMezcladas, preguntaActual) {
  // Paramos el timer inmediatamente
  clearInterval(intervaloTimer);
  timerContenedor.classList.remove('urgente');

  const esCorrecta = opcionesMezcladas[indiceElegido].esCorrecta;

  // Deshabilitamos todos los botones para que no pueda clickear otro
  document.querySelectorAll('.opcion').forEach(btn => {
    btn.disabled = true;

    const idx = parseInt(btn.dataset.indice);
    if (opcionesMezcladas[idx].esCorrecta) {
      // Marcamos cuál era la correcta (aunque no la haya elegido)
      btn.classList.add('correcta');
    }
  });

  // Si eligió mal, marcamos su elección en rojo
  if (!esCorrecta) {
    document.querySelectorAll('.opcion')[indiceElegido].classList.add('incorrecta');
  } else {
    puntaje++; // sumamos punto solo si acertó
  }

  // Guardamos esta respuesta para el resumen final
  respuestasDelJuego.push({
    pregunta: preguntaActual.pregunta,
    correcta: esCorrecta,
    respuestaElegida: opcionesMezcladas[indiceElegido].texto,
    respuestaCorrecta: opcionesMezcladas.find(o => o.esCorrecta).texto
  });

  // Esperamos 1.2 segundos antes de pasar a la siguiente
  // para que el usuario vea si acertó o no
  setTimeout(siguientePregunta, 1200);
}


function siguientePregunta() {
  indicePreguntaActual++;

  if (indicePreguntaActual < preguntasDelJuego.length) {
    // Todavía quedan preguntas
    mostrarPregunta();
  } else {
    // Se acabaron — mostramos el resultado
    mostrarResultado();
  }
}


// ================================
// TIMER
// ================================

function iniciarTimer() {
  tiempoRestante = 15;
  timerTexto.textContent = tiempoRestante;
  timerContenedor.classList.remove('urgente');

  // setInterval ejecuta la función cada X milisegundos (1000ms = 1 segundo)
  // Guardamos la referencia en intervaloTimer para poder pararlo con clearInterval
  intervaloTimer = setInterval(() => {
    tiempoRestante--;
    timerTexto.textContent = tiempoRestante;

    // Si quedan 5 segundos o menos → modo urgente (CSS lo pone rojo)
    if (tiempoRestante <= 5) {
      timerContenedor.classList.add('urgente');
    }

    // Si llegó a 0 → tiempo agotado, contamos como incorrecta
    if (tiempoRestante === 0) {
      clearInterval(intervaloTimer);
      tiempoAgotado();
    }
  }, 1000);
}


function tiempoAgotado() {
  const preguntaActual = preguntasDelJuego[indicePreguntaActual];

  // Deshabilitamos todas las opciones y mostramos la correcta
  document.querySelectorAll('.opcion').forEach(btn => {
    btn.disabled = true;
    const idx = parseInt(btn.dataset.indice);
    // Necesitamos saber cuál es la correcta — la marcamos verde
    // Como no tenemos opcionesMezcladas acá, regeneramos
  });

  // Marcamos como incorrecta y pasamos a la siguiente
  respuestasDelJuego.push({
    pregunta: preguntaActual.pregunta,
    correcta: false,
    respuestaElegida: '⏱ Tiempo agotado',
    respuestaCorrecta: preguntaActual.opciones[preguntaActual.correcta]
  });

  timerContenedor.classList.remove('urgente');
  setTimeout(siguientePregunta, 1000);
}


// ================================
// RESULTADO FINAL
// ================================

function mostrarResultado() {
  mostrarPantalla('resultado');

  const total = preguntasDelJuego.length;
  const porcentaje = Math.round((puntaje / total) * 100);

  // Emoji y mensaje según el puntaje
  let emoji, titulo;
  if (porcentaje === 100) {
    emoji = '🏆'; titulo = '¡Perfecto! ¡Sos un genio!';
  } else if (porcentaje >= 80) {
    emoji = '🌟'; titulo = '¡Excelente resultado!';
  } else if (porcentaje >= 60) {
    emoji = '👍'; titulo = '¡Muy bien!';
  } else if (porcentaje >= 40) {
    emoji = '😅'; titulo = 'Puede mejorar';
  } else {
    emoji = '💪'; titulo = '¡A seguir practicando!';
  }

  emojiResultado.textContent = emoji;
  tituloResultado.textContent = titulo;
  puntajeTexto.textContent = `Respondiste ${puntaje} de ${total} preguntas correctamente (${porcentaje}%)`;

  // Creamos el resumen de cada pregunta
  resumenContenedor.innerHTML = respuestasDelJuego.map(resp => `
    <div class="resumen-item">
      <span class="resumen-icono">${resp.correcta ? '✅' : '❌'}</span>
      <div>
        <div class="resumen-pregunta">${resp.pregunta}</div>
        <div class="resumen-respuesta ${resp.correcta ? 'ok' : 'mal'}">
          Tu respuesta: ${resp.respuestaElegida}
        </div>
        ${!resp.correcta ? `<div class="resumen-respuesta ok">Correcta: ${resp.respuestaCorrecta}</div>` : ''}
      </div>
    </div>
  `).join('');
}


// ================================
// UTILIDADES
// ================================

// Mezcla un array aleatoriamente (algoritmo Fisher-Yates)
// Es el algoritmo estándar para mezclar arrays de forma uniforme
function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiamos el elemento en posición i con uno aleatorio antes de él
    [array[i], array[j]] = [array[j], array[i]]; // destructuring para swap
  }
  return array;
}

// Mezcla las opciones de una pregunta SIN perder cuál es la correcta
function mezclarOpciones(opciones, indiceCorrecta) {
  // Creamos objetos que llevan el texto y si son correctos
  const opcionesConMarca = opciones.map((texto, indice) => ({
    texto,
    esCorrecta: indice === indiceCorrecta
  }));
  return mezclar(opcionesConMarca);
}

// Muestra una pantalla y oculta las demás
function mostrarPantalla(cual) {
  // Primero ocultamos todas
  [pantallaInicio, pantallaJuego, pantallaResultado].forEach(p => p.classList.add('oculto'));

  // Después mostramos solo la que necesitamos
  if (cual === 'inicio')     pantallaInicio.classList.remove('oculto');
  if (cual === 'juego')      pantallaJuego.classList.remove('oculto');
  if (cual === 'resultado')  pantallaResultado.classList.remove('oculto');
}

// Vuelve todo al estado inicial
function reiniciar() {
  categoriaSeleccionada = null;
  dificultadSeleccionada = 'facil';
  indicePreguntaActual = 0;
  puntaje = 0;
  respuestasDelJuego = [];

  // Reseteamos visualmente la selección de categorías
  document.querySelectorAll('.btn-categoria').forEach(b => b.classList.remove('seleccionado'));
  document.querySelectorAll('.diff').forEach(b => b.classList.remove('activo'));
  document.querySelector('.diff[data-diff="facil"]').classList.add('activo');

  mostrarPantalla('inicio');
}