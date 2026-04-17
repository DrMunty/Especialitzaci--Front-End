# **Metodologies Àgils i Cicle de Vida del Desenvolupament de Software (SDLC)**

En el desenvolupament modern, el cicle de vida del software ha evolucionat des de models rígids i seqüencials cap a enfocaments iteratius i incrementals. L'objectiu és lliurar valor de manera constant i adaptar-se als canvis del mercat sense comprometre la qualitat tècnica.

## **1\. El Cicle de Vida (SDLC) i Fonaments d'Agile**

El **Software Development Life Cycle (SDLC)** descriu les fases per les quals passa un projecte: planificació, anàlisi de requisits, disseny, codificació, proves, desplegament i manteniment.

### **Agile vs. Waterfall (Tradicional)**

* **Waterfall**: Enfocament lineal on cada fase ha d'acabar abans de començar la següent. És rígid i difícil d'adaptar si els requisits canvien a meitat del projecte.  
* **Agile**: Es basa en **lliuraments incrementals** i iteracions curtes. En lloc de fer un gran llançament final, el software es construeix en petits blocs funcionals (històries d'usuari) que aporten valor des del principi.

### **Manifest Àgil: Valors i Principis**

L'enfocament àgil és vital en entorns d'incertesa perquè prioritza:

1. **Individus i interaccions** sobre processos i eines.  
2. **Software que funciona** sobre documentació exhaustiva.  
3. **Col·laboració amb el client** sobre negociació contractual.  
4. **Resposta al canvi** sobre seguir un pla rígid.

## **2\. Extreme Programming (XP): Excel·lència Tècnica**

L'**XP** és una metodologia àgil centrada en la qualitat del codi i la satisfacció del client mitjançant pràctiques tècniques rigoroses:

* **Test-Driven Development (TDD)**: Escriure la prova abans que el codi funcional per assegurar que els requisits es compleixen des del primer moment.  
* **Refactoring**: Millorar l'estructura interna del codi sense canviar el seu comportament extern per reduir el deute tècnic.  
* **Continuous Integration (CI)**: Integrar els canvis de codi de tot l'equip en un repositori central diverses vegades al dia per detectar errors ràpidament.  
* **Planning Game**: Sessions on el negoci i el desenvolupament col·laboren per definir l'abast de la propera iteració.

* **Collective Code Ownership**: Qualsevol membre de l'equip pot millorar qualsevol part del codi, evitant els "silos" de coneixement.

## **3\. Requisits Àgils: Històries d'Usuari i Gherkin**

En Agile, els requisits no són documents estàtics, sinó converses documentades de manera senzilla.

### **Històries d'Usuari**

Es redacten seguint l'estructura: **"Com a, vull \[Acció\], per a \[Valor\]"**.

* *Exemple*: "Com a client, vull veure el meu saldo, per a gestionar millor els meus diners."

### **Criteris d'Acceptació i Gherkin**

Els criteris d'acceptació defineixen les fronteres de la història d'usuari (quan es considera "Feta") i s'utilitzen per validar el compliment dels requisits.  
La sintaxi **Gherkin** ajuda a descriure escenaris de prova en un llenguatge natural entès per tothom (negoci i tècnics), utilitzant el format **Donat / Quan / Llavors** (*Given / When / Then*):

* **Donat** (*Given*): El context o estat inicial (ex: "Donat que tinc saldo a la targeta").  
* **Quan** (*When*): L'acció que realitza l'usuari (ex: "Quan intento treure 20€").  
* **Llavors** (*Then*): El resultat esperat (ex: "Llavors el caixer em dona els diners").

### **Descomposició en Tasques Tècniques**

Una història d'usuari es divideix en **tasques tècniques** més petites (ex: crear la base de dades, dissenyar la UI, configurar l'API) perquè els desenvolupadors puguin treballar de manera granular.

## **4\. Gestió del Flux de Treball: Kanban**

**Kanban** és un mètode visual per gestionar el treball a mesura que avança per un procés.

### **Taulers i Backlog**

* **Tauler Kanban**: Visualitza les tasques mitjançant columnes (com a mínim: *Backlog*, *In Progress*, *Done*).  
* **WIP Limits (Límits de Treball en Curs)**: Restringeixen el nombre de tasques en una columna per evitar colls d'ampolla i obligar l'equip a acabar les tasques abans d'encomençar-ne de noves.

### **Priorització MoSCoW**

Per gestionar el *backlog* de manera eficaç, s'utilitza la tècnica MoSCoW:

* **M**ust-Have: Requisits vitals per a l'èxit.  
* **S**hould-Have: Importants, però no vitals.  
* **C**ould-Have: Desitjables si hi ha temps.  
* **W**on't-Have: No es faran en aquesta iteració.

## **5\. Pair Programming: Desenvolupament en Parella**

Pràctica on dos programadors treballen en una sola estació de treball per millorar la qualitat i compartir coneixement.

### **Rols Principals**

* **Driver (Conductor)**: La persona que té el teclat. Es focalitza en la tàctica, escrivint el codi i gestionant la sintaxi.  
* **Navigator (Navegador)**: Observa el codi en temps real. Es focalitza en l'estratègia, revisa la lògica, detecta errors i planifica els següents passos.

### **Beneficis i Estratègies**

* **Beneficis**: Reducció d'errors (fins a un 15%), eliminació de "silos" de coneixement i resolució de problemes més ràpida.  
* **Ping-Pong Pairing**: Un desenvolupador escriu un test que falla, i l'altre escriu el codi per fer-lo passar; després inverteixen els rols.  
* **Consell clau**: Cal intercanviar els rols freqüentment (cada 25-30 minuts) per mantenir la concentració i evitar la fatiga mental.