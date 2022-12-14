import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public bloco: string

  @column()
  public tipoDeCapa: string

  @column()
  public editora: string

  @column()
  public idHQ: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
