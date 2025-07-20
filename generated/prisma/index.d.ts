
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Noticia
 * 
 */
export type Noticia = $Result.DefaultSelection<Prisma.$NoticiaPayload>
/**
 * Model FotoGremista
 * 
 */
export type FotoGremista = $Result.DefaultSelection<Prisma.$FotoGremistaPayload>
/**
 * Model BiografiaGremista
 * 
 */
export type BiografiaGremista = $Result.DefaultSelection<Prisma.$BiografiaGremistaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Template: {
  SIMPLES: 'SIMPLES',
  IMAGEM_DESTAQUE: 'IMAGEM_DESTAQUE',
  VIDEO: 'VIDEO'
};

export type Template = (typeof Template)[keyof typeof Template]

}

export type Template = $Enums.Template

export const Template: typeof $Enums.Template

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Noticias
 * const noticias = await prisma.noticia.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Noticias
   * const noticias = await prisma.noticia.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.noticia`: Exposes CRUD operations for the **Noticia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticia.findMany()
    * ```
    */
  get noticia(): Prisma.NoticiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoGremista`: Exposes CRUD operations for the **FotoGremista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoGremistas
    * const fotoGremistas = await prisma.fotoGremista.findMany()
    * ```
    */
  get fotoGremista(): Prisma.FotoGremistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biografiaGremista`: Exposes CRUD operations for the **BiografiaGremista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiografiaGremistas
    * const biografiaGremistas = await prisma.biografiaGremista.findMany()
    * ```
    */
  get biografiaGremista(): Prisma.BiografiaGremistaDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Noticia: 'Noticia',
    FotoGremista: 'FotoGremista',
    BiografiaGremista: 'BiografiaGremista'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "noticia" | "fotoGremista" | "biografiaGremista"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Noticia: {
        payload: Prisma.$NoticiaPayload<ExtArgs>
        fields: Prisma.NoticiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findFirst: {
            args: Prisma.NoticiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findMany: {
            args: Prisma.NoticiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          create: {
            args: Prisma.NoticiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          createMany: {
            args: Prisma.NoticiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          delete: {
            args: Prisma.NoticiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          update: {
            args: Prisma.NoticiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          deleteMany: {
            args: Prisma.NoticiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          upsert: {
            args: Prisma.NoticiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          aggregate: {
            args: Prisma.NoticiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticia>
          }
          groupBy: {
            args: Prisma.NoticiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiaCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiaCountAggregateOutputType> | number
          }
        }
      }
      FotoGremista: {
        payload: Prisma.$FotoGremistaPayload<ExtArgs>
        fields: Prisma.FotoGremistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoGremistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoGremistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          findFirst: {
            args: Prisma.FotoGremistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoGremistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          findMany: {
            args: Prisma.FotoGremistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>[]
          }
          create: {
            args: Prisma.FotoGremistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          createMany: {
            args: Prisma.FotoGremistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoGremistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>[]
          }
          delete: {
            args: Prisma.FotoGremistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          update: {
            args: Prisma.FotoGremistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          deleteMany: {
            args: Prisma.FotoGremistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoGremistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoGremistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>[]
          }
          upsert: {
            args: Prisma.FotoGremistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoGremistaPayload>
          }
          aggregate: {
            args: Prisma.FotoGremistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoGremista>
          }
          groupBy: {
            args: Prisma.FotoGremistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGremistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoGremistaCountArgs<ExtArgs>
            result: $Utils.Optional<FotoGremistaCountAggregateOutputType> | number
          }
        }
      }
      BiografiaGremista: {
        payload: Prisma.$BiografiaGremistaPayload<ExtArgs>
        fields: Prisma.BiografiaGremistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiografiaGremistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiografiaGremistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          findFirst: {
            args: Prisma.BiografiaGremistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiografiaGremistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          findMany: {
            args: Prisma.BiografiaGremistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>[]
          }
          create: {
            args: Prisma.BiografiaGremistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          createMany: {
            args: Prisma.BiografiaGremistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiografiaGremistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>[]
          }
          delete: {
            args: Prisma.BiografiaGremistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          update: {
            args: Prisma.BiografiaGremistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          deleteMany: {
            args: Prisma.BiografiaGremistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiografiaGremistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiografiaGremistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>[]
          }
          upsert: {
            args: Prisma.BiografiaGremistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiografiaGremistaPayload>
          }
          aggregate: {
            args: Prisma.BiografiaGremistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiografiaGremista>
          }
          groupBy: {
            args: Prisma.BiografiaGremistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiografiaGremistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiografiaGremistaCountArgs<ExtArgs>
            result: $Utils.Optional<BiografiaGremistaCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    noticia?: NoticiaOmit
    fotoGremista?: FotoGremistaOmit
    biografiaGremista?: BiografiaGremistaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Noticia
   */

  export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  export type NoticiaAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticiaSumAggregateOutputType = {
    id: number | null
  }

  export type NoticiaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    imagem_url: string | null
    template: $Enums.Template | null
    data_publicacao: Date | null
    autor: string | null
  }

  export type NoticiaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    imagem_url: string | null
    template: $Enums.Template | null
    data_publicacao: Date | null
    autor: string | null
  }

  export type NoticiaCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    imagem_url: number
    template: number
    data_publicacao: number
    autor: number
    _all: number
  }


  export type NoticiaAvgAggregateInputType = {
    id?: true
  }

  export type NoticiaSumAggregateInputType = {
    id?: true
  }

  export type NoticiaMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    imagem_url?: true
    template?: true
    data_publicacao?: true
    autor?: true
  }

  export type NoticiaMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    imagem_url?: true
    template?: true
    data_publicacao?: true
    autor?: true
  }

  export type NoticiaCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    imagem_url?: true
    template?: true
    data_publicacao?: true
    autor?: true
    _all?: true
  }

  export type NoticiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticia to aggregate.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiaMaxAggregateInputType
  }

  export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticia[P]>
      : GetScalarType<T[P], AggregateNoticia[P]>
  }




  export type NoticiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithAggregationInput | NoticiaOrderByWithAggregationInput[]
    by: NoticiaScalarFieldEnum[] | NoticiaScalarFieldEnum
    having?: NoticiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiaCountAggregateInputType | true
    _avg?: NoticiaAvgAggregateInputType
    _sum?: NoticiaSumAggregateInputType
    _min?: NoticiaMinAggregateInputType
    _max?: NoticiaMaxAggregateInputType
  }

  export type NoticiaGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string
    imagem_url: string | null
    template: $Enums.Template
    data_publicacao: Date
    autor: string
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
        }
      >
    >


  export type NoticiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    imagem_url?: boolean
    template?: boolean
    data_publicacao?: boolean
    autor?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    imagem_url?: boolean
    template?: boolean
    data_publicacao?: boolean
    autor?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    imagem_url?: boolean
    template?: boolean
    data_publicacao?: boolean
    autor?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    imagem_url?: boolean
    template?: boolean
    data_publicacao?: boolean
    autor?: boolean
  }

  export type NoticiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "imagem_url" | "template" | "data_publicacao" | "autor", ExtArgs["result"]["noticia"]>

  export type $NoticiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string
      imagem_url: string | null
      template: $Enums.Template
      data_publicacao: Date
      autor: string
    }, ExtArgs["result"]["noticia"]>
    composites: {}
  }

  type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = $Result.GetResult<Prisma.$NoticiaPayload, S>

  type NoticiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiaCountAggregateInputType | true
    }

  export interface NoticiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticia'], meta: { name: 'Noticia' } }
    /**
     * Find zero or one Noticia that matches the filter.
     * @param {NoticiaFindUniqueArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiaFindUniqueArgs>(args: SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noticia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticiaFindUniqueOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiaFindFirstArgs>(args?: SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticia.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiaWithIdOnly = await prisma.noticia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiaFindManyArgs>(args?: SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noticia.
     * @param {NoticiaCreateArgs} args - Arguments to create a Noticia.
     * @example
     * // Create one Noticia
     * const Noticia = await prisma.noticia.create({
     *   data: {
     *     // ... data to create a Noticia
     *   }
     * })
     * 
     */
    create<T extends NoticiaCreateArgs>(args: SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noticias.
     * @param {NoticiaCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiaCreateManyArgs>(args?: SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiaCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiaCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noticia.
     * @param {NoticiaDeleteArgs} args - Arguments to delete one Noticia.
     * @example
     * // Delete one Noticia
     * const Noticia = await prisma.noticia.delete({
     *   where: {
     *     // ... filter to delete one Noticia
     *   }
     * })
     * 
     */
    delete<T extends NoticiaDeleteArgs>(args: SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noticia.
     * @param {NoticiaUpdateArgs} args - Arguments to update one Noticia.
     * @example
     * // Update one Noticia
     * const noticia = await prisma.noticia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiaUpdateArgs>(args: SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiaDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiaUpdateManyArgs>(args: SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias and returns the data updated in the database.
     * @param {NoticiaUpdateManyAndReturnArgs} args - Arguments to update many Noticias.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoticiaUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noticia.
     * @param {NoticiaUpsertArgs} args - Arguments to update or create a Noticia.
     * @example
     * // Update or create a Noticia
     * const noticia = await prisma.noticia.upsert({
     *   create: {
     *     // ... data to create a Noticia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticia we want to update
     *   }
     * })
     */
    upsert<T extends NoticiaUpsertArgs>(args: SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticia.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiaCountArgs>(
      args?: Subset<T, NoticiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiaAggregateArgs>(args: Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>

    /**
     * Group by Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaGroupByArgs} args - Group by arguments.
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
      T extends NoticiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiaGroupByArgs['orderBy'] }
        : { orderBy?: NoticiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticia model
   */
  readonly fields: NoticiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Noticia model
   */
  interface NoticiaFieldRefs {
    readonly id: FieldRef<"Noticia", 'Int'>
    readonly titulo: FieldRef<"Noticia", 'String'>
    readonly conteudo: FieldRef<"Noticia", 'String'>
    readonly imagem_url: FieldRef<"Noticia", 'String'>
    readonly template: FieldRef<"Noticia", 'Template'>
    readonly data_publicacao: FieldRef<"Noticia", 'DateTime'>
    readonly autor: FieldRef<"Noticia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Noticia findUnique
   */
  export type NoticiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findUniqueOrThrow
   */
  export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findFirst
   */
  export type NoticiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findFirstOrThrow
   */
  export type NoticiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findMany
   */
  export type NoticiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia create
   */
  export type NoticiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to create a Noticia.
     */
    data: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
  }

  /**
   * Noticia createMany
   */
  export type NoticiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia createManyAndReturn
   */
  export type NoticiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia update
   */
  export type NoticiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to update a Noticia.
     */
    data: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
    /**
     * Choose, which Noticia to update.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia updateMany
   */
  export type NoticiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia updateManyAndReturn
   */
  export type NoticiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia upsert
   */
  export type NoticiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The filter to search for the Noticia to update in case it exists.
     */
    where: NoticiaWhereUniqueInput
    /**
     * In case the Noticia found by the `where` argument doesn't exist, create a new Noticia with this data.
     */
    create: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
    /**
     * In case the Noticia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
  }

  /**
   * Noticia delete
   */
  export type NoticiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter which Noticia to delete.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia deleteMany
   */
  export type NoticiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to delete.
     */
    limit?: number
  }

  /**
   * Noticia without action
   */
  export type NoticiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
  }


  /**
   * Model FotoGremista
   */

  export type AggregateFotoGremista = {
    _count: FotoGremistaCountAggregateOutputType | null
    _avg: FotoGremistaAvgAggregateOutputType | null
    _sum: FotoGremistaSumAggregateOutputType | null
    _min: FotoGremistaMinAggregateOutputType | null
    _max: FotoGremistaMaxAggregateOutputType | null
  }

  export type FotoGremistaAvgAggregateOutputType = {
    id: number | null
  }

  export type FotoGremistaSumAggregateOutputType = {
    id: number | null
  }

  export type FotoGremistaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    foto_url: string | null
    descricao: string | null
  }

  export type FotoGremistaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    foto_url: string | null
    descricao: string | null
  }

  export type FotoGremistaCountAggregateOutputType = {
    id: number
    nome: number
    foto_url: number
    descricao: number
    _all: number
  }


  export type FotoGremistaAvgAggregateInputType = {
    id?: true
  }

  export type FotoGremistaSumAggregateInputType = {
    id?: true
  }

  export type FotoGremistaMinAggregateInputType = {
    id?: true
    nome?: true
    foto_url?: true
    descricao?: true
  }

  export type FotoGremistaMaxAggregateInputType = {
    id?: true
    nome?: true
    foto_url?: true
    descricao?: true
  }

  export type FotoGremistaCountAggregateInputType = {
    id?: true
    nome?: true
    foto_url?: true
    descricao?: true
    _all?: true
  }

  export type FotoGremistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoGremista to aggregate.
     */
    where?: FotoGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoGremistas to fetch.
     */
    orderBy?: FotoGremistaOrderByWithRelationInput | FotoGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoGremistas
    **/
    _count?: true | FotoGremistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoGremistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoGremistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoGremistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoGremistaMaxAggregateInputType
  }

  export type GetFotoGremistaAggregateType<T extends FotoGremistaAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoGremista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoGremista[P]>
      : GetScalarType<T[P], AggregateFotoGremista[P]>
  }




  export type FotoGremistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoGremistaWhereInput
    orderBy?: FotoGremistaOrderByWithAggregationInput | FotoGremistaOrderByWithAggregationInput[]
    by: FotoGremistaScalarFieldEnum[] | FotoGremistaScalarFieldEnum
    having?: FotoGremistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoGremistaCountAggregateInputType | true
    _avg?: FotoGremistaAvgAggregateInputType
    _sum?: FotoGremistaSumAggregateInputType
    _min?: FotoGremistaMinAggregateInputType
    _max?: FotoGremistaMaxAggregateInputType
  }

  export type FotoGremistaGroupByOutputType = {
    id: number
    nome: string
    foto_url: string
    descricao: string | null
    _count: FotoGremistaCountAggregateOutputType | null
    _avg: FotoGremistaAvgAggregateOutputType | null
    _sum: FotoGremistaSumAggregateOutputType | null
    _min: FotoGremistaMinAggregateOutputType | null
    _max: FotoGremistaMaxAggregateOutputType | null
  }

  type GetFotoGremistaGroupByPayload<T extends FotoGremistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGremistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGremistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGremistaGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGremistaGroupByOutputType[P]>
        }
      >
    >


  export type FotoGremistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto_url?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["fotoGremista"]>

  export type FotoGremistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto_url?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["fotoGremista"]>

  export type FotoGremistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto_url?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["fotoGremista"]>

  export type FotoGremistaSelectScalar = {
    id?: boolean
    nome?: boolean
    foto_url?: boolean
    descricao?: boolean
  }

  export type FotoGremistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "foto_url" | "descricao", ExtArgs["result"]["fotoGremista"]>

  export type $FotoGremistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoGremista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      foto_url: string
      descricao: string | null
    }, ExtArgs["result"]["fotoGremista"]>
    composites: {}
  }

  type FotoGremistaGetPayload<S extends boolean | null | undefined | FotoGremistaDefaultArgs> = $Result.GetResult<Prisma.$FotoGremistaPayload, S>

  type FotoGremistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoGremistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoGremistaCountAggregateInputType | true
    }

  export interface FotoGremistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoGremista'], meta: { name: 'FotoGremista' } }
    /**
     * Find zero or one FotoGremista that matches the filter.
     * @param {FotoGremistaFindUniqueArgs} args - Arguments to find a FotoGremista
     * @example
     * // Get one FotoGremista
     * const fotoGremista = await prisma.fotoGremista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoGremistaFindUniqueArgs>(args: SelectSubset<T, FotoGremistaFindUniqueArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoGremista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoGremistaFindUniqueOrThrowArgs} args - Arguments to find a FotoGremista
     * @example
     * // Get one FotoGremista
     * const fotoGremista = await prisma.fotoGremista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoGremistaFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoGremistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoGremista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaFindFirstArgs} args - Arguments to find a FotoGremista
     * @example
     * // Get one FotoGremista
     * const fotoGremista = await prisma.fotoGremista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoGremistaFindFirstArgs>(args?: SelectSubset<T, FotoGremistaFindFirstArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoGremista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaFindFirstOrThrowArgs} args - Arguments to find a FotoGremista
     * @example
     * // Get one FotoGremista
     * const fotoGremista = await prisma.fotoGremista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoGremistaFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoGremistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoGremistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoGremistas
     * const fotoGremistas = await prisma.fotoGremista.findMany()
     * 
     * // Get first 10 FotoGremistas
     * const fotoGremistas = await prisma.fotoGremista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoGremistaWithIdOnly = await prisma.fotoGremista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoGremistaFindManyArgs>(args?: SelectSubset<T, FotoGremistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoGremista.
     * @param {FotoGremistaCreateArgs} args - Arguments to create a FotoGremista.
     * @example
     * // Create one FotoGremista
     * const FotoGremista = await prisma.fotoGremista.create({
     *   data: {
     *     // ... data to create a FotoGremista
     *   }
     * })
     * 
     */
    create<T extends FotoGremistaCreateArgs>(args: SelectSubset<T, FotoGremistaCreateArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoGremistas.
     * @param {FotoGremistaCreateManyArgs} args - Arguments to create many FotoGremistas.
     * @example
     * // Create many FotoGremistas
     * const fotoGremista = await prisma.fotoGremista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoGremistaCreateManyArgs>(args?: SelectSubset<T, FotoGremistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FotoGremistas and returns the data saved in the database.
     * @param {FotoGremistaCreateManyAndReturnArgs} args - Arguments to create many FotoGremistas.
     * @example
     * // Create many FotoGremistas
     * const fotoGremista = await prisma.fotoGremista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FotoGremistas and only return the `id`
     * const fotoGremistaWithIdOnly = await prisma.fotoGremista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoGremistaCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoGremistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FotoGremista.
     * @param {FotoGremistaDeleteArgs} args - Arguments to delete one FotoGremista.
     * @example
     * // Delete one FotoGremista
     * const FotoGremista = await prisma.fotoGremista.delete({
     *   where: {
     *     // ... filter to delete one FotoGremista
     *   }
     * })
     * 
     */
    delete<T extends FotoGremistaDeleteArgs>(args: SelectSubset<T, FotoGremistaDeleteArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoGremista.
     * @param {FotoGremistaUpdateArgs} args - Arguments to update one FotoGremista.
     * @example
     * // Update one FotoGremista
     * const fotoGremista = await prisma.fotoGremista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoGremistaUpdateArgs>(args: SelectSubset<T, FotoGremistaUpdateArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoGremistas.
     * @param {FotoGremistaDeleteManyArgs} args - Arguments to filter FotoGremistas to delete.
     * @example
     * // Delete a few FotoGremistas
     * const { count } = await prisma.fotoGremista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoGremistaDeleteManyArgs>(args?: SelectSubset<T, FotoGremistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoGremistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoGremistas
     * const fotoGremista = await prisma.fotoGremista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoGremistaUpdateManyArgs>(args: SelectSubset<T, FotoGremistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoGremistas and returns the data updated in the database.
     * @param {FotoGremistaUpdateManyAndReturnArgs} args - Arguments to update many FotoGremistas.
     * @example
     * // Update many FotoGremistas
     * const fotoGremista = await prisma.fotoGremista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FotoGremistas and only return the `id`
     * const fotoGremistaWithIdOnly = await prisma.fotoGremista.updateManyAndReturn({
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
    updateManyAndReturn<T extends FotoGremistaUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoGremistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FotoGremista.
     * @param {FotoGremistaUpsertArgs} args - Arguments to update or create a FotoGremista.
     * @example
     * // Update or create a FotoGremista
     * const fotoGremista = await prisma.fotoGremista.upsert({
     *   create: {
     *     // ... data to create a FotoGremista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoGremista we want to update
     *   }
     * })
     */
    upsert<T extends FotoGremistaUpsertArgs>(args: SelectSubset<T, FotoGremistaUpsertArgs<ExtArgs>>): Prisma__FotoGremistaClient<$Result.GetResult<Prisma.$FotoGremistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoGremistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaCountArgs} args - Arguments to filter FotoGremistas to count.
     * @example
     * // Count the number of FotoGremistas
     * const count = await prisma.fotoGremista.count({
     *   where: {
     *     // ... the filter for the FotoGremistas we want to count
     *   }
     * })
    **/
    count<T extends FotoGremistaCountArgs>(
      args?: Subset<T, FotoGremistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoGremistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoGremista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoGremistaAggregateArgs>(args: Subset<T, FotoGremistaAggregateArgs>): Prisma.PrismaPromise<GetFotoGremistaAggregateType<T>>

    /**
     * Group by FotoGremista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGremistaGroupByArgs} args - Group by arguments.
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
      T extends FotoGremistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGremistaGroupByArgs['orderBy'] }
        : { orderBy?: FotoGremistaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoGremistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGremistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoGremista model
   */
  readonly fields: FotoGremistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoGremista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoGremistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FotoGremista model
   */
  interface FotoGremistaFieldRefs {
    readonly id: FieldRef<"FotoGremista", 'Int'>
    readonly nome: FieldRef<"FotoGremista", 'String'>
    readonly foto_url: FieldRef<"FotoGremista", 'String'>
    readonly descricao: FieldRef<"FotoGremista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FotoGremista findUnique
   */
  export type FotoGremistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter, which FotoGremista to fetch.
     */
    where: FotoGremistaWhereUniqueInput
  }

  /**
   * FotoGremista findUniqueOrThrow
   */
  export type FotoGremistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter, which FotoGremista to fetch.
     */
    where: FotoGremistaWhereUniqueInput
  }

  /**
   * FotoGremista findFirst
   */
  export type FotoGremistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter, which FotoGremista to fetch.
     */
    where?: FotoGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoGremistas to fetch.
     */
    orderBy?: FotoGremistaOrderByWithRelationInput | FotoGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoGremistas.
     */
    cursor?: FotoGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoGremistas.
     */
    distinct?: FotoGremistaScalarFieldEnum | FotoGremistaScalarFieldEnum[]
  }

  /**
   * FotoGremista findFirstOrThrow
   */
  export type FotoGremistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter, which FotoGremista to fetch.
     */
    where?: FotoGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoGremistas to fetch.
     */
    orderBy?: FotoGremistaOrderByWithRelationInput | FotoGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoGremistas.
     */
    cursor?: FotoGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoGremistas.
     */
    distinct?: FotoGremistaScalarFieldEnum | FotoGremistaScalarFieldEnum[]
  }

  /**
   * FotoGremista findMany
   */
  export type FotoGremistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter, which FotoGremistas to fetch.
     */
    where?: FotoGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoGremistas to fetch.
     */
    orderBy?: FotoGremistaOrderByWithRelationInput | FotoGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoGremistas.
     */
    cursor?: FotoGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoGremistas.
     */
    skip?: number
    distinct?: FotoGremistaScalarFieldEnum | FotoGremistaScalarFieldEnum[]
  }

  /**
   * FotoGremista create
   */
  export type FotoGremistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * The data needed to create a FotoGremista.
     */
    data: XOR<FotoGremistaCreateInput, FotoGremistaUncheckedCreateInput>
  }

  /**
   * FotoGremista createMany
   */
  export type FotoGremistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoGremistas.
     */
    data: FotoGremistaCreateManyInput | FotoGremistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotoGremista createManyAndReturn
   */
  export type FotoGremistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * The data used to create many FotoGremistas.
     */
    data: FotoGremistaCreateManyInput | FotoGremistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotoGremista update
   */
  export type FotoGremistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * The data needed to update a FotoGremista.
     */
    data: XOR<FotoGremistaUpdateInput, FotoGremistaUncheckedUpdateInput>
    /**
     * Choose, which FotoGremista to update.
     */
    where: FotoGremistaWhereUniqueInput
  }

  /**
   * FotoGremista updateMany
   */
  export type FotoGremistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoGremistas.
     */
    data: XOR<FotoGremistaUpdateManyMutationInput, FotoGremistaUncheckedUpdateManyInput>
    /**
     * Filter which FotoGremistas to update
     */
    where?: FotoGremistaWhereInput
    /**
     * Limit how many FotoGremistas to update.
     */
    limit?: number
  }

  /**
   * FotoGremista updateManyAndReturn
   */
  export type FotoGremistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * The data used to update FotoGremistas.
     */
    data: XOR<FotoGremistaUpdateManyMutationInput, FotoGremistaUncheckedUpdateManyInput>
    /**
     * Filter which FotoGremistas to update
     */
    where?: FotoGremistaWhereInput
    /**
     * Limit how many FotoGremistas to update.
     */
    limit?: number
  }

  /**
   * FotoGremista upsert
   */
  export type FotoGremistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * The filter to search for the FotoGremista to update in case it exists.
     */
    where: FotoGremistaWhereUniqueInput
    /**
     * In case the FotoGremista found by the `where` argument doesn't exist, create a new FotoGremista with this data.
     */
    create: XOR<FotoGremistaCreateInput, FotoGremistaUncheckedCreateInput>
    /**
     * In case the FotoGremista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoGremistaUpdateInput, FotoGremistaUncheckedUpdateInput>
  }

  /**
   * FotoGremista delete
   */
  export type FotoGremistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
    /**
     * Filter which FotoGremista to delete.
     */
    where: FotoGremistaWhereUniqueInput
  }

  /**
   * FotoGremista deleteMany
   */
  export type FotoGremistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoGremistas to delete
     */
    where?: FotoGremistaWhereInput
    /**
     * Limit how many FotoGremistas to delete.
     */
    limit?: number
  }

  /**
   * FotoGremista without action
   */
  export type FotoGremistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoGremista
     */
    select?: FotoGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoGremista
     */
    omit?: FotoGremistaOmit<ExtArgs> | null
  }


  /**
   * Model BiografiaGremista
   */

  export type AggregateBiografiaGremista = {
    _count: BiografiaGremistaCountAggregateOutputType | null
    _avg: BiografiaGremistaAvgAggregateOutputType | null
    _sum: BiografiaGremistaSumAggregateOutputType | null
    _min: BiografiaGremistaMinAggregateOutputType | null
    _max: BiografiaGremistaMaxAggregateOutputType | null
  }

  export type BiografiaGremistaAvgAggregateOutputType = {
    id: number | null
  }

  export type BiografiaGremistaSumAggregateOutputType = {
    id: number | null
  }

  export type BiografiaGremistaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    biografia: string | null
    foto_url: string | null
  }

  export type BiografiaGremistaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    biografia: string | null
    foto_url: string | null
  }

  export type BiografiaGremistaCountAggregateOutputType = {
    id: number
    nome: number
    biografia: number
    foto_url: number
    _all: number
  }


  export type BiografiaGremistaAvgAggregateInputType = {
    id?: true
  }

  export type BiografiaGremistaSumAggregateInputType = {
    id?: true
  }

  export type BiografiaGremistaMinAggregateInputType = {
    id?: true
    nome?: true
    biografia?: true
    foto_url?: true
  }

  export type BiografiaGremistaMaxAggregateInputType = {
    id?: true
    nome?: true
    biografia?: true
    foto_url?: true
  }

  export type BiografiaGremistaCountAggregateInputType = {
    id?: true
    nome?: true
    biografia?: true
    foto_url?: true
    _all?: true
  }

  export type BiografiaGremistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiografiaGremista to aggregate.
     */
    where?: BiografiaGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiografiaGremistas to fetch.
     */
    orderBy?: BiografiaGremistaOrderByWithRelationInput | BiografiaGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiografiaGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiografiaGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiografiaGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiografiaGremistas
    **/
    _count?: true | BiografiaGremistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiografiaGremistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiografiaGremistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiografiaGremistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiografiaGremistaMaxAggregateInputType
  }

  export type GetBiografiaGremistaAggregateType<T extends BiografiaGremistaAggregateArgs> = {
        [P in keyof T & keyof AggregateBiografiaGremista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiografiaGremista[P]>
      : GetScalarType<T[P], AggregateBiografiaGremista[P]>
  }




  export type BiografiaGremistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiografiaGremistaWhereInput
    orderBy?: BiografiaGremistaOrderByWithAggregationInput | BiografiaGremistaOrderByWithAggregationInput[]
    by: BiografiaGremistaScalarFieldEnum[] | BiografiaGremistaScalarFieldEnum
    having?: BiografiaGremistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiografiaGremistaCountAggregateInputType | true
    _avg?: BiografiaGremistaAvgAggregateInputType
    _sum?: BiografiaGremistaSumAggregateInputType
    _min?: BiografiaGremistaMinAggregateInputType
    _max?: BiografiaGremistaMaxAggregateInputType
  }

  export type BiografiaGremistaGroupByOutputType = {
    id: number
    nome: string
    biografia: string
    foto_url: string | null
    _count: BiografiaGremistaCountAggregateOutputType | null
    _avg: BiografiaGremistaAvgAggregateOutputType | null
    _sum: BiografiaGremistaSumAggregateOutputType | null
    _min: BiografiaGremistaMinAggregateOutputType | null
    _max: BiografiaGremistaMaxAggregateOutputType | null
  }

  type GetBiografiaGremistaGroupByPayload<T extends BiografiaGremistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiografiaGremistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiografiaGremistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiografiaGremistaGroupByOutputType[P]>
            : GetScalarType<T[P], BiografiaGremistaGroupByOutputType[P]>
        }
      >
    >


  export type BiografiaGremistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    biografia?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["biografiaGremista"]>

  export type BiografiaGremistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    biografia?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["biografiaGremista"]>

  export type BiografiaGremistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    biografia?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["biografiaGremista"]>

  export type BiografiaGremistaSelectScalar = {
    id?: boolean
    nome?: boolean
    biografia?: boolean
    foto_url?: boolean
  }

  export type BiografiaGremistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "biografia" | "foto_url", ExtArgs["result"]["biografiaGremista"]>

  export type $BiografiaGremistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiografiaGremista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      biografia: string
      foto_url: string | null
    }, ExtArgs["result"]["biografiaGremista"]>
    composites: {}
  }

  type BiografiaGremistaGetPayload<S extends boolean | null | undefined | BiografiaGremistaDefaultArgs> = $Result.GetResult<Prisma.$BiografiaGremistaPayload, S>

  type BiografiaGremistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiografiaGremistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiografiaGremistaCountAggregateInputType | true
    }

  export interface BiografiaGremistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiografiaGremista'], meta: { name: 'BiografiaGremista' } }
    /**
     * Find zero or one BiografiaGremista that matches the filter.
     * @param {BiografiaGremistaFindUniqueArgs} args - Arguments to find a BiografiaGremista
     * @example
     * // Get one BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiografiaGremistaFindUniqueArgs>(args: SelectSubset<T, BiografiaGremistaFindUniqueArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiografiaGremista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiografiaGremistaFindUniqueOrThrowArgs} args - Arguments to find a BiografiaGremista
     * @example
     * // Get one BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiografiaGremistaFindUniqueOrThrowArgs>(args: SelectSubset<T, BiografiaGremistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiografiaGremista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaFindFirstArgs} args - Arguments to find a BiografiaGremista
     * @example
     * // Get one BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiografiaGremistaFindFirstArgs>(args?: SelectSubset<T, BiografiaGremistaFindFirstArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiografiaGremista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaFindFirstOrThrowArgs} args - Arguments to find a BiografiaGremista
     * @example
     * // Get one BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiografiaGremistaFindFirstOrThrowArgs>(args?: SelectSubset<T, BiografiaGremistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiografiaGremistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiografiaGremistas
     * const biografiaGremistas = await prisma.biografiaGremista.findMany()
     * 
     * // Get first 10 BiografiaGremistas
     * const biografiaGremistas = await prisma.biografiaGremista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biografiaGremistaWithIdOnly = await prisma.biografiaGremista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiografiaGremistaFindManyArgs>(args?: SelectSubset<T, BiografiaGremistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiografiaGremista.
     * @param {BiografiaGremistaCreateArgs} args - Arguments to create a BiografiaGremista.
     * @example
     * // Create one BiografiaGremista
     * const BiografiaGremista = await prisma.biografiaGremista.create({
     *   data: {
     *     // ... data to create a BiografiaGremista
     *   }
     * })
     * 
     */
    create<T extends BiografiaGremistaCreateArgs>(args: SelectSubset<T, BiografiaGremistaCreateArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiografiaGremistas.
     * @param {BiografiaGremistaCreateManyArgs} args - Arguments to create many BiografiaGremistas.
     * @example
     * // Create many BiografiaGremistas
     * const biografiaGremista = await prisma.biografiaGremista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiografiaGremistaCreateManyArgs>(args?: SelectSubset<T, BiografiaGremistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiografiaGremistas and returns the data saved in the database.
     * @param {BiografiaGremistaCreateManyAndReturnArgs} args - Arguments to create many BiografiaGremistas.
     * @example
     * // Create many BiografiaGremistas
     * const biografiaGremista = await prisma.biografiaGremista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiografiaGremistas and only return the `id`
     * const biografiaGremistaWithIdOnly = await prisma.biografiaGremista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiografiaGremistaCreateManyAndReturnArgs>(args?: SelectSubset<T, BiografiaGremistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BiografiaGremista.
     * @param {BiografiaGremistaDeleteArgs} args - Arguments to delete one BiografiaGremista.
     * @example
     * // Delete one BiografiaGremista
     * const BiografiaGremista = await prisma.biografiaGremista.delete({
     *   where: {
     *     // ... filter to delete one BiografiaGremista
     *   }
     * })
     * 
     */
    delete<T extends BiografiaGremistaDeleteArgs>(args: SelectSubset<T, BiografiaGremistaDeleteArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiografiaGremista.
     * @param {BiografiaGremistaUpdateArgs} args - Arguments to update one BiografiaGremista.
     * @example
     * // Update one BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiografiaGremistaUpdateArgs>(args: SelectSubset<T, BiografiaGremistaUpdateArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiografiaGremistas.
     * @param {BiografiaGremistaDeleteManyArgs} args - Arguments to filter BiografiaGremistas to delete.
     * @example
     * // Delete a few BiografiaGremistas
     * const { count } = await prisma.biografiaGremista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiografiaGremistaDeleteManyArgs>(args?: SelectSubset<T, BiografiaGremistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiografiaGremistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiografiaGremistas
     * const biografiaGremista = await prisma.biografiaGremista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiografiaGremistaUpdateManyArgs>(args: SelectSubset<T, BiografiaGremistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiografiaGremistas and returns the data updated in the database.
     * @param {BiografiaGremistaUpdateManyAndReturnArgs} args - Arguments to update many BiografiaGremistas.
     * @example
     * // Update many BiografiaGremistas
     * const biografiaGremista = await prisma.biografiaGremista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiografiaGremistas and only return the `id`
     * const biografiaGremistaWithIdOnly = await prisma.biografiaGremista.updateManyAndReturn({
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
    updateManyAndReturn<T extends BiografiaGremistaUpdateManyAndReturnArgs>(args: SelectSubset<T, BiografiaGremistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BiografiaGremista.
     * @param {BiografiaGremistaUpsertArgs} args - Arguments to update or create a BiografiaGremista.
     * @example
     * // Update or create a BiografiaGremista
     * const biografiaGremista = await prisma.biografiaGremista.upsert({
     *   create: {
     *     // ... data to create a BiografiaGremista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiografiaGremista we want to update
     *   }
     * })
     */
    upsert<T extends BiografiaGremistaUpsertArgs>(args: SelectSubset<T, BiografiaGremistaUpsertArgs<ExtArgs>>): Prisma__BiografiaGremistaClient<$Result.GetResult<Prisma.$BiografiaGremistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiografiaGremistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaCountArgs} args - Arguments to filter BiografiaGremistas to count.
     * @example
     * // Count the number of BiografiaGremistas
     * const count = await prisma.biografiaGremista.count({
     *   where: {
     *     // ... the filter for the BiografiaGremistas we want to count
     *   }
     * })
    **/
    count<T extends BiografiaGremistaCountArgs>(
      args?: Subset<T, BiografiaGremistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiografiaGremistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiografiaGremista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BiografiaGremistaAggregateArgs>(args: Subset<T, BiografiaGremistaAggregateArgs>): Prisma.PrismaPromise<GetBiografiaGremistaAggregateType<T>>

    /**
     * Group by BiografiaGremista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiografiaGremistaGroupByArgs} args - Group by arguments.
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
      T extends BiografiaGremistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiografiaGremistaGroupByArgs['orderBy'] }
        : { orderBy?: BiografiaGremistaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BiografiaGremistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiografiaGremistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiografiaGremista model
   */
  readonly fields: BiografiaGremistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiografiaGremista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiografiaGremistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BiografiaGremista model
   */
  interface BiografiaGremistaFieldRefs {
    readonly id: FieldRef<"BiografiaGremista", 'Int'>
    readonly nome: FieldRef<"BiografiaGremista", 'String'>
    readonly biografia: FieldRef<"BiografiaGremista", 'String'>
    readonly foto_url: FieldRef<"BiografiaGremista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BiografiaGremista findUnique
   */
  export type BiografiaGremistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter, which BiografiaGremista to fetch.
     */
    where: BiografiaGremistaWhereUniqueInput
  }

  /**
   * BiografiaGremista findUniqueOrThrow
   */
  export type BiografiaGremistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter, which BiografiaGremista to fetch.
     */
    where: BiografiaGremistaWhereUniqueInput
  }

  /**
   * BiografiaGremista findFirst
   */
  export type BiografiaGremistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter, which BiografiaGremista to fetch.
     */
    where?: BiografiaGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiografiaGremistas to fetch.
     */
    orderBy?: BiografiaGremistaOrderByWithRelationInput | BiografiaGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiografiaGremistas.
     */
    cursor?: BiografiaGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiografiaGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiografiaGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiografiaGremistas.
     */
    distinct?: BiografiaGremistaScalarFieldEnum | BiografiaGremistaScalarFieldEnum[]
  }

  /**
   * BiografiaGremista findFirstOrThrow
   */
  export type BiografiaGremistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter, which BiografiaGremista to fetch.
     */
    where?: BiografiaGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiografiaGremistas to fetch.
     */
    orderBy?: BiografiaGremistaOrderByWithRelationInput | BiografiaGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiografiaGremistas.
     */
    cursor?: BiografiaGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiografiaGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiografiaGremistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiografiaGremistas.
     */
    distinct?: BiografiaGremistaScalarFieldEnum | BiografiaGremistaScalarFieldEnum[]
  }

  /**
   * BiografiaGremista findMany
   */
  export type BiografiaGremistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter, which BiografiaGremistas to fetch.
     */
    where?: BiografiaGremistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiografiaGremistas to fetch.
     */
    orderBy?: BiografiaGremistaOrderByWithRelationInput | BiografiaGremistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiografiaGremistas.
     */
    cursor?: BiografiaGremistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiografiaGremistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiografiaGremistas.
     */
    skip?: number
    distinct?: BiografiaGremistaScalarFieldEnum | BiografiaGremistaScalarFieldEnum[]
  }

  /**
   * BiografiaGremista create
   */
  export type BiografiaGremistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * The data needed to create a BiografiaGremista.
     */
    data: XOR<BiografiaGremistaCreateInput, BiografiaGremistaUncheckedCreateInput>
  }

  /**
   * BiografiaGremista createMany
   */
  export type BiografiaGremistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiografiaGremistas.
     */
    data: BiografiaGremistaCreateManyInput | BiografiaGremistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiografiaGremista createManyAndReturn
   */
  export type BiografiaGremistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * The data used to create many BiografiaGremistas.
     */
    data: BiografiaGremistaCreateManyInput | BiografiaGremistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiografiaGremista update
   */
  export type BiografiaGremistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * The data needed to update a BiografiaGremista.
     */
    data: XOR<BiografiaGremistaUpdateInput, BiografiaGremistaUncheckedUpdateInput>
    /**
     * Choose, which BiografiaGremista to update.
     */
    where: BiografiaGremistaWhereUniqueInput
  }

  /**
   * BiografiaGremista updateMany
   */
  export type BiografiaGremistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiografiaGremistas.
     */
    data: XOR<BiografiaGremistaUpdateManyMutationInput, BiografiaGremistaUncheckedUpdateManyInput>
    /**
     * Filter which BiografiaGremistas to update
     */
    where?: BiografiaGremistaWhereInput
    /**
     * Limit how many BiografiaGremistas to update.
     */
    limit?: number
  }

  /**
   * BiografiaGremista updateManyAndReturn
   */
  export type BiografiaGremistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * The data used to update BiografiaGremistas.
     */
    data: XOR<BiografiaGremistaUpdateManyMutationInput, BiografiaGremistaUncheckedUpdateManyInput>
    /**
     * Filter which BiografiaGremistas to update
     */
    where?: BiografiaGremistaWhereInput
    /**
     * Limit how many BiografiaGremistas to update.
     */
    limit?: number
  }

  /**
   * BiografiaGremista upsert
   */
  export type BiografiaGremistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * The filter to search for the BiografiaGremista to update in case it exists.
     */
    where: BiografiaGremistaWhereUniqueInput
    /**
     * In case the BiografiaGremista found by the `where` argument doesn't exist, create a new BiografiaGremista with this data.
     */
    create: XOR<BiografiaGremistaCreateInput, BiografiaGremistaUncheckedCreateInput>
    /**
     * In case the BiografiaGremista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiografiaGremistaUpdateInput, BiografiaGremistaUncheckedUpdateInput>
  }

  /**
   * BiografiaGremista delete
   */
  export type BiografiaGremistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
    /**
     * Filter which BiografiaGremista to delete.
     */
    where: BiografiaGremistaWhereUniqueInput
  }

  /**
   * BiografiaGremista deleteMany
   */
  export type BiografiaGremistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiografiaGremistas to delete
     */
    where?: BiografiaGremistaWhereInput
    /**
     * Limit how many BiografiaGremistas to delete.
     */
    limit?: number
  }

  /**
   * BiografiaGremista without action
   */
  export type BiografiaGremistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiografiaGremista
     */
    select?: BiografiaGremistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiografiaGremista
     */
    omit?: BiografiaGremistaOmit<ExtArgs> | null
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


  export const NoticiaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    imagem_url: 'imagem_url',
    template: 'template',
    data_publicacao: 'data_publicacao',
    autor: 'autor'
  };

  export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum]


  export const FotoGremistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    foto_url: 'foto_url',
    descricao: 'descricao'
  };

  export type FotoGremistaScalarFieldEnum = (typeof FotoGremistaScalarFieldEnum)[keyof typeof FotoGremistaScalarFieldEnum]


  export const BiografiaGremistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    biografia: 'biografia',
    foto_url: 'foto_url'
  };

  export type BiografiaGremistaScalarFieldEnum = (typeof BiografiaGremistaScalarFieldEnum)[keyof typeof BiografiaGremistaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Template'
   */
  export type EnumTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Template'>
    


  /**
   * Reference to a field of type 'Template[]'
   */
  export type ListEnumTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Template[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type NoticiaWhereInput = {
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    conteudo?: StringFilter<"Noticia"> | string
    imagem_url?: StringNullableFilter<"Noticia"> | string | null
    template?: EnumTemplateFilter<"Noticia"> | $Enums.Template
    data_publicacao?: DateTimeFilter<"Noticia"> | Date | string
    autor?: StringFilter<"Noticia"> | string
  }

  export type NoticiaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    imagem_url?: SortOrderInput | SortOrder
    template?: SortOrder
    data_publicacao?: SortOrder
    autor?: SortOrder
  }

  export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    titulo?: StringFilter<"Noticia"> | string
    conteudo?: StringFilter<"Noticia"> | string
    imagem_url?: StringNullableFilter<"Noticia"> | string | null
    template?: EnumTemplateFilter<"Noticia"> | $Enums.Template
    data_publicacao?: DateTimeFilter<"Noticia"> | Date | string
    autor?: StringFilter<"Noticia"> | string
  }, "id">

  export type NoticiaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    imagem_url?: SortOrderInput | SortOrder
    template?: SortOrder
    data_publicacao?: SortOrder
    autor?: SortOrder
    _count?: NoticiaCountOrderByAggregateInput
    _avg?: NoticiaAvgOrderByAggregateInput
    _max?: NoticiaMaxOrderByAggregateInput
    _min?: NoticiaMinOrderByAggregateInput
    _sum?: NoticiaSumOrderByAggregateInput
  }

  export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    OR?: NoticiaScalarWhereWithAggregatesInput[]
    NOT?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticia"> | number
    titulo?: StringWithAggregatesFilter<"Noticia"> | string
    conteudo?: StringWithAggregatesFilter<"Noticia"> | string
    imagem_url?: StringNullableWithAggregatesFilter<"Noticia"> | string | null
    template?: EnumTemplateWithAggregatesFilter<"Noticia"> | $Enums.Template
    data_publicacao?: DateTimeWithAggregatesFilter<"Noticia"> | Date | string
    autor?: StringWithAggregatesFilter<"Noticia"> | string
  }

  export type FotoGremistaWhereInput = {
    AND?: FotoGremistaWhereInput | FotoGremistaWhereInput[]
    OR?: FotoGremistaWhereInput[]
    NOT?: FotoGremistaWhereInput | FotoGremistaWhereInput[]
    id?: IntFilter<"FotoGremista"> | number
    nome?: StringFilter<"FotoGremista"> | string
    foto_url?: StringFilter<"FotoGremista"> | string
    descricao?: StringNullableFilter<"FotoGremista"> | string | null
  }

  export type FotoGremistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    foto_url?: SortOrder
    descricao?: SortOrderInput | SortOrder
  }

  export type FotoGremistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoGremistaWhereInput | FotoGremistaWhereInput[]
    OR?: FotoGremistaWhereInput[]
    NOT?: FotoGremistaWhereInput | FotoGremistaWhereInput[]
    nome?: StringFilter<"FotoGremista"> | string
    foto_url?: StringFilter<"FotoGremista"> | string
    descricao?: StringNullableFilter<"FotoGremista"> | string | null
  }, "id">

  export type FotoGremistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    foto_url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: FotoGremistaCountOrderByAggregateInput
    _avg?: FotoGremistaAvgOrderByAggregateInput
    _max?: FotoGremistaMaxOrderByAggregateInput
    _min?: FotoGremistaMinOrderByAggregateInput
    _sum?: FotoGremistaSumOrderByAggregateInput
  }

  export type FotoGremistaScalarWhereWithAggregatesInput = {
    AND?: FotoGremistaScalarWhereWithAggregatesInput | FotoGremistaScalarWhereWithAggregatesInput[]
    OR?: FotoGremistaScalarWhereWithAggregatesInput[]
    NOT?: FotoGremistaScalarWhereWithAggregatesInput | FotoGremistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FotoGremista"> | number
    nome?: StringWithAggregatesFilter<"FotoGremista"> | string
    foto_url?: StringWithAggregatesFilter<"FotoGremista"> | string
    descricao?: StringNullableWithAggregatesFilter<"FotoGremista"> | string | null
  }

  export type BiografiaGremistaWhereInput = {
    AND?: BiografiaGremistaWhereInput | BiografiaGremistaWhereInput[]
    OR?: BiografiaGremistaWhereInput[]
    NOT?: BiografiaGremistaWhereInput | BiografiaGremistaWhereInput[]
    id?: IntFilter<"BiografiaGremista"> | number
    nome?: StringFilter<"BiografiaGremista"> | string
    biografia?: StringFilter<"BiografiaGremista"> | string
    foto_url?: StringNullableFilter<"BiografiaGremista"> | string | null
  }

  export type BiografiaGremistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    biografia?: SortOrder
    foto_url?: SortOrderInput | SortOrder
  }

  export type BiografiaGremistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BiografiaGremistaWhereInput | BiografiaGremistaWhereInput[]
    OR?: BiografiaGremistaWhereInput[]
    NOT?: BiografiaGremistaWhereInput | BiografiaGremistaWhereInput[]
    nome?: StringFilter<"BiografiaGremista"> | string
    biografia?: StringFilter<"BiografiaGremista"> | string
    foto_url?: StringNullableFilter<"BiografiaGremista"> | string | null
  }, "id">

  export type BiografiaGremistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    biografia?: SortOrder
    foto_url?: SortOrderInput | SortOrder
    _count?: BiografiaGremistaCountOrderByAggregateInput
    _avg?: BiografiaGremistaAvgOrderByAggregateInput
    _max?: BiografiaGremistaMaxOrderByAggregateInput
    _min?: BiografiaGremistaMinOrderByAggregateInput
    _sum?: BiografiaGremistaSumOrderByAggregateInput
  }

  export type BiografiaGremistaScalarWhereWithAggregatesInput = {
    AND?: BiografiaGremistaScalarWhereWithAggregatesInput | BiografiaGremistaScalarWhereWithAggregatesInput[]
    OR?: BiografiaGremistaScalarWhereWithAggregatesInput[]
    NOT?: BiografiaGremistaScalarWhereWithAggregatesInput | BiografiaGremistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BiografiaGremista"> | number
    nome?: StringWithAggregatesFilter<"BiografiaGremista"> | string
    biografia?: StringWithAggregatesFilter<"BiografiaGremista"> | string
    foto_url?: StringNullableWithAggregatesFilter<"BiografiaGremista"> | string | null
  }

  export type NoticiaCreateInput = {
    titulo: string
    conteudo: string
    imagem_url?: string | null
    template: $Enums.Template
    data_publicacao?: Date | string
    autor: string
  }

  export type NoticiaUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo: string
    imagem_url?: string | null
    template: $Enums.Template
    data_publicacao?: Date | string
    autor: string
  }

  export type NoticiaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    template?: EnumTemplateFieldUpdateOperationsInput | $Enums.Template
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: StringFieldUpdateOperationsInput | string
  }

  export type NoticiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    template?: EnumTemplateFieldUpdateOperationsInput | $Enums.Template
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: StringFieldUpdateOperationsInput | string
  }

  export type NoticiaCreateManyInput = {
    id?: number
    titulo: string
    conteudo: string
    imagem_url?: string | null
    template: $Enums.Template
    data_publicacao?: Date | string
    autor: string
  }

  export type NoticiaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    template?: EnumTemplateFieldUpdateOperationsInput | $Enums.Template
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: StringFieldUpdateOperationsInput | string
  }

  export type NoticiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    imagem_url?: NullableStringFieldUpdateOperationsInput | string | null
    template?: EnumTemplateFieldUpdateOperationsInput | $Enums.Template
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: StringFieldUpdateOperationsInput | string
  }

  export type FotoGremistaCreateInput = {
    nome: string
    foto_url: string
    descricao?: string | null
  }

  export type FotoGremistaUncheckedCreateInput = {
    id?: number
    nome: string
    foto_url: string
    descricao?: string | null
  }

  export type FotoGremistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    foto_url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FotoGremistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    foto_url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FotoGremistaCreateManyInput = {
    id?: number
    nome: string
    foto_url: string
    descricao?: string | null
  }

  export type FotoGremistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    foto_url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FotoGremistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    foto_url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiografiaGremistaCreateInput = {
    nome: string
    biografia: string
    foto_url?: string | null
  }

  export type BiografiaGremistaUncheckedCreateInput = {
    id?: number
    nome: string
    biografia: string
    foto_url?: string | null
  }

  export type BiografiaGremistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiografiaGremistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiografiaGremistaCreateManyInput = {
    id?: number
    nome: string
    biografia: string
    foto_url?: string | null
  }

  export type BiografiaGremistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiografiaGremistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    biografia?: StringFieldUpdateOperationsInput | string
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTemplateFilter<$PrismaModel = never> = {
    equals?: $Enums.Template | EnumTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateFilter<$PrismaModel> | $Enums.Template
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoticiaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    imagem_url?: SortOrder
    template?: SortOrder
    data_publicacao?: SortOrder
    autor?: SortOrder
  }

  export type NoticiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticiaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    imagem_url?: SortOrder
    template?: SortOrder
    data_publicacao?: SortOrder
    autor?: SortOrder
  }

  export type NoticiaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    imagem_url?: SortOrder
    template?: SortOrder
    data_publicacao?: SortOrder
    autor?: SortOrder
  }

  export type NoticiaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTemplateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Template | EnumTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateWithAggregatesFilter<$PrismaModel> | $Enums.Template
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateFilter<$PrismaModel>
    _max?: NestedEnumTemplateFilter<$PrismaModel>
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

  export type FotoGremistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto_url?: SortOrder
    descricao?: SortOrder
  }

  export type FotoGremistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FotoGremistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto_url?: SortOrder
    descricao?: SortOrder
  }

  export type FotoGremistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto_url?: SortOrder
    descricao?: SortOrder
  }

  export type FotoGremistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BiografiaGremistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    biografia?: SortOrder
    foto_url?: SortOrder
  }

  export type BiografiaGremistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BiografiaGremistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    biografia?: SortOrder
    foto_url?: SortOrder
  }

  export type BiografiaGremistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    biografia?: SortOrder
    foto_url?: SortOrder
  }

  export type BiografiaGremistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTemplateFieldUpdateOperationsInput = {
    set?: $Enums.Template
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTemplateFilter<$PrismaModel = never> = {
    equals?: $Enums.Template | EnumTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateFilter<$PrismaModel> | $Enums.Template
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTemplateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Template | EnumTemplateFieldRefInput<$PrismaModel>
    in?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Template[] | ListEnumTemplateFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateWithAggregatesFilter<$PrismaModel> | $Enums.Template
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateFilter<$PrismaModel>
    _max?: NestedEnumTemplateFilter<$PrismaModel>
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