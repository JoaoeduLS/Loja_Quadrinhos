import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('endereco', 50).notNullable()
      table.string('telefone', 15).notNullable()
      table.string('cpf', 20).notNullable()
      table.string('cep', 20)
      table.string('logradouro', 50)
      table.string('complemento', 50)
      table.string('numero', 10)
      table.string('bairro', 20)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
