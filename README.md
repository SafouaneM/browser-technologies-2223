# Browser Technologies - De eindopdracht - Enquete over de minor Web Development

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Vereisten voor de Enquete

- Studentgegevens (naam + nummer) verplicht
- Per vak
    - naam
    - docent(en)
    - weken waarin je het vak deed
    - beoordeling op schaal 1-10 van
    - lesstof (hoe moeilijk is het)
    - uitleg (hoe duidelijk is het uitgelegd)
    - eigen inzicht (hoe goed snap je het)
    - Zorg ervoor dat de gebruiker niet teveel formuliervelden in 1 keer ziet.


- Validatie: Zorg ervoor dat het formulier compleet wordt ingevuld. Geef duidelijke foutmeldingen. Bedenk zelf wanneer en hoe de validatie zal plaatsvinden.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
- Duidelijke interface waarmee gebruiker terug kan naar vorige vragen. (En misschien ook om een vraag over te slaan?)
- Duidelijke interface die aangeeft waar je bent in het formulier
- Je mag geen zichtbare radio buttons gebruiken
- Het formulier moet een light mode en dark mode hebben.

# Browser Technologies - De eindopdracht ✨ <em lang="en">Progressively Enhanced Browser Technology</em>

Voor deze opdracht ga je een interactieve toepassing ontwerpen. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien, horen en/of voelen krijgen.

## Doel van deze opdracht

Het doel van deze opdracht is te leren hoe je een online interactieve toepassing kan maken met behulp van _Progressive Enhancement_ en _Feature Detection_ zodat die het altijd doet.


https://safouanem.github.io/browser-technologies-2223/enquette/index

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)


## Pagina functionaliteiten met css en javascript enabled (Enhanced layer)
![Screenshot 2023-04-06 at 05 10 30](https://user-images.githubusercontent.com/31611670/230262832-018067e0-6b96-4985-a704-7d680ad8be77.png)
![Screenshot 2023-04-06 at 05 13 25](https://user-images.githubusercontent.com/31611670/230263203-2a875885-b024-479e-833e-d167c4ccd79b.png)

## Pagina met javascript disabled (Usable layer)
![Screenshot 2023-04-06 at 05 12 00](https://user-images.githubusercontent.com/31611670/230263012-827504cb-9af2-4a4f-8e83-abd6385a8b57.png)
![Screenshot 2023-04-06 at 05 12 15](https://user-images.githubusercontent.com/31611670/230263050-d33c135d-73cd-4bdb-94a4-3386c3d63a63.png)

## Pagina met alles disabled (Functional layer)
![Screenshot 2023-04-06 at 05 14 46](https://user-images.githubusercontent.com/31611670/230263355-5656d159-2cb2-42d4-936f-7823ed1ba9dc.png)


En hiervoor hebben we dan ook meteen de uitleg wat Porgressive enchamenet eingelijk is;

Progressive Enhancement betekent eigenlijk dat je begint met het maken van een basisversie van je website die werkt op de meest eenvoudige browsers en apparaten. Vervolgens voeg je steeds meer functies en ontwerpdetails toe, afhankelijk van de mogelijkheden van de browser of het apparaat van de gebruiker. Op die manier zorg je ervoor dat iedereen je website kan gebruiken, ongeacht welk apparaat of browser ze hebben.

Feature Detection is een techniek die je gebruikt om te testen of een bepaalde functie beschikbaar is in de browser of het apparaat van de gebruiker voordat je die functie gebruikt. Als de functie beschikbaar is, gebruik je die. Als de functie niet beschikbaar is, gebruik je een alternatieve functie die wel werkt. Zo voorkom je dat gebruikers foutmeldingen krijgen of dat functies niet werken op hun apparaat of browser.

Als je een website bouwt, begin je dus met een basisversie en voeg je steeds meer functies toe, afhankelijk van wat het apparaat of de browser van de gebruiker aankan. En als je een functie gebruikt, check je eerst of die wel werkt in de browser of op het apparaat van de gebruiker. Zo zorg je ervoor dat je website voor iedereen goed werkt en dat mensen er geen problemen mee hebben.

### Features
| Features                                          | Uitleg |
|---------------------------------------------------|----------|
| Light and dark mode                               | Gekozen om dit te doen met een knop dus als iemand het aan wilt doet hij dat aan zo niet dan niet |
| Validation                                | Ik heb de messte standaard required tag aangehouden die de html met ons meegeeft ik wou niet teveel hiervan doen in javascript.    |
| Javascript validation | Je kan niet zomaar door naar de volgende vraag, de volgende knop word dan disabled je moet eerst alle required velden invullen    |
| Localstorage save                            | Als je even geen zin meer hebt om iets in te vullen kan je terug gaan doormiddel van de localstorage   |
| Voortgangs bar                           | Per fieldset word je progressie bijgehouden tot de laatste submit    |
| Knop om naar de volgende vraag te gaan of de vorige vraag te gaan                               | Naar de volgende fieldset gaan of naar de vorige     |


### Browsers
Browsers die ik heb getest zijn
Desktop:
-- Google Chrome
-- Firefox
-- Safari

Mobile:
Safari: IOS
Android: Chrome

Desktop Chrome:

Hier is waar ik progammeerde dus ik kan je verzekeren dat hier alles het doet. 

Validation ✔️
Knoppen validatie ✔️
Enquete submitten na de validatie ✔️
Voortgangsbar ✔️
Localstorage ✔️

Desktop firefox:
<img width="1412" alt="Screenshot 2023-04-06 at 05 50 48" src="https://user-images.githubusercontent.com/31611670/230267618-b78c55ed-124d-4b8b-adf9-af4dacfbbb58.png">
refox:

<img width="1109" alt="Screenshot 2023-04-06 at 05 50 24" src="https://user-images.githubusercontent.com/31611670/230267572-761ccc39-591e-4378-8b1f-c6ffed115666.png">

Localstorage werkt en het lijkt erop ook als je de javascript uit is hij nog hetzelfde werkt als op google chrome, verder is er qua styling niks veranderd

Validation ✔️
Knoppen validatie ✔️
Enquete submitten na de validatie ✔️
Voortgangsbar ✔️
Localstorage ✔️

Desktop Safari:

![Screenshot 2023-04-06 at 05 53 08](https://user-images.githubusercontent.com/31611670/230267918-87640529-381b-468b-9b2b-fd6a4111b889.png)
![Screenshot 2023-04-06 at 05 53 43](https://user-images.githubusercontent.com/31611670/230267993-f4ebcd85-cd4d-46f8-857c-d1f21215b3c1.png)
De layout is wat "appliefied" maar werkt de gehele applicatie zoals hij moet, ik heb overigens weer gecheckt in de localstorage en daar doet hij ook wat hij moet doen. 

Validation ✔️
Knoppen validatie ✔️
Enquete submitten na de validatie ✔️
Voortgangsbar ✔️
Localstorage ✔️


Mobile: Android Chrome
![image](https://user-images.githubusercontent.com/31611670/230268102-5152c2db-e573-4ab2-8bca-2d7bf3f33be3.png)
Localstorage werkt, maar het opmerkelijke hier is dat hij de font-style die ik aangeef aanpas. Inplaats van het Comic-Sans font te gebruiken gebruikt hij een standaard font. Maar verder werkt alles prima! 

Validation ✔️
Knoppen validatie ✔️
Enquete submitten na de validatie ✔️
Voortgangsbar ✔️
Localstorage ✔️

Mobile: Safari IOS

![IMG_9723](https://user-images.githubusercontent.com/31611670/230268882-6e7043d3-6b08-4870-8c15-2f892234bd90.PNG)
![IMG_9721](https://user-images.githubusercontent.com/31611670/230268891-8d99cf63-7be8-4242-ab20-c3585db44250.PNG)
![IMG_9720](https://user-images.githubusercontent.com/31611670/230268892-05551c17-e2f5-4ee6-a2fd-a9e0abad4f4a.PNG)
 
Hetzelfde geld voor ios localstorage werkt wat ik niet had verwacht bij safari op een iphone maar toch wel, maar hier slaan ze ook mijn mooie comic sans font over heel opmerkelijk.
 
Validation ✔️
Knoppen validatie ✔️
Enquete submitten na de validatie ✔️
Voortgangsbar ✔️
Localstorage ✔️


Obsecure browser Lynx:
![Screenshot 2023-04-06 at 06 20 26](https://user-images.githubusercontent.com/31611670/230271394-bbb5e8a5-8b80-461e-a7b2-600aca7d7901.png)
![Screenshot 2023-04-06 at 06 20 44](https://user-images.githubusercontent.com/31611670/230271411-39d9dd3f-3b32-4b77-bbe4-7ebc1bc01ddd.png)
![Screenshot 2023-04-06 at 06 20 59](https://user-images.githubusercontent.com/31611670/230271419-4a5ac04c-5c9e-4b78-b745-1f26d75f46f6.png)
![Screenshot 2023-04-06 at 06 20 03](https://user-images.githubusercontent.com/31611670/230271147-9b25913b-4ac0-41e8-afca-74907a7323d6.png)

Lynx zelf heeft geen form validatie zie ik, maar ik kwam er wel achter als ik helemaal niks invoerde ik een melding kreeg van hey BAD html no form action defined. Dus hij submit wel als ik bijv mijn naam achternaam of iets dergelijks schrijf. Maar als het helemaal leeg is,laat hij je niet verder. Overigens ook geen local storage maar dat had ik wel verwacht bij een text based browser. Was overigens wel cool om te testen


Validation X
Knoppen validatie X
Enquete submitten na de validatie X~✔️ Soort van je kan wat submiten als je al 1 ding hebt ingevuld maar is wel een validatie check als je niks invult.
Voortgangsbar X
Localstorage X

## Eindconclusie

Het was leuk om mijn kleine applicatie te testen op meerdere browsers, ik ben er dus achter gekomen dat de meeste moderene browsers wel heel erg veel op elkaar lijken. Het is ook vanzelfsprekend dat ik aan raad dat je deze browsers blijft gebruiken. Een browser zoals lynx zou nooit echt handig zijn, maar misschien wel als je een keer een website niet vetrouwt en dan even snel wilt zien wat deze website bevat. Dat is misschien nog een goeie usecase, heb je ook geen virus scanner nodig.

## Handige Bronnen

De website van het World Wide Web Consortium (W3C): https://www.w3.org/
Het boek "Designing with Progressive Enhancement" van Todd Parker, Scott Jehl, Maggie Costello Wachs en Patty Toland.
Het boek "Adaptive Web Design" van Aaron Gustafson.
Het artikel "Understanding Progressive Enhancement" op de website van Smashing Magazine: https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
Het artikel "Feature detection using Modernizr" op de website van Mozilla: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection

## Criteria

- []	Student kan de _Core functionaliteit_ van een use case doorgronden
- []	Student kan uitleggen wat _Progressive Enhancement_ en _Feature Detection_ is en hoe dit toe te passen in Web Development
- []	De demo is opgebouwd in 3 lagen, volgens het principe van _Progressive Enhancement_
- []	De user experience van de demo is goed
  -	Let op leesbaarheidsregels, contrast en kleuren
  -	Let op gebruiksvriendelijkheid, zoals affordance en feedback op interactieve elementen
  -	De meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken

Er is een Readme toegevoegd met daarin:
- [x] Een link naar de demo.
- [x] Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast
- [x] Een lijst met browsers waarin je hebt getest:
    - voor de desktop: 1 Chromium, Firefox en Safari
    - voor mobiel: Safari iOS + Android: Samsung Internet of Chrome
    - 1 obscure browser naar keuze: Lynx, Flow ([Flow voor Mac](https://flounder.ekioh.com/~piers/ekioh_6.9.0_mac-flow_20230307_r38512.zip) en [Flow voor Linux](https://flounder.ekioh.com/~piers/ekioh_6.9.0_x11-64-flow_20230307_r38512.zip)), PrinceXML of KaiOS
- [~]  een testverslag met
    - [~] een beschrijving van de feature-lijst die zijn onderzocht
    - [x] welke browsers de feature(s) wel/niet ondersteunen
    - [x] welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests
    - [~] een screenreader test op de default screenreader van je laptop en/of telefoon.

