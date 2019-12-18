# PROJET CACTUS-CALENDAR

[TOC]

## Introduction

Cactus calendar est comme son nom l’indique un calendrier. Pour être plus précis, ce sera une application web. Elle aura pour qualité principale de tourner sur des Raspberry. Pour ce qui est de ce qu’elle fera il faut se référé au chapitre des fonctionnalités.



## Type d’application

### Matériels

- Raspberry pi
- Disque dur
- IP privée
- IP publique



### Logiciels / Applications

- Apache 2 linux
- PgSql
- Adobe XD
- Visio 2017/19
- GitHub



### Langages

- PHP 7
- HTML
- JavaScripts
- CSS
- JSON
- SQL



## Fonctionnalités

### Tâche

Va permettre de créer des tâches et de les stockées en base. Elles seront affiché en to do list mais aussi via le calendrier

Caractéristique :

- id_tache
- id_user

- Libellé
- Type
  - Rendez-vous
  - Évènement 
  - Colis
  - Routine
  - Achat
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Statut
  - non commencé
  - en cours
  - terminé

------

#### Rendez-vous

Caractéristique :

- id

- Libellé
- Type
  - Rendez-vous
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
  - durée approximative (exemple : pendant 30 minutes)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Lieu
- Statut
  - non commencé
  - en cours
  - terminé
- Avec qui

------

#### Évènement

Caractéristique :

- id

- Libellé
- Type
  - Évènement
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
  - durée approximative (exemple : pendant 30 minutes)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Lieu
- Statut
  - non commencé
  - en cours
  - terminé

------

#### Colis

Caractéristique :

- id

- Libellé
- Type
  - Évènement
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
  - durée approximative (exemple : pendant 30 minutes)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Lieu
- Statut
  - non commencé
  - en cours
  - terminé
- Livreur
- Référence colis
- Lien colis

------

#### Routine

Objet :

- id

- Libellé
- Type
  - Routine
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
  - durée approximative (exemple : pendant 30 minutes)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Lieu
- Statut
  - non commencé
  - en cours
  - terminé

------

#### Achat

Caractéristique :

- id

- Libellé
- Type
  - Achat
- Durée
  - Date définie (le 15/06 à 20h ou simplement la date du jour)
  - Date de début / fin (exemple : le 19/02 à 7h jusqu’au 22/02 à 15h)
  - durée approximative (exemple : pendant 30 minutes)
- Importance
  - Urgent
  - Haute
  - Moyenne
  - Basse
- Statut
  - non commencé
  - en cours
  - terminé
- Éléments à acheté



### Calendrier

Le calendrier va lister les tâches en fonction du jour sélectionné.

https://www.youtube.com/watch?v=4Mv4GhK28Io



### Connexion

Tout simplement une page de connexion

