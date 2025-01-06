import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Esto precacheará todos los archivos mencionados en el manifiesto (se agrega automáticamente durante la construcción de la app).
precacheAndRoute(self.__WB_MANIFEST);

// Ejemplo de estrategia de cache para imágenes
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images-cache",
  })
);

// Estrategia para archivos HTML (se cargan primero desde la red, si no, desde la caché)
registerRoute(
  ({ request }) => request.destination === "document",
  new StaleWhileRevalidate({
    cacheName: "html-cache",
  })
);

// Estrategia para archivos JS y CSS
registerRoute(
  ({ request }) => request.destination === "script" || request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "static-assets",
  })
);
