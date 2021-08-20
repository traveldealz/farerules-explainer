// ==UserScript==
// @name     Fare Rules Explainer
// @namespace fare-rules-explainer
// @version  0.0.6
// @downloadURL https://github.com/traveldealz/farerules-explainer/blob/main/src/farerules-explainer.user.js
// @updateURL https://github.com/traveldealz/farerules-explainer/blob/main/src/farerules-explainer.user.js
// @include https://matrix.itasoftware.com/*
// @grant    none
// @require https://gist.githubusercontent.com/goaround/844c1ea9144483c01f7b8f920e8cd65c/raw/d6e8f5be915ad1a5debf9251692ae0518fcf190c/farerules-explainer.js
// @run-at 				document-idle
// ==/UserScript==

window.addEventListener('hashchange', () =>
  setTimeout(() => explaine_farerules(), 1000)
);

function explaine_farerules() {
  if (!location.hash.includes('view-rules')) {
    return;
  }

  console.log('Fare Rules found');

  let content = document.querySelector('#contentwrapper');

  let explainer = new Explainer(content.innerText);

  let head = document.querySelector('.head');

  let div =
    document.querySelector('#farerule-explainer') ??
    document.createElement('div');
  div.id = 'farerule-explainer';
  div.innerHTML += explainer.listForm();
  div.innerHTML += explainer.explain('de');

  head.parentNode.insertBefore(div, head.nextSibling);
}

setTimeout(() => explaine_farerules(), 1000);

console.log('Fare Rules Explainer loaded');
