var n;
function prime(){
    let count=0;
    n=document.getElementById("n").value;
    for(let i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            count++;
        }}
        if(count==0)
       {
            document.write(+n+" is a prime number");
       }
       else
       {
        document.write(+n+" is not a prime number");    
      
    }
    }
