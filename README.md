# TKC Fumigaciones Group — revisión web

Sitio estático de revisión del frontend (HTML, CSS y JavaScript), preparado para **GitHub Pages**. No es todavía el tema de WordPress ni una versión lista para producción.

## Ver el sitio en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir **el contenido de esta carpeta a la raíz** del repositorio (no la carpeta contenedora).
3. En **Settings → Pages → Build and deployment**, elegir **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Abrir la URL de GitHub Pages una vez desplegado el sitio. `index.html` redirige a la página Inicio.

## Probar localmente

Abrir `index.html` o, preferiblemente, ejecutar `python3 -m http.server 8000` desde esta carpeta y entrar a `http://localhost:8000`. Servir por HTTP evita algunas restricciones del modo `file://`.

## Directorios

- `TKC_Inicio_v4/`: Inicio.
- `TKC_Quienes_Somos_v2/`: Quiénes somos.
- `tkc-corp/`, `tkc-home/`, `hidriko/`, `tkc-security/`: líneas de negocio.
- `como-trabajamos/`, `contacto/`, `blog/`: páginas adicionales.
- `shared-assets/`: recursos, estilos y scripts comunes.

## Antes de publicar en el dominio definitivo

- **Formulario:** es una maqueta; falta conectar recepción de solicitudes y validar consentimiento.
- **Imágenes:** hay espacios de recursos provisionales; no eliminar las rutas sin reemplazarlas.
- **CSS y navegación:** requieren una última prueba visual en Chrome, Safari, Android e iOS.
- **Datos comerciales y páginas legales:** validar con TKC antes de producción. No se agrega aquí una página legal.
- **WordPress:** adaptación pendiente; esta versión está orientada únicamente a revisión en GitHub Pages.

`REVISION_TECNICA.json` lista referencias locales que requieren revisión.


## Actualización de clientes V25
- Se reemplazó Popsy por el logotipo suministrado de Centro Comercial Santafé.
- Se ajustó el archivo NH Hoteles con margen interior para evitar cortes en las marquesinas.
- Se conservó la animación de ambas filas y el resto del sitio.


## Recursos integrados (V27)
Mapa de procesos en Quiénes somos; imágenes de Home y Corp; íconos de plagas y gráficos de las cuatro líneas; cierres con imagen de línea. Se conservan espacios aún pendientes de imagen. Los recursos están en `shared-assets/integrados/`.


## Ajuste V28 — Tarjetas de Inicio
Los cuatro gráficos de líneas se integraron como imágenes WEBP optimizadas en `shared-assets/integrados/*_Card.webp`. Se retiraron los marcadores «Espacio para ícono» de las tarjetas. Cada tarjeta mantiene su logotipo oficial, texto y CTA, con flotación suave del gráfico.


## V30: tarjetas e íconos
- Tarjetas de servicios compactas con íconos grandes a la izquierda.
- Seis íconos SVG oficiales de Hídriko integrados.
- Cierres comerciales diferenciados de Corp y Home.
- WhatsApp blanco en los CTA de las líneas.
- No se alteraron textos comerciales ni los enlaces de destino.


V31: paneles flotantes en cierres Corp/Home/Hídriko/Security, imagen de orientación Home, card de Zona Clientes.


## Ajustes V33 (28/10/2026)
- Corp, sección 02: tarjeta flotante editorial sin imagen, fondo degradado y triángulos animados.
- Cómo trabajamos, hero: nueva imagen de técnico suministrada, sustituye gráfico 01–07.
- Estilos nuevos: shared-assets/tkc-v33-updates.css.

## V34 · Cómo trabajamos
- Card de cierre rediseñada con degradado morado-azul, triángulos animados y controles responsive.
- Siete iconos SVG suministrados integrados a la línea de tiempo (en shared-assets/proceso-iconos/).


V36: Hero a pantalla completa de Cómo trabajamos, nueva imagen de documentación e íconos de TKC Security restaurados en gran formato.
