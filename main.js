/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const titleElement1 = document.getElementById('title');
console.log('titleElement1の中身 :', titleElement1);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const containerElement = document.querySelector('#item-container');
console.log('containerElementの中身 :', containerElement);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const liElements = document.getElementsByTagName('li');
console.log('liElement :', liElements);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemElement1 = document.getElementsByClassName('item');
console.log('itemElement1 :', itemElement1);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemElement2 = document.querySelectorAll('.item');
console.log('itemElement2 :', itemElement2);
