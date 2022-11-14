import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idCompra: schema.number.nullableAndOptional([
      rules.unique({ table: 'compras', column: 'id' }),
      rules.exists({ table: 'compras', column: 'id' }),
    ]),
    idFuncionario: schema.number.n([
      rules.unique({ table: 'funcionarios', column: 'id' }),
      rules.exists({ table: 'funcionarios', column: 'id' }),
    ]),
    idCliente: schema.number.nullableAndOptional([
      rules.unique({ table: 'clientes', column: 'id' }),
      rules.exists({ table: 'clientes', column: 'id' }),
    ]),
    dataVenda: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd' }),
  })

  public messages: CustomMessages = {}
}
