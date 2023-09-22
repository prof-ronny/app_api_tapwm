const roteador = require("express").Router();
const { Model } = require("sequelize");
const produtos = require("../banco_dados/tabelaProdutos")


roteador.get("/", async (requisicao, resposta)=>{
    resposta.send(
        JSON.stringify(await produtos.listar())
    )
})

roteador.post("/",async (requisicao, resposta)=>{

    const { nome,descricao,foto, preco,categoria } = requisicao.body

    const produto = await produtos.create({nome,descricao,foto, preco,categoria})
    
    resposta.send(
        JSON.stringify(produto)
    )
})

roteador.get("/:id",async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    const produto = await produtos.localizar(id);
    resposta.send(
        JSON.stringify(produto)
    )

}

)

roteador.put("/:id",async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    const { nome,descricao,foto, preco,categoria } = requisicao.body

    const produto = await produtos.atualizar({id,nome,descricao,foto, preco,categoria});
    resposta.send(
        JSON.stringify(produto)
    )
}

)

roteador.delete("/:id",async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    await produtos.remover(id)

    resposta.send(
        JSON.stringify({mensagem:"Produto removido"})
    )

}
)

module.exports = roteador;