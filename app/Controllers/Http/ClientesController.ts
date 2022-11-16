/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from 'App/Models/Cliente'
import ClienteUpdateValidator from 'App/Validators/ClienteUpdateValidator'
import ClienteValidator from 'App/Validators/ClienteValidator'

export default class ClientesController {
  async index() {
    return await Cliente.query()
  }
  async store({ request }) {
    const dados = await request.validate(ClienteValidator)
    return await Cliente.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Cliente.findOrFail(id)
  }
  /*async destroy({ request }) {
    const id = request.param('id')
    const cliente = await Cliente.findOrFail(id)
    await Cliente.delete()
    return await cliente.delete()
  }*/
  async destroy({ request }) {
    const id = request.param('id')
    const clinte = await Cliente.findByOrFail(id)
    await clinte.delete()
    return { mensagem: 'Cliente Deletado' }
  }
  async update({ request }) {
    const id = request.param('id')
    const cliente = await Cliente.findOrFail(id)
    const dados = await request.validate(ClienteUpdateValidator)
    await cliente.merge(dados).save()

    return cliente
  }
}
