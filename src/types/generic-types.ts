interface Service<T>{
    create(data: T): void
    show(): T[]
}

interface IVeiculo {
    name: string
    year: number
}

class Veiculo implements Service<IVeiculo>{
    create(data: IVeiculo): void {
        throw new Error("Method not implemented.")
    }
    show(): IVeiculo[] {
        throw new Error("Method not implemented.")
    }

}