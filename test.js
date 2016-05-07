import test from 'ava';
import lcs from '.';

test('Testing functionality', t => {
	t.is(lcs('abc', 'abc'), 'abc', 'Equal strings');
	t.is(lcs('abc', ''), '', 'Empty string');
	t.is(lcs('AbC', 'aBC', true), 'C', 'Case sensitive');
	t.is(lcs('abc def', 'abc'), 'abc', 'Testing algorithm - 1');
	t.is(lcs('abc def', 'arc reg'), 'ac e', 'Testing algorithm - 2');
	t.is(lcs('abc def ghi', 'abc jkl ghi'), 'abc  ghi', 'Testing algorithm - 3');
});
