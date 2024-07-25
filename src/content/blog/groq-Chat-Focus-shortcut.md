---
title: Groq Chat Focus Shortcut
pubDatetime: 2024-7-23T05:06:31Z
description: ""
tags:
  - english
  - script
---

```js
// ==UserScript==
// @name         groq Chat Focus shortcut
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Focuses the chat input field when 'Escape' is pressed.
// @author       brokenricefilms
// @match        https://groq.com/
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const chatBox = document.querySelector('div.hidden > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > textarea:nth-child(1)');
        if (chatBox) {
            chatBox.focus();
        }
    }
});
```
