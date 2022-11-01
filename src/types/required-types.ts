interface Video {
    nome: string
    categoria: string
    duracao?: number
    descricao: string
}

function cadastrarVideo ( video: Required<Video>){
    console.log(video)
}

cadastrarVideo({
    nome: 'filme terror',
    descricao: 'terror +18',
    categoria: "terror",
    duracao: 100.99
})