import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_compra')
        .unsigned()
        .references('id')
        .inTable('compras')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('id_funcionario')
        .unsigned()
        .references('id')
        .inTable('funcionarios')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('id_cliente')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .notNullable()
        .onDelete('CASCADE')
      table.date('data_venda').notNullable()
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
