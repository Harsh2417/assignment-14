var ch;
function CheckVowel()
{
  ch = document.getElementById("ch").value;
  if(ch)
  {
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))
    {
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
        document.write("'"+ch+"'"+"  It's a vowel");
      else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
      document.write("'"+ch+"'"+"  It's a vowel");
      else
      document.write(" It's a consonent");
    }
  }
}
