var n;
function even()
{
  n = document.getElementById("n").value;
  for(let i=1;i<=n;i++)
  {
      if(i%2==0)
      document.write( +i );
      document.write("<br>");
  }
}
