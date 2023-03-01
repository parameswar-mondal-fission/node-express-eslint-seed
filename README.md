# Welcome to Eslint Express Seed prototype!
This is eslint based express js prototype.

# Specifying Environments
An environment provides predefined global variables. The available environments are:
- es6 - enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
- node - Node.js global variables and Node.js scoping.
- mocha - adds all of the Mocha testing global variables.
- es2022 - adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.


# Specifying Parser Options
```
ESLint allows you to specify the JavaScript language options you want to support. By default, 
ESLint expects ECMAScript 5 syntax. We can override that setting to enable support for other ECMAScript 
versions and JSX using parser options.

Supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as Set). 
For ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }; for new ES6 global variables, 
use { "env": { "es6": true } }. Setting { "env": { "es6": true } } enables ES6 syntax automatically, 
but { "parserOptions": { "ecmaVersion": 6 } } does not enable ES6 globals automatically.

"parserOptions" property. The available options are:
- ecmaVersion: set to 3, 5 (default), 6, 7, 8, 9, 10, 11, 12, 13, or 14 to specify the version of 
ECMAScript syntax you want to use. We can also set "latest" to use the most recently supported version.
- sourceType:  set to "script" (default) or "module" if your code is in ECMAScript modules.
```

# ESLint rules and there use!

### linebreak-style
```
This rule enforces consistent line endings independent of operating system, VCS, 
or editor used across your codebase.
The linebreaks (new lines) used in windows operating system are usually 
carriage returns (CR) followed by a line feed (LF) making it a carriage return line feed (CRLF) 
whereas Linux and Unix use a simple line feed (LF). 
The corresponding control sequences are "\n" (for LF) and "\r\n" for (CRLF).
```

### quotes
```
This rule enforces the consistent use of either backticks, double, or single quotes.
```

### semi
```
This rule enforces consistent use of semicolons.
```

### comma-dangle
```
Require or disallow trailing commas. This rule enforces consistent use of trailing commas in object 
and array literals.
```

### arrow-body-style
```
This rule can enforce or disallow the use of braces around arrow function body.
```

### prefer-arrow-callback
```
This rule locates function expressions used as callbacks or function arguments. An error will be 
produced for any that could be replaced by an arrow function without changing the result.
```

### no-console
```
This rule disallows calls or assignments to methods of the console object.
```

### no-unused-vars
```
Disallow unused variables. This rule is aimed at eliminating unused variables, 
functions, and function parameters.
```

### prefer-const
```
Require const declarations for variables that are never reassigned after declared. 
This rule is aimed at flagging variables that are declared using let keyword, 
but never reassigned after the initial assignment.
```

### no-var
```
This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
```

### require-atomic-updates
```
This rule aims to report assignments to variables or properties in cases where the assignments may be based on outdated values.
```

### no-case-declarations
```
This rule aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across case clauses.
```

### no-useless-escape
```
This rule flags escapes that can be safely removed without changing behavior.
```

### space-before-blocks
```
This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don’t begin on a new line.

- This rule ignores spacing which is between => and a block. The spacing is handled by the arrow-spacing rule.
- This rule ignores spacing which is between a keyword and a block. The spacing is handled by the keyword-spacing rule.
- This rule ignores spacing which is between : of a switch case and a block. The spacing is handled by the switch-colon-spacing rule.
```

### no-else-return
```
This rule is aimed at highlighting an unnecessary block of code following an if containing a return statement. As such, it will warn when it encounters an else following a chain of ifs, all of them containing a return statement.
```

### spaced-comment
```
This rule will enforce consistency of spacing after the start of a comment // or /*. It also provides several exceptions for various documentation styles.
```

### keyword-spacing
```
This rule enforces consistent spacing around keywords and keyword-like tokens: as (in module declarations), async (of async functions), await (of await expressions), break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, from (in module declarations), function, get (of getters), if, import, in (in for-in statements), let, new, of (in for-of statements), return, set (of setters), static, super, switch, this, throw, try, typeof, var, void, while, with, and yield. This rule is designed carefully not to conflict with other spacing rules: it does not apply to spacing where other rules report problems.
```

### no-multiple-empty-lines
```
This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.
```

### comma-style
```
This rule enforce consistent comma style in array literals, object literals, and variable declarations.

This rule does not apply in either of the following cases:

- comma preceded and followed by linebreak (lone comma)
- single-line array literals, object literals, and variable declarations
```

### array-bracket-spacing
```
This rule enforces consistent spacing inside array brackets.
```

### block-spacing
```
This rule enforces consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line.
```

### comma-spacing
```
This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.

This rule does not apply in either of the following cases:

- between two commas
- between opening bracket [ and comma, to avoid conflicts with the array-bracket-spacing rule
- between comma and closing bracket ], to avoid conflicts with the array-bracket-spacing rule
- between comma and closing brace }, to avoid conflicts with the object-curly-spacing rule
- between comma and closing parentheses ), to avoid conflicts with the space-in-parens rule
```

### no-duplicate-imports
```
This rule requires that all imports from a single module that can be merged exist in a single import statement.
```
