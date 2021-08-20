// ==UserScript==
// @name     Fare Rules Explainer
// @namespace fare-rules-explainer
// @version  0.0.5
// @include https://matrix.itasoftware.com/*
// @grant    none
// @require https://raw.githubusercontent.com/traveldealz/farerules-explainer/gh-pages/dist/explainer.js
// @run-at 				document-idle
// ==/UserScript==
window.addEventListener('hashchange', () => setTimeout(() => explaine_farerules(), 1000));

function explaine_farerules() {
  if (!location.hash.includes('view-rules')) {
    return;
  }

  console.log('Fare Rules found');
  let content = document.querySelector('#contentwrapper');
  let explainer = new Explainer(content.innerText);
  let head = document.querySelector('.head');
  let div = document.querySelector('#farerule-explainer') ?? document.createElement('div');
  div.id = 'farerule-explainer';
  div.innerHTML += explainer.listForm();
  div.innerHTML += explainer.explain('de');
  head.parentNode.insertBefore(div, head.nextSibling);
}

setTimeout(() => explaine_farerules(), 1000);
console.log('Fare Rules Explainer loaded');