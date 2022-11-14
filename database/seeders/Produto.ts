import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run() {
    await Produto.createMany([
      {
        nome: 'Batman que ri',
        descricao: 'Batman e infequitado com o soro do corringa',
        preco: 150,
      },
      {
        nome: 'Vingadores',
        descricao: 'Os mais fortes herois da terra',
        preco: 200,
      },
    ])
    // Write your database queries inside the run method
  }
}
