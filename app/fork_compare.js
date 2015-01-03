'use strict';

console.log('------ Test localeCompare #1 ------');
//  The following messages are not printed in the console
console.log('a'.localeCompare('c')); // -2, or -1, or some other negative value

console.log('------ Test localeCompare #2 ------');
console.log('c'.localeCompare('a')); // 2, or 1, or some other positive value

console.log('------ Test localeCompare #3 ------');
console.log('a'.localeCompare('a')); // 0
