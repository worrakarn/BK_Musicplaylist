import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('playlist').del()

  // Inserts seed entries
  await knex('playlist').insert([
    { title: 'Seven (feat. Latto) (Explicit Ver.)', singer: 'Jung Kook, Latto', album: 'Seven (feat. Latto)' },
    { title: 'Paint The Town Red', singer: 'Doja Cat', album: 'Paint The Town Red' },
    { title: 'Slime You Out (feat. SZA)', singer: 'Drake, SZA', album: 'Slime You Out' },
    { title: 'bad idea right?', singer: 'Olivia Rodrigo', album: 'bad idea right?' },
    { title: 'Cruel Summer', singer: 'Taylor Swift', album: 'Lover' },
    { title: 'Used To Be Young', singer: 'Miley Cyrus', album: 'Used To Be Young' },
    { title: 'Single Soon', singer: 'Selena Gomez', album: 'Selena Gomez' },
    {
      title: 'What Was I Made For? [From The Motion Picture "Barbie"]',
      singer: 'Billie Eilish',
      album: 'What Was I Made For? [From The Motion Picture "Barbie"]',
    },
    { title: 'Snooze', singer: 'SZA', album: 'SOS' },
    {
      title: 'Barbie World (with Aqua) [From Barbie The Album]',
      singer: 'Nicki Minaj, Ice Spice, Aqua',
      album: 'Barbie World (with Aqua) [From Barbie The Album]',
    },
    { title: 'Super Shy', singer: 'NewJeans', album: 'NewJeans Super Shy' },
    { title: 'I KNOW ?', singer: 'Travis Scott', album: 'UTOPIA' },
    { title: 'vampire', singer: 'Olivia Rodrigo', album: 'vampire' },
    { title: 'fukumean', singer: 'Gunna', album: 'a Gift & a Curse' },
    { title: 'Daylight', singer: 'David Kushner', album: 'Daylight' },
    { title: 'Flowers', singer: 'Miley Cyrus', album: 'Flowers' },
    { title: 'As It Was', singer: 'Harry Styles', album: 'As It Was' },
    { title: 'Strangers', singer: 'Kenya Grace', album: 'Strangers' },
    { title: 'Columbia', singer: 'Quevedo', album: 'Columbia' },
    { title: 'Moonlight', singer: 'Kali Uchis', album: 'Moonlight' },
  ])
}
