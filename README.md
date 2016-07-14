array-for_each
=======

executes a provided function once per array element.


```javascript
var arrayForEach = require("@nathanfaucett/array-for_each");


arrayForEach([2, 4, 6], function(value, index, array) {
    console.log(value, index, array);
});
```
