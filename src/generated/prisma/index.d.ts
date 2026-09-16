
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Barbeiro
 * 
 */
export type Barbeiro = $Result.DefaultSelection<Prisma.$BarbeiroPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>
/**
 * Model Bloqueio
 * 
 */
export type Bloqueio = $Result.DefaultSelection<Prisma.$BloqueioPayload>
/**
 * Model HorarioTrabalho
 * 
 */
export type HorarioTrabalho = $Result.DefaultSelection<Prisma.$HorarioTrabalhoPayload>
/**
 * Model ExcecaoHorario
 * 
 */
export type ExcecaoHorario = $Result.DefaultSelection<Prisma.$ExcecaoHorarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DuracaoCorte: {
  MIN_15: 'MIN_15',
  MIN_30: 'MIN_30',
  MIN_45: 'MIN_45',
  MIN_60: 'MIN_60'
};

export type DuracaoCorte = (typeof DuracaoCorte)[keyof typeof DuracaoCorte]


export const StatusAgendamento: {
  AGENDADO: 'AGENDADO',
  CANCELADO: 'CANCELADO',
  CONCLUIDO: 'CONCLUIDO'
};

export type StatusAgendamento = (typeof StatusAgendamento)[keyof typeof StatusAgendamento]


export const DiaSemana: {
  SEGUNDA: 'SEGUNDA',
  TERCA: 'TERCA',
  QUARTA: 'QUARTA',
  QUINTA: 'QUINTA',
  SEXTA: 'SEXTA',
  SABADO: 'SABADO',
  DOMINGO: 'DOMINGO'
};

export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana]


export const MotivoBloqueio: {
  ALMOCO: 'ALMOCO',
  COMPROMISSO: 'COMPROMISSO',
  OUTRO: 'OUTRO'
};

export type MotivoBloqueio = (typeof MotivoBloqueio)[keyof typeof MotivoBloqueio]

}

export type DuracaoCorte = $Enums.DuracaoCorte

export const DuracaoCorte: typeof $Enums.DuracaoCorte

export type StatusAgendamento = $Enums.StatusAgendamento

export const StatusAgendamento: typeof $Enums.StatusAgendamento

export type DiaSemana = $Enums.DiaSemana

export const DiaSemana: typeof $Enums.DiaSemana

export type MotivoBloqueio = $Enums.MotivoBloqueio

export const MotivoBloqueio: typeof $Enums.MotivoBloqueio

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbeiro`: Exposes CRUD operations for the **Barbeiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbeiros
    * const barbeiros = await prisma.barbeiro.findMany()
    * ```
    */
  get barbeiro(): Prisma.BarbeiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloqueio`: Exposes CRUD operations for the **Bloqueio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloqueios
    * const bloqueios = await prisma.bloqueio.findMany()
    * ```
    */
  get bloqueio(): Prisma.BloqueioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioTrabalho`: Exposes CRUD operations for the **HorarioTrabalho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioTrabalhos
    * const horarioTrabalhos = await prisma.horarioTrabalho.findMany()
    * ```
    */
  get horarioTrabalho(): Prisma.HorarioTrabalhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.excecaoHorario`: Exposes CRUD operations for the **ExcecaoHorario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExcecaoHorarios
    * const excecaoHorarios = await prisma.excecaoHorario.findMany()
    * ```
    */
  get excecaoHorario(): Prisma.ExcecaoHorarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Barbeiro: 'Barbeiro',
    Agendamento: 'Agendamento',
    Bloqueio: 'Bloqueio',
    HorarioTrabalho: 'HorarioTrabalho',
    ExcecaoHorario: 'ExcecaoHorario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "barbeiro" | "agendamento" | "bloqueio" | "horarioTrabalho" | "excecaoHorario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Barbeiro: {
        payload: Prisma.$BarbeiroPayload<ExtArgs>
        fields: Prisma.BarbeiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbeiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbeiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          findFirst: {
            args: Prisma.BarbeiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbeiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          findMany: {
            args: Prisma.BarbeiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>[]
          }
          create: {
            args: Prisma.BarbeiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          createMany: {
            args: Prisma.BarbeiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbeiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>[]
          }
          delete: {
            args: Prisma.BarbeiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          update: {
            args: Prisma.BarbeiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          deleteMany: {
            args: Prisma.BarbeiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbeiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbeiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>[]
          }
          upsert: {
            args: Prisma.BarbeiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbeiroPayload>
          }
          aggregate: {
            args: Prisma.BarbeiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbeiro>
          }
          groupBy: {
            args: Prisma.BarbeiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbeiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbeiroCountArgs<ExtArgs>
            result: $Utils.Optional<BarbeiroCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
          }
        }
      }
      Bloqueio: {
        payload: Prisma.$BloqueioPayload<ExtArgs>
        fields: Prisma.BloqueioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloqueioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloqueioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          findFirst: {
            args: Prisma.BloqueioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloqueioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          findMany: {
            args: Prisma.BloqueioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>[]
          }
          create: {
            args: Prisma.BloqueioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          createMany: {
            args: Prisma.BloqueioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloqueioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>[]
          }
          delete: {
            args: Prisma.BloqueioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          update: {
            args: Prisma.BloqueioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          deleteMany: {
            args: Prisma.BloqueioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloqueioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloqueioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>[]
          }
          upsert: {
            args: Prisma.BloqueioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueioPayload>
          }
          aggregate: {
            args: Prisma.BloqueioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloqueio>
          }
          groupBy: {
            args: Prisma.BloqueioGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloqueioGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloqueioCountArgs<ExtArgs>
            result: $Utils.Optional<BloqueioCountAggregateOutputType> | number
          }
        }
      }
      HorarioTrabalho: {
        payload: Prisma.$HorarioTrabalhoPayload<ExtArgs>
        fields: Prisma.HorarioTrabalhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioTrabalhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioTrabalhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          findFirst: {
            args: Prisma.HorarioTrabalhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioTrabalhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          findMany: {
            args: Prisma.HorarioTrabalhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>[]
          }
          create: {
            args: Prisma.HorarioTrabalhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          createMany: {
            args: Prisma.HorarioTrabalhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorarioTrabalhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>[]
          }
          delete: {
            args: Prisma.HorarioTrabalhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          update: {
            args: Prisma.HorarioTrabalhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          deleteMany: {
            args: Prisma.HorarioTrabalhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioTrabalhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorarioTrabalhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>[]
          }
          upsert: {
            args: Prisma.HorarioTrabalhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioTrabalhoPayload>
          }
          aggregate: {
            args: Prisma.HorarioTrabalhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioTrabalho>
          }
          groupBy: {
            args: Prisma.HorarioTrabalhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioTrabalhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioTrabalhoCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioTrabalhoCountAggregateOutputType> | number
          }
        }
      }
      ExcecaoHorario: {
        payload: Prisma.$ExcecaoHorarioPayload<ExtArgs>
        fields: Prisma.ExcecaoHorarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExcecaoHorarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExcecaoHorarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          findFirst: {
            args: Prisma.ExcecaoHorarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExcecaoHorarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          findMany: {
            args: Prisma.ExcecaoHorarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>[]
          }
          create: {
            args: Prisma.ExcecaoHorarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          createMany: {
            args: Prisma.ExcecaoHorarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExcecaoHorarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>[]
          }
          delete: {
            args: Prisma.ExcecaoHorarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          update: {
            args: Prisma.ExcecaoHorarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          deleteMany: {
            args: Prisma.ExcecaoHorarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExcecaoHorarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExcecaoHorarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>[]
          }
          upsert: {
            args: Prisma.ExcecaoHorarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExcecaoHorarioPayload>
          }
          aggregate: {
            args: Prisma.ExcecaoHorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExcecaoHorario>
          }
          groupBy: {
            args: Prisma.ExcecaoHorarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExcecaoHorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExcecaoHorarioCountArgs<ExtArgs>
            result: $Utils.Optional<ExcecaoHorarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    barbeiro?: BarbeiroOmit
    agendamento?: AgendamentoOmit
    bloqueio?: BloqueioOmit
    horarioTrabalho?: HorarioTrabalhoOmit
    excecaoHorario?: ExcecaoHorarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    agendamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ClienteCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type BarbeiroCountOutputType
   */

  export type BarbeiroCountOutputType = {
    agendamentos: number
    bloqueios: number
    horarios_trabalho: number
    excecoes_horario: number
  }

  export type BarbeiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | BarbeiroCountOutputTypeCountAgendamentosArgs
    bloqueios?: boolean | BarbeiroCountOutputTypeCountBloqueiosArgs
    horarios_trabalho?: boolean | BarbeiroCountOutputTypeCountHorarios_trabalhoArgs
    excecoes_horario?: boolean | BarbeiroCountOutputTypeCountExcecoes_horarioArgs
  }

  // Custom InputTypes
  /**
   * BarbeiroCountOutputType without action
   */
  export type BarbeiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbeiroCountOutputType
     */
    select?: BarbeiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbeiroCountOutputType without action
   */
  export type BarbeiroCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }

  /**
   * BarbeiroCountOutputType without action
   */
  export type BarbeiroCountOutputTypeCountBloqueiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueioWhereInput
  }

  /**
   * BarbeiroCountOutputType without action
   */
  export type BarbeiroCountOutputTypeCountHorarios_trabalhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioTrabalhoWhereInput
  }

  /**
   * BarbeiroCountOutputType without action
   */
  export type BarbeiroCountOutputTypeCountExcecoes_horarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExcecaoHorarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    telefone: string | null
    googleId: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    telefone: string | null
    googleId: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    telefone: number
    googleId: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "telefone" | "googleId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string
      telefone: string
      googleId: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Cliente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly sobrenome: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly googleId: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.agendamentos
   */
  export type Cliente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Barbeiro
   */

  export type AggregateBarbeiro = {
    _count: BarbeiroCountAggregateOutputType | null
    _avg: BarbeiroAvgAggregateOutputType | null
    _sum: BarbeiroSumAggregateOutputType | null
    _min: BarbeiroMinAggregateOutputType | null
    _max: BarbeiroMaxAggregateOutputType | null
  }

  export type BarbeiroAvgAggregateOutputType = {
    intervalo: number | null
  }

  export type BarbeiroSumAggregateOutputType = {
    intervalo: number | null
  }

  export type BarbeiroMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    telefone: string | null
    googleId: string | null
    duracao_corte: $Enums.DuracaoCorte | null
    intervalo: number | null
  }

  export type BarbeiroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    telefone: string | null
    googleId: string | null
    duracao_corte: $Enums.DuracaoCorte | null
    intervalo: number | null
  }

  export type BarbeiroCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    telefone: number
    googleId: number
    duracao_corte: number
    intervalo: number
    _all: number
  }


  export type BarbeiroAvgAggregateInputType = {
    intervalo?: true
  }

  export type BarbeiroSumAggregateInputType = {
    intervalo?: true
  }

  export type BarbeiroMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
    duracao_corte?: true
    intervalo?: true
  }

  export type BarbeiroMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
    duracao_corte?: true
    intervalo?: true
  }

  export type BarbeiroCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    telefone?: true
    googleId?: true
    duracao_corte?: true
    intervalo?: true
    _all?: true
  }

  export type BarbeiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbeiro to aggregate.
     */
    where?: BarbeiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbeiros to fetch.
     */
    orderBy?: BarbeiroOrderByWithRelationInput | BarbeiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbeiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbeiros
    **/
    _count?: true | BarbeiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbeiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbeiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbeiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbeiroMaxAggregateInputType
  }

  export type GetBarbeiroAggregateType<T extends BarbeiroAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbeiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbeiro[P]>
      : GetScalarType<T[P], AggregateBarbeiro[P]>
  }




  export type BarbeiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbeiroWhereInput
    orderBy?: BarbeiroOrderByWithAggregationInput | BarbeiroOrderByWithAggregationInput[]
    by: BarbeiroScalarFieldEnum[] | BarbeiroScalarFieldEnum
    having?: BarbeiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbeiroCountAggregateInputType | true
    _avg?: BarbeiroAvgAggregateInputType
    _sum?: BarbeiroSumAggregateInputType
    _min?: BarbeiroMinAggregateInputType
    _max?: BarbeiroMaxAggregateInputType
  }

  export type BarbeiroGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    _count: BarbeiroCountAggregateOutputType | null
    _avg: BarbeiroAvgAggregateOutputType | null
    _sum: BarbeiroSumAggregateOutputType | null
    _min: BarbeiroMinAggregateOutputType | null
    _max: BarbeiroMaxAggregateOutputType | null
  }

  type GetBarbeiroGroupByPayload<T extends BarbeiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbeiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbeiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbeiroGroupByOutputType[P]>
            : GetScalarType<T[P], BarbeiroGroupByOutputType[P]>
        }
      >
    >


  export type BarbeiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
    duracao_corte?: boolean
    intervalo?: boolean
    agendamentos?: boolean | Barbeiro$agendamentosArgs<ExtArgs>
    bloqueios?: boolean | Barbeiro$bloqueiosArgs<ExtArgs>
    horarios_trabalho?: boolean | Barbeiro$horarios_trabalhoArgs<ExtArgs>
    excecoes_horario?: boolean | Barbeiro$excecoes_horarioArgs<ExtArgs>
    _count?: boolean | BarbeiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbeiro"]>

  export type BarbeiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
    duracao_corte?: boolean
    intervalo?: boolean
  }, ExtArgs["result"]["barbeiro"]>

  export type BarbeiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
    duracao_corte?: boolean
    intervalo?: boolean
  }, ExtArgs["result"]["barbeiro"]>

  export type BarbeiroSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    telefone?: boolean
    googleId?: boolean
    duracao_corte?: boolean
    intervalo?: boolean
  }

  export type BarbeiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "telefone" | "googleId" | "duracao_corte" | "intervalo", ExtArgs["result"]["barbeiro"]>
  export type BarbeiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Barbeiro$agendamentosArgs<ExtArgs>
    bloqueios?: boolean | Barbeiro$bloqueiosArgs<ExtArgs>
    horarios_trabalho?: boolean | Barbeiro$horarios_trabalhoArgs<ExtArgs>
    excecoes_horario?: boolean | Barbeiro$excecoes_horarioArgs<ExtArgs>
    _count?: boolean | BarbeiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarbeiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarbeiroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarbeiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barbeiro"
    objects: {
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
      bloqueios: Prisma.$BloqueioPayload<ExtArgs>[]
      horarios_trabalho: Prisma.$HorarioTrabalhoPayload<ExtArgs>[]
      excecoes_horario: Prisma.$ExcecaoHorarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string
      telefone: string
      googleId: string
      duracao_corte: $Enums.DuracaoCorte
      intervalo: number
    }, ExtArgs["result"]["barbeiro"]>
    composites: {}
  }

  type BarbeiroGetPayload<S extends boolean | null | undefined | BarbeiroDefaultArgs> = $Result.GetResult<Prisma.$BarbeiroPayload, S>

  type BarbeiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbeiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbeiroCountAggregateInputType | true
    }

  export interface BarbeiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barbeiro'], meta: { name: 'Barbeiro' } }
    /**
     * Find zero or one Barbeiro that matches the filter.
     * @param {BarbeiroFindUniqueArgs} args - Arguments to find a Barbeiro
     * @example
     * // Get one Barbeiro
     * const barbeiro = await prisma.barbeiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbeiroFindUniqueArgs>(args: SelectSubset<T, BarbeiroFindUniqueArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barbeiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbeiroFindUniqueOrThrowArgs} args - Arguments to find a Barbeiro
     * @example
     * // Get one Barbeiro
     * const barbeiro = await prisma.barbeiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbeiroFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbeiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbeiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroFindFirstArgs} args - Arguments to find a Barbeiro
     * @example
     * // Get one Barbeiro
     * const barbeiro = await prisma.barbeiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbeiroFindFirstArgs>(args?: SelectSubset<T, BarbeiroFindFirstArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbeiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroFindFirstOrThrowArgs} args - Arguments to find a Barbeiro
     * @example
     * // Get one Barbeiro
     * const barbeiro = await prisma.barbeiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbeiroFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbeiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbeiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbeiros
     * const barbeiros = await prisma.barbeiro.findMany()
     * 
     * // Get first 10 Barbeiros
     * const barbeiros = await prisma.barbeiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbeiroWithIdOnly = await prisma.barbeiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbeiroFindManyArgs>(args?: SelectSubset<T, BarbeiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barbeiro.
     * @param {BarbeiroCreateArgs} args - Arguments to create a Barbeiro.
     * @example
     * // Create one Barbeiro
     * const Barbeiro = await prisma.barbeiro.create({
     *   data: {
     *     // ... data to create a Barbeiro
     *   }
     * })
     * 
     */
    create<T extends BarbeiroCreateArgs>(args: SelectSubset<T, BarbeiroCreateArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbeiros.
     * @param {BarbeiroCreateManyArgs} args - Arguments to create many Barbeiros.
     * @example
     * // Create many Barbeiros
     * const barbeiro = await prisma.barbeiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbeiroCreateManyArgs>(args?: SelectSubset<T, BarbeiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbeiros and returns the data saved in the database.
     * @param {BarbeiroCreateManyAndReturnArgs} args - Arguments to create many Barbeiros.
     * @example
     * // Create many Barbeiros
     * const barbeiro = await prisma.barbeiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbeiros and only return the `id`
     * const barbeiroWithIdOnly = await prisma.barbeiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbeiroCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbeiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barbeiro.
     * @param {BarbeiroDeleteArgs} args - Arguments to delete one Barbeiro.
     * @example
     * // Delete one Barbeiro
     * const Barbeiro = await prisma.barbeiro.delete({
     *   where: {
     *     // ... filter to delete one Barbeiro
     *   }
     * })
     * 
     */
    delete<T extends BarbeiroDeleteArgs>(args: SelectSubset<T, BarbeiroDeleteArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barbeiro.
     * @param {BarbeiroUpdateArgs} args - Arguments to update one Barbeiro.
     * @example
     * // Update one Barbeiro
     * const barbeiro = await prisma.barbeiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbeiroUpdateArgs>(args: SelectSubset<T, BarbeiroUpdateArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbeiros.
     * @param {BarbeiroDeleteManyArgs} args - Arguments to filter Barbeiros to delete.
     * @example
     * // Delete a few Barbeiros
     * const { count } = await prisma.barbeiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbeiroDeleteManyArgs>(args?: SelectSubset<T, BarbeiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbeiros
     * const barbeiro = await prisma.barbeiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbeiroUpdateManyArgs>(args: SelectSubset<T, BarbeiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbeiros and returns the data updated in the database.
     * @param {BarbeiroUpdateManyAndReturnArgs} args - Arguments to update many Barbeiros.
     * @example
     * // Update many Barbeiros
     * const barbeiro = await prisma.barbeiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbeiros and only return the `id`
     * const barbeiroWithIdOnly = await prisma.barbeiro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarbeiroUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbeiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barbeiro.
     * @param {BarbeiroUpsertArgs} args - Arguments to update or create a Barbeiro.
     * @example
     * // Update or create a Barbeiro
     * const barbeiro = await prisma.barbeiro.upsert({
     *   create: {
     *     // ... data to create a Barbeiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbeiro we want to update
     *   }
     * })
     */
    upsert<T extends BarbeiroUpsertArgs>(args: SelectSubset<T, BarbeiroUpsertArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroCountArgs} args - Arguments to filter Barbeiros to count.
     * @example
     * // Count the number of Barbeiros
     * const count = await prisma.barbeiro.count({
     *   where: {
     *     // ... the filter for the Barbeiros we want to count
     *   }
     * })
    **/
    count<T extends BarbeiroCountArgs>(
      args?: Subset<T, BarbeiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbeiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarbeiroAggregateArgs>(args: Subset<T, BarbeiroAggregateArgs>): Prisma.PrismaPromise<GetBarbeiroAggregateType<T>>

    /**
     * Group by Barbeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbeiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarbeiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbeiroGroupByArgs['orderBy'] }
        : { orderBy?: BarbeiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarbeiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbeiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barbeiro model
   */
  readonly fields: BarbeiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barbeiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbeiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Barbeiro$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Barbeiro$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloqueios<T extends Barbeiro$bloqueiosArgs<ExtArgs> = {}>(args?: Subset<T, Barbeiro$bloqueiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios_trabalho<T extends Barbeiro$horarios_trabalhoArgs<ExtArgs> = {}>(args?: Subset<T, Barbeiro$horarios_trabalhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    excecoes_horario<T extends Barbeiro$excecoes_horarioArgs<ExtArgs> = {}>(args?: Subset<T, Barbeiro$excecoes_horarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Barbeiro model
   */
  interface BarbeiroFieldRefs {
    readonly id: FieldRef<"Barbeiro", 'String'>
    readonly nome: FieldRef<"Barbeiro", 'String'>
    readonly sobrenome: FieldRef<"Barbeiro", 'String'>
    readonly telefone: FieldRef<"Barbeiro", 'String'>
    readonly googleId: FieldRef<"Barbeiro", 'String'>
    readonly duracao_corte: FieldRef<"Barbeiro", 'DuracaoCorte'>
    readonly intervalo: FieldRef<"Barbeiro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Barbeiro findUnique
   */
  export type BarbeiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter, which Barbeiro to fetch.
     */
    where: BarbeiroWhereUniqueInput
  }

  /**
   * Barbeiro findUniqueOrThrow
   */
  export type BarbeiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter, which Barbeiro to fetch.
     */
    where: BarbeiroWhereUniqueInput
  }

  /**
   * Barbeiro findFirst
   */
  export type BarbeiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter, which Barbeiro to fetch.
     */
    where?: BarbeiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbeiros to fetch.
     */
    orderBy?: BarbeiroOrderByWithRelationInput | BarbeiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbeiros.
     */
    cursor?: BarbeiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbeiros.
     */
    distinct?: BarbeiroScalarFieldEnum | BarbeiroScalarFieldEnum[]
  }

  /**
   * Barbeiro findFirstOrThrow
   */
  export type BarbeiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter, which Barbeiro to fetch.
     */
    where?: BarbeiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbeiros to fetch.
     */
    orderBy?: BarbeiroOrderByWithRelationInput | BarbeiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbeiros.
     */
    cursor?: BarbeiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbeiros.
     */
    distinct?: BarbeiroScalarFieldEnum | BarbeiroScalarFieldEnum[]
  }

  /**
   * Barbeiro findMany
   */
  export type BarbeiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter, which Barbeiros to fetch.
     */
    where?: BarbeiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbeiros to fetch.
     */
    orderBy?: BarbeiroOrderByWithRelationInput | BarbeiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbeiros.
     */
    cursor?: BarbeiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbeiros.
     */
    distinct?: BarbeiroScalarFieldEnum | BarbeiroScalarFieldEnum[]
  }

  /**
   * Barbeiro create
   */
  export type BarbeiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Barbeiro.
     */
    data: XOR<BarbeiroCreateInput, BarbeiroUncheckedCreateInput>
  }

  /**
   * Barbeiro createMany
   */
  export type BarbeiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbeiros.
     */
    data: BarbeiroCreateManyInput | BarbeiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbeiro createManyAndReturn
   */
  export type BarbeiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * The data used to create many Barbeiros.
     */
    data: BarbeiroCreateManyInput | BarbeiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbeiro update
   */
  export type BarbeiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Barbeiro.
     */
    data: XOR<BarbeiroUpdateInput, BarbeiroUncheckedUpdateInput>
    /**
     * Choose, which Barbeiro to update.
     */
    where: BarbeiroWhereUniqueInput
  }

  /**
   * Barbeiro updateMany
   */
  export type BarbeiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbeiros.
     */
    data: XOR<BarbeiroUpdateManyMutationInput, BarbeiroUncheckedUpdateManyInput>
    /**
     * Filter which Barbeiros to update
     */
    where?: BarbeiroWhereInput
    /**
     * Limit how many Barbeiros to update.
     */
    limit?: number
  }

  /**
   * Barbeiro updateManyAndReturn
   */
  export type BarbeiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * The data used to update Barbeiros.
     */
    data: XOR<BarbeiroUpdateManyMutationInput, BarbeiroUncheckedUpdateManyInput>
    /**
     * Filter which Barbeiros to update
     */
    where?: BarbeiroWhereInput
    /**
     * Limit how many Barbeiros to update.
     */
    limit?: number
  }

  /**
   * Barbeiro upsert
   */
  export type BarbeiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Barbeiro to update in case it exists.
     */
    where: BarbeiroWhereUniqueInput
    /**
     * In case the Barbeiro found by the `where` argument doesn't exist, create a new Barbeiro with this data.
     */
    create: XOR<BarbeiroCreateInput, BarbeiroUncheckedCreateInput>
    /**
     * In case the Barbeiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbeiroUpdateInput, BarbeiroUncheckedUpdateInput>
  }

  /**
   * Barbeiro delete
   */
  export type BarbeiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
    /**
     * Filter which Barbeiro to delete.
     */
    where: BarbeiroWhereUniqueInput
  }

  /**
   * Barbeiro deleteMany
   */
  export type BarbeiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbeiros to delete
     */
    where?: BarbeiroWhereInput
    /**
     * Limit how many Barbeiros to delete.
     */
    limit?: number
  }

  /**
   * Barbeiro.agendamentos
   */
  export type Barbeiro$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Barbeiro.bloqueios
   */
  export type Barbeiro$bloqueiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    where?: BloqueioWhereInput
    orderBy?: BloqueioOrderByWithRelationInput | BloqueioOrderByWithRelationInput[]
    cursor?: BloqueioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloqueioScalarFieldEnum | BloqueioScalarFieldEnum[]
  }

  /**
   * Barbeiro.horarios_trabalho
   */
  export type Barbeiro$horarios_trabalhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    where?: HorarioTrabalhoWhereInput
    orderBy?: HorarioTrabalhoOrderByWithRelationInput | HorarioTrabalhoOrderByWithRelationInput[]
    cursor?: HorarioTrabalhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioTrabalhoScalarFieldEnum | HorarioTrabalhoScalarFieldEnum[]
  }

  /**
   * Barbeiro.excecoes_horario
   */
  export type Barbeiro$excecoes_horarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    where?: ExcecaoHorarioWhereInput
    orderBy?: ExcecaoHorarioOrderByWithRelationInput | ExcecaoHorarioOrderByWithRelationInput[]
    cursor?: ExcecaoHorarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExcecaoHorarioScalarFieldEnum | ExcecaoHorarioScalarFieldEnum[]
  }

  /**
   * Barbeiro without action
   */
  export type BarbeiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbeiro
     */
    select?: BarbeiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbeiro
     */
    omit?: BarbeiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbeiroInclude<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: string | null
    cliente_id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario: Date | null
    status: $Enums.StatusAgendamento | null
    criado_em: Date | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: string | null
    cliente_id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario: Date | null
    status: $Enums.StatusAgendamento | null
    criado_em: Date | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    cliente_id: number
    barbeiro_id: number
    data: number
    horario: number
    status: number
    criado_em: number
    _all: number
  }


  export type AgendamentoMinAggregateInputType = {
    id?: true
    cliente_id?: true
    barbeiro_id?: true
    data?: true
    horario?: true
    status?: true
    criado_em?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    cliente_id?: true
    barbeiro_id?: true
    data?: true
    horario?: true
    status?: true
    criado_em?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    cliente_id?: true
    barbeiro_id?: true
    data?: true
    horario?: true
    status?: true
    criado_em?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: string
    cliente_id: string
    barbeiro_id: string
    data: Date
    horario: Date
    status: $Enums.StatusAgendamento
    criado_em: Date
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario?: boolean
    status?: boolean
    criado_em?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario?: boolean
    status?: boolean
    criado_em?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario?: boolean
    status?: boolean
    criado_em?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    cliente_id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario?: boolean
    status?: boolean
    criado_em?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cliente_id" | "barbeiro_id" | "data" | "horario" | "status" | "criado_em", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      barbeiro: Prisma.$BarbeiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cliente_id: string
      barbeiro_id: string
      data: Date
      horario: Date
      status: $Enums.StatusAgendamento
      criado_em: Date
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barbeiro<T extends BarbeiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbeiroDefaultArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'String'>
    readonly cliente_id: FieldRef<"Agendamento", 'String'>
    readonly barbeiro_id: FieldRef<"Agendamento", 'String'>
    readonly data: FieldRef<"Agendamento", 'DateTime'>
    readonly horario: FieldRef<"Agendamento", 'DateTime'>
    readonly status: FieldRef<"Agendamento", 'StatusAgendamento'>
    readonly criado_em: FieldRef<"Agendamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
  }


  /**
   * Model Bloqueio
   */

  export type AggregateBloqueio = {
    _count: BloqueioCountAggregateOutputType | null
    _min: BloqueioMinAggregateOutputType | null
    _max: BloqueioMaxAggregateOutputType | null
  }

  export type BloqueioMinAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario_inicio: Date | null
    horario_fim: Date | null
    motivo: $Enums.MotivoBloqueio | null
    criado_em: Date | null
  }

  export type BloqueioMaxAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario_inicio: Date | null
    horario_fim: Date | null
    motivo: $Enums.MotivoBloqueio | null
    criado_em: Date | null
  }

  export type BloqueioCountAggregateOutputType = {
    id: number
    barbeiro_id: number
    data: number
    horario_inicio: number
    horario_fim: number
    motivo: number
    criado_em: number
    _all: number
  }


  export type BloqueioMinAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    motivo?: true
    criado_em?: true
  }

  export type BloqueioMaxAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    motivo?: true
    criado_em?: true
  }

  export type BloqueioCountAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    motivo?: true
    criado_em?: true
    _all?: true
  }

  export type BloqueioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloqueio to aggregate.
     */
    where?: BloqueioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueios to fetch.
     */
    orderBy?: BloqueioOrderByWithRelationInput | BloqueioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloqueioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bloqueios
    **/
    _count?: true | BloqueioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloqueioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloqueioMaxAggregateInputType
  }

  export type GetBloqueioAggregateType<T extends BloqueioAggregateArgs> = {
        [P in keyof T & keyof AggregateBloqueio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloqueio[P]>
      : GetScalarType<T[P], AggregateBloqueio[P]>
  }




  export type BloqueioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueioWhereInput
    orderBy?: BloqueioOrderByWithAggregationInput | BloqueioOrderByWithAggregationInput[]
    by: BloqueioScalarFieldEnum[] | BloqueioScalarFieldEnum
    having?: BloqueioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloqueioCountAggregateInputType | true
    _min?: BloqueioMinAggregateInputType
    _max?: BloqueioMaxAggregateInputType
  }

  export type BloqueioGroupByOutputType = {
    id: string
    barbeiro_id: string
    data: Date
    horario_inicio: Date
    horario_fim: Date
    motivo: $Enums.MotivoBloqueio
    criado_em: Date
    _count: BloqueioCountAggregateOutputType | null
    _min: BloqueioMinAggregateOutputType | null
    _max: BloqueioMaxAggregateOutputType | null
  }

  type GetBloqueioGroupByPayload<T extends BloqueioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloqueioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloqueioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloqueioGroupByOutputType[P]>
            : GetScalarType<T[P], BloqueioGroupByOutputType[P]>
        }
      >
    >


  export type BloqueioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    motivo?: boolean
    criado_em?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueio"]>

  export type BloqueioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    motivo?: boolean
    criado_em?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueio"]>

  export type BloqueioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    motivo?: boolean
    criado_em?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueio"]>

  export type BloqueioSelectScalar = {
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    motivo?: boolean
    criado_em?: boolean
  }

  export type BloqueioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barbeiro_id" | "data" | "horario_inicio" | "horario_fim" | "motivo" | "criado_em", ExtArgs["result"]["bloqueio"]>
  export type BloqueioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type BloqueioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type BloqueioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }

  export type $BloqueioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bloqueio"
    objects: {
      barbeiro: Prisma.$BarbeiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barbeiro_id: string
      data: Date
      horario_inicio: Date
      horario_fim: Date
      motivo: $Enums.MotivoBloqueio
      criado_em: Date
    }, ExtArgs["result"]["bloqueio"]>
    composites: {}
  }

  type BloqueioGetPayload<S extends boolean | null | undefined | BloqueioDefaultArgs> = $Result.GetResult<Prisma.$BloqueioPayload, S>

  type BloqueioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloqueioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloqueioCountAggregateInputType | true
    }

  export interface BloqueioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bloqueio'], meta: { name: 'Bloqueio' } }
    /**
     * Find zero or one Bloqueio that matches the filter.
     * @param {BloqueioFindUniqueArgs} args - Arguments to find a Bloqueio
     * @example
     * // Get one Bloqueio
     * const bloqueio = await prisma.bloqueio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloqueioFindUniqueArgs>(args: SelectSubset<T, BloqueioFindUniqueArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloqueio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloqueioFindUniqueOrThrowArgs} args - Arguments to find a Bloqueio
     * @example
     * // Get one Bloqueio
     * const bloqueio = await prisma.bloqueio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloqueioFindUniqueOrThrowArgs>(args: SelectSubset<T, BloqueioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloqueio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioFindFirstArgs} args - Arguments to find a Bloqueio
     * @example
     * // Get one Bloqueio
     * const bloqueio = await prisma.bloqueio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloqueioFindFirstArgs>(args?: SelectSubset<T, BloqueioFindFirstArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloqueio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioFindFirstOrThrowArgs} args - Arguments to find a Bloqueio
     * @example
     * // Get one Bloqueio
     * const bloqueio = await prisma.bloqueio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloqueioFindFirstOrThrowArgs>(args?: SelectSubset<T, BloqueioFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloqueios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloqueios
     * const bloqueios = await prisma.bloqueio.findMany()
     * 
     * // Get first 10 Bloqueios
     * const bloqueios = await prisma.bloqueio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloqueioWithIdOnly = await prisma.bloqueio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloqueioFindManyArgs>(args?: SelectSubset<T, BloqueioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloqueio.
     * @param {BloqueioCreateArgs} args - Arguments to create a Bloqueio.
     * @example
     * // Create one Bloqueio
     * const Bloqueio = await prisma.bloqueio.create({
     *   data: {
     *     // ... data to create a Bloqueio
     *   }
     * })
     * 
     */
    create<T extends BloqueioCreateArgs>(args: SelectSubset<T, BloqueioCreateArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloqueios.
     * @param {BloqueioCreateManyArgs} args - Arguments to create many Bloqueios.
     * @example
     * // Create many Bloqueios
     * const bloqueio = await prisma.bloqueio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloqueioCreateManyArgs>(args?: SelectSubset<T, BloqueioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloqueios and returns the data saved in the database.
     * @param {BloqueioCreateManyAndReturnArgs} args - Arguments to create many Bloqueios.
     * @example
     * // Create many Bloqueios
     * const bloqueio = await prisma.bloqueio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloqueios and only return the `id`
     * const bloqueioWithIdOnly = await prisma.bloqueio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloqueioCreateManyAndReturnArgs>(args?: SelectSubset<T, BloqueioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloqueio.
     * @param {BloqueioDeleteArgs} args - Arguments to delete one Bloqueio.
     * @example
     * // Delete one Bloqueio
     * const Bloqueio = await prisma.bloqueio.delete({
     *   where: {
     *     // ... filter to delete one Bloqueio
     *   }
     * })
     * 
     */
    delete<T extends BloqueioDeleteArgs>(args: SelectSubset<T, BloqueioDeleteArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloqueio.
     * @param {BloqueioUpdateArgs} args - Arguments to update one Bloqueio.
     * @example
     * // Update one Bloqueio
     * const bloqueio = await prisma.bloqueio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloqueioUpdateArgs>(args: SelectSubset<T, BloqueioUpdateArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloqueios.
     * @param {BloqueioDeleteManyArgs} args - Arguments to filter Bloqueios to delete.
     * @example
     * // Delete a few Bloqueios
     * const { count } = await prisma.bloqueio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloqueioDeleteManyArgs>(args?: SelectSubset<T, BloqueioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloqueios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloqueios
     * const bloqueio = await prisma.bloqueio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloqueioUpdateManyArgs>(args: SelectSubset<T, BloqueioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloqueios and returns the data updated in the database.
     * @param {BloqueioUpdateManyAndReturnArgs} args - Arguments to update many Bloqueios.
     * @example
     * // Update many Bloqueios
     * const bloqueio = await prisma.bloqueio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloqueios and only return the `id`
     * const bloqueioWithIdOnly = await prisma.bloqueio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloqueioUpdateManyAndReturnArgs>(args: SelectSubset<T, BloqueioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloqueio.
     * @param {BloqueioUpsertArgs} args - Arguments to update or create a Bloqueio.
     * @example
     * // Update or create a Bloqueio
     * const bloqueio = await prisma.bloqueio.upsert({
     *   create: {
     *     // ... data to create a Bloqueio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloqueio we want to update
     *   }
     * })
     */
    upsert<T extends BloqueioUpsertArgs>(args: SelectSubset<T, BloqueioUpsertArgs<ExtArgs>>): Prisma__BloqueioClient<$Result.GetResult<Prisma.$BloqueioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloqueios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioCountArgs} args - Arguments to filter Bloqueios to count.
     * @example
     * // Count the number of Bloqueios
     * const count = await prisma.bloqueio.count({
     *   where: {
     *     // ... the filter for the Bloqueios we want to count
     *   }
     * })
    **/
    count<T extends BloqueioCountArgs>(
      args?: Subset<T, BloqueioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloqueioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloqueio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloqueioAggregateArgs>(args: Subset<T, BloqueioAggregateArgs>): Prisma.PrismaPromise<GetBloqueioAggregateType<T>>

    /**
     * Group by Bloqueio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloqueioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloqueioGroupByArgs['orderBy'] }
        : { orderBy?: BloqueioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloqueioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloqueioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bloqueio model
   */
  readonly fields: BloqueioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bloqueio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloqueioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbeiro<T extends BarbeiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbeiroDefaultArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bloqueio model
   */
  interface BloqueioFieldRefs {
    readonly id: FieldRef<"Bloqueio", 'String'>
    readonly barbeiro_id: FieldRef<"Bloqueio", 'String'>
    readonly data: FieldRef<"Bloqueio", 'DateTime'>
    readonly horario_inicio: FieldRef<"Bloqueio", 'DateTime'>
    readonly horario_fim: FieldRef<"Bloqueio", 'DateTime'>
    readonly motivo: FieldRef<"Bloqueio", 'MotivoBloqueio'>
    readonly criado_em: FieldRef<"Bloqueio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bloqueio findUnique
   */
  export type BloqueioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueio to fetch.
     */
    where: BloqueioWhereUniqueInput
  }

  /**
   * Bloqueio findUniqueOrThrow
   */
  export type BloqueioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueio to fetch.
     */
    where: BloqueioWhereUniqueInput
  }

  /**
   * Bloqueio findFirst
   */
  export type BloqueioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueio to fetch.
     */
    where?: BloqueioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueios to fetch.
     */
    orderBy?: BloqueioOrderByWithRelationInput | BloqueioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloqueios.
     */
    cursor?: BloqueioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueios.
     */
    distinct?: BloqueioScalarFieldEnum | BloqueioScalarFieldEnum[]
  }

  /**
   * Bloqueio findFirstOrThrow
   */
  export type BloqueioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueio to fetch.
     */
    where?: BloqueioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueios to fetch.
     */
    orderBy?: BloqueioOrderByWithRelationInput | BloqueioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloqueios.
     */
    cursor?: BloqueioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueios.
     */
    distinct?: BloqueioScalarFieldEnum | BloqueioScalarFieldEnum[]
  }

  /**
   * Bloqueio findMany
   */
  export type BloqueioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter, which Bloqueios to fetch.
     */
    where?: BloqueioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloqueios to fetch.
     */
    orderBy?: BloqueioOrderByWithRelationInput | BloqueioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bloqueios.
     */
    cursor?: BloqueioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloqueios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloqueios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloqueios.
     */
    distinct?: BloqueioScalarFieldEnum | BloqueioScalarFieldEnum[]
  }

  /**
   * Bloqueio create
   */
  export type BloqueioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * The data needed to create a Bloqueio.
     */
    data: XOR<BloqueioCreateInput, BloqueioUncheckedCreateInput>
  }

  /**
   * Bloqueio createMany
   */
  export type BloqueioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bloqueios.
     */
    data: BloqueioCreateManyInput | BloqueioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bloqueio createManyAndReturn
   */
  export type BloqueioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * The data used to create many Bloqueios.
     */
    data: BloqueioCreateManyInput | BloqueioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloqueio update
   */
  export type BloqueioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * The data needed to update a Bloqueio.
     */
    data: XOR<BloqueioUpdateInput, BloqueioUncheckedUpdateInput>
    /**
     * Choose, which Bloqueio to update.
     */
    where: BloqueioWhereUniqueInput
  }

  /**
   * Bloqueio updateMany
   */
  export type BloqueioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bloqueios.
     */
    data: XOR<BloqueioUpdateManyMutationInput, BloqueioUncheckedUpdateManyInput>
    /**
     * Filter which Bloqueios to update
     */
    where?: BloqueioWhereInput
    /**
     * Limit how many Bloqueios to update.
     */
    limit?: number
  }

  /**
   * Bloqueio updateManyAndReturn
   */
  export type BloqueioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * The data used to update Bloqueios.
     */
    data: XOR<BloqueioUpdateManyMutationInput, BloqueioUncheckedUpdateManyInput>
    /**
     * Filter which Bloqueios to update
     */
    where?: BloqueioWhereInput
    /**
     * Limit how many Bloqueios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloqueio upsert
   */
  export type BloqueioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * The filter to search for the Bloqueio to update in case it exists.
     */
    where: BloqueioWhereUniqueInput
    /**
     * In case the Bloqueio found by the `where` argument doesn't exist, create a new Bloqueio with this data.
     */
    create: XOR<BloqueioCreateInput, BloqueioUncheckedCreateInput>
    /**
     * In case the Bloqueio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloqueioUpdateInput, BloqueioUncheckedUpdateInput>
  }

  /**
   * Bloqueio delete
   */
  export type BloqueioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
    /**
     * Filter which Bloqueio to delete.
     */
    where: BloqueioWhereUniqueInput
  }

  /**
   * Bloqueio deleteMany
   */
  export type BloqueioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloqueios to delete
     */
    where?: BloqueioWhereInput
    /**
     * Limit how many Bloqueios to delete.
     */
    limit?: number
  }

  /**
   * Bloqueio without action
   */
  export type BloqueioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloqueio
     */
    select?: BloqueioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloqueio
     */
    omit?: BloqueioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueioInclude<ExtArgs> | null
  }


  /**
   * Model HorarioTrabalho
   */

  export type AggregateHorarioTrabalho = {
    _count: HorarioTrabalhoCountAggregateOutputType | null
    _min: HorarioTrabalhoMinAggregateOutputType | null
    _max: HorarioTrabalhoMaxAggregateOutputType | null
  }

  export type HorarioTrabalhoMinAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    dia_semana: $Enums.DiaSemana | null
    horario_inicio: Date | null
    horario_fim: Date | null
    ativo: boolean | null
  }

  export type HorarioTrabalhoMaxAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    dia_semana: $Enums.DiaSemana | null
    horario_inicio: Date | null
    horario_fim: Date | null
    ativo: boolean | null
  }

  export type HorarioTrabalhoCountAggregateOutputType = {
    id: number
    barbeiro_id: number
    dia_semana: number
    horario_inicio: number
    horario_fim: number
    ativo: number
    _all: number
  }


  export type HorarioTrabalhoMinAggregateInputType = {
    id?: true
    barbeiro_id?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
  }

  export type HorarioTrabalhoMaxAggregateInputType = {
    id?: true
    barbeiro_id?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
  }

  export type HorarioTrabalhoCountAggregateInputType = {
    id?: true
    barbeiro_id?: true
    dia_semana?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
    _all?: true
  }

  export type HorarioTrabalhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioTrabalho to aggregate.
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioTrabalhos to fetch.
     */
    orderBy?: HorarioTrabalhoOrderByWithRelationInput | HorarioTrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioTrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioTrabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioTrabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioTrabalhos
    **/
    _count?: true | HorarioTrabalhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioTrabalhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioTrabalhoMaxAggregateInputType
  }

  export type GetHorarioTrabalhoAggregateType<T extends HorarioTrabalhoAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioTrabalho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioTrabalho[P]>
      : GetScalarType<T[P], AggregateHorarioTrabalho[P]>
  }




  export type HorarioTrabalhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioTrabalhoWhereInput
    orderBy?: HorarioTrabalhoOrderByWithAggregationInput | HorarioTrabalhoOrderByWithAggregationInput[]
    by: HorarioTrabalhoScalarFieldEnum[] | HorarioTrabalhoScalarFieldEnum
    having?: HorarioTrabalhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioTrabalhoCountAggregateInputType | true
    _min?: HorarioTrabalhoMinAggregateInputType
    _max?: HorarioTrabalhoMaxAggregateInputType
  }

  export type HorarioTrabalhoGroupByOutputType = {
    id: string
    barbeiro_id: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date
    horario_fim: Date
    ativo: boolean
    _count: HorarioTrabalhoCountAggregateOutputType | null
    _min: HorarioTrabalhoMinAggregateOutputType | null
    _max: HorarioTrabalhoMaxAggregateOutputType | null
  }

  type GetHorarioTrabalhoGroupByPayload<T extends HorarioTrabalhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioTrabalhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioTrabalhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioTrabalhoGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioTrabalhoGroupByOutputType[P]>
        }
      >
    >


  export type HorarioTrabalhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioTrabalho"]>

  export type HorarioTrabalhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioTrabalho"]>

  export type HorarioTrabalhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioTrabalho"]>

  export type HorarioTrabalhoSelectScalar = {
    id?: boolean
    barbeiro_id?: boolean
    dia_semana?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
  }

  export type HorarioTrabalhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barbeiro_id" | "dia_semana" | "horario_inicio" | "horario_fim" | "ativo", ExtArgs["result"]["horarioTrabalho"]>
  export type HorarioTrabalhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type HorarioTrabalhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type HorarioTrabalhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }

  export type $HorarioTrabalhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioTrabalho"
    objects: {
      barbeiro: Prisma.$BarbeiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barbeiro_id: string
      dia_semana: $Enums.DiaSemana
      horario_inicio: Date
      horario_fim: Date
      ativo: boolean
    }, ExtArgs["result"]["horarioTrabalho"]>
    composites: {}
  }

  type HorarioTrabalhoGetPayload<S extends boolean | null | undefined | HorarioTrabalhoDefaultArgs> = $Result.GetResult<Prisma.$HorarioTrabalhoPayload, S>

  type HorarioTrabalhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioTrabalhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioTrabalhoCountAggregateInputType | true
    }

  export interface HorarioTrabalhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioTrabalho'], meta: { name: 'HorarioTrabalho' } }
    /**
     * Find zero or one HorarioTrabalho that matches the filter.
     * @param {HorarioTrabalhoFindUniqueArgs} args - Arguments to find a HorarioTrabalho
     * @example
     * // Get one HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioTrabalhoFindUniqueArgs>(args: SelectSubset<T, HorarioTrabalhoFindUniqueArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioTrabalho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioTrabalhoFindUniqueOrThrowArgs} args - Arguments to find a HorarioTrabalho
     * @example
     * // Get one HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioTrabalhoFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioTrabalhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioTrabalho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoFindFirstArgs} args - Arguments to find a HorarioTrabalho
     * @example
     * // Get one HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioTrabalhoFindFirstArgs>(args?: SelectSubset<T, HorarioTrabalhoFindFirstArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioTrabalho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoFindFirstOrThrowArgs} args - Arguments to find a HorarioTrabalho
     * @example
     * // Get one HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioTrabalhoFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioTrabalhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioTrabalhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioTrabalhos
     * const horarioTrabalhos = await prisma.horarioTrabalho.findMany()
     * 
     * // Get first 10 HorarioTrabalhos
     * const horarioTrabalhos = await prisma.horarioTrabalho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioTrabalhoWithIdOnly = await prisma.horarioTrabalho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioTrabalhoFindManyArgs>(args?: SelectSubset<T, HorarioTrabalhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioTrabalho.
     * @param {HorarioTrabalhoCreateArgs} args - Arguments to create a HorarioTrabalho.
     * @example
     * // Create one HorarioTrabalho
     * const HorarioTrabalho = await prisma.horarioTrabalho.create({
     *   data: {
     *     // ... data to create a HorarioTrabalho
     *   }
     * })
     * 
     */
    create<T extends HorarioTrabalhoCreateArgs>(args: SelectSubset<T, HorarioTrabalhoCreateArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioTrabalhos.
     * @param {HorarioTrabalhoCreateManyArgs} args - Arguments to create many HorarioTrabalhos.
     * @example
     * // Create many HorarioTrabalhos
     * const horarioTrabalho = await prisma.horarioTrabalho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioTrabalhoCreateManyArgs>(args?: SelectSubset<T, HorarioTrabalhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorarioTrabalhos and returns the data saved in the database.
     * @param {HorarioTrabalhoCreateManyAndReturnArgs} args - Arguments to create many HorarioTrabalhos.
     * @example
     * // Create many HorarioTrabalhos
     * const horarioTrabalho = await prisma.horarioTrabalho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorarioTrabalhos and only return the `id`
     * const horarioTrabalhoWithIdOnly = await prisma.horarioTrabalho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorarioTrabalhoCreateManyAndReturnArgs>(args?: SelectSubset<T, HorarioTrabalhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorarioTrabalho.
     * @param {HorarioTrabalhoDeleteArgs} args - Arguments to delete one HorarioTrabalho.
     * @example
     * // Delete one HorarioTrabalho
     * const HorarioTrabalho = await prisma.horarioTrabalho.delete({
     *   where: {
     *     // ... filter to delete one HorarioTrabalho
     *   }
     * })
     * 
     */
    delete<T extends HorarioTrabalhoDeleteArgs>(args: SelectSubset<T, HorarioTrabalhoDeleteArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioTrabalho.
     * @param {HorarioTrabalhoUpdateArgs} args - Arguments to update one HorarioTrabalho.
     * @example
     * // Update one HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioTrabalhoUpdateArgs>(args: SelectSubset<T, HorarioTrabalhoUpdateArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioTrabalhos.
     * @param {HorarioTrabalhoDeleteManyArgs} args - Arguments to filter HorarioTrabalhos to delete.
     * @example
     * // Delete a few HorarioTrabalhos
     * const { count } = await prisma.horarioTrabalho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioTrabalhoDeleteManyArgs>(args?: SelectSubset<T, HorarioTrabalhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioTrabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioTrabalhos
     * const horarioTrabalho = await prisma.horarioTrabalho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioTrabalhoUpdateManyArgs>(args: SelectSubset<T, HorarioTrabalhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioTrabalhos and returns the data updated in the database.
     * @param {HorarioTrabalhoUpdateManyAndReturnArgs} args - Arguments to update many HorarioTrabalhos.
     * @example
     * // Update many HorarioTrabalhos
     * const horarioTrabalho = await prisma.horarioTrabalho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorarioTrabalhos and only return the `id`
     * const horarioTrabalhoWithIdOnly = await prisma.horarioTrabalho.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HorarioTrabalhoUpdateManyAndReturnArgs>(args: SelectSubset<T, HorarioTrabalhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorarioTrabalho.
     * @param {HorarioTrabalhoUpsertArgs} args - Arguments to update or create a HorarioTrabalho.
     * @example
     * // Update or create a HorarioTrabalho
     * const horarioTrabalho = await prisma.horarioTrabalho.upsert({
     *   create: {
     *     // ... data to create a HorarioTrabalho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioTrabalho we want to update
     *   }
     * })
     */
    upsert<T extends HorarioTrabalhoUpsertArgs>(args: SelectSubset<T, HorarioTrabalhoUpsertArgs<ExtArgs>>): Prisma__HorarioTrabalhoClient<$Result.GetResult<Prisma.$HorarioTrabalhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorarioTrabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoCountArgs} args - Arguments to filter HorarioTrabalhos to count.
     * @example
     * // Count the number of HorarioTrabalhos
     * const count = await prisma.horarioTrabalho.count({
     *   where: {
     *     // ... the filter for the HorarioTrabalhos we want to count
     *   }
     * })
    **/
    count<T extends HorarioTrabalhoCountArgs>(
      args?: Subset<T, HorarioTrabalhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioTrabalhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioTrabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorarioTrabalhoAggregateArgs>(args: Subset<T, HorarioTrabalhoAggregateArgs>): Prisma.PrismaPromise<GetHorarioTrabalhoAggregateType<T>>

    /**
     * Group by HorarioTrabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioTrabalhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorarioTrabalhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioTrabalhoGroupByArgs['orderBy'] }
        : { orderBy?: HorarioTrabalhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorarioTrabalhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioTrabalhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioTrabalho model
   */
  readonly fields: HorarioTrabalhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioTrabalho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioTrabalhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbeiro<T extends BarbeiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbeiroDefaultArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorarioTrabalho model
   */
  interface HorarioTrabalhoFieldRefs {
    readonly id: FieldRef<"HorarioTrabalho", 'String'>
    readonly barbeiro_id: FieldRef<"HorarioTrabalho", 'String'>
    readonly dia_semana: FieldRef<"HorarioTrabalho", 'DiaSemana'>
    readonly horario_inicio: FieldRef<"HorarioTrabalho", 'DateTime'>
    readonly horario_fim: FieldRef<"HorarioTrabalho", 'DateTime'>
    readonly ativo: FieldRef<"HorarioTrabalho", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * HorarioTrabalho findUnique
   */
  export type HorarioTrabalhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioTrabalho to fetch.
     */
    where: HorarioTrabalhoWhereUniqueInput
  }

  /**
   * HorarioTrabalho findUniqueOrThrow
   */
  export type HorarioTrabalhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioTrabalho to fetch.
     */
    where: HorarioTrabalhoWhereUniqueInput
  }

  /**
   * HorarioTrabalho findFirst
   */
  export type HorarioTrabalhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioTrabalho to fetch.
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioTrabalhos to fetch.
     */
    orderBy?: HorarioTrabalhoOrderByWithRelationInput | HorarioTrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioTrabalhos.
     */
    cursor?: HorarioTrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioTrabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioTrabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioTrabalhos.
     */
    distinct?: HorarioTrabalhoScalarFieldEnum | HorarioTrabalhoScalarFieldEnum[]
  }

  /**
   * HorarioTrabalho findFirstOrThrow
   */
  export type HorarioTrabalhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioTrabalho to fetch.
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioTrabalhos to fetch.
     */
    orderBy?: HorarioTrabalhoOrderByWithRelationInput | HorarioTrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioTrabalhos.
     */
    cursor?: HorarioTrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioTrabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioTrabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioTrabalhos.
     */
    distinct?: HorarioTrabalhoScalarFieldEnum | HorarioTrabalhoScalarFieldEnum[]
  }

  /**
   * HorarioTrabalho findMany
   */
  export type HorarioTrabalhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioTrabalhos to fetch.
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioTrabalhos to fetch.
     */
    orderBy?: HorarioTrabalhoOrderByWithRelationInput | HorarioTrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioTrabalhos.
     */
    cursor?: HorarioTrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioTrabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioTrabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioTrabalhos.
     */
    distinct?: HorarioTrabalhoScalarFieldEnum | HorarioTrabalhoScalarFieldEnum[]
  }

  /**
   * HorarioTrabalho create
   */
  export type HorarioTrabalhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * The data needed to create a HorarioTrabalho.
     */
    data: XOR<HorarioTrabalhoCreateInput, HorarioTrabalhoUncheckedCreateInput>
  }

  /**
   * HorarioTrabalho createMany
   */
  export type HorarioTrabalhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioTrabalhos.
     */
    data: HorarioTrabalhoCreateManyInput | HorarioTrabalhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HorarioTrabalho createManyAndReturn
   */
  export type HorarioTrabalhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * The data used to create many HorarioTrabalhos.
     */
    data: HorarioTrabalhoCreateManyInput | HorarioTrabalhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioTrabalho update
   */
  export type HorarioTrabalhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * The data needed to update a HorarioTrabalho.
     */
    data: XOR<HorarioTrabalhoUpdateInput, HorarioTrabalhoUncheckedUpdateInput>
    /**
     * Choose, which HorarioTrabalho to update.
     */
    where: HorarioTrabalhoWhereUniqueInput
  }

  /**
   * HorarioTrabalho updateMany
   */
  export type HorarioTrabalhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioTrabalhos.
     */
    data: XOR<HorarioTrabalhoUpdateManyMutationInput, HorarioTrabalhoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioTrabalhos to update
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * Limit how many HorarioTrabalhos to update.
     */
    limit?: number
  }

  /**
   * HorarioTrabalho updateManyAndReturn
   */
  export type HorarioTrabalhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * The data used to update HorarioTrabalhos.
     */
    data: XOR<HorarioTrabalhoUpdateManyMutationInput, HorarioTrabalhoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioTrabalhos to update
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * Limit how many HorarioTrabalhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioTrabalho upsert
   */
  export type HorarioTrabalhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * The filter to search for the HorarioTrabalho to update in case it exists.
     */
    where: HorarioTrabalhoWhereUniqueInput
    /**
     * In case the HorarioTrabalho found by the `where` argument doesn't exist, create a new HorarioTrabalho with this data.
     */
    create: XOR<HorarioTrabalhoCreateInput, HorarioTrabalhoUncheckedCreateInput>
    /**
     * In case the HorarioTrabalho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioTrabalhoUpdateInput, HorarioTrabalhoUncheckedUpdateInput>
  }

  /**
   * HorarioTrabalho delete
   */
  export type HorarioTrabalhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
    /**
     * Filter which HorarioTrabalho to delete.
     */
    where: HorarioTrabalhoWhereUniqueInput
  }

  /**
   * HorarioTrabalho deleteMany
   */
  export type HorarioTrabalhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioTrabalhos to delete
     */
    where?: HorarioTrabalhoWhereInput
    /**
     * Limit how many HorarioTrabalhos to delete.
     */
    limit?: number
  }

  /**
   * HorarioTrabalho without action
   */
  export type HorarioTrabalhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioTrabalho
     */
    select?: HorarioTrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioTrabalho
     */
    omit?: HorarioTrabalhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioTrabalhoInclude<ExtArgs> | null
  }


  /**
   * Model ExcecaoHorario
   */

  export type AggregateExcecaoHorario = {
    _count: ExcecaoHorarioCountAggregateOutputType | null
    _min: ExcecaoHorarioMinAggregateOutputType | null
    _max: ExcecaoHorarioMaxAggregateOutputType | null
  }

  export type ExcecaoHorarioMinAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario_inicio: Date | null
    horario_fim: Date | null
    ativo: boolean | null
  }

  export type ExcecaoHorarioMaxAggregateOutputType = {
    id: string | null
    barbeiro_id: string | null
    data: Date | null
    horario_inicio: Date | null
    horario_fim: Date | null
    ativo: boolean | null
  }

  export type ExcecaoHorarioCountAggregateOutputType = {
    id: number
    barbeiro_id: number
    data: number
    horario_inicio: number
    horario_fim: number
    ativo: number
    _all: number
  }


  export type ExcecaoHorarioMinAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
  }

  export type ExcecaoHorarioMaxAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
  }

  export type ExcecaoHorarioCountAggregateInputType = {
    id?: true
    barbeiro_id?: true
    data?: true
    horario_inicio?: true
    horario_fim?: true
    ativo?: true
    _all?: true
  }

  export type ExcecaoHorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExcecaoHorario to aggregate.
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcecaoHorarios to fetch.
     */
    orderBy?: ExcecaoHorarioOrderByWithRelationInput | ExcecaoHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExcecaoHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcecaoHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcecaoHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExcecaoHorarios
    **/
    _count?: true | ExcecaoHorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExcecaoHorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExcecaoHorarioMaxAggregateInputType
  }

  export type GetExcecaoHorarioAggregateType<T extends ExcecaoHorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateExcecaoHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExcecaoHorario[P]>
      : GetScalarType<T[P], AggregateExcecaoHorario[P]>
  }




  export type ExcecaoHorarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExcecaoHorarioWhereInput
    orderBy?: ExcecaoHorarioOrderByWithAggregationInput | ExcecaoHorarioOrderByWithAggregationInput[]
    by: ExcecaoHorarioScalarFieldEnum[] | ExcecaoHorarioScalarFieldEnum
    having?: ExcecaoHorarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExcecaoHorarioCountAggregateInputType | true
    _min?: ExcecaoHorarioMinAggregateInputType
    _max?: ExcecaoHorarioMaxAggregateInputType
  }

  export type ExcecaoHorarioGroupByOutputType = {
    id: string
    barbeiro_id: string
    data: Date
    horario_inicio: Date
    horario_fim: Date
    ativo: boolean
    _count: ExcecaoHorarioCountAggregateOutputType | null
    _min: ExcecaoHorarioMinAggregateOutputType | null
    _max: ExcecaoHorarioMaxAggregateOutputType | null
  }

  type GetExcecaoHorarioGroupByPayload<T extends ExcecaoHorarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExcecaoHorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExcecaoHorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExcecaoHorarioGroupByOutputType[P]>
            : GetScalarType<T[P], ExcecaoHorarioGroupByOutputType[P]>
        }
      >
    >


  export type ExcecaoHorarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excecaoHorario"]>

  export type ExcecaoHorarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excecaoHorario"]>

  export type ExcecaoHorarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["excecaoHorario"]>

  export type ExcecaoHorarioSelectScalar = {
    id?: boolean
    barbeiro_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    horario_fim?: boolean
    ativo?: boolean
  }

  export type ExcecaoHorarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barbeiro_id" | "data" | "horario_inicio" | "horario_fim" | "ativo", ExtArgs["result"]["excecaoHorario"]>
  export type ExcecaoHorarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type ExcecaoHorarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }
  export type ExcecaoHorarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbeiro?: boolean | BarbeiroDefaultArgs<ExtArgs>
  }

  export type $ExcecaoHorarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExcecaoHorario"
    objects: {
      barbeiro: Prisma.$BarbeiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barbeiro_id: string
      data: Date
      horario_inicio: Date
      horario_fim: Date
      ativo: boolean
    }, ExtArgs["result"]["excecaoHorario"]>
    composites: {}
  }

  type ExcecaoHorarioGetPayload<S extends boolean | null | undefined | ExcecaoHorarioDefaultArgs> = $Result.GetResult<Prisma.$ExcecaoHorarioPayload, S>

  type ExcecaoHorarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExcecaoHorarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExcecaoHorarioCountAggregateInputType | true
    }

  export interface ExcecaoHorarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExcecaoHorario'], meta: { name: 'ExcecaoHorario' } }
    /**
     * Find zero or one ExcecaoHorario that matches the filter.
     * @param {ExcecaoHorarioFindUniqueArgs} args - Arguments to find a ExcecaoHorario
     * @example
     * // Get one ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExcecaoHorarioFindUniqueArgs>(args: SelectSubset<T, ExcecaoHorarioFindUniqueArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExcecaoHorario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExcecaoHorarioFindUniqueOrThrowArgs} args - Arguments to find a ExcecaoHorario
     * @example
     * // Get one ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExcecaoHorarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ExcecaoHorarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcecaoHorario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioFindFirstArgs} args - Arguments to find a ExcecaoHorario
     * @example
     * // Get one ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExcecaoHorarioFindFirstArgs>(args?: SelectSubset<T, ExcecaoHorarioFindFirstArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExcecaoHorario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioFindFirstOrThrowArgs} args - Arguments to find a ExcecaoHorario
     * @example
     * // Get one ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExcecaoHorarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ExcecaoHorarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExcecaoHorarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExcecaoHorarios
     * const excecaoHorarios = await prisma.excecaoHorario.findMany()
     * 
     * // Get first 10 ExcecaoHorarios
     * const excecaoHorarios = await prisma.excecaoHorario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const excecaoHorarioWithIdOnly = await prisma.excecaoHorario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExcecaoHorarioFindManyArgs>(args?: SelectSubset<T, ExcecaoHorarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExcecaoHorario.
     * @param {ExcecaoHorarioCreateArgs} args - Arguments to create a ExcecaoHorario.
     * @example
     * // Create one ExcecaoHorario
     * const ExcecaoHorario = await prisma.excecaoHorario.create({
     *   data: {
     *     // ... data to create a ExcecaoHorario
     *   }
     * })
     * 
     */
    create<T extends ExcecaoHorarioCreateArgs>(args: SelectSubset<T, ExcecaoHorarioCreateArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExcecaoHorarios.
     * @param {ExcecaoHorarioCreateManyArgs} args - Arguments to create many ExcecaoHorarios.
     * @example
     * // Create many ExcecaoHorarios
     * const excecaoHorario = await prisma.excecaoHorario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExcecaoHorarioCreateManyArgs>(args?: SelectSubset<T, ExcecaoHorarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExcecaoHorarios and returns the data saved in the database.
     * @param {ExcecaoHorarioCreateManyAndReturnArgs} args - Arguments to create many ExcecaoHorarios.
     * @example
     * // Create many ExcecaoHorarios
     * const excecaoHorario = await prisma.excecaoHorario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExcecaoHorarios and only return the `id`
     * const excecaoHorarioWithIdOnly = await prisma.excecaoHorario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExcecaoHorarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ExcecaoHorarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExcecaoHorario.
     * @param {ExcecaoHorarioDeleteArgs} args - Arguments to delete one ExcecaoHorario.
     * @example
     * // Delete one ExcecaoHorario
     * const ExcecaoHorario = await prisma.excecaoHorario.delete({
     *   where: {
     *     // ... filter to delete one ExcecaoHorario
     *   }
     * })
     * 
     */
    delete<T extends ExcecaoHorarioDeleteArgs>(args: SelectSubset<T, ExcecaoHorarioDeleteArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExcecaoHorario.
     * @param {ExcecaoHorarioUpdateArgs} args - Arguments to update one ExcecaoHorario.
     * @example
     * // Update one ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExcecaoHorarioUpdateArgs>(args: SelectSubset<T, ExcecaoHorarioUpdateArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExcecaoHorarios.
     * @param {ExcecaoHorarioDeleteManyArgs} args - Arguments to filter ExcecaoHorarios to delete.
     * @example
     * // Delete a few ExcecaoHorarios
     * const { count } = await prisma.excecaoHorario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExcecaoHorarioDeleteManyArgs>(args?: SelectSubset<T, ExcecaoHorarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcecaoHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExcecaoHorarios
     * const excecaoHorario = await prisma.excecaoHorario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExcecaoHorarioUpdateManyArgs>(args: SelectSubset<T, ExcecaoHorarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExcecaoHorarios and returns the data updated in the database.
     * @param {ExcecaoHorarioUpdateManyAndReturnArgs} args - Arguments to update many ExcecaoHorarios.
     * @example
     * // Update many ExcecaoHorarios
     * const excecaoHorario = await prisma.excecaoHorario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExcecaoHorarios and only return the `id`
     * const excecaoHorarioWithIdOnly = await prisma.excecaoHorario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExcecaoHorarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ExcecaoHorarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExcecaoHorario.
     * @param {ExcecaoHorarioUpsertArgs} args - Arguments to update or create a ExcecaoHorario.
     * @example
     * // Update or create a ExcecaoHorario
     * const excecaoHorario = await prisma.excecaoHorario.upsert({
     *   create: {
     *     // ... data to create a ExcecaoHorario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExcecaoHorario we want to update
     *   }
     * })
     */
    upsert<T extends ExcecaoHorarioUpsertArgs>(args: SelectSubset<T, ExcecaoHorarioUpsertArgs<ExtArgs>>): Prisma__ExcecaoHorarioClient<$Result.GetResult<Prisma.$ExcecaoHorarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExcecaoHorarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioCountArgs} args - Arguments to filter ExcecaoHorarios to count.
     * @example
     * // Count the number of ExcecaoHorarios
     * const count = await prisma.excecaoHorario.count({
     *   where: {
     *     // ... the filter for the ExcecaoHorarios we want to count
     *   }
     * })
    **/
    count<T extends ExcecaoHorarioCountArgs>(
      args?: Subset<T, ExcecaoHorarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExcecaoHorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExcecaoHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExcecaoHorarioAggregateArgs>(args: Subset<T, ExcecaoHorarioAggregateArgs>): Prisma.PrismaPromise<GetExcecaoHorarioAggregateType<T>>

    /**
     * Group by ExcecaoHorario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExcecaoHorarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExcecaoHorarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExcecaoHorarioGroupByArgs['orderBy'] }
        : { orderBy?: ExcecaoHorarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExcecaoHorarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExcecaoHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExcecaoHorario model
   */
  readonly fields: ExcecaoHorarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExcecaoHorario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExcecaoHorarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbeiro<T extends BarbeiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbeiroDefaultArgs<ExtArgs>>): Prisma__BarbeiroClient<$Result.GetResult<Prisma.$BarbeiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExcecaoHorario model
   */
  interface ExcecaoHorarioFieldRefs {
    readonly id: FieldRef<"ExcecaoHorario", 'String'>
    readonly barbeiro_id: FieldRef<"ExcecaoHorario", 'String'>
    readonly data: FieldRef<"ExcecaoHorario", 'DateTime'>
    readonly horario_inicio: FieldRef<"ExcecaoHorario", 'DateTime'>
    readonly horario_fim: FieldRef<"ExcecaoHorario", 'DateTime'>
    readonly ativo: FieldRef<"ExcecaoHorario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExcecaoHorario findUnique
   */
  export type ExcecaoHorarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter, which ExcecaoHorario to fetch.
     */
    where: ExcecaoHorarioWhereUniqueInput
  }

  /**
   * ExcecaoHorario findUniqueOrThrow
   */
  export type ExcecaoHorarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter, which ExcecaoHorario to fetch.
     */
    where: ExcecaoHorarioWhereUniqueInput
  }

  /**
   * ExcecaoHorario findFirst
   */
  export type ExcecaoHorarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter, which ExcecaoHorario to fetch.
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcecaoHorarios to fetch.
     */
    orderBy?: ExcecaoHorarioOrderByWithRelationInput | ExcecaoHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExcecaoHorarios.
     */
    cursor?: ExcecaoHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcecaoHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcecaoHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExcecaoHorarios.
     */
    distinct?: ExcecaoHorarioScalarFieldEnum | ExcecaoHorarioScalarFieldEnum[]
  }

  /**
   * ExcecaoHorario findFirstOrThrow
   */
  export type ExcecaoHorarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter, which ExcecaoHorario to fetch.
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcecaoHorarios to fetch.
     */
    orderBy?: ExcecaoHorarioOrderByWithRelationInput | ExcecaoHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExcecaoHorarios.
     */
    cursor?: ExcecaoHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcecaoHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcecaoHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExcecaoHorarios.
     */
    distinct?: ExcecaoHorarioScalarFieldEnum | ExcecaoHorarioScalarFieldEnum[]
  }

  /**
   * ExcecaoHorario findMany
   */
  export type ExcecaoHorarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter, which ExcecaoHorarios to fetch.
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExcecaoHorarios to fetch.
     */
    orderBy?: ExcecaoHorarioOrderByWithRelationInput | ExcecaoHorarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExcecaoHorarios.
     */
    cursor?: ExcecaoHorarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExcecaoHorarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExcecaoHorarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExcecaoHorarios.
     */
    distinct?: ExcecaoHorarioScalarFieldEnum | ExcecaoHorarioScalarFieldEnum[]
  }

  /**
   * ExcecaoHorario create
   */
  export type ExcecaoHorarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ExcecaoHorario.
     */
    data: XOR<ExcecaoHorarioCreateInput, ExcecaoHorarioUncheckedCreateInput>
  }

  /**
   * ExcecaoHorario createMany
   */
  export type ExcecaoHorarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExcecaoHorarios.
     */
    data: ExcecaoHorarioCreateManyInput | ExcecaoHorarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExcecaoHorario createManyAndReturn
   */
  export type ExcecaoHorarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * The data used to create many ExcecaoHorarios.
     */
    data: ExcecaoHorarioCreateManyInput | ExcecaoHorarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExcecaoHorario update
   */
  export type ExcecaoHorarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ExcecaoHorario.
     */
    data: XOR<ExcecaoHorarioUpdateInput, ExcecaoHorarioUncheckedUpdateInput>
    /**
     * Choose, which ExcecaoHorario to update.
     */
    where: ExcecaoHorarioWhereUniqueInput
  }

  /**
   * ExcecaoHorario updateMany
   */
  export type ExcecaoHorarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExcecaoHorarios.
     */
    data: XOR<ExcecaoHorarioUpdateManyMutationInput, ExcecaoHorarioUncheckedUpdateManyInput>
    /**
     * Filter which ExcecaoHorarios to update
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * Limit how many ExcecaoHorarios to update.
     */
    limit?: number
  }

  /**
   * ExcecaoHorario updateManyAndReturn
   */
  export type ExcecaoHorarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * The data used to update ExcecaoHorarios.
     */
    data: XOR<ExcecaoHorarioUpdateManyMutationInput, ExcecaoHorarioUncheckedUpdateManyInput>
    /**
     * Filter which ExcecaoHorarios to update
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * Limit how many ExcecaoHorarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExcecaoHorario upsert
   */
  export type ExcecaoHorarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ExcecaoHorario to update in case it exists.
     */
    where: ExcecaoHorarioWhereUniqueInput
    /**
     * In case the ExcecaoHorario found by the `where` argument doesn't exist, create a new ExcecaoHorario with this data.
     */
    create: XOR<ExcecaoHorarioCreateInput, ExcecaoHorarioUncheckedCreateInput>
    /**
     * In case the ExcecaoHorario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExcecaoHorarioUpdateInput, ExcecaoHorarioUncheckedUpdateInput>
  }

  /**
   * ExcecaoHorario delete
   */
  export type ExcecaoHorarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
    /**
     * Filter which ExcecaoHorario to delete.
     */
    where: ExcecaoHorarioWhereUniqueInput
  }

  /**
   * ExcecaoHorario deleteMany
   */
  export type ExcecaoHorarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExcecaoHorarios to delete
     */
    where?: ExcecaoHorarioWhereInput
    /**
     * Limit how many ExcecaoHorarios to delete.
     */
    limit?: number
  }

  /**
   * ExcecaoHorario without action
   */
  export type ExcecaoHorarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExcecaoHorario
     */
    select?: ExcecaoHorarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExcecaoHorario
     */
    omit?: ExcecaoHorarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExcecaoHorarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    telefone: 'telefone',
    googleId: 'googleId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const BarbeiroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    telefone: 'telefone',
    googleId: 'googleId',
    duracao_corte: 'duracao_corte',
    intervalo: 'intervalo'
  };

  export type BarbeiroScalarFieldEnum = (typeof BarbeiroScalarFieldEnum)[keyof typeof BarbeiroScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    cliente_id: 'cliente_id',
    barbeiro_id: 'barbeiro_id',
    data: 'data',
    horario: 'horario',
    status: 'status',
    criado_em: 'criado_em'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


  export const BloqueioScalarFieldEnum: {
    id: 'id',
    barbeiro_id: 'barbeiro_id',
    data: 'data',
    horario_inicio: 'horario_inicio',
    horario_fim: 'horario_fim',
    motivo: 'motivo',
    criado_em: 'criado_em'
  };

  export type BloqueioScalarFieldEnum = (typeof BloqueioScalarFieldEnum)[keyof typeof BloqueioScalarFieldEnum]


  export const HorarioTrabalhoScalarFieldEnum: {
    id: 'id',
    barbeiro_id: 'barbeiro_id',
    dia_semana: 'dia_semana',
    horario_inicio: 'horario_inicio',
    horario_fim: 'horario_fim',
    ativo: 'ativo'
  };

  export type HorarioTrabalhoScalarFieldEnum = (typeof HorarioTrabalhoScalarFieldEnum)[keyof typeof HorarioTrabalhoScalarFieldEnum]


  export const ExcecaoHorarioScalarFieldEnum: {
    id: 'id',
    barbeiro_id: 'barbeiro_id',
    data: 'data',
    horario_inicio: 'horario_inicio',
    horario_fim: 'horario_fim',
    ativo: 'ativo'
  };

  export type ExcecaoHorarioScalarFieldEnum = (typeof ExcecaoHorarioScalarFieldEnum)[keyof typeof ExcecaoHorarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DuracaoCorte'
   */
  export type EnumDuracaoCorteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DuracaoCorte'>
    


  /**
   * Reference to a field of type 'DuracaoCorte[]'
   */
  export type ListEnumDuracaoCorteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DuracaoCorte[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusAgendamento'
   */
  export type EnumStatusAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAgendamento'>
    


  /**
   * Reference to a field of type 'StatusAgendamento[]'
   */
  export type ListEnumStatusAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAgendamento[]'>
    


  /**
   * Reference to a field of type 'MotivoBloqueio'
   */
  export type EnumMotivoBloqueioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotivoBloqueio'>
    


  /**
   * Reference to a field of type 'MotivoBloqueio[]'
   */
  export type ListEnumMotivoBloqueioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotivoBloqueio[]'>
    


  /**
   * Reference to a field of type 'DiaSemana'
   */
  export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>
    


  /**
   * Reference to a field of type 'DiaSemana[]'
   */
  export type ListEnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: UuidFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    sobrenome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    googleId?: StringFilter<"Cliente"> | string
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    sobrenome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    agendamentos?: AgendamentoListRelationFilter
  }, "id" | "googleId">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    sobrenome?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    googleId?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type BarbeiroWhereInput = {
    AND?: BarbeiroWhereInput | BarbeiroWhereInput[]
    OR?: BarbeiroWhereInput[]
    NOT?: BarbeiroWhereInput | BarbeiroWhereInput[]
    id?: UuidFilter<"Barbeiro"> | string
    nome?: StringFilter<"Barbeiro"> | string
    sobrenome?: StringFilter<"Barbeiro"> | string
    telefone?: StringFilter<"Barbeiro"> | string
    googleId?: StringFilter<"Barbeiro"> | string
    duracao_corte?: EnumDuracaoCorteFilter<"Barbeiro"> | $Enums.DuracaoCorte
    intervalo?: IntFilter<"Barbeiro"> | number
    agendamentos?: AgendamentoListRelationFilter
    bloqueios?: BloqueioListRelationFilter
    horarios_trabalho?: HorarioTrabalhoListRelationFilter
    excecoes_horario?: ExcecaoHorarioListRelationFilter
  }

  export type BarbeiroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    duracao_corte?: SortOrder
    intervalo?: SortOrder
    agendamentos?: AgendamentoOrderByRelationAggregateInput
    bloqueios?: BloqueioOrderByRelationAggregateInput
    horarios_trabalho?: HorarioTrabalhoOrderByRelationAggregateInput
    excecoes_horario?: ExcecaoHorarioOrderByRelationAggregateInput
  }

  export type BarbeiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telefone?: string
    googleId?: string
    AND?: BarbeiroWhereInput | BarbeiroWhereInput[]
    OR?: BarbeiroWhereInput[]
    NOT?: BarbeiroWhereInput | BarbeiroWhereInput[]
    nome?: StringFilter<"Barbeiro"> | string
    sobrenome?: StringFilter<"Barbeiro"> | string
    duracao_corte?: EnumDuracaoCorteFilter<"Barbeiro"> | $Enums.DuracaoCorte
    intervalo?: IntFilter<"Barbeiro"> | number
    agendamentos?: AgendamentoListRelationFilter
    bloqueios?: BloqueioListRelationFilter
    horarios_trabalho?: HorarioTrabalhoListRelationFilter
    excecoes_horario?: ExcecaoHorarioListRelationFilter
  }, "id" | "telefone" | "googleId">

  export type BarbeiroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    duracao_corte?: SortOrder
    intervalo?: SortOrder
    _count?: BarbeiroCountOrderByAggregateInput
    _avg?: BarbeiroAvgOrderByAggregateInput
    _max?: BarbeiroMaxOrderByAggregateInput
    _min?: BarbeiroMinOrderByAggregateInput
    _sum?: BarbeiroSumOrderByAggregateInput
  }

  export type BarbeiroScalarWhereWithAggregatesInput = {
    AND?: BarbeiroScalarWhereWithAggregatesInput | BarbeiroScalarWhereWithAggregatesInput[]
    OR?: BarbeiroScalarWhereWithAggregatesInput[]
    NOT?: BarbeiroScalarWhereWithAggregatesInput | BarbeiroScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Barbeiro"> | string
    nome?: StringWithAggregatesFilter<"Barbeiro"> | string
    sobrenome?: StringWithAggregatesFilter<"Barbeiro"> | string
    telefone?: StringWithAggregatesFilter<"Barbeiro"> | string
    googleId?: StringWithAggregatesFilter<"Barbeiro"> | string
    duracao_corte?: EnumDuracaoCorteWithAggregatesFilter<"Barbeiro"> | $Enums.DuracaoCorte
    intervalo?: IntWithAggregatesFilter<"Barbeiro"> | number
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: UuidFilter<"Agendamento"> | string
    cliente_id?: UuidFilter<"Agendamento"> | string
    barbeiro_id?: UuidFilter<"Agendamento"> | string
    data?: DateTimeFilter<"Agendamento"> | Date | string
    horario?: DateTimeFilter<"Agendamento"> | Date | string
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    criado_em?: DateTimeFilter<"Agendamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    barbeiro?: BarbeiroOrderByWithRelationInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    cliente_id?: UuidFilter<"Agendamento"> | string
    barbeiro_id?: UuidFilter<"Agendamento"> | string
    data?: DateTimeFilter<"Agendamento"> | Date | string
    horario?: DateTimeFilter<"Agendamento"> | Date | string
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    criado_em?: DateTimeFilter<"Agendamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Agendamento"> | string
    cliente_id?: UuidWithAggregatesFilter<"Agendamento"> | string
    barbeiro_id?: UuidWithAggregatesFilter<"Agendamento"> | string
    data?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    horario?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    status?: EnumStatusAgendamentoWithAggregatesFilter<"Agendamento"> | $Enums.StatusAgendamento
    criado_em?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
  }

  export type BloqueioWhereInput = {
    AND?: BloqueioWhereInput | BloqueioWhereInput[]
    OR?: BloqueioWhereInput[]
    NOT?: BloqueioWhereInput | BloqueioWhereInput[]
    id?: UuidFilter<"Bloqueio"> | string
    barbeiro_id?: UuidFilter<"Bloqueio"> | string
    data?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_inicio?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_fim?: DateTimeFilter<"Bloqueio"> | Date | string
    motivo?: EnumMotivoBloqueioFilter<"Bloqueio"> | $Enums.MotivoBloqueio
    criado_em?: DateTimeFilter<"Bloqueio"> | Date | string
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }

  export type BloqueioOrderByWithRelationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    motivo?: SortOrder
    criado_em?: SortOrder
    barbeiro?: BarbeiroOrderByWithRelationInput
  }

  export type BloqueioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloqueioWhereInput | BloqueioWhereInput[]
    OR?: BloqueioWhereInput[]
    NOT?: BloqueioWhereInput | BloqueioWhereInput[]
    barbeiro_id?: UuidFilter<"Bloqueio"> | string
    data?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_inicio?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_fim?: DateTimeFilter<"Bloqueio"> | Date | string
    motivo?: EnumMotivoBloqueioFilter<"Bloqueio"> | $Enums.MotivoBloqueio
    criado_em?: DateTimeFilter<"Bloqueio"> | Date | string
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }, "id">

  export type BloqueioOrderByWithAggregationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    motivo?: SortOrder
    criado_em?: SortOrder
    _count?: BloqueioCountOrderByAggregateInput
    _max?: BloqueioMaxOrderByAggregateInput
    _min?: BloqueioMinOrderByAggregateInput
  }

  export type BloqueioScalarWhereWithAggregatesInput = {
    AND?: BloqueioScalarWhereWithAggregatesInput | BloqueioScalarWhereWithAggregatesInput[]
    OR?: BloqueioScalarWhereWithAggregatesInput[]
    NOT?: BloqueioScalarWhereWithAggregatesInput | BloqueioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Bloqueio"> | string
    barbeiro_id?: UuidWithAggregatesFilter<"Bloqueio"> | string
    data?: DateTimeWithAggregatesFilter<"Bloqueio"> | Date | string
    horario_inicio?: DateTimeWithAggregatesFilter<"Bloqueio"> | Date | string
    horario_fim?: DateTimeWithAggregatesFilter<"Bloqueio"> | Date | string
    motivo?: EnumMotivoBloqueioWithAggregatesFilter<"Bloqueio"> | $Enums.MotivoBloqueio
    criado_em?: DateTimeWithAggregatesFilter<"Bloqueio"> | Date | string
  }

  export type HorarioTrabalhoWhereInput = {
    AND?: HorarioTrabalhoWhereInput | HorarioTrabalhoWhereInput[]
    OR?: HorarioTrabalhoWhereInput[]
    NOT?: HorarioTrabalhoWhereInput | HorarioTrabalhoWhereInput[]
    id?: UuidFilter<"HorarioTrabalho"> | string
    barbeiro_id?: UuidFilter<"HorarioTrabalho"> | string
    dia_semana?: EnumDiaSemanaFilter<"HorarioTrabalho"> | $Enums.DiaSemana
    horario_inicio?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    horario_fim?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    ativo?: BoolFilter<"HorarioTrabalho"> | boolean
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }

  export type HorarioTrabalhoOrderByWithRelationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
    barbeiro?: BarbeiroOrderByWithRelationInput
  }

  export type HorarioTrabalhoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barbeiro_id_dia_semana?: HorarioTrabalhoBarbeiro_idDia_semanaCompoundUniqueInput
    AND?: HorarioTrabalhoWhereInput | HorarioTrabalhoWhereInput[]
    OR?: HorarioTrabalhoWhereInput[]
    NOT?: HorarioTrabalhoWhereInput | HorarioTrabalhoWhereInput[]
    barbeiro_id?: UuidFilter<"HorarioTrabalho"> | string
    dia_semana?: EnumDiaSemanaFilter<"HorarioTrabalho"> | $Enums.DiaSemana
    horario_inicio?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    horario_fim?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    ativo?: BoolFilter<"HorarioTrabalho"> | boolean
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }, "id" | "barbeiro_id_dia_semana">

  export type HorarioTrabalhoOrderByWithAggregationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
    _count?: HorarioTrabalhoCountOrderByAggregateInput
    _max?: HorarioTrabalhoMaxOrderByAggregateInput
    _min?: HorarioTrabalhoMinOrderByAggregateInput
  }

  export type HorarioTrabalhoScalarWhereWithAggregatesInput = {
    AND?: HorarioTrabalhoScalarWhereWithAggregatesInput | HorarioTrabalhoScalarWhereWithAggregatesInput[]
    OR?: HorarioTrabalhoScalarWhereWithAggregatesInput[]
    NOT?: HorarioTrabalhoScalarWhereWithAggregatesInput | HorarioTrabalhoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HorarioTrabalho"> | string
    barbeiro_id?: UuidWithAggregatesFilter<"HorarioTrabalho"> | string
    dia_semana?: EnumDiaSemanaWithAggregatesFilter<"HorarioTrabalho"> | $Enums.DiaSemana
    horario_inicio?: DateTimeWithAggregatesFilter<"HorarioTrabalho"> | Date | string
    horario_fim?: DateTimeWithAggregatesFilter<"HorarioTrabalho"> | Date | string
    ativo?: BoolWithAggregatesFilter<"HorarioTrabalho"> | boolean
  }

  export type ExcecaoHorarioWhereInput = {
    AND?: ExcecaoHorarioWhereInput | ExcecaoHorarioWhereInput[]
    OR?: ExcecaoHorarioWhereInput[]
    NOT?: ExcecaoHorarioWhereInput | ExcecaoHorarioWhereInput[]
    id?: UuidFilter<"ExcecaoHorario"> | string
    barbeiro_id?: UuidFilter<"ExcecaoHorario"> | string
    data?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_inicio?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_fim?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    ativo?: BoolFilter<"ExcecaoHorario"> | boolean
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }

  export type ExcecaoHorarioOrderByWithRelationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
    barbeiro?: BarbeiroOrderByWithRelationInput
  }

  export type ExcecaoHorarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barbeiro_id_data?: ExcecaoHorarioBarbeiro_idDataCompoundUniqueInput
    AND?: ExcecaoHorarioWhereInput | ExcecaoHorarioWhereInput[]
    OR?: ExcecaoHorarioWhereInput[]
    NOT?: ExcecaoHorarioWhereInput | ExcecaoHorarioWhereInput[]
    barbeiro_id?: UuidFilter<"ExcecaoHorario"> | string
    data?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_inicio?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_fim?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    ativo?: BoolFilter<"ExcecaoHorario"> | boolean
    barbeiro?: XOR<BarbeiroScalarRelationFilter, BarbeiroWhereInput>
  }, "id" | "barbeiro_id_data">

  export type ExcecaoHorarioOrderByWithAggregationInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
    _count?: ExcecaoHorarioCountOrderByAggregateInput
    _max?: ExcecaoHorarioMaxOrderByAggregateInput
    _min?: ExcecaoHorarioMinOrderByAggregateInput
  }

  export type ExcecaoHorarioScalarWhereWithAggregatesInput = {
    AND?: ExcecaoHorarioScalarWhereWithAggregatesInput | ExcecaoHorarioScalarWhereWithAggregatesInput[]
    OR?: ExcecaoHorarioScalarWhereWithAggregatesInput[]
    NOT?: ExcecaoHorarioScalarWhereWithAggregatesInput | ExcecaoHorarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExcecaoHorario"> | string
    barbeiro_id?: UuidWithAggregatesFilter<"ExcecaoHorario"> | string
    data?: DateTimeWithAggregatesFilter<"ExcecaoHorario"> | Date | string
    horario_inicio?: DateTimeWithAggregatesFilter<"ExcecaoHorario"> | Date | string
    horario_fim?: DateTimeWithAggregatesFilter<"ExcecaoHorario"> | Date | string
    ativo?: BoolWithAggregatesFilter<"ExcecaoHorario"> | boolean
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
  }

  export type BarbeiroCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioUncheckedCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoUncheckedCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioUncheckedCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUncheckedUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroCreateManyInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
  }

  export type BarbeiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
  }

  export type BarbeiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoCreateInput = {
    id?: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
    barbeiro: BarbeiroCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: string
    cliente_id: string
    barbeiro_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type AgendamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
    barbeiro?: BarbeiroUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyInput = {
    id?: string
    cliente_id: string
    barbeiro_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type AgendamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioCreateInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
    barbeiro: BarbeiroCreateNestedOneWithoutBloqueiosInput
  }

  export type BloqueioUncheckedCreateInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
  }

  export type BloqueioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    barbeiro?: BarbeiroUpdateOneRequiredWithoutBloqueiosNestedInput
  }

  export type BloqueioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioCreateManyInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
  }

  export type BloqueioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioTrabalhoCreateInput = {
    id?: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
    barbeiro: BarbeiroCreateNestedOneWithoutHorarios_trabalhoInput
  }

  export type HorarioTrabalhoUncheckedCreateInput = {
    id?: string
    barbeiro_id: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type HorarioTrabalhoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    barbeiro?: BarbeiroUpdateOneRequiredWithoutHorarios_trabalhoNestedInput
  }

  export type HorarioTrabalhoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioTrabalhoCreateManyInput = {
    id?: string
    barbeiro_id: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type HorarioTrabalhoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioTrabalhoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioCreateInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
    barbeiro: BarbeiroCreateNestedOneWithoutExcecoes_horarioInput
  }

  export type ExcecaoHorarioUncheckedCreateInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type ExcecaoHorarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    barbeiro?: BarbeiroUpdateOneRequiredWithoutExcecoes_horarioNestedInput
  }

  export type ExcecaoHorarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioCreateManyInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type ExcecaoHorarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumDuracaoCorteFilter<$PrismaModel = never> = {
    equals?: $Enums.DuracaoCorte | EnumDuracaoCorteFieldRefInput<$PrismaModel>
    in?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    not?: NestedEnumDuracaoCorteFilter<$PrismaModel> | $Enums.DuracaoCorte
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BloqueioListRelationFilter = {
    every?: BloqueioWhereInput
    some?: BloqueioWhereInput
    none?: BloqueioWhereInput
  }

  export type HorarioTrabalhoListRelationFilter = {
    every?: HorarioTrabalhoWhereInput
    some?: HorarioTrabalhoWhereInput
    none?: HorarioTrabalhoWhereInput
  }

  export type ExcecaoHorarioListRelationFilter = {
    every?: ExcecaoHorarioWhereInput
    some?: ExcecaoHorarioWhereInput
    none?: ExcecaoHorarioWhereInput
  }

  export type BloqueioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorarioTrabalhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExcecaoHorarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarbeiroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    duracao_corte?: SortOrder
    intervalo?: SortOrder
  }

  export type BarbeiroAvgOrderByAggregateInput = {
    intervalo?: SortOrder
  }

  export type BarbeiroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    duracao_corte?: SortOrder
    intervalo?: SortOrder
  }

  export type BarbeiroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    telefone?: SortOrder
    googleId?: SortOrder
    duracao_corte?: SortOrder
    intervalo?: SortOrder
  }

  export type BarbeiroSumOrderByAggregateInput = {
    intervalo?: SortOrder
  }

  export type EnumDuracaoCorteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DuracaoCorte | EnumDuracaoCorteFieldRefInput<$PrismaModel>
    in?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    not?: NestedEnumDuracaoCorteWithAggregatesFilter<$PrismaModel> | $Enums.DuracaoCorte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDuracaoCorteFilter<$PrismaModel>
    _max?: NestedEnumDuracaoCorteFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoFilter<$PrismaModel> | $Enums.StatusAgendamento
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type BarbeiroScalarRelationFilter = {
    is?: BarbeiroWhereInput
    isNot?: BarbeiroWhereInput
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
  }

  export type EnumMotivoBloqueioFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoBloqueio | EnumMotivoBloqueioFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    not?: NestedEnumMotivoBloqueioFilter<$PrismaModel> | $Enums.MotivoBloqueio
  }

  export type BloqueioCountOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    motivo?: SortOrder
    criado_em?: SortOrder
  }

  export type BloqueioMaxOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    motivo?: SortOrder
    criado_em?: SortOrder
  }

  export type BloqueioMinOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    motivo?: SortOrder
    criado_em?: SortOrder
  }

  export type EnumMotivoBloqueioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoBloqueio | EnumMotivoBloqueioFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    not?: NestedEnumMotivoBloqueioWithAggregatesFilter<$PrismaModel> | $Enums.MotivoBloqueio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotivoBloqueioFilter<$PrismaModel>
    _max?: NestedEnumMotivoBloqueioFilter<$PrismaModel>
  }

  export type EnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HorarioTrabalhoBarbeiro_idDia_semanaCompoundUniqueInput = {
    barbeiro_id: string
    dia_semana: $Enums.DiaSemana
  }

  export type HorarioTrabalhoCountOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type HorarioTrabalhoMaxOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type HorarioTrabalhoMinOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    dia_semana?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type EnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExcecaoHorarioBarbeiro_idDataCompoundUniqueInput = {
    barbeiro_id: string
    data: Date | string
  }

  export type ExcecaoHorarioCountOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type ExcecaoHorarioMaxOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type ExcecaoHorarioMinOrderByAggregateInput = {
    id?: SortOrder
    barbeiro_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    horario_fim?: SortOrder
    ativo?: SortOrder
  }

  export type AgendamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AgendamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AgendamentoCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput> | AgendamentoCreateWithoutBarbeiroInput[] | AgendamentoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutBarbeiroInput | AgendamentoCreateOrConnectWithoutBarbeiroInput[]
    createMany?: AgendamentoCreateManyBarbeiroInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type BloqueioCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput> | BloqueioCreateWithoutBarbeiroInput[] | BloqueioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: BloqueioCreateOrConnectWithoutBarbeiroInput | BloqueioCreateOrConnectWithoutBarbeiroInput[]
    createMany?: BloqueioCreateManyBarbeiroInputEnvelope
    connect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
  }

  export type HorarioTrabalhoCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput> | HorarioTrabalhoCreateWithoutBarbeiroInput[] | HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput | HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput[]
    createMany?: HorarioTrabalhoCreateManyBarbeiroInputEnvelope
    connect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
  }

  export type ExcecaoHorarioCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput> | ExcecaoHorarioCreateWithoutBarbeiroInput[] | ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput | ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput[]
    createMany?: ExcecaoHorarioCreateManyBarbeiroInputEnvelope
    connect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput> | AgendamentoCreateWithoutBarbeiroInput[] | AgendamentoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutBarbeiroInput | AgendamentoCreateOrConnectWithoutBarbeiroInput[]
    createMany?: AgendamentoCreateManyBarbeiroInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type BloqueioUncheckedCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput> | BloqueioCreateWithoutBarbeiroInput[] | BloqueioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: BloqueioCreateOrConnectWithoutBarbeiroInput | BloqueioCreateOrConnectWithoutBarbeiroInput[]
    createMany?: BloqueioCreateManyBarbeiroInputEnvelope
    connect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
  }

  export type HorarioTrabalhoUncheckedCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput> | HorarioTrabalhoCreateWithoutBarbeiroInput[] | HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput | HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput[]
    createMany?: HorarioTrabalhoCreateManyBarbeiroInputEnvelope
    connect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
  }

  export type ExcecaoHorarioUncheckedCreateNestedManyWithoutBarbeiroInput = {
    create?: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput> | ExcecaoHorarioCreateWithoutBarbeiroInput[] | ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput | ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput[]
    createMany?: ExcecaoHorarioCreateManyBarbeiroInputEnvelope
    connect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
  }

  export type EnumDuracaoCorteFieldUpdateOperationsInput = {
    set?: $Enums.DuracaoCorte
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendamentoUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput> | AgendamentoCreateWithoutBarbeiroInput[] | AgendamentoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutBarbeiroInput | AgendamentoCreateOrConnectWithoutBarbeiroInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutBarbeiroInput | AgendamentoUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: AgendamentoCreateManyBarbeiroInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutBarbeiroInput | AgendamentoUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutBarbeiroInput | AgendamentoUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type BloqueioUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput> | BloqueioCreateWithoutBarbeiroInput[] | BloqueioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: BloqueioCreateOrConnectWithoutBarbeiroInput | BloqueioCreateOrConnectWithoutBarbeiroInput[]
    upsert?: BloqueioUpsertWithWhereUniqueWithoutBarbeiroInput | BloqueioUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: BloqueioCreateManyBarbeiroInputEnvelope
    set?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    disconnect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    delete?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    connect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    update?: BloqueioUpdateWithWhereUniqueWithoutBarbeiroInput | BloqueioUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: BloqueioUpdateManyWithWhereWithoutBarbeiroInput | BloqueioUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: BloqueioScalarWhereInput | BloqueioScalarWhereInput[]
  }

  export type HorarioTrabalhoUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput> | HorarioTrabalhoCreateWithoutBarbeiroInput[] | HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput | HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput[]
    upsert?: HorarioTrabalhoUpsertWithWhereUniqueWithoutBarbeiroInput | HorarioTrabalhoUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: HorarioTrabalhoCreateManyBarbeiroInputEnvelope
    set?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    disconnect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    delete?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    connect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    update?: HorarioTrabalhoUpdateWithWhereUniqueWithoutBarbeiroInput | HorarioTrabalhoUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: HorarioTrabalhoUpdateManyWithWhereWithoutBarbeiroInput | HorarioTrabalhoUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: HorarioTrabalhoScalarWhereInput | HorarioTrabalhoScalarWhereInput[]
  }

  export type ExcecaoHorarioUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput> | ExcecaoHorarioCreateWithoutBarbeiroInput[] | ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput | ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput[]
    upsert?: ExcecaoHorarioUpsertWithWhereUniqueWithoutBarbeiroInput | ExcecaoHorarioUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: ExcecaoHorarioCreateManyBarbeiroInputEnvelope
    set?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    disconnect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    delete?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    connect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    update?: ExcecaoHorarioUpdateWithWhereUniqueWithoutBarbeiroInput | ExcecaoHorarioUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: ExcecaoHorarioUpdateManyWithWhereWithoutBarbeiroInput | ExcecaoHorarioUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: ExcecaoHorarioScalarWhereInput | ExcecaoHorarioScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput> | AgendamentoCreateWithoutBarbeiroInput[] | AgendamentoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutBarbeiroInput | AgendamentoCreateOrConnectWithoutBarbeiroInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutBarbeiroInput | AgendamentoUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: AgendamentoCreateManyBarbeiroInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutBarbeiroInput | AgendamentoUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutBarbeiroInput | AgendamentoUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type BloqueioUncheckedUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput> | BloqueioCreateWithoutBarbeiroInput[] | BloqueioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: BloqueioCreateOrConnectWithoutBarbeiroInput | BloqueioCreateOrConnectWithoutBarbeiroInput[]
    upsert?: BloqueioUpsertWithWhereUniqueWithoutBarbeiroInput | BloqueioUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: BloqueioCreateManyBarbeiroInputEnvelope
    set?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    disconnect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    delete?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    connect?: BloqueioWhereUniqueInput | BloqueioWhereUniqueInput[]
    update?: BloqueioUpdateWithWhereUniqueWithoutBarbeiroInput | BloqueioUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: BloqueioUpdateManyWithWhereWithoutBarbeiroInput | BloqueioUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: BloqueioScalarWhereInput | BloqueioScalarWhereInput[]
  }

  export type HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput> | HorarioTrabalhoCreateWithoutBarbeiroInput[] | HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput | HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput[]
    upsert?: HorarioTrabalhoUpsertWithWhereUniqueWithoutBarbeiroInput | HorarioTrabalhoUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: HorarioTrabalhoCreateManyBarbeiroInputEnvelope
    set?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    disconnect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    delete?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    connect?: HorarioTrabalhoWhereUniqueInput | HorarioTrabalhoWhereUniqueInput[]
    update?: HorarioTrabalhoUpdateWithWhereUniqueWithoutBarbeiroInput | HorarioTrabalhoUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: HorarioTrabalhoUpdateManyWithWhereWithoutBarbeiroInput | HorarioTrabalhoUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: HorarioTrabalhoScalarWhereInput | HorarioTrabalhoScalarWhereInput[]
  }

  export type ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroNestedInput = {
    create?: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput> | ExcecaoHorarioCreateWithoutBarbeiroInput[] | ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput[]
    connectOrCreate?: ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput | ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput[]
    upsert?: ExcecaoHorarioUpsertWithWhereUniqueWithoutBarbeiroInput | ExcecaoHorarioUpsertWithWhereUniqueWithoutBarbeiroInput[]
    createMany?: ExcecaoHorarioCreateManyBarbeiroInputEnvelope
    set?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    disconnect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    delete?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    connect?: ExcecaoHorarioWhereUniqueInput | ExcecaoHorarioWhereUniqueInput[]
    update?: ExcecaoHorarioUpdateWithWhereUniqueWithoutBarbeiroInput | ExcecaoHorarioUpdateWithWhereUniqueWithoutBarbeiroInput[]
    updateMany?: ExcecaoHorarioUpdateManyWithWhereWithoutBarbeiroInput | ExcecaoHorarioUpdateManyWithWhereWithoutBarbeiroInput[]
    deleteMany?: ExcecaoHorarioScalarWhereInput | ExcecaoHorarioScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type BarbeiroCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<BarbeiroCreateWithoutAgendamentosInput, BarbeiroUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutAgendamentosInput
    connect?: BarbeiroWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusAgendamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusAgendamento
  }

  export type ClienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    upsert?: ClienteUpsertWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAgendamentosInput, ClienteUpdateWithoutAgendamentosInput>, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type BarbeiroUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<BarbeiroCreateWithoutAgendamentosInput, BarbeiroUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutAgendamentosInput
    upsert?: BarbeiroUpsertWithoutAgendamentosInput
    connect?: BarbeiroWhereUniqueInput
    update?: XOR<XOR<BarbeiroUpdateToOneWithWhereWithoutAgendamentosInput, BarbeiroUpdateWithoutAgendamentosInput>, BarbeiroUncheckedUpdateWithoutAgendamentosInput>
  }

  export type BarbeiroCreateNestedOneWithoutBloqueiosInput = {
    create?: XOR<BarbeiroCreateWithoutBloqueiosInput, BarbeiroUncheckedCreateWithoutBloqueiosInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutBloqueiosInput
    connect?: BarbeiroWhereUniqueInput
  }

  export type EnumMotivoBloqueioFieldUpdateOperationsInput = {
    set?: $Enums.MotivoBloqueio
  }

  export type BarbeiroUpdateOneRequiredWithoutBloqueiosNestedInput = {
    create?: XOR<BarbeiroCreateWithoutBloqueiosInput, BarbeiroUncheckedCreateWithoutBloqueiosInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutBloqueiosInput
    upsert?: BarbeiroUpsertWithoutBloqueiosInput
    connect?: BarbeiroWhereUniqueInput
    update?: XOR<XOR<BarbeiroUpdateToOneWithWhereWithoutBloqueiosInput, BarbeiroUpdateWithoutBloqueiosInput>, BarbeiroUncheckedUpdateWithoutBloqueiosInput>
  }

  export type BarbeiroCreateNestedOneWithoutHorarios_trabalhoInput = {
    create?: XOR<BarbeiroCreateWithoutHorarios_trabalhoInput, BarbeiroUncheckedCreateWithoutHorarios_trabalhoInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutHorarios_trabalhoInput
    connect?: BarbeiroWhereUniqueInput
  }

  export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BarbeiroUpdateOneRequiredWithoutHorarios_trabalhoNestedInput = {
    create?: XOR<BarbeiroCreateWithoutHorarios_trabalhoInput, BarbeiroUncheckedCreateWithoutHorarios_trabalhoInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutHorarios_trabalhoInput
    upsert?: BarbeiroUpsertWithoutHorarios_trabalhoInput
    connect?: BarbeiroWhereUniqueInput
    update?: XOR<XOR<BarbeiroUpdateToOneWithWhereWithoutHorarios_trabalhoInput, BarbeiroUpdateWithoutHorarios_trabalhoInput>, BarbeiroUncheckedUpdateWithoutHorarios_trabalhoInput>
  }

  export type BarbeiroCreateNestedOneWithoutExcecoes_horarioInput = {
    create?: XOR<BarbeiroCreateWithoutExcecoes_horarioInput, BarbeiroUncheckedCreateWithoutExcecoes_horarioInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutExcecoes_horarioInput
    connect?: BarbeiroWhereUniqueInput
  }

  export type BarbeiroUpdateOneRequiredWithoutExcecoes_horarioNestedInput = {
    create?: XOR<BarbeiroCreateWithoutExcecoes_horarioInput, BarbeiroUncheckedCreateWithoutExcecoes_horarioInput>
    connectOrCreate?: BarbeiroCreateOrConnectWithoutExcecoes_horarioInput
    upsert?: BarbeiroUpsertWithoutExcecoes_horarioInput
    connect?: BarbeiroWhereUniqueInput
    update?: XOR<XOR<BarbeiroUpdateToOneWithWhereWithoutExcecoes_horarioInput, BarbeiroUpdateWithoutExcecoes_horarioInput>, BarbeiroUncheckedUpdateWithoutExcecoes_horarioInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumDuracaoCorteFilter<$PrismaModel = never> = {
    equals?: $Enums.DuracaoCorte | EnumDuracaoCorteFieldRefInput<$PrismaModel>
    in?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    not?: NestedEnumDuracaoCorteFilter<$PrismaModel> | $Enums.DuracaoCorte
  }

  export type NestedEnumDuracaoCorteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DuracaoCorte | EnumDuracaoCorteFieldRefInput<$PrismaModel>
    in?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    notIn?: $Enums.DuracaoCorte[] | ListEnumDuracaoCorteFieldRefInput<$PrismaModel>
    not?: NestedEnumDuracaoCorteWithAggregatesFilter<$PrismaModel> | $Enums.DuracaoCorte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDuracaoCorteFilter<$PrismaModel>
    _max?: NestedEnumDuracaoCorteFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoFilter<$PrismaModel> | $Enums.StatusAgendamento
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
  }

  export type NestedEnumMotivoBloqueioFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoBloqueio | EnumMotivoBloqueioFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    not?: NestedEnumMotivoBloqueioFilter<$PrismaModel> | $Enums.MotivoBloqueio
  }

  export type NestedEnumMotivoBloqueioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotivoBloqueio | EnumMotivoBloqueioFieldRefInput<$PrismaModel>
    in?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotivoBloqueio[] | ListEnumMotivoBloqueioFieldRefInput<$PrismaModel>
    not?: NestedEnumMotivoBloqueioWithAggregatesFilter<$PrismaModel> | $Enums.MotivoBloqueio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotivoBloqueioFilter<$PrismaModel>
    _max?: NestedEnumMotivoBloqueioFilter<$PrismaModel>
  }

  export type NestedEnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgendamentoCreateWithoutClienteInput = {
    id?: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
    barbeiro: BarbeiroCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutClienteInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoCreateManyClienteInputEnvelope = {
    data: AgendamentoCreateManyClienteInput | AgendamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutClienteInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id?: UuidFilter<"Agendamento"> | string
    cliente_id?: UuidFilter<"Agendamento"> | string
    barbeiro_id?: UuidFilter<"Agendamento"> | string
    data?: DateTimeFilter<"Agendamento"> | Date | string
    horario?: DateTimeFilter<"Agendamento"> | Date | string
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    criado_em?: DateTimeFilter<"Agendamento"> | Date | string
  }

  export type AgendamentoCreateWithoutBarbeiroInput = {
    id?: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutBarbeiroInput = {
    id?: string
    cliente_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutBarbeiroInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput>
  }

  export type AgendamentoCreateManyBarbeiroInputEnvelope = {
    data: AgendamentoCreateManyBarbeiroInput | AgendamentoCreateManyBarbeiroInput[]
    skipDuplicates?: boolean
  }

  export type BloqueioCreateWithoutBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
  }

  export type BloqueioUncheckedCreateWithoutBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
  }

  export type BloqueioCreateOrConnectWithoutBarbeiroInput = {
    where: BloqueioWhereUniqueInput
    create: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput>
  }

  export type BloqueioCreateManyBarbeiroInputEnvelope = {
    data: BloqueioCreateManyBarbeiroInput | BloqueioCreateManyBarbeiroInput[]
    skipDuplicates?: boolean
  }

  export type HorarioTrabalhoCreateWithoutBarbeiroInput = {
    id?: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput = {
    id?: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type HorarioTrabalhoCreateOrConnectWithoutBarbeiroInput = {
    where: HorarioTrabalhoWhereUniqueInput
    create: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput>
  }

  export type HorarioTrabalhoCreateManyBarbeiroInputEnvelope = {
    data: HorarioTrabalhoCreateManyBarbeiroInput | HorarioTrabalhoCreateManyBarbeiroInput[]
    skipDuplicates?: boolean
  }

  export type ExcecaoHorarioCreateWithoutBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type ExcecaoHorarioCreateOrConnectWithoutBarbeiroInput = {
    where: ExcecaoHorarioWhereUniqueInput
    create: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput>
  }

  export type ExcecaoHorarioCreateManyBarbeiroInputEnvelope = {
    data: ExcecaoHorarioCreateManyBarbeiroInput | ExcecaoHorarioCreateManyBarbeiroInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutBarbeiroInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutBarbeiroInput, AgendamentoUncheckedUpdateWithoutBarbeiroInput>
    create: XOR<AgendamentoCreateWithoutBarbeiroInput, AgendamentoUncheckedCreateWithoutBarbeiroInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutBarbeiroInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutBarbeiroInput, AgendamentoUncheckedUpdateWithoutBarbeiroInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutBarbeiroInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutBarbeiroInput>
  }

  export type BloqueioUpsertWithWhereUniqueWithoutBarbeiroInput = {
    where: BloqueioWhereUniqueInput
    update: XOR<BloqueioUpdateWithoutBarbeiroInput, BloqueioUncheckedUpdateWithoutBarbeiroInput>
    create: XOR<BloqueioCreateWithoutBarbeiroInput, BloqueioUncheckedCreateWithoutBarbeiroInput>
  }

  export type BloqueioUpdateWithWhereUniqueWithoutBarbeiroInput = {
    where: BloqueioWhereUniqueInput
    data: XOR<BloqueioUpdateWithoutBarbeiroInput, BloqueioUncheckedUpdateWithoutBarbeiroInput>
  }

  export type BloqueioUpdateManyWithWhereWithoutBarbeiroInput = {
    where: BloqueioScalarWhereInput
    data: XOR<BloqueioUpdateManyMutationInput, BloqueioUncheckedUpdateManyWithoutBarbeiroInput>
  }

  export type BloqueioScalarWhereInput = {
    AND?: BloqueioScalarWhereInput | BloqueioScalarWhereInput[]
    OR?: BloqueioScalarWhereInput[]
    NOT?: BloqueioScalarWhereInput | BloqueioScalarWhereInput[]
    id?: UuidFilter<"Bloqueio"> | string
    barbeiro_id?: UuidFilter<"Bloqueio"> | string
    data?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_inicio?: DateTimeFilter<"Bloqueio"> | Date | string
    horario_fim?: DateTimeFilter<"Bloqueio"> | Date | string
    motivo?: EnumMotivoBloqueioFilter<"Bloqueio"> | $Enums.MotivoBloqueio
    criado_em?: DateTimeFilter<"Bloqueio"> | Date | string
  }

  export type HorarioTrabalhoUpsertWithWhereUniqueWithoutBarbeiroInput = {
    where: HorarioTrabalhoWhereUniqueInput
    update: XOR<HorarioTrabalhoUpdateWithoutBarbeiroInput, HorarioTrabalhoUncheckedUpdateWithoutBarbeiroInput>
    create: XOR<HorarioTrabalhoCreateWithoutBarbeiroInput, HorarioTrabalhoUncheckedCreateWithoutBarbeiroInput>
  }

  export type HorarioTrabalhoUpdateWithWhereUniqueWithoutBarbeiroInput = {
    where: HorarioTrabalhoWhereUniqueInput
    data: XOR<HorarioTrabalhoUpdateWithoutBarbeiroInput, HorarioTrabalhoUncheckedUpdateWithoutBarbeiroInput>
  }

  export type HorarioTrabalhoUpdateManyWithWhereWithoutBarbeiroInput = {
    where: HorarioTrabalhoScalarWhereInput
    data: XOR<HorarioTrabalhoUpdateManyMutationInput, HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroInput>
  }

  export type HorarioTrabalhoScalarWhereInput = {
    AND?: HorarioTrabalhoScalarWhereInput | HorarioTrabalhoScalarWhereInput[]
    OR?: HorarioTrabalhoScalarWhereInput[]
    NOT?: HorarioTrabalhoScalarWhereInput | HorarioTrabalhoScalarWhereInput[]
    id?: UuidFilter<"HorarioTrabalho"> | string
    barbeiro_id?: UuidFilter<"HorarioTrabalho"> | string
    dia_semana?: EnumDiaSemanaFilter<"HorarioTrabalho"> | $Enums.DiaSemana
    horario_inicio?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    horario_fim?: DateTimeFilter<"HorarioTrabalho"> | Date | string
    ativo?: BoolFilter<"HorarioTrabalho"> | boolean
  }

  export type ExcecaoHorarioUpsertWithWhereUniqueWithoutBarbeiroInput = {
    where: ExcecaoHorarioWhereUniqueInput
    update: XOR<ExcecaoHorarioUpdateWithoutBarbeiroInput, ExcecaoHorarioUncheckedUpdateWithoutBarbeiroInput>
    create: XOR<ExcecaoHorarioCreateWithoutBarbeiroInput, ExcecaoHorarioUncheckedCreateWithoutBarbeiroInput>
  }

  export type ExcecaoHorarioUpdateWithWhereUniqueWithoutBarbeiroInput = {
    where: ExcecaoHorarioWhereUniqueInput
    data: XOR<ExcecaoHorarioUpdateWithoutBarbeiroInput, ExcecaoHorarioUncheckedUpdateWithoutBarbeiroInput>
  }

  export type ExcecaoHorarioUpdateManyWithWhereWithoutBarbeiroInput = {
    where: ExcecaoHorarioScalarWhereInput
    data: XOR<ExcecaoHorarioUpdateManyMutationInput, ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroInput>
  }

  export type ExcecaoHorarioScalarWhereInput = {
    AND?: ExcecaoHorarioScalarWhereInput | ExcecaoHorarioScalarWhereInput[]
    OR?: ExcecaoHorarioScalarWhereInput[]
    NOT?: ExcecaoHorarioScalarWhereInput | ExcecaoHorarioScalarWhereInput[]
    id?: UuidFilter<"ExcecaoHorario"> | string
    barbeiro_id?: UuidFilter<"ExcecaoHorario"> | string
    data?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_inicio?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    horario_fim?: DateTimeFilter<"ExcecaoHorario"> | Date | string
    ativo?: BoolFilter<"ExcecaoHorario"> | boolean
  }

  export type ClienteCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
  }

  export type ClienteUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
  }

  export type ClienteCreateOrConnectWithoutAgendamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type BarbeiroCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    bloqueios?: BloqueioCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    bloqueios?: BloqueioUncheckedCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoUncheckedCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioUncheckedCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroCreateOrConnectWithoutAgendamentosInput = {
    where: BarbeiroWhereUniqueInput
    create: XOR<BarbeiroCreateWithoutAgendamentosInput, BarbeiroUncheckedCreateWithoutAgendamentosInput>
  }

  export type ClienteUpsertWithoutAgendamentosInput = {
    update: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ClienteUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
  }

  export type BarbeiroUpsertWithoutAgendamentosInput = {
    update: XOR<BarbeiroUpdateWithoutAgendamentosInput, BarbeiroUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<BarbeiroCreateWithoutAgendamentosInput, BarbeiroUncheckedCreateWithoutAgendamentosInput>
    where?: BarbeiroWhereInput
  }

  export type BarbeiroUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: BarbeiroWhereInput
    data: XOR<BarbeiroUpdateWithoutAgendamentosInput, BarbeiroUncheckedUpdateWithoutAgendamentosInput>
  }

  export type BarbeiroUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    bloqueios?: BloqueioUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    bloqueios?: BloqueioUncheckedUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroCreateWithoutBloqueiosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUncheckedCreateWithoutBloqueiosInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoUncheckedCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioUncheckedCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroCreateOrConnectWithoutBloqueiosInput = {
    where: BarbeiroWhereUniqueInput
    create: XOR<BarbeiroCreateWithoutBloqueiosInput, BarbeiroUncheckedCreateWithoutBloqueiosInput>
  }

  export type BarbeiroUpsertWithoutBloqueiosInput = {
    update: XOR<BarbeiroUpdateWithoutBloqueiosInput, BarbeiroUncheckedUpdateWithoutBloqueiosInput>
    create: XOR<BarbeiroCreateWithoutBloqueiosInput, BarbeiroUncheckedCreateWithoutBloqueiosInput>
    where?: BarbeiroWhereInput
  }

  export type BarbeiroUpdateToOneWithWhereWithoutBloqueiosInput = {
    where?: BarbeiroWhereInput
    data: XOR<BarbeiroUpdateWithoutBloqueiosInput, BarbeiroUncheckedUpdateWithoutBloqueiosInput>
  }

  export type BarbeiroUpdateWithoutBloqueiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroUncheckedUpdateWithoutBloqueiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroCreateWithoutHorarios_trabalhoInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUncheckedCreateWithoutHorarios_trabalhoInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioUncheckedCreateNestedManyWithoutBarbeiroInput
    excecoes_horario?: ExcecaoHorarioUncheckedCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroCreateOrConnectWithoutHorarios_trabalhoInput = {
    where: BarbeiroWhereUniqueInput
    create: XOR<BarbeiroCreateWithoutHorarios_trabalhoInput, BarbeiroUncheckedCreateWithoutHorarios_trabalhoInput>
  }

  export type BarbeiroUpsertWithoutHorarios_trabalhoInput = {
    update: XOR<BarbeiroUpdateWithoutHorarios_trabalhoInput, BarbeiroUncheckedUpdateWithoutHorarios_trabalhoInput>
    create: XOR<BarbeiroCreateWithoutHorarios_trabalhoInput, BarbeiroUncheckedCreateWithoutHorarios_trabalhoInput>
    where?: BarbeiroWhereInput
  }

  export type BarbeiroUpdateToOneWithWhereWithoutHorarios_trabalhoInput = {
    where?: BarbeiroWhereInput
    data: XOR<BarbeiroUpdateWithoutHorarios_trabalhoInput, BarbeiroUncheckedUpdateWithoutHorarios_trabalhoInput>
  }

  export type BarbeiroUpdateWithoutHorarios_trabalhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroUncheckedUpdateWithoutHorarios_trabalhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUncheckedUpdateManyWithoutBarbeiroNestedInput
    excecoes_horario?: ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroCreateWithoutExcecoes_horarioInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroUncheckedCreateWithoutExcecoes_horarioInput = {
    id?: string
    nome: string
    sobrenome: string
    telefone: string
    googleId: string
    duracao_corte: $Enums.DuracaoCorte
    intervalo: number
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutBarbeiroInput
    bloqueios?: BloqueioUncheckedCreateNestedManyWithoutBarbeiroInput
    horarios_trabalho?: HorarioTrabalhoUncheckedCreateNestedManyWithoutBarbeiroInput
  }

  export type BarbeiroCreateOrConnectWithoutExcecoes_horarioInput = {
    where: BarbeiroWhereUniqueInput
    create: XOR<BarbeiroCreateWithoutExcecoes_horarioInput, BarbeiroUncheckedCreateWithoutExcecoes_horarioInput>
  }

  export type BarbeiroUpsertWithoutExcecoes_horarioInput = {
    update: XOR<BarbeiroUpdateWithoutExcecoes_horarioInput, BarbeiroUncheckedUpdateWithoutExcecoes_horarioInput>
    create: XOR<BarbeiroCreateWithoutExcecoes_horarioInput, BarbeiroUncheckedCreateWithoutExcecoes_horarioInput>
    where?: BarbeiroWhereInput
  }

  export type BarbeiroUpdateToOneWithWhereWithoutExcecoes_horarioInput = {
    where?: BarbeiroWhereInput
    data: XOR<BarbeiroUpdateWithoutExcecoes_horarioInput, BarbeiroUncheckedUpdateWithoutExcecoes_horarioInput>
  }

  export type BarbeiroUpdateWithoutExcecoes_horarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUpdateManyWithoutBarbeiroNestedInput
  }

  export type BarbeiroUncheckedUpdateWithoutExcecoes_horarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    duracao_corte?: EnumDuracaoCorteFieldUpdateOperationsInput | $Enums.DuracaoCorte
    intervalo?: IntFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutBarbeiroNestedInput
    bloqueios?: BloqueioUncheckedUpdateManyWithoutBarbeiroNestedInput
    horarios_trabalho?: HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroNestedInput
  }

  export type AgendamentoCreateManyClienteInput = {
    id?: string
    barbeiro_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type AgendamentoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    barbeiro?: BarbeiroUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    barbeiro_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateManyBarbeiroInput = {
    id?: string
    cliente_id: string
    data: Date | string
    horario: Date | string
    status: $Enums.StatusAgendamento
    criado_em?: Date | string
  }

  export type BloqueioCreateManyBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    motivo: $Enums.MotivoBloqueio
    criado_em?: Date | string
  }

  export type HorarioTrabalhoCreateManyBarbeiroInput = {
    id?: string
    dia_semana: $Enums.DiaSemana
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type ExcecaoHorarioCreateManyBarbeiroInput = {
    id?: string
    data: Date | string
    horario_inicio: Date | string
    horario_fim: Date | string
    ativo: boolean
  }

  export type AgendamentoUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioUncheckedUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloqueioUncheckedUpdateManyWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: EnumMotivoBloqueioFieldUpdateOperationsInput | $Enums.MotivoBloqueio
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioTrabalhoUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioTrabalhoUncheckedUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioTrabalhoUncheckedUpdateManyWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia_semana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioUncheckedUpdateWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExcecaoHorarioUncheckedUpdateManyWithoutBarbeiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}