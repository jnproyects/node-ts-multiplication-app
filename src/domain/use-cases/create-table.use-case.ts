
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    execute({ base, limit = 10 }: CreateTableOptions){
        let res = '';

        for ( let i: number = 1; i <= limit; i++ ) {
            res += `${base} x ${i} = ${base * i} \n`;
        }

        return res;
    }

}