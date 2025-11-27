'use strict';

const populations = document.querySelectorAll('.population');

const numbers = Array.from(populations).map((span) => {
  const text = span.textContent.trim();
  const num = Number(text.replace(/,/g, ''));

  return num;
});

const total = numbers.reduce((sum, n) => sum + n, 0);
const average = total / numbers.length;

const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(average),
);
