// Jorge Valdez
// Oct 17 2016
//
// Machine Learning in JS
// Following the tutorial from:
// http://burakkanber.com/blog/machine-learning-in-js-k-nearest-neighbor-part-1/
//
// Node and NodeList classes
// For an implementation of the k-Nearest

// Node
// Represents a data node within the graph.
var Node = function(params) {
  // Add each key from the included params object as a feature of Node
  Object.keys(params).forEach(function(key) {
    this[key] = params[key];
  });
};

// NodeList
// Represents a list of nodes/a graph of the nodes
var NodeList = function(k, nodes) {
  // k is the k in kNearestNeighbors
  this.k = k;

  if (nodes) {
    this.nodes = nodes;
  }
  else {
    this.nodes = [];
  }
};
