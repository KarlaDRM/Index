        //Practica 5 de JS. Karla Denisse Ruíz Méndez
        
        let matrizOriginal = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        //Matriz Original
        
        console.log("Matriz original")

        for (let x = 0; x < matrizOriginal.length; x++) {
            let original = " ";
            for (let a = 0; a < matrizOriginal.length; a++) {
                original += ` ${matrizOriginal[x][a]} `;                
            }
            console.log(original);
        }
        
        console.log(" ")

        //Salida 1

        console.log("Salida 1:")

        for (let b = matrizOriginal.length -1; b >= 0; b--) {
            let matriz1 = " ";
            for (let c = matrizOriginal.length -1; c >= 0; c--) {
                matriz1 += ` ${matrizOriginal[b][c]} `;               
            }
            console.log(matriz1)
        }

        console.log(" ")

        //Salida 2

        console.log("Salida 2:")

        for (let d = 0; d < matrizOriginal.length; d++) {
            let matriz2 = " ";
            for (let e = 0; e < matrizOriginal.length; e++) {
                matriz2 += ` ${matrizOriginal[e][d]} `;                
            }
            console.log(matriz2)
        }

        console.log(" ")

        //Salida 3

        console.log("Salida 3:")

        for (let f = matrizOriginal.length -1; f >= 0; f--) {
            let matriz3 = " ";
            for (let g = matrizOriginal.length -1; g >= 0; g--) {
                matriz3 += ` ${matrizOriginal[g][f]} `;
            }
            console.log(matriz3)
        }
