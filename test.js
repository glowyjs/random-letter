import randomLetter from './index.js';
import test from 'ava';

test('randomLetter return type to be string', t => {
	t.is(typeof randomLetter(), 'string');
});

test('randomLetter string length less eq 1', t => {
	t.is(randomLetter().length, 1);
	t.is(randomLetter({ casing: 'upper' }).length, 1);
	t.is(randomLetter({ casing: 'lower' }).length, 1);
});
