# What is load.js

**load.js** is a tiny javascript/css loader written in Javascript (4KB minified code!).
Based on [l.js](http://malko.github.io/l.js/), with awesome Youtube-like loading bar integrated.

# Installation

To use load.js in production code, you need to:

```
<link href="lib/load.css" rel="stylesheet">
<script src="lib/load.js"></script>
```

For debug, you should use load.debug.js:

```
<script src="lib/load.debug.js"></script>
```

# How to use?

```
// Define your resources list here
var urls = [
"javascript.js",
"style.css",
"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js",
"bootstrap.css",
"bootstrap.js"
];

load.all(urls, function(){
    // DONE!
});
```

Default color, with callback
```
load.all(urls, function(){
    // DONE!
});
```

Custom color, available color: green, red, yellow, orange, blue, violet, white
```
load.all("red", urls, function(){
    // DONE!
});
```

Keep the loading bar after loaded. Color must be included!
```
load.all("red", urls, function(){
    // DONE!
}, true);
```

# Environment setup for contributors

For setup development environment, you need to have:
- NodeJS
- Gulp
- BrowserSync
- UglifyJS
- UglifyCSS

To install these packages, just run:
```
npm install
```

# Run development server

Development server help you:
- Automatically refresh browser on edit
- Minify Javascript and CSS files

You can find minified Javascript and CSS file (for production) in `lib` folder.

To run development server:
```
gulp serve
```
