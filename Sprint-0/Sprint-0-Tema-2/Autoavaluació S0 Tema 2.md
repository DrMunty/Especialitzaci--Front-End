### **1\. Diferències entre Unix i Windows**

* **Estructura de fitxers:** Unix (i sistemes com Linux) utilitza una jerarquia única que neix d'un directori arrel, representat per una barra inclinada (/), on s'inclouen fins i tot els dispositius de maquinari. En canvi, Windows sol utilitzar lletres d'unitat (com C: o D:) per separar diferents particions o discs.  
* **Sensibilitat a les majúscules:** En Unix, els noms d'usuari, contrasenyes i fitxers solen ser sensibles a les majúscules i minúscules (*case sensitive*), mentre que Windows és més permissiu.

### **2\. Utilitat del terminal en el desenvolupament de programari**

El terminal:

* **Automatització:** Permet programar accions repetitives mitjançant *scripts* de shell.  
* **Eficiència de recursos:** Consumeix molt poca memòria RAM i CPUs.  
* **Gestió remota:** És la via més eficient per connectar-se a servidors mitjançant protocols com SSH.  
* **Control de processos:** Permet monitoritzar en temps real el consum de recursos i aturar processos bloquejats de manera granular mitjançant ordres com top, ps o kill.

### **3\. Diferència entre rutes absolutes i relatives**

* **Ruta absoluta:** Indica la ubicació exacta d'un fitxer començant sempre des de l'arrel (/). És una adreça completa que funciona independentment d’on estiguis treballant actualment (ex: /home/usuari/documents/codi.js).  
* **Ruta relativa:** Defineix la ubicació en relació al directori on et trobes ara mateix. Utilitza símbols com el punt (.) per al directori actual i el punt doble (..) per pujar al directori pare (ex: ../imatges/logo.png).

### **4\. Limitacions del terminal davant d'una interfície gràfica (GUI)**

* **Corba d'aprenentatge:** No és intuïtiu. L'usuari ha de conèixer prèviament les ordres, ja que no hi ha menús visuals que guiïn sobre què es pot fer.  
* **Manca de "paperera":** En el terminal, ordres com rm eliminen les dades de manera immediata i definitiva; no hi ha un sistema de recuperació senzill com la paperera de reciclatge de les interfícies gràfiques.  
* **Tasques visuals:** El terminal no és adequat per a tasques que requereixen manipulació directa d'elements gràfics, com ara l'edició de fotografia, disseny 3D o maquetació complexa.