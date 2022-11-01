interface Pessoa {
  gerarDocumento(): void;
  email: string
}

class PessoaFisica implements Pick<Pessoa, "gerarDocumento">{
  nome: string = "";
  cpf: string = "";

  gerarDocumento() {
    console.log("PESSOA FISICA");
    console.log("Documento nome: " + this.nome);
    console.log("Documento cpf: " + this.cpf);
  }
}

class PessoaJuridica implements Pick<Pessoa, 'email'> {
  nome: string = "";
  cnpj: string = "";
  email: string = ""

  gerarDocumento() {
    console.log("PESSOA JURIDICA");
    console.log("Documento nome: " + this.nome);
    console.log("Documento cnpj: " + this.cnpj);
  }
}

const pessoaFisica = new PessoaFisica();
pessoaFisica.cpf = "123 456 789 99";
pessoaFisica.nome = "Christian";
pessoaFisica.gerarDocumento();

const pessoaJuridica = new PessoaJuridica();
pessoaJuridica.cnpj = "678 987 345 88";
pessoaJuridica.nome = "pedro";
pessoaJuridica.gerarDocumento();
