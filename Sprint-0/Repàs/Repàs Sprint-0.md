# **Anàlisi Integral dels Marcs d'Enginyeria de Programari: Control de Versions, Administració de Sistemes, Protocols de Xarxa i Metodologies Funcionals**

La infraestructura del desenvolupament de programari modern es recolza en una arquitectura fundacional que integra el control de versions distribuït, la interacció amb el sistema a baix nivell mitjançant la terminal, els protocols robustos de la internet global i les metodologies rigoroses de l'anàlisi funcional i les pràctiques àgils. Aquest informe proporciona una investigació exhaustiva d'aquests cinc dominis crítics per a la competència professional.

## **Control de Versions Distribuït i l'Arquitectura de Git**

El pas dels sistemes de control de versions centralitzats als distribuïts (DVCS) ha eliminat la dependència d'un servidor central, ja que cada desenvolupador posseeix un clon complet del repositori, incloent tot l'historial i les branques.1 Git opera sobre un model de graf acíclic dirigit (DAG) on cada "commit" és una instantània (snapshot) de l'estat del projecte.1

### **Mecànica Interna de Git**

Un repositori de Git es crea amb la comanda git init, que genera un directori ocult .git on s'emmagatzema la base de dades d'objectes i la configuració.1 El flux de treball es divideix en tres àrees: el **directori de treball** (fitxers actuals), l'**àrea de preparació** o *staging area* (buffer per al següent commit) i el **repositori** (historial permanent).1

| Comanda | Àmbit Operatiu | Impacte Tècnic |
| :---- | :---- | :---- |
| git init | Directori Local | Inicialitza un repositori i crea l'estructura de control .git.1 |
| git clone | Remot a Local | Duplica un repositori existent amb tot el seu historial.1 |
| git add | Treball a Staging | Prepara els canvis per a la següent instantània.1 |
| git commit | Staging a Repositori | Registra permanentment la instantània a l'historial local.1 |
| git branch | Metadades | Crea o llista punters a commits específics.1 |
| git checkout / switch | Directori de Treball | Canvia l'entorn de treball a una altra branca o commit.1 |
| git pull | Remot a Local | Obté canvis del remot i els fusiona (fetch \+ merge).1 |
| git push | Local a Remot | Envia els commits locals al repositori remot.1 |

### **Branques i Resolució de Conflictes**

Les branques permeten línies de desenvolupament divergents. La fusió (*merge*) integra aquestes línies. Si no hi ha divergència, Git realitza un *fast-forward* (moure el punter endavant); si n'hi ha, realitza un *three-way merge* creant un "commit de fusió".4  
Un **conflicte** ocorre quan s'han modificat les mateixes línies d'un fitxer en branques diferents.4 Git atura el procés i marca els fitxers com "unmerged". El desenvolupador ha d'editar manualment els fitxers identificant les marques \<\<\<\<\<\<\< HEAD (canvis locals) i \>\>\>\>\>\>\> (canvis entrants), resoldre la disputa, fer git add i finalitzar amb git commit.4

## **Administració de Sistemes i Ús de la Terminal**

La terminal permet una interacció directa i eficient amb el nucli del sistema operatiu. L'estructura de fitxers en sistemes Unix-like és jeràrquica, partint de l'arrel (/).5

### **Navegació i Gestió de Fitxers**

* **Navegació:** pwd mostra la ruta actual, cd permet moure's entre directoris (fent servir .. per al pare o \~ per a l'usuari) i ls \-la llista tots els fitxers amb detalls.5  
* **Gestió:** mkdir crea directoris, mv mou o canvia el nom, cp copia i rm \-rf esborra de forma recursiva i forçada.5  
* **Redireccions i Pipes:** L'operador \> sobreescriu un fitxer amb la sortida d'una comanda, mentre que \>\> hi afegeix contingut.6 El **pipe** (|) connecta la sortida d'una comanda amb l'entrada de la següent, permetent processaments complexos.5

### **El Model de Permisos de Linux**

Cada fitxer o directori té assignats permisos per a l'**Usuari** (u), el **Grup** (g) i **Altres** (o).6 Els permisos es defineixen per:

1. **Read (r/4):** Llegir contingut o llistar directoris.6  
2. **Write (w/2):** Modificar fitxers o afegir/eliminar fitxers en un directori.6  
3. **Execute (x/1):** Executar un fitxer com a programa o entrar en un directori (cd).6

La comanda chmod modifica aquests permisos, sovint mitjançant notació octal (ex: 755 significa rwx per a l'usuari i r-x per a la resta).7

## **Protocols d'Internet i HTTP**

L'intercanvi d'informació a la xarxa depèn de sistemes de traducció i protocols de comunicació.

### **El Sistema de Noms de Domini (DNS)**

El DNS actua com una agenda telefònica, traduint noms de domini (ex: google.com) en adreces IP numèriques.10 El procés de resolució inclou:

1. **Cerca local:** Comprovació de la memòria cau del navegador i del sistema operatiu.10  
2. **Resolver de l'ISP:** Si no es troba localment, es demana al servidor de l'Internet Service Provider.12  
3. **Jerarquia de Servidors:** El resolver consulta els servidors **Root**, després els de **TLD** (ex:.com) i finalment el **Servidor Autoritzat** del domini, que retorna l'IP final.10

### **HTTP: Protocol de Sol·licitud-Resposta**

L'HTTP és un protocol **stateless** (sense estat): cada petició és independent i el servidor no recorda interaccions anteriors.15 Per mantenir l'estat (com sessions d'usuari) s'utilitzen:

* **Cookies:** Petites dades emmagatzemades al navegador que s'envien automàticament en cada petició.16  
* **Sessions:** Emmagatzematge de dades al costat del servidor, identificades per un ID de sessió guardat en una cookie.16

### **Codis d'Estat i Headers**

El servidor respon amb un codi de tres dígits que indica el resultat de la petició.20

| Classe | Categoria | Significat | Exemples |
| :---- | :---- | :---- | :---- |
| 1xx | Informatiu | Petició rebuda, continuant el procés.23 | 100 (Continue) |
| 2xx | Èxit | Acció rebuda i acceptada correctament.23 | 200 (OK), 201 (Created) |
| 3xx | Redirecció | Cal fer accions addicionals per completar la petició.23 | 301 (Moved Permanently), 304 (Not Modified) |
| 4xx | Error Client | La petició té sintaxi incorrecta o no es pot complir.23 | 400 (Bad Request), 401 (Unauthorized), 404 (Not Found) |
| 5xx | Error Servidor | El servidor ha fallat en complir una petició vàlida.23 | 500 (Internal Server Error), 503 (Service Unavailable) |

## **Anàlisi Funcional i Descomposició**

L'anàlisi funcional defineix *què* ha de fer el sistema des de la perspectiva de l'usuari final.24

### **Casos d'Ús i Actors**

Un **Actor** és qualsevol entitat externa (persona, un altre sistema o dispositiu) que interactua amb el sistema.24 Un **Cas d'Ús** descriu una seqüència d'interaccions per assolir un objectiu.24

* **Relació d'Inclusió (Include):** Un cas d'ús obligatori dins d'un altre (ex: "Validar usuari" en "Fer una compra").24  
* **Relació d'Extensió (Extend):** Comportament opcional en condicions específiques (ex: "Imprimir rebut" en "Pagar").24

La **descomposició funcional** divideix un sistema complex en parts més petites i manejables (funcions pures) per facilitar-ne el disseny i la reutilització.26 Es pot fer mitjançant la tècnica de **User Goal** (objectius de l'usuari) o d'**Event Decomposition** (esdeveniments que generen una resposta del sistema).27

## **Extreme Programming (XP)**

L'Extreme Programming és una metodologia àgil que porta les millors pràctiques d'enginyeria a nivells "extrems" per millorar la qualitat i respondre als canvis.28

### **Valors Core de XP**

Els cinc valors fonamentals són: **Comunicació**, **Simplicitat**, **Feedback** (Retroalimentació), **Coratge** i **Respecte**.30

### **Pràctiques Clau**

XP es basa en 12 pràctiques interconnectades 28:

* **Test-Driven Development (TDD):** Escriure les proves automàtiques abans que el codi funcional.28  
* **Pair Programming:** Dos programadors treballant en una sola màquina (revisió de codi continua).29  
* **Continuous Integration (CI):** Integrar el codi diverses vegades al dia per detectar errors ràpidament.29  
* **Planning Game:** Col·laboració entre clients i desenvolupadors per definir prioritats i esforç.29  
* **Sustainable Pace:** Mantenir un ritme de treball que eviti l'esgotament.31  
* **On-site Customer:** Tenir un representant del client disponible per respondre dubtes immediatament.29

La combinació d'aquestes eines tècniques (Git, Terminal) amb el coneixement de xarxa (HTTP, DNS) i les metodologies de treball (Anàlisi funcional, XP) constitueix la base d'un enginyer de programari d'alt nivell, capaç de lliurar sistemes robustos en entorns canviants.

#### **Obras citadas**

1. About Git \- GitHub Docs, fecha de acceso: abril 19, 2026, [https://docs.github.com/en/get-started/using-git/about-git](https://docs.github.com/en/get-started/using-git/about-git)  
2. gittutorial Documentation \- Git, fecha de acceso: abril 19, 2026, [https://git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial)  
3. Common Git commands \- GitLab Docs, fecha de acceso: abril 19, 2026, [https://docs.gitlab.com/topics/git/commands/](https://docs.gitlab.com/topics/git/commands/)  
4. Basic Branching and Merging \- Git, fecha de acceso: abril 19, 2026, [https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)  
5. Beginner Linux Navigation Manual | Pluralsight, fecha de acceso: abril 19, 2026, [https://www.pluralsight.com/resources/blog/guides/beginner-linux-navigation-manual](https://www.pluralsight.com/resources/blog/guides/beginner-linux-navigation-manual)  
6. Linux file permissions explained \- Red Hat, fecha de acceso: abril 19, 2026, [https://www.redhat.com/en/blog/linux-file-permissions-explained](https://www.redhat.com/en/blog/linux-file-permissions-explained)  
7. How to Set Permissions in Linux: A Guide to chmod and chown | DigitalOcean, fecha de acceso: abril 19, 2026, [https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux](https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux)  
8. How to Change Permissions on cyberserver.uml.edu | UNIX | Tutorials \- UMass Lowell, fecha de acceso: abril 19, 2026, [https://gps.uml.edu/tutorials/unix-linux/unix/chmod.htm](https://gps.uml.edu/tutorials/unix-linux/unix/chmod.htm)  
9. Linux File Permissions \- HCC-DOCS \- Holland Computing Center, fecha de acceso: abril 19, 2026, [https://hcc.unl.edu/docs/handling\_data/data\_storage/linux\_file\_permissions/](https://hcc.unl.edu/docs/handling_data/data_storage/linux_file_permissions/)  
10. What is DNS? | How DNS works \- Cloudflare, fecha de acceso: abril 19, 2026, [https://www.cloudflare.com/learning/dns/what-is-dns/](https://www.cloudflare.com/learning/dns/what-is-dns/)  
11. DNS Explained: A Beginner's Guide to How It Works \- KodeKloud, fecha de acceso: abril 19, 2026, [https://kodekloud.com/blog/dns-explained-a-simple-guide/](https://kodekloud.com/blog/dns-explained-a-simple-guide/)  
12. How DNS Works: Step-by-Step Guide in Simple Words | by Manoj Mantha \- Medium, fecha de acceso: abril 19, 2026, [https://medium.com/@manojmantha/how-dns-works-step-by-step-guide-in-simple-words-d7dbd69e0c5c](https://medium.com/@manojmantha/how-dns-works-step-by-step-guide-in-simple-words-d7dbd69e0c5c)  
13. Working of Domain Name System (DNS) Server \- GeeksforGeeks, fecha de acceso: abril 19, 2026, [https://www.geeksforgeeks.org/computer-networks/working-of-domain-name-system-dns-server/](https://www.geeksforgeeks.org/computer-networks/working-of-domain-name-system-dns-server/)  
14. What Is DNS? Definition, How It Works Step-by-Step, Securitydns protection, fecha de acceso: abril 19, 2026, [https://heimdalsecurity.com/blog/what-is-dns/](https://heimdalsecurity.com/blog/what-is-dns/)  
15. Fundamentals of HTTP and Web Development \- The Miners \- Codeminer42, fecha de acceso: abril 19, 2026, [https://blog.codeminer42.com/fundamentals-of-http-and-web-development/](https://blog.codeminer42.com/fundamentals-of-http-and-web-development/)  
16. Tracking Users: Cookies, Sessions, and Tokens \- OpenCS, fecha de acceso: abril 19, 2026, [https://opencs.aalto.fi/en/courses/web-software-development-v1/part-5/3-tracking-users-cookies-sessions-and-tokens](https://opencs.aalto.fi/en/courses/web-software-development-v1/part-5/3-tracking-users-cookies-sessions-and-tokens)  
17. Cookies and Session \- Web Dev Two \- GitHub Pages, fecha de acceso: abril 19, 2026, [https://stungeye.github.io/Web-Dev-2-Notes/docs/php/cookies-and-session/cookies-and-session.html](https://stungeye.github.io/Web-Dev-2-Notes/docs/php/cookies-and-session/cookies-and-session.html)  
18. Using HTTP cookies \- MDN Web Docs \- Mozilla, fecha de acceso: abril 19, 2026, [https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)  
19. Learn Statelessness and Cookies | Security and the Complete Web Journey \- Codefinity, fecha de acceso: abril 19, 2026, [https://codefinity.com/courses/v2/9c0efbb3-2ad2-40b7-ac7d-55708438f192/ae29529d-7032-412a-a2ec-2503e4cfe313/6dc7de3f-c850-40a5-8db8-9a222b441618](https://codefinity.com/courses/v2/9c0efbb3-2ad2-40b7-ac7d-55708438f192/ae29529d-7032-412a-a2ec-2503e4cfe313/6dc7de3f-c850-40a5-8db8-9a222b441618)  
20. HTTP response status codes \- HTTP | MDN, fecha de acceso: abril 19, 2026, [https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)  
21. HTTP Status Codes \- REST API Tutorial, fecha de acceso: abril 19, 2026, [https://restfulapi.net/http-status-codes/](https://restfulapi.net/http-status-codes/)  
22. HTTP Status Codes: All 63 explained \- including FAQ & Video \- Umbraco, fecha de acceso: abril 19, 2026, [https://umbraco.com/knowledge-base/http-status-codes/](https://umbraco.com/knowledge-base/http-status-codes/)  
23. Explaining HTTP Basics \- SAP Learning, fecha de acceso: abril 19, 2026, [https://learning.sap.com/courses/devoloping-soap-web-services-on-sap-erp/explaining-http-basics\_e0864afa-f316-489c-88bc-bf5d651a85fa](https://learning.sap.com/courses/devoloping-soap-web-services-on-sap-erp/explaining-http-basics_e0864afa-f316-489c-88bc-bf5d651a85fa)  
24. A Comprehensive Guide to Use Case Modeling \- Visual Paradigm ..., fecha de acceso: abril 19, 2026, [https://guides.visual-paradigm.com/a-comprehensive-guide-to-use-case-modeling/](https://guides.visual-paradigm.com/a-comprehensive-guide-to-use-case-modeling/)  
25. Use Case Fundamentals, fecha de acceso: abril 19, 2026, [https://www.cs.uno.edu/\~jaime/Courses/4210/useCaseFundamentals.html](https://www.cs.uno.edu/~jaime/Courses/4210/useCaseFundamentals.html)  
26. Functional decomposition \- Wikipedia, fecha de acceso: abril 19, 2026, [https://en.wikipedia.org/wiki/Functional\_decomposition](https://en.wikipedia.org/wiki/Functional_decomposition)  
27. Chapter 3 – Identifying User Stories and Use Cases \- Cerritos College, fecha de acceso: abril 19, 2026, [https://www.cerritos.edu/dwhitney/SitePages/CIS201/Lectures/IM-7ed-Chapter03.pdf](https://www.cerritos.edu/dwhitney/SitePages/CIS201/Lectures/IM-7ed-Chapter03.pdf)  
28. Extreme programming \- Wikipedia, fecha de acceso: abril 19, 2026, [https://en.wikipedia.org/wiki/Extreme\_programming](https://en.wikipedia.org/wiki/Extreme_programming)  
29. Extreme programming: a full guide to XP practices in 2026 \- Monday.com, fecha de acceso: abril 19, 2026, [https://monday.com/blog/rnd/extreme-programming/](https://monday.com/blog/rnd/extreme-programming/)  
30. What is Extreme Programming? | Miro, fecha de acceso: abril 19, 2026, [https://miro.com/product-development/what-is-extreme-programming/](https://miro.com/product-development/what-is-extreme-programming/)  
31. What is Extreme Programming (XP)? | Agile Alliance, fecha de acceso: abril 19, 2026, [https://agilealliance.org/glossary/xp/](https://agilealliance.org/glossary/xp/)  
32. Extreme Programming (XP): Values, Principles, and Practices \- AltexSoft, fecha de acceso: abril 19, 2026, [https://www.altexsoft.com/blog/extreme-programming-values-principles-and-practices/](https://www.altexsoft.com/blog/extreme-programming-values-principles-and-practices/)