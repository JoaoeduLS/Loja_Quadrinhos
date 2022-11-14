import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nomeFuncionario: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    descricao: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(700)]),

    preco: schema.number([rules.range(1, 10000)]),
  })
  public messages: CustomMessages = {
    maxLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    minLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.minLength }}',
    required: 'o campo {{ field }} é obrigatório',
  }
}
