var natural = require('natural');
var source = '我是一个前端工程师，我擅长的语言是js';
var target = '前端程师，必须握js语言';

console.log(natural.LevenshteinDistance(source, target, {search: true}));