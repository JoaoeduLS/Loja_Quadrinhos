import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    idCompra: schema.number([
      rules.unique({ table: 'compras', column: 'id' }),
      rules.exists({ table: 'compras', column: 'id' }),
    ]),
    idFuncionario: schema.number([
      rules.unique({ table: 'clientes', column: 'id' }),
      rules.exists({ table: 'clientes', column: 'id' }),
    ]),
    idCliente: schema.number([
      rules.unique({ table: 'compras', column: 'id' }),
      rules.exists({ table: 'compras', column: 'id' }),
    ]),
    dataVenda: schema.date({ format: 'yyyy-MM-dd' }),
  })

  public messages: CustomMessages = {
    'required': 'o campo {{ field }} é obrigatório',
    'date.format': '{{ field }} tem que ser formatado como {{ options.format }}',
    'unique': '{{ field }} tem que ser único',
    'exists': 'O {{ field }} é obrigatório',
  }
}
