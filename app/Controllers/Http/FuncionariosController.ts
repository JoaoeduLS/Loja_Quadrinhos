/*eslint-disable @typescript-eslint/explicit-member-accessibility*/

import Funcionario from 'App/Models/Funcionario'
import FuncionarioUpdateValidator from 'App/Validators/FuncionarioUpdateValidator'
import FuncionarioValidator from 'App/Validators/FuncionarioValidator'

export default class FuncionariosController {
  async index() {
    return await Funcionario.query()
  }
  async store({ request }) {
    const dados = await request.validate(FuncionarioValidator)
    return await Funcionario.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Funcionario.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const funcionario = await Funcionario.findOrFail(id)
    return await funcionario.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const funcionario = await Funcionario.findOrFail(id)
    const dados = await request.validate(FuncionarioUpdateValidator)
    await funcionario.merge(dados).save()

    return funcionario
  }
}
