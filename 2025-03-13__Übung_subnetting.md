# Übung Subnetting

## Übung 1

Bilde aus dem Netz 192.168.0.0 /24 4 Subnetze. Netze mit Mindestzahl an nutzbaren Host aber nicht darunter wählen: Netz a mit 20, Netz b mit 15, Netz c mit 30, und das Netz d mit den Rest Anteil der Netzwerkadressen.

a. /27 192.168.0.0 - 192.168.0.31
b. /27 192.168.0.32 - 192.168.0.64
c. /27 192.168.0.65 - 192.168.0.96
d. /25 192.168.0.98 - 192.168.0.225

## Übung 2 

Teile das Netz 193.170.20.0 /24 in 8 gleich große Netze! Erstelle eine Tabelle mit folgenden Angaben:
Netzwerkadresse,               nutzbare Hosts,                    Broadcastadresse,              Subnetzmaske.

Netzadresse               nutzbare Hosts                   Brodcastadresse           Subnetzmaske

193.170.20.0              62                               193.170.20.63              /26
                  
193.170.20.64             62                               193.170.20.127             /26
                  
193.170.20.128            62                               193.170.20.191             /26
                  
193.170.20.192            62                               193.170.20.255             /26
                 

## Übung 3

172.28.40.0 /26 Teile wie folgt auf: 2 Netze!
Erstelle eine Tabelle mit folgenden Angaben:
Netzwerkadresse,               nutzbare Hosts,                    Broadcastadresse,              Subnetzmaske.

Netzadresse               nutzbare Hosts                    Brodcastadresse          Subnetzmaske

172.28.40.0               30                                172.28.40.31             /27 
                    
172.26.40.32              30                                172.26.40.63              /27
                    

## Übung 4

Wie lautet die Subnetzmaske bei der Netzadresse: 17.0.0.0 mit 10 verwendbaren Subnetzen, sowie mit mindestens 12 Hosts je Subnetz?
Antwort in Sätzen, wie sie zu dieser Lösung kommen; und erstelle eine Tabelle:

Die Subnetzmaske für die Netzadresse 17.0.0.0 lautet /24. Dieses kann im 10 oder mehreren /28 Subnetze geteilt werden.

## Übung 5

Bestimmen Sie die Subnetmaske mit folgenden Angaben:

Netzadresse: 210.52.190.0
Subnetze: Anzahl 5
Mindestanzahl von Hosts je Subnetz: 10

Für diese Angabe gäbe es zwei verschiedene Möglichkeiten:
1. Ein /24 Subnetz aufgeteilt in 5 /27 Subnetze
2. Ein /25 Subnetz aufgeteilt in 5 /28 Subnetze

## Übung 6

Teile  ein /30 Netz auf!    Wozu werden diese /30 Netze am häufigsten verwendet?
Antwort:

Z.B. für P2P Verbindungen zwischen zwei Netzwerkgeräten

## Übung 7

Nennen Sie den jeweiligen Netz- und Hostanteil der Klassen A, B und C

A: /8 Nertzanteil: die ersten 8 Bits, Hostanteil: die letzten 24 Bits

B: Nertzanteil: die ersten 16 Bits, Hostanteil: die letzten 16 Bits

C: Nertzanteil: die ersten 24 Bits, Hostanteil: die Letzten 8 Bits
