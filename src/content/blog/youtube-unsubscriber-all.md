---
title: YouTube Unsubcriber all
pubDatetime: 2024-7-6T04:06:31Z
description: ""
tags:
  - english
  - script
---

https://www.youtube.com/feed/channels

```js
let i = 0;

let myLet = setInterval(myTimer, 3000);

function myTimer() {
  let els = document
    .getElementById("grid-container")
    .getElementsByClassName("ytd-expanded-shelf-contents-renderer");

  if (i < els.length) {
    els[i].querySelector("[aria-label^='Unsubscribe from']").click();

    setTimeout(function () {
      let unSubBtn = document
        .querySelector("yt-button-renderer#confirm-button button")
        .click();
    }, 2000);

    setTimeout(function () {
      els[i].parentNode.removeChild(els[i]);
    }, 2000);
  }

  i++;

  console.log(els.length + " remaining");
}
```

Touch Some Grass
