---
title: Cách truy cập vào VNPT router iGate GW040-H
pubDatetime: 2024-6-21T07:06:31Z
description: ""
tags:
  - vietnamese
  - network
---

Thường mấy chế truy cập vào địa chỉ `192.168.1.1` là sẽ dẫn tới trang config của router

Nhưng khi tui đổi cái router thì mấy anh nhà mạng nói truy cập bằng trình duyệt thông thường sẽ không được

Mà phải xài UC browser, trình duyệt con sóc màu cam

Nhưng tui không thích xài UC browser cũng không muốn cài nó

Sao khi mò trên mạng thì tui thấy giải pháp

Mấy chế cài firefox

Rồi vào gõ `about:config`

Search cái preference này

```js
security.tls.version.min;
```

Rồi mấy chế chuyển cái giá trị này về bằng 1 (mặc định là số 3)

Android thì mấy chế phải cài firefox bản beta thì mới đăng nhập vào `about:config` được

IOS thì tui chưa thử nhưng tui đoán là không được tại firefox hay chrome,... thì cái engine cũng là apple (f\*\*\* apple)

Mấy chế có thể tìm hiểu thêm về TLS để mò cách phương pháp áp dụng khác
