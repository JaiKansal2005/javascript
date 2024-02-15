/*    Declare a variable score and assign it a numerical value representing your test score.
    Write nested if...else statements to determine the grade based on the score.
        If the score is 90 or above, print "A".
        If the score is between 80 and 89, print "B".
        If the score is between 70 and 79, print "C".
        If the score is below 70, print "F". */

        let score=99;

        if(score>=90) console.log("A");

        else{
            if(score>=80 && score<=89) console.log("B");
                else{
                    if(score>=70 && score<=79) console.log("C")
                     else console.log("F");}
                
        }
        