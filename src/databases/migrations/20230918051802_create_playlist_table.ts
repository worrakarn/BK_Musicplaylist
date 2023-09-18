import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('playlist', table => {
    table.bigIncrements('id').unsigned().primary()
    table.string('title', 255).notNullable()
    table.string('singer', 255).notNullable()
    table.string('album', 255).notNullable()
    table.timestamp('createdAt', { useTz: false }).defaultTo(knex.fn.now())
    table.timestamp('updatedAt', { useTz: false }).defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('playlist')
}
