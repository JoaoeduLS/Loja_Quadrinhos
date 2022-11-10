import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    nomeFuncionario: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),

    cpf_Funcionario: schema.string.nullableAndOptional([
      rules.unique({ table: 'alunos', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),

    cargo: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(50),
    ]),

    telefone: schema.string.nullableAndOptional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),
  })

  public messages: CustomMessages = {
    'maxLength': 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    'minLength': 'o número máximo de caractéres do campo {{ field }} é de {{ options.minLength }}',
    'required': 'o campo {{ field }} é obrigatório',
    'unique': 'o campo {{ field }} é único',
    'cpf_Funcionario.regex': 'o cpf tem a formatação 666.666.666-13',
    'telefone.regex': 'o telefone tem a formatação (00)9999-9999',
  }
}
