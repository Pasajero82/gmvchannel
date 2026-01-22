// --- 1. BASE DE DATOS DE ARTISTAS ---
// Aquí pones las redes sociales.
// IMPORTANTE: Usa nombres exactos: "spotify" o "youtube" (en minúsculas) para que salgan los iconos.
const artistProfiles = {
    "prueba": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/TU_LINK_AQUI" },
            { name: "youtube", url: "https://www.youtube.com/@ArruinadosporlaIA" }
        ]
    },
    "cerati_ai": {
        links: [
{ name: "spotify", url: "https://open.spotify.com/intl-es/artist/7AArwG4xye7UBdph5YlAzo?si=c7ZALRo7Tbq9GsXh0duNzw" },
                  // Si no tiene Spotify, simplemente no agregues esa línea.
        ]
    },
  "mano": {
        links: [
{ name: "spotify", url: "https://open.spotify.com/intl-es/artist/7AArwG4xye7UBdph5YlAzo?si=1NYckRkO3bPduorVl4CDLF" },
            { name: "youtube", url: "https://www.youtube.com/@El_Mano_Melo" }
        ]
    },
    "Serenai": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/49rbHXgokkgAB3VpO6IjNo?si=1YMp1IIhQ16w5Kjh4OjUww" },
            { name: "youtube", url: "https://www.youtube.com/channel/UC67GUhK6c0p2wpAZrph7XcA" }
        ]
    },
    "dreams": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/2HbET8k1Bl3D4LBeEG29ur?si=TPTYdcp2TEmVAAa4HKpZhQ" },
            { name: "youtube", url: "https://www.youtube.com/@DrDreamsMusic" }
        ]
    },
    "mind": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/17Yfk4gMQZtxz0OSoTUxpy?si=fP7Mfs4pTISKRLw06kJeLg" },
            { name: "youtube", url: "https://www.youtube.com/@Mind0verImages" }
        ]
    },
    "nexo": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/0MPCuNCQgzdI9GvimywwG3?si=no0iG7ARRKu2Yb32ZnzN5Q" },
            { name: "youtube", url: "https://www.youtube.com/@Nexo_Glitchgrid" }
        ]
    },
    // Puedes agregar más artistas siguiendo este formato...
};


// --- 2. LISTA DE VIDEOS MUSICALES ---
const musicVideos = [
    { 
        id: "Zwpy_VUGLKc",       // ID del video de YouTube
        artist: "El Mano Melo",  // Nombre que sale en pantalla
        title: "La Condena del Ocaso", // Título de la canción
        artistId: "mano",            
    },          
    { 
        id: "beZWkX-W788", 
        artist: "Gustavo Cerati IA", 
        title: "En casa",
        artistId: "cerati_ai",   // Conecta con el perfil de Cerati
      },
   

{ id: "H57BrEK3wJE", artist: "Gustavo Cerati IA", title: "Nada es para siempre", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },

{ id: "dPPR5NSGxo4", artist: "Surviving the Storm", title: "No mercy" },

{ id: "JT_OvLpc1FY", artist: "N E X O", title: "Stack Bags", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "nexo", },

{ id: "P_rUrfrkFRo", artist: "N E X O", title: "2045", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "nexo", },

{ id: "iT7mgfbi1NE", artist: "N E X O", title: "Ghost in the System", badgeText: "🔥JUST DROPPED",badgeColor: "pink", artistId: "nexo", },

{ id: "-fNk4z4sf2Y", artist: "AI KPOP MV", title: "Fire" },

{ id: "WgadSSP0t3w", artist: "Mind Over Images", title: "F*ck You, I'm Frost", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "hmUBqSNnbq4", artist: "Mind Over Images", title: "Mushrooms, Hookers & Hotel Fires", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "2heE_1m5LA4", artist: "Mind Over Images", title: "TWERKGALACTIC", badgeText: "👍STAFF PICK", artistId: "mind", },

{ id: "xYG3W6D74tw", artist: "Mind Over Images", title: "Trip Like Snow", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "mmxgFdw2M94", artist: "Mind Over Images", title: "Hillbilly Hot Mess", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "y_ervCAGoX8", artist: "Mind Over Images", title: "SHUT THE F*CK UP", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "3d5fMNlQp_c", artist: "Mind Over Images", title: "Hallucinations", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "UMUVj5UXzXg", artist: "Mind Over Images", title: "Glitter Gore", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "qptGS-O61qs", artist: "Mind Over Images", title: "Slaycologist", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "u8cDvHQjaiA", artist: "Mind Over Images", title: "Laugh Track", badgeText: "👍STAFF PICK", artistId: "mind",  },

{ id: "h0va52FCk_g", artist: "Mind Over Images", title: "Wrong Hood, Right Vibes", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "MCwdMdqEV34", artist: "Mind Over Images", title: "System Check",badgeText: "👍STAFF PICK", artistId: "mind", },

{ id: "2q_d3JeJi6Q", artist: "Mind Over Images", title: "On Repeat", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "mind", },

{ id: "bVqTbAgwaXk", artist: "UONOSE", title: "Rudolf" },
{ id: "CpivgT2ZDW4", artist: "LUNAVÉ", title: "Eternal Mutation" },
{ id: "g_2Lm-mpldw", artist: "LUNAVÉ", title: "Hello! Ma Baby" },
{ id: "rDY_fl6siaA", artist: "Joel Cathey", title: "We Don't Have It", badgeText: "👍STAFF PICK"  },
{ id: "zQV3RWGlzII", artist: "Joel Cathey", title: "Apeirophobia", badgeText: "👍STAFF PICK" },
{ id: "BUKULnjN3g0", artist: "CzanCzan", title: "We are all fragments of the universe" },
{ id: "9BEQOUE5G1A", artist: "Left Sock", title: "Gazpacho" },

{ id: "YEnHkWCkuG0", artist: "Dr. Dreams", title: "Instant replay", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "dreams", },

{ id: "-OpFxkomkXc", artist: "Dr. Dreams", title: "U R ALL I NEED", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold",artistId: "dreams", },

{ id: "rflyXdl21yA", artist: "ChromeHErtz", title: "Echoes of the Valley" },
{ id: "u_0xIGyO1d4", artist: "Jess Tailor", title: "Why Don’t You See?", badgeText: "🔥JUST DROPPED", badgeColor: "pink"},
{ id: "XRlEhSNTeOM", artist: "DropGhost", title: "Hollow Remedy" },
{ id: "8T1xAy59yjo", artist: "DropGhost", title: "Good Girl" },
{ id: "Ou6yw41Zux8", artist: "DropGhost", title: "Not Alone" },
{ id: "JsOhFJ4RxfU", artist: "Qarmageddon", title: "Pretty when I break" },
{ id: "2ilMIRMGP_0", artist: "Elara", title: "Where no one sees" },
{ id: "x5JDfAejGj8", artist: "Trisha Code", title: "Autumn Drive" },
{ id: "6hqIhWpWrmI", artist: "Trisha Code", title: "Dancing Is The Drug" },
{ id: "s7WXhRBiF48", artist: "Trisha Code", title: "Twisting Borders" },
{ id: "KNdXuEfxBNo", artist: "Trisha Code", title: "Nice And Easy" },
{ id: "kbb4uDQhWLo", artist: "Trisha Code", title: "Laser Night" },
{ id: "RcPFWUBVn5Y", artist: "Trisha Code", title: "Soul to the devil", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "ldL_gmxaxPI", artist: "Trisha Code", title: "I need you", badgeText: "MUST WATCH" },
{ id: "vDgQ04stVFw", artist: "LOUD DRIVE", title: "Overthink Overkill" },
{ id: "GCo0pSIQjQo", artist: "Lil Luxx", title: "No More Calls" },
{ id: "9R4fIAkuES4", artist: "Sukie Smith", title: "We Try Not to Think About it Now" },
{ id: "Ykrjlmf6nuk", artist: "LUNÈS", title: "Hold on the moment" },
{ id: "jrvQMkrxhJM", artist: "LUNÈS", title: "Back to basic", badgeText: "👍STAFF PICK"},
{ id: "L3fbERM_eqA", artist: "Kim Aionic", title: "Paradise Walk" },
{ id: "PIybyaIC8YI", artist: "Kim Aionic", title: "I Don't Know, Just Ask Me" },
{ id: "u6O-jIIaowk", artist: "Kim Aionic", title: "Body Dive" },
{ id: "DLs7ZsQXG_g", artist: "Kim Aionic", title: "I Can't Fall Again" },
{ id: "Dtvl__t37RU", artist: "Kim Aionic", title: "Not Me" }, badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "Vx1UGA_T1nI", artist: "Kelly Boesch", title: "A Very Unusual Town" },
{ id: "DuawegM3fo8", artist: "Kelly Boesch", title: "London Nights" },
{ id: "hJ5sB0fQits", artist: "Kelly Boesch", title: "Midnight Fantasy" },
{ id: "MfsQNSJTmn4", artist: "Kelly Boesch", title: "Tune Out" },
{ id: "fQPtoketXxc", artist: "Kelly Boesch", title: "Don’t Need Wings" },
{ id: "5ASMYUk8blo", artist: "Kelly Boesch", title: "Travelers In the Sound Dimension", badgeText: "MUST WATCH" },
{ id: "E7BuQil73uE", artist: "Philip Straub", title: "Take me" },
{ id: "seDMFeZ1co0", artist: "Philip Straub", title: "Echo Chamber", badgeText: "👍STAFF PICK" },
{ id: "EJbP4hkCJoM", artist: "ALGORITMO", title: "Leggero" },
{ id: "R1TNK9Rnthc", artist: "ALGORITMO", title: "Ibiza" },
{ id: "JbzvkwLVTGM", artist: "ALGORITMO", title: "Ancora", badgeText: "👍STAFF PICK" },
{ id: "3dimf1WB64Y", artist: "Bonny Divine", title: "Christmas Goddess Baddie" },
{ id: "ZZVSSa0AvY4", artist: "Liya", title: "Smooth Like Ink" },
{ id: "L0i7tAB6_UA", artist: "Light and Tale", title: "I hit like I matter" },
{ id: "04_mkYruTyA", artist: "Serenai", title: "One Life",badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold", artistId: "Serenai", },
{ id: "5NDnKm5l0u8", artist: "MYSFT KYTTY", title: "Holy Dirty Sex" },
{ id: "NQPozXvLvQA", artist: "MYSFT KYTTY", title: "Born Bad" },
{ id: "yIbWf17HtoA", artist: "MYSFT KYTTY", title: "All My Clothes Are Black" },
{ id: "wYA_zPF6Pxs", artist: "Dark Sorceress", title: "Fade to hell" },
{ id: "GU7w4FPBdF4", artist: "Dark Sorceress", title: "Ghosts of War" },
{ id: "yPKO4KdDAsc", artist: "Dark Sorceress", title: "Princess of Darkness" },
{ id: "2CTDHTMlS3U", artist: "Synthetic Dread", title: "Salt of The Earth" },
{ id: "YVVCmA_wZgo", artist: "Synthetic Dread", title: "Cold" },
{ id: "jW2ZoQY8PdU", artist: "Synthetic Dread", title: "Neon Black" },
{ id: "310I1wzNFHM", artist: "ATOMIC GLITTER BOMB", title: "WILD STYLIN'" },
{ id: "sFL3LAr69NE", artist: "RZR", title: "Clockwork" },
{ id: "BnFPn8yFSFw", artist: "Benzèn", title: "La Meilleure Équipe" },
{ id: "OvFJq747i28", artist: "Djinx", title: "Mon effet papillon" },
{ id: "o5fxlV3xwhE", artist: "Djinx", title: "Madness Train", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "umqJxHk72_8", artist: "A Million Sparks", title: "By Decree" },
{ id: "sEQTb8dAH3U", artist: "A Million Sparks", title: "Painted Smile, Bare Teeth", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "X3bMM9Y_vGQ", artist: "Ailee Moon & Ai Machines", title: "Pacto de Sangre" },
{ id: "UhBEdkFuIWM", artist: "Ailee Moon & Ai Machines", title: "Aprender a Caer" },
{ id: "qtp7W6891g4", artist: "Scordalus", title: "Faking" },
{ id: "PMIbTPnx1zA", artist: "Scordalus", title: "Outcry" },
{ id: "qrVGT2NaKrE", artist: "Scordalus", title: "2026" },
{ id: "8KQe1l-n-qg", artist: "Sirock", title: "Save Me" },
{ id: "t0LZWayizeY", artist: "Sirock", title: "Ghost In The Crowd" },
{ id: "8I1hDhTDoX8", artist: "Sirock", title: "Who am I" },
{ id: "pANKx20ptFo", artist: "Sirock", title: "Monster In My Head" },
{ id: "kXX4OL8W-vk", artist: "Sirock", title: "Tides Of The Hollow" },
{ id: "j8k356a_Cfk", artist: "Sirock", title: "Dead Inside", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "N39LdXtFs-Q", artist: "NoSinSSS", title: "Shattered Mirror!" },
{ id: "hGUts2uIKIY", artist: "Rock & Babes", title: "Sleepwalker Parade" },
{ id: "H0xclWWRLGA", artist: "Rock & Babes", title: "Let Me Out" },
{ id: "Ls16KJDYQIs", artist: "Son of the Dead Sun", title: "Where Crows Die" },
{ id: "gZLC8vCSUBY", artist: "Son of the Dead Sun", title: "The Flesh of Your Sin" },
{ id: "_sAvJzZfWyM", artist: "Venus Colapse", title: "What remain where you gone" },
{ id: "_lAlyFCk5BQ", artist: "Venus Colapse", title: "The Monster inside" },
{ id: "EhUuLnmgYdM", artist: "Tastier Folk", title: "Still Not You" },
{ id: "ATBE_6o2bzc", artist: "Tastier Folk", title: "I Break Loud", badgeText: "🔥JUST DROPPED",badgeColor: "pink" },
{ id: "S7-8eJX7gQM", artist: "Shattered Silence", title: "Glitch in Your System", badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold"},
{ id: "yIjef5ZvNAg", artist: "Shattered Silence", title: "Cage of Glass",badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold"},
{ id: "vHRCet_rnGg", artist: "Shattered Silence", title: "The Storm Will Fade",badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold"},
{ id: "b-FYk_NdNlk", artist: "Shattered Silence", title: "Crash & Burn",badgeText: "GVM EXCLUSIVE ARTIST", badgeColor: "gold"},
{ id: "Xz5pCBYasEE", artist: "MST7", title: "Star With Me" },
{ id: "HktaN7Y4gZI", artist: "MST7", title: "Beyond the Horizon" },
{ id: "zrkmDqSOXT4", artist: "MST7", title: "When Dreams Become the Horror" },
{ id: "iEwe_JsDbag", artist: "Cale Frombach", title: "Enshittification: The Museum of the Internet" },
{ id: "1NeLWVJ0JOU", artist: "Cale Frombach", title: "Billy's Big Tab" },
{ id: "d_ng_cXst34", artist: "I Monster & C.F.", title: "Dear John", badgeText: "👍STAFF PICK" },
{ id: "Dc8cazBsoE", artist: "Electric Six & C.F.", title: "Randy's Hot Tonight" },
{ id: "YFw2lj8VsOs", artist: "WickedAI", title: "Jedi Mind Tricked" },
];


// --- 3. LISTA DE COMERCIALES ---
// Solo pon los IDs de los videos que quieras usar como pausas
const commercials = [
    "WJAjrmSaLqc", 
    "DbWTWvXzx3U",
    "MvCJEAGTXxs",
    "Yu5xjMGHZM4",
    "HocbEfG5SFw", //gordo pizza
    "CyAWgLO26qo", //spot 3 Africa
    "_cxp_2cPd2Q" //spot 4 Grandma
];

// --- RECOMPENSAS SECRETAS (VIDEOS BLOQUEADOS) ---
// Aquí es donde cambias los videos reales
const secretRewards = [
{ 
        id: "dQw4w9WgXcQ", 
        req: 50, 
        title: "ARCHIVE_01", 
        realArtist: "Rick Astley",      // <--- SEPARADO
        realTitle: "Never Gonna Give You Up" 
	},
{ 
        id: "G36avUZeCb0", 
        req: 80, 
        title: "ARCHIVE_02", 
        realArtist: "Gustavo Cerati IA",        // <--- SEPARADO
        realTitle: "Optimista" 
    },
    { 
        id: "jX4MQHbmvbs", 
        req: 120, 
        title: "ARCHIVE_03", 
        realArtist: "Celebrity Smash Arena", // <--- SEPARADO
        realTitle: "Coming Soon" 
    } 
];
