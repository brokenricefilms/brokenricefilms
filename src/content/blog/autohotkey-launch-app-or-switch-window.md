---
title: Autohotkey launch app or switch window
pubDatetime: 2024-7-12T04:06:31Z
description: ""
tags:
  - english
  - autohotkey
---

Keeping the function at the end of the config file is optional but can help resolve conflicts

```js
F9::
    IfWinExist ahk_class Chrome_WidgetWin_1
        winactivate ahk_class Chrome_WidgetWin_1
    else
        run, "C:\Program Files\Google\Chrome\Application\chrome.exe"
    WinWaitActive ahk_class Chrome_WidgetWin_1
return
```
