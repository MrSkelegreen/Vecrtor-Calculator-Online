'use strict';

class Vars
{
    constructor() 
    { 
        this.a1 = Number(document.getElementById("a1").value);
        this.a2 = Number(document.getElementById("a2").value);
        this.a3 = Number(document.getElementById("a3").value);
        this.b1 = Number(document.getElementById("b1").value);
        this.b2 = Number(document.getElementById("b2").value);
        this.b3 = Number(document.getElementById("b3").value);
        try
        {
            this.c1 = Number(document.getElementById("c1").value);
            this.c2 = Number(document.getElementById("c2").value);
            this.c3 = Number(document.getElementById("c3").value);
        }
        catch{}
    }
}

function getsum()
{
    
    var vars = new Vars();

    var res1 = vars.a1 + vars.b1;
    var res2 = vars.a2 + vars.b2;
    var res3 = vars.a3 + vars.b3;

    document.getElementById("answer").value =  "a + b = (" + res1 + ", " + res2 + ", " + res3 + ")";

    return false;
}