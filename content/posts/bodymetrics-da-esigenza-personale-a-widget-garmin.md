---
title: "BodyMetrics: da un'esigenza personale a un widget Garmin pubblicato per la community"
slug: "bodymetrics-da-esigenza-personale-a-widget-garmin"
date: 2026-05-30T10:00:00+02:00
draft: false
author: "Gregorio La Gamba"
description: "Come e perchè ho sviluppato BodyMetrics, un widget Garmin Connect IQ nato per rendere più leggibili e utili i dati di body composition."
tags: ["Garmin", "Connect IQ", "BodyMetrics", "software development", "health tech", "wearables"]
categories: ["Progetti"]
cover:
  image: "images/posts/bodymetrics-cover.png"
  alt: "Schermata del progetto BodyMetrics dedicato alla lettura delle metriche corporee nell'ecosistema Garmin"
  caption: ""
  relative: false
  hidden: false
keywords: ["BodyMetrics", "Garmin Connect IQ", "Garmin Forerunner 265", "Garmin Index S2", "body composition", "Monkey C"]
ShowToc: true
TocOpen: false
schema: "Article"
weight: 2
---

## Quando un cambio di ecosistema ti fa perdere visibilita sui dati

Per anni ho monitorato salute e attività sportive con una **Xiaomi Mi Body Composition Scale 2** e una **Mi Band**. Erano prodotti dal costo accessibile, ma con un'esperienza sorprendentemente completa: metriche dettagliate, trend storici, grafici, fasce comparative e una lettura abbastanza immediata dell'evoluzione dei dati nel tempo.

Poi ho deciso di passare a un **Garmin Forerunner 265**.

Dal punto di vista sportivo è stata una scelta molto positiva. Ho guadagnato qualità delle metriche, approfondimento sulle prestazioni e un ecosistema decisamente più solido per allenamento, recupero e analisi delle attività.

Il problema è che, nel passaggio, ho perso coerenza nella lettura complessiva dei miei dati corporei.

Una parte delle informazioni era rimasta su Garmin Connect. Un'altra parte su Xiaomi. Mettere in relazione peso, composizione corporea e andamento nel tempo di tutti i valori registrati era diventato molto meno immediato.

<!--more-->

Per eliminare questa frammentazione ho deciso di completare il passaggio all'ecosistema Garmin acquistando una **Garmin Index S2**.

Pensavo che il problema fosse risolto. In realta ho scoperto quasi subito un limite abbastanza concreto: i dati di **body composition** erano presenti, ma la loro visualizzazione risultava troppo essenziale.

I valori c'erano, ma mancava il contesto. Capire davvero se un parametro stesse migliorando, peggiorando o semplicemente oscillando in modo normale non era affatto semplice.

## Il problema reale non era il dato, ma la sua leggibilità

Quando si parla di peso, percentuale di grasso, idratazione, massa muscolare o massa ossea, vedere solo il numero del giorno serve fino a un certo punto.

Quello che conta davvero e poter leggere almeno tre livelli di informazione:

- il valore corrente
- il suo andamento nel tempo
- il suo significato rispetto a una soglia, una zona o un obiettivo

Nel mio caso, questo era esattamente ciò che mi mancava.

Garmin offriva un ecosistema eccellente per l'allenamento, ma molto meno efficace nel rendere utili e comprensibili i dati di composizione corporea direttamente dal dispositivo. Da qui mi sono chiesto:

> Se io sento questa mancanza, possibile che non esista già qualcosa di mirato su Connect IQ?

Ho cercato. Non ho trovato quello che mi serviva.

## Da bisogno personale a progetto concreto

A quel punto la scelta era abbastanza chiara: se non esisteva lo strumento che mi serviva, avrei provato a costruirlo.

E così è nato **BodyMetrics**, un widget per Garmin Connect IQ pensato per rendere i dati di body composition:

- più leggibili
- più ricchi di contesto
- più utili nelle decisioni quotidiane

L'obiettivo era passare da un semplice elenco di valori a un'interfaccia capace di aiutare a interpretare le metriche in modo piu naturale, direttamente dal polso.

## Cosa fa BodyMetrics

BodyMetrics è stato progettato per aggregare e presentare in modo più chiaro le principali metriche corporee rilevate nell'ecosistema Garmin.

Tra queste:

- peso
- BMI
- percentuale di grasso corporeo
- massa muscolare
- percentuale di massa muscolare
- idratazione
- massa ossea
- BMR
- stima della potenza muscolare

Il widget aggiunge elementi che per me erano fondamentali:

- trend storici consultabili direttamente dall'orologio
- zone di riferimento e contesto interpretativo
- delta rispetto a obiettivi personalizzati o derivati dal profilo
- una lettura piu strutturata dei dati, non limitata al singolo valore istantaneo

In altre parole, prova a trasformare una raccolta di numeri in una vista piu leggibile e utilizzabile.

## Costruirlo non è stato immediato

Come tutti i progetti nati fuori dagli orari di lavoro, ho dovuto trovare dei ritagli di tempo reali da dedicare alla realizzazione del widget: la sera, nei weekend, spesso sacrificando parecchie ore di sonno.

Dal punto di vista tecnico e stato anche un ottimo terreno di esplorazione:

- sviluppo in **Monkey C** per l'ecosistema **Garmin Connect IQ**
- progettazione di interfacce leggibili su schermo smartwatch
- gestione di metriche eterogenee con fonti e significati diversi
- lavoro su UX e contesto informativo in un ambiente con spazio molto limitato

Questo vincolo, paradossalmente, è stato uno degli aspetti più interessanti: su uno smartwatch ogni scelta di design e architettura pesa molto di più.

## Il punto più interessante: non tenerlo per me

Una volta arrivato a una versione solida, ho pensato fosse giusto **non lasciare BodyMetrics come strumento esclusivamente personale**.

L'ho quindi:

- pubblicato su GitHub
- documentato in modo completo
- reso disponibile gratuitamente alla community Garmin

Credo che questo sia uno dei modi migliori per valorizzare un'esigenza personale: **trasformarla in qualcosa che possa essere utile anche ad altri**.

## Una piccola lezione da ricordare

Molti progetti nascono così. Da un limite incontrato in prima persona. Da una domanda molto pratica: "Perche questa cosa non esiste ancora nel modo in cui servirebbe davvero?"

> I progetti piu sensati non nascono da un'idea astratta, ma da un problema concreto che necessita di una soluzione.

E quando conosci bene il problema, hai anche molta più chiarezza su cosa rendere semplice, cosa rendere visibile e cosa invece eliminare.

Un progetto personale diventa interessante anche per gli altri quando non parte dalla semplice voglia di **fare qualcosa**, ma dal bisogno di **risolvere bene qualcosa**.

## Dove trovare BodyMetrics

Se vuoi approfondire il progetto, qui trovi i riferimenti principali:

- [Repository GitHub](https://github.com/org-gregoriolagamba-labs/com.garmin.bodymetrics)
- [Documentazione completa](https://gregoriolagamba.github.io/bodymetrics/)
- [Documentazione in italiano](https://gregoriolagamba.github.io/bodymetrics/it/)
- [Garmin Connect IQ Store](https://apps.garmin.com/)

Se usi già l'ecosistema Garmin e senti anche tu il limite di una lettura troppo povera dei dati di body composition, BodyMetrics nasce esattamente da questa esigenza.