# Stephen King Bibliothek

Eine wunderscone, interaktive Website zum Verwalten aller jemals veroeffentlichten Werke von Stephen King, mit Support fuer englische und deutsche Titel.

## Features

**Vollstaendige Sammlung**: 40+ Romane, Novellas und Short Story Collections
**Moderne UI**: Dunkles Design mit Neon-Akzenten
**Sortierung**: Nach Erscheinungsjahr oder alphabetisch nach Titel
**Suchfunktion**: Schnelle Filterung nach englischen oder deutschen Titeln
**Besitz-Tracking**: Markiere Buecher, die du bereits hast
**Hash-Sharing**: Generiere einen URL-Hash, um deine Sammlung zu speichern und zu teilen
**Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile

## Verwendung

1. **Seite oeffnen**: `index.html` im Browser laden
2. **Buecher auswaehlen**: Auf eine Karte klicken um zu markieren, dass du das Buch hast
3. **Sortieren**: "Nach Jahr" oder "Nach Titel" Button verwenden
4. **Suchen**: Mit der Suchbar nach englischen oder deutschen Titeln filtern
5. **Hash generieren**: "Hash generieren" Button klicken um deine Auswahl zu speichern
6. **Hash teilen**: Den generierten Hash kopieren und teilen
7. **Hash laden**: Einen Hash in das Eingabefeld eintragen und "Hash laden" klicken

## Dateistruktur

- index.html - Hauptseite mit HTML-Struktur
- style.css - Styling und Layout (dunkles Theme)
- app.js - JavaScript-Logik und Interaktivitaet
- data.js - Datenbank mit allen Stephen King Werken
- README.md - Diese Datei

## Daten

Die `data.js` datei enthaelt:
- 40 Romane: Von "Carrie" (1974) bis "The Life of Chuck" (2024)
- 4 Novellas: Aus "Different Seasons"
- 4 Story Collections: Night Shift, Different Seasons, Skeleton Crew, Everything's Eventual

Jedes Buch hat:
- Eindeutige ID
- Englischen Titel
- Deutschen offiziellen Titel
- Erscheinungsjahr

## Hash-System

Das Hash-System nutzt Base64 Encoding um die IDs der ausgewahlten Buecher zu speichern:

1. **Generierung**: Alle gewahlten Book-IDs werden zu einem String zusammengefuehrt und Base64 kodiert
2. **Speicherung**: Der Hash wird in der URL als Fragment (#) gespeichert
3. **Laden**: Beim Laden der Seite wird automatisch der Hash aus der URL geladen
4. **Sharing**: Du kannst die vollstaendige URL (mit Hash) teilen

## Technologie

- HTML5: Semantische Struktur
- CSS3: Modernes Design mit Gradients und Flexbox
- Vanilla JavaScript: Keine externen Abhaengigkeiten
- Base64 Encoding: Fuer URL-sichere Hash-Generierung

## Browser-Kompatibilitaet

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Browsers (iOS Safari 14+, Chrome Mobile)

---

Viel Spass beim Sammeln der fantastischen Werke von Stephen King!
