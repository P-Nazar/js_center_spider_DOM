"use strict";
const wall = document.querySelector(".wall");
const spider = document.querySelector(".spider");
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const centerX = (wallWidth - spiderWidth) / 2;
const centerY = (wallHeight - spiderHeight) / 2;
spider.style.left = `${centerX}px`;
spider.style.top = `${centerY}px`;

//# sourceMappingURL=index.f75de5e1.js.map