// criando tipos

type pessoaT = {
  nome: string;
  idade: number;
  email: string;
  usuario: string;
  password: string;
};

type Funcionario = pessoaT & {
  salario: number;
  comissao: number;
  tipo: string;
};

type Gerente = pessoaT & {
  PLR: number;
  cartaoDeCredito: string;
  tipo: string;
};

// criando pessoas

const novaPessoa: pessoaT = {
  nome: "chris",
  idade: 20,
  usuario: "chris",
  email: "chris@chris.com",
  password: "xpto",
};

const funcionario: Funcionario = {
  nome: "pedro",
  idade: 20,
  usuario: "pedrinho",
  email: "pedrinho@gmail.com",
  password: "xptodd",
  salario: 15000,
  comissao: 30,
  tipo: "Funcionario",
};

const gerente: Gerente = {
  nome: "fabio",
  idade: 45,
  usuario: "fabinho",
  email: "fabio@gmail.com",
  password: "xptodd",
  PLR: 30,
  cartaoDeCredito: "xxxxxxxxxx",
  tipo: "gerente",
};

// função de verificação das pessoas

function cadastroDePessoas(pessoa: Funcionario | Gerente) {
  if (pessoa.tipo === "Funcionario") {
    console.log("Funcionario: " + JSON.stringify(pessoa));
  } else {
    console.log("gerente: " + JSON.stringify(pessoa));
  }
}

console.log("===========================");

cadastroDePessoas(funcionario);
console.log("===========================");
cadastroDePessoas(gerente);
