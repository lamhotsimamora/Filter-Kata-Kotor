# Filter-Kata-Kotor

This repository is just an example for filtering of bad words with JAVASCRIPT and also you can use this library for your website. 
Enjoy ! Please share this page if you like it ! (Sorry ! if the bad words is too HARD to say ! ) (Source bad words from Google)

----------
### DEMO 

https://lamhotsimamora.github.io/Filter-Kata-Kotor/

https://jsfiddle.net/LamhotSimamora/d3qsvLum/4/


### CDN
https://cdn.rawgit.com/lamhotsimamora/Filter-Kata-Kotor/master/filter-bad-word.js


### HTML
```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/lamhotsimamora/Filter-Kata-Kotor/master/filter-bad-word.js">
```
----------
### How to use ?
----------
## First 
#### Function with default dictionary (Indonesia language) of bad word and default filter string "***"
```
var my_string = "Awas kau ya BABI !";

var result = _filterBadWord(my_string);
```
----------
## Second 
#### Function with default dictionary (Indonesia language) of bad word and with custom filter string "####" (any character that you want)

```
var my_string = "Awas kau ya BABI !";

var result = _filterBadWord(my_string,"###");
```
----------
## Third
#### Function with custom dictionary of bad word and with custom filter string "..." (any character that you want)

```
var my_string = "Hi bro ! You are fucking bitch ! Asshole !";

const my_bad_word = [
	'Asshole','Fuck You','Damn','Bitch','Fucking'
];

var result = _filterBadWord(my_string,"...",my_bad_word);
```



