/*
    Have the function MathChallenge(str) take the str parameter,
    which will be a simple mathematical formula with three numbers,
    a single operator (+, -, *, or /) and an equal sign (=)
    and return the digit that completes the equation.

    In one of the numbers in the equation,
    there will be an x character,
    and your program should determine what digit is missing.

    For example,
    if str is "3x + 12 = 46" then your program should output 4.

    The x character can appear in any of the three numbers
    and all three numbers will be greater than or equal to 0
    and less than or equal to 1000000.

    Input: "4 - 2 = x"
    Output: 2

    Input: "1x0 * 12 = 1200"
    Output: 0
*/

function MathChallenge( str ) {

    // code goes here

    const operators = [ "+", "-", "*", "/" ]
    const nums = []
    let num = ""
    let xPosition
    let ePosition
    let oPosition
    let operator
    let index

    for ( let i = 0; i < str.length; i++ ) {

        if ( ! isNaN( parseInt( str[ i ] ) ) )
            num += str[ i ]

        else if ( str[ i ] === "x" ) {

            num += "0"
            xPosition = i
            index = num.length - 1

        } else if ( num.length > 0 ) {

            nums.push( num )
            num = ""

        }

        if ( operators.includes( str[ i ] ) ) {

            operator = str[ i ]
            oPosition = i

        }

        if ( str[ i ] === "=" )
            ePosition = i

    }

    nums.push( num )

    let val
    let containingNumber

    if ( xPosition < oPosition )
        containingNumber = 0

    if ( xPosition > oPosition && xPosition < ePosition )
        containingNumber = 1

    if ( xPosition > ePosition )
        containingNumber = 2

    for ( let i = 0; i <= 9; i++ ) {

        if ( index === 0 )
            nums[ containingNumber ] = i + nums[ containingNumber ].slice( 1 )

        else if ( index !== nums[ containingNumber ].length - 1 )
            nums[ containingNumber ] = nums[ containingNumber ].slice( 0, index ) + i + nums[ containingNumber ].slice( index + 1)

        else
            nums[ containingNumber ] = nums[ containingNumber ].slice( 0, index ) + i

        if ( operator === "+" )
            val = parseInt( nums[ 0 ] ) + parseInt( nums[ 1 ] )

        if ( operator === "-" )
            val = parseInt( nums[ 0 ] ) - parseInt( nums[ 1 ] )

        if ( operator === "*" )
            val = parseInt( nums[ 0 ] ) * parseInt( nums[ 1 ] )

        if ( operator === "/" )
            val = parseInt( nums[ 0 ] ) / parseInt( nums[ 1 ] )

        if ( val === parseInt( nums[ 2 ] ) )
            return i

    }

    // No valid one digit non-negative number can be found
    return false

}

console.log( MathChallenge( "1 + 1111 = x112" ) ) // return 1
console.log( MathChallenge( "3x + 12 = 46" ) ) // return 4
console.log( MathChallenge( "4 - 2 = x" ) ) // return 2
console.log( MathChallenge( "1x0 * 12 = 1200" ) ) // return 0