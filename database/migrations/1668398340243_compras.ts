import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'compras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_hq')
        .unsigned()
        .references('id')
        .inTable('produtos')
        .notNullable()
        .onDelete('CASCADE')
      table.string('bloco', 100)
      table.string('tipo_de_capa', 50).notNullable()
      table.string('editora', 50).notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
