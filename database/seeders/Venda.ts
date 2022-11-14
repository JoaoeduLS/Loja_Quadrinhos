import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run() {
    await Venda.createMany([
      {
        idFuncionario: 1,
        idCompra: 1,
        idCliente: 1,
        dataVenda: new Date(2022, 5, 8),
      },
      {
        idFuncionario: 2,
        idCompra: 2,
        idCliente: 2,
        dataVenda: new Date(2017, 6, 10),
      },
      {
        idFuncionario: 3,
        idCompra: 3,
        idCliente: 3,
        dataVenda: new Date(2020, 2, 8),
      },
    ])
    // Write your database queries inside the run method
  }
}
