---
title: "Chuyện transcode: Davinci Resolve vs Shutter Encoder vs HandBrake"
pubDatetime: 2023-12-6T04:06:31Z
featured: true
tags:
  - vietnamese
  - editing
description: "pros and cons"
---

Cho mấy chế làm biến đọc: Shutter Encoder là thượng đẳng

Chuyện rằng

Tui muốn transcode cho mấy cái animation texture, rồi overlay này nọ sang HNxHR SQ để edit cho mượt

Một phần cũng để tiết kiệm phần nào dung lượng cho mấy file ProRes 4444 chẳng hạn

Rồi transcode mấy dự án xài codec h264/5 cũng để edit cho nó mượt

Tản mạng một chút về codec thì đối với tui HNxHR SQ là đủ xài để render upload lên youtube đồ, còn muốn proxy thì tui chọn HNxHR LQ cho nó nhẹ một chút.

Nếu transcode rồi thì tui không không cần xài proxy nữa

## Handbrake

Không hỗ trợ transcode HNxHR -> bye

## Davinci Resolve

Resolve có cái file -> Media Management

Cũng có chức năng transcode đồ mà ổng không có xuất ra kiểu theo bin, folder đồ nên nhìn hơi ngứa

Giống như có bin footage đi, thì Resolve không export ra folder `Footage/`

Thế thì kiểu để gọn gàn, cái ny bỏ vô folder này, cái ny bò vô folder kia rồi nó transcode là một cái folder tùm lum, suy ra nhìn ngứa

Nói chung không nhìn trong media pool vẫn okay la. Hầy nhưng khum bơ phẹt lém

## Shutter Encoder

Yep

Đây là lựa chọn ưu tiên của tui khi transcode

Kiểu kéo thả vô ổng là okay la rồi chọn kiểu codec muốn encode các kiểu là okay la

Ổng sẽ output ra kế bên cái file gốc thêm cái tên codec đằng sau đuôi như dnxdr-sq chẳng hạn

Shutter Encoder không có chức năng xóa file gốc khi encode xong, nên có thể mệt cái khúc muốn xóa file gốc cho đỡ dung lượng

Có một tip là khi transcode khác file extension như mp4 -> mov chẳng hạn

Mình có thể search .mp4 rồi select all rồi delete thôi :D

Tui mới xài nên cũng không ràng lắm, nên không biết còn cái cách nào okay la hơn không

Và Ổng cũng transcode được audio, Resolve thì chỉ transcode video thôi (tui thấy vậy :D)

Có làn tính transcode cái đống mấy ngàn sound effects sang aac cũng lăng tăng không biết làm sao đỡ mệt trên davinci resolve

Ổng củng có chức năng hay ho như normalize audio LUT -14 cho YouTube chẳng hạn, cho mấy cái sound effects chạm nốc volume y chang nhau :D

À khỉ drag and drop nguyên cái folder có dính file hình thì ổng cũng transcode sang file video, tui chưa biết fix cái này làm sau

Vậy thui, bye mấy chế
