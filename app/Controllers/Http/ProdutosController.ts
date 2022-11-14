/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

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
    return await produto.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const produto = await Produto.findOrFail(id)
    const dados = await request.validate(ProdutoUpdateValidator)
    await produto.merge(dados).save()

    return produto
  }
}
