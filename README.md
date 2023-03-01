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
