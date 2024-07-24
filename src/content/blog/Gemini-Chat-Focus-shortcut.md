---
title: Gemini Chat Focus Shortcut
pubDatetime: 2024-7-23T04:06:31Z
description: ""
tags:
  - english
  - script
---

I use this extension to run a script: https://violentmonkey.github.io 

Repo: https://github.com/brokenricefilms/gemini-chat-focus-shortcut (script in this repo will be up to date, cuz i'm lazy to update script here)

Install: https://github.com/brokenricefilms/gemini-chat-focus-shortcut/raw/main/gemini-chat-focus-shortcut.user.js

```js
// ==UserScript==
// @name         Gemini Chat Focus shortcut
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Focuses the chat input field when 'Escape' is pressed.
// @author       brokenricefilms
// @match        https://gemini.google.com/app/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        // Replace 'chat_box_selector' with the actual selector for your chat box
        const chatBox = document.querySelector('.ql-editor');
        if (chatBox) {
            chatBox.focus();
        }
    }
});
```
