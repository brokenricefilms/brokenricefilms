---
title: Chrome console script that shows all links ending in .mp4 and .mkv on the current page and saves them to a text file
pubDatetime: 2024-7-11T04:06:31Z
description: ""
tags:
  - english
  - script
---

````js
const links = document.querySelectorAll('a[href*=".mp4"], a[href*=".mkv"]');
const urls = [];

for (const link of links) {
  urls.push(link.href);
}

if (urls.length === 0) {
  console.log('No .mp4 or .mkv links found on this page.');
} else {
  const blob = new Blob([urls.join('\n')], { type: 'text/plain' });
  const filename = 'video_links.txt';
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();

  window.URL.revokeObjectURL(url); // Clean up temporary URL
  console.log(`${urls.length} links found and saved to ${filename}`);
}
````
