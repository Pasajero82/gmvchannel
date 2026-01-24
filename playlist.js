// --- 1. BASE DE DATOS DE ARTISTAS ---
const artistProfiles = {
    "prueba": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/TU_LINK_AQUI" },
            { name: "youtube", url: "https://www.youtube.com/@ArruinadosporlaIA" }
        ]
    },
    "cerati_ai": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/7AArwG4xye7UBdph5YlAzo?si=c7ZALRo7Tbq9GsXh0duNzw" }
        ]
    },
    "mano": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/artist/7AArwG4xye7UBdph5YlAzo?si=1NYckRkO3bPduorVl4CDLF" },
            { name: "youtube", url: "https://www.youtube.com/@El_Mano_Melo" }
        ]
    },
    "serenai": {
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

    "tyler": {
        links: [
            { name: "spotify", url: "https://open.spotify.com/intl-es/track/30jGwOH3MVM2xVM8k4QO0a?si=07be85d9bcb74caa" },
            { name: "youtube", url: "https://www.youtube.com/channel/UCfKOwBhdhjXlw8wWE-3iTIg" }
        ]
    }
};

// --- 2. LISTA DE VIDEOS (SE CARGA DESDE GOOGLE SHEETS) ---
let musicVideos = [];

function loadVideosFromSheet() {
    // Agregar timestamp para evitar caché
    const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrBDDpK_Th8p2zl_uO1T20ojNV59hUFfkdi4JVq8dYoGFNuOO3-d8K0KHGk0aPcXhJEOutURUIBW5h/pub?gid=1853629339&single=true&output=csv&t=" + new Date().getTime();
    
    fetch(CSV_URL)
        .then(response => response.text())
        .then(csvText => {
            const lines = csvText.trim().split('\n');
            musicVideos = [];
            
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line) {
                    const columns = line.split(',');
                    
                    if (columns.length >= 3) {
                        const video = {
                            id: columns[0].replace(/^["']|["']$/g, '').trim(),
                            artist: columns[1].replace(/^["']|["']$/g, '').trim(),
                            title: columns[2].replace(/^["']|["']$/g, '').trim(),
                        };
                        
                        if (columns[3] && columns[3].trim()) video.badgeText = columns[3].replace(/^["']|["']$/g, '').trim();
                        if (columns[4] && columns[4].trim()) video.badgeColor = columns[4].replace(/^["']|["']$/g, '').trim();
                        if (columns[5] && columns[5].trim()) video.artistId = columns[5].replace(/^["']|["']$/g, '').trim();
                        
                        musicVideos.push(video);
                    }
                }
            }
            
            console.log("✅ Videos cargados desde Google Sheets:", musicVideos.length);
        })
        .catch(error => {
            console.error('❌ Error al cargar videos:', error);
        });
}

loadVideosFromSheet();

// --- 3. LISTA DE COMERCIALES ---
const commercials = [
    "WJAjrmSaLqc", 
    "DbWTWvXzx3U",
    "MvCJEAGTXxs",
    "Yu5xjMGHZM4",
    "HocbEfG5SFw",
    "CyAWgLO26qo",
    "_cxp_2cPd2Q"
];

// --- 4. RECOMPENSAS SECRETAS ---
const secretRewards = [
    { 
        id: "dQw4w9WgXcQ", 
        req: 50, 
        title: "ARCHIVE_01", 
        realArtist: "Rick Astley",
        realTitle: "Never Gonna Give You Up" 
    },
    { 
        id: "G36avUZeCb0", 
        req: 80, 
        title: "ARCHIVE_02", 
        realArtist: "Gustavo Cerati IA",
        realTitle: "Optimista" 
    },
    { 
        id: "jX4MQHbmvbs", 
        req: 120, 
        title: "ARCHIVE_03", 
        realArtist: "Celebrity Smash Arena",
        realTitle: "Coming Soon" 
    } 
];

// Recargar videos cada 5 minutos
setInterval(loadVideosFromSheet, 300000);