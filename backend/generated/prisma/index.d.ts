
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Confirm
 * 
 */
export type Confirm = $Result.DefaultSelection<Prisma.$ConfirmPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type Roles = (typeof Roles)[keyof typeof Roles]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.confirm`: Exposes CRUD operations for the **Confirm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Confirms
    * const confirms = await prisma.confirm.findMany()
    * ```
    */
  get confirm(): Prisma.ConfirmDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Posts: 'Posts',
    Confirm: 'Confirm'
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
      modelProps: "users" | "posts" | "confirm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Confirm: {
        payload: Prisma.$ConfirmPayload<ExtArgs>
        fields: Prisma.ConfirmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          findFirst: {
            args: Prisma.ConfirmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          findMany: {
            args: Prisma.ConfirmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>[]
          }
          create: {
            args: Prisma.ConfirmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          createMany: {
            args: Prisma.ConfirmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConfirmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          update: {
            args: Prisma.ConfirmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          deleteMany: {
            args: Prisma.ConfirmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfirmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmPayload>
          }
          aggregate: {
            args: Prisma.ConfirmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirm>
          }
          groupBy: {
            args: Prisma.ConfirmGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmCountAggregateOutputType> | number
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
    users?: UsersOmit
    posts?: PostsOmit
    confirm?: ConfirmOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    posts: number
    confirms: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    confirms?: boolean | UsersCountOutputTypeCountConfirmsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConfirmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    confirms: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    confirms?: boolean | PostsCountOutputTypeCountConfirmsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountConfirmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    surname: string | null
    department: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    role: $Enums.Roles | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    surname: string | null
    department: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    role: $Enums.Roles | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    surname: number
    department: number
    email: number
    password: number
    created_at: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    department?: true
    email?: true
    password?: true
    created_at?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    department?: true
    email?: true
    password?: true
    created_at?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    department?: true
    email?: true
    password?: true
    created_at?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at: Date
    role: $Enums.Roles
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    surname?: boolean
    department?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    role?: boolean
    posts?: boolean | Users$postsArgs<ExtArgs>
    confirms?: boolean | Users$confirmsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    surname?: boolean
    department?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "surname" | "department" | "email" | "password" | "created_at" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Users$postsArgs<ExtArgs>
    confirms?: boolean | Users$confirmsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
      confirms: Prisma.$ConfirmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      surname: string
      department: string
      email: string
      password: string
      created_at: Date
      role: $Enums.Roles
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Users$postsArgs<ExtArgs> = {}>(args?: Subset<T, Users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    confirms<T extends Users$confirmsArgs<ExtArgs> = {}>(args?: Subset<T, Users$confirmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly surname: FieldRef<"Users", 'String'>
    readonly department: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'Roles'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.posts
   */
  export type Users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Users.confirms
   */
  export type Users$confirmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    where?: ConfirmWhereInput
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    cursor?: ConfirmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfirmScalarFieldEnum | ConfirmScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    start_time: string | null
    end_time: string | null
    post_date: Date | null
    created_at: Date | null
    doctorId: number | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    start_time: string | null
    end_time: string | null
    post_date: Date | null
    created_at: Date | null
    doctorId: number | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    start_time: number
    end_time: number
    post_date: number
    created_at: number
    doctorId: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    post_date?: true
    created_at?: true
    doctorId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    post_date?: true
    created_at?: true
    doctorId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    post_date?: true
    created_at?: true
    doctorId?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    start_time: string
    end_time: string
    post_date: Date
    created_at: Date
    doctorId: number
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_time?: boolean
    end_time?: boolean
    post_date?: boolean
    created_at?: boolean
    doctorId?: boolean
    doctor?: boolean | UsersDefaultArgs<ExtArgs>
    confirms?: boolean | Posts$confirmsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>



  export type PostsSelectScalar = {
    id?: boolean
    start_time?: boolean
    end_time?: boolean
    post_date?: boolean
    created_at?: boolean
    doctorId?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_time" | "end_time" | "post_date" | "created_at" | "doctorId", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UsersDefaultArgs<ExtArgs>
    confirms?: boolean | Posts$confirmsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      doctor: Prisma.$UsersPayload<ExtArgs>
      confirms: Prisma.$ConfirmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_time: string
      end_time: string
      post_date: Date
      created_at: Date
      doctorId: number
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    confirms<T extends Posts$confirmsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$confirmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly start_time: FieldRef<"Posts", 'String'>
    readonly end_time: FieldRef<"Posts", 'String'>
    readonly post_date: FieldRef<"Posts", 'DateTime'>
    readonly created_at: FieldRef<"Posts", 'DateTime'>
    readonly doctorId: FieldRef<"Posts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.confirms
   */
  export type Posts$confirmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    where?: ConfirmWhereInput
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    cursor?: ConfirmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfirmScalarFieldEnum | ConfirmScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Confirm
   */

  export type AggregateConfirm = {
    _count: ConfirmCountAggregateOutputType | null
    _avg: ConfirmAvgAggregateOutputType | null
    _sum: ConfirmSumAggregateOutputType | null
    _min: ConfirmMinAggregateOutputType | null
    _max: ConfirmMaxAggregateOutputType | null
  }

  export type ConfirmAvgAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type ConfirmSumAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type ConfirmMinAggregateOutputType = {
    userId: number | null
    postId: number | null
    confirm: boolean | null
  }

  export type ConfirmMaxAggregateOutputType = {
    userId: number | null
    postId: number | null
    confirm: boolean | null
  }

  export type ConfirmCountAggregateOutputType = {
    userId: number
    postId: number
    confirm: number
    _all: number
  }


  export type ConfirmAvgAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type ConfirmSumAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type ConfirmMinAggregateInputType = {
    userId?: true
    postId?: true
    confirm?: true
  }

  export type ConfirmMaxAggregateInputType = {
    userId?: true
    postId?: true
    confirm?: true
  }

  export type ConfirmCountAggregateInputType = {
    userId?: true
    postId?: true
    confirm?: true
    _all?: true
  }

  export type ConfirmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Confirm to aggregate.
     */
    where?: ConfirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confirms to fetch.
     */
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Confirms
    **/
    _count?: true | ConfirmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmMaxAggregateInputType
  }

  export type GetConfirmAggregateType<T extends ConfirmAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirm[P]>
      : GetScalarType<T[P], AggregateConfirm[P]>
  }




  export type ConfirmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmWhereInput
    orderBy?: ConfirmOrderByWithAggregationInput | ConfirmOrderByWithAggregationInput[]
    by: ConfirmScalarFieldEnum[] | ConfirmScalarFieldEnum
    having?: ConfirmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmCountAggregateInputType | true
    _avg?: ConfirmAvgAggregateInputType
    _sum?: ConfirmSumAggregateInputType
    _min?: ConfirmMinAggregateInputType
    _max?: ConfirmMaxAggregateInputType
  }

  export type ConfirmGroupByOutputType = {
    userId: number
    postId: number
    confirm: boolean
    _count: ConfirmCountAggregateOutputType | null
    _avg: ConfirmAvgAggregateOutputType | null
    _sum: ConfirmSumAggregateOutputType | null
    _min: ConfirmMinAggregateOutputType | null
    _max: ConfirmMaxAggregateOutputType | null
  }

  type GetConfirmGroupByPayload<T extends ConfirmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postId?: boolean
    confirm?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirm"]>



  export type ConfirmSelectScalar = {
    userId?: boolean
    postId?: boolean
    confirm?: boolean
  }

  export type ConfirmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "postId" | "confirm", ExtArgs["result"]["confirm"]>
  export type ConfirmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $ConfirmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Confirm"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      postId: number
      confirm: boolean
    }, ExtArgs["result"]["confirm"]>
    composites: {}
  }

  type ConfirmGetPayload<S extends boolean | null | undefined | ConfirmDefaultArgs> = $Result.GetResult<Prisma.$ConfirmPayload, S>

  type ConfirmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmCountAggregateInputType | true
    }

  export interface ConfirmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Confirm'], meta: { name: 'Confirm' } }
    /**
     * Find zero or one Confirm that matches the filter.
     * @param {ConfirmFindUniqueArgs} args - Arguments to find a Confirm
     * @example
     * // Get one Confirm
     * const confirm = await prisma.confirm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmFindUniqueArgs>(args: SelectSubset<T, ConfirmFindUniqueArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Confirm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmFindUniqueOrThrowArgs} args - Arguments to find a Confirm
     * @example
     * // Get one Confirm
     * const confirm = await prisma.confirm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Confirm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmFindFirstArgs} args - Arguments to find a Confirm
     * @example
     * // Get one Confirm
     * const confirm = await prisma.confirm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmFindFirstArgs>(args?: SelectSubset<T, ConfirmFindFirstArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Confirm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmFindFirstOrThrowArgs} args - Arguments to find a Confirm
     * @example
     * // Get one Confirm
     * const confirm = await prisma.confirm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Confirms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Confirms
     * const confirms = await prisma.confirm.findMany()
     * 
     * // Get first 10 Confirms
     * const confirms = await prisma.confirm.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const confirmWithUserIdOnly = await prisma.confirm.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ConfirmFindManyArgs>(args?: SelectSubset<T, ConfirmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Confirm.
     * @param {ConfirmCreateArgs} args - Arguments to create a Confirm.
     * @example
     * // Create one Confirm
     * const Confirm = await prisma.confirm.create({
     *   data: {
     *     // ... data to create a Confirm
     *   }
     * })
     * 
     */
    create<T extends ConfirmCreateArgs>(args: SelectSubset<T, ConfirmCreateArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Confirms.
     * @param {ConfirmCreateManyArgs} args - Arguments to create many Confirms.
     * @example
     * // Create many Confirms
     * const confirm = await prisma.confirm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmCreateManyArgs>(args?: SelectSubset<T, ConfirmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Confirm.
     * @param {ConfirmDeleteArgs} args - Arguments to delete one Confirm.
     * @example
     * // Delete one Confirm
     * const Confirm = await prisma.confirm.delete({
     *   where: {
     *     // ... filter to delete one Confirm
     *   }
     * })
     * 
     */
    delete<T extends ConfirmDeleteArgs>(args: SelectSubset<T, ConfirmDeleteArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Confirm.
     * @param {ConfirmUpdateArgs} args - Arguments to update one Confirm.
     * @example
     * // Update one Confirm
     * const confirm = await prisma.confirm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmUpdateArgs>(args: SelectSubset<T, ConfirmUpdateArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Confirms.
     * @param {ConfirmDeleteManyArgs} args - Arguments to filter Confirms to delete.
     * @example
     * // Delete a few Confirms
     * const { count } = await prisma.confirm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmDeleteManyArgs>(args?: SelectSubset<T, ConfirmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Confirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Confirms
     * const confirm = await prisma.confirm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmUpdateManyArgs>(args: SelectSubset<T, ConfirmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Confirm.
     * @param {ConfirmUpsertArgs} args - Arguments to update or create a Confirm.
     * @example
     * // Update or create a Confirm
     * const confirm = await prisma.confirm.upsert({
     *   create: {
     *     // ... data to create a Confirm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Confirm we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmUpsertArgs>(args: SelectSubset<T, ConfirmUpsertArgs<ExtArgs>>): Prisma__ConfirmClient<$Result.GetResult<Prisma.$ConfirmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Confirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmCountArgs} args - Arguments to filter Confirms to count.
     * @example
     * // Count the number of Confirms
     * const count = await prisma.confirm.count({
     *   where: {
     *     // ... the filter for the Confirms we want to count
     *   }
     * })
    **/
    count<T extends ConfirmCountArgs>(
      args?: Subset<T, ConfirmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Confirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmAggregateArgs>(args: Subset<T, ConfirmAggregateArgs>): Prisma.PrismaPromise<GetConfirmAggregateType<T>>

    /**
     * Group by Confirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmGroupByArgs} args - Group by arguments.
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
      T extends ConfirmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Confirm model
   */
  readonly fields: ConfirmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Confirm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Confirm model
   */
  interface ConfirmFieldRefs {
    readonly userId: FieldRef<"Confirm", 'Int'>
    readonly postId: FieldRef<"Confirm", 'Int'>
    readonly confirm: FieldRef<"Confirm", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Confirm findUnique
   */
  export type ConfirmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter, which Confirm to fetch.
     */
    where: ConfirmWhereUniqueInput
  }

  /**
   * Confirm findUniqueOrThrow
   */
  export type ConfirmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter, which Confirm to fetch.
     */
    where: ConfirmWhereUniqueInput
  }

  /**
   * Confirm findFirst
   */
  export type ConfirmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter, which Confirm to fetch.
     */
    where?: ConfirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confirms to fetch.
     */
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Confirms.
     */
    cursor?: ConfirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Confirms.
     */
    distinct?: ConfirmScalarFieldEnum | ConfirmScalarFieldEnum[]
  }

  /**
   * Confirm findFirstOrThrow
   */
  export type ConfirmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter, which Confirm to fetch.
     */
    where?: ConfirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confirms to fetch.
     */
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Confirms.
     */
    cursor?: ConfirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Confirms.
     */
    distinct?: ConfirmScalarFieldEnum | ConfirmScalarFieldEnum[]
  }

  /**
   * Confirm findMany
   */
  export type ConfirmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter, which Confirms to fetch.
     */
    where?: ConfirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confirms to fetch.
     */
    orderBy?: ConfirmOrderByWithRelationInput | ConfirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Confirms.
     */
    cursor?: ConfirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confirms.
     */
    skip?: number
    distinct?: ConfirmScalarFieldEnum | ConfirmScalarFieldEnum[]
  }

  /**
   * Confirm create
   */
  export type ConfirmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * The data needed to create a Confirm.
     */
    data: XOR<ConfirmCreateInput, ConfirmUncheckedCreateInput>
  }

  /**
   * Confirm createMany
   */
  export type ConfirmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Confirms.
     */
    data: ConfirmCreateManyInput | ConfirmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Confirm update
   */
  export type ConfirmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * The data needed to update a Confirm.
     */
    data: XOR<ConfirmUpdateInput, ConfirmUncheckedUpdateInput>
    /**
     * Choose, which Confirm to update.
     */
    where: ConfirmWhereUniqueInput
  }

  /**
   * Confirm updateMany
   */
  export type ConfirmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Confirms.
     */
    data: XOR<ConfirmUpdateManyMutationInput, ConfirmUncheckedUpdateManyInput>
    /**
     * Filter which Confirms to update
     */
    where?: ConfirmWhereInput
    /**
     * Limit how many Confirms to update.
     */
    limit?: number
  }

  /**
   * Confirm upsert
   */
  export type ConfirmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * The filter to search for the Confirm to update in case it exists.
     */
    where: ConfirmWhereUniqueInput
    /**
     * In case the Confirm found by the `where` argument doesn't exist, create a new Confirm with this data.
     */
    create: XOR<ConfirmCreateInput, ConfirmUncheckedCreateInput>
    /**
     * In case the Confirm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmUpdateInput, ConfirmUncheckedUpdateInput>
  }

  /**
   * Confirm delete
   */
  export type ConfirmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
    /**
     * Filter which Confirm to delete.
     */
    where: ConfirmWhereUniqueInput
  }

  /**
   * Confirm deleteMany
   */
  export type ConfirmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Confirms to delete
     */
    where?: ConfirmWhereInput
    /**
     * Limit how many Confirms to delete.
     */
    limit?: number
  }

  /**
   * Confirm without action
   */
  export type ConfirmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confirm
     */
    select?: ConfirmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confirm
     */
    omit?: ConfirmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    surname: 'surname',
    department: 'department',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    start_time: 'start_time',
    end_time: 'end_time',
    post_date: 'post_date',
    created_at: 'created_at',
    doctorId: 'doctorId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const ConfirmScalarFieldEnum: {
    userId: 'userId',
    postId: 'postId',
    confirm: 'confirm'
  };

  export type ConfirmScalarFieldEnum = (typeof ConfirmScalarFieldEnum)[keyof typeof ConfirmScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    username: 'username',
    surname: 'surname',
    department: 'department',
    email: 'email',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const PostsOrderByRelevanceFieldEnum: {
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type PostsOrderByRelevanceFieldEnum = (typeof PostsOrderByRelevanceFieldEnum)[keyof typeof PostsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    surname?: StringFilter<"Users"> | string
    department?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    posts?: PostsListRelationFilter
    confirms?: ConfirmListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    department?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    posts?: PostsOrderByRelationAggregateInput
    confirms?: ConfirmOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    surname?: StringFilter<"Users"> | string
    department?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    posts?: PostsListRelationFilter
    confirms?: ConfirmListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    department?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    surname?: StringWithAggregatesFilter<"Users"> | string
    department?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    role?: EnumRolesWithAggregatesFilter<"Users"> | $Enums.Roles
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    start_time?: StringFilter<"Posts"> | string
    end_time?: StringFilter<"Posts"> | string
    post_date?: DateTimeFilter<"Posts"> | Date | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
    doctorId?: IntFilter<"Posts"> | number
    doctor?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    confirms?: ConfirmListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    post_date?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
    doctor?: UsersOrderByWithRelationInput
    confirms?: ConfirmOrderByRelationAggregateInput
    _relevance?: PostsOrderByRelevanceInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    start_time?: StringFilter<"Posts"> | string
    end_time?: StringFilter<"Posts"> | string
    post_date?: DateTimeFilter<"Posts"> | Date | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
    doctorId?: IntFilter<"Posts"> | number
    doctor?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    confirms?: ConfirmListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    post_date?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    start_time?: StringWithAggregatesFilter<"Posts"> | string
    end_time?: StringWithAggregatesFilter<"Posts"> | string
    post_date?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    doctorId?: IntWithAggregatesFilter<"Posts"> | number
  }

  export type ConfirmWhereInput = {
    AND?: ConfirmWhereInput | ConfirmWhereInput[]
    OR?: ConfirmWhereInput[]
    NOT?: ConfirmWhereInput | ConfirmWhereInput[]
    userId?: IntFilter<"Confirm"> | number
    postId?: IntFilter<"Confirm"> | number
    confirm?: BoolFilter<"Confirm"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type ConfirmOrderByWithRelationInput = {
    userId?: SortOrder
    postId?: SortOrder
    confirm?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type ConfirmWhereUniqueInput = Prisma.AtLeast<{
    userId_postId?: ConfirmUserIdPostIdCompoundUniqueInput
    AND?: ConfirmWhereInput | ConfirmWhereInput[]
    OR?: ConfirmWhereInput[]
    NOT?: ConfirmWhereInput | ConfirmWhereInput[]
    userId?: IntFilter<"Confirm"> | number
    postId?: IntFilter<"Confirm"> | number
    confirm?: BoolFilter<"Confirm"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "userId_postId">

  export type ConfirmOrderByWithAggregationInput = {
    userId?: SortOrder
    postId?: SortOrder
    confirm?: SortOrder
    _count?: ConfirmCountOrderByAggregateInput
    _avg?: ConfirmAvgOrderByAggregateInput
    _max?: ConfirmMaxOrderByAggregateInput
    _min?: ConfirmMinOrderByAggregateInput
    _sum?: ConfirmSumOrderByAggregateInput
  }

  export type ConfirmScalarWhereWithAggregatesInput = {
    AND?: ConfirmScalarWhereWithAggregatesInput | ConfirmScalarWhereWithAggregatesInput[]
    OR?: ConfirmScalarWhereWithAggregatesInput[]
    NOT?: ConfirmScalarWhereWithAggregatesInput | ConfirmScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Confirm"> | number
    postId?: IntWithAggregatesFilter<"Confirm"> | number
    confirm?: BoolWithAggregatesFilter<"Confirm"> | boolean
  }

  export type UsersCreateInput = {
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    posts?: PostsCreateNestedManyWithoutDoctorInput
    confirms?: ConfirmCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    posts?: PostsUncheckedCreateNestedManyWithoutDoctorInput
    confirms?: ConfirmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    posts?: PostsUpdateManyWithoutDoctorNestedInput
    confirms?: ConfirmUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    posts?: PostsUncheckedUpdateManyWithoutDoctorNestedInput
    confirms?: ConfirmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type PostsCreateInput = {
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    doctor: UsersCreateNestedOneWithoutPostsInput
    confirms?: ConfirmCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    doctorId: number
    confirms?: ConfirmUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UsersUpdateOneRequiredWithoutPostsNestedInput
    confirms?: ConfirmUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    confirms?: ConfirmUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: number
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    doctorId: number
  }

  export type PostsUpdateManyMutationInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmCreateInput = {
    confirm?: boolean
    user: UsersCreateNestedOneWithoutConfirmsInput
    post: PostsCreateNestedOneWithoutConfirmsInput
  }

  export type ConfirmUncheckedCreateInput = {
    userId: number
    postId: number
    confirm?: boolean
  }

  export type ConfirmUpdateInput = {
    confirm?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutConfirmsNestedInput
    post?: PostsUpdateOneRequiredWithoutConfirmsNestedInput
  }

  export type ConfirmUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmCreateManyInput = {
    userId: number
    postId: number
    confirm?: boolean
  }

  export type ConfirmUpdateManyMutationInput = {
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type ConfirmListRelationFilter = {
    every?: ConfirmWhereInput
    some?: ConfirmWhereInput
    none?: ConfirmWhereInput
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfirmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    department?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    department?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    department?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PostsOrderByRelevanceInput = {
    fields: PostsOrderByRelevanceFieldEnum | PostsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    post_date?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    post_date?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    post_date?: SortOrder
    created_at?: SortOrder
    doctorId?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type ConfirmUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type ConfirmCountOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    confirm?: SortOrder
  }

  export type ConfirmAvgOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type ConfirmMaxOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    confirm?: SortOrder
  }

  export type ConfirmMinOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
    confirm?: SortOrder
  }

  export type ConfirmSumOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput> | PostsCreateWithoutDoctorInput[] | PostsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutDoctorInput | PostsCreateOrConnectWithoutDoctorInput[]
    createMany?: PostsCreateManyDoctorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ConfirmCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput> | ConfirmCreateWithoutUserInput[] | ConfirmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutUserInput | ConfirmCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmCreateManyUserInputEnvelope
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput> | PostsCreateWithoutDoctorInput[] | PostsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutDoctorInput | PostsCreateOrConnectWithoutDoctorInput[]
    createMany?: PostsCreateManyDoctorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ConfirmUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput> | ConfirmCreateWithoutUserInput[] | ConfirmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutUserInput | ConfirmCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmCreateManyUserInputEnvelope
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type PostsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput> | PostsCreateWithoutDoctorInput[] | PostsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutDoctorInput | PostsCreateOrConnectWithoutDoctorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutDoctorInput | PostsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PostsCreateManyDoctorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutDoctorInput | PostsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutDoctorInput | PostsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ConfirmUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput> | ConfirmCreateWithoutUserInput[] | ConfirmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutUserInput | ConfirmCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmUpsertWithWhereUniqueWithoutUserInput | ConfirmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmCreateManyUserInputEnvelope
    set?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    disconnect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    delete?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    update?: ConfirmUpdateWithWhereUniqueWithoutUserInput | ConfirmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmUpdateManyWithWhereWithoutUserInput | ConfirmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput> | PostsCreateWithoutDoctorInput[] | PostsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutDoctorInput | PostsCreateOrConnectWithoutDoctorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutDoctorInput | PostsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PostsCreateManyDoctorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutDoctorInput | PostsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutDoctorInput | PostsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ConfirmUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput> | ConfirmCreateWithoutUserInput[] | ConfirmUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutUserInput | ConfirmCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmUpsertWithWhereUniqueWithoutUserInput | ConfirmUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmCreateManyUserInputEnvelope
    set?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    disconnect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    delete?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    update?: ConfirmUpdateWithWhereUniqueWithoutUserInput | ConfirmUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmUpdateManyWithWhereWithoutUserInput | ConfirmUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type ConfirmCreateNestedManyWithoutPostInput = {
    create?: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput> | ConfirmCreateWithoutPostInput[] | ConfirmUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutPostInput | ConfirmCreateOrConnectWithoutPostInput[]
    createMany?: ConfirmCreateManyPostInputEnvelope
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
  }

  export type ConfirmUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput> | ConfirmCreateWithoutPostInput[] | ConfirmUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutPostInput | ConfirmCreateOrConnectWithoutPostInput[]
    createMany?: ConfirmCreateManyPostInputEnvelope
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    upsert?: UsersUpsertWithoutPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPostsInput, UsersUpdateWithoutPostsInput>, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type ConfirmUpdateManyWithoutPostNestedInput = {
    create?: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput> | ConfirmCreateWithoutPostInput[] | ConfirmUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutPostInput | ConfirmCreateOrConnectWithoutPostInput[]
    upsert?: ConfirmUpsertWithWhereUniqueWithoutPostInput | ConfirmUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ConfirmCreateManyPostInputEnvelope
    set?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    disconnect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    delete?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    update?: ConfirmUpdateWithWhereUniqueWithoutPostInput | ConfirmUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ConfirmUpdateManyWithWhereWithoutPostInput | ConfirmUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
  }

  export type ConfirmUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput> | ConfirmCreateWithoutPostInput[] | ConfirmUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ConfirmCreateOrConnectWithoutPostInput | ConfirmCreateOrConnectWithoutPostInput[]
    upsert?: ConfirmUpsertWithWhereUniqueWithoutPostInput | ConfirmUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ConfirmCreateManyPostInputEnvelope
    set?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    disconnect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    delete?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    connect?: ConfirmWhereUniqueInput | ConfirmWhereUniqueInput[]
    update?: ConfirmUpdateWithWhereUniqueWithoutPostInput | ConfirmUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ConfirmUpdateManyWithWhereWithoutPostInput | ConfirmUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutConfirmsInput = {
    create?: XOR<UsersCreateWithoutConfirmsInput, UsersUncheckedCreateWithoutConfirmsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConfirmsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutConfirmsInput = {
    create?: XOR<PostsCreateWithoutConfirmsInput, PostsUncheckedCreateWithoutConfirmsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutConfirmsInput
    connect?: PostsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutConfirmsNestedInput = {
    create?: XOR<UsersCreateWithoutConfirmsInput, UsersUncheckedCreateWithoutConfirmsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutConfirmsInput
    upsert?: UsersUpsertWithoutConfirmsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutConfirmsInput, UsersUpdateWithoutConfirmsInput>, UsersUncheckedUpdateWithoutConfirmsInput>
  }

  export type PostsUpdateOneRequiredWithoutConfirmsNestedInput = {
    create?: XOR<PostsCreateWithoutConfirmsInput, PostsUncheckedCreateWithoutConfirmsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutConfirmsInput
    upsert?: PostsUpsertWithoutConfirmsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutConfirmsInput, PostsUpdateWithoutConfirmsInput>, PostsUncheckedUpdateWithoutConfirmsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostsCreateWithoutDoctorInput = {
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    confirms?: ConfirmCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutDoctorInput = {
    id?: number
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    confirms?: ConfirmUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutDoctorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput>
  }

  export type PostsCreateManyDoctorInputEnvelope = {
    data: PostsCreateManyDoctorInput | PostsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ConfirmCreateWithoutUserInput = {
    confirm?: boolean
    post: PostsCreateNestedOneWithoutConfirmsInput
  }

  export type ConfirmUncheckedCreateWithoutUserInput = {
    postId: number
    confirm?: boolean
  }

  export type ConfirmCreateOrConnectWithoutUserInput = {
    where: ConfirmWhereUniqueInput
    create: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput>
  }

  export type ConfirmCreateManyUserInputEnvelope = {
    data: ConfirmCreateManyUserInput | ConfirmCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutDoctorInput, PostsUncheckedUpdateWithoutDoctorInput>
    create: XOR<PostsCreateWithoutDoctorInput, PostsUncheckedCreateWithoutDoctorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutDoctorInput, PostsUncheckedUpdateWithoutDoctorInput>
  }

  export type PostsUpdateManyWithWhereWithoutDoctorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: IntFilter<"Posts"> | number
    start_time?: StringFilter<"Posts"> | string
    end_time?: StringFilter<"Posts"> | string
    post_date?: DateTimeFilter<"Posts"> | Date | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
    doctorId?: IntFilter<"Posts"> | number
  }

  export type ConfirmUpsertWithWhereUniqueWithoutUserInput = {
    where: ConfirmWhereUniqueInput
    update: XOR<ConfirmUpdateWithoutUserInput, ConfirmUncheckedUpdateWithoutUserInput>
    create: XOR<ConfirmCreateWithoutUserInput, ConfirmUncheckedCreateWithoutUserInput>
  }

  export type ConfirmUpdateWithWhereUniqueWithoutUserInput = {
    where: ConfirmWhereUniqueInput
    data: XOR<ConfirmUpdateWithoutUserInput, ConfirmUncheckedUpdateWithoutUserInput>
  }

  export type ConfirmUpdateManyWithWhereWithoutUserInput = {
    where: ConfirmScalarWhereInput
    data: XOR<ConfirmUpdateManyMutationInput, ConfirmUncheckedUpdateManyWithoutUserInput>
  }

  export type ConfirmScalarWhereInput = {
    AND?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
    OR?: ConfirmScalarWhereInput[]
    NOT?: ConfirmScalarWhereInput | ConfirmScalarWhereInput[]
    userId?: IntFilter<"Confirm"> | number
    postId?: IntFilter<"Confirm"> | number
    confirm?: BoolFilter<"Confirm"> | boolean
  }

  export type UsersCreateWithoutPostsInput = {
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    confirms?: ConfirmCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    confirms?: ConfirmUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
  }

  export type ConfirmCreateWithoutPostInput = {
    confirm?: boolean
    user: UsersCreateNestedOneWithoutConfirmsInput
  }

  export type ConfirmUncheckedCreateWithoutPostInput = {
    userId: number
    confirm?: boolean
  }

  export type ConfirmCreateOrConnectWithoutPostInput = {
    where: ConfirmWhereUniqueInput
    create: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput>
  }

  export type ConfirmCreateManyPostInputEnvelope = {
    data: ConfirmCreateManyPostInput | ConfirmCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPostsInput = {
    update: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type UsersUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    confirms?: ConfirmUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    confirms?: ConfirmUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConfirmUpsertWithWhereUniqueWithoutPostInput = {
    where: ConfirmWhereUniqueInput
    update: XOR<ConfirmUpdateWithoutPostInput, ConfirmUncheckedUpdateWithoutPostInput>
    create: XOR<ConfirmCreateWithoutPostInput, ConfirmUncheckedCreateWithoutPostInput>
  }

  export type ConfirmUpdateWithWhereUniqueWithoutPostInput = {
    where: ConfirmWhereUniqueInput
    data: XOR<ConfirmUpdateWithoutPostInput, ConfirmUncheckedUpdateWithoutPostInput>
  }

  export type ConfirmUpdateManyWithWhereWithoutPostInput = {
    where: ConfirmScalarWhereInput
    data: XOR<ConfirmUpdateManyMutationInput, ConfirmUncheckedUpdateManyWithoutPostInput>
  }

  export type UsersCreateWithoutConfirmsInput = {
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    posts?: PostsCreateNestedManyWithoutDoctorInput
  }

  export type UsersUncheckedCreateWithoutConfirmsInput = {
    id?: number
    username: string
    surname: string
    department: string
    email: string
    password: string
    created_at?: Date | string
    role: $Enums.Roles
    posts?: PostsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UsersCreateOrConnectWithoutConfirmsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutConfirmsInput, UsersUncheckedCreateWithoutConfirmsInput>
  }

  export type PostsCreateWithoutConfirmsInput = {
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    doctor: UsersCreateNestedOneWithoutPostsInput
  }

  export type PostsUncheckedCreateWithoutConfirmsInput = {
    id?: number
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
    doctorId: number
  }

  export type PostsCreateOrConnectWithoutConfirmsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutConfirmsInput, PostsUncheckedCreateWithoutConfirmsInput>
  }

  export type UsersUpsertWithoutConfirmsInput = {
    update: XOR<UsersUpdateWithoutConfirmsInput, UsersUncheckedUpdateWithoutConfirmsInput>
    create: XOR<UsersCreateWithoutConfirmsInput, UsersUncheckedCreateWithoutConfirmsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutConfirmsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutConfirmsInput, UsersUncheckedUpdateWithoutConfirmsInput>
  }

  export type UsersUpdateWithoutConfirmsInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    posts?: PostsUpdateManyWithoutDoctorNestedInput
  }

  export type UsersUncheckedUpdateWithoutConfirmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    posts?: PostsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PostsUpsertWithoutConfirmsInput = {
    update: XOR<PostsUpdateWithoutConfirmsInput, PostsUncheckedUpdateWithoutConfirmsInput>
    create: XOR<PostsCreateWithoutConfirmsInput, PostsUncheckedCreateWithoutConfirmsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutConfirmsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutConfirmsInput, PostsUncheckedUpdateWithoutConfirmsInput>
  }

  export type PostsUpdateWithoutConfirmsInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UsersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostsUncheckedUpdateWithoutConfirmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostsCreateManyDoctorInput = {
    id?: number
    start_time: string
    end_time: string
    post_date: Date | string
    created_at?: Date | string
  }

  export type ConfirmCreateManyUserInput = {
    postId: number
    confirm?: boolean
  }

  export type PostsUpdateWithoutDoctorInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    confirms?: ConfirmUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    confirms?: ConfirmUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    post_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmUpdateWithoutUserInput = {
    confirm?: BoolFieldUpdateOperationsInput | boolean
    post?: PostsUpdateOneRequiredWithoutConfirmsNestedInput
  }

  export type ConfirmUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmUncheckedUpdateManyWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmCreateManyPostInput = {
    userId: number
    confirm?: boolean
  }

  export type ConfirmUpdateWithoutPostInput = {
    confirm?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutConfirmsNestedInput
  }

  export type ConfirmUncheckedUpdateWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConfirmUncheckedUpdateManyWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
    confirm?: BoolFieldUpdateOperationsInput | boolean
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