//variable declaration

function numberPrinting()
{
    for(var i=1;i<=10;i++)
    {
        console.log(i);
    }
}

// function oddNumbers(num)
// {
//     if(num%2==1)
//     {
//         console.log("Odd number");
//     }
// }

// function evenNumbers(num)
// {
//     if(num%2==0)
//     {
//         console.log("even number");
//     }
// }

function oddEvenCheck(num)
{
    if(num%2==1)
    {
        console.log("Odd number");
    }
    if(num%2==0)
    {
        console.log("even number");
    }

    
}
    function numbercheck (num)
    {
        if(num>10)
        {
            console.log("Greater than 10");
        }   


         if(num<10)
        {
            console.log("Less than 10");
        }   

        if(num=10)
        {
             console.log("Equal 10")

         }

    }

    numbercheck(10);