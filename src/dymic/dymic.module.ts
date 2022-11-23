import { Module, Global, DynamicModule } from '@nestjs/common';

interface Options {
  path: string;
}

@Global()
@Module({})
export class DymicModule {
  static forRoot(options: Options): DynamicModule {
    return {
      module: DymicModule,
      providers: [
        {
          provide: 'Config',
          useValue: { baseApi: '/api' + options.path },
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { baseApi: '/api' + options.path },
        },
      ],
    };
  }
}
