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

Un ordinador pot estar conectat a més d'un ordinador, però per simplificar les conexions,existeix un aparell anomenat Router on es poden conectar molts ordinadors de forma simultànea.

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

- Sencillo: Esta pensat i desenvolupat per ser fàcilment llegit i interpretat per les persones.

- Extensible: Es fàcil d'ampliar i experimentar amb ell.

- Sense estats: No guarda ninguna dada entre dos peticions en la mateixa sessió, tot i que amb les cookies si que es poden guardar certes dades.

- Connexions: Utilitza el protocol TCP i la multiplexació de missatges sobre una única connexió.

## Què es pot controlar amb el HTTP?

- Cache: El servidor pot indicar als proxies i clients que vol emmagatzemar i durant quant de temps.

- Flexibilitat del requisit d'origen: A partir de capçaleres HTTP, es pot flexibilitzar o relaxar la divisió entre client i servidor.

- Autentificació: Proveeix serveis bàsics d'autentificació, amb l'ús de caçaleres específiques o establint un a sessió específica mitjançant l'ús de cookies.

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

- Peticions: Formades per un métode HTTP (un verb com Get/Post o un nom com Options/Head que defineix l'operació que el client vol realitzar). Inclouen també la direcció del rescurs demanat (URL), la versió del protocol HTTP i capçaleres HTTP opcionals.

- Respostes: Formades per la versió del protocol HTTP que s'està utilitzant, un còdi d'estat (si la petició ha sigut exitosa o no), un missatge d'estat (és la descripció del codi anterior), capçaleres HTTP i el recurs que s'ha demanat.

# RENDERITZACIÓ A LA WEB