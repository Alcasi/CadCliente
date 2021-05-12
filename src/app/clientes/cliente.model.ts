export interface Telefone {
    id: number;
    telefone: string;
}

export interface RespostaCliente {
    id: number;
    nome: string;
    tipoPessoa: number;
    cadPessoa: string;
    regPessoa: string;
    dataCadastro: Date;
    cadastroAtivo: boolean;
    telefones: Telefone[];
}