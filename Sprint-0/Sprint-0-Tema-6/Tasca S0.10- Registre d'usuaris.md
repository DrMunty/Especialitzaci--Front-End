## TO DO LIST

## HISTORIA D'USUARI: "Com a usuari de la botiga online, vull poder registrar-me amb el meu correu electrònic i contrasenya per crear un compte."

1. Definir criteris d'acceptació (Llista 3-5 condicions mesurables que la funcionalitat ha de complir).
2. Escenaris de Prova amb Gherkin (Escriu 2 escenaris en sintaxi Donat/Quan/Llavors per validar els criteris).
3. Desglossament de Tasques (Divideix la història en tasques tècniques front-end específiques).
4. Organització en Tauler Kanban (Crear un tauler a trello amb aquestes columnes: Backlog | To Do | Doing | Test | Done).
   - Afegeix les tasques com a targetes i prioritza amb MoSCoW:
         🟢 Must-Have: Formulari bàsic funcional + validació inicial en enviar.
         🟡 Should-Have: Validació en temps real (errors es mostren mentre l'usuari escriu).
         🔵 Could-Have: Indicador de força de la contrasenya (barra de progrés).
         🔴 Won't-Have: Registre amb xarxes socials (Facebook/Google).
5. Documentació
   - Crea una pàgina a Notion que inclogui:
         · Història d'usuari original.
         · Criteris d'acceptació i escenaris Gherkin.
         · Enllaç al tauler Kanban.
         · Captura de pantalla del codi més complex (ex: funció de filtrat).
         · Bonus track: Repeteix l'exercici per la següent història d'usuari: ("Com a usuari registrat, vull poder canviar la meva contrasenya perquè pugui mantenir el    meu compte segur.").

### 1. Criteris d'acceptació

- Validar que el email sigui vàlid i no hi hagi cap compte creat amb aquest email.
- Validar que la contraseña cumpleixi els requisits (Una majúscula, un caràcter especial, almenys un número).
- Validar que les dues contrasenyes coincideixin.
- Validar que l'usuari rebi un correu electrònic confirmant que el seu compte ha estat creat.
- Validar que el usuari completi el captcha de forma correcte.

### 2. Escenaris de prova amb Gherkin

**Escenari: Registre exitós**
Donat que estic a la pàgina de registre

Escenari: Registre fallit