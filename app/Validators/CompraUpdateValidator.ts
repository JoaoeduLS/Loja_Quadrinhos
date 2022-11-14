import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CompraUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idHQ: schema.number.nullableAndOptional([
      rules.unique({ table: 'compras', column: 'id' }),
      rules.exists({ table: 'compras', column: 'id' }),
    ]),

    tipoDeCapa: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    editora: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    bloco: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),
  })

  public messages: CustomMessages = {
    maxLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    minLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.minLength }}',
    required: 'o campo {{ field }} é obrigatório',
    unique: '{{ field }} tem que ser único',
    exists: 'O {{ field }} é obrigatório',
  }
}
