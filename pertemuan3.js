var a = "";

for (var i=6; i>=1; i--) {
    
    for (var j=1; j<=i; j++) {
        a += "*";   
    }
    a += "\n";
}
console.log(a);