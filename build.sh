#!/bin/sh
cat src/*.js | uglifyjs -m -c -o lib/load.js
uglifycss src/*.css > lib/load.css
echo "Before ---------------"
ls -l -d src/*
echo "After ----------------"
ls -l -d lib/*
