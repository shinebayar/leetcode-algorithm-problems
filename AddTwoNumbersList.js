var addTwoNumbers = function (l1, l2) {
    let l1_rev = [];
    for (var i = l1.length - 1; i >= 0; i--) {
        l1_rev.push(l1[i]);
    }

    let l2_rev = [];
    for (var i = l2.length - 1; i >= 0; i--) {
        l2_rev.push(l2[i]);
    }

    let answer = [];
    let l1_tmp = "";
    let l2_tmp = "";

    for (var i = 0; i < l1_rev.length; i++) {
        l1_tmp += l1[i].toString();
    }

    for (var i = 0; i < l2_rev.length; i++) {
        l2_tmp += l2[i].toString();
    }

    var sum = (parseInt(l1_tmp) + parseInt(l2_tmp)).toString();

    for (var i = 0; i < sum.length; i++) {
        answer.push(sum.charAt(i));
    }

    let answer1 = [];
    for( i=answer.length-1; i >=0; i-- ){
        answer1.push(answer[i]);
    }

    console.log(answer1);

    return answer1;
};

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
addTwoNumbers([2, 4, 3], [5, 6, 4]);

// [3,4,2]
// [7,6,5]
// [1, 1, 0, 7]
