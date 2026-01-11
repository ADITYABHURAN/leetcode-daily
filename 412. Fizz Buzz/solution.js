var fizzBuzz = function(n) {
    const res = [];

    for (let i = 1; i <= n; i++) {
        let out = "";

        if (i % 3 === 0) {
            out += "Fizz";
        }

        if (i % 5 === 0) {
            out += "Buzz";
        }

        if (out === "") {
            out = i.toString();
        }

        res.push(out);
    }

    return res;
};
