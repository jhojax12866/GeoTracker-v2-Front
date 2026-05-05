/**
 * GeoTracker v2 — Configuración de entorno
 *
 * En LOCAL: apunta al backend local (puerto 4000)
 * En VERCEL: Vercel inyecta VITE_BACKEND_URL en el build,
 *            o nosotros editamos esta variable manualmente.
 *
 * ⚠️ IMPORTANTE: Después de hacer deploy en Railway,
 *    reemplaza el valor de BACKEND_URL con tu URL real de Railway.
 *    Ejemplo: "https://geotracker-backend-production.up.railway.app"
 */

const CONFIG = {
  // ── Cambiar esta URL después del deploy en Railway ──────────────────────────
  BACKEND_URL: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:4000"
    : "geotracker-v2-back-production.up.railway.app",  // ← EDITAR ANTES DE DEPLOY EN VERCEL
  // ────────────────────────────────────────────────────────────────────────────

  // Configuración de GPS
  GPS: {
    enableHighAccuracy: true,
    timeout:            20000,   // 20 segundos máximo esperando GPS
    maximumAge:         0,       // Sin caché, siempre posición fresca

    // Filtros de calidad
    MIN_ACCURACY_M:      150,    // Ignorar posiciones con error > 150m
    MIN_DISTANCE_M:      1,      // Solo emitir si el usuario se movió > 1m
    MAX_SPEED_MS:        55,     // Ignorar saltos de > 200km/h (GPS glitch)
    EMIT_INTERVAL_MS:   1000,   // Enviar al servidor máximo 1 vez por segundo
  },

  // Configuración del mapa
  MAP: {
    DEFAULT_CENTER: [4.711, -74.072],  // Bogotá como fallback
    DEFAULT_ZOOM:   4,
    FLY_DURATION:   1.2,               // Segundos de animación flyTo
    MAX_PATH_POINTS: 500,
  },
};

// Congelar el objeto para evitar modificaciones accidentales
Object.freeze(CONFIG);
Object.freeze(CONFIG.GPS);
Object.freeze(CONFIG.MAP);
