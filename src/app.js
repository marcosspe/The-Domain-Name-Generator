/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var domain = [".com", ".uy"];

  function domainGenerator() {
    var resp;
    for (var i = 0; i < pronoun.length; i++) {
      for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
          for (var l = 0; l < domain.length; l++) {
            resp += pronoun[i] + adj[j] + noun[k] + domain[l];
          }
        }
      }
    }
    return resp;
  }
  let domainText = document.getElementById("domain");
  let btnGenerator = document.getElementById("btnGenerator");

  btnGenerator.addEventListener("click", function() {
    domainText.innerHTML = domainGenerator();
  });
  console.log("Hello Rigo from the console!");
};
