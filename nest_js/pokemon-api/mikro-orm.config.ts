import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs'; // this is a TS type

// if we tell TS that this config is the type MikroOrmModuleOptions, we get autocomplete. Otherwise we don't have

const config: MikroOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1', //'localhost' sometimes doesn't work
  port: 3306,
  user: 'root',
  // password: 'MyPass'  //macs we don't use pw
  dbName: 'pokemon_nest_api',
  debug: true, // show some stuff in the console for debugging
  entitiesTs: ['src/**/*.entity.ts'],
  entities: ['dist/**/*entity.js'],
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    pathTs: 'src/migrations',
    path: 'dist/migrations',
  },
  seeder: {
    pathTs: 'src/seeders',
    path: 'dist/seeders',
  },
};

export default config;
