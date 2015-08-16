var tape = require("tape"),
    arrayForEach = require("..");


tape("arrayForEach(array, callback) executes a provided function once per array element", function(assert) {
    var count = 0;

    arrayForEach([0, 1, 2, 3, 4], function() {
        count += 1;
    });

    assert.equals(count, 5);
    assert.end();
});
