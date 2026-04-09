# **Fonaments del Terminal Linux: Sistema de Fitxers, Gestió de Processos i Configuració d'Entorn**

El terminal de Linux constitueix la interfície fonamental per a l'administració de sistemes i el desenvolupament de programari. A diferència de les interfícies gràfiques (GUI), que prioritzen la facilitat d'ús visual, el terminal ofereix un control granular, eficiència en el consum de recursos i capacitats d'automatització mitjançant la línia d'ordres (CLI).

## **1\. Introducció al Terminal Linux i la Shell**

És essencial distingir entre el terminal i la shell:

* **Terminal:** És l'emulador de programari que proporciona la finestra on s'introdueix el text.
* **Shell:** És l'intèrpret d'ordres que s'executa dins del terminal. El seu paper és recollir les ordres de l'usuari, processar-les i comunicar-les al nucli (kernel) del sistema operatiu . La shell més comuna en sistemes Linux és Bash.

La **CLI** (Command Line Interface) permet realitzar tasques complexes mitjançant text, sent molt més ràpida per a tasques repetitives i essent l'estàndard en servidors on no s'instal·la una interfície gràfica per estalviar recursos.

## **2\. Estructura del Sistema de Fitxers**

Linux utilitza una estructura de directori única en forma d'arbre, regida pel Filesystem Hierarchy Standard (FHS).

* **Directori Arrel (/):** És el punt d'origen de tot el sistema. No existeixen unitats separades com el "C:" de Windows; tot penja de l'arrel.
* **Directori Personal (\~):** És el directori privat de l'usuari (normalment a /home/nom\_usuari) on es té control total sense necessitar permisos d'administrador.  
* **Rutes Absolutes vs. Relatives:**  
  * **Absoluta:** La ruta completa des de l'arrel (ex. /var/www/html/index.html). 
  * **Relativa:** La ruta en funció del directori on et trobes. S'utilitza el punt (.) per al directori actual i el punt doble (..) per al directori pare.

## **3\. Ordres Bàsiques de Navegació i Gestió**

El terminal opera mitjançant ordres curtes i modulars:

* **pwd (Print Working Directory):** Mostra la ruta del directori actual.  
* **ls (List):** Llista el contingut d'un directori. \-l mostra detalls i \-a fitxers ocults.  
* **cd (Change Directory):** Permet moure's entre directoris.
* **mkdir (Make Directory):** Crea una carpeta nova.
* **touch:** Crea un fitxer buit o actualitza la data de modificació d'un existent. 
* **cp (Copy):** Copia fitxers o directoris.  
* **mv (Move):** Mou fitxers o els canvia el nom.
* **rm (Remove):** Elimina fitxers.
* **cat (Concatenate):** Mostra tot el contingut d'un fitxer al terminal. 
* **grep:** Cerca un patró de text específic dins d'un fitxer o d'una sortida d'una altra ordre.

## **4\. Permisos de Fitxers i Directoris**

La seguretat de Linux es basa en el control d'accés dividit en tres nivells: **Usuari/Propietari (u)**, **Grup (g)** i **Altres (o)**

### **Tipus d'accés i valors octals**

Cada permís té un valor numèric que es suma per obtenir la configuració final:

* **Lectura (r):** 4  
* **Escriptura (w):** 2  
* **Execució (x):** 1

| Notació Octal | Notació Simbòlica | Significat |
| :---- | :---- | :---- |
| **755** | rwxr-xr-x | Propietari total; grup i altres poden llegir i executar (típic per a carpetes). |
| **644** | rw-r--r-- | Propietari llegeix/escriu; altres només llegeixen (típic per a fitxers). |
| **600** | rw------- | Només el propietari té accés (fitxers privats). |

Les ordres per gestionar-ho són **chmod** per canviar els permisos i **chown** per canviar el propietari o grup del fitxer.

## **5\. Manipulació de Text i Editors de Terminal**

La potència del terminal resideix en la seva capacitat de processar dades com a fluxos de text.

* **Redirecció:**  
  * \>: Envia la sortida d'una ordre a un fitxer, sobrescribint-lo.
  * \>\>: Afegeix la sortida al final d'un fitxer existent sense esborrar-ne el contingut.  
* **(Pipes |):** Connecten la sortida d'una ordre amb l'entrada de la següent (ex. cat log.txt | grep "error"). 
* **Editors de Terminal:**  
  * **Nano:** Un editor sense modes, molt intuïtiu. S'utilitza Ctrl+O per desar i Ctrl+X per sortir. 
  * **Vim:** Un editor modal (Normal, Inserció, Comandes). És molt eficient però requereix aprendre ordres com :w (desar) i :q (sortir).

## **6\. Gestió de Processos i Multitasca**

Cada acció al sistema genera un procés amb un identificador únic (PID).

* **Visualització:** ps aux mostra una llista de tots els processos; top ofereix una visió dinàmica en temps real.  
* **Finalització:** L'ordre kill envia senyals. kill \-15 (SIGTERM) demana tancar de forma segura; kill \-9 (SIGKILL) força el tancament immediat.  
* **Treballs en segon pla:**  
  * Afegir un **&** al final de l'ordre l'executa en segon pla immediatament.  
  * **Ctrl+Z** suspèn un procés que s'està executant en primer pla.  
  * **bg** reprèn el procés suspès en segon pla i **fg** el torna a portar al primer pla.

## **7\. Variables d'Entorn i Configuració**

Les variables d'entorn defineixen el context en què s'executen els programes.

* **PATH:** La variable més important. Conté una llista de directoris on el sistema busca els binaris de les ordres que escrivim.  
* **Ordres clau:**  
  * echo $VARIABLE: Mostra el contingut d'una variable (ex. echo $USER).  
  * export VARIABLE=valor: Defineix o modifica una variable per a la sessió actual i els seus processos fills.  
* **Fitxers de configuració (Dotfiles):**  
  * .bashrc: Fitxer que s'executa cada vegada que s'obre una shell interactiva. Aquí es solen posar els àlies i la personalització del PATH.  
  * .profile: S'executa només en iniciar sessió al sistema (login).
