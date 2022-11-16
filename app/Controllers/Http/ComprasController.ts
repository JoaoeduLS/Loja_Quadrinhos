/*eslint-disable @typescript-eslint/explicit-member-accessibility*/

import Compra from 'App/Models/Compra'
import CompraValidator from 'App/Validators/CompraValidator'
import CompraUpdateValidator from 'App/Validators/CompraUpdateValidator'

export default class ComprasController {
  async index() {
    return await Compra.query()
  }
  async store({ request }) {
    const dados = await request.validate(CompraValidator)
    return await Compra.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Compra.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const compra = await Compra.findOrFail(id)
    await compra.delete()
    return { mensagem: 'Compra Deletado' }
  }
  async update({ request }) {
    const id = request.param('id')
    const compra = await Compra.findOrFail(id)
    const dados = await request.validate(CompraUpdateValidator)
    await compra.merge(dados).save()

    return compra
  }
}
