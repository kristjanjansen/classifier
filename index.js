const { json } = require("micro");
const { router, post } = require("microrouter");
const cors = require("micro-cors")();

var natural = require("natural");
var classifier = new natural.BayesClassifier();

const train = async req => {
  const data = await json(req);
  data.forEach(d => classifier.addDocument(...d));
  classifier.train();
  return JSON.stringify(classifier);
};

const classify = async req => {
  const data = await json(req);
  const classifier = natural.BayesClassifier.restore(data[1]);
  return JSON.stringify(classifier.classify(data[0]));
};

module.exports = cors(
  router(post("/train", train), post("/classify", classify))
);