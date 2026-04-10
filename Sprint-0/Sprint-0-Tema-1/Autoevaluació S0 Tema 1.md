## **1\. Importància de l'Accessibilitat Web**

L'accessibilitat web és el conjunt de pràctiques que garanteixen que qualsevol persona, independentment de les seves capacitats físiques o cognitives, pugui percebre, navegar i interactuar amb la xarxa de manera autònoma. La seva importància radica en tres pilars:

* **Inclusió i Ètica:** Permet l'accés universal a la informació i serveis digitals per a persones amb discapacitats visuals, auditives o motrius.  
* **Beneficis Tècnics i SEO:** Una web accessible sol estar millor estructurada semànticament, cosa que facilita que els motors de cerca (com Google) indexin millor el contingut, millorant el posicionament orgànic.  
* **Imperatiu Legal:** Normatives com la **Llei Europea d'Accessibilitat (EAA)** estableixen requisits obligatoris amb possibles sancions per incompliment.

## **2\. Arquitectura d'un Navegador Web**

Els navegadors moderns són aplicacions complexes dividides en set components principals que treballen de forma coordinada:

1. **Interfície d'usuari (UI):** Inclou tots els elements visuals (barra d'adreces, botons de navegació, pestanyes).  
2. **Motor del navegador (Browser Engine):** Actua com a intermediari, gestionant les interaccions entre la interfície i el motor de renderització.  
3. **Motor de renderització (Rendering Engine):** Responsable de parsejar l'HTML i el CSS per dibuixar visualment la pàgina a la pantalla (ex: Blink, WebKit, Gecko).  
4. **Xarxa (Networking):** Gestiona les peticions HTTP i la seguretat en la comunicació amb els servidors.  
5. **Intèrpret de JavaScript:** Executa el codi dinàmic de les pàgines.  
6. **Backend de la UI:** S'utilitza per dibuixar elements bàsics del sistema operatiu, com finestres o quadres de selecció.  
7. **Persistència de dades:** Gestiona l'emmagatzematge local de dades com cookies, sessions i bases de dades internes.

## **3\. Diferències entre Front-end i Back-end**

El desenvolupament web es divideix en dues grans àrees segons on s'executa el codi i quin és el seu objectiu principal:

| Aspecte | Front-end | Back-end |
| :---- | :---- | :---- |
| **Definició** | Part visible amb la qual interactua l'usuari (client). | Infraestructura interna que fa funcionar l'app (servidor). |
| **Objectiu** | Experiència d'usuari (UX), accessibilitat i disseny. | Lògica de dades, seguretat i arquitectura de xarxa. |
| **Tecnologies** | HTML, CSS, JavaScript i frameworks (React, Vue). | Python, Java, PHP, Ruby i bases de dades (SQL, NoSQL). |
| **Simultaneïtat** | Cada usuari té la seva pròpia còpia al navegador. | Ha de gestionar milers de sol·licituds alhora. |

## **4\. Control mitjançant el Protocol HTTP**

L'HTTP (Protocol de Transferència d'Hipertext) és la base de l'intercanvi de dades a la web i permet controlar diversos aspectes clau de la comunicació:

* **Peticions i Respostes:** Controla l'estat de la comunicació mitjançant verbs (GET, POST) i codis d'estat (200 OK, 404 Not Found).
* **Gestió de Sessions:** L'ús de **cookies** permet al servidor reconèixer usuaris i mantenir sessions actives.
* **Seguretat i CORS:** El navegador utilitza capçaleres per aplicar la política de "mateix origen" o permetre peticions de dominis creuats (**CORS**) de forma segura.
* **Autenticació:** Gestió de l'accés a recursos protegits mitjançant capçaleres com Authorization.  
* **Memòria Catxé:** Defineix com s'han d'emmagatzemar els recursos temporalment per accelerar càrregues futures.

## **5\. Tipus d'Emmagatzematge Local al Navegador**

Els navegadors moderns ofereixen diverses tecnologies per guardar dades al dispositiu de l'usuari:

* **Cookies:** Usades principalment per a sessions i seguiment. Tenen un límit de \~4 KB i s'envien al servidor en cada petició.  
* **Web Storage (LocalStorage i SessionStorage):** Emmagatzematge de claus-valor (5-10 MB). LocalStorage és persistent, mentre que SessionStorage s'esborra en tancar la pestanya.  
* **IndexedDB:** Una base de dades NoSQL asíncrona per guardar grans volums de dades estructurades, fins i tot fitxers o blobs (capaç de guardar GBs segons el disc).  
* **Cache API:** Dissenyada per emmagatzemar respostes de xarxa, permetent que les aplicacions web (com les PWAs) funcionin sense connexió a internet.