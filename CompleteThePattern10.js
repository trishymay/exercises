function pattern(n){
 var output="";
   if (n > 0) {
     var arr = [];
     for (var h = n; h > 0; h--) {
       for (var j = h-1; j > 0; j--)
         arr.push(" ");
       for (var i = 0; i < n; i++)
         arr.push((i + 1) % 10);
       for (var k = h; k < n; k++)
         arr.push(" ");
       if (h > 1)
         arr.push("\n");
     }
     output = arr.join("");
   }
 return output;
}