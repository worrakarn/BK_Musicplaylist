import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('playlist_owner', table => {
    table.bigIncrements('id').unsigned().primary()
    table.integer('music_id').notNullable()
    table.timestamp('createdAt', { useTz: false }).defaultTo(knex.fn.now())
    table.timestamp('updatedAt', { useTz: false }).defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('playlist_owner')
}
