import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        nome: 'Joao Eduardo',
        telefone: '(61) 8639-5265 ',
        cpf: '077-152-081.17',
        cargo: 'balconista',
      },
      {
        nome: 'Joao Eduardo',
        telefone: '(61) 8639-5265 ',
        cpf: '077-152-081.17',
        cargo: 'balconista',
      },
      {
        nome: 'Joao Eduardo',
        telefone: '(61) 8639-5265 ',
        cpf: '077-152-081.17',
        cargo: 'balconista',
      },
    ])
    // Write your database queries inside the run method
  }
}
