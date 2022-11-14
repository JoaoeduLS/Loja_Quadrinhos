/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from 'App/Models/Venda'
import VendaValidator from 'App/Validators/VendaValidator'
import VendaUpdateValidator from 'App/Validators/VendaUpdateValidator'

export default class VendasController {
  async index() {
    return await Venda.query()
  }
  async store({ request }) {
    const dados = await request.validate(VendaValidator)
    return await Venda.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Venda.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const venda = await Venda.findOrFail(id)
    return await venda.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const venda = await Venda.findOrFail(id)
    const dados = await request.validate(VendaUpdateValidator)
    await venda.merge(dados).save()

    return venda
  }
}
