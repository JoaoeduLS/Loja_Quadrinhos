/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Produto from 'App/Models/Produto'
import ProdutoValidator from 'App/Validators/ProdutoValidator'
import ProdutoUpdateValidator from 'App/Validators/ProdutoUpdateValidator'

export default class ProdutosController {
  async index() {
    return await Produto.query()
  }
  async store({ request }) {
    const dados = await request.validate(ProdutoValidator)
    return await Produto.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Produto.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const produto = await Produto.findOrFail(id)
    await produto.delete()
    return { mensagem: 'Produto Deletado' }
  }
  async update({ request }) {
    const id = request.param('id')
    const produto = await Produto.findOrFail(id)
    const dados = await request.validate(ProdutoUpdateValidator)
    await produto.merge(dados).save()

    return produto
  }
}
