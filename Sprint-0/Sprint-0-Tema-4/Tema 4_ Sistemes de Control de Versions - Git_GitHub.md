# **Control de Versions Modern: Fonaments de Git i Ecosistema GitHub**

El control de versions és una necessitat crítica en el desenvolupament de programari que permet mantenir un historial de canvis, facilitar la col·laboració simultània entre desenvolupadors i resoldre conflictes de codi de manera estructurada. Aquest document analitza des de la configuració inicial de l'entorn local fins a l'automatització avançada mitjançant CI/CD.

## **1\. Git vs. GitHub: Diferències Fonamentals**

És essencial distingir entre l'eina de programari i la plataforma de serveis:

* **Git**: És un sistema de control de versions (VCS) de codi obert que s'instal·la localment a l'ordinador. S'encarrega de registrar els canvis en els fitxers i gestionar les branques de manera interna i sovint mitjançant línia d'ordres.  
* **GitHub**: És una plataforma basada en el núvol que allotja repositoris de Git. Ofereix una interfície gràfica (GUI) i afegeix una capa col·laborativa amb eines com el seguiment d'errors (*issues*), gestió de projectes i automatització.

### **Configuració Inicial de Git**

Abans de començar, cal introduir-se al sistema per signar els canvis:

* **Nom i correu**: git config \--global user.name "El Teu Nom" i git config \--global user.email "correu@exemple.com".  
* **Editor**: Es pot configurar l'editor per defecte (ex: VS Code) amb git config \--global core.editor "code \--wait".  
* **Verificació**: L'ordre git config \--list mostra tota la configuració activa.

## **2\. El Flux de Treball Local i Estats de Git**

Git utilitza un model de tres estats per gestionar els fitxers abans de guardar-los permanentment a l'historial:

1. **Working Directory (Directori de Treball)**: On es modifiquen els fitxers físicament. Els canvis aquí estan en estat *modified*.  
2. **Staging Area (Àrea de Preparació/Índex)**: Un fitxer on es marquen els canvis que s'inclouran en la següent captura (*snapshot*). S'utilitza l'ordre git add.  
3. **Repository (Repositori/HEAD)**: On es guarden les captures de manera permanent. S'utilitza git commit per passar de l'estat *staged* a *committed*.

### **Ordres Bàsiques d'Inspecció**

* git init: Inicialitza un nou repositori local creant la carpeta oculta .git.  
* git status: Mostra quins fitxers estan modificats, preparats o si hi ha fitxers no seguits (*untracked*).  
* git log: Visualitza l'historial de commits realitzats, incloent-hi l'autor, la data i el missatge.

## **3\. Commits Efectius i Sincronització Remota**

Per mantenir un historial net, es recomana seguir l'estàndard **Conventional Commits**, que utilitza prefixos descriptius:

* feat:: Per a noves funcionalitats (ex: feat: add user login).  
* fix:: Per a correcció d'errors (ex: fix: resolve crash on refresh).  
* docs:, style:, refactor:, test:: Per a canvis en documentació, format, refactorització o proves respectivament.

### **Connexió Local-Remot**

1. **Vincular**: git remote add origin \<URL-del-repositori\> connecta el teu repositori local amb GitHub.  
2. **Pujar canvis**: git push origin \<nom-branca\> envia els commits locals al servidor remot.  
3. **Baixar canvis**:  
   * git fetch: Descarrega les metadades i canvis del remot però no els aplica al teu codi.  
   * git pull: Descarrega els canvis i els fusiona (*merge*) automàticament amb la teva branca actual.  
4. **Clonar**: git clone \<URL\> crea una còpia local exacta d'un repositori existent a GitHub, incloent-hi tot l'historial.

## **4\. Gestió de Branques i Conflictes**

Les branques (*branches*) permeten desenvolupar funcionalitats en aïllament sense afectar el codi principal.

* **Crear i canviar**: git branch \<nom\> crea la branca i git checkout \<nom\> (o el més modern git switch \<nom\>) hi canvia.  
* **Fusions (Merge)**: git merge \<nom-branca\> integra els canvis d'una branca a la branca on estàs situat.  
* **Resolució de conflictes**: Si dos canvis afecten la mateixa línia, Git demanarà una intervenció manual. Cal obrir el fitxer, triar la versió correcte (o combinar-les) i fer un nou commit.  
* **Eliminació**: git branch \-d \<nom\> esborra la branca localment (només si s'ha fusionat). Per esborrar-la del remot: git push origin \--delete \<nom\>.

### **Etiquetes (Tags)**

S'utilitzen per marcar fites importants com versions de llançament (ex: v1.0):

* **Lightweight**: Simples punters a un commit específic.  
* **Annotated**: Emmagatzemen metadades (autor, data, missatge) i són les recomanades per a versions oficials.

## **5\. Protocols de Treball en Equip a GitHub**

GitHub facilita la col·laboració mitjançant fluxos de treball específics:

* **Forking Workflow**: Fas una còpia (*fork*) d'un repositori extern al teu compte de GitHub per treballar-hi de manera independent.  
* **Pull Requests (PR)**: Sol·licituds per incorporar els teus canvis al repositori original. Permeten fer **Code Reviews** (revisions de codi) on els companys deixen comentaris i aproven o demanen canvis abans de la fusió final.  
* **Estratègies de Ramificació**:  
  * **GitHub Flow**: Flux lleuger basat en una branca main sempre desplegable i branques de funcionalitat curtes.  
  * **Git Flow**: Més estructurat, amb branques de develop, feature, release i hotfix, ideal per a projectes amb versions programades.


## **6\. Organització i Automatització Avançada**

### **Gestió del Projecte a GitHub**

GitHub ofereix eines integrades per organitzar la feina:

* **Issues**: Per fer el seguiment de tasques, millores o errors.  
* **Milestones (Fites)**: Agrupen *issues* o PRs amb una data de venciment, útil per gestionar llançaments o *sprints*.  
* **Projects**: Taulers tipus Kanban per visualitzar el flux de treball ("To Do", "In Progress", "Done").

### **Automatització**

* **GitHub Actions**: Permet crear fluxos de **CI/CD** (Integració i Desplegament Continu). S'executen automàticament en fer un push o obrir una PR per passar tests, construir l'aplicació o desplegar-la al servidor. Es configuren amb fitxers YAML a la carpeta .github/workflows.  
* **Git Hooks**: Scripts que s'executen en esdeveniments específics de Git local. El més comú és el pre-commit, que pot passar un linter o un test abans de permetre que el commit es realitzi per assegurar la qualitat del codi.