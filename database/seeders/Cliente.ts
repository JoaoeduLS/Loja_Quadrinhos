import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: 'Hugo Loiola',
        endereco: 'QNN 19',
        telefone: '61 9135-9604',
        cpf: '015.678.754-98',
        numero: '31',
        cep: '72225192',
        logradouro: 'Conjunto B',
        bairro: 'QNN 19',
      },
      {
        nome: 'Hugo Loiola',
        endereco: 'QNN 19',
        telefone: '61 9135-9604',
        cpf: '015.678.754-98',
        numero: '31',
        cep: '72225192',
        logradouro: 'Conjunto B',
        bairro: 'QNN 19',
      },
      {
        nome: 'Hugo Loiola',
        endereco: 'QNN 19',
        telefone: '61 9135-9604',
        cpf: '015.678.754-98',
        numero: '31',
        cep: '72225192',
        logradouro: 'Conjunto B',
        bairro: 'QNN 19',
      },
    ])
    // Write your database queries inside the run method
  }
}
