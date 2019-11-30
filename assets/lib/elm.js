(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$False = {$: 'False'};
var author$project$Types$Semana$init = {aparatosid: '', aparatosname: '', camaraid: '', camaraname: '', cancion1: 0, cancion1id: '', cancion1name: '', cancion1tema: '', cancion1versiculo: '', cancion2: 0, cancion2id: '', cancion2name: '', cancion2tema: '', cancion2versiculo: '', cancion3: 0, cancion3id: '', cancion3name: '', cancion3tema: '', cancion3versiculo: '', consejolector: 0, creado: 0, cronometroid: '', cronometroname: '', domasamblea: false, domasambleamensage: 'Hay asamblea', domcancion2: 0, domcancion2id: '', domcancion2name: '', domcancion2tema: '', domcancion2versiculo: '', domcancion3: 0, domcancion3id: '', domcancion3name: '', domcancion3tema: '', domcancion3versiculo: '', domdiscursante: '', domhaydiscursante: false, dompresidenteid: '', dompresidentename: '', elcnarradorid: '', elcnarradorname: '', elcpersonajes: '', elcversiculos: '', fechadomingo: 0, fechasabado: 0, id: '', lecturaversiculos: '', modificado: 0, nvcanciano1: false, nvcanciano2: false, nvcestudiolectorid: '', nvcestudiolectorname: '', nvcestudiooradorid: '', nvcestudiooradorname: '', nvcmins1: 0, nvcmins2: 0, nvcorador1id: '', nvcorador1name: '', nvcorador2id: '', nvcorador2name: '', nvctitulo1: '', nvctitulo2: '', oracion1id: '', oracion1name: '', oracion2id: '', oracion2name: '', presentacionesmesid: '', presentacionesmesname: '', presidenteid: '', presidentename: '', sabasamblea: false, sabasambleamensage: '', smm1ayuid: '', smm1ayuname: '', smm1esid: '', smm1esname: '', smm2ayuid: '', smm2ayuname: '', smm2esid: '', smm2esname: '', smm3ayuid: '', smm3ayuname: '', smm3esid: '', smm3esname: '', smm4ayuid: '', smm4ayuname: '', smm4esid: '', smm4esname: '', smmconsejo1: 0, smmconsejo2: 0, smmconsejo3: 0, smmconsejo4: 0, smmesvideo1: false, smmesvideo2: false, smmesvideo3: false, smmesvideo4: false, smmleccionmaestros: false, smmmin1: 0, smmmin2: 0, smmmin3: 0, smmmin4: 0, smmtema1: '', smmtema2: '', smmtema3: '', smmtema4: '', smmtieneayudante1: false, smmtieneayudante2: false, smmtieneayudante3: false, smmtieneayudante4: false, starthour: 15, startminute: 0, tb1oradorid: '', tb1oradorname: '', tb1titulo: '', tblectorid: '', tblectorname: '', tbperlasoradorid: '', tbperlasoradorname: ''};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$App$init = _Utils_Tuple2(
	{canciones: _List_Nil, publicadores: _List_Nil, semanasanteriores: _List_Nil, semanasllenados: _List_Nil, semanastofill: _List_Nil, semanatofill: author$project$Types$Semana$init},
	elm$core$Platform$Cmd$none);
var author$project$App$Clear = function (a) {
	return {$: 'Clear', a: a};
};
var author$project$App$FillSemana = function (a) {
	return {$: 'FillSemana', a: a};
};
var author$project$App$FillSemanas = function (a) {
	return {$: 'FillSemanas', a: a};
};
var author$project$App$LoadCanciones = function (a) {
	return {$: 'LoadCanciones', a: a};
};
var author$project$App$LoadPublicadores = function (a) {
	return {$: 'LoadPublicadores', a: a};
};
var author$project$App$LoadSemanasAnteriores = function (a) {
	return {$: 'LoadSemanasAnteriores', a: a};
};
var author$project$App$Programasemanalrestore = function (a) {
	return {$: 'Programasemanalrestore', a: a};
};
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Ports$clear = _Platform_incomingPort('clear', elm$json$Json$Decode$string);
var author$project$Ports$fillSemana = _Platform_incomingPort('fillSemana', elm$json$Json$Decode$string);
var author$project$Ports$fillSemanas = _Platform_incomingPort('fillSemanas', elm$json$Json$Decode$string);
var author$project$Ports$loadCanciones = _Platform_incomingPort('loadCanciones', elm$json$Json$Decode$string);
var author$project$Ports$loadPublicadores = _Platform_incomingPort('loadPublicadores', elm$json$Json$Decode$string);
var author$project$Ports$loadSemanasAnteriores = _Platform_incomingPort('loadSemanasAnteriores', elm$json$Json$Decode$string);
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Ports$programasemanalrestore = _Platform_incomingPort(
	'programasemanalrestore',
	A2(
		elm$json$Json$Decode$andThen,
		function (semanastemplates) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (semanasllenados) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (semanasanteriores) {
							return A2(
								elm$json$Json$Decode$andThen,
								function (publicadores) {
									return A2(
										elm$json$Json$Decode$andThen,
										function (canciones) {
											return elm$json$Json$Decode$succeed(
												{canciones: canciones, publicadores: publicadores, semanasanteriores: semanasanteriores, semanasllenados: semanasllenados, semanastemplates: semanastemplates});
										},
										A2(
											elm$json$Json$Decode$field,
											'canciones',
											elm$json$Json$Decode$list(
												A2(
													elm$json$Json$Decode$andThen,
													function (versiculo) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (tema) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (num) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (idasignado) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (asignado) {
																						return elm$json$Json$Decode$succeed(
																							{asignado: asignado, idasignado: idasignado, num: num, tema: tema, versiculo: versiculo});
																					},
																					A2(elm$json$Json$Decode$field, 'asignado', elm$json$Json$Decode$string));
																			},
																			A2(elm$json$Json$Decode$field, 'idasignado', elm$json$Json$Decode$string));
																	},
																	A2(elm$json$Json$Decode$field, 'num', elm$json$Json$Decode$int));
															},
															A2(elm$json$Json$Decode$field, 'tema', elm$json$Json$Decode$string));
													},
													A2(elm$json$Json$Decode$field, 'versiculo', elm$json$Json$Decode$string)))));
								},
								A2(
									elm$json$Json$Decode$field,
									'publicadores',
									elm$json$Json$Decode$list(
										A2(
											elm$json$Json$Decode$andThen,
											function (varon) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (tb1orador) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (smmdiscurso) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (smm4publicador) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (smm3publicador) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (smm2publicador) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (smm1publicador) {
																								return A2(
																									elm$json$Json$Decode$andThen,
																									function (principiante) {
																										return A2(
																											elm$json$Json$Decode$andThen,
																											function (presidentesabado) {
																												return A2(
																													elm$json$Json$Decode$andThen,
																													function (presidentedomingo) {
																														return A2(
																															elm$json$Json$Decode$andThen,
																															function (perlas) {
																																return A2(
																																	elm$json$Json$Decode$andThen,
																																	function (oracion) {
																																		return A2(
																																			elm$json$Json$Decode$andThen,
																																			function (nvc) {
																																				return A2(
																																					elm$json$Json$Decode$andThen,
																																					function (name) {
																																						return A2(
																																							elm$json$Json$Decode$andThen,
																																							function (modificado) {
																																								return A2(
																																									elm$json$Json$Decode$andThen,
																																									function (lecturabiblia) {
																																										return A2(
																																											elm$json$Json$Decode$andThen,
																																											function (lectorestudiocongregacion) {
																																												return A2(
																																													elm$json$Json$Decode$andThen,
																																													function (id) {
																																														return A2(
																																															elm$json$Json$Decode$andThen,
																																															function (fechanodisponibleinicio) {
																																																return A2(
																																																	elm$json$Json$Decode$andThen,
																																																	function (fechanodisponiblefin) {
																																																		return A2(
																																																			elm$json$Json$Decode$andThen,
																																																			function (familiaressexoopuesto) {
																																																				return A2(
																																																					elm$json$Json$Decode$andThen,
																																																					function (esvideo) {
																																																						return A2(
																																																							elm$json$Json$Decode$andThen,
																																																							function (estudiocongregacion) {
																																																								return A2(
																																																									elm$json$Json$Decode$andThen,
																																																									function (cronometro) {
																																																										return A2(
																																																											elm$json$Json$Decode$andThen,
																																																											function (creado) {
																																																												return A2(
																																																													elm$json$Json$Decode$andThen,
																																																													function (camara) {
																																																														return A2(
																																																															elm$json$Json$Decode$andThen,
																																																															function (ayudante) {
																																																																return A2(
																																																																	elm$json$Json$Decode$andThen,
																																																																	function (aparatos) {
																																																																		return A2(
																																																																			elm$json$Json$Decode$andThen,
																																																																			function (anciano) {
																																																																				return elm$json$Json$Decode$succeed(
																																																																					{anciano: anciano, aparatos: aparatos, ayudante: ayudante, camara: camara, creado: creado, cronometro: cronometro, estudiocongregacion: estudiocongregacion, esvideo: esvideo, familiaressexoopuesto: familiaressexoopuesto, fechanodisponiblefin: fechanodisponiblefin, fechanodisponibleinicio: fechanodisponibleinicio, id: id, lectorestudiocongregacion: lectorestudiocongregacion, lecturabiblia: lecturabiblia, modificado: modificado, name: name, nvc: nvc, oracion: oracion, perlas: perlas, presidentedomingo: presidentedomingo, presidentesabado: presidentesabado, principiante: principiante, smm1publicador: smm1publicador, smm2publicador: smm2publicador, smm3publicador: smm3publicador, smm4publicador: smm4publicador, smmdiscurso: smmdiscurso, tb1orador: tb1orador, varon: varon});
																																																																			},
																																																																			A2(elm$json$Json$Decode$field, 'anciano', elm$json$Json$Decode$bool));
																																																																	},
																																																																	A2(elm$json$Json$Decode$field, 'aparatos', elm$json$Json$Decode$bool));
																																																															},
																																																															A2(elm$json$Json$Decode$field, 'ayudante', elm$json$Json$Decode$bool));
																																																													},
																																																													A2(elm$json$Json$Decode$field, 'camara', elm$json$Json$Decode$bool));
																																																											},
																																																											A2(elm$json$Json$Decode$field, 'creado', elm$json$Json$Decode$int));
																																																									},
																																																									A2(elm$json$Json$Decode$field, 'cronometro', elm$json$Json$Decode$bool));
																																																							},
																																																							A2(elm$json$Json$Decode$field, 'estudiocongregacion', elm$json$Json$Decode$bool));
																																																					},
																																																					A2(elm$json$Json$Decode$field, 'esvideo', elm$json$Json$Decode$bool));
																																																			},
																																																			A2(
																																																				elm$json$Json$Decode$field,
																																																				'familiaressexoopuesto',
																																																				elm$json$Json$Decode$list(elm$json$Json$Decode$string)));
																																																	},
																																																	A2(
																																																		elm$json$Json$Decode$field,
																																																		'fechanodisponiblefin',
																																																		elm$json$Json$Decode$oneOf(
																																																			_List_fromArray(
																																																				[
																																																					elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
																																																					A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$int)
																																																				]))));
																																															},
																																															A2(
																																																elm$json$Json$Decode$field,
																																																'fechanodisponibleinicio',
																																																elm$json$Json$Decode$oneOf(
																																																	_List_fromArray(
																																																		[
																																																			elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
																																																			A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$int)
																																																		]))));
																																													},
																																													A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$string));
																																											},
																																											A2(elm$json$Json$Decode$field, 'lectorestudiocongregacion', elm$json$Json$Decode$bool));
																																									},
																																									A2(elm$json$Json$Decode$field, 'lecturabiblia', elm$json$Json$Decode$bool));
																																							},
																																							A2(elm$json$Json$Decode$field, 'modificado', elm$json$Json$Decode$int));
																																					},
																																					A2(elm$json$Json$Decode$field, 'name', elm$json$Json$Decode$string));
																																			},
																																			A2(elm$json$Json$Decode$field, 'nvc', elm$json$Json$Decode$bool));
																																	},
																																	A2(elm$json$Json$Decode$field, 'oracion', elm$json$Json$Decode$bool));
																															},
																															A2(elm$json$Json$Decode$field, 'perlas', elm$json$Json$Decode$bool));
																													},
																													A2(elm$json$Json$Decode$field, 'presidentedomingo', elm$json$Json$Decode$bool));
																											},
																											A2(elm$json$Json$Decode$field, 'presidentesabado', elm$json$Json$Decode$bool));
																									},
																									A2(elm$json$Json$Decode$field, 'principiante', elm$json$Json$Decode$bool));
																							},
																							A2(elm$json$Json$Decode$field, 'smm1publicador', elm$json$Json$Decode$bool));
																					},
																					A2(elm$json$Json$Decode$field, 'smm2publicador', elm$json$Json$Decode$bool));
																			},
																			A2(elm$json$Json$Decode$field, 'smm3publicador', elm$json$Json$Decode$bool));
																	},
																	A2(elm$json$Json$Decode$field, 'smm4publicador', elm$json$Json$Decode$bool));
															},
															A2(elm$json$Json$Decode$field, 'smmdiscurso', elm$json$Json$Decode$bool));
													},
													A2(elm$json$Json$Decode$field, 'tb1orador', elm$json$Json$Decode$bool));
											},
											A2(elm$json$Json$Decode$field, 'varon', elm$json$Json$Decode$bool)))));
						},
						A2(
							elm$json$Json$Decode$field,
							'semanasanteriores',
							elm$json$Json$Decode$list(
								A2(
									elm$json$Json$Decode$andThen,
									function (tbperlasoradorname) {
										return A2(
											elm$json$Json$Decode$andThen,
											function (tbperlasoradorid) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (tblectorname) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (tblectorid) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (tb1titulo) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (tb1oradorname) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (tb1oradorid) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (startminute) {
																								return A2(
																									elm$json$Json$Decode$andThen,
																									function (starthour) {
																										return A2(
																											elm$json$Json$Decode$andThen,
																											function (smmtieneayudante4) {
																												return A2(
																													elm$json$Json$Decode$andThen,
																													function (smmtieneayudante3) {
																														return A2(
																															elm$json$Json$Decode$andThen,
																															function (smmtieneayudante2) {
																																return A2(
																																	elm$json$Json$Decode$andThen,
																																	function (smmtieneayudante1) {
																																		return A2(
																																			elm$json$Json$Decode$andThen,
																																			function (smmtema4) {
																																				return A2(
																																					elm$json$Json$Decode$andThen,
																																					function (smmtema3) {
																																						return A2(
																																							elm$json$Json$Decode$andThen,
																																							function (smmtema2) {
																																								return A2(
																																									elm$json$Json$Decode$andThen,
																																									function (smmtema1) {
																																										return A2(
																																											elm$json$Json$Decode$andThen,
																																											function (smmmin4) {
																																												return A2(
																																													elm$json$Json$Decode$andThen,
																																													function (smmmin3) {
																																														return A2(
																																															elm$json$Json$Decode$andThen,
																																															function (smmmin2) {
																																																return A2(
																																																	elm$json$Json$Decode$andThen,
																																																	function (smmmin1) {
																																																		return A2(
																																																			elm$json$Json$Decode$andThen,
																																																			function (smmleccionmaestros) {
																																																				return A2(
																																																					elm$json$Json$Decode$andThen,
																																																					function (smmesvideo4) {
																																																						return A2(
																																																							elm$json$Json$Decode$andThen,
																																																							function (smmesvideo3) {
																																																								return A2(
																																																									elm$json$Json$Decode$andThen,
																																																									function (smmesvideo2) {
																																																										return A2(
																																																											elm$json$Json$Decode$andThen,
																																																											function (smmesvideo1) {
																																																												return A2(
																																																													elm$json$Json$Decode$andThen,
																																																													function (smmconsejo4) {
																																																														return A2(
																																																															elm$json$Json$Decode$andThen,
																																																															function (smmconsejo3) {
																																																																return A2(
																																																																	elm$json$Json$Decode$andThen,
																																																																	function (smmconsejo2) {
																																																																		return A2(
																																																																			elm$json$Json$Decode$andThen,
																																																																			function (smmconsejo1) {
																																																																				return A2(
																																																																					elm$json$Json$Decode$andThen,
																																																																					function (smm4esname) {
																																																																						return A2(
																																																																							elm$json$Json$Decode$andThen,
																																																																							function (smm4esid) {
																																																																								return A2(
																																																																									elm$json$Json$Decode$andThen,
																																																																									function (smm4ayuname) {
																																																																										return A2(
																																																																											elm$json$Json$Decode$andThen,
																																																																											function (smm4ayuid) {
																																																																												return A2(
																																																																													elm$json$Json$Decode$andThen,
																																																																													function (smm3esname) {
																																																																														return A2(
																																																																															elm$json$Json$Decode$andThen,
																																																																															function (smm3esid) {
																																																																																return A2(
																																																																																	elm$json$Json$Decode$andThen,
																																																																																	function (smm3ayuname) {
																																																																																		return A2(
																																																																																			elm$json$Json$Decode$andThen,
																																																																																			function (smm3ayuid) {
																																																																																				return A2(
																																																																																					elm$json$Json$Decode$andThen,
																																																																																					function (smm2esname) {
																																																																																						return A2(
																																																																																							elm$json$Json$Decode$andThen,
																																																																																							function (smm2esid) {
																																																																																								return A2(
																																																																																									elm$json$Json$Decode$andThen,
																																																																																									function (smm2ayuname) {
																																																																																										return A2(
																																																																																											elm$json$Json$Decode$andThen,
																																																																																											function (smm2ayuid) {
																																																																																												return A2(
																																																																																													elm$json$Json$Decode$andThen,
																																																																																													function (smm1esname) {
																																																																																														return A2(
																																																																																															elm$json$Json$Decode$andThen,
																																																																																															function (smm1esid) {
																																																																																																return A2(
																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																	function (smm1ayuname) {
																																																																																																		return A2(
																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																			function (smm1ayuid) {
																																																																																																				return A2(
																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																					function (sabasambleamensage) {
																																																																																																						return A2(
																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																							function (sabasamblea) {
																																																																																																								return A2(
																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																									function (presidentename) {
																																																																																																										return A2(
																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																											function (presidenteid) {
																																																																																																												return A2(
																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																													function (presentacionesmesname) {
																																																																																																														return A2(
																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																															function (presentacionesmesid) {
																																																																																																																return A2(
																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																	function (oracion2name) {
																																																																																																																		return A2(
																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																			function (oracion2id) {
																																																																																																																				return A2(
																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																					function (oracion1name) {
																																																																																																																						return A2(
																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																							function (oracion1id) {
																																																																																																																								return A2(
																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																									function (nvctitulo2) {
																																																																																																																										return A2(
																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																											function (nvctitulo1) {
																																																																																																																												return A2(
																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																													function (nvcorador2name) {
																																																																																																																														return A2(
																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																															function (nvcorador2id) {
																																																																																																																																return A2(
																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																	function (nvcorador1name) {
																																																																																																																																		return A2(
																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																			function (nvcorador1id) {
																																																																																																																																				return A2(
																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																					function (nvcmins2) {
																																																																																																																																						return A2(
																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																							function (nvcmins1) {
																																																																																																																																								return A2(
																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																									function (nvcestudiooradorname) {
																																																																																																																																										return A2(
																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																											function (nvcestudiooradorid) {
																																																																																																																																												return A2(
																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																													function (nvcestudiolectorname) {
																																																																																																																																														return A2(
																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																															function (nvcestudiolectorid) {
																																																																																																																																																return A2(
																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																	function (nvcanciano2) {
																																																																																																																																																		return A2(
																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																			function (nvcanciano1) {
																																																																																																																																																				return A2(
																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																					function (modificado) {
																																																																																																																																																						return A2(
																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																							function (lecturaversiculos) {
																																																																																																																																																								return A2(
																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																									function (id) {
																																																																																																																																																										return A2(
																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																											function (fechasabado) {
																																																																																																																																																												return A2(
																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																													function (fechadomingo) {
																																																																																																																																																														return A2(
																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																															function (elcversiculos) {
																																																																																																																																																																return A2(
																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																	function (elcpersonajes) {
																																																																																																																																																																		return A2(
																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																			function (elcnarradorname) {
																																																																																																																																																																				return A2(
																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																					function (elcnarradorid) {
																																																																																																																																																																						return A2(
																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																							function (dompresidentename) {
																																																																																																																																																																								return A2(
																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																									function (dompresidenteid) {
																																																																																																																																																																										return A2(
																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																											function (domhaydiscursante) {
																																																																																																																																																																												return A2(
																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																													function (domdiscursante) {
																																																																																																																																																																														return A2(
																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																															function (domcancion3versiculo) {
																																																																																																																																																																																return A2(
																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																	function (domcancion3tema) {
																																																																																																																																																																																		return A2(
																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																			function (domcancion3name) {
																																																																																																																																																																																				return A2(
																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																					function (domcancion3id) {
																																																																																																																																																																																						return A2(
																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																							function (domcancion3) {
																																																																																																																																																																																								return A2(
																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																									function (domcancion2versiculo) {
																																																																																																																																																																																										return A2(
																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																											function (domcancion2tema) {
																																																																																																																																																																																												return A2(
																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																													function (domcancion2name) {
																																																																																																																																																																																														return A2(
																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																															function (domcancion2id) {
																																																																																																																																																																																																return A2(
																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																	function (domcancion2) {
																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																			function (domasambleamensage) {
																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																					function (domasamblea) {
																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																							function (cronometroname) {
																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																									function (cronometroid) {
																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																											function (creado) {
																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																													function (consejolector) {
																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																															function (cancion3versiculo) {
																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																	function (cancion3tema) {
																																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																			function (cancion3name) {
																																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																					function (cancion3id) {
																																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																							function (cancion3) {
																																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																									function (cancion2versiculo) {
																																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																											function (cancion2tema) {
																																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																													function (cancion2name) {
																																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																															function (cancion2id) {
																																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																	function (cancion2) {
																																																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																			function (cancion1versiculo) {
																																																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																					function (cancion1tema) {
																																																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																							function (cancion1name) {
																																																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																									function (cancion1id) {
																																																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																											function (cancion1) {
																																																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																													function (camaraname) {
																																																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																															function (camaraid) {
																																																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																																	function (aparatosname) {
																																																																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																																			function (aparatosid) {
																																																																																																																																																																																																																																																				return elm$json$Json$Decode$succeed(
																																																																																																																																																																																																																																																					{aparatosid: aparatosid, aparatosname: aparatosname, camaraid: camaraid, camaraname: camaraname, cancion1: cancion1, cancion1id: cancion1id, cancion1name: cancion1name, cancion1tema: cancion1tema, cancion1versiculo: cancion1versiculo, cancion2: cancion2, cancion2id: cancion2id, cancion2name: cancion2name, cancion2tema: cancion2tema, cancion2versiculo: cancion2versiculo, cancion3: cancion3, cancion3id: cancion3id, cancion3name: cancion3name, cancion3tema: cancion3tema, cancion3versiculo: cancion3versiculo, consejolector: consejolector, creado: creado, cronometroid: cronometroid, cronometroname: cronometroname, domasamblea: domasamblea, domasambleamensage: domasambleamensage, domcancion2: domcancion2, domcancion2id: domcancion2id, domcancion2name: domcancion2name, domcancion2tema: domcancion2tema, domcancion2versiculo: domcancion2versiculo, domcancion3: domcancion3, domcancion3id: domcancion3id, domcancion3name: domcancion3name, domcancion3tema: domcancion3tema, domcancion3versiculo: domcancion3versiculo, domdiscursante: domdiscursante, domhaydiscursante: domhaydiscursante, dompresidenteid: dompresidenteid, dompresidentename: dompresidentename, elcnarradorid: elcnarradorid, elcnarradorname: elcnarradorname, elcpersonajes: elcpersonajes, elcversiculos: elcversiculos, fechadomingo: fechadomingo, fechasabado: fechasabado, id: id, lecturaversiculos: lecturaversiculos, modificado: modificado, nvcanciano1: nvcanciano1, nvcanciano2: nvcanciano2, nvcestudiolectorid: nvcestudiolectorid, nvcestudiolectorname: nvcestudiolectorname, nvcestudiooradorid: nvcestudiooradorid, nvcestudiooradorname: nvcestudiooradorname, nvcmins1: nvcmins1, nvcmins2: nvcmins2, nvcorador1id: nvcorador1id, nvcorador1name: nvcorador1name, nvcorador2id: nvcorador2id, nvcorador2name: nvcorador2name, nvctitulo1: nvctitulo1, nvctitulo2: nvctitulo2, oracion1id: oracion1id, oracion1name: oracion1name, oracion2id: oracion2id, oracion2name: oracion2name, presentacionesmesid: presentacionesmesid, presentacionesmesname: presentacionesmesname, presidenteid: presidenteid, presidentename: presidentename, sabasamblea: sabasamblea, sabasambleamensage: sabasambleamensage, smm1ayuid: smm1ayuid, smm1ayuname: smm1ayuname, smm1esid: smm1esid, smm1esname: smm1esname, smm2ayuid: smm2ayuid, smm2ayuname: smm2ayuname, smm2esid: smm2esid, smm2esname: smm2esname, smm3ayuid: smm3ayuid, smm3ayuname: smm3ayuname, smm3esid: smm3esid, smm3esname: smm3esname, smm4ayuid: smm4ayuid, smm4ayuname: smm4ayuname, smm4esid: smm4esid, smm4esname: smm4esname, smmconsejo1: smmconsejo1, smmconsejo2: smmconsejo2, smmconsejo3: smmconsejo3, smmconsejo4: smmconsejo4, smmesvideo1: smmesvideo1, smmesvideo2: smmesvideo2, smmesvideo3: smmesvideo3, smmesvideo4: smmesvideo4, smmleccionmaestros: smmleccionmaestros, smmmin1: smmmin1, smmmin2: smmmin2, smmmin3: smmmin3, smmmin4: smmmin4, smmtema1: smmtema1, smmtema2: smmtema2, smmtema3: smmtema3, smmtema4: smmtema4, smmtieneayudante1: smmtieneayudante1, smmtieneayudante2: smmtieneayudante2, smmtieneayudante3: smmtieneayudante3, smmtieneayudante4: smmtieneayudante4, starthour: starthour, startminute: startminute, tb1oradorid: tb1oradorid, tb1oradorname: tb1oradorname, tb1titulo: tb1titulo, tblectorid: tblectorid, tblectorname: tblectorname, tbperlasoradorid: tbperlasoradorid, tbperlasoradorname: tbperlasoradorname});
																																																																																																																																																																																																																																																			},
																																																																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'aparatosid', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'aparatosname', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																															},
																																																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'camaraid', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																													},
																																																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'camaraname', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																											},
																																																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'cancion1', elm$json$Json$Decode$int));
																																																																																																																																																																																																																																									},
																																																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cancion1id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																							},
																																																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cancion1name', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																					},
																																																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cancion1tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																			},
																																																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'cancion1versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'cancion2', elm$json$Json$Decode$int));
																																																																																																																																																																																																																															},
																																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'cancion2id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																													},
																																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'cancion2name', elm$json$Json$Decode$string));
																																																																																																																																																																																																																											},
																																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'cancion2tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																																									},
																																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cancion2versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																																							},
																																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cancion3', elm$json$Json$Decode$int));
																																																																																																																																																																																																																					},
																																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cancion3id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																			},
																																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'cancion3name', elm$json$Json$Decode$string));
																																																																																																																																																																																																																	},
																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'cancion3tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																															},
																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'cancion3versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																													},
																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'consejolector', elm$json$Json$Decode$int));
																																																																																																																																																																																																											},
																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'creado', elm$json$Json$Decode$int));
																																																																																																																																																																																																									},
																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cronometroid', elm$json$Json$Decode$string));
																																																																																																																																																																																																							},
																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cronometroname', elm$json$Json$Decode$string));
																																																																																																																																																																																																					},
																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'domasamblea', elm$json$Json$Decode$bool));
																																																																																																																																																																																																			},
																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domasambleamensage', elm$json$Json$Decode$string));
																																																																																																																																																																																																	},
																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domcancion2', elm$json$Json$Decode$int));
																																																																																																																																																																																															},
																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domcancion2id', elm$json$Json$Decode$string));
																																																																																																																																																																																													},
																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'domcancion2name', elm$json$Json$Decode$string));
																																																																																																																																																																																											},
																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'domcancion2tema', elm$json$Json$Decode$string));
																																																																																																																																																																																									},
																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'domcancion2versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																							},
																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'domcancion3', elm$json$Json$Decode$int));
																																																																																																																																																																																					},
																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'domcancion3id', elm$json$Json$Decode$string));
																																																																																																																																																																																			},
																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domcancion3name', elm$json$Json$Decode$string));
																																																																																																																																																																																	},
																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domcancion3tema', elm$json$Json$Decode$string));
																																																																																																																																																																															},
																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domcancion3versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																													},
																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'domdiscursante', elm$json$Json$Decode$string));
																																																																																																																																																																											},
																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'domhaydiscursante', elm$json$Json$Decode$bool));
																																																																																																																																																																									},
																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'dompresidenteid', elm$json$Json$Decode$string));
																																																																																																																																																																							},
																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'dompresidentename', elm$json$Json$Decode$string));
																																																																																																																																																																					},
																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'elcnarradorid', elm$json$Json$Decode$string));
																																																																																																																																																																			},
																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'elcnarradorname', elm$json$Json$Decode$string));
																																																																																																																																																																	},
																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'elcpersonajes', elm$json$Json$Decode$string));
																																																																																																																																																															},
																																																																																																																																																															A2(elm$json$Json$Decode$field, 'elcversiculos', elm$json$Json$Decode$string));
																																																																																																																																																													},
																																																																																																																																																													A2(elm$json$Json$Decode$field, 'fechadomingo', elm$json$Json$Decode$int));
																																																																																																																																																											},
																																																																																																																																																											A2(elm$json$Json$Decode$field, 'fechasabado', elm$json$Json$Decode$int));
																																																																																																																																																									},
																																																																																																																																																									A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$string));
																																																																																																																																																							},
																																																																																																																																																							A2(elm$json$Json$Decode$field, 'lecturaversiculos', elm$json$Json$Decode$string));
																																																																																																																																																					},
																																																																																																																																																					A2(elm$json$Json$Decode$field, 'modificado', elm$json$Json$Decode$int));
																																																																																																																																																			},
																																																																																																																																																			A2(elm$json$Json$Decode$field, 'nvcanciano1', elm$json$Json$Decode$bool));
																																																																																																																																																	},
																																																																																																																																																	A2(elm$json$Json$Decode$field, 'nvcanciano2', elm$json$Json$Decode$bool));
																																																																																																																																															},
																																																																																																																																															A2(elm$json$Json$Decode$field, 'nvcestudiolectorid', elm$json$Json$Decode$string));
																																																																																																																																													},
																																																																																																																																													A2(elm$json$Json$Decode$field, 'nvcestudiolectorname', elm$json$Json$Decode$string));
																																																																																																																																											},
																																																																																																																																											A2(elm$json$Json$Decode$field, 'nvcestudiooradorid', elm$json$Json$Decode$string));
																																																																																																																																									},
																																																																																																																																									A2(elm$json$Json$Decode$field, 'nvcestudiooradorname', elm$json$Json$Decode$string));
																																																																																																																																							},
																																																																																																																																							A2(elm$json$Json$Decode$field, 'nvcmins1', elm$json$Json$Decode$int));
																																																																																																																																					},
																																																																																																																																					A2(elm$json$Json$Decode$field, 'nvcmins2', elm$json$Json$Decode$int));
																																																																																																																																			},
																																																																																																																																			A2(elm$json$Json$Decode$field, 'nvcorador1id', elm$json$Json$Decode$string));
																																																																																																																																	},
																																																																																																																																	A2(elm$json$Json$Decode$field, 'nvcorador1name', elm$json$Json$Decode$string));
																																																																																																																															},
																																																																																																																															A2(elm$json$Json$Decode$field, 'nvcorador2id', elm$json$Json$Decode$string));
																																																																																																																													},
																																																																																																																													A2(elm$json$Json$Decode$field, 'nvcorador2name', elm$json$Json$Decode$string));
																																																																																																																											},
																																																																																																																											A2(elm$json$Json$Decode$field, 'nvctitulo1', elm$json$Json$Decode$string));
																																																																																																																									},
																																																																																																																									A2(elm$json$Json$Decode$field, 'nvctitulo2', elm$json$Json$Decode$string));
																																																																																																																							},
																																																																																																																							A2(elm$json$Json$Decode$field, 'oracion1id', elm$json$Json$Decode$string));
																																																																																																																					},
																																																																																																																					A2(elm$json$Json$Decode$field, 'oracion1name', elm$json$Json$Decode$string));
																																																																																																																			},
																																																																																																																			A2(elm$json$Json$Decode$field, 'oracion2id', elm$json$Json$Decode$string));
																																																																																																																	},
																																																																																																																	A2(elm$json$Json$Decode$field, 'oracion2name', elm$json$Json$Decode$string));
																																																																																																															},
																																																																																																															A2(elm$json$Json$Decode$field, 'presentacionesmesid', elm$json$Json$Decode$string));
																																																																																																													},
																																																																																																													A2(elm$json$Json$Decode$field, 'presentacionesmesname', elm$json$Json$Decode$string));
																																																																																																											},
																																																																																																											A2(elm$json$Json$Decode$field, 'presidenteid', elm$json$Json$Decode$string));
																																																																																																									},
																																																																																																									A2(elm$json$Json$Decode$field, 'presidentename', elm$json$Json$Decode$string));
																																																																																																							},
																																																																																																							A2(elm$json$Json$Decode$field, 'sabasamblea', elm$json$Json$Decode$bool));
																																																																																																					},
																																																																																																					A2(elm$json$Json$Decode$field, 'sabasambleamensage', elm$json$Json$Decode$string));
																																																																																																			},
																																																																																																			A2(elm$json$Json$Decode$field, 'smm1ayuid', elm$json$Json$Decode$string));
																																																																																																	},
																																																																																																	A2(elm$json$Json$Decode$field, 'smm1ayuname', elm$json$Json$Decode$string));
																																																																																															},
																																																																																															A2(elm$json$Json$Decode$field, 'smm1esid', elm$json$Json$Decode$string));
																																																																																													},
																																																																																													A2(elm$json$Json$Decode$field, 'smm1esname', elm$json$Json$Decode$string));
																																																																																											},
																																																																																											A2(elm$json$Json$Decode$field, 'smm2ayuid', elm$json$Json$Decode$string));
																																																																																									},
																																																																																									A2(elm$json$Json$Decode$field, 'smm2ayuname', elm$json$Json$Decode$string));
																																																																																							},
																																																																																							A2(elm$json$Json$Decode$field, 'smm2esid', elm$json$Json$Decode$string));
																																																																																					},
																																																																																					A2(elm$json$Json$Decode$field, 'smm2esname', elm$json$Json$Decode$string));
																																																																																			},
																																																																																			A2(elm$json$Json$Decode$field, 'smm3ayuid', elm$json$Json$Decode$string));
																																																																																	},
																																																																																	A2(elm$json$Json$Decode$field, 'smm3ayuname', elm$json$Json$Decode$string));
																																																																															},
																																																																															A2(elm$json$Json$Decode$field, 'smm3esid', elm$json$Json$Decode$string));
																																																																													},
																																																																													A2(elm$json$Json$Decode$field, 'smm3esname', elm$json$Json$Decode$string));
																																																																											},
																																																																											A2(elm$json$Json$Decode$field, 'smm4ayuid', elm$json$Json$Decode$string));
																																																																									},
																																																																									A2(elm$json$Json$Decode$field, 'smm4ayuname', elm$json$Json$Decode$string));
																																																																							},
																																																																							A2(elm$json$Json$Decode$field, 'smm4esid', elm$json$Json$Decode$string));
																																																																					},
																																																																					A2(elm$json$Json$Decode$field, 'smm4esname', elm$json$Json$Decode$string));
																																																																			},
																																																																			A2(elm$json$Json$Decode$field, 'smmconsejo1', elm$json$Json$Decode$int));
																																																																	},
																																																																	A2(elm$json$Json$Decode$field, 'smmconsejo2', elm$json$Json$Decode$int));
																																																															},
																																																															A2(elm$json$Json$Decode$field, 'smmconsejo3', elm$json$Json$Decode$int));
																																																													},
																																																													A2(elm$json$Json$Decode$field, 'smmconsejo4', elm$json$Json$Decode$int));
																																																											},
																																																											A2(elm$json$Json$Decode$field, 'smmesvideo1', elm$json$Json$Decode$bool));
																																																									},
																																																									A2(elm$json$Json$Decode$field, 'smmesvideo2', elm$json$Json$Decode$bool));
																																																							},
																																																							A2(elm$json$Json$Decode$field, 'smmesvideo3', elm$json$Json$Decode$bool));
																																																					},
																																																					A2(elm$json$Json$Decode$field, 'smmesvideo4', elm$json$Json$Decode$bool));
																																																			},
																																																			A2(elm$json$Json$Decode$field, 'smmleccionmaestros', elm$json$Json$Decode$bool));
																																																	},
																																																	A2(elm$json$Json$Decode$field, 'smmmin1', elm$json$Json$Decode$int));
																																															},
																																															A2(elm$json$Json$Decode$field, 'smmmin2', elm$json$Json$Decode$int));
																																													},
																																													A2(elm$json$Json$Decode$field, 'smmmin3', elm$json$Json$Decode$int));
																																											},
																																											A2(elm$json$Json$Decode$field, 'smmmin4', elm$json$Json$Decode$int));
																																									},
																																									A2(elm$json$Json$Decode$field, 'smmtema1', elm$json$Json$Decode$string));
																																							},
																																							A2(elm$json$Json$Decode$field, 'smmtema2', elm$json$Json$Decode$string));
																																					},
																																					A2(elm$json$Json$Decode$field, 'smmtema3', elm$json$Json$Decode$string));
																																			},
																																			A2(elm$json$Json$Decode$field, 'smmtema4', elm$json$Json$Decode$string));
																																	},
																																	A2(elm$json$Json$Decode$field, 'smmtieneayudante1', elm$json$Json$Decode$bool));
																															},
																															A2(elm$json$Json$Decode$field, 'smmtieneayudante2', elm$json$Json$Decode$bool));
																													},
																													A2(elm$json$Json$Decode$field, 'smmtieneayudante3', elm$json$Json$Decode$bool));
																											},
																											A2(elm$json$Json$Decode$field, 'smmtieneayudante4', elm$json$Json$Decode$bool));
																									},
																									A2(elm$json$Json$Decode$field, 'starthour', elm$json$Json$Decode$int));
																							},
																							A2(elm$json$Json$Decode$field, 'startminute', elm$json$Json$Decode$int));
																					},
																					A2(elm$json$Json$Decode$field, 'tb1oradorid', elm$json$Json$Decode$string));
																			},
																			A2(elm$json$Json$Decode$field, 'tb1oradorname', elm$json$Json$Decode$string));
																	},
																	A2(elm$json$Json$Decode$field, 'tb1titulo', elm$json$Json$Decode$string));
															},
															A2(elm$json$Json$Decode$field, 'tblectorid', elm$json$Json$Decode$string));
													},
													A2(elm$json$Json$Decode$field, 'tblectorname', elm$json$Json$Decode$string));
											},
											A2(elm$json$Json$Decode$field, 'tbperlasoradorid', elm$json$Json$Decode$string));
									},
									A2(elm$json$Json$Decode$field, 'tbperlasoradorname', elm$json$Json$Decode$string)))));
				},
				A2(
					elm$json$Json$Decode$field,
					'semanasllenados',
					elm$json$Json$Decode$list(
						A2(
							elm$json$Json$Decode$andThen,
							function (tbperlasoradorname) {
								return A2(
									elm$json$Json$Decode$andThen,
									function (tbperlasoradorid) {
										return A2(
											elm$json$Json$Decode$andThen,
											function (tblectorname) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (tblectorid) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (tb1titulo) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (tb1oradorname) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (tb1oradorid) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (startminute) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (starthour) {
																								return A2(
																									elm$json$Json$Decode$andThen,
																									function (smmtieneayudante4) {
																										return A2(
																											elm$json$Json$Decode$andThen,
																											function (smmtieneayudante3) {
																												return A2(
																													elm$json$Json$Decode$andThen,
																													function (smmtieneayudante2) {
																														return A2(
																															elm$json$Json$Decode$andThen,
																															function (smmtieneayudante1) {
																																return A2(
																																	elm$json$Json$Decode$andThen,
																																	function (smmtema4) {
																																		return A2(
																																			elm$json$Json$Decode$andThen,
																																			function (smmtema3) {
																																				return A2(
																																					elm$json$Json$Decode$andThen,
																																					function (smmtema2) {
																																						return A2(
																																							elm$json$Json$Decode$andThen,
																																							function (smmtema1) {
																																								return A2(
																																									elm$json$Json$Decode$andThen,
																																									function (smmmin4) {
																																										return A2(
																																											elm$json$Json$Decode$andThen,
																																											function (smmmin3) {
																																												return A2(
																																													elm$json$Json$Decode$andThen,
																																													function (smmmin2) {
																																														return A2(
																																															elm$json$Json$Decode$andThen,
																																															function (smmmin1) {
																																																return A2(
																																																	elm$json$Json$Decode$andThen,
																																																	function (smmleccionmaestros) {
																																																		return A2(
																																																			elm$json$Json$Decode$andThen,
																																																			function (smmesvideo4) {
																																																				return A2(
																																																					elm$json$Json$Decode$andThen,
																																																					function (smmesvideo3) {
																																																						return A2(
																																																							elm$json$Json$Decode$andThen,
																																																							function (smmesvideo2) {
																																																								return A2(
																																																									elm$json$Json$Decode$andThen,
																																																									function (smmesvideo1) {
																																																										return A2(
																																																											elm$json$Json$Decode$andThen,
																																																											function (smmconsejo4) {
																																																												return A2(
																																																													elm$json$Json$Decode$andThen,
																																																													function (smmconsejo3) {
																																																														return A2(
																																																															elm$json$Json$Decode$andThen,
																																																															function (smmconsejo2) {
																																																																return A2(
																																																																	elm$json$Json$Decode$andThen,
																																																																	function (smmconsejo1) {
																																																																		return A2(
																																																																			elm$json$Json$Decode$andThen,
																																																																			function (smm4esname) {
																																																																				return A2(
																																																																					elm$json$Json$Decode$andThen,
																																																																					function (smm4esid) {
																																																																						return A2(
																																																																							elm$json$Json$Decode$andThen,
																																																																							function (smm4ayuname) {
																																																																								return A2(
																																																																									elm$json$Json$Decode$andThen,
																																																																									function (smm4ayuid) {
																																																																										return A2(
																																																																											elm$json$Json$Decode$andThen,
																																																																											function (smm3esname) {
																																																																												return A2(
																																																																													elm$json$Json$Decode$andThen,
																																																																													function (smm3esid) {
																																																																														return A2(
																																																																															elm$json$Json$Decode$andThen,
																																																																															function (smm3ayuname) {
																																																																																return A2(
																																																																																	elm$json$Json$Decode$andThen,
																																																																																	function (smm3ayuid) {
																																																																																		return A2(
																																																																																			elm$json$Json$Decode$andThen,
																																																																																			function (smm2esname) {
																																																																																				return A2(
																																																																																					elm$json$Json$Decode$andThen,
																																																																																					function (smm2esid) {
																																																																																						return A2(
																																																																																							elm$json$Json$Decode$andThen,
																																																																																							function (smm2ayuname) {
																																																																																								return A2(
																																																																																									elm$json$Json$Decode$andThen,
																																																																																									function (smm2ayuid) {
																																																																																										return A2(
																																																																																											elm$json$Json$Decode$andThen,
																																																																																											function (smm1esname) {
																																																																																												return A2(
																																																																																													elm$json$Json$Decode$andThen,
																																																																																													function (smm1esid) {
																																																																																														return A2(
																																																																																															elm$json$Json$Decode$andThen,
																																																																																															function (smm1ayuname) {
																																																																																																return A2(
																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																	function (smm1ayuid) {
																																																																																																		return A2(
																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																			function (sabasambleamensage) {
																																																																																																				return A2(
																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																					function (sabasamblea) {
																																																																																																						return A2(
																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																							function (presidentename) {
																																																																																																								return A2(
																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																									function (presidenteid) {
																																																																																																										return A2(
																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																											function (presentacionesmesname) {
																																																																																																												return A2(
																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																													function (presentacionesmesid) {
																																																																																																														return A2(
																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																															function (oracion2name) {
																																																																																																																return A2(
																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																	function (oracion2id) {
																																																																																																																		return A2(
																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																			function (oracion1name) {
																																																																																																																				return A2(
																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																					function (oracion1id) {
																																																																																																																						return A2(
																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																							function (nvctitulo2) {
																																																																																																																								return A2(
																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																									function (nvctitulo1) {
																																																																																																																										return A2(
																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																											function (nvcorador2name) {
																																																																																																																												return A2(
																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																													function (nvcorador2id) {
																																																																																																																														return A2(
																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																															function (nvcorador1name) {
																																																																																																																																return A2(
																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																	function (nvcorador1id) {
																																																																																																																																		return A2(
																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																			function (nvcmins2) {
																																																																																																																																				return A2(
																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																					function (nvcmins1) {
																																																																																																																																						return A2(
																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																							function (nvcestudiooradorname) {
																																																																																																																																								return A2(
																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																									function (nvcestudiooradorid) {
																																																																																																																																										return A2(
																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																											function (nvcestudiolectorname) {
																																																																																																																																												return A2(
																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																													function (nvcestudiolectorid) {
																																																																																																																																														return A2(
																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																															function (nvcanciano2) {
																																																																																																																																																return A2(
																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																	function (nvcanciano1) {
																																																																																																																																																		return A2(
																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																			function (modificado) {
																																																																																																																																																				return A2(
																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																					function (lecturaversiculos) {
																																																																																																																																																						return A2(
																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																							function (id) {
																																																																																																																																																								return A2(
																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																									function (fechasabado) {
																																																																																																																																																										return A2(
																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																											function (fechadomingo) {
																																																																																																																																																												return A2(
																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																													function (elcversiculos) {
																																																																																																																																																														return A2(
																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																															function (elcpersonajes) {
																																																																																																																																																																return A2(
																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																	function (elcnarradorname) {
																																																																																																																																																																		return A2(
																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																			function (elcnarradorid) {
																																																																																																																																																																				return A2(
																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																					function (dompresidentename) {
																																																																																																																																																																						return A2(
																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																							function (dompresidenteid) {
																																																																																																																																																																								return A2(
																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																									function (domhaydiscursante) {
																																																																																																																																																																										return A2(
																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																											function (domdiscursante) {
																																																																																																																																																																												return A2(
																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																													function (domcancion3versiculo) {
																																																																																																																																																																														return A2(
																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																															function (domcancion3tema) {
																																																																																																																																																																																return A2(
																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																	function (domcancion3name) {
																																																																																																																																																																																		return A2(
																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																			function (domcancion3id) {
																																																																																																																																																																																				return A2(
																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																					function (domcancion3) {
																																																																																																																																																																																						return A2(
																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																							function (domcancion2versiculo) {
																																																																																																																																																																																								return A2(
																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																									function (domcancion2tema) {
																																																																																																																																																																																										return A2(
																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																											function (domcancion2name) {
																																																																																																																																																																																												return A2(
																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																													function (domcancion2id) {
																																																																																																																																																																																														return A2(
																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																															function (domcancion2) {
																																																																																																																																																																																																return A2(
																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																	function (domasambleamensage) {
																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																			function (domasamblea) {
																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																					function (cronometroname) {
																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																							function (cronometroid) {
																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																									function (creado) {
																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																											function (consejolector) {
																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																													function (cancion3versiculo) {
																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																															function (cancion3tema) {
																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																	function (cancion3name) {
																																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																			function (cancion3id) {
																																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																					function (cancion3) {
																																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																							function (cancion2versiculo) {
																																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																									function (cancion2tema) {
																																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																											function (cancion2name) {
																																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																													function (cancion2id) {
																																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																															function (cancion2) {
																																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																	function (cancion1versiculo) {
																																																																																																																																																																																																																																		return A2(
																																																																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																			function (cancion1tema) {
																																																																																																																																																																																																																																				return A2(
																																																																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																					function (cancion1name) {
																																																																																																																																																																																																																																						return A2(
																																																																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																							function (cancion1id) {
																																																																																																																																																																																																																																								return A2(
																																																																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																									function (cancion1) {
																																																																																																																																																																																																																																										return A2(
																																																																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																											function (camaraname) {
																																																																																																																																																																																																																																												return A2(
																																																																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																													function (camaraid) {
																																																																																																																																																																																																																																														return A2(
																																																																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																															function (aparatosname) {
																																																																																																																																																																																																																																																return A2(
																																																																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																																																																	function (aparatosid) {
																																																																																																																																																																																																																																																		return elm$json$Json$Decode$succeed(
																																																																																																																																																																																																																																																			{aparatosid: aparatosid, aparatosname: aparatosname, camaraid: camaraid, camaraname: camaraname, cancion1: cancion1, cancion1id: cancion1id, cancion1name: cancion1name, cancion1tema: cancion1tema, cancion1versiculo: cancion1versiculo, cancion2: cancion2, cancion2id: cancion2id, cancion2name: cancion2name, cancion2tema: cancion2tema, cancion2versiculo: cancion2versiculo, cancion3: cancion3, cancion3id: cancion3id, cancion3name: cancion3name, cancion3tema: cancion3tema, cancion3versiculo: cancion3versiculo, consejolector: consejolector, creado: creado, cronometroid: cronometroid, cronometroname: cronometroname, domasamblea: domasamblea, domasambleamensage: domasambleamensage, domcancion2: domcancion2, domcancion2id: domcancion2id, domcancion2name: domcancion2name, domcancion2tema: domcancion2tema, domcancion2versiculo: domcancion2versiculo, domcancion3: domcancion3, domcancion3id: domcancion3id, domcancion3name: domcancion3name, domcancion3tema: domcancion3tema, domcancion3versiculo: domcancion3versiculo, domdiscursante: domdiscursante, domhaydiscursante: domhaydiscursante, dompresidenteid: dompresidenteid, dompresidentename: dompresidentename, elcnarradorid: elcnarradorid, elcnarradorname: elcnarradorname, elcpersonajes: elcpersonajes, elcversiculos: elcversiculos, fechadomingo: fechadomingo, fechasabado: fechasabado, id: id, lecturaversiculos: lecturaversiculos, modificado: modificado, nvcanciano1: nvcanciano1, nvcanciano2: nvcanciano2, nvcestudiolectorid: nvcestudiolectorid, nvcestudiolectorname: nvcestudiolectorname, nvcestudiooradorid: nvcestudiooradorid, nvcestudiooradorname: nvcestudiooradorname, nvcmins1: nvcmins1, nvcmins2: nvcmins2, nvcorador1id: nvcorador1id, nvcorador1name: nvcorador1name, nvcorador2id: nvcorador2id, nvcorador2name: nvcorador2name, nvctitulo1: nvctitulo1, nvctitulo2: nvctitulo2, oracion1id: oracion1id, oracion1name: oracion1name, oracion2id: oracion2id, oracion2name: oracion2name, presentacionesmesid: presentacionesmesid, presentacionesmesname: presentacionesmesname, presidenteid: presidenteid, presidentename: presidentename, sabasamblea: sabasamblea, sabasambleamensage: sabasambleamensage, smm1ayuid: smm1ayuid, smm1ayuname: smm1ayuname, smm1esid: smm1esid, smm1esname: smm1esname, smm2ayuid: smm2ayuid, smm2ayuname: smm2ayuname, smm2esid: smm2esid, smm2esname: smm2esname, smm3ayuid: smm3ayuid, smm3ayuname: smm3ayuname, smm3esid: smm3esid, smm3esname: smm3esname, smm4ayuid: smm4ayuid, smm4ayuname: smm4ayuname, smm4esid: smm4esid, smm4esname: smm4esname, smmconsejo1: smmconsejo1, smmconsejo2: smmconsejo2, smmconsejo3: smmconsejo3, smmconsejo4: smmconsejo4, smmesvideo1: smmesvideo1, smmesvideo2: smmesvideo2, smmesvideo3: smmesvideo3, smmesvideo4: smmesvideo4, smmleccionmaestros: smmleccionmaestros, smmmin1: smmmin1, smmmin2: smmmin2, smmmin3: smmmin3, smmmin4: smmmin4, smmtema1: smmtema1, smmtema2: smmtema2, smmtema3: smmtema3, smmtema4: smmtema4, smmtieneayudante1: smmtieneayudante1, smmtieneayudante2: smmtieneayudante2, smmtieneayudante3: smmtieneayudante3, smmtieneayudante4: smmtieneayudante4, starthour: starthour, startminute: startminute, tb1oradorid: tb1oradorid, tb1oradorname: tb1oradorname, tb1titulo: tb1titulo, tblectorid: tblectorid, tblectorname: tblectorname, tbperlasoradorid: tbperlasoradorid, tbperlasoradorname: tbperlasoradorname});
																																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'aparatosid', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																															},
																																																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'aparatosname', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																													},
																																																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'camaraid', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																											},
																																																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'camaraname', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																									},
																																																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cancion1', elm$json$Json$Decode$int));
																																																																																																																																																																																																																																							},
																																																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cancion1id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																					},
																																																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cancion1name', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																			},
																																																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'cancion1tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'cancion1versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																																															},
																																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'cancion2', elm$json$Json$Decode$int));
																																																																																																																																																																																																																													},
																																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'cancion2id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																											},
																																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'cancion2name', elm$json$Json$Decode$string));
																																																																																																																																																																																																																									},
																																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cancion2tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																																							},
																																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cancion2versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																																					},
																																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cancion3', elm$json$Json$Decode$int));
																																																																																																																																																																																																																			},
																																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'cancion3id', elm$json$Json$Decode$string));
																																																																																																																																																																																																																	},
																																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'cancion3name', elm$json$Json$Decode$string));
																																																																																																																																																																																																															},
																																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'cancion3tema', elm$json$Json$Decode$string));
																																																																																																																																																																																																													},
																																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'cancion3versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																																											},
																																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'consejolector', elm$json$Json$Decode$int));
																																																																																																																																																																																																									},
																																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'creado', elm$json$Json$Decode$int));
																																																																																																																																																																																																							},
																																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'cronometroid', elm$json$Json$Decode$string));
																																																																																																																																																																																																					},
																																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cronometroname', elm$json$Json$Decode$string));
																																																																																																																																																																																																			},
																																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domasamblea', elm$json$Json$Decode$bool));
																																																																																																																																																																																																	},
																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domasambleamensage', elm$json$Json$Decode$string));
																																																																																																																																																																																															},
																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domcancion2', elm$json$Json$Decode$int));
																																																																																																																																																																																													},
																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'domcancion2id', elm$json$Json$Decode$string));
																																																																																																																																																																																											},
																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'domcancion2name', elm$json$Json$Decode$string));
																																																																																																																																																																																									},
																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'domcancion2tema', elm$json$Json$Decode$string));
																																																																																																																																																																																							},
																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'domcancion2versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																																					},
																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'domcancion3', elm$json$Json$Decode$int));
																																																																																																																																																																																			},
																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domcancion3id', elm$json$Json$Decode$string));
																																																																																																																																																																																	},
																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domcancion3name', elm$json$Json$Decode$string));
																																																																																																																																																																															},
																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domcancion3tema', elm$json$Json$Decode$string));
																																																																																																																																																																													},
																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'domcancion3versiculo', elm$json$Json$Decode$string));
																																																																																																																																																																											},
																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'domdiscursante', elm$json$Json$Decode$string));
																																																																																																																																																																									},
																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'domhaydiscursante', elm$json$Json$Decode$bool));
																																																																																																																																																																							},
																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'dompresidenteid', elm$json$Json$Decode$string));
																																																																																																																																																																					},
																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'dompresidentename', elm$json$Json$Decode$string));
																																																																																																																																																																			},
																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'elcnarradorid', elm$json$Json$Decode$string));
																																																																																																																																																																	},
																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'elcnarradorname', elm$json$Json$Decode$string));
																																																																																																																																																															},
																																																																																																																																																															A2(elm$json$Json$Decode$field, 'elcpersonajes', elm$json$Json$Decode$string));
																																																																																																																																																													},
																																																																																																																																																													A2(elm$json$Json$Decode$field, 'elcversiculos', elm$json$Json$Decode$string));
																																																																																																																																																											},
																																																																																																																																																											A2(elm$json$Json$Decode$field, 'fechadomingo', elm$json$Json$Decode$int));
																																																																																																																																																									},
																																																																																																																																																									A2(elm$json$Json$Decode$field, 'fechasabado', elm$json$Json$Decode$int));
																																																																																																																																																							},
																																																																																																																																																							A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$string));
																																																																																																																																																					},
																																																																																																																																																					A2(elm$json$Json$Decode$field, 'lecturaversiculos', elm$json$Json$Decode$string));
																																																																																																																																																			},
																																																																																																																																																			A2(elm$json$Json$Decode$field, 'modificado', elm$json$Json$Decode$int));
																																																																																																																																																	},
																																																																																																																																																	A2(elm$json$Json$Decode$field, 'nvcanciano1', elm$json$Json$Decode$bool));
																																																																																																																																															},
																																																																																																																																															A2(elm$json$Json$Decode$field, 'nvcanciano2', elm$json$Json$Decode$bool));
																																																																																																																																													},
																																																																																																																																													A2(elm$json$Json$Decode$field, 'nvcestudiolectorid', elm$json$Json$Decode$string));
																																																																																																																																											},
																																																																																																																																											A2(elm$json$Json$Decode$field, 'nvcestudiolectorname', elm$json$Json$Decode$string));
																																																																																																																																									},
																																																																																																																																									A2(elm$json$Json$Decode$field, 'nvcestudiooradorid', elm$json$Json$Decode$string));
																																																																																																																																							},
																																																																																																																																							A2(elm$json$Json$Decode$field, 'nvcestudiooradorname', elm$json$Json$Decode$string));
																																																																																																																																					},
																																																																																																																																					A2(elm$json$Json$Decode$field, 'nvcmins1', elm$json$Json$Decode$int));
																																																																																																																																			},
																																																																																																																																			A2(elm$json$Json$Decode$field, 'nvcmins2', elm$json$Json$Decode$int));
																																																																																																																																	},
																																																																																																																																	A2(elm$json$Json$Decode$field, 'nvcorador1id', elm$json$Json$Decode$string));
																																																																																																																															},
																																																																																																																															A2(elm$json$Json$Decode$field, 'nvcorador1name', elm$json$Json$Decode$string));
																																																																																																																													},
																																																																																																																													A2(elm$json$Json$Decode$field, 'nvcorador2id', elm$json$Json$Decode$string));
																																																																																																																											},
																																																																																																																											A2(elm$json$Json$Decode$field, 'nvcorador2name', elm$json$Json$Decode$string));
																																																																																																																									},
																																																																																																																									A2(elm$json$Json$Decode$field, 'nvctitulo1', elm$json$Json$Decode$string));
																																																																																																																							},
																																																																																																																							A2(elm$json$Json$Decode$field, 'nvctitulo2', elm$json$Json$Decode$string));
																																																																																																																					},
																																																																																																																					A2(elm$json$Json$Decode$field, 'oracion1id', elm$json$Json$Decode$string));
																																																																																																																			},
																																																																																																																			A2(elm$json$Json$Decode$field, 'oracion1name', elm$json$Json$Decode$string));
																																																																																																																	},
																																																																																																																	A2(elm$json$Json$Decode$field, 'oracion2id', elm$json$Json$Decode$string));
																																																																																																															},
																																																																																																															A2(elm$json$Json$Decode$field, 'oracion2name', elm$json$Json$Decode$string));
																																																																																																													},
																																																																																																													A2(elm$json$Json$Decode$field, 'presentacionesmesid', elm$json$Json$Decode$string));
																																																																																																											},
																																																																																																											A2(elm$json$Json$Decode$field, 'presentacionesmesname', elm$json$Json$Decode$string));
																																																																																																									},
																																																																																																									A2(elm$json$Json$Decode$field, 'presidenteid', elm$json$Json$Decode$string));
																																																																																																							},
																																																																																																							A2(elm$json$Json$Decode$field, 'presidentename', elm$json$Json$Decode$string));
																																																																																																					},
																																																																																																					A2(elm$json$Json$Decode$field, 'sabasamblea', elm$json$Json$Decode$bool));
																																																																																																			},
																																																																																																			A2(elm$json$Json$Decode$field, 'sabasambleamensage', elm$json$Json$Decode$string));
																																																																																																	},
																																																																																																	A2(elm$json$Json$Decode$field, 'smm1ayuid', elm$json$Json$Decode$string));
																																																																																															},
																																																																																															A2(elm$json$Json$Decode$field, 'smm1ayuname', elm$json$Json$Decode$string));
																																																																																													},
																																																																																													A2(elm$json$Json$Decode$field, 'smm1esid', elm$json$Json$Decode$string));
																																																																																											},
																																																																																											A2(elm$json$Json$Decode$field, 'smm1esname', elm$json$Json$Decode$string));
																																																																																									},
																																																																																									A2(elm$json$Json$Decode$field, 'smm2ayuid', elm$json$Json$Decode$string));
																																																																																							},
																																																																																							A2(elm$json$Json$Decode$field, 'smm2ayuname', elm$json$Json$Decode$string));
																																																																																					},
																																																																																					A2(elm$json$Json$Decode$field, 'smm2esid', elm$json$Json$Decode$string));
																																																																																			},
																																																																																			A2(elm$json$Json$Decode$field, 'smm2esname', elm$json$Json$Decode$string));
																																																																																	},
																																																																																	A2(elm$json$Json$Decode$field, 'smm3ayuid', elm$json$Json$Decode$string));
																																																																															},
																																																																															A2(elm$json$Json$Decode$field, 'smm3ayuname', elm$json$Json$Decode$string));
																																																																													},
																																																																													A2(elm$json$Json$Decode$field, 'smm3esid', elm$json$Json$Decode$string));
																																																																											},
																																																																											A2(elm$json$Json$Decode$field, 'smm3esname', elm$json$Json$Decode$string));
																																																																									},
																																																																									A2(elm$json$Json$Decode$field, 'smm4ayuid', elm$json$Json$Decode$string));
																																																																							},
																																																																							A2(elm$json$Json$Decode$field, 'smm4ayuname', elm$json$Json$Decode$string));
																																																																					},
																																																																					A2(elm$json$Json$Decode$field, 'smm4esid', elm$json$Json$Decode$string));
																																																																			},
																																																																			A2(elm$json$Json$Decode$field, 'smm4esname', elm$json$Json$Decode$string));
																																																																	},
																																																																	A2(elm$json$Json$Decode$field, 'smmconsejo1', elm$json$Json$Decode$int));
																																																															},
																																																															A2(elm$json$Json$Decode$field, 'smmconsejo2', elm$json$Json$Decode$int));
																																																													},
																																																													A2(elm$json$Json$Decode$field, 'smmconsejo3', elm$json$Json$Decode$int));
																																																											},
																																																											A2(elm$json$Json$Decode$field, 'smmconsejo4', elm$json$Json$Decode$int));
																																																									},
																																																									A2(elm$json$Json$Decode$field, 'smmesvideo1', elm$json$Json$Decode$bool));
																																																							},
																																																							A2(elm$json$Json$Decode$field, 'smmesvideo2', elm$json$Json$Decode$bool));
																																																					},
																																																					A2(elm$json$Json$Decode$field, 'smmesvideo3', elm$json$Json$Decode$bool));
																																																			},
																																																			A2(elm$json$Json$Decode$field, 'smmesvideo4', elm$json$Json$Decode$bool));
																																																	},
																																																	A2(elm$json$Json$Decode$field, 'smmleccionmaestros', elm$json$Json$Decode$bool));
																																															},
																																															A2(elm$json$Json$Decode$field, 'smmmin1', elm$json$Json$Decode$int));
																																													},
																																													A2(elm$json$Json$Decode$field, 'smmmin2', elm$json$Json$Decode$int));
																																											},
																																											A2(elm$json$Json$Decode$field, 'smmmin3', elm$json$Json$Decode$int));
																																									},
																																									A2(elm$json$Json$Decode$field, 'smmmin4', elm$json$Json$Decode$int));
																																							},
																																							A2(elm$json$Json$Decode$field, 'smmtema1', elm$json$Json$Decode$string));
																																					},
																																					A2(elm$json$Json$Decode$field, 'smmtema2', elm$json$Json$Decode$string));
																																			},
																																			A2(elm$json$Json$Decode$field, 'smmtema3', elm$json$Json$Decode$string));
																																	},
																																	A2(elm$json$Json$Decode$field, 'smmtema4', elm$json$Json$Decode$string));
																															},
																															A2(elm$json$Json$Decode$field, 'smmtieneayudante1', elm$json$Json$Decode$bool));
																													},
																													A2(elm$json$Json$Decode$field, 'smmtieneayudante2', elm$json$Json$Decode$bool));
																											},
																											A2(elm$json$Json$Decode$field, 'smmtieneayudante3', elm$json$Json$Decode$bool));
																									},
																									A2(elm$json$Json$Decode$field, 'smmtieneayudante4', elm$json$Json$Decode$bool));
																							},
																							A2(elm$json$Json$Decode$field, 'starthour', elm$json$Json$Decode$int));
																					},
																					A2(elm$json$Json$Decode$field, 'startminute', elm$json$Json$Decode$int));
																			},
																			A2(elm$json$Json$Decode$field, 'tb1oradorid', elm$json$Json$Decode$string));
																	},
																	A2(elm$json$Json$Decode$field, 'tb1oradorname', elm$json$Json$Decode$string));
															},
															A2(elm$json$Json$Decode$field, 'tb1titulo', elm$json$Json$Decode$string));
													},
													A2(elm$json$Json$Decode$field, 'tblectorid', elm$json$Json$Decode$string));
											},
											A2(elm$json$Json$Decode$field, 'tblectorname', elm$json$Json$Decode$string));
									},
									A2(elm$json$Json$Decode$field, 'tbperlasoradorid', elm$json$Json$Decode$string));
							},
							A2(elm$json$Json$Decode$field, 'tbperlasoradorname', elm$json$Json$Decode$string)))));
		},
		A2(
			elm$json$Json$Decode$field,
			'semanastemplates',
			elm$json$Json$Decode$list(
				A2(
					elm$json$Json$Decode$andThen,
					function (temacancion3) {
						return A2(
							elm$json$Json$Decode$andThen,
							function (temacancion2) {
								return A2(
									elm$json$Json$Decode$andThen,
									function (temacancion1) {
										return A2(
											elm$json$Json$Decode$andThen,
											function (tbperlasorador) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (tblector) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (tb3h1) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (tb2h1) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (tb1titulo) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (tb1orador) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (tb1h1) {
																								return A2(
																									elm$json$Json$Decode$andThen,
																									function (smmtieneayudante4) {
																										return A2(
																											elm$json$Json$Decode$andThen,
																											function (smmtieneayudante3) {
																												return A2(
																													elm$json$Json$Decode$andThen,
																													function (smmtieneayudante2) {
																														return A2(
																															elm$json$Json$Decode$andThen,
																															function (smmtieneayudante1) {
																																return A2(
																																	elm$json$Json$Decode$andThen,
																																	function (smmtema4) {
																																		return A2(
																																			elm$json$Json$Decode$andThen,
																																			function (smmtema3) {
																																				return A2(
																																					elm$json$Json$Decode$andThen,
																																					function (smmtema2) {
																																						return A2(
																																							elm$json$Json$Decode$andThen,
																																							function (smmtema1) {
																																								return A2(
																																									elm$json$Json$Decode$andThen,
																																									function (smmmin4) {
																																										return A2(
																																											elm$json$Json$Decode$andThen,
																																											function (smmmin3) {
																																												return A2(
																																													elm$json$Json$Decode$andThen,
																																													function (smmmin2) {
																																														return A2(
																																															elm$json$Json$Decode$andThen,
																																															function (smmmin1) {
																																																return A2(
																																																	elm$json$Json$Decode$andThen,
																																																	function (smmleccionmaestros) {
																																																		return A2(
																																																			elm$json$Json$Decode$andThen,
																																																			function (smmesvideo4) {
																																																				return A2(
																																																					elm$json$Json$Decode$andThen,
																																																					function (smmesvideo3) {
																																																						return A2(
																																																							elm$json$Json$Decode$andThen,
																																																							function (smmesvideo2) {
																																																								return A2(
																																																									elm$json$Json$Decode$andThen,
																																																									function (smmesvideo1) {
																																																										return A2(
																																																											elm$json$Json$Decode$andThen,
																																																											function (smmconsejo4) {
																																																												return A2(
																																																													elm$json$Json$Decode$andThen,
																																																													function (smmconsejo3) {
																																																														return A2(
																																																															elm$json$Json$Decode$andThen,
																																																															function (smmconsejo2) {
																																																																return A2(
																																																																	elm$json$Json$Decode$andThen,
																																																																	function (smmconsejo1) {
																																																																		return A2(
																																																																			elm$json$Json$Decode$andThen,
																																																																			function (smm4h1) {
																																																																				return A2(
																																																																					elm$json$Json$Decode$andThen,
																																																																					function (smm4esname) {
																																																																						return A2(
																																																																							elm$json$Json$Decode$andThen,
																																																																							function (smm4ayuname) {
																																																																								return A2(
																																																																									elm$json$Json$Decode$andThen,
																																																																									function (smm3h1) {
																																																																										return A2(
																																																																											elm$json$Json$Decode$andThen,
																																																																											function (smm3esname) {
																																																																												return A2(
																																																																													elm$json$Json$Decode$andThen,
																																																																													function (smm3ayuname) {
																																																																														return A2(
																																																																															elm$json$Json$Decode$andThen,
																																																																															function (smm2h1) {
																																																																																return A2(
																																																																																	elm$json$Json$Decode$andThen,
																																																																																	function (smm2esname) {
																																																																																		return A2(
																																																																																			elm$json$Json$Decode$andThen,
																																																																																			function (smm2ayuname) {
																																																																																				return A2(
																																																																																					elm$json$Json$Decode$andThen,
																																																																																					function (smm1h1) {
																																																																																						return A2(
																																																																																							elm$json$Json$Decode$andThen,
																																																																																							function (smm1esname) {
																																																																																								return A2(
																																																																																									elm$json$Json$Decode$andThen,
																																																																																									function (smm1ayuname) {
																																																																																										return A2(
																																																																																											elm$json$Json$Decode$andThen,
																																																																																											function (sabasambleamensage) {
																																																																																												return A2(
																																																																																													elm$json$Json$Decode$andThen,
																																																																																													function (sabasamblea) {
																																																																																														return A2(
																																																																																															elm$json$Json$Decode$andThen,
																																																																																															function (respcancion3) {
																																																																																																return A2(
																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																	function (respcancion2) {
																																																																																																		return A2(
																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																			function (respcancion1) {
																																																																																																				return A2(
																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																					function (presidente) {
																																																																																																						return A2(
																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																							function (presentacionesmes) {
																																																																																																								return A2(
																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																									function (oracion2) {
																																																																																																										return A2(
																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																											function (oracion1) {
																																																																																																												return A2(
																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																													function (nvctitulo2) {
																																																																																																														return A2(
																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																															function (nvctitulo1) {
																																																																																																																return A2(
																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																	function (nvcorador2) {
																																																																																																																		return A2(
																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																			function (nvcorador1) {
																																																																																																																				return A2(
																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																					function (nvcmins2) {
																																																																																																																						return A2(
																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																							function (nvcmins1) {
																																																																																																																								return A2(
																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																									function (nvcestudioorador) {
																																																																																																																										return A2(
																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																											function (nvcestudiolector) {
																																																																																																																												return A2(
																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																													function (nvc6h2) {
																																																																																																																														return A2(
																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																															function (nvc6h1) {
																																																																																																																																return A2(
																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																	function (nvc5h1) {
																																																																																																																																		return A2(
																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																			function (nvc4h1) {
																																																																																																																																				return A2(
																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																					function (nvc3h1) {
																																																																																																																																						return A2(
																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																							function (nvc2h1) {
																																																																																																																																								return A2(
																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																									function (nvc2anciano) {
																																																																																																																																										return A2(
																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																											function (nvc1h1) {
																																																																																																																																												return A2(
																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																													function (nvc1anciano) {
																																																																																																																																														return A2(
																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																															function (lecturaversiculos) {
																																																																																																																																																return A2(
																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																	function (ini2h1) {
																																																																																																																																																		return A2(
																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																			function (ini1h1) {
																																																																																																																																																				return A2(
																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																					function (fechasabado) {
																																																																																																																																																						return A2(
																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																							function (fechadomingo) {
																																																																																																																																																								return A2(
																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																									function (elcversiculos) {
																																																																																																																																																										return A2(
																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																											function (elcpersonajes) {
																																																																																																																																																												return A2(
																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																													function (elcnarradorname) {
																																																																																																																																																														return A2(
																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																															function (domtemacancion3) {
																																																																																																																																																																return A2(
																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																	function (domtemacancion2) {
																																																																																																																																																																		return A2(
																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																			function (domrespcancion3) {
																																																																																																																																																																				return A2(
																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																					function (domrespcancion2) {
																																																																																																																																																																						return A2(
																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																							function (dompresidente) {
																																																																																																																																																																								return A2(
																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																									function (domhaydiscursante) {
																																																																																																																																																																										return A2(
																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																											function (domdiscursante) {
																																																																																																																																																																												return A2(
																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																													function (domcancion3) {
																																																																																																																																																																														return A2(
																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																															function (domcancion2) {
																																																																																																																																																																																return A2(
																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																	function (domasambleamensage) {
																																																																																																																																																																																		return A2(
																																																																																																																																																																																			elm$json$Json$Decode$andThen,
																																																																																																																																																																																			function (domasamblea) {
																																																																																																																																																																																				return A2(
																																																																																																																																																																																					elm$json$Json$Decode$andThen,
																																																																																																																																																																																					function (cronometro) {
																																																																																																																																																																																						return A2(
																																																																																																																																																																																							elm$json$Json$Decode$andThen,
																																																																																																																																																																																							function (consejolector) {
																																																																																																																																																																																								return A2(
																																																																																																																																																																																									elm$json$Json$Decode$andThen,
																																																																																																																																																																																									function (cancion3) {
																																																																																																																																																																																										return A2(
																																																																																																																																																																																											elm$json$Json$Decode$andThen,
																																																																																																																																																																																											function (cancion2) {
																																																																																																																																																																																												return A2(
																																																																																																																																																																																													elm$json$Json$Decode$andThen,
																																																																																																																																																																																													function (cancion1) {
																																																																																																																																																																																														return A2(
																																																																																																																																																																																															elm$json$Json$Decode$andThen,
																																																																																																																																																																																															function (camara) {
																																																																																																																																																																																																return A2(
																																																																																																																																																																																																	elm$json$Json$Decode$andThen,
																																																																																																																																																																																																	function (aparatos) {
																																																																																																																																																																																																		return elm$json$Json$Decode$succeed(
																																																																																																																																																																																																			{aparatos: aparatos, camara: camara, cancion1: cancion1, cancion2: cancion2, cancion3: cancion3, consejolector: consejolector, cronometro: cronometro, domasamblea: domasamblea, domasambleamensage: domasambleamensage, domcancion2: domcancion2, domcancion3: domcancion3, domdiscursante: domdiscursante, domhaydiscursante: domhaydiscursante, dompresidente: dompresidente, domrespcancion2: domrespcancion2, domrespcancion3: domrespcancion3, domtemacancion2: domtemacancion2, domtemacancion3: domtemacancion3, elcnarradorname: elcnarradorname, elcpersonajes: elcpersonajes, elcversiculos: elcversiculos, fechadomingo: fechadomingo, fechasabado: fechasabado, ini1h1: ini1h1, ini2h1: ini2h1, lecturaversiculos: lecturaversiculos, nvc1anciano: nvc1anciano, nvc1h1: nvc1h1, nvc2anciano: nvc2anciano, nvc2h1: nvc2h1, nvc3h1: nvc3h1, nvc4h1: nvc4h1, nvc5h1: nvc5h1, nvc6h1: nvc6h1, nvc6h2: nvc6h2, nvcestudiolector: nvcestudiolector, nvcestudioorador: nvcestudioorador, nvcmins1: nvcmins1, nvcmins2: nvcmins2, nvcorador1: nvcorador1, nvcorador2: nvcorador2, nvctitulo1: nvctitulo1, nvctitulo2: nvctitulo2, oracion1: oracion1, oracion2: oracion2, presentacionesmes: presentacionesmes, presidente: presidente, respcancion1: respcancion1, respcancion2: respcancion2, respcancion3: respcancion3, sabasamblea: sabasamblea, sabasambleamensage: sabasambleamensage, smm1ayuname: smm1ayuname, smm1esname: smm1esname, smm1h1: smm1h1, smm2ayuname: smm2ayuname, smm2esname: smm2esname, smm2h1: smm2h1, smm3ayuname: smm3ayuname, smm3esname: smm3esname, smm3h1: smm3h1, smm4ayuname: smm4ayuname, smm4esname: smm4esname, smm4h1: smm4h1, smmconsejo1: smmconsejo1, smmconsejo2: smmconsejo2, smmconsejo3: smmconsejo3, smmconsejo4: smmconsejo4, smmesvideo1: smmesvideo1, smmesvideo2: smmesvideo2, smmesvideo3: smmesvideo3, smmesvideo4: smmesvideo4, smmleccionmaestros: smmleccionmaestros, smmmin1: smmmin1, smmmin2: smmmin2, smmmin3: smmmin3, smmmin4: smmmin4, smmtema1: smmtema1, smmtema2: smmtema2, smmtema3: smmtema3, smmtema4: smmtema4, smmtieneayudante1: smmtieneayudante1, smmtieneayudante2: smmtieneayudante2, smmtieneayudante3: smmtieneayudante3, smmtieneayudante4: smmtieneayudante4, tb1h1: tb1h1, tb1orador: tb1orador, tb1titulo: tb1titulo, tb2h1: tb2h1, tb3h1: tb3h1, tblector: tblector, tbperlasorador: tbperlasorador, temacancion1: temacancion1, temacancion2: temacancion2, temacancion3: temacancion3});
																																																																																																																																																																																																	},
																																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'aparatos', elm$json$Json$Decode$string));
																																																																																																																																																																																															},
																																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'camara', elm$json$Json$Decode$string));
																																																																																																																																																																																													},
																																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'cancion1', elm$json$Json$Decode$int));
																																																																																																																																																																																											},
																																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'cancion2', elm$json$Json$Decode$int));
																																																																																																																																																																																									},
																																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'cancion3', elm$json$Json$Decode$int));
																																																																																																																																																																																							},
																																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'consejolector', elm$json$Json$Decode$string));
																																																																																																																																																																																					},
																																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'cronometro', elm$json$Json$Decode$string));
																																																																																																																																																																																			},
																																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domasamblea', elm$json$Json$Decode$bool));
																																																																																																																																																																																	},
																																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domasambleamensage', elm$json$Json$Decode$string));
																																																																																																																																																																															},
																																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domcancion2', elm$json$Json$Decode$int));
																																																																																																																																																																													},
																																																																																																																																																																													A2(elm$json$Json$Decode$field, 'domcancion3', elm$json$Json$Decode$int));
																																																																																																																																																																											},
																																																																																																																																																																											A2(elm$json$Json$Decode$field, 'domdiscursante', elm$json$Json$Decode$string));
																																																																																																																																																																									},
																																																																																																																																																																									A2(elm$json$Json$Decode$field, 'domhaydiscursante', elm$json$Json$Decode$bool));
																																																																																																																																																																							},
																																																																																																																																																																							A2(elm$json$Json$Decode$field, 'dompresidente', elm$json$Json$Decode$string));
																																																																																																																																																																					},
																																																																																																																																																																					A2(elm$json$Json$Decode$field, 'domrespcancion2', elm$json$Json$Decode$string));
																																																																																																																																																																			},
																																																																																																																																																																			A2(elm$json$Json$Decode$field, 'domrespcancion3', elm$json$Json$Decode$string));
																																																																																																																																																																	},
																																																																																																																																																																	A2(elm$json$Json$Decode$field, 'domtemacancion2', elm$json$Json$Decode$string));
																																																																																																																																																															},
																																																																																																																																																															A2(elm$json$Json$Decode$field, 'domtemacancion3', elm$json$Json$Decode$string));
																																																																																																																																																													},
																																																																																																																																																													A2(elm$json$Json$Decode$field, 'elcnarradorname', elm$json$Json$Decode$string));
																																																																																																																																																											},
																																																																																																																																																											A2(
																																																																																																																																																												elm$json$Json$Decode$field,
																																																																																																																																																												'elcpersonajes',
																																																																																																																																																												elm$json$Json$Decode$list(elm$json$Json$Decode$string)));
																																																																																																																																																									},
																																																																																																																																																									A2(elm$json$Json$Decode$field, 'elcversiculos', elm$json$Json$Decode$string));
																																																																																																																																																							},
																																																																																																																																																							A2(elm$json$Json$Decode$field, 'fechadomingo', elm$json$Json$Decode$string));
																																																																																																																																																					},
																																																																																																																																																					A2(elm$json$Json$Decode$field, 'fechasabado', elm$json$Json$Decode$string));
																																																																																																																																																			},
																																																																																																																																																			A2(elm$json$Json$Decode$field, 'ini1h1', elm$json$Json$Decode$string));
																																																																																																																																																	},
																																																																																																																																																	A2(elm$json$Json$Decode$field, 'ini2h1', elm$json$Json$Decode$string));
																																																																																																																																															},
																																																																																																																																															A2(elm$json$Json$Decode$field, 'lecturaversiculos', elm$json$Json$Decode$string));
																																																																																																																																													},
																																																																																																																																													A2(elm$json$Json$Decode$field, 'nvc1anciano', elm$json$Json$Decode$bool));
																																																																																																																																											},
																																																																																																																																											A2(elm$json$Json$Decode$field, 'nvc1h1', elm$json$Json$Decode$string));
																																																																																																																																									},
																																																																																																																																									A2(elm$json$Json$Decode$field, 'nvc2anciano', elm$json$Json$Decode$bool));
																																																																																																																																							},
																																																																																																																																							A2(elm$json$Json$Decode$field, 'nvc2h1', elm$json$Json$Decode$string));
																																																																																																																																					},
																																																																																																																																					A2(elm$json$Json$Decode$field, 'nvc3h1', elm$json$Json$Decode$string));
																																																																																																																																			},
																																																																																																																																			A2(elm$json$Json$Decode$field, 'nvc4h1', elm$json$Json$Decode$string));
																																																																																																																																	},
																																																																																																																																	A2(elm$json$Json$Decode$field, 'nvc5h1', elm$json$Json$Decode$string));
																																																																																																																															},
																																																																																																																															A2(elm$json$Json$Decode$field, 'nvc6h1', elm$json$Json$Decode$string));
																																																																																																																													},
																																																																																																																													A2(elm$json$Json$Decode$field, 'nvc6h2', elm$json$Json$Decode$string));
																																																																																																																											},
																																																																																																																											A2(elm$json$Json$Decode$field, 'nvcestudiolector', elm$json$Json$Decode$string));
																																																																																																																									},
																																																																																																																									A2(elm$json$Json$Decode$field, 'nvcestudioorador', elm$json$Json$Decode$string));
																																																																																																																							},
																																																																																																																							A2(elm$json$Json$Decode$field, 'nvcmins1', elm$json$Json$Decode$int));
																																																																																																																					},
																																																																																																																					A2(elm$json$Json$Decode$field, 'nvcmins2', elm$json$Json$Decode$int));
																																																																																																																			},
																																																																																																																			A2(elm$json$Json$Decode$field, 'nvcorador1', elm$json$Json$Decode$string));
																																																																																																																	},
																																																																																																																	A2(elm$json$Json$Decode$field, 'nvcorador2', elm$json$Json$Decode$string));
																																																																																																															},
																																																																																																															A2(elm$json$Json$Decode$field, 'nvctitulo1', elm$json$Json$Decode$string));
																																																																																																													},
																																																																																																													A2(elm$json$Json$Decode$field, 'nvctitulo2', elm$json$Json$Decode$string));
																																																																																																											},
																																																																																																											A2(elm$json$Json$Decode$field, 'oracion1', elm$json$Json$Decode$string));
																																																																																																									},
																																																																																																									A2(elm$json$Json$Decode$field, 'oracion2', elm$json$Json$Decode$string));
																																																																																																							},
																																																																																																							A2(elm$json$Json$Decode$field, 'presentacionesmes', elm$json$Json$Decode$string));
																																																																																																					},
																																																																																																					A2(elm$json$Json$Decode$field, 'presidente', elm$json$Json$Decode$string));
																																																																																																			},
																																																																																																			A2(elm$json$Json$Decode$field, 'respcancion1', elm$json$Json$Decode$string));
																																																																																																	},
																																																																																																	A2(elm$json$Json$Decode$field, 'respcancion2', elm$json$Json$Decode$string));
																																																																																															},
																																																																																															A2(elm$json$Json$Decode$field, 'respcancion3', elm$json$Json$Decode$string));
																																																																																													},
																																																																																													A2(elm$json$Json$Decode$field, 'sabasamblea', elm$json$Json$Decode$bool));
																																																																																											},
																																																																																											A2(elm$json$Json$Decode$field, 'sabasambleamensage', elm$json$Json$Decode$string));
																																																																																									},
																																																																																									A2(elm$json$Json$Decode$field, 'smm1ayuname', elm$json$Json$Decode$string));
																																																																																							},
																																																																																							A2(elm$json$Json$Decode$field, 'smm1esname', elm$json$Json$Decode$string));
																																																																																					},
																																																																																					A2(elm$json$Json$Decode$field, 'smm1h1', elm$json$Json$Decode$string));
																																																																																			},
																																																																																			A2(elm$json$Json$Decode$field, 'smm2ayuname', elm$json$Json$Decode$string));
																																																																																	},
																																																																																	A2(elm$json$Json$Decode$field, 'smm2esname', elm$json$Json$Decode$string));
																																																																															},
																																																																															A2(elm$json$Json$Decode$field, 'smm2h1', elm$json$Json$Decode$string));
																																																																													},
																																																																													A2(elm$json$Json$Decode$field, 'smm3ayuname', elm$json$Json$Decode$string));
																																																																											},
																																																																											A2(elm$json$Json$Decode$field, 'smm3esname', elm$json$Json$Decode$string));
																																																																									},
																																																																									A2(elm$json$Json$Decode$field, 'smm3h1', elm$json$Json$Decode$string));
																																																																							},
																																																																							A2(elm$json$Json$Decode$field, 'smm4ayuname', elm$json$Json$Decode$string));
																																																																					},
																																																																					A2(elm$json$Json$Decode$field, 'smm4esname', elm$json$Json$Decode$string));
																																																																			},
																																																																			A2(elm$json$Json$Decode$field, 'smm4h1', elm$json$Json$Decode$string));
																																																																	},
																																																																	A2(elm$json$Json$Decode$field, 'smmconsejo1', elm$json$Json$Decode$int));
																																																															},
																																																															A2(elm$json$Json$Decode$field, 'smmconsejo2', elm$json$Json$Decode$int));
																																																													},
																																																													A2(elm$json$Json$Decode$field, 'smmconsejo3', elm$json$Json$Decode$int));
																																																											},
																																																											A2(elm$json$Json$Decode$field, 'smmconsejo4', elm$json$Json$Decode$int));
																																																									},
																																																									A2(elm$json$Json$Decode$field, 'smmesvideo1', elm$json$Json$Decode$bool));
																																																							},
																																																							A2(elm$json$Json$Decode$field, 'smmesvideo2', elm$json$Json$Decode$bool));
																																																					},
																																																					A2(elm$json$Json$Decode$field, 'smmesvideo3', elm$json$Json$Decode$bool));
																																																			},
																																																			A2(elm$json$Json$Decode$field, 'smmesvideo4', elm$json$Json$Decode$bool));
																																																	},
																																																	A2(elm$json$Json$Decode$field, 'smmleccionmaestros', elm$json$Json$Decode$bool));
																																															},
																																															A2(elm$json$Json$Decode$field, 'smmmin1', elm$json$Json$Decode$int));
																																													},
																																													A2(elm$json$Json$Decode$field, 'smmmin2', elm$json$Json$Decode$int));
																																											},
																																											A2(elm$json$Json$Decode$field, 'smmmin3', elm$json$Json$Decode$int));
																																									},
																																									A2(elm$json$Json$Decode$field, 'smmmin4', elm$json$Json$Decode$int));
																																							},
																																							A2(elm$json$Json$Decode$field, 'smmtema1', elm$json$Json$Decode$string));
																																					},
																																					A2(elm$json$Json$Decode$field, 'smmtema2', elm$json$Json$Decode$string));
																																			},
																																			A2(elm$json$Json$Decode$field, 'smmtema3', elm$json$Json$Decode$string));
																																	},
																																	A2(elm$json$Json$Decode$field, 'smmtema4', elm$json$Json$Decode$string));
																															},
																															A2(elm$json$Json$Decode$field, 'smmtieneayudante1', elm$json$Json$Decode$bool));
																													},
																													A2(elm$json$Json$Decode$field, 'smmtieneayudante2', elm$json$Json$Decode$bool));
																											},
																											A2(elm$json$Json$Decode$field, 'smmtieneayudante3', elm$json$Json$Decode$bool));
																									},
																									A2(elm$json$Json$Decode$field, 'smmtieneayudante4', elm$json$Json$Decode$bool));
																							},
																							A2(elm$json$Json$Decode$field, 'tb1h1', elm$json$Json$Decode$string));
																					},
																					A2(elm$json$Json$Decode$field, 'tb1orador', elm$json$Json$Decode$string));
																			},
																			A2(elm$json$Json$Decode$field, 'tb1titulo', elm$json$Json$Decode$string));
																	},
																	A2(elm$json$Json$Decode$field, 'tb2h1', elm$json$Json$Decode$string));
															},
															A2(elm$json$Json$Decode$field, 'tb3h1', elm$json$Json$Decode$string));
													},
													A2(elm$json$Json$Decode$field, 'tblector', elm$json$Json$Decode$string));
											},
											A2(elm$json$Json$Decode$field, 'tbperlasorador', elm$json$Json$Decode$string));
									},
									A2(elm$json$Json$Decode$field, 'temacancion1', elm$json$Json$Decode$string));
							},
							A2(elm$json$Json$Decode$field, 'temacancion2', elm$json$Json$Decode$string));
					},
					A2(elm$json$Json$Decode$field, 'temacancion3', elm$json$Json$Decode$string))))));
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$App$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				author$project$Ports$fillSemana(author$project$App$FillSemana),
				author$project$Ports$fillSemanas(author$project$App$FillSemanas),
				author$project$Ports$loadPublicadores(author$project$App$LoadPublicadores),
				author$project$Ports$loadCanciones(author$project$App$LoadCanciones),
				author$project$Ports$loadSemanasAnteriores(author$project$App$LoadSemanasAnteriores),
				author$project$Ports$programasemanalrestore(author$project$App$Programasemanalrestore),
				author$project$Ports$clear(author$project$App$Clear)
			]));
};
var author$project$App$createBackup = F2(
	function (newmodel, semanastempl) {
		return {canciones: newmodel.canciones, publicadores: newmodel.publicadores, semanasanteriores: newmodel.semanasanteriores, semanasllenados: newmodel.semanasllenados, semanastemplates: semanastempl};
	});
var author$project$LlenarSemana$idApoyos = _List_fromArray(
	[
		function ($) {
		return $.aparatosid;
	},
		function ($) {
		return $.camaraid;
	},
		function ($) {
		return $.cronometroid;
	},
		function ($) {
		return $.cronometroid;
	}
	]);
var author$project$LlenarSemana$idDiscursoscomentarios = _List_fromArray(
	[
		function ($) {
		return $.presidenteid;
	},
		function ($) {
		return $.tbperlasoradorid;
	},
		function ($) {
		return $.nvcorador1id;
	},
		function ($) {
		return $.nvcorador2id;
	},
		function ($) {
		return $.nvcestudiooradorid;
	}
	]);
var author$project$LlenarSemana$idLectores = _List_fromArray(
	[
		function ($) {
		return $.nvcestudiolectorid;
	}
	]);
var author$project$LlenarSemana$idNoPuedeApoyos = _List_fromArray(
	[
		function ($) {
		return $.presidenteid;
	},
		function ($) {
		return $.nvcestudiooradorid;
	}
	]);
var author$project$LlenarSemana$anteriores = function (model) {
	return _Utils_ap(model.semanasanteriores, model.semanasllenados);
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$LlenarSemana$choosefirst = function (publicadores) {
	return elm$core$List$head(publicadores);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var author$project$LlenarSemana$filterpubs = F2(
	function (filter, publicadores) {
		return A2(elm$core$List$filter, filter, publicadores);
	});
var elm$core$Basics$ge = _Utils_ge;
var author$project$LlenarSemana$filterpubssolodisponibles = F2(
	function (fechasabado, publicadores) {
		return A2(
			elm$core$List$filter,
			function (pub) {
				var _n0 = pub.fechanodisponibleinicio;
				if (_n0.$ === 'Nothing') {
					return true;
				} else {
					var fechainicio = _n0.a;
					var _n1 = pub.fechanodisponiblefin;
					if (_n1.$ === 'Nothing') {
						return true;
					} else {
						var fechafin = _n1.a;
						return (_Utils_cmp(fechasabado, fechainicio) > -1) && (_Utils_cmp(fechasabado, fechafin) > -1);
					}
				}
			},
			publicadores);
	});
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var author$project$LlenarSemana$getlastweekid = F2(
	function (getter, semanas) {
		return function (id) {
			if (id.$ === 'Nothing') {
				return '';
			} else {
				var identification = id.a;
				return identification;
			}
		}(
			elm$core$List$head(
				elm$core$List$reverse(
					A2(
						elm$core$List$filter,
						function (id) {
							return id !== '';
						},
						A2(elm$core$List$map, getter, semanas)))));
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var elm_community$list_extra$List$Extra$findIndex = elm_community$list_extra$List$Extra$findIndexHelp(0);
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2(elm$core$List$take, n, xs),
			A2(elm$core$List$drop, n, xs));
	});
var author$project$LlenarSemana$recombine = F2(
	function (idsemanapasada, oradores) {
		var index = A2(
			elm_community$list_extra$List$Extra$findIndex,
			function (pub) {
				return _Utils_eq(pub.id, idsemanapasada);
			},
			oradores);
		var _n0 = function () {
			if (index.$ === 'Nothing') {
				return _Utils_Tuple2(oradores, _List_Nil);
			} else {
				var ind = index.a;
				return A2(elm_community$list_extra$List$Extra$splitAt, ind + 1, oradores);
			}
		}();
		var toend = _n0.a;
		var tostart = _n0.b;
		return elm$core$List$concat(
			_List_fromArray(
				[tostart, toend]));
	});
var elm$core$Basics$not = _Basics_not;
var author$project$LlenarSemana$removeVideo = function (publicadores) {
	return A2(
		author$project$LlenarSemana$filterpubs,
		function (pub) {
			return !pub.esvideo;
		},
		publicadores);
};
var author$project$LlenarSemana$removeVideoIfGreaterEqualThan = F2(
	function (min, publicadores) {
		return (_Utils_cmp(
			elm$core$List$length(publicadores),
			min) > -1) ? author$project$LlenarSemana$removeVideo(publicadores) : publicadores;
	});
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var author$project$LlenarSemana$pubsnotinidlistorvideo = F2(
	function (publicadores, ids) {
		return A2(
			elm$core$List$filter,
			function (pub) {
				return (!A2(elm$core$List$member, pub.id, ids)) || pub.esvideo;
			},
			publicadores);
	});
var author$project$LlenarSemana$removepublicadoresmatching = F4(
	function (callee, getters, semana, publicadores) {
		return A2(
			author$project$LlenarSemana$pubsnotinidlistorvideo,
			publicadores,
			A2(
				elm$core$List$filter,
				function (id) {
					return id !== '';
				},
				A2(
					elm$core$List$map,
					function (getter) {
						return getter(semana);
					},
					getters)));
	});
var author$project$LlenarSemana$getIdName = function (chosen) {
	if (chosen.$ === 'Nothing') {
		return _Utils_Tuple2('', '');
	} else {
		var pub = chosen.a;
		return _Utils_Tuple2(pub.id, pub.name);
	}
};
var author$project$LlenarSemana$setasignments = F3(
	function (semanasetter, model, chosen) {
		var _n0 = author$project$LlenarSemana$getIdName(chosen);
		var id = _n0.a;
		var name = _n0.b;
		var semana = semanasetter(
			_Utils_Tuple3(model.semanatofill, id, name));
		return _Utils_update(
			model,
			{semanatofill: semana});
	});
var elm$core$List$sortBy = _List_sortBy;
var author$project$LlenarSemana$setpublicador = F7(
	function (callee, maxweeks, getters, semanaid, pubfilter, semanasetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsemanapasada = A2(
				author$project$LlenarSemana$getlastweekid,
				semanaid,
				author$project$LlenarSemana$anteriores(model));
			return A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A4(
							author$project$LlenarSemana$removepublicadoresmatching,
							callee,
							getters,
							model.semanatofill,
							A2(
								author$project$LlenarSemana$filterpubssolodisponibles,
								model.semanatofill.fechasabado,
								A2(
									author$project$LlenarSemana$recombine,
									idsemanapasada,
									A2(
										elm$core$List$sortBy,
										function (pub) {
											return pub.name;
										},
										A2(
											author$project$LlenarSemana$filterpubs,
											function (pub) {
												return pubfilter(pub);
											},
											model.publicadores))))))));
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$aparatos = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'aparatos',
		2,
		_Utils_ap(
			author$project$LlenarSemana$idApoyos,
			_Utils_ap(
				author$project$LlenarSemana$idNoPuedeApoyos,
				_Utils_ap(author$project$LlenarSemana$idLectores, author$project$LlenarSemana$idDiscursoscomentarios))),
		function ($) {
			return $.aparatosid;
		},
		function ($) {
			return $.aparatos;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{aparatosid: id, aparatosname: name});
		},
		model);
};
var author$project$LlenarSemana$camara = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'camara',
		2,
		_Utils_ap(
			author$project$LlenarSemana$idApoyos,
			_Utils_ap(
				author$project$LlenarSemana$idNoPuedeApoyos,
				_Utils_ap(author$project$LlenarSemana$idLectores, author$project$LlenarSemana$idDiscursoscomentarios))),
		function ($) {
			return $.camaraid;
		},
		function ($) {
			return $.camara;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{camaraid: id, camaraname: name});
		},
		model);
};
var author$project$LlenarSemana$cronometro = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'cronometro',
		2,
		_Utils_ap(author$project$LlenarSemana$idApoyos, author$project$LlenarSemana$idNoPuedeApoyos),
		function ($) {
			return $.cronometroid;
		},
		function ($) {
			return $.cronometro;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{cronometroid: id, cronometroname: name});
		},
		model);
};
var author$project$LlenarSemana$dompresidente = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'dompresidente',
		2,
		_List_Nil,
		function ($) {
			return $.dompresidenteid;
		},
		function ($) {
			return $.presidentedomingo;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{dompresidenteid: id, dompresidentename: name});
		},
		model);
};
var author$project$LlenarSemana$idOraciones = _List_fromArray(
	[
		function ($) {
		return $.oracion1id;
	},
		function ($) {
		return $.oracion2id;
	}
	]);
var author$project$LlenarSemana$oracion1 = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'oracion1',
		2,
		author$project$LlenarSemana$idOraciones,
		function ($) {
			return $.oracion1id;
		},
		function ($) {
			return $.oracion;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{oracion1id: id, oracion1name: name});
		},
		model);
};
var author$project$LlenarSemana$oracion2 = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'oracion2',
		2,
		author$project$LlenarSemana$idOraciones,
		function ($) {
			return $.oracion2id;
		},
		function ($) {
			return $.oracion;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{oracion2id: id, oracion2name: name});
		},
		model);
};
var author$project$LlenarSemana$apoyo = function (model) {
	return author$project$LlenarSemana$dompresidente(
		author$project$LlenarSemana$oracion2(
			author$project$LlenarSemana$oracion1(
				author$project$LlenarSemana$camara(
					author$project$LlenarSemana$aparatos(
						author$project$LlenarSemana$cronometro(model))))));
};
var author$project$LlenarSemana$nvc1anciano = function (model) {
	if (model.semanatofill.nvcanciano1) {
		var semanasetter = function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{nvcorador1id: id, nvcorador1name: name});
		};
		return A3(
			author$project$LlenarSemana$setasignments,
			semanasetter,
			model,
			author$project$LlenarSemana$choosefirst(
				A2(
					author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
					2,
					A2(
						elm$core$List$sortBy,
						function (pub) {
							return pub.name;
						},
						A2(
							author$project$LlenarSemana$filterpubssolodisponibles,
							model.semanatofill.fechasabado,
							A2(
								author$project$LlenarSemana$filterpubs,
								function (pub) {
									return pub.nvc && pub.anciano;
								},
								model.publicadores))))));
	} else {
		return model;
	}
};
var author$project$LlenarSemana$nvc2anciano = function (model) {
	if (model.semanatofill.nvcanciano2 && (model.semanatofill.nvcmins2 > 0)) {
		var semanasetter = function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{nvcorador2id: id, nvcorador2name: name});
		};
		return A3(
			author$project$LlenarSemana$setasignments,
			semanasetter,
			model,
			author$project$LlenarSemana$choosefirst(
				A2(
					author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
					2,
					A2(
						elm$core$List$sortBy,
						function (pub) {
							return pub.name;
						},
						A2(
							author$project$LlenarSemana$filterpubssolodisponibles,
							model.semanatofill.fechasabado,
							A2(
								author$project$LlenarSemana$filterpubs,
								function (pub) {
									return pub.nvc && pub.anciano;
								},
								model.publicadores))))));
	} else {
		return model;
	}
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var author$project$LlenarSemana$getlastweeks = F2(
	function (maxval, publicadores) {
		var lastweeks = A2(
			elm$core$Basics$min,
			maxval,
			elm$core$List$length(publicadores) - 1);
		return (lastweeks < 1) ? 1 : lastweeks;
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2(elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2(elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2(elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var elm_community$list_extra$List$Extra$unique = function (list) {
	return A4(elm_community$list_extra$List$Extra$uniqueHelp, elm$core$Basics$identity, elm$core$Set$empty, list, _List_Nil);
};
var author$project$LlenarSemana$getlastweeksids = F3(
	function (getter, semanas, lastweeks) {
		return elm_community$list_extra$List$Extra$unique(
			A2(
				elm$core$List$map,
				getter,
				elm$core$List$reverse(
					A2(
						elm$core$List$take,
						lastweeks,
						elm$core$List$reverse(semanas)))));
	});
var author$project$LlenarSemana$idDiscursos = _List_fromArray(
	[
		function ($) {
		return $.presidenteid;
	},
		function ($) {
		return $.tb1oradorid;
	},
		function ($) {
		return $.tbperlasoradorid;
	},
		function ($) {
		return $.tblectorid;
	},
		function ($) {
		return $.smm1esid;
	},
		function ($) {
		return $.smm2esid;
	},
		function ($) {
		return $.smm3esid;
	},
		function ($) {
		return $.presentacionesmesid;
	},
		function ($) {
		return $.nvcorador1id;
	},
		function ($) {
		return $.nvcorador2id;
	},
		function ($) {
		return $.nvcestudiooradorid;
	}
	]);
var author$project$LlenarSemana$nvcestudioorador = function (model) {
	var semanasetter = function (_n0) {
		var semana = _n0.a;
		var id = _n0.b;
		var name = _n0.c;
		return _Utils_update(
			semana,
			{nvcestudiooradorid: id, nvcestudiooradorname: name});
	};
	var publicadores = A2(
		elm$core$List$sortBy,
		function (pub) {
			return pub.name;
		},
		A2(
			author$project$LlenarSemana$filterpubssolodisponibles,
			model.semanatofill.fechasabado,
			A2(
				author$project$LlenarSemana$filterpubs,
				function (pub) {
					return pub.estudiocongregacion;
				},
				model.publicadores)));
	var idsemanapasada = A2(
		author$project$LlenarSemana$getlastweekid,
		function ($) {
			return $.nvcestudiooradorid;
		},
		author$project$LlenarSemana$anteriores(model));
	var removedothertalks = A4(
		author$project$LlenarSemana$removepublicadoresmatching,
		'nvcestudioorador',
		author$project$LlenarSemana$idDiscursos,
		model.semanatofill,
		A2(author$project$LlenarSemana$recombine, idsemanapasada, publicadores));
	return A3(
		author$project$LlenarSemana$setasignments,
		semanasetter,
		model,
		author$project$LlenarSemana$choosefirst(
			A2(
				author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
				2,
				A2(
					author$project$LlenarSemana$pubsnotinidlistorvideo,
					removedothertalks,
					A3(
						author$project$LlenarSemana$getlastweeksids,
						function ($) {
							return $.nvcestudiooradorid;
						},
						author$project$LlenarSemana$anteriores(model),
						A2(author$project$LlenarSemana$getlastweeks, 1, publicadores))))));
};
var author$project$LlenarSemana$nvcorador1 = function (model) {
	if (model.semanatofill.nvcorador1id === '') {
		var semanasetter = function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{nvcorador1id: id, nvcorador1name: name});
		};
		var idsemanapasadanvc2 = A2(
			author$project$LlenarSemana$getlastweekid,
			function ($) {
				return $.nvcorador2id;
			},
			author$project$LlenarSemana$anteriores(model));
		var idsemanapasadanvc1 = A2(
			author$project$LlenarSemana$getlastweekid,
			function ($) {
				return $.nvcorador1id;
			},
			author$project$LlenarSemana$anteriores(model));
		var recombined = A2(
			author$project$LlenarSemana$filterpubssolodisponibles,
			model.semanatofill.fechasabado,
			A2(
				author$project$LlenarSemana$recombine,
				idsemanapasadanvc1,
				A4(
					author$project$LlenarSemana$removepublicadoresmatching,
					'nvcorador1',
					author$project$LlenarSemana$idDiscursos,
					model.semanatofill,
					A2(
						elm$core$List$sortBy,
						function (pub) {
							return pub.name;
						},
						A2(
							author$project$LlenarSemana$filterpubs,
							function (pub) {
								return pub.nvc;
							},
							model.publicadores)))));
		var pubs = (elm$core$List$length(recombined) > 1) ? A2(
			author$project$LlenarSemana$pubsnotinidlistorvideo,
			recombined,
			_List_fromArray(
				[idsemanapasadanvc2])) : recombined;
		return A3(
			author$project$LlenarSemana$setasignments,
			semanasetter,
			model,
			author$project$LlenarSemana$choosefirst(
				A2(author$project$LlenarSemana$removeVideoIfGreaterEqualThan, 2, pubs)));
	} else {
		return model;
	}
};
var author$project$LlenarSemana$nvcorador2 = function (model) {
	if ((model.semanatofill.nvcorador2id === '') && (model.semanatofill.nvcmins2 > 0)) {
		var semanasetter = function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{nvcorador2id: id, nvcorador2name: name});
		};
		var idsemanapasadanvc2 = A2(
			author$project$LlenarSemana$getlastweekid,
			function ($) {
				return $.nvcorador2id;
			},
			author$project$LlenarSemana$anteriores(model));
		var recombined = A2(
			author$project$LlenarSemana$filterpubssolodisponibles,
			model.semanatofill.fechasabado,
			A2(
				author$project$LlenarSemana$recombine,
				idsemanapasadanvc2,
				A4(
					author$project$LlenarSemana$removepublicadoresmatching,
					'nvcorador2',
					author$project$LlenarSemana$idDiscursos,
					model.semanatofill,
					A2(
						elm$core$List$sortBy,
						function (pub) {
							return pub.name;
						},
						A2(
							author$project$LlenarSemana$filterpubs,
							function (pub) {
								return pub.nvc;
							},
							model.publicadores)))));
		var idsemanapasadanvc1 = A2(
			author$project$LlenarSemana$getlastweekid,
			function ($) {
				return $.nvcorador1id;
			},
			author$project$LlenarSemana$anteriores(model));
		var pubs = (elm$core$List$length(recombined) > 1) ? A2(
			author$project$LlenarSemana$pubsnotinidlistorvideo,
			recombined,
			_List_fromArray(
				[idsemanapasadanvc1])) : recombined;
		var callee = 'nvcorador2';
		return A3(
			author$project$LlenarSemana$setasignments,
			semanasetter,
			model,
			author$project$LlenarSemana$choosefirst(
				A2(author$project$LlenarSemana$removeVideoIfGreaterEqualThan, 2, pubs)));
	} else {
		return model;
	}
};
var author$project$LlenarSemana$presidenteestudiantes = function (model) {
	var semanasetter2 = function (_n1) {
		var semana = _n1.a;
		var id = _n1.b;
		var name = _n1.c;
		return _Utils_update(
			semana,
			{tbperlasoradorid: id, tbperlasoradorname: name});
	};
	var semanasetter1 = function (_n0) {
		var semana = _n0.a;
		var id = _n0.b;
		var name = _n0.c;
		return _Utils_update(
			semana,
			{presidenteid: id, presidentename: name});
	};
	var idsemanapasada = A2(
		author$project$LlenarSemana$getlastweekid,
		function ($) {
			return $.presidenteid;
		},
		author$project$LlenarSemana$anteriores(model));
	var chosen = author$project$LlenarSemana$choosefirst(
		A4(
			author$project$LlenarSemana$removepublicadoresmatching,
			'presidenteestudiantes',
			author$project$LlenarSemana$idDiscursos,
			model.semanatofill,
			A2(
				author$project$LlenarSemana$filterpubssolodisponibles,
				model.semanatofill.fechasabado,
				A2(
					author$project$LlenarSemana$recombine,
					idsemanapasada,
					A2(
						elm$core$List$sortBy,
						function (pub) {
							return pub.name;
						},
						A2(
							author$project$LlenarSemana$filterpubs,
							function (pub) {
								return pub.presidentesabado;
							},
							model.publicadores))))));
	var model1 = A3(author$project$LlenarSemana$setasignments, semanasetter1, model, chosen);
	var model2 = A3(author$project$LlenarSemana$setasignments, semanasetter2, model1, chosen);
	return model2;
};
var author$project$LlenarSemana$presidente = function (model) {
	return author$project$LlenarSemana$presidenteestudiantes(model);
};
var author$project$LlenarSemana$tb1orador = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'tb1orador',
		2,
		author$project$LlenarSemana$idDiscursos,
		function ($) {
			return $.tb1oradorid;
		},
		function ($) {
			return $.tb1orador;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{tb1oradorid: id, tb1oradorname: name});
		},
		model);
};
var author$project$LlenarSemana$tbperlasorador = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'tbperlasorador',
		2,
		author$project$LlenarSemana$idDiscursos,
		function ($) {
			return $.tbperlasoradorid;
		},
		function ($) {
			return $.perlas;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{tbperlasoradorid: id, tbperlasoradorname: name});
		},
		model);
};
var author$project$LlenarSemana$discursos = function (model) {
	return author$project$LlenarSemana$tb1orador(
		author$project$LlenarSemana$tbperlasorador(
			author$project$LlenarSemana$nvcorador2(
				author$project$LlenarSemana$nvcorador1(
					author$project$LlenarSemana$nvcestudioorador(
						author$project$LlenarSemana$presidente(
							author$project$LlenarSemana$nvc2anciano(
								author$project$LlenarSemana$nvc1anciano(model))))))));
};
var author$project$LlenarSemana$elclectoresbiblia = function (model) {
	var narrador = elm$core$List$head(
		A2(
			elm$core$List$filter,
			function (pub) {
				return _Utils_eq(pub.id, model.semanatofill.elcnarradorid);
			},
			model.publicadores));
	var narradorName = function () {
		if (narrador.$ === 'Just') {
			var pub = narrador.a;
			return pub.name;
		} else {
			return '';
		}
	}();
	var currentsemanatofill = model.semanatofill;
	return _Utils_update(
		model,
		{
			semanatofill: _Utils_update(
				currentsemanatofill,
				{elcnarradorname: narradorName})
		});
};
var author$project$LlenarSemana$setpresidenteleccionmaestros = function (model) {
	var semanatofill = function (sf) {
		return sf.smmleccionmaestros ? _Utils_update(
			sf,
			{smm1ayuid: '', smm1ayuname: '', smm1esid: sf.presidenteid, smm1esname: sf.presidentename}) : sf;
	}(model.semanatofill);
	return _Utils_update(
		model,
		{semanatofill: semanatofill});
};
var author$project$LlenarSemana$setpresidentepartevideo = function (model) {
	var semanatofill = function (sf) {
		return sf.smmesvideo4 ? _Utils_update(
			sf,
			{smm4ayuid: '', smm4ayuname: '', smm4esid: sf.presidenteid, smm4esname: sf.presidentename}) : sf;
	}(
		function (sf) {
			return sf.smmesvideo3 ? _Utils_update(
				sf,
				{smm3ayuid: '', smm3ayuname: '', smm3esid: sf.presidenteid, smm3esname: sf.presidentename}) : sf;
		}(
			function (sf) {
				return sf.smmesvideo2 ? _Utils_update(
					sf,
					{smm2ayuid: '', smm2ayuname: '', smm2esid: sf.presidenteid, smm2esname: sf.presidentename}) : sf;
			}(
				function (sf) {
					return sf.smmesvideo1 ? _Utils_update(
						sf,
						{smm1ayuid: '', smm1ayuname: '', smm1esid: sf.presidenteid, smm1esname: sf.presidentename}) : sf;
				}(model.semanatofill))));
	return _Utils_update(
		model,
		{semanatofill: semanatofill});
};
var author$project$LlenarSemana$idAyudantes = _List_fromArray(
	[
		function ($) {
		return $.smm1ayuid;
	},
		function ($) {
		return $.smm2ayuid;
	},
		function ($) {
		return $.smm3ayuid;
	}
	]);
var author$project$LlenarSemana$filterdiscursante = F2(
	function (discursanteid, publicadores) {
		return A2(
			elm$core$List$filter,
			function (pub) {
				return !_Utils_eq(pub.id, discursanteid);
			},
			publicadores);
	});
var author$project$LlenarSemana$filtermismosexoofamiliarsexoopuesto = F2(
	function (publicador, publicadores) {
		if (publicador.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var justpub = publicador.a;
			return A2(
				elm$core$List$filter,
				function (pub) {
					return _Utils_eq(pub.varon, justpub.varon) || ((!_Utils_eq(pub.varon, justpub.varon)) && A2(elm$core$List$member, pub.id, justpub.familiaressexoopuesto));
				},
				publicadores);
		}
	});
var author$project$LlenarSemana$removeprincipiantes = F2(
	function (esprincipiante, publicadores) {
		return esprincipiante ? A2(
			elm$core$List$filter,
			function (pub) {
				return !pub.principiante;
			},
			publicadores) : publicadores;
	});
var author$project$LlenarSemana$setayudante = F6(
	function (getters, semanaid, pubfilter, semanasetter, discursantegetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsemanapasada = A2(
				author$project$LlenarSemana$getlastweekid,
				semanaid,
				author$project$LlenarSemana$anteriores(model));
			var discursanteid = discursantegetter(model.semanatofill);
			var discursante = elm$core$List$head(
				A2(
					elm$core$List$filter,
					function (pub) {
						return _Utils_eq(pub.id, discursanteid);
					},
					model.publicadores));
			var esprincipiante = function () {
				if (discursante.$ === 'Nothing') {
					return false;
				} else {
					var disc = discursante.a;
					return disc.principiante;
				}
			}();
			var esvideo = function () {
				if (discursante.$ === 'Nothing') {
					return false;
				} else {
					var disc = discursante.a;
					return disc.esvideo;
				}
			}();
			return (!esvideo) ? A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A2(
							author$project$LlenarSemana$removeprincipiantes,
							esprincipiante,
							A4(
								author$project$LlenarSemana$removepublicadoresmatching,
								'setayudante',
								getters,
								model.semanatofill,
								A2(
									author$project$LlenarSemana$filterdiscursante,
									discursanteid,
									A2(
										author$project$LlenarSemana$filterpubssolodisponibles,
										model.semanatofill.fechasabado,
										A2(
											author$project$LlenarSemana$recombine,
											idsemanapasada,
											A2(
												elm$core$List$sortBy,
												function (pub) {
													return pub.name;
												},
												A2(
													author$project$LlenarSemana$filterpubs,
													function (pub) {
														return pubfilter(pub);
													},
													A2(author$project$LlenarSemana$filtermismosexoofamiliarsexoopuesto, discursante, model.publicadores))))))))))) : model;
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$getlastweekidwithin = F3(
	function (getter, pubs, semanas) {
		return function (id) {
			if (id.$ === 'Nothing') {
				return '';
			} else {
				var identification = id.a;
				return identification;
			}
		}(
			elm$core$List$head(
				elm$core$List$reverse(
					A2(
						elm$core$List$filter,
						function (id) {
							return A2(
								elm$core$List$member,
								id,
								A2(
									elm$core$List$map,
									function (pub) {
										return pub.id;
									},
									pubs));
						},
						A2(
							elm$core$List$filter,
							function (id) {
								return id !== '';
							},
							A2(elm$core$List$map, getter, semanas))))));
	});
var author$project$LlenarSemana$setsmm1 = F5(
	function (getters, semanaid, pubfilter, semanasetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsmm4semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm4esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm3semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm3esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm2semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm2esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm1semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm1esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			return A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A4(
							author$project$LlenarSemana$removepublicadoresmatching,
							'setsmm1',
							getters,
							model.semanatofill,
							A2(
								elm$core$List$filter,
								function (pub) {
									return !_Utils_eq(pub.id, idsmm4semanapasada);
								},
								A2(
									elm$core$List$filter,
									function (pub) {
										return !_Utils_eq(pub.id, idsmm3semanapasada);
									},
									A2(
										elm$core$List$filter,
										function (pub) {
											return !_Utils_eq(pub.id, idsmm2semanapasada);
										},
										A2(
											elm$core$List$filter,
											function (pub) {
												return !_Utils_eq(pub.id, idsmm1semanapasada);
											},
											A2(
												author$project$LlenarSemana$filterpubssolodisponibles,
												model.semanatofill.fechasabado,
												A2(
													author$project$LlenarSemana$filterpubs,
													function (pub) {
														return function ($) {
															return $.smm1publicador;
														}(pub);
													},
													A2(
														author$project$LlenarSemana$recombine,
														idsmm1semanapasada,
														A2(
															elm$core$List$sortBy,
															function (pub) {
																return pub.name;
															},
															model.publicadores))))))))))));
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$smm1 = function (model) {
	return (model.semanatofill.smm1esid === '') ? A6(
		author$project$LlenarSemana$setayudante,
		elm$core$List$concat(
			_List_fromArray(
				[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
		function ($) {
			return $.smm1ayuid;
		},
		function ($) {
			return $.ayudante;
		},
		function (_n1) {
			var semana = _n1.a;
			var id = _n1.b;
			var name = _n1.c;
			return _Utils_update(
				semana,
				{smm1ayuid: id, smm1ayuname: name});
		},
		function ($) {
			return $.smm1esid;
		},
		A5(
			author$project$LlenarSemana$setsmm1,
			author$project$LlenarSemana$idDiscursos,
			function ($) {
				return $.smm1esid;
			},
			function ($) {
				return $.smm1publicador;
			},
			function (_n0) {
				var semana = _n0.a;
				var id = _n0.b;
				var name = _n0.c;
				return _Utils_update(
					semana,
					{smm1esid: id, smm1esname: name});
			},
			model)) : model;
};
var author$project$LlenarSemana$setsmm2 = F5(
	function (getters, semanaid, pubfilter, semanasetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsmm3semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm3esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm2semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm2esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm1semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm1esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			return A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A4(
							author$project$LlenarSemana$removepublicadoresmatching,
							'setsmm2',
							getters,
							model.semanatofill,
							A2(
								elm$core$List$filter,
								function (pub) {
									return !_Utils_eq(pub.id, model.semanatofill.smm1ayuid);
								},
								A2(
									elm$core$List$filter,
									function (pub) {
										return !_Utils_eq(pub.id, model.semanatofill.smm1esid);
									},
									A2(
										elm$core$List$filter,
										function (pub) {
											return !_Utils_eq(pub.id, idsmm3semanapasada);
										},
										A2(
											elm$core$List$filter,
											function (pub) {
												return !_Utils_eq(pub.id, idsmm2semanapasada);
											},
											A2(
												elm$core$List$filter,
												function (pub) {
													return !_Utils_eq(pub.id, idsmm1semanapasada);
												},
												A2(
													author$project$LlenarSemana$filterpubssolodisponibles,
													model.semanatofill.fechasabado,
													A2(
														author$project$LlenarSemana$filterpubs,
														function (pub) {
															return function ($) {
																return $.smm1publicador;
															}(pub);
														},
														A2(
															author$project$LlenarSemana$recombine,
															idsmm2semanapasada,
															A2(
																elm$core$List$sortBy,
																function (pub) {
																	return pub.name;
																},
																model.publicadores)))))))))))));
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$smmdiscurso = F3(
	function (getter, setter, model) {
		return A7(
			author$project$LlenarSemana$setpublicador,
			'smmdiscurso',
			2,
			author$project$LlenarSemana$idDiscursos,
			getter,
			function ($) {
				return $.smmdiscurso;
			},
			setter,
			model);
	});
var author$project$LlenarSemana$smm2 = function (model) {
	return (model.semanatofill.smm2esid === '') ? (model.semanatofill.smmtieneayudante2 ? A6(
		author$project$LlenarSemana$setayudante,
		elm$core$List$concat(
			_List_fromArray(
				[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
		function ($) {
			return $.smm2ayuid;
		},
		function ($) {
			return $.ayudante;
		},
		function (_n1) {
			var semana = _n1.a;
			var id = _n1.b;
			var name = _n1.c;
			return _Utils_update(
				semana,
				{smm2ayuid: id, smm2ayuname: name});
		},
		function ($) {
			return $.smm2esid;
		},
		A5(
			author$project$LlenarSemana$setsmm2,
			author$project$LlenarSemana$idDiscursos,
			function ($) {
				return $.smm2esid;
			},
			function ($) {
				return $.smm1publicador;
			},
			function (_n0) {
				var semana = _n0.a;
				var id = _n0.b;
				var name = _n0.c;
				return _Utils_update(
					semana,
					{smm2esid: id, smm2esname: name});
			},
			model)) : A3(
		author$project$LlenarSemana$smmdiscurso,
		function ($) {
			return $.smm2esid;
		},
		function (_n2) {
			var semana = _n2.a;
			var id = _n2.b;
			var name = _n2.c;
			return _Utils_update(
				semana,
				{smm2esid: id, smm2esname: name});
		},
		model)) : model;
};
var author$project$LlenarSemana$setsmm3 = F5(
	function (getters, semanaid, pubfilter, semanasetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsmm3semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm3esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm2semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm2esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm1semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm1esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			return A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A4(
							author$project$LlenarSemana$removepublicadoresmatching,
							'setsmm3',
							getters,
							model.semanatofill,
							A2(
								elm$core$List$filter,
								function (pub) {
									return !_Utils_eq(pub.id, model.semanatofill.smm2ayuid);
								},
								A2(
									elm$core$List$filter,
									function (pub) {
										return !_Utils_eq(pub.id, model.semanatofill.smm2esid);
									},
									A2(
										elm$core$List$filter,
										function (pub) {
											return !_Utils_eq(pub.id, model.semanatofill.smm1ayuid);
										},
										A2(
											elm$core$List$filter,
											function (pub) {
												return !_Utils_eq(pub.id, model.semanatofill.smm1esid);
											},
											A2(
												elm$core$List$filter,
												function (pub) {
													return !_Utils_eq(pub.id, idsmm3semanapasada);
												},
												A2(
													elm$core$List$filter,
													function (pub) {
														return !_Utils_eq(pub.id, idsmm2semanapasada);
													},
													A2(
														elm$core$List$filter,
														function (pub) {
															return !_Utils_eq(pub.id, idsmm1semanapasada);
														},
														A2(
															author$project$LlenarSemana$filterpubssolodisponibles,
															model.semanatofill.fechasabado,
															A2(
																author$project$LlenarSemana$filterpubs,
																function (pub) {
																	return pubfilter(pub);
																},
																A2(
																	author$project$LlenarSemana$recombine,
																	idsmm3semanapasada,
																	A2(
																		elm$core$List$sortBy,
																		function (pub) {
																			return pub.name;
																		},
																		model.publicadores)))))))))))))));
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$smm3 = function (model) {
	return (model.semanatofill.smm3esid === '') ? (model.semanatofill.smmtieneayudante3 ? A6(
		author$project$LlenarSemana$setayudante,
		elm$core$List$concat(
			_List_fromArray(
				[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
		function ($) {
			return $.smm3ayuid;
		},
		function ($) {
			return $.ayudante;
		},
		function (_n1) {
			var semana = _n1.a;
			var id = _n1.b;
			var name = _n1.c;
			return _Utils_update(
				semana,
				{smm3ayuid: id, smm3ayuname: name});
		},
		function ($) {
			return $.smm3esid;
		},
		A5(
			author$project$LlenarSemana$setsmm3,
			elm$core$List$concat(
				_List_fromArray(
					[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
			function ($) {
				return $.smm3esid;
			},
			function ($) {
				return $.smm3publicador;
			},
			function (_n0) {
				var semana = _n0.a;
				var id = _n0.b;
				var name = _n0.c;
				return _Utils_update(
					semana,
					{smm3esid: id, smm3esname: name});
			},
			model)) : A3(
		author$project$LlenarSemana$smmdiscurso,
		function ($) {
			return $.smm3esid;
		},
		function (_n2) {
			var semana = _n2.a;
			var id = _n2.b;
			var name = _n2.c;
			return _Utils_update(
				semana,
				{smm3esid: id, smm3esname: name});
		},
		model)) : model;
};
var author$project$LlenarSemana$setsmm4 = F5(
	function (getters, semanaid, pubfilter, semanasetter, model) {
		if (semanaid(model.semanatofill) === '') {
			var idsmm4semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm4esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm2semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm2esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			var idsmm1semanapasada = A3(
				author$project$LlenarSemana$getlastweekidwithin,
				function ($) {
					return $.smm1esid;
				},
				model.publicadores,
				author$project$LlenarSemana$anteriores(model));
			return A3(
				author$project$LlenarSemana$setasignments,
				semanasetter,
				model,
				author$project$LlenarSemana$choosefirst(
					A2(
						author$project$LlenarSemana$removeVideoIfGreaterEqualThan,
						2,
						A4(
							author$project$LlenarSemana$removepublicadoresmatching,
							'setsmm4',
							getters,
							model.semanatofill,
							A2(
								elm$core$List$filter,
								function (pub) {
									return !_Utils_eq(pub.id, model.semanatofill.smm2ayuid);
								},
								A2(
									elm$core$List$filter,
									function (pub) {
										return !_Utils_eq(pub.id, model.semanatofill.smm2esid);
									},
									A2(
										elm$core$List$filter,
										function (pub) {
											return !_Utils_eq(pub.id, model.semanatofill.smm1ayuid);
										},
										A2(
											elm$core$List$filter,
											function (pub) {
												return !_Utils_eq(pub.id, model.semanatofill.smm1esid);
											},
											A2(
												elm$core$List$filter,
												function (pub) {
													return !_Utils_eq(pub.id, idsmm4semanapasada);
												},
												A2(
													elm$core$List$filter,
													function (pub) {
														return !_Utils_eq(pub.id, idsmm2semanapasada);
													},
													A2(
														elm$core$List$filter,
														function (pub) {
															return !_Utils_eq(pub.id, idsmm1semanapasada);
														},
														A2(
															author$project$LlenarSemana$filterpubssolodisponibles,
															model.semanatofill.fechasabado,
															A2(
																author$project$LlenarSemana$filterpubs,
																function (pub) {
																	return pubfilter(pub);
																},
																A2(
																	author$project$LlenarSemana$recombine,
																	idsmm4semanapasada,
																	A2(
																		elm$core$List$sortBy,
																		function (pub) {
																			return pub.name;
																		},
																		model.publicadores)))))))))))))));
		} else {
			return model;
		}
	});
var author$project$LlenarSemana$smm4 = function (model) {
	return (model.semanatofill.smm4esid === '') ? (model.semanatofill.smmtieneayudante4 ? A6(
		author$project$LlenarSemana$setayudante,
		elm$core$List$concat(
			_List_fromArray(
				[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
		function ($) {
			return $.smm4ayuid;
		},
		function ($) {
			return $.ayudante;
		},
		function (_n1) {
			var semana = _n1.a;
			var id = _n1.b;
			var name = _n1.c;
			return _Utils_update(
				semana,
				{smm4ayuid: id, smm4ayuname: name});
		},
		function ($) {
			return $.smm4esid;
		},
		A5(
			author$project$LlenarSemana$setsmm4,
			elm$core$List$concat(
				_List_fromArray(
					[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idAyudantes])),
			function ($) {
				return $.smm4esid;
			},
			function ($) {
				return $.smm4publicador;
			},
			function (_n0) {
				var semana = _n0.a;
				var id = _n0.b;
				var name = _n0.c;
				return _Utils_update(
					semana,
					{smm4esid: id, smm4esname: name});
			},
			model)) : A3(
		author$project$LlenarSemana$smmdiscurso,
		function ($) {
			return $.smm4esid;
		},
		function (_n2) {
			var semana = _n2.a;
			var id = _n2.b;
			var name = _n2.c;
			return _Utils_update(
				semana,
				{smm4esid: id, smm4esname: name});
		},
		model)) : model;
};
var author$project$LlenarSemana$tblectorbiblia = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'tblectorbiblia',
		1,
		author$project$LlenarSemana$idDiscursos,
		function ($) {
			return $.tblectorid;
		},
		function ($) {
			return $.lecturabiblia;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{tblectorid: id, tblectorname: name});
		},
		model);
};
var author$project$LlenarSemana$estudiantes = function (model) {
	return author$project$LlenarSemana$smm4(
		author$project$LlenarSemana$smm3(
			author$project$LlenarSemana$smm2(
				author$project$LlenarSemana$smm1(
					author$project$LlenarSemana$tblectorbiblia(
						author$project$LlenarSemana$setpresidenteleccionmaestros(
							author$project$LlenarSemana$setpresidentepartevideo(model)))))));
};
var author$project$LlenarSemana$lectorestudiocongregacion = function (model) {
	return A7(
		author$project$LlenarSemana$setpublicador,
		'lectorestudiocongregacion',
		2,
		elm$core$List$concat(
			_List_fromArray(
				[author$project$LlenarSemana$idDiscursos, author$project$LlenarSemana$idLectores])),
		function ($) {
			return $.nvcestudiolectorid;
		},
		function ($) {
			return $.lectorestudiocongregacion;
		},
		function (_n0) {
			var semana = _n0.a;
			var id = _n0.b;
			var name = _n0.c;
			return _Utils_update(
				semana,
				{nvcestudiolectorid: id, nvcestudiolectorname: name});
		},
		model);
};
var author$project$LlenarSemana$lectores = function (model) {
	return author$project$LlenarSemana$lectorestudiocongregacion(model);
};
var author$project$LlenarSemana$getcancion = F3(
	function (canciones, publicadores, num) {
		var maybeCancion = elm$core$List$head(
			A2(
				elm$core$List$filter,
				function (cancion) {
					return _Utils_eq(cancion.num, num);
				},
				canciones));
		var _n0 = function () {
			if (maybeCancion.$ === 'Nothing') {
				return _Utils_Tuple3('', '', '');
			} else {
				var cancion = maybeCancion.a;
				return _Utils_Tuple3(cancion.idasignado, cancion.tema, cancion.versiculo);
			}
		}();
		var id1 = _n0.a;
		var tema1 = _n0.b;
		var versiculo1 = _n0.c;
		var publicador = elm$core$List$head(
			A2(
				elm$core$List$filter,
				function (pub) {
					return _Utils_eq(pub.id, id1);
				},
				publicadores));
		var nombre1 = function () {
			if (publicador.$ === 'Nothing') {
				return '';
			} else {
				var val = publicador.a;
				return val.name;
			}
		}();
		return {id: id1, nombre: nombre1, tema: tema1, versiculo: versiculo1};
	});
var author$project$LlenarSemana$updatesemantofill = F2(
	function (semanasetter, model) {
		var semana = semanasetter(model.semanatofill);
		return _Utils_update(
			model,
			{semanatofill: semana});
	});
var author$project$LlenarSemana$llenarcanciones = function (model) {
	var scp3 = A3(author$project$LlenarSemana$getcancion, model.canciones, model.publicadores, model.semanatofill.cancion3);
	var scp2 = A3(author$project$LlenarSemana$getcancion, model.canciones, model.publicadores, model.semanatofill.cancion2);
	var scp1 = A3(author$project$LlenarSemana$getcancion, model.canciones, model.publicadores, model.semanatofill.cancion1);
	var dcp2 = A3(author$project$LlenarSemana$getcancion, model.canciones, model.publicadores, model.semanatofill.domcancion3);
	var dcp1 = A3(author$project$LlenarSemana$getcancion, model.canciones, model.publicadores, model.semanatofill.domcancion2);
	var semanasetter = function (semana) {
		return _Utils_update(
			semana,
			{cancion1id: scp1.id, cancion1name: scp1.nombre, cancion1tema: scp1.tema, cancion1versiculo: scp1.versiculo, cancion2id: scp2.id, cancion2name: scp2.nombre, cancion2tema: scp2.tema, cancion2versiculo: scp2.versiculo, cancion3id: scp3.id, cancion3name: scp3.nombre, cancion3tema: scp3.tema, cancion3versiculo: scp3.versiculo, domcancion2id: dcp1.id, domcancion2name: dcp1.nombre, domcancion2tema: dcp1.tema, domcancion2versiculo: dcp1.versiculo, domcancion3id: dcp2.id, domcancion3name: dcp2.nombre, domcancion3tema: dcp2.tema, domcancion3versiculo: dcp2.versiculo});
	};
	return A2(author$project$LlenarSemana$updatesemantofill, semanasetter, model);
};
var author$project$LlenarSemana$llenarsemana = function (model) {
	return (!model.semanatofill.sabasamblea) ? author$project$LlenarSemana$elclectoresbiblia(
		author$project$LlenarSemana$llenarcanciones(
			author$project$LlenarSemana$apoyo(
				author$project$LlenarSemana$lectores(
					author$project$LlenarSemana$estudiantes(
						author$project$LlenarSemana$discursos(model)))))) : model;
};
var author$project$LlenarSemana$llenarsemanas = function (model) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (sem, modelaccum) {
				return function (modellenado) {
					return _Utils_update(
						modellenado,
						{
							semanasllenados: _Utils_ap(
								modellenado.semanasllenados,
								_List_fromArray(
									[modellenado.semanatofill]))
						});
				}(
					author$project$LlenarSemana$llenarsemana(
						_Utils_update(
							modelaccum,
							{semanatofill: sem})));
			}),
		model,
		model.semanastofill);
};
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Ports$fillSemanaCallBack = _Platform_outgoingPort(
	'fillSemanaCallBack',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'aparatosid',
					elm$json$Json$Encode$string($.aparatosid)),
					_Utils_Tuple2(
					'aparatosname',
					elm$json$Json$Encode$string($.aparatosname)),
					_Utils_Tuple2(
					'camaraid',
					elm$json$Json$Encode$string($.camaraid)),
					_Utils_Tuple2(
					'camaraname',
					elm$json$Json$Encode$string($.camaraname)),
					_Utils_Tuple2(
					'cancion1',
					elm$json$Json$Encode$int($.cancion1)),
					_Utils_Tuple2(
					'cancion1id',
					elm$json$Json$Encode$string($.cancion1id)),
					_Utils_Tuple2(
					'cancion1name',
					elm$json$Json$Encode$string($.cancion1name)),
					_Utils_Tuple2(
					'cancion1tema',
					elm$json$Json$Encode$string($.cancion1tema)),
					_Utils_Tuple2(
					'cancion1versiculo',
					elm$json$Json$Encode$string($.cancion1versiculo)),
					_Utils_Tuple2(
					'cancion2',
					elm$json$Json$Encode$int($.cancion2)),
					_Utils_Tuple2(
					'cancion2id',
					elm$json$Json$Encode$string($.cancion2id)),
					_Utils_Tuple2(
					'cancion2name',
					elm$json$Json$Encode$string($.cancion2name)),
					_Utils_Tuple2(
					'cancion2tema',
					elm$json$Json$Encode$string($.cancion2tema)),
					_Utils_Tuple2(
					'cancion2versiculo',
					elm$json$Json$Encode$string($.cancion2versiculo)),
					_Utils_Tuple2(
					'cancion3',
					elm$json$Json$Encode$int($.cancion3)),
					_Utils_Tuple2(
					'cancion3id',
					elm$json$Json$Encode$string($.cancion3id)),
					_Utils_Tuple2(
					'cancion3name',
					elm$json$Json$Encode$string($.cancion3name)),
					_Utils_Tuple2(
					'cancion3tema',
					elm$json$Json$Encode$string($.cancion3tema)),
					_Utils_Tuple2(
					'cancion3versiculo',
					elm$json$Json$Encode$string($.cancion3versiculo)),
					_Utils_Tuple2(
					'consejolector',
					elm$json$Json$Encode$int($.consejolector)),
					_Utils_Tuple2(
					'creado',
					elm$json$Json$Encode$int($.creado)),
					_Utils_Tuple2(
					'cronometroid',
					elm$json$Json$Encode$string($.cronometroid)),
					_Utils_Tuple2(
					'cronometroname',
					elm$json$Json$Encode$string($.cronometroname)),
					_Utils_Tuple2(
					'domasamblea',
					elm$json$Json$Encode$bool($.domasamblea)),
					_Utils_Tuple2(
					'domasambleamensage',
					elm$json$Json$Encode$string($.domasambleamensage)),
					_Utils_Tuple2(
					'domcancion2',
					elm$json$Json$Encode$int($.domcancion2)),
					_Utils_Tuple2(
					'domcancion2id',
					elm$json$Json$Encode$string($.domcancion2id)),
					_Utils_Tuple2(
					'domcancion2name',
					elm$json$Json$Encode$string($.domcancion2name)),
					_Utils_Tuple2(
					'domcancion2tema',
					elm$json$Json$Encode$string($.domcancion2tema)),
					_Utils_Tuple2(
					'domcancion2versiculo',
					elm$json$Json$Encode$string($.domcancion2versiculo)),
					_Utils_Tuple2(
					'domcancion3',
					elm$json$Json$Encode$int($.domcancion3)),
					_Utils_Tuple2(
					'domcancion3id',
					elm$json$Json$Encode$string($.domcancion3id)),
					_Utils_Tuple2(
					'domcancion3name',
					elm$json$Json$Encode$string($.domcancion3name)),
					_Utils_Tuple2(
					'domcancion3tema',
					elm$json$Json$Encode$string($.domcancion3tema)),
					_Utils_Tuple2(
					'domcancion3versiculo',
					elm$json$Json$Encode$string($.domcancion3versiculo)),
					_Utils_Tuple2(
					'domdiscursante',
					elm$json$Json$Encode$string($.domdiscursante)),
					_Utils_Tuple2(
					'domhaydiscursante',
					elm$json$Json$Encode$bool($.domhaydiscursante)),
					_Utils_Tuple2(
					'dompresidenteid',
					elm$json$Json$Encode$string($.dompresidenteid)),
					_Utils_Tuple2(
					'dompresidentename',
					elm$json$Json$Encode$string($.dompresidentename)),
					_Utils_Tuple2(
					'elcnarradorid',
					elm$json$Json$Encode$string($.elcnarradorid)),
					_Utils_Tuple2(
					'elcnarradorname',
					elm$json$Json$Encode$string($.elcnarradorname)),
					_Utils_Tuple2(
					'elcpersonajes',
					elm$json$Json$Encode$string($.elcpersonajes)),
					_Utils_Tuple2(
					'elcversiculos',
					elm$json$Json$Encode$string($.elcversiculos)),
					_Utils_Tuple2(
					'fechadomingo',
					elm$json$Json$Encode$int($.fechadomingo)),
					_Utils_Tuple2(
					'fechasabado',
					elm$json$Json$Encode$int($.fechasabado)),
					_Utils_Tuple2(
					'id',
					elm$json$Json$Encode$string($.id)),
					_Utils_Tuple2(
					'lecturaversiculos',
					elm$json$Json$Encode$string($.lecturaversiculos)),
					_Utils_Tuple2(
					'modificado',
					elm$json$Json$Encode$int($.modificado)),
					_Utils_Tuple2(
					'nvcanciano1',
					elm$json$Json$Encode$bool($.nvcanciano1)),
					_Utils_Tuple2(
					'nvcanciano2',
					elm$json$Json$Encode$bool($.nvcanciano2)),
					_Utils_Tuple2(
					'nvcestudiolectorid',
					elm$json$Json$Encode$string($.nvcestudiolectorid)),
					_Utils_Tuple2(
					'nvcestudiolectorname',
					elm$json$Json$Encode$string($.nvcestudiolectorname)),
					_Utils_Tuple2(
					'nvcestudiooradorid',
					elm$json$Json$Encode$string($.nvcestudiooradorid)),
					_Utils_Tuple2(
					'nvcestudiooradorname',
					elm$json$Json$Encode$string($.nvcestudiooradorname)),
					_Utils_Tuple2(
					'nvcmins1',
					elm$json$Json$Encode$int($.nvcmins1)),
					_Utils_Tuple2(
					'nvcmins2',
					elm$json$Json$Encode$int($.nvcmins2)),
					_Utils_Tuple2(
					'nvcorador1id',
					elm$json$Json$Encode$string($.nvcorador1id)),
					_Utils_Tuple2(
					'nvcorador1name',
					elm$json$Json$Encode$string($.nvcorador1name)),
					_Utils_Tuple2(
					'nvcorador2id',
					elm$json$Json$Encode$string($.nvcorador2id)),
					_Utils_Tuple2(
					'nvcorador2name',
					elm$json$Json$Encode$string($.nvcorador2name)),
					_Utils_Tuple2(
					'nvctitulo1',
					elm$json$Json$Encode$string($.nvctitulo1)),
					_Utils_Tuple2(
					'nvctitulo2',
					elm$json$Json$Encode$string($.nvctitulo2)),
					_Utils_Tuple2(
					'oracion1id',
					elm$json$Json$Encode$string($.oracion1id)),
					_Utils_Tuple2(
					'oracion1name',
					elm$json$Json$Encode$string($.oracion1name)),
					_Utils_Tuple2(
					'oracion2id',
					elm$json$Json$Encode$string($.oracion2id)),
					_Utils_Tuple2(
					'oracion2name',
					elm$json$Json$Encode$string($.oracion2name)),
					_Utils_Tuple2(
					'presentacionesmesid',
					elm$json$Json$Encode$string($.presentacionesmesid)),
					_Utils_Tuple2(
					'presentacionesmesname',
					elm$json$Json$Encode$string($.presentacionesmesname)),
					_Utils_Tuple2(
					'presidenteid',
					elm$json$Json$Encode$string($.presidenteid)),
					_Utils_Tuple2(
					'presidentename',
					elm$json$Json$Encode$string($.presidentename)),
					_Utils_Tuple2(
					'sabasamblea',
					elm$json$Json$Encode$bool($.sabasamblea)),
					_Utils_Tuple2(
					'sabasambleamensage',
					elm$json$Json$Encode$string($.sabasambleamensage)),
					_Utils_Tuple2(
					'smm1ayuid',
					elm$json$Json$Encode$string($.smm1ayuid)),
					_Utils_Tuple2(
					'smm1ayuname',
					elm$json$Json$Encode$string($.smm1ayuname)),
					_Utils_Tuple2(
					'smm1esid',
					elm$json$Json$Encode$string($.smm1esid)),
					_Utils_Tuple2(
					'smm1esname',
					elm$json$Json$Encode$string($.smm1esname)),
					_Utils_Tuple2(
					'smm2ayuid',
					elm$json$Json$Encode$string($.smm2ayuid)),
					_Utils_Tuple2(
					'smm2ayuname',
					elm$json$Json$Encode$string($.smm2ayuname)),
					_Utils_Tuple2(
					'smm2esid',
					elm$json$Json$Encode$string($.smm2esid)),
					_Utils_Tuple2(
					'smm2esname',
					elm$json$Json$Encode$string($.smm2esname)),
					_Utils_Tuple2(
					'smm3ayuid',
					elm$json$Json$Encode$string($.smm3ayuid)),
					_Utils_Tuple2(
					'smm3ayuname',
					elm$json$Json$Encode$string($.smm3ayuname)),
					_Utils_Tuple2(
					'smm3esid',
					elm$json$Json$Encode$string($.smm3esid)),
					_Utils_Tuple2(
					'smm3esname',
					elm$json$Json$Encode$string($.smm3esname)),
					_Utils_Tuple2(
					'smm4ayuid',
					elm$json$Json$Encode$string($.smm4ayuid)),
					_Utils_Tuple2(
					'smm4ayuname',
					elm$json$Json$Encode$string($.smm4ayuname)),
					_Utils_Tuple2(
					'smm4esid',
					elm$json$Json$Encode$string($.smm4esid)),
					_Utils_Tuple2(
					'smm4esname',
					elm$json$Json$Encode$string($.smm4esname)),
					_Utils_Tuple2(
					'smmconsejo1',
					elm$json$Json$Encode$int($.smmconsejo1)),
					_Utils_Tuple2(
					'smmconsejo2',
					elm$json$Json$Encode$int($.smmconsejo2)),
					_Utils_Tuple2(
					'smmconsejo3',
					elm$json$Json$Encode$int($.smmconsejo3)),
					_Utils_Tuple2(
					'smmconsejo4',
					elm$json$Json$Encode$int($.smmconsejo4)),
					_Utils_Tuple2(
					'smmesvideo1',
					elm$json$Json$Encode$bool($.smmesvideo1)),
					_Utils_Tuple2(
					'smmesvideo2',
					elm$json$Json$Encode$bool($.smmesvideo2)),
					_Utils_Tuple2(
					'smmesvideo3',
					elm$json$Json$Encode$bool($.smmesvideo3)),
					_Utils_Tuple2(
					'smmesvideo4',
					elm$json$Json$Encode$bool($.smmesvideo4)),
					_Utils_Tuple2(
					'smmleccionmaestros',
					elm$json$Json$Encode$bool($.smmleccionmaestros)),
					_Utils_Tuple2(
					'smmmin1',
					elm$json$Json$Encode$int($.smmmin1)),
					_Utils_Tuple2(
					'smmmin2',
					elm$json$Json$Encode$int($.smmmin2)),
					_Utils_Tuple2(
					'smmmin3',
					elm$json$Json$Encode$int($.smmmin3)),
					_Utils_Tuple2(
					'smmmin4',
					elm$json$Json$Encode$int($.smmmin4)),
					_Utils_Tuple2(
					'smmtema1',
					elm$json$Json$Encode$string($.smmtema1)),
					_Utils_Tuple2(
					'smmtema2',
					elm$json$Json$Encode$string($.smmtema2)),
					_Utils_Tuple2(
					'smmtema3',
					elm$json$Json$Encode$string($.smmtema3)),
					_Utils_Tuple2(
					'smmtema4',
					elm$json$Json$Encode$string($.smmtema4)),
					_Utils_Tuple2(
					'smmtieneayudante1',
					elm$json$Json$Encode$bool($.smmtieneayudante1)),
					_Utils_Tuple2(
					'smmtieneayudante2',
					elm$json$Json$Encode$bool($.smmtieneayudante2)),
					_Utils_Tuple2(
					'smmtieneayudante3',
					elm$json$Json$Encode$bool($.smmtieneayudante3)),
					_Utils_Tuple2(
					'smmtieneayudante4',
					elm$json$Json$Encode$bool($.smmtieneayudante4)),
					_Utils_Tuple2(
					'starthour',
					elm$json$Json$Encode$int($.starthour)),
					_Utils_Tuple2(
					'startminute',
					elm$json$Json$Encode$int($.startminute)),
					_Utils_Tuple2(
					'tb1oradorid',
					elm$json$Json$Encode$string($.tb1oradorid)),
					_Utils_Tuple2(
					'tb1oradorname',
					elm$json$Json$Encode$string($.tb1oradorname)),
					_Utils_Tuple2(
					'tb1titulo',
					elm$json$Json$Encode$string($.tb1titulo)),
					_Utils_Tuple2(
					'tblectorid',
					elm$json$Json$Encode$string($.tblectorid)),
					_Utils_Tuple2(
					'tblectorname',
					elm$json$Json$Encode$string($.tblectorname)),
					_Utils_Tuple2(
					'tbperlasoradorid',
					elm$json$Json$Encode$string($.tbperlasoradorid)),
					_Utils_Tuple2(
					'tbperlasoradorname',
					elm$json$Json$Encode$string($.tbperlasoradorname))
				]));
	});
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var author$project$Ports$fillSemanasCallBack = _Platform_outgoingPort(
	'fillSemanasCallBack',
	elm$json$Json$Encode$list(
		function ($) {
			return elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'aparatosid',
						elm$json$Json$Encode$string($.aparatosid)),
						_Utils_Tuple2(
						'aparatosname',
						elm$json$Json$Encode$string($.aparatosname)),
						_Utils_Tuple2(
						'camaraid',
						elm$json$Json$Encode$string($.camaraid)),
						_Utils_Tuple2(
						'camaraname',
						elm$json$Json$Encode$string($.camaraname)),
						_Utils_Tuple2(
						'cancion1',
						elm$json$Json$Encode$int($.cancion1)),
						_Utils_Tuple2(
						'cancion1id',
						elm$json$Json$Encode$string($.cancion1id)),
						_Utils_Tuple2(
						'cancion1name',
						elm$json$Json$Encode$string($.cancion1name)),
						_Utils_Tuple2(
						'cancion1tema',
						elm$json$Json$Encode$string($.cancion1tema)),
						_Utils_Tuple2(
						'cancion1versiculo',
						elm$json$Json$Encode$string($.cancion1versiculo)),
						_Utils_Tuple2(
						'cancion2',
						elm$json$Json$Encode$int($.cancion2)),
						_Utils_Tuple2(
						'cancion2id',
						elm$json$Json$Encode$string($.cancion2id)),
						_Utils_Tuple2(
						'cancion2name',
						elm$json$Json$Encode$string($.cancion2name)),
						_Utils_Tuple2(
						'cancion2tema',
						elm$json$Json$Encode$string($.cancion2tema)),
						_Utils_Tuple2(
						'cancion2versiculo',
						elm$json$Json$Encode$string($.cancion2versiculo)),
						_Utils_Tuple2(
						'cancion3',
						elm$json$Json$Encode$int($.cancion3)),
						_Utils_Tuple2(
						'cancion3id',
						elm$json$Json$Encode$string($.cancion3id)),
						_Utils_Tuple2(
						'cancion3name',
						elm$json$Json$Encode$string($.cancion3name)),
						_Utils_Tuple2(
						'cancion3tema',
						elm$json$Json$Encode$string($.cancion3tema)),
						_Utils_Tuple2(
						'cancion3versiculo',
						elm$json$Json$Encode$string($.cancion3versiculo)),
						_Utils_Tuple2(
						'consejolector',
						elm$json$Json$Encode$int($.consejolector)),
						_Utils_Tuple2(
						'creado',
						elm$json$Json$Encode$int($.creado)),
						_Utils_Tuple2(
						'cronometroid',
						elm$json$Json$Encode$string($.cronometroid)),
						_Utils_Tuple2(
						'cronometroname',
						elm$json$Json$Encode$string($.cronometroname)),
						_Utils_Tuple2(
						'domasamblea',
						elm$json$Json$Encode$bool($.domasamblea)),
						_Utils_Tuple2(
						'domasambleamensage',
						elm$json$Json$Encode$string($.domasambleamensage)),
						_Utils_Tuple2(
						'domcancion2',
						elm$json$Json$Encode$int($.domcancion2)),
						_Utils_Tuple2(
						'domcancion2id',
						elm$json$Json$Encode$string($.domcancion2id)),
						_Utils_Tuple2(
						'domcancion2name',
						elm$json$Json$Encode$string($.domcancion2name)),
						_Utils_Tuple2(
						'domcancion2tema',
						elm$json$Json$Encode$string($.domcancion2tema)),
						_Utils_Tuple2(
						'domcancion2versiculo',
						elm$json$Json$Encode$string($.domcancion2versiculo)),
						_Utils_Tuple2(
						'domcancion3',
						elm$json$Json$Encode$int($.domcancion3)),
						_Utils_Tuple2(
						'domcancion3id',
						elm$json$Json$Encode$string($.domcancion3id)),
						_Utils_Tuple2(
						'domcancion3name',
						elm$json$Json$Encode$string($.domcancion3name)),
						_Utils_Tuple2(
						'domcancion3tema',
						elm$json$Json$Encode$string($.domcancion3tema)),
						_Utils_Tuple2(
						'domcancion3versiculo',
						elm$json$Json$Encode$string($.domcancion3versiculo)),
						_Utils_Tuple2(
						'domdiscursante',
						elm$json$Json$Encode$string($.domdiscursante)),
						_Utils_Tuple2(
						'domhaydiscursante',
						elm$json$Json$Encode$bool($.domhaydiscursante)),
						_Utils_Tuple2(
						'dompresidenteid',
						elm$json$Json$Encode$string($.dompresidenteid)),
						_Utils_Tuple2(
						'dompresidentename',
						elm$json$Json$Encode$string($.dompresidentename)),
						_Utils_Tuple2(
						'elcnarradorid',
						elm$json$Json$Encode$string($.elcnarradorid)),
						_Utils_Tuple2(
						'elcnarradorname',
						elm$json$Json$Encode$string($.elcnarradorname)),
						_Utils_Tuple2(
						'elcpersonajes',
						elm$json$Json$Encode$string($.elcpersonajes)),
						_Utils_Tuple2(
						'elcversiculos',
						elm$json$Json$Encode$string($.elcversiculos)),
						_Utils_Tuple2(
						'fechadomingo',
						elm$json$Json$Encode$int($.fechadomingo)),
						_Utils_Tuple2(
						'fechasabado',
						elm$json$Json$Encode$int($.fechasabado)),
						_Utils_Tuple2(
						'id',
						elm$json$Json$Encode$string($.id)),
						_Utils_Tuple2(
						'lecturaversiculos',
						elm$json$Json$Encode$string($.lecturaversiculos)),
						_Utils_Tuple2(
						'modificado',
						elm$json$Json$Encode$int($.modificado)),
						_Utils_Tuple2(
						'nvcanciano1',
						elm$json$Json$Encode$bool($.nvcanciano1)),
						_Utils_Tuple2(
						'nvcanciano2',
						elm$json$Json$Encode$bool($.nvcanciano2)),
						_Utils_Tuple2(
						'nvcestudiolectorid',
						elm$json$Json$Encode$string($.nvcestudiolectorid)),
						_Utils_Tuple2(
						'nvcestudiolectorname',
						elm$json$Json$Encode$string($.nvcestudiolectorname)),
						_Utils_Tuple2(
						'nvcestudiooradorid',
						elm$json$Json$Encode$string($.nvcestudiooradorid)),
						_Utils_Tuple2(
						'nvcestudiooradorname',
						elm$json$Json$Encode$string($.nvcestudiooradorname)),
						_Utils_Tuple2(
						'nvcmins1',
						elm$json$Json$Encode$int($.nvcmins1)),
						_Utils_Tuple2(
						'nvcmins2',
						elm$json$Json$Encode$int($.nvcmins2)),
						_Utils_Tuple2(
						'nvcorador1id',
						elm$json$Json$Encode$string($.nvcorador1id)),
						_Utils_Tuple2(
						'nvcorador1name',
						elm$json$Json$Encode$string($.nvcorador1name)),
						_Utils_Tuple2(
						'nvcorador2id',
						elm$json$Json$Encode$string($.nvcorador2id)),
						_Utils_Tuple2(
						'nvcorador2name',
						elm$json$Json$Encode$string($.nvcorador2name)),
						_Utils_Tuple2(
						'nvctitulo1',
						elm$json$Json$Encode$string($.nvctitulo1)),
						_Utils_Tuple2(
						'nvctitulo2',
						elm$json$Json$Encode$string($.nvctitulo2)),
						_Utils_Tuple2(
						'oracion1id',
						elm$json$Json$Encode$string($.oracion1id)),
						_Utils_Tuple2(
						'oracion1name',
						elm$json$Json$Encode$string($.oracion1name)),
						_Utils_Tuple2(
						'oracion2id',
						elm$json$Json$Encode$string($.oracion2id)),
						_Utils_Tuple2(
						'oracion2name',
						elm$json$Json$Encode$string($.oracion2name)),
						_Utils_Tuple2(
						'presentacionesmesid',
						elm$json$Json$Encode$string($.presentacionesmesid)),
						_Utils_Tuple2(
						'presentacionesmesname',
						elm$json$Json$Encode$string($.presentacionesmesname)),
						_Utils_Tuple2(
						'presidenteid',
						elm$json$Json$Encode$string($.presidenteid)),
						_Utils_Tuple2(
						'presidentename',
						elm$json$Json$Encode$string($.presidentename)),
						_Utils_Tuple2(
						'sabasamblea',
						elm$json$Json$Encode$bool($.sabasamblea)),
						_Utils_Tuple2(
						'sabasambleamensage',
						elm$json$Json$Encode$string($.sabasambleamensage)),
						_Utils_Tuple2(
						'smm1ayuid',
						elm$json$Json$Encode$string($.smm1ayuid)),
						_Utils_Tuple2(
						'smm1ayuname',
						elm$json$Json$Encode$string($.smm1ayuname)),
						_Utils_Tuple2(
						'smm1esid',
						elm$json$Json$Encode$string($.smm1esid)),
						_Utils_Tuple2(
						'smm1esname',
						elm$json$Json$Encode$string($.smm1esname)),
						_Utils_Tuple2(
						'smm2ayuid',
						elm$json$Json$Encode$string($.smm2ayuid)),
						_Utils_Tuple2(
						'smm2ayuname',
						elm$json$Json$Encode$string($.smm2ayuname)),
						_Utils_Tuple2(
						'smm2esid',
						elm$json$Json$Encode$string($.smm2esid)),
						_Utils_Tuple2(
						'smm2esname',
						elm$json$Json$Encode$string($.smm2esname)),
						_Utils_Tuple2(
						'smm3ayuid',
						elm$json$Json$Encode$string($.smm3ayuid)),
						_Utils_Tuple2(
						'smm3ayuname',
						elm$json$Json$Encode$string($.smm3ayuname)),
						_Utils_Tuple2(
						'smm3esid',
						elm$json$Json$Encode$string($.smm3esid)),
						_Utils_Tuple2(
						'smm3esname',
						elm$json$Json$Encode$string($.smm3esname)),
						_Utils_Tuple2(
						'smm4ayuid',
						elm$json$Json$Encode$string($.smm4ayuid)),
						_Utils_Tuple2(
						'smm4ayuname',
						elm$json$Json$Encode$string($.smm4ayuname)),
						_Utils_Tuple2(
						'smm4esid',
						elm$json$Json$Encode$string($.smm4esid)),
						_Utils_Tuple2(
						'smm4esname',
						elm$json$Json$Encode$string($.smm4esname)),
						_Utils_Tuple2(
						'smmconsejo1',
						elm$json$Json$Encode$int($.smmconsejo1)),
						_Utils_Tuple2(
						'smmconsejo2',
						elm$json$Json$Encode$int($.smmconsejo2)),
						_Utils_Tuple2(
						'smmconsejo3',
						elm$json$Json$Encode$int($.smmconsejo3)),
						_Utils_Tuple2(
						'smmconsejo4',
						elm$json$Json$Encode$int($.smmconsejo4)),
						_Utils_Tuple2(
						'smmesvideo1',
						elm$json$Json$Encode$bool($.smmesvideo1)),
						_Utils_Tuple2(
						'smmesvideo2',
						elm$json$Json$Encode$bool($.smmesvideo2)),
						_Utils_Tuple2(
						'smmesvideo3',
						elm$json$Json$Encode$bool($.smmesvideo3)),
						_Utils_Tuple2(
						'smmesvideo4',
						elm$json$Json$Encode$bool($.smmesvideo4)),
						_Utils_Tuple2(
						'smmleccionmaestros',
						elm$json$Json$Encode$bool($.smmleccionmaestros)),
						_Utils_Tuple2(
						'smmmin1',
						elm$json$Json$Encode$int($.smmmin1)),
						_Utils_Tuple2(
						'smmmin2',
						elm$json$Json$Encode$int($.smmmin2)),
						_Utils_Tuple2(
						'smmmin3',
						elm$json$Json$Encode$int($.smmmin3)),
						_Utils_Tuple2(
						'smmmin4',
						elm$json$Json$Encode$int($.smmmin4)),
						_Utils_Tuple2(
						'smmtema1',
						elm$json$Json$Encode$string($.smmtema1)),
						_Utils_Tuple2(
						'smmtema2',
						elm$json$Json$Encode$string($.smmtema2)),
						_Utils_Tuple2(
						'smmtema3',
						elm$json$Json$Encode$string($.smmtema3)),
						_Utils_Tuple2(
						'smmtema4',
						elm$json$Json$Encode$string($.smmtema4)),
						_Utils_Tuple2(
						'smmtieneayudante1',
						elm$json$Json$Encode$bool($.smmtieneayudante1)),
						_Utils_Tuple2(
						'smmtieneayudante2',
						elm$json$Json$Encode$bool($.smmtieneayudante2)),
						_Utils_Tuple2(
						'smmtieneayudante3',
						elm$json$Json$Encode$bool($.smmtieneayudante3)),
						_Utils_Tuple2(
						'smmtieneayudante4',
						elm$json$Json$Encode$bool($.smmtieneayudante4)),
						_Utils_Tuple2(
						'starthour',
						elm$json$Json$Encode$int($.starthour)),
						_Utils_Tuple2(
						'startminute',
						elm$json$Json$Encode$int($.startminute)),
						_Utils_Tuple2(
						'tb1oradorid',
						elm$json$Json$Encode$string($.tb1oradorid)),
						_Utils_Tuple2(
						'tb1oradorname',
						elm$json$Json$Encode$string($.tb1oradorname)),
						_Utils_Tuple2(
						'tb1titulo',
						elm$json$Json$Encode$string($.tb1titulo)),
						_Utils_Tuple2(
						'tblectorid',
						elm$json$Json$Encode$string($.tblectorid)),
						_Utils_Tuple2(
						'tblectorname',
						elm$json$Json$Encode$string($.tblectorname)),
						_Utils_Tuple2(
						'tbperlasoradorid',
						elm$json$Json$Encode$string($.tbperlasoradorid)),
						_Utils_Tuple2(
						'tbperlasoradorname',
						elm$json$Json$Encode$string($.tbperlasoradorname))
					]));
		}));
var author$project$Ports$fillSemanasTemplCallBack = _Platform_outgoingPort(
	'fillSemanasTemplCallBack',
	elm$json$Json$Encode$list(
		function ($) {
			return elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'aparatos',
						elm$json$Json$Encode$string($.aparatos)),
						_Utils_Tuple2(
						'camara',
						elm$json$Json$Encode$string($.camara)),
						_Utils_Tuple2(
						'cancion1',
						elm$json$Json$Encode$int($.cancion1)),
						_Utils_Tuple2(
						'cancion2',
						elm$json$Json$Encode$int($.cancion2)),
						_Utils_Tuple2(
						'cancion3',
						elm$json$Json$Encode$int($.cancion3)),
						_Utils_Tuple2(
						'consejolector',
						elm$json$Json$Encode$string($.consejolector)),
						_Utils_Tuple2(
						'cronometro',
						elm$json$Json$Encode$string($.cronometro)),
						_Utils_Tuple2(
						'domasamblea',
						elm$json$Json$Encode$bool($.domasamblea)),
						_Utils_Tuple2(
						'domasambleamensage',
						elm$json$Json$Encode$string($.domasambleamensage)),
						_Utils_Tuple2(
						'domcancion2',
						elm$json$Json$Encode$int($.domcancion2)),
						_Utils_Tuple2(
						'domcancion3',
						elm$json$Json$Encode$int($.domcancion3)),
						_Utils_Tuple2(
						'domdiscursante',
						elm$json$Json$Encode$string($.domdiscursante)),
						_Utils_Tuple2(
						'domhaydiscursante',
						elm$json$Json$Encode$bool($.domhaydiscursante)),
						_Utils_Tuple2(
						'dompresidente',
						elm$json$Json$Encode$string($.dompresidente)),
						_Utils_Tuple2(
						'domrespcancion2',
						elm$json$Json$Encode$string($.domrespcancion2)),
						_Utils_Tuple2(
						'domrespcancion3',
						elm$json$Json$Encode$string($.domrespcancion3)),
						_Utils_Tuple2(
						'domtemacancion2',
						elm$json$Json$Encode$string($.domtemacancion2)),
						_Utils_Tuple2(
						'domtemacancion3',
						elm$json$Json$Encode$string($.domtemacancion3)),
						_Utils_Tuple2(
						'elcnarradorname',
						elm$json$Json$Encode$string($.elcnarradorname)),
						_Utils_Tuple2(
						'elcpersonajes',
						elm$json$Json$Encode$list(elm$json$Json$Encode$string)($.elcpersonajes)),
						_Utils_Tuple2(
						'elcversiculos',
						elm$json$Json$Encode$string($.elcversiculos)),
						_Utils_Tuple2(
						'fechadomingo',
						elm$json$Json$Encode$string($.fechadomingo)),
						_Utils_Tuple2(
						'fechasabado',
						elm$json$Json$Encode$string($.fechasabado)),
						_Utils_Tuple2(
						'ini1h1',
						elm$json$Json$Encode$string($.ini1h1)),
						_Utils_Tuple2(
						'ini2h1',
						elm$json$Json$Encode$string($.ini2h1)),
						_Utils_Tuple2(
						'lecturaversiculos',
						elm$json$Json$Encode$string($.lecturaversiculos)),
						_Utils_Tuple2(
						'nvc1anciano',
						elm$json$Json$Encode$bool($.nvc1anciano)),
						_Utils_Tuple2(
						'nvc1h1',
						elm$json$Json$Encode$string($.nvc1h1)),
						_Utils_Tuple2(
						'nvc2anciano',
						elm$json$Json$Encode$bool($.nvc2anciano)),
						_Utils_Tuple2(
						'nvc2h1',
						elm$json$Json$Encode$string($.nvc2h1)),
						_Utils_Tuple2(
						'nvc3h1',
						elm$json$Json$Encode$string($.nvc3h1)),
						_Utils_Tuple2(
						'nvc4h1',
						elm$json$Json$Encode$string($.nvc4h1)),
						_Utils_Tuple2(
						'nvc5h1',
						elm$json$Json$Encode$string($.nvc5h1)),
						_Utils_Tuple2(
						'nvc6h1',
						elm$json$Json$Encode$string($.nvc6h1)),
						_Utils_Tuple2(
						'nvc6h2',
						elm$json$Json$Encode$string($.nvc6h2)),
						_Utils_Tuple2(
						'nvcestudiolector',
						elm$json$Json$Encode$string($.nvcestudiolector)),
						_Utils_Tuple2(
						'nvcestudioorador',
						elm$json$Json$Encode$string($.nvcestudioorador)),
						_Utils_Tuple2(
						'nvcmins1',
						elm$json$Json$Encode$int($.nvcmins1)),
						_Utils_Tuple2(
						'nvcmins2',
						elm$json$Json$Encode$int($.nvcmins2)),
						_Utils_Tuple2(
						'nvcorador1',
						elm$json$Json$Encode$string($.nvcorador1)),
						_Utils_Tuple2(
						'nvcorador2',
						elm$json$Json$Encode$string($.nvcorador2)),
						_Utils_Tuple2(
						'nvctitulo1',
						elm$json$Json$Encode$string($.nvctitulo1)),
						_Utils_Tuple2(
						'nvctitulo2',
						elm$json$Json$Encode$string($.nvctitulo2)),
						_Utils_Tuple2(
						'oracion1',
						elm$json$Json$Encode$string($.oracion1)),
						_Utils_Tuple2(
						'oracion2',
						elm$json$Json$Encode$string($.oracion2)),
						_Utils_Tuple2(
						'presentacionesmes',
						elm$json$Json$Encode$string($.presentacionesmes)),
						_Utils_Tuple2(
						'presidente',
						elm$json$Json$Encode$string($.presidente)),
						_Utils_Tuple2(
						'respcancion1',
						elm$json$Json$Encode$string($.respcancion1)),
						_Utils_Tuple2(
						'respcancion2',
						elm$json$Json$Encode$string($.respcancion2)),
						_Utils_Tuple2(
						'respcancion3',
						elm$json$Json$Encode$string($.respcancion3)),
						_Utils_Tuple2(
						'sabasamblea',
						elm$json$Json$Encode$bool($.sabasamblea)),
						_Utils_Tuple2(
						'sabasambleamensage',
						elm$json$Json$Encode$string($.sabasambleamensage)),
						_Utils_Tuple2(
						'smm1ayuname',
						elm$json$Json$Encode$string($.smm1ayuname)),
						_Utils_Tuple2(
						'smm1esname',
						elm$json$Json$Encode$string($.smm1esname)),
						_Utils_Tuple2(
						'smm1h1',
						elm$json$Json$Encode$string($.smm1h1)),
						_Utils_Tuple2(
						'smm2ayuname',
						elm$json$Json$Encode$string($.smm2ayuname)),
						_Utils_Tuple2(
						'smm2esname',
						elm$json$Json$Encode$string($.smm2esname)),
						_Utils_Tuple2(
						'smm2h1',
						elm$json$Json$Encode$string($.smm2h1)),
						_Utils_Tuple2(
						'smm3ayuname',
						elm$json$Json$Encode$string($.smm3ayuname)),
						_Utils_Tuple2(
						'smm3esname',
						elm$json$Json$Encode$string($.smm3esname)),
						_Utils_Tuple2(
						'smm3h1',
						elm$json$Json$Encode$string($.smm3h1)),
						_Utils_Tuple2(
						'smm4ayuname',
						elm$json$Json$Encode$string($.smm4ayuname)),
						_Utils_Tuple2(
						'smm4esname',
						elm$json$Json$Encode$string($.smm4esname)),
						_Utils_Tuple2(
						'smm4h1',
						elm$json$Json$Encode$string($.smm4h1)),
						_Utils_Tuple2(
						'smmconsejo1',
						elm$json$Json$Encode$int($.smmconsejo1)),
						_Utils_Tuple2(
						'smmconsejo2',
						elm$json$Json$Encode$int($.smmconsejo2)),
						_Utils_Tuple2(
						'smmconsejo3',
						elm$json$Json$Encode$int($.smmconsejo3)),
						_Utils_Tuple2(
						'smmconsejo4',
						elm$json$Json$Encode$int($.smmconsejo4)),
						_Utils_Tuple2(
						'smmesvideo1',
						elm$json$Json$Encode$bool($.smmesvideo1)),
						_Utils_Tuple2(
						'smmesvideo2',
						elm$json$Json$Encode$bool($.smmesvideo2)),
						_Utils_Tuple2(
						'smmesvideo3',
						elm$json$Json$Encode$bool($.smmesvideo3)),
						_Utils_Tuple2(
						'smmesvideo4',
						elm$json$Json$Encode$bool($.smmesvideo4)),
						_Utils_Tuple2(
						'smmleccionmaestros',
						elm$json$Json$Encode$bool($.smmleccionmaestros)),
						_Utils_Tuple2(
						'smmmin1',
						elm$json$Json$Encode$int($.smmmin1)),
						_Utils_Tuple2(
						'smmmin2',
						elm$json$Json$Encode$int($.smmmin2)),
						_Utils_Tuple2(
						'smmmin3',
						elm$json$Json$Encode$int($.smmmin3)),
						_Utils_Tuple2(
						'smmmin4',
						elm$json$Json$Encode$int($.smmmin4)),
						_Utils_Tuple2(
						'smmtema1',
						elm$json$Json$Encode$string($.smmtema1)),
						_Utils_Tuple2(
						'smmtema2',
						elm$json$Json$Encode$string($.smmtema2)),
						_Utils_Tuple2(
						'smmtema3',
						elm$json$Json$Encode$string($.smmtema3)),
						_Utils_Tuple2(
						'smmtema4',
						elm$json$Json$Encode$string($.smmtema4)),
						_Utils_Tuple2(
						'smmtieneayudante1',
						elm$json$Json$Encode$bool($.smmtieneayudante1)),
						_Utils_Tuple2(
						'smmtieneayudante2',
						elm$json$Json$Encode$bool($.smmtieneayudante2)),
						_Utils_Tuple2(
						'smmtieneayudante3',
						elm$json$Json$Encode$bool($.smmtieneayudante3)),
						_Utils_Tuple2(
						'smmtieneayudante4',
						elm$json$Json$Encode$bool($.smmtieneayudante4)),
						_Utils_Tuple2(
						'tb1h1',
						elm$json$Json$Encode$string($.tb1h1)),
						_Utils_Tuple2(
						'tb1orador',
						elm$json$Json$Encode$string($.tb1orador)),
						_Utils_Tuple2(
						'tb1titulo',
						elm$json$Json$Encode$string($.tb1titulo)),
						_Utils_Tuple2(
						'tb2h1',
						elm$json$Json$Encode$string($.tb2h1)),
						_Utils_Tuple2(
						'tb3h1',
						elm$json$Json$Encode$string($.tb3h1)),
						_Utils_Tuple2(
						'tblector',
						elm$json$Json$Encode$string($.tblector)),
						_Utils_Tuple2(
						'tbperlasorador',
						elm$json$Json$Encode$string($.tbperlasorador)),
						_Utils_Tuple2(
						'temacancion1',
						elm$json$Json$Encode$string($.temacancion1)),
						_Utils_Tuple2(
						'temacancion2',
						elm$json$Json$Encode$string($.temacancion2)),
						_Utils_Tuple2(
						'temacancion3',
						elm$json$Json$Encode$string($.temacancion3))
					]));
		}));
var elm$core$Maybe$destruct = F3(
	function (_default, func, maybe) {
		if (maybe.$ === 'Just') {
			var a = maybe.a;
			return func(a);
		} else {
			return _default;
		}
	});
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$Ports$programasemanalbackupCallBack = _Platform_outgoingPort(
	'programasemanalbackupCallBack',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'canciones',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'asignado',
										elm$json$Json$Encode$string($.asignado)),
										_Utils_Tuple2(
										'idasignado',
										elm$json$Json$Encode$string($.idasignado)),
										_Utils_Tuple2(
										'num',
										elm$json$Json$Encode$int($.num)),
										_Utils_Tuple2(
										'tema',
										elm$json$Json$Encode$string($.tema)),
										_Utils_Tuple2(
										'versiculo',
										elm$json$Json$Encode$string($.versiculo))
									]));
						})($.canciones)),
					_Utils_Tuple2(
					'publicadores',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'anciano',
										elm$json$Json$Encode$bool($.anciano)),
										_Utils_Tuple2(
										'aparatos',
										elm$json$Json$Encode$bool($.aparatos)),
										_Utils_Tuple2(
										'ayudante',
										elm$json$Json$Encode$bool($.ayudante)),
										_Utils_Tuple2(
										'camara',
										elm$json$Json$Encode$bool($.camara)),
										_Utils_Tuple2(
										'creado',
										elm$json$Json$Encode$int($.creado)),
										_Utils_Tuple2(
										'cronometro',
										elm$json$Json$Encode$bool($.cronometro)),
										_Utils_Tuple2(
										'estudiocongregacion',
										elm$json$Json$Encode$bool($.estudiocongregacion)),
										_Utils_Tuple2(
										'esvideo',
										elm$json$Json$Encode$bool($.esvideo)),
										_Utils_Tuple2(
										'familiaressexoopuesto',
										elm$json$Json$Encode$list(elm$json$Json$Encode$string)($.familiaressexoopuesto)),
										_Utils_Tuple2(
										'fechanodisponiblefin',
										function ($) {
											return A3(elm$core$Maybe$destruct, elm$json$Json$Encode$null, elm$json$Json$Encode$int, $);
										}($.fechanodisponiblefin)),
										_Utils_Tuple2(
										'fechanodisponibleinicio',
										function ($) {
											return A3(elm$core$Maybe$destruct, elm$json$Json$Encode$null, elm$json$Json$Encode$int, $);
										}($.fechanodisponibleinicio)),
										_Utils_Tuple2(
										'id',
										elm$json$Json$Encode$string($.id)),
										_Utils_Tuple2(
										'lectorestudiocongregacion',
										elm$json$Json$Encode$bool($.lectorestudiocongregacion)),
										_Utils_Tuple2(
										'lecturabiblia',
										elm$json$Json$Encode$bool($.lecturabiblia)),
										_Utils_Tuple2(
										'modificado',
										elm$json$Json$Encode$int($.modificado)),
										_Utils_Tuple2(
										'name',
										elm$json$Json$Encode$string($.name)),
										_Utils_Tuple2(
										'nvc',
										elm$json$Json$Encode$bool($.nvc)),
										_Utils_Tuple2(
										'oracion',
										elm$json$Json$Encode$bool($.oracion)),
										_Utils_Tuple2(
										'perlas',
										elm$json$Json$Encode$bool($.perlas)),
										_Utils_Tuple2(
										'presidentedomingo',
										elm$json$Json$Encode$bool($.presidentedomingo)),
										_Utils_Tuple2(
										'presidentesabado',
										elm$json$Json$Encode$bool($.presidentesabado)),
										_Utils_Tuple2(
										'principiante',
										elm$json$Json$Encode$bool($.principiante)),
										_Utils_Tuple2(
										'smm1publicador',
										elm$json$Json$Encode$bool($.smm1publicador)),
										_Utils_Tuple2(
										'smm2publicador',
										elm$json$Json$Encode$bool($.smm2publicador)),
										_Utils_Tuple2(
										'smm3publicador',
										elm$json$Json$Encode$bool($.smm3publicador)),
										_Utils_Tuple2(
										'smm4publicador',
										elm$json$Json$Encode$bool($.smm4publicador)),
										_Utils_Tuple2(
										'smmdiscurso',
										elm$json$Json$Encode$bool($.smmdiscurso)),
										_Utils_Tuple2(
										'tb1orador',
										elm$json$Json$Encode$bool($.tb1orador)),
										_Utils_Tuple2(
										'varon',
										elm$json$Json$Encode$bool($.varon))
									]));
						})($.publicadores)),
					_Utils_Tuple2(
					'semanasanteriores',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'aparatosid',
										elm$json$Json$Encode$string($.aparatosid)),
										_Utils_Tuple2(
										'aparatosname',
										elm$json$Json$Encode$string($.aparatosname)),
										_Utils_Tuple2(
										'camaraid',
										elm$json$Json$Encode$string($.camaraid)),
										_Utils_Tuple2(
										'camaraname',
										elm$json$Json$Encode$string($.camaraname)),
										_Utils_Tuple2(
										'cancion1',
										elm$json$Json$Encode$int($.cancion1)),
										_Utils_Tuple2(
										'cancion1id',
										elm$json$Json$Encode$string($.cancion1id)),
										_Utils_Tuple2(
										'cancion1name',
										elm$json$Json$Encode$string($.cancion1name)),
										_Utils_Tuple2(
										'cancion1tema',
										elm$json$Json$Encode$string($.cancion1tema)),
										_Utils_Tuple2(
										'cancion1versiculo',
										elm$json$Json$Encode$string($.cancion1versiculo)),
										_Utils_Tuple2(
										'cancion2',
										elm$json$Json$Encode$int($.cancion2)),
										_Utils_Tuple2(
										'cancion2id',
										elm$json$Json$Encode$string($.cancion2id)),
										_Utils_Tuple2(
										'cancion2name',
										elm$json$Json$Encode$string($.cancion2name)),
										_Utils_Tuple2(
										'cancion2tema',
										elm$json$Json$Encode$string($.cancion2tema)),
										_Utils_Tuple2(
										'cancion2versiculo',
										elm$json$Json$Encode$string($.cancion2versiculo)),
										_Utils_Tuple2(
										'cancion3',
										elm$json$Json$Encode$int($.cancion3)),
										_Utils_Tuple2(
										'cancion3id',
										elm$json$Json$Encode$string($.cancion3id)),
										_Utils_Tuple2(
										'cancion3name',
										elm$json$Json$Encode$string($.cancion3name)),
										_Utils_Tuple2(
										'cancion3tema',
										elm$json$Json$Encode$string($.cancion3tema)),
										_Utils_Tuple2(
										'cancion3versiculo',
										elm$json$Json$Encode$string($.cancion3versiculo)),
										_Utils_Tuple2(
										'consejolector',
										elm$json$Json$Encode$int($.consejolector)),
										_Utils_Tuple2(
										'creado',
										elm$json$Json$Encode$int($.creado)),
										_Utils_Tuple2(
										'cronometroid',
										elm$json$Json$Encode$string($.cronometroid)),
										_Utils_Tuple2(
										'cronometroname',
										elm$json$Json$Encode$string($.cronometroname)),
										_Utils_Tuple2(
										'domasamblea',
										elm$json$Json$Encode$bool($.domasamblea)),
										_Utils_Tuple2(
										'domasambleamensage',
										elm$json$Json$Encode$string($.domasambleamensage)),
										_Utils_Tuple2(
										'domcancion2',
										elm$json$Json$Encode$int($.domcancion2)),
										_Utils_Tuple2(
										'domcancion2id',
										elm$json$Json$Encode$string($.domcancion2id)),
										_Utils_Tuple2(
										'domcancion2name',
										elm$json$Json$Encode$string($.domcancion2name)),
										_Utils_Tuple2(
										'domcancion2tema',
										elm$json$Json$Encode$string($.domcancion2tema)),
										_Utils_Tuple2(
										'domcancion2versiculo',
										elm$json$Json$Encode$string($.domcancion2versiculo)),
										_Utils_Tuple2(
										'domcancion3',
										elm$json$Json$Encode$int($.domcancion3)),
										_Utils_Tuple2(
										'domcancion3id',
										elm$json$Json$Encode$string($.domcancion3id)),
										_Utils_Tuple2(
										'domcancion3name',
										elm$json$Json$Encode$string($.domcancion3name)),
										_Utils_Tuple2(
										'domcancion3tema',
										elm$json$Json$Encode$string($.domcancion3tema)),
										_Utils_Tuple2(
										'domcancion3versiculo',
										elm$json$Json$Encode$string($.domcancion3versiculo)),
										_Utils_Tuple2(
										'domdiscursante',
										elm$json$Json$Encode$string($.domdiscursante)),
										_Utils_Tuple2(
										'domhaydiscursante',
										elm$json$Json$Encode$bool($.domhaydiscursante)),
										_Utils_Tuple2(
										'dompresidenteid',
										elm$json$Json$Encode$string($.dompresidenteid)),
										_Utils_Tuple2(
										'dompresidentename',
										elm$json$Json$Encode$string($.dompresidentename)),
										_Utils_Tuple2(
										'elcnarradorid',
										elm$json$Json$Encode$string($.elcnarradorid)),
										_Utils_Tuple2(
										'elcnarradorname',
										elm$json$Json$Encode$string($.elcnarradorname)),
										_Utils_Tuple2(
										'elcpersonajes',
										elm$json$Json$Encode$string($.elcpersonajes)),
										_Utils_Tuple2(
										'elcversiculos',
										elm$json$Json$Encode$string($.elcversiculos)),
										_Utils_Tuple2(
										'fechadomingo',
										elm$json$Json$Encode$int($.fechadomingo)),
										_Utils_Tuple2(
										'fechasabado',
										elm$json$Json$Encode$int($.fechasabado)),
										_Utils_Tuple2(
										'id',
										elm$json$Json$Encode$string($.id)),
										_Utils_Tuple2(
										'lecturaversiculos',
										elm$json$Json$Encode$string($.lecturaversiculos)),
										_Utils_Tuple2(
										'modificado',
										elm$json$Json$Encode$int($.modificado)),
										_Utils_Tuple2(
										'nvcanciano1',
										elm$json$Json$Encode$bool($.nvcanciano1)),
										_Utils_Tuple2(
										'nvcanciano2',
										elm$json$Json$Encode$bool($.nvcanciano2)),
										_Utils_Tuple2(
										'nvcestudiolectorid',
										elm$json$Json$Encode$string($.nvcestudiolectorid)),
										_Utils_Tuple2(
										'nvcestudiolectorname',
										elm$json$Json$Encode$string($.nvcestudiolectorname)),
										_Utils_Tuple2(
										'nvcestudiooradorid',
										elm$json$Json$Encode$string($.nvcestudiooradorid)),
										_Utils_Tuple2(
										'nvcestudiooradorname',
										elm$json$Json$Encode$string($.nvcestudiooradorname)),
										_Utils_Tuple2(
										'nvcmins1',
										elm$json$Json$Encode$int($.nvcmins1)),
										_Utils_Tuple2(
										'nvcmins2',
										elm$json$Json$Encode$int($.nvcmins2)),
										_Utils_Tuple2(
										'nvcorador1id',
										elm$json$Json$Encode$string($.nvcorador1id)),
										_Utils_Tuple2(
										'nvcorador1name',
										elm$json$Json$Encode$string($.nvcorador1name)),
										_Utils_Tuple2(
										'nvcorador2id',
										elm$json$Json$Encode$string($.nvcorador2id)),
										_Utils_Tuple2(
										'nvcorador2name',
										elm$json$Json$Encode$string($.nvcorador2name)),
										_Utils_Tuple2(
										'nvctitulo1',
										elm$json$Json$Encode$string($.nvctitulo1)),
										_Utils_Tuple2(
										'nvctitulo2',
										elm$json$Json$Encode$string($.nvctitulo2)),
										_Utils_Tuple2(
										'oracion1id',
										elm$json$Json$Encode$string($.oracion1id)),
										_Utils_Tuple2(
										'oracion1name',
										elm$json$Json$Encode$string($.oracion1name)),
										_Utils_Tuple2(
										'oracion2id',
										elm$json$Json$Encode$string($.oracion2id)),
										_Utils_Tuple2(
										'oracion2name',
										elm$json$Json$Encode$string($.oracion2name)),
										_Utils_Tuple2(
										'presentacionesmesid',
										elm$json$Json$Encode$string($.presentacionesmesid)),
										_Utils_Tuple2(
										'presentacionesmesname',
										elm$json$Json$Encode$string($.presentacionesmesname)),
										_Utils_Tuple2(
										'presidenteid',
										elm$json$Json$Encode$string($.presidenteid)),
										_Utils_Tuple2(
										'presidentename',
										elm$json$Json$Encode$string($.presidentename)),
										_Utils_Tuple2(
										'sabasamblea',
										elm$json$Json$Encode$bool($.sabasamblea)),
										_Utils_Tuple2(
										'sabasambleamensage',
										elm$json$Json$Encode$string($.sabasambleamensage)),
										_Utils_Tuple2(
										'smm1ayuid',
										elm$json$Json$Encode$string($.smm1ayuid)),
										_Utils_Tuple2(
										'smm1ayuname',
										elm$json$Json$Encode$string($.smm1ayuname)),
										_Utils_Tuple2(
										'smm1esid',
										elm$json$Json$Encode$string($.smm1esid)),
										_Utils_Tuple2(
										'smm1esname',
										elm$json$Json$Encode$string($.smm1esname)),
										_Utils_Tuple2(
										'smm2ayuid',
										elm$json$Json$Encode$string($.smm2ayuid)),
										_Utils_Tuple2(
										'smm2ayuname',
										elm$json$Json$Encode$string($.smm2ayuname)),
										_Utils_Tuple2(
										'smm2esid',
										elm$json$Json$Encode$string($.smm2esid)),
										_Utils_Tuple2(
										'smm2esname',
										elm$json$Json$Encode$string($.smm2esname)),
										_Utils_Tuple2(
										'smm3ayuid',
										elm$json$Json$Encode$string($.smm3ayuid)),
										_Utils_Tuple2(
										'smm3ayuname',
										elm$json$Json$Encode$string($.smm3ayuname)),
										_Utils_Tuple2(
										'smm3esid',
										elm$json$Json$Encode$string($.smm3esid)),
										_Utils_Tuple2(
										'smm3esname',
										elm$json$Json$Encode$string($.smm3esname)),
										_Utils_Tuple2(
										'smm4ayuid',
										elm$json$Json$Encode$string($.smm4ayuid)),
										_Utils_Tuple2(
										'smm4ayuname',
										elm$json$Json$Encode$string($.smm4ayuname)),
										_Utils_Tuple2(
										'smm4esid',
										elm$json$Json$Encode$string($.smm4esid)),
										_Utils_Tuple2(
										'smm4esname',
										elm$json$Json$Encode$string($.smm4esname)),
										_Utils_Tuple2(
										'smmconsejo1',
										elm$json$Json$Encode$int($.smmconsejo1)),
										_Utils_Tuple2(
										'smmconsejo2',
										elm$json$Json$Encode$int($.smmconsejo2)),
										_Utils_Tuple2(
										'smmconsejo3',
										elm$json$Json$Encode$int($.smmconsejo3)),
										_Utils_Tuple2(
										'smmconsejo4',
										elm$json$Json$Encode$int($.smmconsejo4)),
										_Utils_Tuple2(
										'smmesvideo1',
										elm$json$Json$Encode$bool($.smmesvideo1)),
										_Utils_Tuple2(
										'smmesvideo2',
										elm$json$Json$Encode$bool($.smmesvideo2)),
										_Utils_Tuple2(
										'smmesvideo3',
										elm$json$Json$Encode$bool($.smmesvideo3)),
										_Utils_Tuple2(
										'smmesvideo4',
										elm$json$Json$Encode$bool($.smmesvideo4)),
										_Utils_Tuple2(
										'smmleccionmaestros',
										elm$json$Json$Encode$bool($.smmleccionmaestros)),
										_Utils_Tuple2(
										'smmmin1',
										elm$json$Json$Encode$int($.smmmin1)),
										_Utils_Tuple2(
										'smmmin2',
										elm$json$Json$Encode$int($.smmmin2)),
										_Utils_Tuple2(
										'smmmin3',
										elm$json$Json$Encode$int($.smmmin3)),
										_Utils_Tuple2(
										'smmmin4',
										elm$json$Json$Encode$int($.smmmin4)),
										_Utils_Tuple2(
										'smmtema1',
										elm$json$Json$Encode$string($.smmtema1)),
										_Utils_Tuple2(
										'smmtema2',
										elm$json$Json$Encode$string($.smmtema2)),
										_Utils_Tuple2(
										'smmtema3',
										elm$json$Json$Encode$string($.smmtema3)),
										_Utils_Tuple2(
										'smmtema4',
										elm$json$Json$Encode$string($.smmtema4)),
										_Utils_Tuple2(
										'smmtieneayudante1',
										elm$json$Json$Encode$bool($.smmtieneayudante1)),
										_Utils_Tuple2(
										'smmtieneayudante2',
										elm$json$Json$Encode$bool($.smmtieneayudante2)),
										_Utils_Tuple2(
										'smmtieneayudante3',
										elm$json$Json$Encode$bool($.smmtieneayudante3)),
										_Utils_Tuple2(
										'smmtieneayudante4',
										elm$json$Json$Encode$bool($.smmtieneayudante4)),
										_Utils_Tuple2(
										'starthour',
										elm$json$Json$Encode$int($.starthour)),
										_Utils_Tuple2(
										'startminute',
										elm$json$Json$Encode$int($.startminute)),
										_Utils_Tuple2(
										'tb1oradorid',
										elm$json$Json$Encode$string($.tb1oradorid)),
										_Utils_Tuple2(
										'tb1oradorname',
										elm$json$Json$Encode$string($.tb1oradorname)),
										_Utils_Tuple2(
										'tb1titulo',
										elm$json$Json$Encode$string($.tb1titulo)),
										_Utils_Tuple2(
										'tblectorid',
										elm$json$Json$Encode$string($.tblectorid)),
										_Utils_Tuple2(
										'tblectorname',
										elm$json$Json$Encode$string($.tblectorname)),
										_Utils_Tuple2(
										'tbperlasoradorid',
										elm$json$Json$Encode$string($.tbperlasoradorid)),
										_Utils_Tuple2(
										'tbperlasoradorname',
										elm$json$Json$Encode$string($.tbperlasoradorname))
									]));
						})($.semanasanteriores)),
					_Utils_Tuple2(
					'semanasllenados',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'aparatosid',
										elm$json$Json$Encode$string($.aparatosid)),
										_Utils_Tuple2(
										'aparatosname',
										elm$json$Json$Encode$string($.aparatosname)),
										_Utils_Tuple2(
										'camaraid',
										elm$json$Json$Encode$string($.camaraid)),
										_Utils_Tuple2(
										'camaraname',
										elm$json$Json$Encode$string($.camaraname)),
										_Utils_Tuple2(
										'cancion1',
										elm$json$Json$Encode$int($.cancion1)),
										_Utils_Tuple2(
										'cancion1id',
										elm$json$Json$Encode$string($.cancion1id)),
										_Utils_Tuple2(
										'cancion1name',
										elm$json$Json$Encode$string($.cancion1name)),
										_Utils_Tuple2(
										'cancion1tema',
										elm$json$Json$Encode$string($.cancion1tema)),
										_Utils_Tuple2(
										'cancion1versiculo',
										elm$json$Json$Encode$string($.cancion1versiculo)),
										_Utils_Tuple2(
										'cancion2',
										elm$json$Json$Encode$int($.cancion2)),
										_Utils_Tuple2(
										'cancion2id',
										elm$json$Json$Encode$string($.cancion2id)),
										_Utils_Tuple2(
										'cancion2name',
										elm$json$Json$Encode$string($.cancion2name)),
										_Utils_Tuple2(
										'cancion2tema',
										elm$json$Json$Encode$string($.cancion2tema)),
										_Utils_Tuple2(
										'cancion2versiculo',
										elm$json$Json$Encode$string($.cancion2versiculo)),
										_Utils_Tuple2(
										'cancion3',
										elm$json$Json$Encode$int($.cancion3)),
										_Utils_Tuple2(
										'cancion3id',
										elm$json$Json$Encode$string($.cancion3id)),
										_Utils_Tuple2(
										'cancion3name',
										elm$json$Json$Encode$string($.cancion3name)),
										_Utils_Tuple2(
										'cancion3tema',
										elm$json$Json$Encode$string($.cancion3tema)),
										_Utils_Tuple2(
										'cancion3versiculo',
										elm$json$Json$Encode$string($.cancion3versiculo)),
										_Utils_Tuple2(
										'consejolector',
										elm$json$Json$Encode$int($.consejolector)),
										_Utils_Tuple2(
										'creado',
										elm$json$Json$Encode$int($.creado)),
										_Utils_Tuple2(
										'cronometroid',
										elm$json$Json$Encode$string($.cronometroid)),
										_Utils_Tuple2(
										'cronometroname',
										elm$json$Json$Encode$string($.cronometroname)),
										_Utils_Tuple2(
										'domasamblea',
										elm$json$Json$Encode$bool($.domasamblea)),
										_Utils_Tuple2(
										'domasambleamensage',
										elm$json$Json$Encode$string($.domasambleamensage)),
										_Utils_Tuple2(
										'domcancion2',
										elm$json$Json$Encode$int($.domcancion2)),
										_Utils_Tuple2(
										'domcancion2id',
										elm$json$Json$Encode$string($.domcancion2id)),
										_Utils_Tuple2(
										'domcancion2name',
										elm$json$Json$Encode$string($.domcancion2name)),
										_Utils_Tuple2(
										'domcancion2tema',
										elm$json$Json$Encode$string($.domcancion2tema)),
										_Utils_Tuple2(
										'domcancion2versiculo',
										elm$json$Json$Encode$string($.domcancion2versiculo)),
										_Utils_Tuple2(
										'domcancion3',
										elm$json$Json$Encode$int($.domcancion3)),
										_Utils_Tuple2(
										'domcancion3id',
										elm$json$Json$Encode$string($.domcancion3id)),
										_Utils_Tuple2(
										'domcancion3name',
										elm$json$Json$Encode$string($.domcancion3name)),
										_Utils_Tuple2(
										'domcancion3tema',
										elm$json$Json$Encode$string($.domcancion3tema)),
										_Utils_Tuple2(
										'domcancion3versiculo',
										elm$json$Json$Encode$string($.domcancion3versiculo)),
										_Utils_Tuple2(
										'domdiscursante',
										elm$json$Json$Encode$string($.domdiscursante)),
										_Utils_Tuple2(
										'domhaydiscursante',
										elm$json$Json$Encode$bool($.domhaydiscursante)),
										_Utils_Tuple2(
										'dompresidenteid',
										elm$json$Json$Encode$string($.dompresidenteid)),
										_Utils_Tuple2(
										'dompresidentename',
										elm$json$Json$Encode$string($.dompresidentename)),
										_Utils_Tuple2(
										'elcnarradorid',
										elm$json$Json$Encode$string($.elcnarradorid)),
										_Utils_Tuple2(
										'elcnarradorname',
										elm$json$Json$Encode$string($.elcnarradorname)),
										_Utils_Tuple2(
										'elcpersonajes',
										elm$json$Json$Encode$string($.elcpersonajes)),
										_Utils_Tuple2(
										'elcversiculos',
										elm$json$Json$Encode$string($.elcversiculos)),
										_Utils_Tuple2(
										'fechadomingo',
										elm$json$Json$Encode$int($.fechadomingo)),
										_Utils_Tuple2(
										'fechasabado',
										elm$json$Json$Encode$int($.fechasabado)),
										_Utils_Tuple2(
										'id',
										elm$json$Json$Encode$string($.id)),
										_Utils_Tuple2(
										'lecturaversiculos',
										elm$json$Json$Encode$string($.lecturaversiculos)),
										_Utils_Tuple2(
										'modificado',
										elm$json$Json$Encode$int($.modificado)),
										_Utils_Tuple2(
										'nvcanciano1',
										elm$json$Json$Encode$bool($.nvcanciano1)),
										_Utils_Tuple2(
										'nvcanciano2',
										elm$json$Json$Encode$bool($.nvcanciano2)),
										_Utils_Tuple2(
										'nvcestudiolectorid',
										elm$json$Json$Encode$string($.nvcestudiolectorid)),
										_Utils_Tuple2(
										'nvcestudiolectorname',
										elm$json$Json$Encode$string($.nvcestudiolectorname)),
										_Utils_Tuple2(
										'nvcestudiooradorid',
										elm$json$Json$Encode$string($.nvcestudiooradorid)),
										_Utils_Tuple2(
										'nvcestudiooradorname',
										elm$json$Json$Encode$string($.nvcestudiooradorname)),
										_Utils_Tuple2(
										'nvcmins1',
										elm$json$Json$Encode$int($.nvcmins1)),
										_Utils_Tuple2(
										'nvcmins2',
										elm$json$Json$Encode$int($.nvcmins2)),
										_Utils_Tuple2(
										'nvcorador1id',
										elm$json$Json$Encode$string($.nvcorador1id)),
										_Utils_Tuple2(
										'nvcorador1name',
										elm$json$Json$Encode$string($.nvcorador1name)),
										_Utils_Tuple2(
										'nvcorador2id',
										elm$json$Json$Encode$string($.nvcorador2id)),
										_Utils_Tuple2(
										'nvcorador2name',
										elm$json$Json$Encode$string($.nvcorador2name)),
										_Utils_Tuple2(
										'nvctitulo1',
										elm$json$Json$Encode$string($.nvctitulo1)),
										_Utils_Tuple2(
										'nvctitulo2',
										elm$json$Json$Encode$string($.nvctitulo2)),
										_Utils_Tuple2(
										'oracion1id',
										elm$json$Json$Encode$string($.oracion1id)),
										_Utils_Tuple2(
										'oracion1name',
										elm$json$Json$Encode$string($.oracion1name)),
										_Utils_Tuple2(
										'oracion2id',
										elm$json$Json$Encode$string($.oracion2id)),
										_Utils_Tuple2(
										'oracion2name',
										elm$json$Json$Encode$string($.oracion2name)),
										_Utils_Tuple2(
										'presentacionesmesid',
										elm$json$Json$Encode$string($.presentacionesmesid)),
										_Utils_Tuple2(
										'presentacionesmesname',
										elm$json$Json$Encode$string($.presentacionesmesname)),
										_Utils_Tuple2(
										'presidenteid',
										elm$json$Json$Encode$string($.presidenteid)),
										_Utils_Tuple2(
										'presidentename',
										elm$json$Json$Encode$string($.presidentename)),
										_Utils_Tuple2(
										'sabasamblea',
										elm$json$Json$Encode$bool($.sabasamblea)),
										_Utils_Tuple2(
										'sabasambleamensage',
										elm$json$Json$Encode$string($.sabasambleamensage)),
										_Utils_Tuple2(
										'smm1ayuid',
										elm$json$Json$Encode$string($.smm1ayuid)),
										_Utils_Tuple2(
										'smm1ayuname',
										elm$json$Json$Encode$string($.smm1ayuname)),
										_Utils_Tuple2(
										'smm1esid',
										elm$json$Json$Encode$string($.smm1esid)),
										_Utils_Tuple2(
										'smm1esname',
										elm$json$Json$Encode$string($.smm1esname)),
										_Utils_Tuple2(
										'smm2ayuid',
										elm$json$Json$Encode$string($.smm2ayuid)),
										_Utils_Tuple2(
										'smm2ayuname',
										elm$json$Json$Encode$string($.smm2ayuname)),
										_Utils_Tuple2(
										'smm2esid',
										elm$json$Json$Encode$string($.smm2esid)),
										_Utils_Tuple2(
										'smm2esname',
										elm$json$Json$Encode$string($.smm2esname)),
										_Utils_Tuple2(
										'smm3ayuid',
										elm$json$Json$Encode$string($.smm3ayuid)),
										_Utils_Tuple2(
										'smm3ayuname',
										elm$json$Json$Encode$string($.smm3ayuname)),
										_Utils_Tuple2(
										'smm3esid',
										elm$json$Json$Encode$string($.smm3esid)),
										_Utils_Tuple2(
										'smm3esname',
										elm$json$Json$Encode$string($.smm3esname)),
										_Utils_Tuple2(
										'smm4ayuid',
										elm$json$Json$Encode$string($.smm4ayuid)),
										_Utils_Tuple2(
										'smm4ayuname',
										elm$json$Json$Encode$string($.smm4ayuname)),
										_Utils_Tuple2(
										'smm4esid',
										elm$json$Json$Encode$string($.smm4esid)),
										_Utils_Tuple2(
										'smm4esname',
										elm$json$Json$Encode$string($.smm4esname)),
										_Utils_Tuple2(
										'smmconsejo1',
										elm$json$Json$Encode$int($.smmconsejo1)),
										_Utils_Tuple2(
										'smmconsejo2',
										elm$json$Json$Encode$int($.smmconsejo2)),
										_Utils_Tuple2(
										'smmconsejo3',
										elm$json$Json$Encode$int($.smmconsejo3)),
										_Utils_Tuple2(
										'smmconsejo4',
										elm$json$Json$Encode$int($.smmconsejo4)),
										_Utils_Tuple2(
										'smmesvideo1',
										elm$json$Json$Encode$bool($.smmesvideo1)),
										_Utils_Tuple2(
										'smmesvideo2',
										elm$json$Json$Encode$bool($.smmesvideo2)),
										_Utils_Tuple2(
										'smmesvideo3',
										elm$json$Json$Encode$bool($.smmesvideo3)),
										_Utils_Tuple2(
										'smmesvideo4',
										elm$json$Json$Encode$bool($.smmesvideo4)),
										_Utils_Tuple2(
										'smmleccionmaestros',
										elm$json$Json$Encode$bool($.smmleccionmaestros)),
										_Utils_Tuple2(
										'smmmin1',
										elm$json$Json$Encode$int($.smmmin1)),
										_Utils_Tuple2(
										'smmmin2',
										elm$json$Json$Encode$int($.smmmin2)),
										_Utils_Tuple2(
										'smmmin3',
										elm$json$Json$Encode$int($.smmmin3)),
										_Utils_Tuple2(
										'smmmin4',
										elm$json$Json$Encode$int($.smmmin4)),
										_Utils_Tuple2(
										'smmtema1',
										elm$json$Json$Encode$string($.smmtema1)),
										_Utils_Tuple2(
										'smmtema2',
										elm$json$Json$Encode$string($.smmtema2)),
										_Utils_Tuple2(
										'smmtema3',
										elm$json$Json$Encode$string($.smmtema3)),
										_Utils_Tuple2(
										'smmtema4',
										elm$json$Json$Encode$string($.smmtema4)),
										_Utils_Tuple2(
										'smmtieneayudante1',
										elm$json$Json$Encode$bool($.smmtieneayudante1)),
										_Utils_Tuple2(
										'smmtieneayudante2',
										elm$json$Json$Encode$bool($.smmtieneayudante2)),
										_Utils_Tuple2(
										'smmtieneayudante3',
										elm$json$Json$Encode$bool($.smmtieneayudante3)),
										_Utils_Tuple2(
										'smmtieneayudante4',
										elm$json$Json$Encode$bool($.smmtieneayudante4)),
										_Utils_Tuple2(
										'starthour',
										elm$json$Json$Encode$int($.starthour)),
										_Utils_Tuple2(
										'startminute',
										elm$json$Json$Encode$int($.startminute)),
										_Utils_Tuple2(
										'tb1oradorid',
										elm$json$Json$Encode$string($.tb1oradorid)),
										_Utils_Tuple2(
										'tb1oradorname',
										elm$json$Json$Encode$string($.tb1oradorname)),
										_Utils_Tuple2(
										'tb1titulo',
										elm$json$Json$Encode$string($.tb1titulo)),
										_Utils_Tuple2(
										'tblectorid',
										elm$json$Json$Encode$string($.tblectorid)),
										_Utils_Tuple2(
										'tblectorname',
										elm$json$Json$Encode$string($.tblectorname)),
										_Utils_Tuple2(
										'tbperlasoradorid',
										elm$json$Json$Encode$string($.tbperlasoradorid)),
										_Utils_Tuple2(
										'tbperlasoradorname',
										elm$json$Json$Encode$string($.tbperlasoradorname))
									]));
						})($.semanasllenados)),
					_Utils_Tuple2(
					'semanastemplates',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'aparatos',
										elm$json$Json$Encode$string($.aparatos)),
										_Utils_Tuple2(
										'camara',
										elm$json$Json$Encode$string($.camara)),
										_Utils_Tuple2(
										'cancion1',
										elm$json$Json$Encode$int($.cancion1)),
										_Utils_Tuple2(
										'cancion2',
										elm$json$Json$Encode$int($.cancion2)),
										_Utils_Tuple2(
										'cancion3',
										elm$json$Json$Encode$int($.cancion3)),
										_Utils_Tuple2(
										'consejolector',
										elm$json$Json$Encode$string($.consejolector)),
										_Utils_Tuple2(
										'cronometro',
										elm$json$Json$Encode$string($.cronometro)),
										_Utils_Tuple2(
										'domasamblea',
										elm$json$Json$Encode$bool($.domasamblea)),
										_Utils_Tuple2(
										'domasambleamensage',
										elm$json$Json$Encode$string($.domasambleamensage)),
										_Utils_Tuple2(
										'domcancion2',
										elm$json$Json$Encode$int($.domcancion2)),
										_Utils_Tuple2(
										'domcancion3',
										elm$json$Json$Encode$int($.domcancion3)),
										_Utils_Tuple2(
										'domdiscursante',
										elm$json$Json$Encode$string($.domdiscursante)),
										_Utils_Tuple2(
										'domhaydiscursante',
										elm$json$Json$Encode$bool($.domhaydiscursante)),
										_Utils_Tuple2(
										'dompresidente',
										elm$json$Json$Encode$string($.dompresidente)),
										_Utils_Tuple2(
										'domrespcancion2',
										elm$json$Json$Encode$string($.domrespcancion2)),
										_Utils_Tuple2(
										'domrespcancion3',
										elm$json$Json$Encode$string($.domrespcancion3)),
										_Utils_Tuple2(
										'domtemacancion2',
										elm$json$Json$Encode$string($.domtemacancion2)),
										_Utils_Tuple2(
										'domtemacancion3',
										elm$json$Json$Encode$string($.domtemacancion3)),
										_Utils_Tuple2(
										'elcnarradorname',
										elm$json$Json$Encode$string($.elcnarradorname)),
										_Utils_Tuple2(
										'elcpersonajes',
										elm$json$Json$Encode$list(elm$json$Json$Encode$string)($.elcpersonajes)),
										_Utils_Tuple2(
										'elcversiculos',
										elm$json$Json$Encode$string($.elcversiculos)),
										_Utils_Tuple2(
										'fechadomingo',
										elm$json$Json$Encode$string($.fechadomingo)),
										_Utils_Tuple2(
										'fechasabado',
										elm$json$Json$Encode$string($.fechasabado)),
										_Utils_Tuple2(
										'ini1h1',
										elm$json$Json$Encode$string($.ini1h1)),
										_Utils_Tuple2(
										'ini2h1',
										elm$json$Json$Encode$string($.ini2h1)),
										_Utils_Tuple2(
										'lecturaversiculos',
										elm$json$Json$Encode$string($.lecturaversiculos)),
										_Utils_Tuple2(
										'nvc1anciano',
										elm$json$Json$Encode$bool($.nvc1anciano)),
										_Utils_Tuple2(
										'nvc1h1',
										elm$json$Json$Encode$string($.nvc1h1)),
										_Utils_Tuple2(
										'nvc2anciano',
										elm$json$Json$Encode$bool($.nvc2anciano)),
										_Utils_Tuple2(
										'nvc2h1',
										elm$json$Json$Encode$string($.nvc2h1)),
										_Utils_Tuple2(
										'nvc3h1',
										elm$json$Json$Encode$string($.nvc3h1)),
										_Utils_Tuple2(
										'nvc4h1',
										elm$json$Json$Encode$string($.nvc4h1)),
										_Utils_Tuple2(
										'nvc5h1',
										elm$json$Json$Encode$string($.nvc5h1)),
										_Utils_Tuple2(
										'nvc6h1',
										elm$json$Json$Encode$string($.nvc6h1)),
										_Utils_Tuple2(
										'nvc6h2',
										elm$json$Json$Encode$string($.nvc6h2)),
										_Utils_Tuple2(
										'nvcestudiolector',
										elm$json$Json$Encode$string($.nvcestudiolector)),
										_Utils_Tuple2(
										'nvcestudioorador',
										elm$json$Json$Encode$string($.nvcestudioorador)),
										_Utils_Tuple2(
										'nvcmins1',
										elm$json$Json$Encode$int($.nvcmins1)),
										_Utils_Tuple2(
										'nvcmins2',
										elm$json$Json$Encode$int($.nvcmins2)),
										_Utils_Tuple2(
										'nvcorador1',
										elm$json$Json$Encode$string($.nvcorador1)),
										_Utils_Tuple2(
										'nvcorador2',
										elm$json$Json$Encode$string($.nvcorador2)),
										_Utils_Tuple2(
										'nvctitulo1',
										elm$json$Json$Encode$string($.nvctitulo1)),
										_Utils_Tuple2(
										'nvctitulo2',
										elm$json$Json$Encode$string($.nvctitulo2)),
										_Utils_Tuple2(
										'oracion1',
										elm$json$Json$Encode$string($.oracion1)),
										_Utils_Tuple2(
										'oracion2',
										elm$json$Json$Encode$string($.oracion2)),
										_Utils_Tuple2(
										'presentacionesmes',
										elm$json$Json$Encode$string($.presentacionesmes)),
										_Utils_Tuple2(
										'presidente',
										elm$json$Json$Encode$string($.presidente)),
										_Utils_Tuple2(
										'respcancion1',
										elm$json$Json$Encode$string($.respcancion1)),
										_Utils_Tuple2(
										'respcancion2',
										elm$json$Json$Encode$string($.respcancion2)),
										_Utils_Tuple2(
										'respcancion3',
										elm$json$Json$Encode$string($.respcancion3)),
										_Utils_Tuple2(
										'sabasamblea',
										elm$json$Json$Encode$bool($.sabasamblea)),
										_Utils_Tuple2(
										'sabasambleamensage',
										elm$json$Json$Encode$string($.sabasambleamensage)),
										_Utils_Tuple2(
										'smm1ayuname',
										elm$json$Json$Encode$string($.smm1ayuname)),
										_Utils_Tuple2(
										'smm1esname',
										elm$json$Json$Encode$string($.smm1esname)),
										_Utils_Tuple2(
										'smm1h1',
										elm$json$Json$Encode$string($.smm1h1)),
										_Utils_Tuple2(
										'smm2ayuname',
										elm$json$Json$Encode$string($.smm2ayuname)),
										_Utils_Tuple2(
										'smm2esname',
										elm$json$Json$Encode$string($.smm2esname)),
										_Utils_Tuple2(
										'smm2h1',
										elm$json$Json$Encode$string($.smm2h1)),
										_Utils_Tuple2(
										'smm3ayuname',
										elm$json$Json$Encode$string($.smm3ayuname)),
										_Utils_Tuple2(
										'smm3esname',
										elm$json$Json$Encode$string($.smm3esname)),
										_Utils_Tuple2(
										'smm3h1',
										elm$json$Json$Encode$string($.smm3h1)),
										_Utils_Tuple2(
										'smm4ayuname',
										elm$json$Json$Encode$string($.smm4ayuname)),
										_Utils_Tuple2(
										'smm4esname',
										elm$json$Json$Encode$string($.smm4esname)),
										_Utils_Tuple2(
										'smm4h1',
										elm$json$Json$Encode$string($.smm4h1)),
										_Utils_Tuple2(
										'smmconsejo1',
										elm$json$Json$Encode$int($.smmconsejo1)),
										_Utils_Tuple2(
										'smmconsejo2',
										elm$json$Json$Encode$int($.smmconsejo2)),
										_Utils_Tuple2(
										'smmconsejo3',
										elm$json$Json$Encode$int($.smmconsejo3)),
										_Utils_Tuple2(
										'smmconsejo4',
										elm$json$Json$Encode$int($.smmconsejo4)),
										_Utils_Tuple2(
										'smmesvideo1',
										elm$json$Json$Encode$bool($.smmesvideo1)),
										_Utils_Tuple2(
										'smmesvideo2',
										elm$json$Json$Encode$bool($.smmesvideo2)),
										_Utils_Tuple2(
										'smmesvideo3',
										elm$json$Json$Encode$bool($.smmesvideo3)),
										_Utils_Tuple2(
										'smmesvideo4',
										elm$json$Json$Encode$bool($.smmesvideo4)),
										_Utils_Tuple2(
										'smmleccionmaestros',
										elm$json$Json$Encode$bool($.smmleccionmaestros)),
										_Utils_Tuple2(
										'smmmin1',
										elm$json$Json$Encode$int($.smmmin1)),
										_Utils_Tuple2(
										'smmmin2',
										elm$json$Json$Encode$int($.smmmin2)),
										_Utils_Tuple2(
										'smmmin3',
										elm$json$Json$Encode$int($.smmmin3)),
										_Utils_Tuple2(
										'smmmin4',
										elm$json$Json$Encode$int($.smmmin4)),
										_Utils_Tuple2(
										'smmtema1',
										elm$json$Json$Encode$string($.smmtema1)),
										_Utils_Tuple2(
										'smmtema2',
										elm$json$Json$Encode$string($.smmtema2)),
										_Utils_Tuple2(
										'smmtema3',
										elm$json$Json$Encode$string($.smmtema3)),
										_Utils_Tuple2(
										'smmtema4',
										elm$json$Json$Encode$string($.smmtema4)),
										_Utils_Tuple2(
										'smmtieneayudante1',
										elm$json$Json$Encode$bool($.smmtieneayudante1)),
										_Utils_Tuple2(
										'smmtieneayudante2',
										elm$json$Json$Encode$bool($.smmtieneayudante2)),
										_Utils_Tuple2(
										'smmtieneayudante3',
										elm$json$Json$Encode$bool($.smmtieneayudante3)),
										_Utils_Tuple2(
										'smmtieneayudante4',
										elm$json$Json$Encode$bool($.smmtieneayudante4)),
										_Utils_Tuple2(
										'tb1h1',
										elm$json$Json$Encode$string($.tb1h1)),
										_Utils_Tuple2(
										'tb1orador',
										elm$json$Json$Encode$string($.tb1orador)),
										_Utils_Tuple2(
										'tb1titulo',
										elm$json$Json$Encode$string($.tb1titulo)),
										_Utils_Tuple2(
										'tb2h1',
										elm$json$Json$Encode$string($.tb2h1)),
										_Utils_Tuple2(
										'tb3h1',
										elm$json$Json$Encode$string($.tb3h1)),
										_Utils_Tuple2(
										'tblector',
										elm$json$Json$Encode$string($.tblector)),
										_Utils_Tuple2(
										'tbperlasorador',
										elm$json$Json$Encode$string($.tbperlasorador)),
										_Utils_Tuple2(
										'temacancion1',
										elm$json$Json$Encode$string($.temacancion1)),
										_Utils_Tuple2(
										'temacancion2',
										elm$json$Json$Encode$string($.temacancion2)),
										_Utils_Tuple2(
										'temacancion3',
										elm$json$Json$Encode$string($.temacancion3))
									]));
						})($.semanastemplates))
				]));
	});
var elm$core$String$toLower = _String_toLower;
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$utc = A2(elm$time$Time$Zone, 0, _List_Nil);
var ryannhg$date_format$DateFormat$DayOfMonthNumber = {$: 'DayOfMonthNumber'};
var ryannhg$date_format$DateFormat$dayOfMonthNumber = ryannhg$date_format$DateFormat$DayOfMonthNumber;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$toUpper = _String_toUpper;
var elm$core$Basics$modBy = _Basics_modBy;
var elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return elm$core$Basics$floor(numerator / denominator);
	});
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var elm$time$Time$toAdjustedMinutes = F2(
	function (_n0, time) {
		var defaultOffset = _n0.a;
		var eras = _n0.b;
		return A3(
			elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				elm$time$Time$flooredDiv,
				elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			elm$core$Basics$modBy,
			24,
			A2(
				elm$time$Time$flooredDiv,
				A2(elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var elm$time$Time$toMillis = F2(
	function (_n0, time) {
		return A2(
			elm$core$Basics$modBy,
			1000,
			elm$time$Time$posixToMillis(time));
	});
var elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			elm$core$Basics$modBy,
			60,
			A2(elm$time$Time$toAdjustedMinutes, zone, time));
	});
var elm$time$Time$Apr = {$: 'Apr'};
var elm$time$Time$Aug = {$: 'Aug'};
var elm$time$Time$Dec = {$: 'Dec'};
var elm$time$Time$Feb = {$: 'Feb'};
var elm$time$Time$Jan = {$: 'Jan'};
var elm$time$Time$Jul = {$: 'Jul'};
var elm$time$Time$Jun = {$: 'Jun'};
var elm$time$Time$Mar = {$: 'Mar'};
var elm$time$Time$May = {$: 'May'};
var elm$time$Time$Nov = {$: 'Nov'};
var elm$time$Time$Oct = {$: 'Oct'};
var elm$time$Time$Sep = {$: 'Sep'};
var elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2(elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _n0 = elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_n0) {
			case 1:
				return elm$time$Time$Jan;
			case 2:
				return elm$time$Time$Feb;
			case 3:
				return elm$time$Time$Mar;
			case 4:
				return elm$time$Time$Apr;
			case 5:
				return elm$time$Time$May;
			case 6:
				return elm$time$Time$Jun;
			case 7:
				return elm$time$Time$Jul;
			case 8:
				return elm$time$Time$Aug;
			case 9:
				return elm$time$Time$Sep;
			case 10:
				return elm$time$Time$Oct;
			case 11:
				return elm$time$Time$Nov;
			default:
				return elm$time$Time$Dec;
		}
	});
var elm$time$Time$toSecond = F2(
	function (_n0, time) {
		return A2(
			elm$core$Basics$modBy,
			60,
			A2(
				elm$time$Time$flooredDiv,
				elm$time$Time$posixToMillis(time),
				1000));
	});
var elm$time$Time$Fri = {$: 'Fri'};
var elm$time$Time$Mon = {$: 'Mon'};
var elm$time$Time$Sat = {$: 'Sat'};
var elm$time$Time$Sun = {$: 'Sun'};
var elm$time$Time$Thu = {$: 'Thu'};
var elm$time$Time$Tue = {$: 'Tue'};
var elm$time$Time$Wed = {$: 'Wed'};
var elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _n0 = A2(
			elm$core$Basics$modBy,
			7,
			A2(
				elm$time$Time$flooredDiv,
				A2(elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_n0) {
			case 0:
				return elm$time$Time$Thu;
			case 1:
				return elm$time$Time$Fri;
			case 2:
				return elm$time$Time$Sat;
			case 3:
				return elm$time$Time$Sun;
			case 4:
				return elm$time$Time$Mon;
			case 5:
				return elm$time$Time$Tue;
			default:
				return elm$time$Time$Wed;
		}
	});
var ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2(elm$time$Time$toHour, zone, posix));
	});
var elm$time$Time$toDay = F2(
	function (zone, time) {
		return elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var ryannhg$date_format$DateFormat$dayOfMonth = elm$time$Time$toDay;
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var ryannhg$date_format$DateFormat$days = _List_fromArray(
	[elm$time$Time$Sun, elm$time$Time$Mon, elm$time$Time$Tue, elm$time$Time$Wed, elm$time$Time$Thu, elm$time$Time$Fri, elm$time$Time$Sat]);
var ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_n1) {
			var i = _n1.a;
			return i;
		}(
			A2(
				elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, elm$time$Time$Sun),
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (_n0) {
							var day = _n0.b;
							return _Utils_eq(
								day,
								A2(elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							ryannhg$date_format$DateFormat$days)))));
	});
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var elm$time$Time$toYear = F2(
	function (zone, time) {
		return elm$time$Time$toCivil(
			A2(elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return A2(elm$core$Basics$modBy, 4, year_) ? false : (A2(elm$core$Basics$modBy, 100, year_) ? true : (A2(elm$core$Basics$modBy, 400, year_) ? false : true));
};
var ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var ryannhg$date_format$DateFormat$months = _List_fromArray(
	[elm$time$Time$Jan, elm$time$Time$Feb, elm$time$Time$Mar, elm$time$Time$Apr, elm$time$Time$May, elm$time$Time$Jun, elm$time$Time$Jul, elm$time$Time$Aug, elm$time$Time$Sep, elm$time$Time$Oct, elm$time$Time$Nov, elm$time$Time$Dec]);
var ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, elm$time$Time$Jan),
			elm$core$List$head(
				A2(
					elm$core$List$filter,
					function (_n0) {
						var i = _n0.a;
						var m = _n0.b;
						return _Utils_eq(
							m,
							A2(elm$time$Time$toMonth, zone, posix));
					},
					A2(
						elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						ryannhg$date_format$DateFormat$months))));
	});
var ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_n0) {
			var i = _n0.a;
			var m = _n0.b;
			return i;
		}(
			A2(ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			elm$core$List$take,
			A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = elm$core$List$sum(
			A2(
				elm$core$List$map,
				ryannhg$date_format$DateFormat$daysInMonth(
					A2(elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - elm$core$String$length(numStr);
		var zeros = A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				function (_n0) {
					return '0';
				},
				A2(elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var elm$core$Basics$round = _Basics_round;
var ryannhg$date_format$DateFormat$millisecondsPerYear = elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return elm$time$Time$millisToPosix(
			ryannhg$date_format$DateFormat$millisecondsPerYear * A2(elm$time$Time$toYear, zone, time));
	});
var ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2(ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return elm$core$String$fromInt(
			A2(elm$time$Time$toYear, zone, time));
	});
var ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 'MonthNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthNameAbbreviated':
				return language.toMonthAbbreviation(
					A2(elm$time$Time$toMonth, zone, posix));
			case 'MonthNameFull':
				return language.toMonthName(
					A2(elm$time$Time$toMonth, zone, posix));
			case 'QuarterNumber':
				return elm$core$String$fromInt(
					1 + A2(ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'QuarterSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					1 + A2(ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'DayOfMonthNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfYearNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2(ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfWeekNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekNameAbbreviated':
				return language.toWeekdayAbbreviation(
					A2(elm$time$Time$toWeekday, zone, posix));
			case 'DayOfWeekNameFull':
				return language.toWeekdayName(
					A2(elm$time$Time$toWeekday, zone, posix));
			case 'WeekOfYearNumber':
				return elm$core$String$fromInt(
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'YearNumberLastTwo':
				return A2(
					elm$core$String$right,
					2,
					A2(ryannhg$date_format$DateFormat$year, zone, posix));
			case 'YearNumber':
				return A2(ryannhg$date_format$DateFormat$year, zone, posix);
			case 'AmPmUppercase':
				return elm$core$String$toUpper(
					A3(ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'AmPmLowercase':
				return elm$core$String$toLower(
					A3(ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'HourMilitaryNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toHour, zone, posix));
			case 'HourNumber':
				return elm$core$String$fromInt(
					ryannhg$date_format$DateFormat$toNonMilitary(
						A2(elm$time$Time$toHour, zone, posix)));
			case 'HourFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					ryannhg$date_format$DateFormat$toNonMilitary(
						A2(elm$time$Time$toHour, zone, posix)));
			case 'HourMilitaryFromOneNumber':
				return elm$core$String$fromInt(
					1 + A2(elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFromOneFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2(elm$time$Time$toHour, zone, posix));
			case 'MinuteNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toMinute, zone, posix));
			case 'MinuteFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toMinute, zone, posix));
			case 'SecondNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toSecond, zone, posix));
			case 'SecondFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2(elm$time$Time$toSecond, zone, posix));
			case 'MillisecondNumber':
				return elm$core$String$fromInt(
					A2(elm$time$Time$toMillis, zone, posix));
			case 'MillisecondFixed':
				return A2(
					ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2(elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				A3(ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var ryannhg$date_format$DateFormat$MonthNameFull = {$: 'MonthNameFull'};
var ryannhg$date_format$DateFormat$monthNameFull = ryannhg$date_format$DateFormat$MonthNameFull;
var ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var ryannhg$date_format$DateFormat$text = ryannhg$date_format$DateFormat$Text;
var ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var ryannhg$date_format$DateFormat$yearNumber = ryannhg$date_format$DateFormat$YearNumber;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {toAmPm: toAmPm, toMonthAbbreviation: toMonthAbbreviation, toMonthName: toMonthName, toOrdinalSuffix: toOrdinalSuffix, toWeekdayAbbreviation: toWeekdayAbbreviation, toWeekdayName: toWeekdayName};
	});
var ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var ryannhg$date_format$DateFormat$Language$toSpanishMonthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'Enero';
		case 'Feb':
			return 'Febrero';
		case 'Mar':
			return 'Marzo';
		case 'Apr':
			return 'Abril';
		case 'May':
			return 'Mayo';
		case 'Jun':
			return 'Junio';
		case 'Jul':
			return 'Julio';
		case 'Aug':
			return 'Agosto';
		case 'Sep':
			return 'Septiembre';
		case 'Oct':
			return 'Octubre';
		case 'Nov':
			return 'Noviembre';
		default:
			return 'Diciembre';
	}
};
var ryannhg$date_format$DateFormat$Language$toSpanishWeekdayName = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Lunes';
		case 'Tue':
			return 'Martes';
		case 'Wed':
			return 'Miércoles';
		case 'Thu':
			return 'Jueves';
		case 'Fri':
			return 'Viernes';
		case 'Sat':
			return 'Sábado';
		default:
			return 'Domingo';
	}
};
var ryannhg$date_format$DateFormat$Language$spanish = A6(
	ryannhg$date_format$DateFormat$Language$Language,
	ryannhg$date_format$DateFormat$Language$toSpanishMonthName,
	A2(
		elm$core$Basics$composeR,
		ryannhg$date_format$DateFormat$Language$toSpanishMonthName,
		elm$core$String$left(3)),
	ryannhg$date_format$DateFormat$Language$toSpanishWeekdayName,
	A2(
		elm$core$Basics$composeR,
		ryannhg$date_format$DateFormat$Language$toSpanishWeekdayName,
		elm$core$String$left(3)),
	ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	elm$core$Basics$always('°'));
var author$project$SemanaTemplConv$getDate = function (fecha) {
	return elm$core$String$toLower(
		A4(
			ryannhg$date_format$DateFormat$formatWithLanguage,
			ryannhg$date_format$DateFormat$Language$spanish,
			_List_fromArray(
				[
					ryannhg$date_format$DateFormat$dayOfMonthNumber,
					ryannhg$date_format$DateFormat$text(' de '),
					ryannhg$date_format$DateFormat$monthNameFull,
					ryannhg$date_format$DateFormat$text(' '),
					ryannhg$date_format$DateFormat$yearNumber
				]),
			elm$time$Time$utc,
			elm$time$Time$millisToPosix(fecha * 1000)));
};
var author$project$SemanaTemplConv$addMinutes = F2(
	function (minutes, time) {
		var totalminutes = time.minutes + minutes;
		var extrahours = (totalminutes / 60) | 0;
		var minutesleft = totalminutes - (extrahours * 60);
		var newhour = time.hour + extrahours;
		return {hour: newhour, minutes: minutesleft};
	});
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3(elm$core$String$repeatHelp, n, chunk, '');
	});
var elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				elm$core$String$repeat,
				n - elm$core$String$length(string),
				elm$core$String$fromChar(_char)),
			string);
	});
var author$project$SemanaTemplConv$gethour = F2(
	function (start, addmins) {
		var time1 = A2(author$project$SemanaTemplConv$addMinutes, addmins, start);
		var minutes1 = A3(
			elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			elm$core$String$fromInt(time1.minutes));
		var hourtemp = time1.hour;
		var hour1 = elm$core$String$fromInt(
			(hourtemp > 12) ? (hourtemp - 12) : hourtemp);
		return hour1 + (':' + minutes1);
	});
var author$project$SemanaTemplConv$toStringOrEmpty = function (num) {
	return (!num) ? '' : elm$core$String$fromInt(num);
};
var author$project$SemanaTemplConv$semanaToSemanaTempl = function (semana) {
	var meetingstartTime = {hour: semana.starthour, minutes: semana.startminute};
	var semanatempl = {
		aparatos: semana.aparatosname,
		camara: semana.camaraname,
		cancion1: semana.cancion1,
		cancion2: semana.cancion2,
		cancion3: semana.cancion3,
		consejolector: author$project$SemanaTemplConv$toStringOrEmpty(semana.consejolector),
		cronometro: semana.cronometroname,
		domasamblea: semana.domasamblea,
		domasambleamensage: semana.domasambleamensage,
		domcancion2: semana.domcancion2,
		domcancion3: semana.domcancion3,
		domdiscursante: semana.domdiscursante,
		domhaydiscursante: semana.domhaydiscursante,
		dompresidente: semana.dompresidentename,
		domrespcancion2: semana.domcancion2name,
		domrespcancion3: semana.domcancion3name,
		domtemacancion2: semana.domcancion2tema + (' ' + semana.domcancion2versiculo),
		domtemacancion3: semana.domcancion3tema + (' ' + semana.domcancion3versiculo),
		elcnarradorname: semana.elcnarradorname,
		elcpersonajes: A2(elm$core$String$split, '\n', semana.elcpersonajes),
		elcversiculos: semana.elcversiculos,
		fechadomingo: author$project$SemanaTemplConv$getDate(semana.fechadomingo),
		fechasabado: author$project$SemanaTemplConv$getDate(semana.fechasabado),
		ini1h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 0),
		ini2h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 5),
		lecturaversiculos: semana.lecturaversiculos,
		nvc1anciano: semana.nvcanciano1,
		nvc1h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 45),
		nvc2anciano: semana.nvcanciano2,
		nvc2h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 50),
		nvc3h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 50 + semana.nvcmins1),
		nvc4h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 65),
		nvc5h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 95),
		nvc6h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 100),
		nvc6h2: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 105),
		nvcestudiolector: semana.nvcestudiolectorname,
		nvcestudioorador: semana.nvcestudiooradorname,
		nvcmins1: semana.nvcmins1,
		nvcmins2: semana.nvcmins2,
		nvcorador1: semana.nvcorador1name,
		nvcorador2: semana.nvcorador2name,
		nvctitulo1: semana.nvctitulo1,
		nvctitulo2: semana.nvctitulo2,
		oracion1: semana.oracion1name,
		oracion2: semana.oracion2name,
		presentacionesmes: semana.presentacionesmesname,
		presidente: semana.presidentename,
		respcancion1: semana.cancion1name,
		respcancion2: semana.cancion2name,
		respcancion3: semana.cancion3name,
		sabasamblea: semana.sabasamblea,
		sabasambleamensage: semana.sabasambleamensage,
		smm1ayuname: semana.smm1ayuname,
		smm1esname: semana.smm1esname,
		smm1h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 30),
		smm2ayuname: semana.smm2ayuname,
		smm2esname: semana.smm2esname,
		smm2h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 30 + semana.smmmin1),
		smm3ayuname: semana.smm3ayuname,
		smm3esname: semana.smm3esname,
		smm3h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, (30 + semana.smmmin1) + semana.smmmin2),
		smm4ayuname: semana.smm4ayuname,
		smm4esname: semana.smm4esname,
		smm4h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, ((30 + semana.smmmin1) + semana.smmmin2) + semana.smmmin3),
		smmconsejo1: semana.smmconsejo1,
		smmconsejo2: semana.smmconsejo2,
		smmconsejo3: semana.smmconsejo3,
		smmconsejo4: semana.smmconsejo4,
		smmesvideo1: semana.smmesvideo1,
		smmesvideo2: semana.smmesvideo2,
		smmesvideo3: semana.smmesvideo3,
		smmesvideo4: semana.smmesvideo4,
		smmleccionmaestros: semana.smmleccionmaestros,
		smmmin1: semana.smmmin1,
		smmmin2: semana.smmmin2,
		smmmin3: semana.smmmin3,
		smmmin4: semana.smmmin4,
		smmtema1: semana.smmtema1,
		smmtema2: semana.smmtema2,
		smmtema3: semana.smmtema3,
		smmtema4: semana.smmtema4,
		smmtieneayudante1: semana.smmtieneayudante1,
		smmtieneayudante2: semana.smmtieneayudante2,
		smmtieneayudante3: semana.smmtieneayudante3,
		smmtieneayudante4: semana.smmtieneayudante4,
		tb1h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 8),
		tb1orador: semana.tb1oradorname,
		tb1titulo: semana.tb1titulo,
		tb2h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 18),
		tb3h1: A2(author$project$SemanaTemplConv$gethour, meetingstartTime, 26),
		tblector: semana.tblectorname,
		tbperlasorador: semana.tbperlasoradorname,
		temacancion1: semana.cancion1tema + (' ' + semana.cancion1versiculo),
		temacancion2: semana.cancion2tema + (' ' + semana.cancion2versiculo),
		temacancion3: semana.cancion3tema + (' ' + semana.cancion3versiculo)
	};
	return semanatempl;
};
var elm$json$Json$Decode$map2 = _Json_map2;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var author$project$Types$Cancion$Cancion = F5(
	function (num, tema, versiculo, asignado, idasignado) {
		return {asignado: asignado, idasignado: idasignado, num: num, tema: tema, versiculo: versiculo};
	});
var author$project$Types$Cancion$decodeCancion = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'idasignado',
	elm$json$Json$Decode$string,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'asignado',
		elm$json$Json$Decode$string,
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'versiculo',
			elm$json$Json$Decode$string,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'tema',
				elm$json$Json$Decode$string,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'num',
					elm$json$Json$Decode$int,
					elm$json$Json$Decode$succeed(author$project$Types$Cancion$Cancion))))));
var author$project$Types$Cancion$decodeCanciones = elm$json$Json$Decode$list(author$project$Types$Cancion$decodeCancion);
var author$project$Types$Publicador$Publicador = function (id) {
	return function (creado) {
		return function (modificado) {
			return function (name) {
				return function (varon) {
					return function (anciano) {
						return function (esvideo) {
							return function (presidentesabado) {
								return function (tb1orador) {
									return function (perlas) {
										return function (lecturabiblia) {
											return function (oracion) {
												return function (ayudante) {
													return function (principiante) {
														return function (smm1publicador) {
															return function (smm2publicador) {
																return function (smm3publicador) {
																	return function (smm4publicador) {
																		return function (smmdiscurso) {
																			return function (nvc) {
																				return function (estudiocongregacion) {
																					return function (lectorestudiocongregacion) {
																						return function (camara) {
																							return function (aparatos) {
																								return function (cronometro) {
																									return function (presidentedomingo) {
																										return function (fechanodisponibleinicio) {
																											return function (fechanodisponiblefin) {
																												return function (familiaressexoopuesto) {
																													return {anciano: anciano, aparatos: aparatos, ayudante: ayudante, camara: camara, creado: creado, cronometro: cronometro, estudiocongregacion: estudiocongregacion, esvideo: esvideo, familiaressexoopuesto: familiaressexoopuesto, fechanodisponiblefin: fechanodisponiblefin, fechanodisponibleinicio: fechanodisponibleinicio, id: id, lectorestudiocongregacion: lectorestudiocongregacion, lecturabiblia: lecturabiblia, modificado: modificado, name: name, nvc: nvc, oracion: oracion, perlas: perlas, presidentedomingo: presidentedomingo, presidentesabado: presidentesabado, principiante: principiante, smm1publicador: smm1publicador, smm2publicador: smm2publicador, smm3publicador: smm3publicador, smm4publicador: smm4publicador, smmdiscurso: smmdiscurso, tb1orador: tb1orador, varon: varon};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var elm$json$Json$Decode$maybe = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder),
				elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing)
			]));
};
var author$project$Types$Publicador$decodePublicador = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'familiaressexoopuesto',
	elm$json$Json$Decode$list(elm$json$Json$Decode$string),
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'fechanodisponiblefin',
		elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'fechanodisponibleinicio',
			elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'presidentedomingo',
				elm$json$Json$Decode$bool,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'cronometro',
					elm$json$Json$Decode$bool,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'aparatos',
						elm$json$Json$Decode$bool,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'camara',
							elm$json$Json$Decode$bool,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'lectorestudiocongregacion',
								elm$json$Json$Decode$bool,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'estudiocongregacion',
									elm$json$Json$Decode$bool,
									A3(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'nvc',
										elm$json$Json$Decode$bool,
										A3(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
											'smmdiscurso',
											elm$json$Json$Decode$bool,
											A3(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
												'smm4publicador',
												elm$json$Json$Decode$bool,
												A3(
													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
													'smm3publicador',
													elm$json$Json$Decode$bool,
													A3(
														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
														'smm2publicador',
														elm$json$Json$Decode$bool,
														A3(
															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
															'smm1publicador',
															elm$json$Json$Decode$bool,
															A3(
																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																'principiante',
																elm$json$Json$Decode$bool,
																A3(
																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																	'ayudante',
																	elm$json$Json$Decode$bool,
																	A3(
																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																		'oracion',
																		elm$json$Json$Decode$bool,
																		A3(
																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																			'lecturabiblia',
																			elm$json$Json$Decode$bool,
																			A3(
																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																				'perlas',
																				elm$json$Json$Decode$bool,
																				A3(
																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																					'tb1orador',
																					elm$json$Json$Decode$bool,
																					A3(
																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																						'presidentesabado',
																						elm$json$Json$Decode$bool,
																						A3(
																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																							'esvideo',
																							elm$json$Json$Decode$bool,
																							A3(
																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																								'anciano',
																								elm$json$Json$Decode$bool,
																								A3(
																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																									'varon',
																									elm$json$Json$Decode$bool,
																									A3(
																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																										'name',
																										elm$json$Json$Decode$string,
																										A3(
																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																											'modificado',
																											elm$json$Json$Decode$int,
																											A3(
																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																												'creado',
																												elm$json$Json$Decode$int,
																												A3(
																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																													'id',
																													elm$json$Json$Decode$string,
																													elm$json$Json$Decode$succeed(author$project$Types$Publicador$Publicador))))))))))))))))))))))))))))));
var author$project$Types$Publicador$decodePublicadores = elm$json$Json$Decode$list(author$project$Types$Publicador$decodePublicador);
var author$project$Types$Semana$Semana = function (id) {
	return function (creado) {
		return function (modificado) {
			return function (starthour) {
				return function (startminute) {
					return function (sabasamblea) {
						return function (sabasambleamensage) {
							return function (fechasabado) {
								return function (presidenteid) {
									return function (presidentename) {
										return function (cancion1) {
											return function (cancion1id) {
												return function (cancion1name) {
													return function (cancion1tema) {
														return function (cancion1versiculo) {
															return function (oracion1id) {
																return function (oracion1name) {
																	return function (tb1titulo) {
																		return function (tb1oradorid) {
																			return function (tb1oradorname) {
																				return function (tbperlasoradorid) {
																					return function (tbperlasoradorname) {
																						return function (consejolector) {
																							return function (tblectorid) {
																								return function (tblectorname) {
																									return function (lecturaversiculos) {
																										return function (smmleccionmaestros) {
																											return function (smmtema1) {
																												return function (smmtema2) {
																													return function (smmtema3) {
																														return function (smmtema4) {
																															return function (smmmin1) {
																																return function (smmmin2) {
																																	return function (smmmin3) {
																																		return function (smmmin4) {
																																			return function (smmconsejo1) {
																																				return function (smmconsejo2) {
																																					return function (smmconsejo3) {
																																						return function (smmconsejo4) {
																																							return function (smmesvideo1) {
																																								return function (smmesvideo2) {
																																									return function (smmesvideo3) {
																																										return function (smmesvideo4) {
																																											return function (smmtieneayudante1) {
																																												return function (smmtieneayudante2) {
																																													return function (smmtieneayudante3) {
																																														return function (smmtieneayudante4) {
																																															return function (smm1esid) {
																																																return function (smm1esname) {
																																																	return function (smm1ayuid) {
																																																		return function (smm1ayuname) {
																																																			return function (smm2esid) {
																																																				return function (smm2esname) {
																																																					return function (smm2ayuid) {
																																																						return function (smm2ayuname) {
																																																							return function (smm3esid) {
																																																								return function (smm3esname) {
																																																									return function (smm3ayuid) {
																																																										return function (smm3ayuname) {
																																																											return function (smm4esid) {
																																																												return function (smm4esname) {
																																																													return function (smm4ayuid) {
																																																														return function (smm4ayuname) {
																																																															return function (presentacionesmesid) {
																																																																return function (presentacionesmesname) {
																																																																	return function (cancion2) {
																																																																		return function (cancion2id) {
																																																																			return function (cancion2name) {
																																																																				return function (cancion2tema) {
																																																																					return function (cancion2versiculo) {
																																																																						return function (nvctitulo1) {
																																																																							return function (nvcmins1) {
																																																																								return function (nvcorador1id) {
																																																																									return function (nvcorador1name) {
																																																																										return function (nvcanciano1) {
																																																																											return function (nvctitulo2) {
																																																																												return function (nvcmins2) {
																																																																													return function (nvcorador2id) {
																																																																														return function (nvcorador2name) {
																																																																															return function (nvcanciano2) {
																																																																																return function (nvcestudiooradorid) {
																																																																																	return function (nvcestudiooradorname) {
																																																																																		return function (nvcestudiolectorid) {
																																																																																			return function (nvcestudiolectorname) {
																																																																																				return function (cancion3) {
																																																																																					return function (cancion3id) {
																																																																																						return function (cancion3name) {
																																																																																							return function (cancion3tema) {
																																																																																								return function (cancion3versiculo) {
																																																																																									return function (oracion2id) {
																																																																																										return function (oracion2name) {
																																																																																											return function (camaraid) {
																																																																																												return function (camaraname) {
																																																																																													return function (aparatosid) {
																																																																																														return function (aparatosname) {
																																																																																															return function (cronometroid) {
																																																																																																return function (cronometroname) {
																																																																																																	return function (domasamblea) {
																																																																																																		return function (domasambleamensage) {
																																																																																																			return function (fechadomingo) {
																																																																																																				return function (dompresidenteid) {
																																																																																																					return function (dompresidentename) {
																																																																																																						return function (domdiscursante) {
																																																																																																							return function (domhaydiscursante) {
																																																																																																								return function (domcancion2) {
																																																																																																									return function (domcancion2id) {
																																																																																																										return function (domcancion2name) {
																																																																																																											return function (domcancion2tema) {
																																																																																																												return function (domcancion2versiculo) {
																																																																																																													return function (domcancion3) {
																																																																																																														return function (domcancion3id) {
																																																																																																															return function (domcancion3name) {
																																																																																																																return function (domcancion3tema) {
																																																																																																																	return function (domcancion3versiculo) {
																																																																																																																		return function (elcversiculos) {
																																																																																																																			return function (elcnarradorid) {
																																																																																																																				return function (elcnarradorname) {
																																																																																																																					return function (elcpersonajes) {
																																																																																																																						return {aparatosid: aparatosid, aparatosname: aparatosname, camaraid: camaraid, camaraname: camaraname, cancion1: cancion1, cancion1id: cancion1id, cancion1name: cancion1name, cancion1tema: cancion1tema, cancion1versiculo: cancion1versiculo, cancion2: cancion2, cancion2id: cancion2id, cancion2name: cancion2name, cancion2tema: cancion2tema, cancion2versiculo: cancion2versiculo, cancion3: cancion3, cancion3id: cancion3id, cancion3name: cancion3name, cancion3tema: cancion3tema, cancion3versiculo: cancion3versiculo, consejolector: consejolector, creado: creado, cronometroid: cronometroid, cronometroname: cronometroname, domasamblea: domasamblea, domasambleamensage: domasambleamensage, domcancion2: domcancion2, domcancion2id: domcancion2id, domcancion2name: domcancion2name, domcancion2tema: domcancion2tema, domcancion2versiculo: domcancion2versiculo, domcancion3: domcancion3, domcancion3id: domcancion3id, domcancion3name: domcancion3name, domcancion3tema: domcancion3tema, domcancion3versiculo: domcancion3versiculo, domdiscursante: domdiscursante, domhaydiscursante: domhaydiscursante, dompresidenteid: dompresidenteid, dompresidentename: dompresidentename, elcnarradorid: elcnarradorid, elcnarradorname: elcnarradorname, elcpersonajes: elcpersonajes, elcversiculos: elcversiculos, fechadomingo: fechadomingo, fechasabado: fechasabado, id: id, lecturaversiculos: lecturaversiculos, modificado: modificado, nvcanciano1: nvcanciano1, nvcanciano2: nvcanciano2, nvcestudiolectorid: nvcestudiolectorid, nvcestudiolectorname: nvcestudiolectorname, nvcestudiooradorid: nvcestudiooradorid, nvcestudiooradorname: nvcestudiooradorname, nvcmins1: nvcmins1, nvcmins2: nvcmins2, nvcorador1id: nvcorador1id, nvcorador1name: nvcorador1name, nvcorador2id: nvcorador2id, nvcorador2name: nvcorador2name, nvctitulo1: nvctitulo1, nvctitulo2: nvctitulo2, oracion1id: oracion1id, oracion1name: oracion1name, oracion2id: oracion2id, oracion2name: oracion2name, presentacionesmesid: presentacionesmesid, presentacionesmesname: presentacionesmesname, presidenteid: presidenteid, presidentename: presidentename, sabasamblea: sabasamblea, sabasambleamensage: sabasambleamensage, smm1ayuid: smm1ayuid, smm1ayuname: smm1ayuname, smm1esid: smm1esid, smm1esname: smm1esname, smm2ayuid: smm2ayuid, smm2ayuname: smm2ayuname, smm2esid: smm2esid, smm2esname: smm2esname, smm3ayuid: smm3ayuid, smm3ayuname: smm3ayuname, smm3esid: smm3esid, smm3esname: smm3esname, smm4ayuid: smm4ayuid, smm4ayuname: smm4ayuname, smm4esid: smm4esid, smm4esname: smm4esname, smmconsejo1: smmconsejo1, smmconsejo2: smmconsejo2, smmconsejo3: smmconsejo3, smmconsejo4: smmconsejo4, smmesvideo1: smmesvideo1, smmesvideo2: smmesvideo2, smmesvideo3: smmesvideo3, smmesvideo4: smmesvideo4, smmleccionmaestros: smmleccionmaestros, smmmin1: smmmin1, smmmin2: smmmin2, smmmin3: smmmin3, smmmin4: smmmin4, smmtema1: smmtema1, smmtema2: smmtema2, smmtema3: smmtema3, smmtema4: smmtema4, smmtieneayudante1: smmtieneayudante1, smmtieneayudante2: smmtieneayudante2, smmtieneayudante3: smmtieneayudante3, smmtieneayudante4: smmtieneayudante4, starthour: starthour, startminute: startminute, tb1oradorid: tb1oradorid, tb1oradorname: tb1oradorname, tb1titulo: tb1titulo, tblectorid: tblectorid, tblectorname: tblectorname, tbperlasoradorid: tbperlasoradorid, tbperlasoradorname: tbperlasoradorname};
																																																																																																																					};
																																																																																																																				};
																																																																																																																			};
																																																																																																																		};
																																																																																																																	};
																																																																																																																};
																																																																																																															};
																																																																																																														};
																																																																																																													};
																																																																																																												};
																																																																																																											};
																																																																																																										};
																																																																																																									};
																																																																																																								};
																																																																																																							};
																																																																																																						};
																																																																																																					};
																																																																																																				};
																																																																																																			};
																																																																																																		};
																																																																																																	};
																																																																																																};
																																																																																															};
																																																																																														};
																																																																																													};
																																																																																												};
																																																																																											};
																																																																																										};
																																																																																									};
																																																																																								};
																																																																																							};
																																																																																						};
																																																																																					};
																																																																																				};
																																																																																			};
																																																																																		};
																																																																																	};
																																																																																};
																																																																															};
																																																																														};
																																																																													};
																																																																												};
																																																																											};
																																																																										};
																																																																									};
																																																																								};
																																																																							};
																																																																						};
																																																																					};
																																																																				};
																																																																			};
																																																																		};
																																																																	};
																																																																};
																																																															};
																																																														};
																																																													};
																																																												};
																																																											};
																																																										};
																																																									};
																																																								};
																																																							};
																																																						};
																																																					};
																																																				};
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var author$project$Types$Semana$decodeSemana = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'elcpersonajes',
	elm$json$Json$Decode$string,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'elcnarradorname',
		elm$json$Json$Decode$string,
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'elcnarradorid',
			elm$json$Json$Decode$string,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'elcversiculos',
				elm$json$Json$Decode$string,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'domcancion3versiculo',
					elm$json$Json$Decode$string,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'domcancion3tema',
						elm$json$Json$Decode$string,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'domcancion3name',
							elm$json$Json$Decode$string,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'domcancion3id',
								elm$json$Json$Decode$string,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'domcancion3',
									elm$json$Json$Decode$int,
									A3(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'domcancion2versiculo',
										elm$json$Json$Decode$string,
										A3(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
											'domcancion2tema',
											elm$json$Json$Decode$string,
											A3(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
												'domcancion2name',
												elm$json$Json$Decode$string,
												A3(
													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
													'domcancion2id',
													elm$json$Json$Decode$string,
													A3(
														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
														'domcancion2',
														elm$json$Json$Decode$int,
														A3(
															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
															'domhaydiscursante',
															elm$json$Json$Decode$bool,
															A3(
																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																'domdiscursante',
																elm$json$Json$Decode$string,
																A3(
																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																	'dompresidentename',
																	elm$json$Json$Decode$string,
																	A3(
																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																		'dompresidenteid',
																		elm$json$Json$Decode$string,
																		A3(
																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																			'fechadomingo',
																			elm$json$Json$Decode$int,
																			A3(
																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																				'domasambleamensage',
																				elm$json$Json$Decode$string,
																				A3(
																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																					'domasamblea',
																					elm$json$Json$Decode$bool,
																					A3(
																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																						'cronometroname',
																						elm$json$Json$Decode$string,
																						A3(
																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																							'cronometroid',
																							elm$json$Json$Decode$string,
																							A3(
																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																								'aparatosname',
																								elm$json$Json$Decode$string,
																								A3(
																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																									'aparatosid',
																									elm$json$Json$Decode$string,
																									A3(
																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																										'camaraname',
																										elm$json$Json$Decode$string,
																										A3(
																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																											'camaraid',
																											elm$json$Json$Decode$string,
																											A3(
																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																												'oracion2name',
																												elm$json$Json$Decode$string,
																												A3(
																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																													'oracion2id',
																													elm$json$Json$Decode$string,
																													A3(
																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																														'cancion3versiculo',
																														elm$json$Json$Decode$string,
																														A3(
																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																															'cancion3tema',
																															elm$json$Json$Decode$string,
																															A3(
																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																'cancion3name',
																																elm$json$Json$Decode$string,
																																A3(
																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																	'cancion3id',
																																	elm$json$Json$Decode$string,
																																	A3(
																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																		'cancion3',
																																		elm$json$Json$Decode$int,
																																		A3(
																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																			'nvcestudiolectorname',
																																			elm$json$Json$Decode$string,
																																			A3(
																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																				'nvcestudiolectorid',
																																				elm$json$Json$Decode$string,
																																				A3(
																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																					'nvcestudiooradorname',
																																					elm$json$Json$Decode$string,
																																					A3(
																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																						'nvcestudiooradorid',
																																						elm$json$Json$Decode$string,
																																						A3(
																																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																							'nvcanciano2',
																																							elm$json$Json$Decode$bool,
																																							A3(
																																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																								'nvcorador2name',
																																								elm$json$Json$Decode$string,
																																								A3(
																																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																									'nvcorador2id',
																																									elm$json$Json$Decode$string,
																																									A3(
																																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																										'nvcmins2',
																																										elm$json$Json$Decode$int,
																																										A3(
																																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																											'nvctitulo2',
																																											elm$json$Json$Decode$string,
																																											A3(
																																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																												'nvcanciano1',
																																												elm$json$Json$Decode$bool,
																																												A3(
																																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																													'nvcorador1name',
																																													elm$json$Json$Decode$string,
																																													A3(
																																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																														'nvcorador1id',
																																														elm$json$Json$Decode$string,
																																														A3(
																																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																															'nvcmins1',
																																															elm$json$Json$Decode$int,
																																															A3(
																																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																'nvctitulo1',
																																																elm$json$Json$Decode$string,
																																																A3(
																																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																	'cancion2versiculo',
																																																	elm$json$Json$Decode$string,
																																																	A3(
																																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																		'cancion2tema',
																																																		elm$json$Json$Decode$string,
																																																		A3(
																																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																			'cancion2name',
																																																			elm$json$Json$Decode$string,
																																																			A3(
																																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																				'cancion2id',
																																																				elm$json$Json$Decode$string,
																																																				A3(
																																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																					'cancion2',
																																																					elm$json$Json$Decode$int,
																																																					A3(
																																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																						'presentacionesmesname',
																																																						elm$json$Json$Decode$string,
																																																						A3(
																																																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																							'presentacionesmesid',
																																																							elm$json$Json$Decode$string,
																																																							A3(
																																																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																								'smm4ayuname',
																																																								elm$json$Json$Decode$string,
																																																								A3(
																																																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																									'smm4ayuid',
																																																									elm$json$Json$Decode$string,
																																																									A3(
																																																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																										'smm4esname',
																																																										elm$json$Json$Decode$string,
																																																										A3(
																																																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																											'smm4esid',
																																																											elm$json$Json$Decode$string,
																																																											A3(
																																																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																												'smm3ayuname',
																																																												elm$json$Json$Decode$string,
																																																												A3(
																																																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																													'smm3ayuid',
																																																													elm$json$Json$Decode$string,
																																																													A3(
																																																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																														'smm3esname',
																																																														elm$json$Json$Decode$string,
																																																														A3(
																																																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																															'smm3esid',
																																																															elm$json$Json$Decode$string,
																																																															A3(
																																																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																'smm2ayuname',
																																																																elm$json$Json$Decode$string,
																																																																A3(
																																																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																	'smm2ayuid',
																																																																	elm$json$Json$Decode$string,
																																																																	A3(
																																																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																		'smm2esname',
																																																																		elm$json$Json$Decode$string,
																																																																		A3(
																																																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																			'smm2esid',
																																																																			elm$json$Json$Decode$string,
																																																																			A3(
																																																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																				'smm1ayuname',
																																																																				elm$json$Json$Decode$string,
																																																																				A3(
																																																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																					'smm1ayuid',
																																																																					elm$json$Json$Decode$string,
																																																																					A3(
																																																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																						'smm1esname',
																																																																						elm$json$Json$Decode$string,
																																																																						A3(
																																																																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																							'smm1esid',
																																																																							elm$json$Json$Decode$string,
																																																																							A3(
																																																																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																								'smmtieneayudante4',
																																																																								elm$json$Json$Decode$bool,
																																																																								A3(
																																																																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																									'smmtieneayudante3',
																																																																									elm$json$Json$Decode$bool,
																																																																									A3(
																																																																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																										'smmtieneayudante2',
																																																																										elm$json$Json$Decode$bool,
																																																																										A3(
																																																																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																											'smmtieneayudante1',
																																																																											elm$json$Json$Decode$bool,
																																																																											A3(
																																																																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																												'smmesvideo4',
																																																																												elm$json$Json$Decode$bool,
																																																																												A3(
																																																																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																													'smmesvideo3',
																																																																													elm$json$Json$Decode$bool,
																																																																													A3(
																																																																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																														'smmesvideo2',
																																																																														elm$json$Json$Decode$bool,
																																																																														A3(
																																																																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																															'smmesvideo1',
																																																																															elm$json$Json$Decode$bool,
																																																																															A3(
																																																																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																'smmconsejo4',
																																																																																elm$json$Json$Decode$int,
																																																																																A3(
																																																																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																	'smmconsejo3',
																																																																																	elm$json$Json$Decode$int,
																																																																																	A3(
																																																																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																		'smmconsejo2',
																																																																																		elm$json$Json$Decode$int,
																																																																																		A3(
																																																																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																			'smmconsejo1',
																																																																																			elm$json$Json$Decode$int,
																																																																																			A3(
																																																																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																				'smmmin4',
																																																																																				elm$json$Json$Decode$int,
																																																																																				A3(
																																																																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																					'smmmin3',
																																																																																					elm$json$Json$Decode$int,
																																																																																					A3(
																																																																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																						'smmmin2',
																																																																																						elm$json$Json$Decode$int,
																																																																																						A3(
																																																																																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																							'smmmin1',
																																																																																							elm$json$Json$Decode$int,
																																																																																							A3(
																																																																																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																								'smmtema4',
																																																																																								elm$json$Json$Decode$string,
																																																																																								A3(
																																																																																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																									'smmtema3',
																																																																																									elm$json$Json$Decode$string,
																																																																																									A3(
																																																																																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																										'smmtema2',
																																																																																										elm$json$Json$Decode$string,
																																																																																										A3(
																																																																																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																											'smmtema1',
																																																																																											elm$json$Json$Decode$string,
																																																																																											A3(
																																																																																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																												'smmleccionmaestros',
																																																																																												elm$json$Json$Decode$bool,
																																																																																												A3(
																																																																																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																													'lecturaversiculos',
																																																																																													elm$json$Json$Decode$string,
																																																																																													A3(
																																																																																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																														'tblectorname',
																																																																																														elm$json$Json$Decode$string,
																																																																																														A3(
																																																																																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																															'tblectorid',
																																																																																															elm$json$Json$Decode$string,
																																																																																															A3(
																																																																																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																'consejolector',
																																																																																																elm$json$Json$Decode$int,
																																																																																																A3(
																																																																																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																	'tbperlasoradorname',
																																																																																																	elm$json$Json$Decode$string,
																																																																																																	A3(
																																																																																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																		'tbperlasoradorid',
																																																																																																		elm$json$Json$Decode$string,
																																																																																																		A3(
																																																																																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																			'tb1oradorname',
																																																																																																			elm$json$Json$Decode$string,
																																																																																																			A3(
																																																																																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																				'tb1oradorid',
																																																																																																				elm$json$Json$Decode$string,
																																																																																																				A3(
																																																																																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																					'tb1titulo',
																																																																																																					elm$json$Json$Decode$string,
																																																																																																					A3(
																																																																																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																						'oracion1name',
																																																																																																						elm$json$Json$Decode$string,
																																																																																																						A3(
																																																																																																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																							'oracion1id',
																																																																																																							elm$json$Json$Decode$string,
																																																																																																							A3(
																																																																																																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																								'cancion1versiculo',
																																																																																																								elm$json$Json$Decode$string,
																																																																																																								A3(
																																																																																																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																									'cancion1tema',
																																																																																																									elm$json$Json$Decode$string,
																																																																																																									A3(
																																																																																																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																										'cancion1name',
																																																																																																										elm$json$Json$Decode$string,
																																																																																																										A3(
																																																																																																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																											'cancion1id',
																																																																																																											elm$json$Json$Decode$string,
																																																																																																											A3(
																																																																																																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																												'cancion1',
																																																																																																												elm$json$Json$Decode$int,
																																																																																																												A3(
																																																																																																													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																													'presidentename',
																																																																																																													elm$json$Json$Decode$string,
																																																																																																													A3(
																																																																																																														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																														'presidenteid',
																																																																																																														elm$json$Json$Decode$string,
																																																																																																														A3(
																																																																																																															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																															'fechasabado',
																																																																																																															elm$json$Json$Decode$int,
																																																																																																															A3(
																																																																																																																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																'sabasambleamensage',
																																																																																																																elm$json$Json$Decode$string,
																																																																																																																A3(
																																																																																																																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																	'sabasamblea',
																																																																																																																	elm$json$Json$Decode$bool,
																																																																																																																	A3(
																																																																																																																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																		'startminute',
																																																																																																																		elm$json$Json$Decode$int,
																																																																																																																		A3(
																																																																																																																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																			'starthour',
																																																																																																																			elm$json$Json$Decode$int,
																																																																																																																			A3(
																																																																																																																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																				'modificado',
																																																																																																																				elm$json$Json$Decode$int,
																																																																																																																				A3(
																																																																																																																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																					'creado',
																																																																																																																					elm$json$Json$Decode$int,
																																																																																																																					A3(
																																																																																																																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																																																																																																																						'id',
																																																																																																																						elm$json$Json$Decode$string,
																																																																																																																						elm$json$Json$Decode$succeed(author$project$Types$Semana$Semana)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
var author$project$Types$Semana$decodeSemanas = elm$json$Json$Decode$list(author$project$Types$Semana$decodeSemana);
var elm$core$Debug$log = _Debug_log;
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var author$project$App$update = F2(
	function (message, model) {
		switch (message.$) {
			case 'FillSemana':
				var str = message.a;
				var semana = A2(elm$json$Json$Decode$decodeString, author$project$Types$Semana$decodeSemana, str);
				var modelwithsemanatofill = function () {
					if (semana.$ === 'Err') {
						var err = semana.a;
						var _n2 = A2(elm$core$Debug$log, 'FillSemana err', err);
						return model;
					} else {
						var res = semana.a;
						return _Utils_update(
							model,
							{semanatofill: res});
					}
				}();
				var modelllenado = author$project$LlenarSemana$llenarsemana(modelwithsemanatofill);
				return _Utils_Tuple2(
					modelllenado,
					author$project$Ports$fillSemanaCallBack(modelllenado.semanatofill));
			case 'FillSemanas':
				var str = message.a;
				var semanas = A2(elm$json$Json$Decode$decodeString, author$project$Types$Semana$decodeSemanas, str);
				var modelwithsemanas = function () {
					if (semanas.$ === 'Err') {
						var err = semanas.a;
						var _n4 = A2(elm$core$Debug$log, 'FillSemanas err', err);
						return model;
					} else {
						var res = semanas.a;
						return _Utils_update(
							model,
							{semanastofill: res});
					}
				}();
				var newmodel = author$project$LlenarSemana$llenarsemanas(modelwithsemanas);
				var semanastempl = A2(
					elm$core$List$map,
					function (sem) {
						return author$project$SemanaTemplConv$semanaToSemanaTempl(sem);
					},
					newmodel.semanasllenados);
				return _Utils_Tuple2(
					newmodel,
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								author$project$Ports$fillSemanasCallBack(newmodel.semanasllenados),
								author$project$Ports$fillSemanasTemplCallBack(semanastempl),
								author$project$Ports$programasemanalbackupCallBack(
								A2(author$project$App$createBackup, newmodel, semanastempl))
							])));
			case 'LoadSemanasAnteriores':
				var str = message.a;
				var semanasAnteriores = A2(elm$json$Json$Decode$decodeString, author$project$Types$Semana$decodeSemanas, str);
				var modelwithSemanasAnteriores = function () {
					if (semanasAnteriores.$ === 'Err') {
						var err = semanasAnteriores.a;
						var _n6 = A2(elm$core$Debug$log, 'LoadSemanasAnteriores error', err);
						return model;
					} else {
						var semanas = semanasAnteriores.a;
						return _Utils_update(
							model,
							{semanasanteriores: semanas});
					}
				}();
				return _Utils_Tuple2(modelwithSemanasAnteriores, elm$core$Platform$Cmd$none);
			case 'LoadPublicadores':
				var str = message.a;
				var publicadores = A2(elm$json$Json$Decode$decodeString, author$project$Types$Publicador$decodePublicadores, str);
				var modelwithPublicadores = function () {
					if (publicadores.$ === 'Err') {
						var err = publicadores.a;
						var _n8 = A2(elm$core$Debug$log, 'publicadores err', err);
						return model;
					} else {
						var pubs = publicadores.a;
						return _Utils_update(
							model,
							{publicadores: pubs});
					}
				}();
				return _Utils_Tuple2(modelwithPublicadores, elm$core$Platform$Cmd$none);
			case 'LoadCanciones':
				var str = message.a;
				var canciones = A2(elm$json$Json$Decode$decodeString, author$project$Types$Cancion$decodeCanciones, str);
				var modelwithCanciones = function () {
					if (canciones.$ === 'Err') {
						var err = canciones.a;
						var _n10 = A2(elm$core$Debug$log, 'canciones err', err);
						return model;
					} else {
						var canciones1 = canciones.a;
						return _Utils_update(
							model,
							{canciones: canciones1});
					}
				}();
				return _Utils_Tuple2(modelwithCanciones, elm$core$Platform$Cmd$none);
			case 'Programasemanalrestore':
				var backup = message.a;
				var newmodel = A2(
					elm$core$Debug$log,
					'restore',
					_Utils_update(
						model,
						{
							canciones: backup.canciones,
							publicadores: backup.publicadores,
							semanasanteriores: A2(elm$core$List$append, backup.semanasanteriores, backup.semanasanteriores),
							semanasllenados: _List_Nil
						}));
				return _Utils_Tuple2(newmodel, elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{canciones: _List_Nil, publicadores: _List_Nil, semanasanteriores: _List_Nil, semanasllenados: _List_Nil}),
					elm$core$Platform$Cmd$none);
		}
	});
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$App$addrow = function (idname) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui grid')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('row')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('right floated two wide column')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$a,
								_List_fromArray(
									[
										elm$html$Html$Attributes$id(idname)
									]),
								_List_fromArray(
									[
										A3(
										elm$html$Html$node,
										'i',
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('fas fa-plus-circle fa-w-16 fa-3x')
											]),
										_List_Nil)
									]))
							]))
					]))
			]));
};
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var author$project$App$tabanteriores = _List_fromArray(
	[
		A2(
		elm$html$Html$h1,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Copia de seguridad')
			])),
		A2(
		elm$html$Html$input,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui button'),
				elm$html$Html$Attributes$type_('file'),
				A2(elm$html$Html$Attributes$attribute, 'id', 'cargarcopiaseguridad'),
				A2(elm$html$Html$Attributes$attribute, 'value', 'Cargar Copia de Seguridad')
			]),
		_List_Nil),
		A2(elm$html$Html$br, _List_Nil, _List_Nil),
		A2(
		elm$html$Html$h1,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Semanas anteriores')
			])),
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$attribute, 'id', 'table-anteriores')
			]),
		_List_Nil),
		author$project$App$addrow('addrowanteriores')
	]);
var author$project$App$tabcanciones = _List_fromArray(
	[
		A2(
		elm$html$Html$h1,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Canciones')
			])),
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$attribute, 'id', 'table-canciones')
			]),
		_List_Nil),
		author$project$App$addrow('addrowcanciones')
	]);
var elm$html$Html$button = _VirtualDom_node('button');
var author$project$App$tabcrear = _List_fromArray(
	[
		A2(
		elm$html$Html$h1,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Crear Programa')
			])),
		A2(
		elm$html$Html$button,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui button'),
				A2(elm$html$Html$Attributes$attribute, 'id', 'process')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Crear')
			])),
		A2(elm$html$Html$br, _List_Nil, _List_Nil),
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$attribute, 'id', 'links')
			]),
		_List_Nil)
	]);
var elm$html$Html$h2 = _VirtualDom_node('h2');
var author$project$App$tabllenar = _List_fromArray(
	[
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui row')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('left floated six wide column')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$h1,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('ui header')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Semanas para llenar')
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('right floated six wide column')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$h2,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('ui header')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Cargar')
							])),
						A2(
						elm$html$Html$input,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('ui button'),
								elm$html$Html$Attributes$type_('file'),
								A2(elm$html$Html$Attributes$attribute, 'id', 'selectFiles'),
								A2(elm$html$Html$Attributes$attribute, 'value', 'Cargar semanas para llenar')
							]),
						_List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]))
			])),
		A2(
		elm$html$Html$h2,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Tabla')
			])),
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$attribute, 'id', 'example-table')
			]),
		_List_Nil),
		author$project$App$addrow('addrowllenar'),
		A2(
		elm$html$Html$button,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui secondary button'),
				A2(elm$html$Html$Attributes$attribute, 'id', 'download-json')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Descargar Semanas para llenar JSON')
			]))
	]);
var author$project$App$tabpublicadores = _List_fromArray(
	[
		A2(
		elm$html$Html$h1,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui header')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Publicadores')
			])),
		A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$attribute, 'id', 'table-publicadores')
			]),
		_List_Nil),
		author$project$App$addrow('addrowpublicadores')
	]);
var author$project$App$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('ui container')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tabular menu')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('item'),
								A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-llenar')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Para Llenar')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('item'),
								A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-anterior')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Datos Anteriores ')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('item'),
								A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-publicadores')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Publicadores')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('item'),
								A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-canciones')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Canciones')
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('item'),
								A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-crear')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Crear ')
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tab'),
						A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-llenar')
					]),
				author$project$App$tabllenar),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tab'),
						A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-publicadores')
					]),
				author$project$App$tabpublicadores),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tab'),
						A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-canciones')
					]),
				author$project$App$tabcanciones),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tab'),
						A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-anterior')
					]),
				author$project$App$tabanteriores),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('ui tab'),
						A2(elm$html$Html$Attributes$attribute, 'data-tab', 'tab-crear')
					]),
				author$project$App$tabcrear)
			]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{
		init: function (_n0) {
			return author$project$App$init;
		},
		subscriptions: author$project$App$subscriptions,
		update: author$project$App$update,
		view: author$project$App$view
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));