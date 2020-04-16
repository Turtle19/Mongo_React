Author :
========

**Étudiante :** `Diallo Aissatou-Lamarana`


Objectifs du Projet
===================

Expérimentation et mise en pratique des différentes ressources vues en cours notamment sur `Mongo` pour gérer la base de données, `React` pour gérer le côté client et d'utiliser `Express` en s'appuyant sur node pour le serveur.

Présentation du Projet
======================

Pour mener à bien ce travail une **API REST** a été implémentée notamment **clientsrest** et **ressourcesrest** mais également plusieurs **Components**.

Les composants (dossier components):
====================================

Deux composants principaux ont été mis en place :

## Composant de gestion des clients :

  Appelé **Client** , il permet la création d'un nouveau client et l'affichage de la liste des clients avec possibilité de
  supprimer un client quelconque.

## Composant de gestion des données :

  Pour la gestion des prix unitaires des ressources (Component *updateCoutUnitaire*), également pour l'affichage des clients avec les coûts de chaque ressource pour une année (Components *displayClientsRessources et displayClientWithCoutAnnuel*) et enfin l'affichage dans une table des détails sur la consommation annuelle de chacune des ressources d'un client quelconque sélectionné (Components *consommationMensuelle et detail* ).
  Un graphique sur les détail de la consommation annuel est aussi représenté pour ce même client (voir component *graphiqueComponent*).

  Le component *data* permet de faire la transition entre le component gestion des clients et celui de gestion des données.

  (Voir Titre Présentation `https://www.fil.univ-lille1.fr/~routier/enseignement/licence/js/tdtp/mongo-react.html`
  pour certains détails).


Comment récupérer le Projet
===========================

Pour la récupération du projet, veuillez cloner ce dépôt en tapant cette commande :

**git clone https://github.com/Turtle19/Mongo_React.git**


Ensuite tapez cette commande : **npm install** pour l'installation des modules nodes utilisés dans
ce projet.


Exécution du projet
===================

* créer un dossier **data** à la racine du projet, puis tapez la commande `mongod --dbpath data`
pour lancer le serveur **Mongod**.

(Dans une autre fenêtre vous pourriez de ce fait utiliser le shell
client en tapant **mongo** pour les manipulations des différentes commandes mongo liées aux *collections*.

* Tout en restant à la racine du projet, Lancez également la commande suivante pour l'importation des données pour les ressources cela vous crée également la collection *ressources* :

**mongoimport --db dbressources --collection ressources --type csv --file ./prices.csv --headerline**


* Dans une autre fenêtre du Terminal (toujours à la racine du projet) , Lancez ensuite le serveur en tapant soit **nodemon** ou **npm run start** .

* Tapez la commande **npm run build** dans une autre fenêtre du Terminal (toujours à la racine du projet)

* Puis dans un **navigateur** , faites un click sur cette URL :  [linkedphrase](http://localhost:3000/)

      ou lancez vous même l'URL :  `http://localhost:3000/` pour la manipulation des différents components du projet


## NB

Ajouter le **plugin RESTClient de firefox.** puis tester les différentes *API REST* correspondantes à
*clientsrest et ressourcesrest*.


## API REST IMPLEMENTED

## React Component IMPLEMENTED

Tout est Bon a priori .
