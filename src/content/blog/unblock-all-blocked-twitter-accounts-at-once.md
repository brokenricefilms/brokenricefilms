---
title: Unblock all blocked Twitter accounts at once
pubDatetime: 2024-6-6T04:06:31Z
description: ""
tags:
  - english
  - script
---

```js
let autoUnBlock = setInterval(function () {
  window.scrollBy(0, window.innerHeight);
  document.querySelectorAll('[aria-label="Block"]').forEach(function (account) {
    account.click();
  });
}, 1000);
```

```js
clearInterval(autoUnBlock);
```

---

```js
let autoUnmute = setInterval(function () {
  window.scrollBy(0, window.innerHeight);
  document
    .querySelectorAll('[aria-label^="Unmute"]')
    .forEach(function (account) {
      account.click();
    });
}, 1000);
```

```js
clearInterval(autoUnmute);
```

Thanks, https://lucahammer.com/2018/08/09/unblock-all-blocked-twitter-accounts-at-once
