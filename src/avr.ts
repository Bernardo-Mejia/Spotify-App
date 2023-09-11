export class Component {
    name: string = "Pedro";
    LoQueSea: any = 4;
    avr: string[] = ["s", "4"]

    carro: CarMode = {
        brand: "Chevrolet",
        model: "Cavalier",
        // year: 2020
    }

    lisCar: Array<CarMode> = [
        {
            brand: "Ford",
            model: "Fiesta",
            year: 2022
        },
        {
            brand: "Dodge",
            model: "Neon"
        },
        {
            brand: "Nissan",
            model: "Sentra",
            year: "2019"
        }
    ]
}

interface CarMode {
    brand: string,
    model: string,
    year?: number | string
}