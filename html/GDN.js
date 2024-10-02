class NameGenerator {
    constructor(lastName1, lastName2) {
        this.lastName1 = lastName1;
        this.lastName2 = lastName2;
    }

    generate() {
        throw new Error("Este método debe ser implementado por las subclases");
    }
}

class RandomNameGenerator extends NameGenerator {
    generate(gender) {
        const maleNames = ['Alejandro', 'Roberto', 'Christian', 'Ariel', 'Diego', 'Sneyder', 'Oscar', 'Ramces', 'Tomás', 'Eduardo', 'Samuel', 'Irvin', 'Ulises', 'Adonay', 'Josue', 'Alexis', 'Alfredo', 'Jose', 'Gabriel'];
        const femaleNames = ['Alisson', 'Nahomy', 'Jennifer', 'Ana', 'Nicole', 'Allisson', 'Sofía', 'Melany', 'Andrea', 'Stefania', 'Eunice', 'Cesia', 'Ariana', 'Noemi', 'Daniela', 'Stefany', 'Debora', 'Merab', 'Dayana', 'Keily', 'Fabiola', 'Kimberly', 'Alexia', 'Lesly', 'Arlim', 'Rosmery', 'Abigail'];
        const unisexNames = ['Taylor', 'Jordan', 'Alex', 'Sam', 'Morgan'];

        let selectedNames;

        if (gender === 'masculino') {
            selectedNames = maleNames;
        } else if (gender === 'femenino') {
            selectedNames = femaleNames;
        } else if (gender === 'niñe') {
            selectedNames = unisexNames; 
        } else {
            selectedNames = []; 
        }

        if (selectedNames.length === 0) {
            return "No se encontraron nombres para la categoría seleccionada.";
        }

        const firstName = selectedNames[Math.floor(Math.random() * selectedNames.length)];
        const secondName = selectedNames[Math.floor(Math.random() * selectedNames.length)];

        return `${firstName} ${secondName} ${this.lastName1} ${this.lastName2}`;
    }
}

class PopularNameGenerator extends NameGenerator {
    generate(gender) {
        const maleNames = ['Mateo', 'Luca', 'Oliver', 'Elijah', 'Hugo']; 
        const femaleNames = ['Sofía', 'Emma', 'Ava', 'Isabella', 'Valeria']; 
        const unisexNames = ['Casey', 'Taylor', 'Alexis', 'Hayden', 'Jamie'];

        let selectedNames;

        if (gender === 'masculino') {
            selectedNames = maleNames;
        } else if (gender === 'femenino') {
            selectedNames = femaleNames;
        } else if (gender === 'niñe') {
            selectedNames = unisexNames; 
        } else {
            selectedNames = []; 
        }

        if (selectedNames.length === 0) {
            return "No se encontraron nombres para la categoría seleccionada.";
        }

        const firstName = selectedNames[Math.floor(Math.random() * selectedNames.length)];
        const secondName = selectedNames[Math.floor(Math.random() * selectedNames.length)];

        return `${firstName} ${secondName} ${this.lastName1} ${this.lastName2}`;
    }
}

class NameFactory {
    static createNameGenerator(strategy, lastName1, lastName2) {
        if (strategy === 'aleatorio') {
            return new RandomNameGenerator(lastName1, lastName2);
        } else if (strategy === 'popular') {
            return new PopularNameGenerator(lastName1, lastName2);
        }
        throw new Error('Estrategia desconocida');
    }
}

document.getElementById('generar').addEventListener('click', function() {
    const strategy = document.getElementById('estrategia').value;
    const gender = document.getElementById('categoria').value;
    const lastName1 = document.getElementById('apellido1').value.trim();
    const lastName2 = document.getElementById('apellido2').value.trim();

    if (!lastName1 || !lastName2) {
        alert('Por favor, ingresa ambos apellidos.');
        return;
    }

    try {
        const nameGenerator = NameFactory.createNameGenerator(strategy, lastName1, lastName2);
        const generatedName = nameGenerator.generate(gender);
        document.getElementById('nombre').innerText = generatedName;
    } catch (error) {
        console.error(error);
        alert('Error al generar el nombre. Por favor, intenta de nuevo.');
    }
});
