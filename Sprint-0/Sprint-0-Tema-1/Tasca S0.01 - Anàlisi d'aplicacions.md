## **Webs Comercials**

| Criteri | Descripció: HSN |
| :---- | :---- |
| **Tipologia** | Dinàmica (E-commerce) |
| **URL** | [https://www.hsnstore.com](https://www.hsnstore.com/) |
| **Evidències tècniques** | Arquitectura basada en **PHP** i **SQL**. Ús d'**Adobe Analytics** i **Adobe Target** per a la personalització massiva de l'experiència d'usuari. |
| **Comportament de navegació** | Navegació transaccional amb recomanacions de productes que canvien en temps real segons l'historial de l'usuari. |
| **Temps de càrrega** | Optimitzat mitjançant xarxes de lliurament de continguts (**CDN**) per reduir la latència en les fitxes de producte. |
| **Interacció amb servidor** | Peticions constants per validar l'estoc i actualitzar preus de forma dinàmica durant promocions. |

| Criteri | Descripció: YouTube |
| :---- | :---- |
| **Tipologia** | Híbrida (SSR \+ SPA) |
| **URL** | [https://www.youtube.com](https://www.youtube.com/) |
| **Evidències tècniques** | Backend utilitzant **Python**, **C++**, **Go** i **Java**. Renderitzat inicial al servidor (**SSR**) per a SEO i navegació posterior tipus **SPA**. |
| **Comportament de navegació** | Navegació persistent; el mini-reproductor permet continuar visualitzant contingut mentre s'exploren altres canals o cerques. |
| **Temps de càrrega** | Rendiment d'alta velocitat gràcies a **Google Media CDN** amb més de 3.000 punts de presència globals. |
| **Interacció amb servidor** | Ús massiu de la **YouTube Data API v3** per carregar comentaris, metadades i estats d'interacció en segon pla. |

| Criteri | Descripció: Hobby Consolas |
| :---- | :---- |
| **Tipologia** | Dinàmica (Portal de notícies) |
| **URL** | [https://www.hobbyconsolas.com](https://www.hobbyconsolas.com/) |
| **Evidències tècniques** | Implementació d'un sistema de gestió de continguts (**CMS**) propietari d'Axel Springer. Ús de dades estructurades per a l'optimització en cercadors. |
| **Comportament de navegació** | Estructura jeràrquica tradicional basada en categories, etiquetes i paginació d'articles. |
| **Temps de càrrega** | Aplicació de tècniques de ***lazy loading*** per a les imatges de gran format dins dels articles i anàlisis. |
| **Interacció amb servidor** | Peticions **GET** estàndard per a cada nova pàgina; integració de ginys de tercers per a xarxes socials i publicitat. |

---

## 

## **Aplicacions Web**

| Criteri | Descripció: Buscounchollo |
| :---- | :---- |
| **Tipologia** | Dinàmica (App de reserves) |
| **URL** | [https://www.buscounchollo.com](https://www.buscounchollo.com/) |
| **Evidències tècniques** | Desenvolupament en **PHP** al costat del servidor. Ús intensiu de **AJAX** per a l'actualització de resultats de cerca. |
| **Comportament de navegació** | Interfície molt reactiva on els filtres de preu i destinació actualitzen la vista de forma gairebé instantània. |
| **Temps de càrrega** | Priorització de dades crítiques (preus i disponibilitat) sobre els elements visuals més pesants. |
| **Interacció amb servidor** | Sincronització asíncrona amb motors de reserva externs per verificar places hoteleres en temps real. |

| Criteri | Descripció: Instagram (Web) |
| :---- | :---- |
| **Tipologia** | SPA (Single-Page Application) |
| **URL** | [https://www.instagram.com](https://www.instagram.com/) |
| **Evidències tècniques** | Desenvolupada amb el framework **React**. Utilitza **GraphQL** per a una recuperació de dades altament eficient i personalitzada. |
| **Comportament de navegació** | Experiència fluida d'aplicació nativa amb scroll infinit i transicions sense recàrregues de pàgina completa. |
| **Temps de càrrega** | Descàrrega inicial d'un *bundle* de JavaScript optimitzat seguida d'un ***pre-fetching***d'imatges del feed. |
| **Interacció amb servidor** | Intercanvi bidireccional constant de fitxers **JSON** per a likes, comentaris i actualitzacions de notificacions. |

| Criteri | Descripció: Spotify Web Player |
| :---- | :---- |
| **Tipologia** | SPA / PWA (Progressive Web App) |
| **URL** | [https://open.spotify.com](https://open.spotify.com/) |
| **Evidències tècniques** | Arquitectura basada en **React** i **Redux** per a la gestió d'estat complex. Ús de ***Service Workers*** per a la funcionalitat PWA. |
| **Comportament de navegació** | La reproducció d'àudio és el nucli de l'aplicació i es manté sense interrupcions mentre l'usuari navega per la biblioteca. |
| **Temps de càrrega** | Càrrega asíncrona de metadades i portades; priorització del flux de dades d'àudio sobre la interfície visual. |
| **Interacció amb servidor** | Connexions persistents a la **Spotify Web API** per sincronitzar l'estat de reproducció entre diferents dispositius. |

