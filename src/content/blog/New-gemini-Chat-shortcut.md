---
title: "New gemini Chat shortcut"
pubDatetime: 2024-7-28T04:06:31Z
featured: false
tags:
  - english
  - script
description: ""
---

```js
// ==UserScript==
// @name        New gemini Chat shortcut
// @namespace   brokenricefilms
// @match       https://gemini.google.com/*
// @grant       none
// ==/UserScript==

(function () {
  "use strict";

  // Replace this with the actual selector for your new chat element
  const newChatButtonSelector = ".expandable-button";

  document.addEventListener("keydown", event => {
    if (event.key === "`") {
      event.preventDefault(); 

      const newChatButton = document.querySelector(newChatButtonSelector);
      if (newChatButton) {
        newChatButton.click();
        const chatBox = document.querySelector(".ql-editor");
        if (chatBox) {
          chatBox.focus();
        }
      }
    }
  });
})();
```
