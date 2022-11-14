import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Compra from 'App/Models/Compra'

export default class extends BaseSeeder {
  public async run() {
    await Compra.createMany([
      {
        idHQ: 1,
        bloco: 'A',
        tipoDeCapa: 'capa dura',
        editora: 'Marvel',
      },
      {
        idHQ: 2,
        bloco: 'B',
        tipoDeCapa: 'capa dura',
        editora: 'Marvel',
      },
      {
        idHQ: 3,
        bloco: 'C',
        tipoDeCapa: 'capa dura',
        editora: 'Marvel',
      },
    ])
    // Write your database queries inside the run method
  }
}
