interface Usuario {
    nome: string
    userName: string
    email: string
}

function atualizarUsuario (dadosDoUsuario : Partial<Usuario>) {
    console.log(dadosDoUsuario)
}

atualizarUsuario({
    nome: 'christian',
    userName: 'chris',
    email: "chris@gmail.com"
})

