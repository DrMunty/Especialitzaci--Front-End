# **Anàlisi Integral dels Marcs d'Enginyeria de Programari: Control de Versions, Administració de Sistemes, Protocols de Xarxa i Metodologies Funcionals**

La infraestructura del desenvolupament de programari modern es recolza en una arquitectura fundacional que integra el control de versions distribuït, la interacció amb el sistema a baix nivell mitjançant la terminal, els protocols robustos de la internet global i les metodologies rigoroses de l'anàlisi funcional i les pràctiques àgiles. Aquest informe proporciona una investigació exhaustiva d'aquests cinc dominis crítics per a la competència professional.

## **Control de Versions Distribuït i l'Arquitectura de Git**

El pas dels sistemes de control de versions centralitzats als distribuïts (DVCS) ha eliminat la dependència d'un servidor central, ja que cada desenvolupador posseeix un clon complet del repositori, incloent tot l'historial i les branques. Git opera sobre un model de graf acíclic dirigit (DAG) on cada "commit" és una instantània (snapshot) de l'estat del projecte.

### **Mecànica Interna de Git**

Un repositori de Git es crea amb la comanda git init, que genera un directori ocult .git on s'emmagatzema la base de dades d'objectes i la configuració. El flux de treball es divideix en tres àrees: el **directori de treball** (fitxers actuals), l'**àrea de preparació** o *staging area* (buffer per al següent commit) i el **repositori** (historial permanent).

| Comanda | Àmbit Operatiu | Impacte Tècnic |
| :---- | :---- | :---- |
| git init | Directori Local | Inicialitza un repositori i crea l'estructura de control .git. |
| git clone | Remot a Local | Duplica un repositori existent amb tot el seu historial. |
| git add | Treball a Staging | Prepara els canvis per a la següent instantània. |
| git commit | Staging a Repositori | Registra permanentment la instantània a l'historial local. |
| git branch | Metadades | Crea o llista punters a commits específics. |
| git checkout / switch | Directori de Treball | Canvia l'entorn de treball a una altra branca o commit. |
| git pull | Remot a Local | Obté canvis del remot i els fusiona (fetch \+ merge). |
| git push | Local a Remot | Envia els commits locals al repositori remot. |

### **Branques i Resolució de Conflictes**

Les branques permeten línies de desenvolupament divergents. La fusió (*merge*) integra aquestes línies. Si no hi ha divergència, Git realitza un *fast-forward* (moure el punter endavant); si n'hi ha, realitza un *three-way merge* creant un "commit de fusió".  
Un **conflicte** ocorre quan s'han modificat les mateixes línies d'un fitxer en branques diferents. Git atura el procés i marca els fitxers com "unmerged". El desenvolupador ha d'editar manualment els fitxers identificant les marques \<\<\<\<\<\<\< HEAD (canvis locals) i \>\>\>\>\>\>\> (canvis entrants), resoldre la disputa, fer git add i finalitzar amb git commit.

## **Administració de Sistemes i Ús de la Terminal**

La terminal permet una interacció directa i eficient amb el nucli del sistema operatiu. L'estructura de fitxers en sistemes Unix-like és jeràrquica, partint de l'arrel (/).

### **Navegació i Gestió de Fitxers**

* **Navegació:** pwd mostra la ruta actual, cd permet moure's entre directoris (fent servir .. per al pare o \~ per a l'usuari) i ls \-la llista tots els fitxers amb detalls.  
* **Gestió:** mkdir crea directoris, mv mou o canvia el nom, cp copia i rm \-rf esborra de forma recursiva i forçada.  
* **Redireccions i Pipes:** L'operador \> sobreescriu un fitxer amb la sortida d'una comanda, mentre que \>\> hi afegeix contingut. El **pipe** (|) connecta la sortida d'una comanda amb l'entrada de la següent, permetent processaments complexos.

### **El Model de Permisos de Linux**

Cada fitxer o directori té assignats permisos per a l'**Usuari** (u), el **Grup** (g) i **Altres** (o). Els permisos es defineixen per:

1. **Read (r/4):** Llegir contingut o llistar directoris.  
2. **Write (w/2):** Modificar fitxers o afegir/eliminar fitxers en un directori.  
3. **Execute (x/1):** Executar un fitxer com a programa o entrar en un directori (cd).

La comanda chmod modifica aquests permisos, sovint mitjançant notació octal (ex: 755 significa rwx per a l'usuari i r-x per a la resta).

## **Protocols d'Internet i HTTP**

L'intercanvi d'informació a la xarxa depèn de sistemes de traducció i protocols de comunicació.

### **El Sistema de Noms de Domini (DNS)**

El DNS actua com una agenda telefònica, traduint noms de domini (ex: google.com) en adreces IP numèriques. El procés de resolució inclou:

1. **Cerca local:** Comprovació de la memòria cau del navegador i del sistema operatiu.  
2. **Resolver de l'ISP:** Si no es troba localment, es demana al servidor de l'Internet Service Provider.  
3. **Jerarquia de Servidors:** El resolver consulta els servidors **Root**, després els de **TLD** (ex:.com) i finalment el **Servidor Autoritzat** del domini, que retorna l'IP final.

### **HTTP: Protocol de Sol·licitud-Resposta**

L'HTTP és un protocol **stateless** (sense estat): cada petició és independent i el servidor no recorda interaccions anteriors. Per mantenir l'estat (com sessions d'usuari) s'utilitzen:

* **Cookies:** Petites dades emmagatzemades al navegador que s'envien automàticament en cada petició.  
* **Sessions:** Emmagatzematge de dades al costat del servidor, identificades per un ID de sessió guardat en una cookie.

### **Codis d'Estat i Headers**

El servidor respon amb un codi de tres dígits que indica el resultat de la petició.

| Classe | Categoria | Significat | Exemples |
| :---- | :---- | :---- | :---- |
| 1xx | Informatiu | Petició rebuda, continuant el procés.23 | 100 (Continue) |
| 2xx | Èxit | Acció rebuda i acceptada correctament.23 | 200 (OK), 201 (Created) |
| 3xx | Redirecció | Cal fer accions addicionals per completar la petició.23 | 301 (Moved Permanently), 304 (Not Modified) |
| 4xx | Error Client | La petició té sintaxi incorrecta o no es pot complir.23 | 400 (Bad Request), 401 (Unauthorized), 404 (Not Found) |
| 5xx | Error Servidor | El servidor ha fallat en complir una petició vàlida.23 | 500 (Internal Server Error), 503 (Service Unavailable) |

## **Anàlisi Funcional i Descomposició**

L'anàlisi funcional defineix *què* ha de fer el sistema des de la perspectiva de l'usuari final.

### **Casos d'Ús i Actors**

Un **Actor** és qualsevol entitat externa (persona, un altre sistema o dispositiu) que interactua amb el sistema. Un **Cas d'Ús** descriu una seqüència d'interaccions per assolir un objectiu.

* **Relació d'Inclusió (Include):** Un cas d'ús obligatori dins d'un altre (ex: "Validar usuari" en "Fer una compra").  
* **Relació d'Extensió (Extend):** Comportament opcional en condicions específiques (ex: "Imprimir rebut" en "Pagar").

La **descomposició funcional** divideix un sistema complex en parts més petites i manejables (funcions pures) per facilitar-ne el disseny i la reutilització. Es pot fer mitjançant la tècnica de **User Goal** (objectius de l'usuari) o d'**Event Decomposition** (esdeveniments que generen una resposta del sistema).

## **Extreme Programming (XP)**

L'Extreme Programming és una metodologia àgile que porta les millors pràctiques d'enginyeria a nivells "extrems" per millorar la qualitat i respondre als canvis.

### **Valors Core de XP**

Els cinc valors fonamentals són: **Comunicació**, **Simplicitat**, **Feedback** (Retroalimentació), **Coratge** i **Respecte**.

### **Pràctiques Clau**

XP es basa en 12 pràctiques interconnectades:

* **Test-Driven Development (TDD):** Escriure les proves automàtiques abans que el codi funcional. 
* **Pair Programming:** Dos programadors treballant en una sola màquina (revisió de codi continua).  
* **Continuous Integration (CI):** Integrar el codi diverses vegades al dia per detectar errors ràpidament.  
* **Planning Game:** Col·laboració entre clients i desenvolupadors per definir prioritats i esforç.  
* **Sustainable Pace:** Mantenir un ritme de treball que eviti l'esgotament.  
* **On-site Customer:** Tenir un representant del client disponible per respondre dubtes immediatament.

La combinació d'aquestes eines tècniques (Git, Terminal) amb el coneixement de xarxa (HTTP, DNS) i les metodologies de treball (Anàlisi funcional, XP) constitueix la base d'un enginyer de programari d'alt nivell, capaç de lliurar sistemes robustos en entorns canviants.

