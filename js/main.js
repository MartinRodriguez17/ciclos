document.write("Hola mundo");
document.write("Hola mundo");
document.write("Hola mundo", "<br>");
/*es un ciclo en el cual tiene tres parametros, la funcion es repetir un bloque de codigo las veces necesarias
for (condicion){
    bloque de codigo
}
*/
/*for (i=0 ; i<=10; i+=2){ //veces en las que se va a repetir
    //document.write("Hola desde js", "<br>");
    document.write(i, "<br>")

}
*/
for (i=3; i<=15; i+=1){ //veces en las que se va a repetir
    //document.write("Hola desde js", "<br>");
    document.write(i, "<br>");
    if(i%2==0){
        document.write("números par : ", i, "<br>");

    }
}