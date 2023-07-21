var a = 1;
var b = 1;
document.write(a+", " + b + ", ");
for (var i = 1; i<=15; i++){
    
    var c = (a+b);
    document.write(c + ",");
    a=b;
    b=c;
}