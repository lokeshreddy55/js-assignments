'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    }
    else if (num % 3 == 0) {
        return 'Fizz';
    }
    else if (num % 5 == 0) {
        return 'Buzz';
    }
    return num;
    //throw new Error('Not implemented');
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
    //throw new Error('Not implemented');
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
    //throw new Error('Not implemented');
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return true;
    }
    return false;
    //throw new Error('Not implemented');
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    let x1 = rect1.left;                        //bottom left points
    let y1 = rect1.height + rect1.top;
    let x2 = rect1.width + rect1.left;          //top right points
    let y2 = rect1.top;

    let x3 = rect2.left;                        //""
    let y3 = rect2.height + rect2.top;
    let x4 = rect2.width + rect2.left;          //""
    let y4 = rect2.top;

    if (x3 >= x2 || x1 >= x4 || y2 >= y3 || y4 >= y1) {        //x's - sidebyside & y's -up&down
        return false;
    }
    return true;

    //throw new Error('Not implemented');
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    let x1 = circle.center.x;
    let y1 = circle.center.y;
    let radius = circle.radius;
    let x2 = point.x;
    let y2 = point.y;

    let dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (dist >= radius) {
        return false;
    }
    return true;
    //throw new Error('Not implemented');
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str.charAt(i))) {
            let val = map.get(str.charAt(i));
            val++;
            map.set(str.charAt(i), val);
        }
        else {
            map.set(str.charAt(i), 1);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str.charAt(i)) == 1) {
            return str.charAt(i).toString();
        }
    }
    return null;
    //throw new Error('Not implemented');
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let firstchar, lastchar;
    firstchar = isStartIncluded ? "[" : "(";
    lastchar = isEndIncluded ? "]" : ")";
    let high = a > b ? a : b;
    let low = a < b ? a : b;
    return `${firstchar}${low}, ${high}${lastchar}`;
    //throw new Error('Not implemented');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
    //throw new Error('Not implemented');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let str = num.toString();
    console.log(str);
    let revstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str.charAt(i).toString();
    } console.log(revstr);
    return Number(revstr);
    //throw new Error('Not implemented');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    //throw new Error('Not implemented');
    var f = function (n) {
        n *= 2;
        return n > 9 ? n - 9 : n;
    };

    var ccnArr = ccn.toString().match(/\d/g).map(x => parseInt(x));
    var x = ccnArr.slice(-1)[0];
    var digits = ccnArr.slice(0, -1);
    var sum = digits.reduce((prev, elem, i) => { return prev += ((digits.length - i) % 2 ? f(elem) : elem); }, 0);
    var residue = sum % 10;
    var newX = residue === 0 ? 0 : 10 - residue;
    return newX === x;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let arr = [];
    while (num != 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    } console.log(arr);
    let sum = arr.reduce((prev, curr) => prev + curr, 0);
    console.log(sum);
    if (sum > 9) {
        return getDigitalRoot(sum);
    }
    return sum;
    //throw new Error('Not implemented');
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let last = arr[arr.length - 1];
        if ((last == '[' && str.charAt(i) == ']') || (last == '{' && str.charAt(i) == '}')
            || (last == '(' && str.charAt(i) == ')') || (last == '<' && str.charAt(i) == '>')) {
            arr.pop();
        }
        else {
            arr.push(str.charAt(i));
        }
    }
    if (arr.length == 0) {
        return true;
    }
    return false;
    //throw new Error('Not implemented');
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {   //doubt3
    // let yrs = endDate.getFullYear() - startDate.getFullYear();
    // let months = endDate.getMonth() - startDate.getMonth();
    // let days = endDate.getDate() - startDate.getDate();
    // let hrs = endDate.getHours() - startDate.getHours();
    // let mins = endDate.getMinutes() - startDate.getMinutes();
    // let secs = endDate.getSeconds() - startDate.getSeconds();
    // let msec = endDate.getMilliSeconds() - startDate.getMilliSeconds();
    // days += (yrs*365)+(months*30);
    // if(days != 0){
    //    if(days >= 546){
    //        let y = Math.round(days/365);
    //        return `${y} years ago`;
    //    }
    //    else if(days>=345 && days<=545){
    //        return `a year ago`;
    //    }
    //    else if(days>=45 && days<345){
    //        let m = Math.round(days/30);
    //        return `${m} months ago`;
    //    }
    //    else if(days>25 && days<45){
    //     //let m = Math.round(days/30);
    //     return `a month ago`;
    //   }
    //   else if(hrs>=12 && (mins>0 || secs>0 || msec>0)){
    //       hrs++;
    //   }
    //   else if(days == 1){
    //       return `a day ago`;
    //   }
    //     return `${days} days ago`;
    // }
    // else if(hrs != 0){
    //     if(hrs>=22 && hrs<=36){
    //         return `a day ago`;
    //     }
    //    else if(mins >= 30 && (secs>0 || msec>0)){
    //           hrs++;
    //    }
    //    else if(hrs == 1){
    //        return `an hour ago`;
    //    }
    //     else{
    //         return `${hrs} hours ago`;
    //     }
    // }
    // else if(mins != 0){
    //     if((mins>45 && mins<=90) || (min>=45 && mins<=90 && (secs>0 || msec>0))){
    //         return `an hour ago`;
    //     }
    //     else if(mins == 1 || (mins == 1 && secs>0 && secs<=30 && msec==0)){
    //         return `a minute ago`;
    //     }
    //     else if(secs>=30 && msec>0){
    //         mins++;
    //     }
    //     else{
    //         return `${mins} minutes ago`;
    //     }
    // }
    // else if(secs != 0){
    //     if((secs>=45 && msec>0) && secs<=90){
    //         return `a minute ago`;
    //     }else{
    //         return `a few seconds ago`;
    //     }
    // }
    // else{
    //     return `a few seconds ago`;
    // }
    function Span(start, end, f) {
        this.has = function (span) {
            return start < span && span <= end;
        };

        this.get = function (span) {
            return f(span);
        };
    }

    const HOUR = 60 * 60;
    const DAY = 60 * 60 * 24;
    const MONTH = 60 * 60 * 24 * 30;
    const YEAR = 60 * 60 * 24 * 365;

    var getTime = (d) => (new Date(d)).getTime();
    var timeSpan = (getTime(endDate) - getTime(startDate)) / 1000;

    var spans = [
        new Span(-0, 45, x => 'a few seconds ago'),
        new Span(45, 90, x => 'a minute ago'),
        new Span(90, 2 * 60, x => `${Math.ceil(x / 60)} minutes ago`),
        new Span(2 * 60, 45 * 60, x => `${Math.floor(x / 60)} minutes ago`),
        new Span(45 * 60, 90 * 60, x => `an hour ago`),
        new Span(90 * 60, 2 * HOUR, x => `${Math.ceil(x / HOUR)} hours ago`),
        new Span(2 * HOUR, 4.5 * HOUR, x => `${Math.floor(x / HOUR)} hours ago`),
        new Span(4.5 * HOUR, 22 * HOUR, x => `${Math.ceil(x / HOUR)} hours ago`),
        new Span(22 * HOUR, 36 * HOUR, x => `a day ago`),
        new Span(36 * HOUR, 2 * DAY, x => `${Math.ceil(x / DAY)} days ago`),
        new Span(2 * DAY, 25 * DAY, x => `${Math.floor(x / DAY)} days ago`),
        new Span(25 * DAY, 45 * DAY, x => `a month ago`),
        new Span(45 * DAY, 340 * DAY, x => `${Math.ceil(x / MONTH)} months ago`),
        new Span(340 * DAY, 345 * DAY, x => `${Math.floor(x / MONTH)} months ago`),
        new Span(345 * DAY, 545 * DAY, x => `a year ago`),
        new Span(546 * DAY, Infinity, x => `${Math.floor(x / YEAR)} years ago`),
    ];

    return spans.find(x => x.has(timeSpan)).get(timeSpan);
    //throw new Error('Not implemented');
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return num.toString(n);
    //throw new Error('Not implemented');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {                  //LCS doubt3
    var pathesArr = pathes.map(x => x.split('/'));
    pathesArr.sort((a, b) => a.length - b.length);
    var theShortest = pathesArr[0];
    pathesArr.splice(0, 1);
    var res = [];
    var i = 0;
    while (pathesArr.every(x => x[i] === theShortest[i])) {
        res.push(theShortest[i++] + '/');
    };
    return res.join('');
    // throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let r = m1.length;
    let c = m2[0].length;
    let res = []
    for (let ii = 0; ii < r; ii++) {
        res[ii] = [];
        res[ii].push(...Array(c).fill(0));
    }
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m2[i].length; j++) {
            for (let k = 0; k < m2.length; k++) {
                res[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }
    return res;
    //throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let getField = function (num) {
        let row = Math.floor(num / 3);
        let col = num % 3;
        return position[row][col];
    }

    let tryConmbin = function (combin) {
        var valuesFields = combin.map(x => getField(x));
        let every = s => valuesFields.every(x => x === s);
        if (every('X'))
            return 'X';
        if (every('0'))
            return '0';
        return undefined;
    }

    let result = undefined;

    let handleCombin = function (combin) {
        result = tryConmbin(combin);
        return result;
    }

    combinations.find(handleCombin);
    return result;
    // throw new Error('Not implemented');
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};
