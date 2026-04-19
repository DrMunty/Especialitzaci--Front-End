# To do list:
- Explicar el funcionament bàsic de l'arquitectura client-servidor.
- Diferenciar entre front-end, back-end i full-stack.
- Reconèixer les característiques d'aplicacions estàtiques, dinàmiques o SPA.
- Entendre la importància de l'accessibilitat (WCAG) i el SEO.
- Identificar termes com API, DOM o CORS en contextos tècnics.

# COM FUNCIONA LA WEB?
La web es un servei construit sobre una infraestructura tècnica que s'anomena internet. Així que abans de parlar de la Web explicaré com funciona Internet per entendre les bases sobre la cual treballa la Web.

## INTERNET
En la seva idea més bàsica, Internet es una xarxa d'ordinadors que es comuniquen entre sí. Per a que dos ordinadors es puguin comunciar han d'estar connectats entre sí, ja sigui de forma física (amb un cable Ethernet) o mitjançant la xarxa WIFI. <br>

Un ordinador pot estar conectat a més d'un ordinador, però per simplificar les conexions, existeix un aparell anomenat Router on es poden conectar molts ordinadors de forma simultànea.

La funció del Router es simple, assegurar-se que el missatge d'un ordinador arribi al ordinador desitjat. A la seva vegada els Routers poden estar connectats a altres Routers. Aquesta xarxa funciona amb la xarxa telefònica. Per enviar un missatge s'ha de connectar la nostra xarxa a un operador de serveis d'internet (ISP). Un ISP es una empresa que gestiona Routers inteconectats que poden accedir també a Routers d'altres proveïdors. Llavors el nostre misstage viatja a través d'aquestes xarxes fins arribar al seu destí.

Cada ordinador disposa d'una direcció única amb la que es connecta a aquesta xarxa. Llavors, per enviar un misatge d'un ordinador a un altre necessitem saber la seva direcció IP (Ex: 192.168.2.10). Per poder identificar ordinadors facilment transformem aquesta sèrie numèrica a un Nom De Domini (DNS) i això ens facilita buscar aquestes direccions.

## LA WEB

Ara que sabem com funciona Internet, podem definir el que és la web. Els ordinadors que es connecten a la Web s'anomenen Clients i Servidors. Els clients son els dispositius dels usuaris connectats a Internet i els Servidos son ordinadors que emmagatzemen pàgines web, aplicacions...

Quan nosaltres escribim una direcció web al navegador aquest va al servidor DNS per trobar la direcció real del lloc web (el seu IP). Llavors, el navegador envia un missatge de petició HTTP a aquest servidor (li demana una copia de la web). Si el servidor aprova aquesta petició, enviarà la informació a través de paquets, permetent que molts usuaris puguin descarregar la mateixa pàgina al mateix temps.

# FRONT END I BACK END

El front end es allo que l'usuari veu (elements visuals) i el back end son les dades i la infraestructura que permet que l'aplicació funcioni.

Els usuaris poden interactuar directament amb el Front End (Menús de navegació, elements de diseny, botons, imatges i gràfics). Una pantalla o pàgina que l'usuari veu amb diferents components de l'interfície d'usuari s'anomena DOM. Hi han tres llenguatges principals que afecten a la forma en que els usuaris interactúen amb el Front End:

- HTML: Defineix l'estructura
- CSS: Defineix l'estil de l'aplicació web.
- JavaScript: Agrega funcionalitat a l'aplicació.

El Front End pot gestionar les interaccions fundamentals dels usuaris, com mostrar un calendari o comprovar si una direcció introduïda es vàlida. El backend s'encarrega de les sol·licituds més complexes. L'objectiu principal del Front End es que l'usuari pugui interactuar facilment amb l'aplicació, que estigui ben disenyada i mantingui la seva capacitat de resposta en diferents plataformes i dispositius.

El backend administra la funcionalitat general de l'aplicació web. Quan l'usuari interactua amb el front end, aquesta interacció envia una sol·licitud al backend i aquest la procesa i envia una resposta. Per processar aquesta sol·licitud el backend interactua amb:
- Servidors de bases de dades per recuperar o modificar dades.
- Microserveis que realitzen un subconjunt de tasques.
- API de tercers per recopilar informació adicional.

L'objectiu principal del Back End es crear una arquitectura fiable que realitzi les funcions de l'aplicació de forma precisa i eficient. El desenvolupament de back end utilitza llenguatges com Ruby, Java y Python, a part de bases de dades, tecnologies d'emmagatzematge i API.

## PROTOCOL HTTP (Hypertext Transfer Protocol)

Es la base de qualsevol intercanvi de dades a la Web, un protocol d'estructura client-servidor a través del cual un dispositiu fa una petició de dades a un altre, normalment amb un navegador Web. Els missatges que envia el client son peticions i els missatges enviats pel servidor s'anomenen respostes. Entre cada petició i resposta hi han intermediaris anomenats proxies que realitzen diferents funcions.

## Client
El navegador web es el que sempre inicia la comunicació mitjançant una petició de document HTML al servidor. Un cop processat aquest document, envia més peticions per a sol·licitar scripts, CSS i altres dades (vídeos o imatges). Un cop ha reunit totes aquestes dades composa el resultat final: La pàgina web.

## El servidor Web

El servidor es el que s'encarrega de proporcionar a l'usuari les dades que aquest ha demanat.

## Proxies

Son dispositius que, entre client i servidor, gestionen els missatges HTTP. Fan funcions com: Caching, filtrat, balanceig de la càrrega de peticions, autentificació, registre d'esdeveniments...

## Característiques claus del protocol HTTP

- Senzill: Esta pensat i desenvolupat per ser fàcilment llegit i interpretat per les persones.

- Extensible: Es fàcil d'ampliar i experimentar amb ell.

- Sense estats: No guarda ninguna dada entre dos peticions en la mateixa sessió, tot i que amb les cookies si que es poden guardar certes dades.

- Connexions: Utilitza el protocol TCP i la multiplexació de missatges sobre una única connexió.

## Què es pot controlar amb el HTTP?

- Cache: El servidor pot indicar als proxies i clients que vol emmagatzemar i durant quant de temps.

- Flexibilitat del requisit d'origen: A partir de capçaleres HTTP, es pot flexibilitzar o relaxar la divisió entre client i servidor.

- Autentificació: Proveeix serveis bàsics d'autentificació, amb l'ús de caçaleres específiques o establint una sessió específica mitjançant l'ús de cookies.

- Sessions: Permet relacionar peticions amb l'estat del servidor.

## Flux d'HTTP

1. El client obre una connexió TCP, que es farà servir per a realitzar una o varies peticions.

2. El client fa una petició HTTP.

3. El client llegeix la resposta enviada pel servidor.

4. El client tanca o reutilitza la connexió per a futures peticions.

## Missatges HTTP
- HTTP/1.1: En format text i totalment comprensibles directament per una persona.
- HTTP/2: En format binari.

Existeixen les peticions i les respostes:

- Peticions: Formades per un métode HTTP (un verb com Get/Post o un nom com Options/Head que defineix l'operació que el client vol realitzar). Inclouen també la direcció del recurs demanat (URL), la versió del protocol HTTP i capçaleres HTTP opcionals.

- Respostes: Formades per la versió del protocol HTTP que s'està utilitzant, un còdi d'estat (si la petició ha sigut exitosa o no), un missatge d'estat (és la descripció del codi anterior), capçaleres HTTP i el recurs que s'ha demanat.

## **Tipologies d'Aplicacions Web i Estratègies de Renderització**

L'elecció de l'estratègia de renderització és una de les decisions més importants per al rendiment d'una web, ja que influeix directament en mètriques com el Time to First Byte (TTFB) i el First Contentful Paint (FCP).

### **Renderització al Servidor (SSR) i Llocs Estàtics**

La renderització al servidor (Server-Side Rendering) genera l'HTML complet per a cada petició en temps real. Això és ideal per al SEO i per a pàgines amb contingut molt dinàmic. Els llocs estàtics, en canvi, es generen en el moment de la compilació (build time), produint fitxers HTML que es poden servir des de CDNs amb una latència mínima. Tanmateix, aquesta estratègia és difícil d'escalar per a llocs amb milions de pàgines uniques.

### **Single-Page Applications (SPA) i Aplicacions de Renderització al Client**

Les SPAs carreguen un únic document HTML i utilitzen JavaScript per actualitzar dinàmicament el DOM a mesura que l'usuari interactua amb l'aplicació. Això elimina la necessitat de recarregar la pàgina completa per cada navegació, però requereix que el desenvolupador gestioni el "client-side routing" i la hidratació del codi JavaScript inicial. Un cas d'estudi rellevant és el de Netflix, que utilitza una estratègia de renderització híbrida: serveix l'HTML inicial mitjançant SSR (utilitzant React) però elimina la hidratació de React a la pàgina d'aterratge per reduir el pes del JavaScript en 200kB, utilitzant JavaScript pur (Vanilla JS) per a interaccions bàsiques.

### **Progressive Web Apps (PWA)**      

Les PWAs combinen l'accessibilitat dels llocs web tradicionals amb les capacitats de les aplicacions nadiues. Es basen en tecnologies com el manifest de l'aplicació web (un fitxer JSON que permet la instal·lació a la pantalla d'inici) i els Service Workers, que són scripts que s'executen en segon pla per permetre el funcionament offline i les notificacions push. El principi de "millora progressiva" és fonamental: l'aplicació ha de funcionar correctament en qualsevol navegador, però oferirà prestacions avançades en aquells entorns que suportin les APIs més modernes.

| Tipologia d'Aplicació | Mecanisme de Càrrega | Avantatges Clau | Desavantatges |
| :---- | :---- | :---- | :---- |
| Estàtica (SSG) | Generada al moment del build. | Velocitat extrema, baix cost. | Contingut menys dinàmic. |
| Dinàmica (SSR) | Generada al servidor per petició. | Excel·lent per SEO, dades fresques. | Major TTFB per processament. |
| SPA | Renderització al navegador (JS). | Fluïdesa d'aplicació nativa. | Càrrega inicial pesada (Bundle). |
| PWA | Web amb Service Workers i Manifest. | Funcionament offline, instal·lable. | Dependència del motor del navegador. |

## **El Motor de Renderització i el Camí Crític del Navegador**

Els navegadors web transformen codi font en representacions visuals a través del Camí Crític de Renderització.

### **Construcció del DOM, CSSOM i l'Arbre de Renderització**

L'anàlisi (parsing) és el primer pas. El motor del navegador analitza el marcatge HTML per construir el **Document Object Model (DOM)**, una estructura en arbre que representa la jerarquia dels elements. Paral·lelament, s'analitzen les regles CSS per crear el **CSS Object Model (CSSOM)**. Aquests dos models es combinen per formar l'**Arbre de Renderització (Render Tree)**, que conté només els nodes visibles de la pàgina (excloent elements com el \<head\> o aquells amb display: none).

### **Disseny, Pintura i Composició**

Un cop determinats els nodes visibles, el navegador entra en la fase de **Disseny (Layout)**, on es calcula la geometria de cada element —mida i posició— basant-se en el viewport. La fase de **Pintura (Paint)** és on aquests "quadres" calculats es converteixen en píxels reals en pantalla (rasterització). Finalment, la composició gestiona com les diferents capes s'uneixen. Cal tenir en compte que JavaScript s'executa majoritàriament en el "fil principal" (main thread), el mateix que s'encarrega del renderitzat, per la qual cosa tasques llargues de codi poden bloquejar la interfície.

### **Motors de Renderització Actuals**

* **Blink:** Motor de Google utilitzat a Chrome, Edge, Brave i Opera. 
* **Gecko:** Utilitzat per Mozilla Firefox, conegut pel seu compromís amb els estàndards i la privadesa.
* **WebKit:** El motor d'Apple per a Safari, caracteritzat pel seu rendiment i eficiència en dispositius macOS i iOS.

## **Sistemes de Gestió de Continguts (CMS) i Arquitectures Modernes**

Un **Content Management System (CMS)** permet als usuaris publicar, organitzar i eliminar diversos tipus de contingut sense necessitat de coneixements tècnics profunds.

### **Tipus de CMS segons la seva Arquitectura Tècnica**

1. **CMS Acoblat (Tradicional):** On el back-end i el front-end estan estretament vinculats, com WordPress o Drupal.  
2. **CMS SaaS (Software as a Service):** Solucions allotjades al núvol com Wix o Squarespace.
3. **CMS Desacoblat:** Separa la presentació del back-end i es comunica a través d'una API.  
4. **Headless CMS (Sense cap):** Només proporciona el back-end i l'emmagatzematge del contingut, deixant la interfície completament en mans d'una aplicació dissenyada a mida.

| CMS | Arquitectura | Avantatges | Cas d'Ús Ideal |
| :---- | :---- | :---- | :---- |
| WordPress | Acoblada (Open Source) | Gran ecosistema de plugins i temes. | Blogs i webs corporatives mitjanes. |
| Drupal | Acoblada (Flexible) | Gran escalabilitat i gestió d'usuaris. | Portals complexos i institucionals. |
| Shopify | SaaS / Tancada | Infraestructura de pagaments segura. | Comerç electrònic sense manteniment. |
| Adobe Exp. Manager | Híbrid / DAM | Gestió avançada d'actius digitals. | Grans corporacions i multinacionals. |

## **Seguretat Web i Vulnerabilitats Comunes**

La seguretat web protegeix tant el servidor com el client de vectors d'atac sofisticats.

* **Seguretat en el Transport (HTTPS):** L'adopció de HTTPS és avui dia un requisit estàndard, protegint la informació mitjançant TLS.
* **Cross-Site Scripting (XSS):** Vulnerabilitat que permet injectar codi maliciós en les pàgines. Els tipus inclouen l'XSS emmagatzemat, el reflectit i el basat en DOM. La prevenció requereix el sanejament d'entrades i l'ús de capçaleres com HttpOnly.
* **Cross-Origin Resource Sharing (CORS):** Mecanisme que permet saltar la política de "mateix origen" de forma controlada mitjançant capçaleres HTTP. Inclou peticions de tipus **Preflight** (OPTIONS) per verificar permisos.

## **Accessibilitat Web i SEO Tècnic**

L'accessibilitat web garanteix que les persones amb discapacitat puguin interactuar amb la web, basant-se en les pautes WCAG 2.2.22

### **Principis WCAG (POUR)**

1. **Perceptible:** Informació presentada en formes entenedores (text alternatiu, contrast). 
2. **Operable:** Interfície utilitzable (navegació per teclat, sense parpelleigs perillosos).  
3. **Comprensible:** Funcionament previsible i ajudes en formularis.
4. **Robust:** Compatibilitat amb tecnologies d'assistència mitjançant codi semàntic.

### **Optimització SEO i Core Web Vitals**

L'SEO modern se centra en l'experiència de l'usuari (Core Web Vitals) i el marc E-E-A-T (Experiència, Expertesa, Autoritat, Confiança). Les mètriques clau inclouen l'**LCP** (temps de càrrega del contingut principal), l'**INP** (latència d'interacció) i el **CLS** (estabilitat visual).

## **Manipulació del DOM i Interactivitat**

La interactivitat es basa en la capacitat de JavaScript per manipular el **Document Object Model (DOM)**.

* **Selecció i Traversal:** Mètodes com querySelector(), getElementById() o getElementsByClassName() permeten accedir als nodes.
* **Modificació:** Es poden canviar estils (.style), contingut (textContent, innerHTML) i atributs. 
* **Esdeveniments:** L'ús de addEventListener() permet respondre a accions com click, keydown o submit, mentre que preventDefault() evita comportaments per defecte com el refresc de pàgina en formularis.

