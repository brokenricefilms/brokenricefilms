---
title: Shopee Search Focus Shortcut
pubDatetime: 2024-7-24T04:06:31Z
description: ""
tags:
  - english
  - script
---

I live in Vietnam, so shopee.vn is my local Shopee domain name. You can change this to your own country's domain name at the bottom. You might also need to adjust the `querySelector` depending on the website's structure.

Press the `Esc` key to focus on the search bar.

```js
// ==UserScript==
// @name         shopee search focus shortcut
// @namespace    Violentmonkey Scripts
// @version      1.0
// @description  Focuses the chat input field when 'Escape' is pressed.
// @author       brokenricefilms
// @match        https://shopee.vn/*
// @grant        none
// ==/UserScript==

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const chatBox = document.querySelector(".shopee-searchbar-input__input");
    if (chatBox) {
      chatBox.focus();
    }
  }
});
```
