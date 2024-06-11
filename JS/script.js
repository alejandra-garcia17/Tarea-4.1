class Ejercicio {
    // orden de procedencia:  (), ^ *, / mod div, + - ; del mismo nivel se resuelve de 
    // izquierda a derecha

    //Ejercicio1
    // 1. Dado a=3 y b=7, encuentra el valor de y = 2 * a + b - a mod 3.
    /*Algoritmo expresiones_matematicas_Ej1
	
	// y = 2 * a + b - 3 mod 3
	// y = 2 * 3 + 7 - 3  mod 3
	// y = 6 + 7 - 3 mod 3
	// y = 6 + 7  - 0
	// y =  13
	
	Definir a, b, x  Como Entero
	a <- 3
    b <- 7
	
    x <- 2 * a + b - a MOD 3
	
    Escribir "El valor de x es: ", x
	
    FinAlgoritmo*/

    expresion1() {
        let a=3, b=7
        let x = 2 * a + b - a % 3
        let resp = document.getElementById("resultado")

        resp.innerHTML = `x = 2 * ${a} + ${b} - ${a} % 3 = ${x}` 
    }

    //Ejercicio 2
    // 2. Si a=10 y b=4, calcula el valor de z = a * b + 3 mod a + b.
    /*Algoritmo expresiones_matematicas_E1
	
	// z = a * b + 3 mod a + b
	// z = 10 * 4 + 3 mod 10 + 4
	// z = 40 + 3 + 0 + 4
	// z = 47
	
	Definir a, b, z  Como Entero
	a <- 10
    b <- 4
	
    z <- a * b + 3 mod a + b
	
    Escribir "El valor de Z es: ", z
	
    FinAlgoritmo*/

    expresion2(){
        let a=10, b=4
        let z = a * b + 3 % a + b
        let resp = document.getElementById("resultado")

        resp.innerHTML = `z = ${a} * ${b} + 3 % ${a} + ${b} = ${z}` 
    }

    //Ejercicio 3
    // Ejercicio 3: Con a = 6 y b = 2, determina el valor de w = a - b + 2 * a mod b.
    /*Algoritmo expresiones_matematicas_Ej3
	
	// w = a - b + 2 * a mod b
	// w = 6 - 2 + 2 * 6 mod 2
	// w = 6 - 2 + 12 mod 2
	// w = 6 - 2 + 0
	// w = 4
	
	Definir a, b, w  Como Entero
	a <- 6
    b <- 2
	
    w <- a - b + 2 * a mod b
	
    Escribir "El valor de w es: ", w
	
    FinAlgoritmo*/

    expresion3(){
        let a=6, b=2
        let w = a - b + 2 * a % b
        let resp = document.getElementById("resultado")

        resp.innerHTML = `w = ${a} - ${b} + 2 * ${a} % ${b} = ${w}` 
    }

    //Ejercicio 4
    // 4. Para a = 8 y b = 5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
    /*Algoritmo expresiones_matematicas_Ej4
	
	// v = 2 * b + a div 2 + 4 * b mod a
	// v = 2 * 5 + 8 div 2 (* suplanto el div por el trunc *) + 4 * 5 mod 8 
	// v = 10 + 4 + 4 * 0 
	// v = 18
	
	Definir a, b, v Como Entero
	a <- 8
    b <- 5
	
    v <- 2 * b + trunc(a/2) + 4 * b mod a
	
    Escribir "El valor de v es: ", v
	
    FinAlgoritmo*/

    expresion4(){
        let a=8, b=5
        let v = 2 * b + Math.floor(a / 2) + 4 * b % a
        let resp = document.getElementById("resultado")

        resp.innerHTML = `v = 2 * ${b} + ${Math.floor(a / 2)} + 4 * ${b} % ${a} = ${v}`
    }

    //Ejercicio 5
    // Ejercicio 1:Si a = 12 y b = 9, calcula el valor de u = b - a + 3 * a mod b.
    /*Algoritmo expresiones_matematicas_Ej5
	
	// u = b - a + 3 * a mod b
	// u = 9 - 12 + 3 * 12 mod 9
	// u = 9 - 12 + 36 mod 9
	// u = 9 - 12 + 0 
	// u = -3
	
	Definir a, b, u Como Entero
	a <- 12
	b <- 9
	
	u = b - a + 3 * a mod b
	
	Escribir "El valor de u es: ", u
	
    FinAlgoritmo*/

    expresion5(){
        let a=12, b=9
        let u = b - a + 3 * a % b
        let resp = document.getElementById("resultado")

        resp.innerHTML = `u = ${b} - ${a} + 3 * ${a} % ${b} = ${u}`
    }

    //Ejercicio 6
    // 6. (5 + 3 * 2) + 9 > 3 * 5 * 14 mod 3
    /*Algoritmo expresiones_matematicas_Ej6
	
	// 11 + 9 > 210 % 3
	// 20 > 0
	// Verdadero, ya que 20 si es mayor a 0
	
	Definir resultado Como logico
	
	resultado <- (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
	
	Escribir "El resultado es: ", resultado
	
    FinAlgoritmo*/

    expresion6(){
        let t = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 
        let resp = document.getElementById("resultado")

        resp.innerHTML = `t = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 = ${t}`
    }

    // Ejercicio 7
    // 7. 2 * (4 - 10 + 8)/2 * 36 * (1/2)
    /*Algoritmo expresiones_matematicas_Ej7
	
	// 2 * 2 / 2 * 36 * 0,5
	// 36
	
	Definir resultado Como Real
    resultado <- (2 * (4 - 10 + 8)) / (2 * 36 * (1/2))
    Escribir "El resultado es: ", resultado

    FinAlgoritmo*/

    expresion7(){
        let s = 2 * (4 - 10 + 8)/2 * 36 * (1/2)
        let resp = document.getElementById("resultado")

        resp.innerHTML = `s = 2 * (4 - 10 + 8)/2 * 36 * (1/2) = ${s}`
    }

    //Ejercicio 8
    // 8. 260 / 12 + 54 % 3 – 85 % 7
    /*Algoritmo  Expresiones_matematicas_EJ8

    // 260 / 12 + 54 % 3 - 85 % 7
    // 260 / 12 = 21.666666666666668
    // 54 % 3 = 0
    // 85 % 7 = 1
    // 21.666666666666668 + 0 - 1 = 20.666666666666668

    Definir resultado Como Real;
    resuñtado = 260 / 12 + 54 % 3 – 85 % 7
    Escribir "El resultado es: ", resultado
	
    FinAlgoritmo*/

    expresion8(){
        let r = 260 / 12 + 54 % 3 - 85 % 7
        let resp = document.getElementById("resultado")

        resp.innerHTML = `r = 260 / 12 + 54 % 3 - 85 % 7 = ${r.toFixed(2)}`
    }

    //Ejercicio 9
    // 9. (48 < 2 * 3) | | (2 * 7 < 12)
    /*Algoritmo Expresiones_matematicasEJ9

    // 2 * 3 = 6
    // 2 * 7 = 14
    // 48 < 6 = Falso
    // 14 < 12 = Falso
    // Falso OR Falso = Falso

	Definir resultado Como Logico
    resultado = (48 < 2 * 3) || (2 * 7 < 12)
    
    Escribir "El resultado es:", resultado
	
    FinAlgoritmo*/

    expresion9(){
        let q = (48 < 2 * 3) || (2 * 7 < 12)
        let resp = document.getElementById("resultado")

        resp.innerHTML = `q = (48 < 2 * 3) || (2 * 7 < 12) = ${q}`
    }

    // Ejercicio 10
    // 10.  ((8 > 2) || (932 < 23) ) && 4 == 2
    /*Algoritmo Expresiones_matematicasEJ9

    // 8 > 2 = Verdadero
    // 932 < 23 = Falso
    // Verdadero OR Falso = Verdadero
    // 4 == 2 = Falso
    // Verdadero AND Falso = Falso

	Definir resultado Como Logico
    resultado = (48 < 2 * 3) || (2 * 7 < 12)
    
    Escribir "El resultado es:", resultado
	
    FinAlgoritmo*/

    expresion10(){
        let p = ((8 > 2) || (932 < 23) ) && 4 == 2
        let resp = document.getElementById("resultado")

        resp.innerHTML = `p = ((8 > 2) || (932 < 23) ) && 4 == 2 = ${p}`
    }

    // Ejercicio 11
    // 11. Suma de dos numeros: Escribe un programa que tome dos numeros como entrada y 
    // muestre su suma.
    /* Algoritmo suma_Ej11
	
	// Definir las variables a utilizar
	
	Definir num1, num2, suma Como Entero
	
	// Pedir al usuario que ingrese los numeros a calcular
	
	Escribir Sin Saltar "Ingrese el primer numero"
	Leer num1
	
	Escribir Sin Saltar "Ingrese el segundo numero"
	Leer num2
	
	// Calcular la suma
	
	suma = num1 + num2
	
	// Mostrar el resultado al usuario
	
	Escribir "La respuesta de la suma es: ", suma
	
    FinAlgoritmo*/

    sumarNumeros() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
    
        let suma = num1 + num2;
        document.getElementById("resultado").innerHTML = `La suma es: ${suma}`;
    }

    // Ejercicio 12
    // 12. Area de un triangulo: Pide al usuario que ingrese la base y la altura de un 
    // triangulo, luego calcula y muestra su area.
    /*Algoritmo area_trianguloEj12
	
	// Definir las variables a utilizar
	
	Definir base, altura, area Como Real
	
	// Pedir al usuario que ingrese los numeros a calcular
	
	Escribir Sin Saltar "Ingrse la base del triangulo"
	Leer base
	
	Escribir Sin Saltar "Ingrese la aultura del triangulo"
	Leer altura
	
	// Formula para encontrar el area del triangulo
	
	area = base * altura/2
	
	// Mostrar la respuesta al usuario
	
	Escribir "El area del triangulo es: ", area
	
    FinAlgoritmo*/

    areaTriangulo(){
        let base = parseFloat(document.getElementById("base").value);
        let altura = parseFloat(document.getElementById("altura").value);
    
        let area = (base * altura) / 2;
        document.getElementById("resultado").innerHTML = `El área del triángulo es: ${area}`;
    }

    //Ejercicio 13
    // 13. Numero par o impar: Solicita al usuario que ingrese un numero e indica si es 
    // par o impar.
    /*Algoritmo par_imparEj13
	
	// Definir las variables a utilizar
	
	Definir Num Como Entero
	
	// Pedir al usuario que ingrese los numero para determinar si es par o impar
	
	Escribir Sin Saltar "Ingrese un numero"
	Leer Num
	
	// Utilizar la funciun "SI - ENTONCES - SINO" para determinar si el numero imgresado es par o impar
	
	Si Num mod 2 = 0 Entonces // Da el resultado verdadero, es decir, segun lo que se pide el enunciado
		Escribir "El numero ingresado es par"
	SiNo
		Escribir "El numero ingresado es impar" // No da el resultado segun lo que pido
	FinSi
	
    FinAlgoritmo*/

    ParImpar() {
      
        let num = parseInt(document.getElementById("num").value);
        
        if (num % 2 === 0) {
           let resultado = "El número es par.";
           document.getElementById("resultado").innerHTML = resultado;
        } else {
            let resultado = "El número es impar.";
            document.getElementById("resultado").innerHTML = resultado;
        }
    }

    // Ejercicio 14
    // 14. Calculadora simple: Crea una calculadora que realice operaciones basicas como 
    // suma, resta, multiplicacion y division, segun la eleccion del usuario.
    /*Algoritmo calculadora_ej14
	
	// Definir las variables a utilizar
	
	Definir num1, num2, resultado Como Real
	Definir suma, resta, mul, div Como Real 
	Definir opcion Como Entero
	
	Escribir Sin Saltar "Ingrese el primer numero" 
	Leer num1
	Escribir Sin Saltar "Ingrese el segundo numero"
	Leer num2
	
	Escribir "Seleccione la operacion a realizar:"
	Escribir "1. Suma"
	Escribir "2. Resta"
	Escribir "3. Multiplicacion"
	Escribir "4. Division"
	Leer opcion
	
	Segun opcion Hacer
		1:
			resultado = num1 + num2
			Escribir "La suma es:", resultado
		2:
			resultado = num1 - num2
			Escribir "La resta es:", resultado
		3:
			resultado = num1 * num2
			Escribir "La multiplicación es:", resultado
		4:
			Si num2 <> 0 Entonces
				resultado = num1 / num2
				Escribir "La división es:", resultado
			Sino
				Escribir "Error: No se puede dividir entre cero."
			FinSi
		De Otro Modo:
			Escribir "Opción no válida."
	FinSegun
	
    FinAlgoritmo*/

    calculadora() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let operacion = document.getElementById("operacion").value;
        let num2 = parseFloat(document.getElementById("num2").value);
        let resultado;

        switch (operacion) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multiplicacion":
                resultado = num1 * num2;
                break;
            case "division":
                // Verificar si el divisor no es cero
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    document.getElementById("resultado").innerHTML = "Error: No se puede dividir por cero.";
                    return;
                }
                break;
        }
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    }

    // Ejercicio 15
    // 15. Tabla de multiplicar: Pide al usuario un numero y muestra su tabla de 
    // multiplicar del 1 al 10.
    /*Algoritmo tabla_multEj15
	
	Definir tabla, i, respuesta Como Entero
	
	Escribir Sin Saltar "Tabla de multiplicar del: "
	Leer tabla
	
    Para i <- 1 Hasta 10 Hacer
		respuesta <- tabla * i
        Escribir tabla , " x ", i, " = ", respuesta
    FinPara
	
    FinAlgoritmo*/

    mostrarTabla() {
    const num = document.getElementById('num').value;
    let tabla = '<table>';
    tabla += '<tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr>';

    for (let i = 1; i <= 10; i++) {
        tabla += `<tr><td>${num}</td><td>${i}</td><td>${num * i}</td></tr>`;
    }

    tabla += '</table>';
    document.getElementById('tabla').innerHTML = tabla;
    }

    //Ejercicio 16
    // 16. Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra 
    /// variable las dos palabras
    // bosquejo
    // Entrada: palabra1=""(ingresar); palabra2=""(ingresar); resul=""(calcular)
    // Proceso: resul = palabra1 + " " + palabra2
    // Salida: resul
    /*Algoritmo palabra_Ej16
	
	// Definir las variables a utilizar
	
	Definir palabra1, palabra2, resul Como Caracter
	
    Escribir Sin Saltar "Ingrese la primera palabra: "
    Leer palabra1
	
    Escribir Sin Saltar "Ingrese la segunda palabra: "
    Leer palabra2
	
	resul <- palabra1 + " " + palabra2

    Escribir "La concatenación de las palabras es: ", resul
	
    FinAlgoritmo*/

    concatenarPalabras() {
        let palabra1 = document.getElementById("palabra1").value;
        let palabra2 = document.getElementById("palabra2").value;
        let resultado = document.getElementById("resultado");

        let concatenacion = palabra1 + " " + palabra2;

        resultado.innerHTML = `La concatenación de las palabras es: ${concatenacion}`;
    }

    //Ejercicio 17
    /// 17. Mayor de tres números: Solicita tres números y determina cuál es el mayor de ellos.
    //Bosquejo
    // Entrada: i, num=0(ingresar), numMax=0(calcular), i=0(calculado)
    // Proceso: Para i = 1 Hasta 3 Con Paso 1 Hacer
	// 	            Escribir Sin Saltar "ingrese un número positivo: "
	// 	            leer num 
		
	// 	              si num > numMax Entonces
	// 		             numMax = num
	// 	              FinSi
	//          FinPara
    // Salida: numMax
    
    /*Algoritmo numero_mayorEJ17
	
	Definir i, num, numMax como entero
	
	numMax = 0 
	
	Para i = 1 Hasta 3 Con Paso 1 Hacer
		Escribir Sin Saltar "ingrese un número positivo: "
		leer num 
		
		si num > numMax Entonces
			numMax = num
		FinSi
	FinPara
	
	Escribir "El numero mayor es " numMax
	
    FinAlgoritmo*/

    determinarMayor() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        
        let mayor = Math.max(num1, num2, num3);
        
        document.getElementById('resultado').textContent = `El mayor número es: ${mayor}`;
    }

    //Ejercicio 18
    // 18. Edad mínima para votar: Pregunta la edad del usuario y verifica si es 
    // elegible para votar (18 años o más).
    // bosquejo
    // Entrada: edad=0(ingresar)
    // Proceso: Si edad >= 18 Entonces
	//             Escribir "Usted si puede participar en las elecciones"
    //          SiNo
    //             Escribir "Usted no cuenta con la edad suficiente para votar"
    //          Fin Si
    // Salida: El mensaje

    /*Algoritmo edad_votarEj18
		
	Definir edad Como Entero
	
	Escribir "Ingrese su edad"
	Leer edad
	
	Si edad >= 18 Entonces
		Escribir "Usted si puede participar en las elecciones"
	SiNo
		Escribir "Usted no cuenta con la edad suficiente para votar"
	Fin Si
	
    FinAlgoritmo*/

    verificarEdad() {
        let edad = parseInt(document.getElementById("edad").value);
        
        if(edad >=18){
           let resultado = "Usted si puede participar en las elecciones";
           document.getElementById("resultado").innerHTML = resultado;
        } else{
           let resultado = "Usted no cuenta con la edad suficiente para votar";
           document.getElementById("resultado").innerHTML = resultado;
        }
    }

    //Ejercico 19
    // 19. Calculadora de BMI: Crea un programa que calcule el índice de masa corporal (BMI) a partir del peso y la altura del usuario, y luego indique si está en una
    // categoría de peso saludable.
    // bosquejo
    // Entrada: peso=0(ingresar), altura=0(ingresar), BMI=0(calcular)
    // Proceso: BMI = peso / (altura * altura)
    // Salida: El mensaje

    /*Algoritmo calculadora_BMIEJ19
	
	Definir peso, altura, BMI Como Real
	
	Escribir Sin Saltar "Ingrese su peso en kg: "
	Leer peso
	Escribir Sin Saltar "Ingrese su altura en metros: "
	Leer altura 
	
    BMI = peso / (altura * altura)
	
	Escribir "Su índice de masa corporal (BMI) es:", BMI
	
	Si BMI < 18.5 Entonces
        Escribir "Está en la categoría de bajo peso."
    Sino 
		Si BMI >= 18.5 Y BMI < 24.9 Entonces
			Escribir "Está en la categoría de peso normal (saludable)."
		Sino 
			Si BMI >= 25 Y BMI < 29.9 Entonces
				Escribir "Está en la categoría de sobrepeso."
			Sino
				Escribir "Está en la categoría de obesidad."
			Finsi	
	    Finsi		
	FinSi
	
    FinAlgoritmo*/

    calcularBMI() {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let resultado = document.getElementById("resultado");

        let bmi = peso / (altura * altura);

        let categoria = "";
        if (bmi < 18.5) {
            categoria = "Bajo peso";
        } else if (bmi < 24.9) {
            categoria = "Peso normal";
        } else if (bmi < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }

        resultado.innerHTML = `Su BMI es: ${bmi.toFixed(2)} y está en la categoría de ${categoria}.`;
    }

    // Ejercicio 20
    // 20. Número positivo, negativo o cero: Pide al usuario que ingrese un número y 
    // muestra si es positivo, negativo o cero.
    // bosquejo
    // Entrada: num=0(ingresar)
    // Proceso: Si num > 0 Entonces
    //             Escribir "El número es positivo."
    //          Sino 
    //             Si num < 0 Entonces
    //                Escribir "El número es negativo."
    //             Sino
    //                Escribir "El número es cero."
    //             Finsi	
    //          FinSi
    // Salida: El mensaje

    /*Algoritmo numero_pncEJ20
	
	Definir num Como Real
	
    Escribir Sin Saltar "Ingrese un número: "
    Leer num
	
    Si num > 0 Entonces
        Escribir "El número es positivo."
    Sino 
        Si num < 0 Entonces
			Escribir "El número es negativo."
		Sino
			Escribir "El número es cero."
		Finsi	
	FinSi
	
    FinAlgoritmo*/

    determinarNumero() {
        let num = parseFloat(document.getElementById("num").value);
        let resultado = document.getElementById("resultado");

        let signo = "";
        if (num > 0) {
            signo = "positivo";
        } else if (num < 0) {
            signo = "negativo";
        } else {
            signo = "cero";
        }

        resultado.innerHTML = `El número ingresado es ${signo}.`;
    }

    // Ejercicio 21
    // 21. Año bisiesto: Solicita al usuario un año y determina si es un año bisiesto o 
    // no. Un año bisiesto es divisible por 4, pero no por 100, a menos que también sea
    // divisible por 400.
    // Bosquejo
    // Entrada: YEAR=0(ingresar)
    // Proceso: Si (YEAR MOD 4 = 0 Y YEAR MOD 100 <> 0) O (YEAR MOD 400 = 0) Entonces
    //              Escribir "El año es bisiesto."
    //          Sino
    //              Escribir "El año no es bisiesto."
    //          FinSi
    // Salida: El mensaje

    /*Algoritmo bisiesto_o_noEJ21
	
	Definir YEAR Como Entero
	
	Escribir Sin Saltar "Ingrese un año: "
    Leer YEAR
	
    Si (YEAR MOD 4 = 0 Y YEAR MOD 100 <> 0) O (YEAR MOD 400 = 0) Entonces
        Escribir "El año es bisiesto."
    Sino
        Escribir "El año no es bisiesto."
    FinSi
	
    FinAlgoritmo*/

    bisiesto() {
        let year
        year = parseInt(document.getElementById("year").value)
      
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.getElementById("resultado").innerHTML = `El ${year} es un año bisiesto`
        } else {
            document.getElementById("resultado").innerHTML = `El ${year} no es un año bisiesto`
        }
    }

    // Ejercicio 22
    // 22. Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento, luego determina su signo zodiacal. Puedes usar una serie de declaraciones if para
    // comparar las fechas ingresadas con las fechas límite de cada signo zodiacal.
    // Entrada: mes=0(ingresar), dia=0(ingresar)
    // Proceso: Una serie de condicionales segun el dia y mes de nacimiento
    // Salida: El mensaje
    /*Algoritmo signo_zodiacalEJ22
	
	Definir mes, dia Como Entero
	
    Escribir "Ingrese su mes de nacimiento (1-12):"
    Leer mes
    Escribir "Ingrese su día de nacimiento (1-31):"
    Leer dia
	
	Si (mes = 3 Y dia >= 21) O (mes = 4 Y dia <= 19) Entonces
        Escribir "Tu signo zodiacal es Aries."
	FinSi
	Si (mes = 4 Y dia >= 20) O (mes = 5 Y dia <= 20) Entonces
			Escribir "Tu signo zodiacal es Tauro."
	FinSi
	Si (mes = 5 Y dia >= 21) O (mes = 6 Y dia <= 20) Entonces
		Escribir "Tu signo zodiacal es Géminis."
	FinSi
	Si (mes = 6 Y dia >= 21) O (mes = 7 Y dia <= 22) Entonces
		Escribir "Tu signo zodiacal es Cáncer."
	FinSi
	Si (mes = 7 Y dia >= 23) O (mes = 8 Y dia <= 22) Entonces
		Escribir "Tu signo zodiacal es Leo."
	FinSi
	Si (mes = 8 Y dia >= 23) O (mes = 9 Y dia <= 22) Entonces
		Escribir "Tu signo zodiacal es Virgo."
	FinSi
	Si (mes = 9 Y dia >= 23) O (mes = 10 Y dia <= 22) Entonces
		Escribir "Tu signo zodiacal es Libra."
	FinSi
	Si (mes = 10 Y dia >= 23) O (mes = 11 Y dia <= 21) Entonces
		Escribir "Tu signo zodiacal es Escorpio."
	FinSi
	Si (mes = 11 Y dia >= 22) O (mes = 12 Y dia <= 21) Entonces
		Escribir "Tu signo zodiacal es Sagitario."
	FinSi
	Si (mes = 12 Y dia >= 22) O (mes = 1 Y dia <= 19) Entonces
		Escribir "Tu signo zodiacal es Capricornio."
	FinSi
	Si (mes = 1 Y dia >= 20) O (mes = 2 Y dia <= 18) Entonces
		Escribir "Tu signo zodiacal es Acuario."
	FinSi
	Si (mes = 2 Y dia >= 19) O (mes = 3 Y dia <= 20) Entonces
		Escribir "Tu signo zodiacal es Piscis."
	FinSi
	
    FinAlgoritmo*/

    determinarSigno() {
        let mes, dia, resultado
        mes = parseInt(document.getElementById("mes").value);
        dia = parseInt(document.getElementById("dia").value);
        resultado = document.getElementById("resultado");

        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Aries" 
        } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Tauro" 
        } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Géminis" 
        } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Càncer" 
        } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Leo" 
        } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Virgo" 
        } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Libra" 
        } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Escorpio" 
        } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Sagitario" 
        } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Capricornio" 
        } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Acuario" 
        } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
            document.getElementById("resultado").innerHTML = "Tu signo zodiacal es: Piscis" 
        }
    }

    // Ejercicio 23
    // 23. Día del mes con respecto a la segunda quincena: Solicita al usuario que 
    // ingrese un número de día del mes (por ejemplo, del 1 al 31) y verifica si ese día
    // pertenece a la primera quincena (días 1-15) o a la segunda quincena (días 16-31).
    // Bosquejo
    // Entrada: dia=(ingresar)
    // Proceso: Si dia >= 1 Y dia <= 15 Entonces 
    //             Escribir "El día ", dia " pertenece a la primera quincena."
    //          Sino 
    //             Si dia >= 16 Y dia <= 31 Entonces 
    //                Escribir "El día ", dia " pertenece a la segunda quincena."
    //             Sino
    //                Escribir "Número de día no válido."
    //             FinSi
    //          FinSi
    // Salida: El mensaje

    /*Algoritmo quincenaEJ23
	
	Definir dia Como Entero
	
    Escribir Sin Saltar "Ingrese un número de día del 1 al 31: "
    Leer dia
	
    Si dia >= 1 Y dia <= 15 Entonces 
        Escribir "El día ", dia " pertenece a la primera quincena."
    Sino 
        Si dia >= 16 Y dia <= 31 Entonces 
		  Escribir "El día ", dia " pertenece a la segunda quincena."
	    Sino
		  Escribir "Número de día no válido."
	    FinSi
	FinSi

    FinAlgoritmo*/

    quincena() {
    let dia = document.getElementById("dia").value;

        if (dia >= 1 && dia <= 15) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la primera quincena.` 
        } else if (dia >= 16 && dia <= 31) {
            document.getElementById("resultado").innerHTML = `El día ${dia} pertenece a la segunda quincena.` 
        } else {
            document.getElementById("resultado").innerHTML = "Número de día no válido.";
        }
    }

    // Ejercicio 24
    // 24. Día de la semana: Pide al usuario que ingrese un número del 1 al 7, donde 1 
    // representa el domingo, 2 el lunes, 3 el martes, y así sucesivamente. Luego, utiliza 
    // una estructura switch para mostrar el nombre del día de la semana correspondiente al 
    // número ingresado.
    // Bosquejo
    // Entrada: numdia=0(ingresar)
    // Proceso: Realizar una estructura switch
    // Salida: El mensaje
    /*Algoritmo semanaEJ24

	Definir numdia Como Entero

	Escribir "Ingrese un número del 1 al 7:"
    Leer numdia

	Segun numdia Hacer
		1:
			Escribir "El número ", numdia " es el Domingo"
		2:
			Escribir "El número ", numdia " es el Lunes"
		3:
			Escribir "El número ", numdia " es el 	Martes"
		4:
			Escribir "El número ", numdia " es el Miércoles"
		5:
			Escribir "El número ", numdia " es el Jueves"
		6: 
			Escribir "El número ", numdia " es el Viernes"
		7: 
			Escribir "El número ", numdia " es el Sábado"
	
		De Otro Modo:
			Escribir "El número ingresado no es valido, por favor ingrese un número del 1 al 7"
	Fin Segun
	
    FinAlgoritmo*/

    semana() {
        let numdia = parseInt(document.getElementById("numdia").value)

        switch (numdia) {
            case 1:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el domingo.`
                break;
            case 2:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el lunes.`
                break;
            case 3:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el martes.`
                break;
            case 4:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el miercoles.`
                break;
            case 5:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el Jueves.`
                break;
            case 6:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el viernes.`
                break;
            case 7:
                document.getElementById("resultado").innerHTML = `El número ${numdia} es el sàbado.`
                break;
            default:
                document.getElementById("resultado").innerHTML = `El número ingresado no es válido. Por favor, ingrese un número del 1 al 7.`;
        }
    }

    // Ejercicio 25
    // 25. Frases iguales: Escribir un programa que ingrese dos frases e indique si son iguales
    // bosquejo
    // Entrada: frase1=""(ingresar), frase2=""(ingresar), frase1Minuscula=""(ingresar), frase2Minuscula=""(ingresar)
    // Proceso: Si frase1Minuscula = frase2Minuscula Entonces
    //             Escribir "Las frases son iguales sin distinguir mayúsculas y minúsculas."
    //          Sino
    //             Escribir "Las frases no son iguales."
    //          FinSi
    // Salida: El mensaje

    /*Algoritmo CompararFrasesEJ25

    Definir frase1, frase2 Como Cadena

    Definir frase1Minuscula, frase2Minuscula Como Cadena

    Escribir "Ingrese la primera frase:"
    Leer frase1
    Escribir "Ingrese la segunda frase:"
    Leer frase2

    frase1Minuscula <- Minusculas(frase1)
    frase2Minuscula <- Minusculas(frase2)

    Si frase1Minuscula = frase2Minuscula Entonces
        Escribir "Las frases son iguales sin distinguir mayúsculas y minúsculas."
    Sino
        Escribir "Las frases no son iguales."
    FinSi
	
    FinAlgoritmo*/

    verificarFrases() {
        let frase1 = document.getElementById("frase1").value;
        let frase2 = document.getElementById("frase2").value;

        frase1 = frase1.toLowerCase();
        frase2 = frase2.toLowerCase();

        if (frase1 === frase2) {
            document.getElementById("resultado").textContent = "Las frases son iguales.";
        } else {
            document.getElementById("resultado").textContent = "Las frases son diferentes.";
        }
    }

    // Ejercicio 26
    // 26. Calculadora de precio con descuento: Crea un programa que permita a un usuario 
    // ingresar el precio de un articulo y un porcentaje de descuento. El programa 
    // debe calcular y mostrar el precio final despues del descuento.
    // bosquejo
    // Entrada: precio=0(ingresar), descuento=0(ingresar), precioFinal=0(calcular)
    // Proceso: precioFinal = precio - (precio * (descuento / 100))
    // Salida: precioFinal

    /*Algoritmo CalculadoraDescuentoEJ26
	
    Definir precio, descuento, precioFinal Como Real
	
    Escribir "Ingrese el precio del artículo:"
    Leer precio
    Escribir "Ingrese el porcentaje de descuento (%):"
    Leer descuento

    precioFinal = precio - (precio * (descuento / 100))
	
    Escribir "El precio final después del descuento es: ", precioFinal
	
    FinAlgoritmo*/

    calcularPrecioFinal() {
        let precio, descuento, precioFinal
        precio = parseInt(document.getElementById("precio").value)
        descuento = parseInt(document.getElementById("descuento").value)

        precio = parseFloat(precio);
        descuento = parseFloat(descuento);

        precioFinal = precio - (precio * (descuento / 100));
        
        document.getElementById("resultado").innerHTML = `El precio final con descuento es: $ ${precioFinal}` 
    }

    // Ejercicio 27
    // 27. Calculadora de factura con impuestos: Solicita al usuario que ingrese el 
    // total de una factura y el porcentaje de impuestos aplicado. Luego, calcula y 
    // muestra el monto total a pagar, incluyendo los impuestos.
    // Bosquejo
    // Entrada: totalFactura=0(ingresar), porcentajeImpuestos=0(ingresar), montoTotal=0(calcular)
    // Proceso: montoTotal = totalFactura + (totalFactura * (porcentajeImpuestos / 100))
    // Salida: montoTotal

    /*Algoritmo CalculadoraFacturaConImpuestosEJ27

    Definir totalFactura, porcentajeImpuestos, montoTotal Como Real

    Escribir "Ingrese el total de la factura:"
    Leer totalFactura
    Escribir "Ingrese el porcentaje de impuestos (%):"
    Leer porcentajeImpuestos

    montoTotal = totalFactura + (totalFactura * (porcentajeImpuestos / 100))
	
    Escribir "El monto total a pagar, incluyendo impuestos, es:", montoTotal
	
    FinAlgoritmo*/

    calcularTotal() {
        let total, impuesto, totalConImpuestos
        total = parseFloat(document.getElementById("total").value);
        impuesto = parseFloat(document.getElementById("impuestos").value);

        totalConImpuestos = total + (total * (impuesto / 100));

        document.getElementById("resultado").innerHTML = `El monto total a pagar, incluyendo impuestos, es: $ ${totalConImpuestos}`
    }

    // Ejercicio 28
    // 28. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario 
    // actual y el porcentaje de aumento que recibira. Calcula y muestra el nuevo
    // salario despues del aumento.
    // Bosquejo
    // Entrada: salarioActual=0(ingresar), Aumento=0(ingresar), nuevoSalario=0(calcular)
    // Proceso: nuevoSalario = salarioActual + (salarioActual * (Aumento / 100))
    // Salida: nuevoSalario

    /*Algoritmo CalculadoraSueldoAumentoEJ28

    Definir salarioActual, Aumento, nuevoSalario Como Real

    Escribir "Ingrese su salario actual:"
    Leer salarioActual
    Escribir "Ingrese el porcentaje de aumento (%):"
    Leer Aumento

    nuevoSalario = salarioActual + (salarioActual * (Aumento / 100))
	
    Escribir "Su nuevo salario despues del aumento es:", nuevoSalario
	
    FinAlgoritmo*/

    calcularNuevoSalario() {
        let salarioActual = parseFloat(document.getElementById("salarioActual").value);
        let porcentajeAumento = parseFloat(document.getElementById("porcentajeAumento").value);

        // Calcular el nuevo salario después del aumento
        let nuevoSalario = salarioActual + (salarioActual * (porcentajeAumento / 100));

        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `Su nuevo salario después del aumento es: $ ${nuevoSalario}` 
    }

    // Ejercicio 29
    // 29. Calculadora de compra con multiples articulos: Permite al usuario ingresar 
    // el precio y la cantidad de varios articulos que esta comprando. Calcula el 
    // total de la compra y aplica un descuento del 10% si el total es mayor a cierta 
    // cantidad (por ejemplo, $100).
    // Bosquejo
    // Eentrada: precio=0(ingresar), cantidad=0(ingresar), totalCompra=0(calcular), 
    // descuento=0(calcular), totalConDescuento=0(calcular), i=0(calcular)
    // Proceso: Un bucle para, que servira para poner precio a la cantidad de productos
    // y un bucle SI, que servira para encontrar el valor total con descuento o sin
    // descuento
    // Salida: totalConDescuento o totalCompra

    /*Algoritmo CalculadoraCompraMultipleEJ29
	
    Definir precio, cantidad, totalCompra, descuento, totalConDescuento, i Como Real
	
    totalCompra = 0
	
    Escribir "Ingrese la cantidad de articulos que va a comprar:"
    Leer cantidad
	
    Para i = 1 Hasta cantidad Con Paso 1 Hacer
		Escribir "Ingrese el precio del articulo ", i, ":"
        Leer precio
		
        totalCompra = totalCompra + (precio * cantidad)
    FinPara
	
    Si totalCompra > 100 Entonces
        descuento = totalCompra * 0.10
        totalConDescuento = totalCompra - descuento
        Escribir "El total de la compra con un 10% de descuento es:", totalConDescuento
    Sino
        Escribir "El total de la compra es:", totalCompra
    FinSi
	
    FinAlgoritmo*/

    calcularCompra() {
        let totalCompra, descuento, totalConDescuento, cantidad, precio, i, total
        totalCompra = 0; descuento = 0; totalConDescuento = 0;

        cantidad = parseFloat(document.getElementById("cantidad").value);
        precio = parseFloat(document.getElementById("precio").value);

        total = 0;
        for (i = 1; i <= cantidad; i++) {
            precio = parseFloat(prompt(`Ingrese el precio del artículo ${i}:`));

            totalCompra += precio * cantidad;
        }

        if (totalCompra > 100) {
            descuento = totalCompra * 0.10;
            totalConDescuento = totalCompra - descuento;
            document.getElementById("resultado").innerHTML = `El total de la compra con un 10% de descuento es: ${totalConDescuento}`
        } else {
            document.getElementById("resultado").innerHTML = `El total de la compra es: ${totalCompra}`
        }
    }

    // Ejercicio 30
    // 30. Calculadora de impuestos sobre el salario: Solicita al usuario que ingrese su salario anual y 
    // calcula el impuesto sobre la renta segun las siguientes tasas:
    // Hasta De $10,001 a $20,000: 1 $10,000: 5% 0%
    // Mas de $20,000: 15%
    // Bosquejo
    // Entrada: salario=0(ingresar), impuesto=0(calcular), tasa_impuesto_1=0.05, tasa_impuesto_2=0.0, tasa_impuesto_3=0,15
    // Proceso: Si salario <= 10000 Entonces
    //             impuesto = salario * tasa_impuesto_1
    //          Sino
    //              Si salario <= 20000 Entonces
    //                impuesto = salario * tasa_impuesto_2
    //              Sino
    //                impuesto = salario * tasa_impuesto_3
    //              FinSi
    //          FinSi
    // Salida: impuesto

    /*Algoritmo  CalcularImpuestoEJ30

    Definir salario, impuesto Como Real

    Escribir "Ingrese su salario anual: "
    Leer salario

    Definir tasa_impuesto_1, tasa_impuesto_2, tasa_impuesto_3 Como Real
    tasa_impuesto_1 = 0.05  // 5% para ingresos de hasta $10,000
    tasa_impuesto_2 = 0.0   // 0% para ingresos de $10,001 a $20,000
    tasa_impuesto_3 = 0.15  // 15% para ingresos mayores a $20,000

    Si salario <= 10000 Entonces
        impuesto = salario * tasa_impuesto_1
    Sino
        Si salario <= 20000 Entonces
            impuesto = salario * tasa_impuesto_2
        Sino
            impuesto = salario * tasa_impuesto_3
        FinSi
    FinSi

    Escribir "El impuesto sobre la renta es: ", impuesto
	
    FinAlgoritmo*/

    Ejercicio30() {

        let salario = parseFloat(document.getElementById("salario").value);
        let impuesto;

        if (salario <= 10000) {
            impuesto = salario * 0.05;
        } else if (salario <= 20000) {
            impuesto = salario * 0.10;
        } else {
            impuesto = salario * 0.15;
        }
        document.getElementById("resultado").innerHTML = `El impuesto sobre la renta es: $${impuesto.toFixed(2)}`;
    
    }

    // Ejercicio 31
    // 33. Descuento por antiguedad en la empresa: Pregunta al usuario cuantos años ha estado trabajando 
    // en una empresa y calcula su bono de antiguedad. Si ha trabajado mas de 5 a�os, otorga un bono del 
    // 5% sobre su salario.
    // Bosquejo:
    // Entrada: tiem_trabajados=0(ingresar), salario=0(ingresar), bono_antiguedad=0(calcular)
    // Proceso: 
    // Salida:

    /*Algoritmo BonoAntiguedadEJ31

    Definir tiem_trabajados Como Entero
    Definir salario, bono_antiguedad Como Real

    Escribir "¿Cuantos años ha estado trabajando en la empresa?"
    Leer tiem_trabajados
    Escribir "Ingrese su salario: "
    Leer salario

    Si tiem_trabajados > 5 Entonces
        bono_antiguedad = salario * 0.05  // Bono del 5%
    Sino
        bono_antiguedad = 0  // No hay bono si ha trabajado 5 años o menos
    FinSi

    Escribir "Su bono de antiguedad es: ", bono_antiguedad

    FinAlgoritmo*/

    Ejercicio31() {
        let salario = parseFloat(document.getElementById("salario").value);
        let antiguedad = parseInt(document.getElementById("antiguedad").value);
        let bono

        if (antiguedad > 5){
            bono = salario * 0.05
            document.getElementById("resultado").innerHTML = `El bono por antigüedad es: $${bono.toFixed(2)}`;
        } else{
            bono = 0
            document.getElementById("resultado").innerHTML = `No aplica al bono`;
        }
    }

    // Ejercicio 32
    // 32. Calculadora de envio con tarifas diferentes: Crea un programa que permita 
    // al usuario ingresar la distancia de envio y calcule el costo del envio. Si la 
    // distancia es inferior a 50 km, el costo es de $10. Si la distancia es de 50 km 
    // o mas, el costo es de $20.
    // Bosquejo
    // Entrada: distancia=0(ingresar), costo_envio=0(calcular)
    // Proceso: Si distancia < 50 Entonces
        // costo_envio = 10  // Costo de env�o si la distancia es inferior a 50 km
        // Sino
        //     costo_envio = 20  // Costo de env�o si la distancia es de 50 km o m�s
        // FinSi
    // Salida: costo_envio
    
    /*Algoritmo  CalcularCostoEnvioEJ32

    Definir distancia, costo_envio Como Real
 
    Escribir "Ingrese la distancia de env�o en kil�metros: "
    Leer distancia

    Si distancia < 50 Entonces
        costo_envio = 10  // Costo de envio si la distancia es inferior a 50 km
    Sino
        costo_envio = 20  // Costo de envio si la distancia es de 50 km o mas
    FinSi
   
    Escribir "El costo de envio es: $", costo_envio
	
    FinAlgoritmo*/

    Ejercicio32() {
        let distancia = parseInt(document.getElementById("distancia").value);
        let costo_envio
    
        if (distancia < 50){
            costo_envio = 10
            document.getElementById("resultado").innerHTML = `El costo de envío es: $${costo_envio}`;
        } else{
            costo_envio = 20
            document.getElementById("resultado").innerHTML = `El costo de envío es: $${costo_envio}`;
        }
    }

    // Ejercicio 33
    // 35. Calculadora de descuento por lealtad del cliente: Pide al usuario que 
    // ingrese el total de sus compras mensuales durante un año. Si el total es 
    // superior a $500, aplica un descuento del 10% en la proxima compra.
    // Bosquejo
    // Entrada: totalCompras=0(ingresar), descuento=0(calcular)
    // Proceso: Si totalCompras > 500 Entonces
    //              descuento <- totalCompras * 0.10

    //              Escribir "Felicidades, ha calificado para un descuento del 10% en su proxima compra."
    //              Escribir "El descuento es de: $", + descuento
    //          Sino
    //              Escribir "No ha calificado para un descuento en su proxima compra."
    //          Fin Si
    // Salida: descuento

    /*Algoritmo CalculadoraDescuentoEJ33

    Definir totalCompras, descuento Como Real
	
    Escribir "Ingrese el total de sus compras mensuales durante un año: $"
    Leer totalCompras

    Si totalCompras > 500 Entonces
        descuento <- totalCompras * 0.10

        Escribir "Felicidades, ha calificado para un descuento del 10% en su proxima compra."
        Escribir "El descuento es de: $", + descuento
    Sino
        Escribir "No ha calificado para un descuento en su proxima compra."
    Fin Si
	
    FinAlgoritmo*/

    Ejercicio33() {
    let totalCompras = parseFloat(document.getElementById("totalCompras").value);
    let descuento

        if(totalCompras > 500){
           descuento = totalCompras * 0.10
           document.getElementById("resultado").innerHTML = `Su descuento por lealtad es: $${descuento.toFixed(2)}`;
        }else{
           document.getElementById("resultado").innerHTML = "No ha calificado para un descuento en su proxima compra";
        }
    }

    // Ejercicio 34
    // 36. Calculadora de descuento por volumen de compra: Permite al usuario ingresar 
    // la cantidad de unidades de un producto que va a comprar y el precio unitario.
    // Aplica descuentos por volumen de compra segun las siguientes reglas:
    // 10-50 unidades: 5% de descuento
    // 51-100 unidades: 10% de descuento
    // Mas de 100 unidades: 15% de descuento
    // Bosquejo
    // Entrada: cantidad=0(ingresar), precioUnitario=0(ingresar), descuento=0(calcular), total=0(calcular)
    // // Proceso: Si cantidad >= 10 Y cantidad <= 50 Entonces
    //                descuento <- 0.05  // 5% de descuento para 10-50 unidades
    //             Sino
    //                  Si cantidad > 50 Y cantidad <= 100 Entonces
    //                     descuento <- 0.10  // 10% de descuento para 51-100 unidades
    //                  Sino
    //                      Si cantidad > 100 Entonces
    //                      descuento <- 0.15  // 15% de descuento para m�s de 100 unidades
    //                      Sino
    //                      descuento <- 0  // No hay descuento si compra menos de 10 unidades
    //                      Fin Si
    //                  Fin Si
    //             Fin Si
    // Salida: total

    /*Algoritmo CalcularDescuentoPorVolumenEJ34

    Definir cantidad, precioUnitario, descuento, total Como Real
	
    Escribir "Ingrese la cantidad de unidades que va a comprar: "
    Leer cantidad
	
    Escribir "Ingrese el precio unitario del producto: $"
    Leer precioUnitario

    Si cantidad >= 10 Y cantidad <= 50 Entonces
        descuento <- 0.05  // 5% de descuento para 10-50 unidades
    Sino
        Si cantidad > 50 Y cantidad <= 100 Entonces
            descuento <- 0.10  // 10% de descuento para 51-100 unidades
        Sino
            Si cantidad > 100 Entonces
                descuento <- 0.15  // 15% de descuento para m�s de 100 unidades
            Sino
                descuento <- 0  // No hay descuento si compra menos de 10 unidades
            Fin Si
        Fin Si
    Fin Si
	
	// SALIDA: 
    total <- cantidad * precioUnitario * (1 - descuento)
	
    Escribir "El total a pagar es: $", + total
	
    FinAlgoritmo*/

    Ejercicio34() {
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
        let descuento;
    
        if (cantidad >= 10 && cantidad <= 50) {
            descuento = precioUnitario * 0.05;
        } else if (cantidad > 50 && cantidad <= 100) {
            descuento = precioUnitario * 0.10;
        } else if (cantidad > 100) {
            descuento = precioUnitario * 0.15;
        } else {
            descuento = 0;
        }
        let precioTotal = (cantidad * precioUnitario) - descuento;
        document.getElementById("resultado").innerHTML = `Descuento aplicado: $${descuento.toFixed(2)}<br>El 
        precio total con descuento es: $${precioTotal.toFixed(2)}`;
    }

    // Ejercicio 35
    // 35. Calculadora de costo de servicio: Pregunta al usuario cu�ntas horas de 
    // servicio necesita y calcula el costo total. Si las horas son m�s de 10, aplica 
    // un descuento del 20%.
    // Bosquejo
    // Entrada: horas=0(ingresar), costoTotal=0(calcular)
    // // Proceso: Si horas > 10 Entonces
    //                costoTotal <- horas * 10 * 0.20  // Aplica un descuento del 20% si son m�s de 10 horas
    //             Sino
    //                costoTotal <- horas * 10  // El costo es de $10 por hora
    //             Fin Si
    // Salida: costoTotal

    /*Algoritmo CalcularCostoServicioEJ35

    Definir horas, costoTotal Como Real
	
    Escribir "Ingrese cuantas horas de servicio necesita: "
    Leer horas

    Si horas > 10 Entonces
        costoTotal <- horas * 10 * 0.20  // Aplica un descuento del 20% si son m�s de 10 horas
    Sino
        costoTotal <- horas * 10  // El costo es de $10 por hora
    Fin Si

    Escribir "El costo total del servicio es: $", costoTotal
	
    FinAlgoritmo*/

    Ejercicio35() {
        let horasServicio = parseInt(document.getElementById("horasServicio").value);
        let costoHora = 10; // Precio por hora
        let costoTotal;
    
        if (horasServicio > 10) {
            costoTotal = horasServicio * costoHora;
            let descuento = costoTotal * 0.20;
            costoTotal = costoTotal - descuento; 
        } else {
            costoTotal = horasServicio * costoHora;
        }
    
        document.getElementById("resultado").innerHTML = `El costo total del servicio es: $${costoTotal.toFixed(2)}`;
    }

    // Ejercicio 36
    // 36. Suma de numeros pares: Utiliza un bucle for para calcular la suma de los 
    // nmeros pares del 1 al 50.
    // Bosquejo
    // Entrada: suma=0(calcular), num=0(ingresar)
    // Proceso: Para num <- 1 Hasta 50 Con Paso 1 Hacer
    //               Si num MOD 2 = 0 Entonces
    //               suma <- suma + num
    //               FinSi
    //          FinPara
    // Salida: suma

    /*Algoritmo Numeros_paresEJ36

	Definir suma, num Como Entero

    suma = 0
	
    Para num = 1 Hasta 50 Con Paso 1 Hacer
        Si num MOD 2 = 0 Entonces
            suma = suma + num
        FinSi
    FinPara

    Escribir "La suma de los numeros pares del 1 al 50 es:", suma
	
    FinAlgoritmo*/

    Ejercicio36() {
        let num = parseInt(document.getElementById("sumaPare").value);
        let sumaPares = 0;

            for (let i = 1; i <= num; i++) {
                if (i % 2 === 0) {
                    sumaPares += i;
                }
            }
            document.getElementById("resultado").innerHTML = `La suma de los números pares del 1 al ${num} es: ${sumaPares}`;
    }

    // Ejercicio 37
    // 37. Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de 
    // multiplicar de un numero ingresado por el usuario del 1 al 12
    // Entrada: num=0(ingresar), resul=0(calcular), mul=0(calcular)
    // Proceso: Para mul <- 1 Hasta 12 Con Paso 1 Hacer
    //                  resul <- num * mul
    //                  Escribir num, " x ", mul, " = ", resul
    //             FinPara
    // Salida: result

    /*Algoritmo Tabla_multiplicarEJ37
	
	Definir num, resul, mul Como Entero
	
    Escribir "Ingresa un numero para ver su tabla de multiplicar:"
    Leer num
	
    Para mul <- 1 Hasta 12 Con Paso 1 Hacer
        resul <- num * mul
        Escribir num, " x ", mul, " = ", resul
    FinPara
	
    FinAlgoritmo*/

    Ejercicio37() {
        let num = parseInt(document.getElementById('num').value);
        let resultado = '';
        let mul, resul

            for (mul = 1; mul <= 12; mul++) {
                resul = num * mul;
                resultado += num + ' x ' + mul + ' = ' + resul + '<br>';
            }
            document.getElementById('resultado').innerHTML = resultado;
    }

    // Ejercicio 38
    // 38. Contador de vocales: Utiliza un bucle while para contar el numero de 
    // vocales en una palabra ingresada por el usuario.
    // Bosquejo
    // Entrada: palabra=""(ingresar), long=0(calcular), x=1, vocal=0
    // Proceso: Mientras x <= long Hacer
    // 		     Segun Subcadena(palabra,x,x) Hacer
    //             "a" O "A", "e" O "E", "i" O "I", "o" O "O", "u" O "U":
    //              vocal = vocal + 1
    //           FinSegun
    //             x = x + 1
    //          FinMientras
    // Salida: vocal

    /*Algoritmo contar_vocalesEJ39
	
	Definir palabra Como Caracter
	Definir long,x,vocal Como Entero
	
	Escribir "Ingresa una frase"
	Leer palabra
	
	long = Longitud(palabra)
	x = 1
	vocal = 0
	
	Mientras x <= long Hacer
		Segun Subcadena(palabra,x,x) Hacer
				"a" O "A", "e" O "E", "i" O "I", "o" O "O", "u" O "U":
				vocal = vocal + 1
		FinSegun
		x = x + 1
	FinMientras
	
	Escribir "La frase " , palabra, " tiene ", vocal, " vocales"
	
    FinAlgoritmo*/

    Ejercicio38() {
        let pos = 0, cv = 0, frase,resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()

        while (pos < frase.length){
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u'){
                cv=cv +1 
            }
            pos++
        }
        resp = document.getElementById("resultado")
        resp.innerHTML = `cantidad vocales: ${cv}`
    }

    // Ejercicio 39
    // 39. Contador de digitos: Utiliza un bucle for para contar el numero de d�gitos 
    // en una palabra ingresada por el usuario.
    // Bosquejo
    // Entrada: palabra="", long=, contador=, i=0, x=1
    // Proceso: Para i <- 1 Hasta long Hacer
    //             caracter <- SubCadena(palabra, i, x)	
    //            Si caracter >= "0" Y caracter <= "9" Entonces
    //                contador <- contador + 1
    //            FinSi
	//          	x = x + 1 
    //          FinPara
    // Salida: contador

    /*Algoritmo Contar_NumerosEJ40
	
    Definir palabra Como Cadena
    Definir long, contador, i, x Como Entero
    Definir caracter Como Caracter
	
    contador <- 0
	x = 1
	
    Escribir "Ingresa una palabra: "
    Leer palabra
	
    long <- Longitud(palabra)
	
    Para i <- 1 Hasta long Hacer
        caracter <- SubCadena(palabra, i, x)
		
        Si caracter >= "0" Y caracter <= "9" Entonces
            contador <- contador + 1
        FinSi
		x = x + 1 
    FinPara
	
    Escribir "La palabra ", palabra, " tiene ", contador, " numeros"

    FinAlgoritmo*/

    Ejercicio39() {
        let palabraIngresada = document.getElementById("palabra").value;
        let contadorDigitos = 0;       
           
            for (let i = 0; i < palabraIngresada.length; i++) {
                let caracter = palabraIngresada.charAt(i);

                if (parseInt(caracter)) {
                    contadorDigitos++;
                }
            }
            document.getElementById("resultado").innerHTML = `La palabra "${palabraIngresada}" tiene ${contadorDigitos} dígitos.`;
    }

    // Ejercicio 40
    // 40. Adivina el numero: Genera un numero aleatorio y pide al usuario que 
    // adivine el numero. Utiliza un bucle while para repetir la solicitud hasta que
    // adivine correctamente.
    // Bosquejo
    // Entrada: umSecreto=0, intento=0, num=0, acertado=0
    // Proceso:
    // Salida:

    /*Algoritmo Adivina_numeroEJ41
    Definir numSecreto, intento, num, acertado Como Entero

    numSecreto <- Aleatorio(1, 100)

    Escribir "¡Bienvenido al juego Adivina el Numero!"
    
    intento <- 0  // Inicializa el contador de intentos
	acertado <- 0 
    
    Mientras acertado = 0 Hacer
        Escribir "Ingresa tu intento: "
        Leer num
        
        intento <- intento + 1  // Incrementa el contador de intentos
        
        Si num = numSecreto Entonces
            Escribir "¡Felicidades! Adivinaste el numero en ", intento, " intentos."
			acertado <- 1
        Sino 
            Si num < numSecreto Entonces
				Escribir "El numero secreto es mayor. Sigue intentando."
			Sino
				Escribir "El numero secreto es menor. Sigue intentando."
			FinSi
		FinSi
	FinMientras
		
    FinAlgoritmo*/

    // Inicialización de variables

    Ejercicio40() {
        let numSecreto = Math.floor(Math.random() * 50) + 1;
        let intento = 0;
        let acertado = false;
        let num = parseInt(document.getElementById("num").value);
        intento++; 

        if (num === numSecreto) {
        document.getElementById("resultado").textContent = `¡Felicidades! Adivinaste el número en ${intento} intentos.`;
        acertado = true;
        } else if (num < numSecreto) {
        document.getElementById("resultado").textContent = "El número secreto es mayor. Sigue intentando.";
        } else {
        document.getElementById("resultado").textContent = "El número secreto es menor. Sigue intentando.";
        }
    document.getElementById("num").value = '';

    if (acertado) {
        document.querySelector("button").disabled = true;
    }
}





}


let ope = new Ejercicio()