/* @flow weak */

var n1 = 0
function f1() {
    n1 += 1
}

var n2 = 0
function f2() {
    n2 -= 1
    n2 += 1
}
