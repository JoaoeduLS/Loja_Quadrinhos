import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    descricao: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    preco: schema.number.nullableAndOptional([rules.range(1, 10000)]),
  })

  public messages: CustomMessages = {
    maxLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    minLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.minLength }}',
    required: 'o campo {{ field }} é obrigatório',
  }
}
