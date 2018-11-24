## EKA Classifier

A simple text classification microservice written on NodeJS based on [Naive Bayes classification](https://github.com/NaturalNode/natural#bayesian-and-logistic-regression), to be hosted on Zeit Now v1.

The main reason it exits is that [NaturalNode/natural](https://github.com/NaturalNode/natural#bayesian-and-logistic-regression) libraries have not yet ported to the browser.

Part on the [Estonian Academy of Arts](https://www.artun.ee/en/home/) Emerging Themes masters project.

### Demo

https://eka-classifier.now.sh

### Installation and running locally

```sh
npm i
npm run start
```

### Training

POST training text and classificator strings as JSON array to the `/train` route:

```json
[
  ["tomorrow we will do standup", "meeting"],
  ["can you play some new music", "music"]
]
```

A classifier with parameters will be returned, something like

```
{"classifier":{"classFeatures":{ ...
```

### Classifying

POST text to classify and classifier returned from the previous step as JSON array to the `/classify` route:

```
["play ABBA for me",{"classifier":{"classFeatures":{ ... ]
```

A classificator string will be returned:

```
music
```

### Deploying

```sh
npm i -g now
now
now alias
```
