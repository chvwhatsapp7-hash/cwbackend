
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageReceipt
 * 
 */
export type MessageReceipt = $Result.DefaultSelection<Prisma.$MessageReceiptPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateButton
 * 
 */
export type TemplateButton = $Result.DefaultSelection<Prisma.$TemplateButtonPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.messageReceipt`: Exposes CRUD operations for the **MessageReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReceipts
    * const messageReceipts = await prisma.messageReceipt.findMany()
    * ```
    */
  get messageReceipt(): Prisma.MessageReceiptDelegate<ExtArgs>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs>;

  /**
   * `prisma.templateButton`: Exposes CRUD operations for the **TemplateButton** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateButtons
    * const templateButtons = await prisma.templateButton.findMany()
    * ```
    */
  get templateButton(): Prisma.TemplateButtonDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Campaign: 'Campaign',
    Contact: 'Contact',
    Message: 'Message',
    MessageReceipt: 'MessageReceipt',
    Template: 'Template',
    TemplateButton: 'TemplateButton'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "campaign" | "contact" | "message" | "messageReceipt" | "template" | "templateButton"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageReceipt: {
        payload: Prisma.$MessageReceiptPayload<ExtArgs>
        fields: Prisma.MessageReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          findFirst: {
            args: Prisma.MessageReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          findMany: {
            args: Prisma.MessageReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>[]
          }
          create: {
            args: Prisma.MessageReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          createMany: {
            args: Prisma.MessageReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>[]
          }
          delete: {
            args: Prisma.MessageReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          update: {
            args: Prisma.MessageReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          deleteMany: {
            args: Prisma.MessageReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageReceiptPayload>
          }
          aggregate: {
            args: Prisma.MessageReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageReceipt>
          }
          groupBy: {
            args: Prisma.MessageReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<MessageReceiptCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateButton: {
        payload: Prisma.$TemplateButtonPayload<ExtArgs>
        fields: Prisma.TemplateButtonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateButtonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateButtonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          findFirst: {
            args: Prisma.TemplateButtonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateButtonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          findMany: {
            args: Prisma.TemplateButtonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>[]
          }
          create: {
            args: Prisma.TemplateButtonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          createMany: {
            args: Prisma.TemplateButtonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateButtonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>[]
          }
          delete: {
            args: Prisma.TemplateButtonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          update: {
            args: Prisma.TemplateButtonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          deleteMany: {
            args: Prisma.TemplateButtonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateButtonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateButtonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateButtonPayload>
          }
          aggregate: {
            args: Prisma.TemplateButtonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateButton>
          }
          groupBy: {
            args: Prisma.TemplateButtonGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateButtonGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateButtonCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateButtonCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    campaigns: number
    contacts: number
    messages: number
    templates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    messages: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | CampaignCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    receipts: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | ContactCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReceiptWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    receipts: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | MessageCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReceiptWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    buttons: number
    receipts: number
    campaigns: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buttons?: boolean | TemplateCountOutputTypeCountButtonsArgs
    receipts?: boolean | TemplateCountOutputTypeCountReceiptsArgs
    campaigns?: boolean | TemplateCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountButtonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateButtonWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReceiptWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: bigint | null
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: bigint | null
    first_name: string | null
    last_name: string | null
    email: string | null
    whatsapp_number: string | null
    website: string | null
    country: string | null
    gst_num: string | null
    password: string | null
    business_name: string | null
    role: string | null
    api_key: string | null
    status: number | null
    isPremium: boolean | null
    created_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: bigint | null
    first_name: string | null
    last_name: string | null
    email: string | null
    whatsapp_number: string | null
    website: string | null
    country: string | null
    gst_num: string | null
    password: string | null
    business_name: string | null
    role: string | null
    api_key: string | null
    status: number | null
    isPremium: boolean | null
    created_by: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    first_name: number
    last_name: number
    email: number
    whatsapp_number: number
    website: number
    country: number
    gst_num: number
    password: number
    business_name: number
    role: number
    api_key: number
    status: number
    isPremium: number
    created_by: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    status?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    status?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    whatsapp_number?: true
    website?: true
    country?: true
    gst_num?: true
    password?: true
    business_name?: true
    role?: true
    api_key?: true
    status?: true
    isPremium?: true
    created_by?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    whatsapp_number?: true
    website?: true
    country?: true
    gst_num?: true
    password?: true
    business_name?: true
    role?: true
    api_key?: true
    status?: true
    isPremium?: true
    created_by?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    whatsapp_number?: true
    website?: true
    country?: true
    gst_num?: true
    password?: true
    business_name?: true
    role?: true
    api_key?: true
    status?: true
    isPremium?: true
    created_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: bigint
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website: string | null
    country: string | null
    gst_num: string
    password: string
    business_name: string | null
    role: string
    api_key: string | null
    status: number | null
    isPremium: boolean
    created_by: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    whatsapp_number?: boolean
    website?: boolean
    country?: boolean
    gst_num?: boolean
    password?: boolean
    business_name?: boolean
    role?: boolean
    api_key?: boolean
    status?: boolean
    isPremium?: boolean
    created_by?: boolean
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    whatsapp_number?: boolean
    website?: boolean
    country?: boolean
    gst_num?: boolean
    password?: boolean
    business_name?: boolean
    role?: boolean
    api_key?: boolean
    status?: boolean
    isPremium?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    whatsapp_number?: boolean
    website?: boolean
    country?: boolean
    gst_num?: boolean
    password?: boolean
    business_name?: boolean
    role?: boolean
    api_key?: boolean
    status?: boolean
    isPremium?: boolean
    created_by?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      first_name: string
      last_name: string
      email: string
      whatsapp_number: string
      website: string | null
      country: string | null
      gst_num: string
      password: string
      business_name: string | null
      role: string
      api_key: string | null
      status: number | null
      isPremium: boolean
      created_by: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'BigInt'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly whatsapp_number: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly gst_num: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly business_name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly api_key: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly created_by: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    campaignid: number | null
    userid: number | null
    templateid: number | null
  }

  export type CampaignSumAggregateOutputType = {
    campaignid: bigint | null
    userid: bigint | null
    templateid: bigint | null
  }

  export type CampaignMinAggregateOutputType = {
    campaignid: bigint | null
    userid: bigint | null
    campaign_name: string | null
    templateid: bigint | null
    createdON: Date | null
    status: boolean | null
  }

  export type CampaignMaxAggregateOutputType = {
    campaignid: bigint | null
    userid: bigint | null
    campaign_name: string | null
    templateid: bigint | null
    createdON: Date | null
    status: boolean | null
  }

  export type CampaignCountAggregateOutputType = {
    campaignid: number
    userid: number
    campaign_name: number
    templateid: number
    createdON: number
    status: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    campaignid?: true
    userid?: true
    templateid?: true
  }

  export type CampaignSumAggregateInputType = {
    campaignid?: true
    userid?: true
    templateid?: true
  }

  export type CampaignMinAggregateInputType = {
    campaignid?: true
    userid?: true
    campaign_name?: true
    templateid?: true
    createdON?: true
    status?: true
  }

  export type CampaignMaxAggregateInputType = {
    campaignid?: true
    userid?: true
    campaign_name?: true
    templateid?: true
    createdON?: true
    status?: true
  }

  export type CampaignCountAggregateInputType = {
    campaignid?: true
    userid?: true
    campaign_name?: true
    templateid?: true
    createdON?: true
    status?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    campaignid: bigint
    userid: bigint
    campaign_name: string
    templateid: bigint
    createdON: Date
    status: boolean
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaignid?: boolean
    userid?: boolean
    campaign_name?: boolean
    templateid?: boolean
    createdON?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    messages?: boolean | Campaign$messagesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaignid?: boolean
    userid?: boolean
    campaign_name?: boolean
    templateid?: boolean
    createdON?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    campaignid?: boolean
    userid?: boolean
    campaign_name?: boolean
    templateid?: boolean
    createdON?: boolean
    status?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    messages?: boolean | Campaign$messagesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      campaignid: bigint
      userid: bigint
      campaign_name: string
      templateid: bigint
      createdON: Date
      status: boolean
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `campaignid`
     * const campaignWithCampaignidOnly = await prisma.campaign.findMany({ select: { campaignid: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `campaignid`
     * const campaignWithCampaignidOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { campaignid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messages<T extends Campaign$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly campaignid: FieldRef<"Campaign", 'BigInt'>
    readonly userid: FieldRef<"Campaign", 'BigInt'>
    readonly campaign_name: FieldRef<"Campaign", 'String'>
    readonly templateid: FieldRef<"Campaign", 'BigInt'>
    readonly createdON: FieldRef<"Campaign", 'DateTime'>
    readonly status: FieldRef<"Campaign", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign.messages
   */
  export type Campaign$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    contactid: number | null
    userid: number | null
  }

  export type ContactSumAggregateOutputType = {
    contactid: bigint | null
    userid: bigint | null
  }

  export type ContactMinAggregateOutputType = {
    contactid: bigint | null
    name: string | null
    phonenum: string | null
    userid: bigint | null
    created_at: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    contactid: bigint | null
    name: string | null
    phonenum: string | null
    userid: bigint | null
    created_at: Date | null
  }

  export type ContactCountAggregateOutputType = {
    contactid: number
    name: number
    phonenum: number
    userid: number
    created_at: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    contactid?: true
    userid?: true
  }

  export type ContactSumAggregateInputType = {
    contactid?: true
    userid?: true
  }

  export type ContactMinAggregateInputType = {
    contactid?: true
    name?: true
    phonenum?: true
    userid?: true
    created_at?: true
  }

  export type ContactMaxAggregateInputType = {
    contactid?: true
    name?: true
    phonenum?: true
    userid?: true
    created_at?: true
  }

  export type ContactCountAggregateInputType = {
    contactid?: true
    name?: true
    phonenum?: true
    userid?: true
    created_at?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    contactid: bigint
    name: string | null
    phonenum: string | null
    userid: bigint | null
    created_at: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactid?: boolean
    name?: boolean
    phonenum?: boolean
    userid?: boolean
    created_at?: boolean
    user?: boolean | Contact$userArgs<ExtArgs>
    receipts?: boolean | Contact$receiptsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contactid?: boolean
    name?: boolean
    phonenum?: boolean
    userid?: boolean
    created_at?: boolean
    user?: boolean | Contact$userArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    contactid?: boolean
    name?: boolean
    phonenum?: boolean
    userid?: boolean
    created_at?: boolean
  }

  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Contact$userArgs<ExtArgs>
    receipts?: boolean | Contact$receiptsArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Contact$userArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      receipts: Prisma.$MessageReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      contactid: bigint
      name: string | null
      phonenum: string | null
      userid: bigint | null
      created_at: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `contactid`
     * const contactWithContactidOnly = await prisma.contact.findMany({ select: { contactid: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `contactid`
     * const contactWithContactidOnly = await prisma.contact.createManyAndReturn({ 
     *   select: { contactid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Contact$userArgs<ExtArgs> = {}>(args?: Subset<T, Contact$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    receipts<T extends Contact$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly contactid: FieldRef<"Contact", 'BigInt'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly phonenum: FieldRef<"Contact", 'String'>
    readonly userid: FieldRef<"Contact", 'BigInt'>
    readonly created_at: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data?: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }

  /**
   * Contact.user
   */
  export type Contact$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Contact.receipts
   */
  export type Contact$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    where?: MessageReceiptWhereInput
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    cursor?: MessageReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    messageid: number | null
    campaignid: number | null
    user_id: number | null
  }

  export type MessageSumAggregateOutputType = {
    messageid: bigint | null
    campaignid: bigint | null
    user_id: bigint | null
  }

  export type MessageMinAggregateOutputType = {
    messageid: bigint | null
    message: string | null
    image: string | null
    campaignid: bigint | null
    user_id: bigint | null
    button: string | null
    created_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    messageid: bigint | null
    message: string | null
    image: string | null
    campaignid: bigint | null
    user_id: bigint | null
    button: string | null
    created_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    messageid: number
    message: number
    image: number
    campaignid: number
    user_id: number
    button: number
    created_at: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    messageid?: true
    campaignid?: true
    user_id?: true
  }

  export type MessageSumAggregateInputType = {
    messageid?: true
    campaignid?: true
    user_id?: true
  }

  export type MessageMinAggregateInputType = {
    messageid?: true
    message?: true
    image?: true
    campaignid?: true
    user_id?: true
    button?: true
    created_at?: true
  }

  export type MessageMaxAggregateInputType = {
    messageid?: true
    message?: true
    image?: true
    campaignid?: true
    user_id?: true
    button?: true
    created_at?: true
  }

  export type MessageCountAggregateInputType = {
    messageid?: true
    message?: true
    image?: true
    campaignid?: true
    user_id?: true
    button?: true
    created_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    messageid: bigint
    message: string
    image: string | null
    campaignid: bigint | null
    user_id: bigint
    button: string | null
    created_at: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageid?: boolean
    message?: boolean
    image?: boolean
    campaignid?: boolean
    user_id?: boolean
    button?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | Message$campaignArgs<ExtArgs>
    receipts?: boolean | Message$receiptsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageid?: boolean
    message?: boolean
    image?: boolean
    campaignid?: boolean
    user_id?: boolean
    button?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | Message$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    messageid?: boolean
    message?: boolean
    image?: boolean
    campaignid?: boolean
    user_id?: boolean
    button?: boolean
    created_at?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | Message$campaignArgs<ExtArgs>
    receipts?: boolean | Message$receiptsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | Message$campaignArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
      receipts: Prisma.$MessageReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      messageid: bigint
      message: string
      image: string | null
      campaignid: bigint | null
      user_id: bigint
      button: string | null
      created_at: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `messageid`
     * const messageWithMessageidOnly = await prisma.message.findMany({ select: { messageid: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `messageid`
     * const messageWithMessageidOnly = await prisma.message.createManyAndReturn({ 
     *   select: { messageid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    campaign<T extends Message$campaignArgs<ExtArgs> = {}>(args?: Subset<T, Message$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    receipts<T extends Message$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Message$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly messageid: FieldRef<"Message", 'BigInt'>
    readonly message: FieldRef<"Message", 'String'>
    readonly image: FieldRef<"Message", 'String'>
    readonly campaignid: FieldRef<"Message", 'BigInt'>
    readonly user_id: FieldRef<"Message", 'BigInt'>
    readonly button: FieldRef<"Message", 'String'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message.campaign
   */
  export type Message$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * Message.receipts
   */
  export type Message$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    where?: MessageReceiptWhereInput
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    cursor?: MessageReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageReceipt
   */

  export type AggregateMessageReceipt = {
    _count: MessageReceiptCountAggregateOutputType | null
    _avg: MessageReceiptAvgAggregateOutputType | null
    _sum: MessageReceiptSumAggregateOutputType | null
    _min: MessageReceiptMinAggregateOutputType | null
    _max: MessageReceiptMaxAggregateOutputType | null
  }

  export type MessageReceiptAvgAggregateOutputType = {
    sentid: number | null
    messageid: number | null
    contactid: number | null
    template_id: number | null
  }

  export type MessageReceiptSumAggregateOutputType = {
    sentid: bigint | null
    messageid: bigint | null
    contactid: bigint | null
    template_id: bigint | null
  }

  export type MessageReceiptMinAggregateOutputType = {
    sentid: bigint | null
    messageid: bigint | null
    contactid: bigint | null
    template_id: bigint | null
    provider_msg_id: string | null
    status: string | null
    sent_at: Date | null
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
  }

  export type MessageReceiptMaxAggregateOutputType = {
    sentid: bigint | null
    messageid: bigint | null
    contactid: bigint | null
    template_id: bigint | null
    provider_msg_id: string | null
    status: string | null
    sent_at: Date | null
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
  }

  export type MessageReceiptCountAggregateOutputType = {
    sentid: number
    messageid: number
    contactid: number
    template_id: number
    provider_msg_id: number
    status: number
    sent_at: number
    delivered_at: number
    read_at: number
    error_message: number
    _all: number
  }


  export type MessageReceiptAvgAggregateInputType = {
    sentid?: true
    messageid?: true
    contactid?: true
    template_id?: true
  }

  export type MessageReceiptSumAggregateInputType = {
    sentid?: true
    messageid?: true
    contactid?: true
    template_id?: true
  }

  export type MessageReceiptMinAggregateInputType = {
    sentid?: true
    messageid?: true
    contactid?: true
    template_id?: true
    provider_msg_id?: true
    status?: true
    sent_at?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
  }

  export type MessageReceiptMaxAggregateInputType = {
    sentid?: true
    messageid?: true
    contactid?: true
    template_id?: true
    provider_msg_id?: true
    status?: true
    sent_at?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
  }

  export type MessageReceiptCountAggregateInputType = {
    sentid?: true
    messageid?: true
    contactid?: true
    template_id?: true
    provider_msg_id?: true
    status?: true
    sent_at?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
    _all?: true
  }

  export type MessageReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReceipt to aggregate.
     */
    where?: MessageReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReceipts to fetch.
     */
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReceipts
    **/
    _count?: true | MessageReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReceiptMaxAggregateInputType
  }

  export type GetMessageReceiptAggregateType<T extends MessageReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageReceipt[P]>
      : GetScalarType<T[P], AggregateMessageReceipt[P]>
  }




  export type MessageReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageReceiptWhereInput
    orderBy?: MessageReceiptOrderByWithAggregationInput | MessageReceiptOrderByWithAggregationInput[]
    by: MessageReceiptScalarFieldEnum[] | MessageReceiptScalarFieldEnum
    having?: MessageReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReceiptCountAggregateInputType | true
    _avg?: MessageReceiptAvgAggregateInputType
    _sum?: MessageReceiptSumAggregateInputType
    _min?: MessageReceiptMinAggregateInputType
    _max?: MessageReceiptMaxAggregateInputType
  }

  export type MessageReceiptGroupByOutputType = {
    sentid: bigint
    messageid: bigint
    contactid: bigint
    template_id: bigint | null
    provider_msg_id: string | null
    status: string
    sent_at: Date
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
    _count: MessageReceiptCountAggregateOutputType | null
    _avg: MessageReceiptAvgAggregateOutputType | null
    _sum: MessageReceiptSumAggregateOutputType | null
    _min: MessageReceiptMinAggregateOutputType | null
    _max: MessageReceiptMaxAggregateOutputType | null
  }

  type GetMessageReceiptGroupByPayload<T extends MessageReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReceiptGroupByOutputType[P]>
        }
      >
    >


  export type MessageReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sentid?: boolean
    messageid?: boolean
    contactid?: boolean
    template_id?: boolean
    provider_msg_id?: boolean
    status?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    template?: boolean | MessageReceipt$templateArgs<ExtArgs>
  }, ExtArgs["result"]["messageReceipt"]>

  export type MessageReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sentid?: boolean
    messageid?: boolean
    contactid?: boolean
    template_id?: boolean
    provider_msg_id?: boolean
    status?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    template?: boolean | MessageReceipt$templateArgs<ExtArgs>
  }, ExtArgs["result"]["messageReceipt"]>

  export type MessageReceiptSelectScalar = {
    sentid?: boolean
    messageid?: boolean
    contactid?: boolean
    template_id?: boolean
    provider_msg_id?: boolean
    status?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
  }

  export type MessageReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    template?: boolean | MessageReceipt$templateArgs<ExtArgs>
  }
  export type MessageReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    template?: boolean | MessageReceipt$templateArgs<ExtArgs>
  }

  export type $MessageReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageReceipt"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      sentid: bigint
      messageid: bigint
      contactid: bigint
      template_id: bigint | null
      provider_msg_id: string | null
      status: string
      sent_at: Date
      delivered_at: Date | null
      read_at: Date | null
      error_message: string | null
    }, ExtArgs["result"]["messageReceipt"]>
    composites: {}
  }

  type MessageReceiptGetPayload<S extends boolean | null | undefined | MessageReceiptDefaultArgs> = $Result.GetResult<Prisma.$MessageReceiptPayload, S>

  type MessageReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageReceiptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageReceiptCountAggregateInputType | true
    }

  export interface MessageReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageReceipt'], meta: { name: 'MessageReceipt' } }
    /**
     * Find zero or one MessageReceipt that matches the filter.
     * @param {MessageReceiptFindUniqueArgs} args - Arguments to find a MessageReceipt
     * @example
     * // Get one MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageReceiptFindUniqueArgs>(args: SelectSubset<T, MessageReceiptFindUniqueArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MessageReceipt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageReceiptFindUniqueOrThrowArgs} args - Arguments to find a MessageReceipt
     * @example
     * // Get one MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MessageReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptFindFirstArgs} args - Arguments to find a MessageReceipt
     * @example
     * // Get one MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageReceiptFindFirstArgs>(args?: SelectSubset<T, MessageReceiptFindFirstArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MessageReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptFindFirstOrThrowArgs} args - Arguments to find a MessageReceipt
     * @example
     * // Get one MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MessageReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReceipts
     * const messageReceipts = await prisma.messageReceipt.findMany()
     * 
     * // Get first 10 MessageReceipts
     * const messageReceipts = await prisma.messageReceipt.findMany({ take: 10 })
     * 
     * // Only select the `sentid`
     * const messageReceiptWithSentidOnly = await prisma.messageReceipt.findMany({ select: { sentid: true } })
     * 
     */
    findMany<T extends MessageReceiptFindManyArgs>(args?: SelectSubset<T, MessageReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MessageReceipt.
     * @param {MessageReceiptCreateArgs} args - Arguments to create a MessageReceipt.
     * @example
     * // Create one MessageReceipt
     * const MessageReceipt = await prisma.messageReceipt.create({
     *   data: {
     *     // ... data to create a MessageReceipt
     *   }
     * })
     * 
     */
    create<T extends MessageReceiptCreateArgs>(args: SelectSubset<T, MessageReceiptCreateArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MessageReceipts.
     * @param {MessageReceiptCreateManyArgs} args - Arguments to create many MessageReceipts.
     * @example
     * // Create many MessageReceipts
     * const messageReceipt = await prisma.messageReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageReceiptCreateManyArgs>(args?: SelectSubset<T, MessageReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageReceipts and returns the data saved in the database.
     * @param {MessageReceiptCreateManyAndReturnArgs} args - Arguments to create many MessageReceipts.
     * @example
     * // Create many MessageReceipts
     * const messageReceipt = await prisma.messageReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageReceipts and only return the `sentid`
     * const messageReceiptWithSentidOnly = await prisma.messageReceipt.createManyAndReturn({ 
     *   select: { sentid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MessageReceipt.
     * @param {MessageReceiptDeleteArgs} args - Arguments to delete one MessageReceipt.
     * @example
     * // Delete one MessageReceipt
     * const MessageReceipt = await prisma.messageReceipt.delete({
     *   where: {
     *     // ... filter to delete one MessageReceipt
     *   }
     * })
     * 
     */
    delete<T extends MessageReceiptDeleteArgs>(args: SelectSubset<T, MessageReceiptDeleteArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MessageReceipt.
     * @param {MessageReceiptUpdateArgs} args - Arguments to update one MessageReceipt.
     * @example
     * // Update one MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageReceiptUpdateArgs>(args: SelectSubset<T, MessageReceiptUpdateArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MessageReceipts.
     * @param {MessageReceiptDeleteManyArgs} args - Arguments to filter MessageReceipts to delete.
     * @example
     * // Delete a few MessageReceipts
     * const { count } = await prisma.messageReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageReceiptDeleteManyArgs>(args?: SelectSubset<T, MessageReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReceipts
     * const messageReceipt = await prisma.messageReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageReceiptUpdateManyArgs>(args: SelectSubset<T, MessageReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageReceipt.
     * @param {MessageReceiptUpsertArgs} args - Arguments to update or create a MessageReceipt.
     * @example
     * // Update or create a MessageReceipt
     * const messageReceipt = await prisma.messageReceipt.upsert({
     *   create: {
     *     // ... data to create a MessageReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageReceipt we want to update
     *   }
     * })
     */
    upsert<T extends MessageReceiptUpsertArgs>(args: SelectSubset<T, MessageReceiptUpsertArgs<ExtArgs>>): Prisma__MessageReceiptClient<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MessageReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptCountArgs} args - Arguments to filter MessageReceipts to count.
     * @example
     * // Count the number of MessageReceipts
     * const count = await prisma.messageReceipt.count({
     *   where: {
     *     // ... the filter for the MessageReceipts we want to count
     *   }
     * })
    **/
    count<T extends MessageReceiptCountArgs>(
      args?: Subset<T, MessageReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageReceiptAggregateArgs>(args: Subset<T, MessageReceiptAggregateArgs>): Prisma.PrismaPromise<GetMessageReceiptAggregateType<T>>

    /**
     * Group by MessageReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReceiptGroupByArgs} args - Group by arguments.
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
      T extends MessageReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReceiptGroupByArgs['orderBy'] }
        : { orderBy?: MessageReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageReceipt model
   */
  readonly fields: MessageReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    template<T extends MessageReceipt$templateArgs<ExtArgs> = {}>(args?: Subset<T, MessageReceipt$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the MessageReceipt model
   */ 
  interface MessageReceiptFieldRefs {
    readonly sentid: FieldRef<"MessageReceipt", 'BigInt'>
    readonly messageid: FieldRef<"MessageReceipt", 'BigInt'>
    readonly contactid: FieldRef<"MessageReceipt", 'BigInt'>
    readonly template_id: FieldRef<"MessageReceipt", 'BigInt'>
    readonly provider_msg_id: FieldRef<"MessageReceipt", 'String'>
    readonly status: FieldRef<"MessageReceipt", 'String'>
    readonly sent_at: FieldRef<"MessageReceipt", 'DateTime'>
    readonly delivered_at: FieldRef<"MessageReceipt", 'DateTime'>
    readonly read_at: FieldRef<"MessageReceipt", 'DateTime'>
    readonly error_message: FieldRef<"MessageReceipt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageReceipt findUnique
   */
  export type MessageReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter, which MessageReceipt to fetch.
     */
    where: MessageReceiptWhereUniqueInput
  }

  /**
   * MessageReceipt findUniqueOrThrow
   */
  export type MessageReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter, which MessageReceipt to fetch.
     */
    where: MessageReceiptWhereUniqueInput
  }

  /**
   * MessageReceipt findFirst
   */
  export type MessageReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter, which MessageReceipt to fetch.
     */
    where?: MessageReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReceipts to fetch.
     */
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReceipts.
     */
    cursor?: MessageReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReceipts.
     */
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * MessageReceipt findFirstOrThrow
   */
  export type MessageReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter, which MessageReceipt to fetch.
     */
    where?: MessageReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReceipts to fetch.
     */
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReceipts.
     */
    cursor?: MessageReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReceipts.
     */
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * MessageReceipt findMany
   */
  export type MessageReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter, which MessageReceipts to fetch.
     */
    where?: MessageReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReceipts to fetch.
     */
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReceipts.
     */
    cursor?: MessageReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReceipts.
     */
    skip?: number
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * MessageReceipt create
   */
  export type MessageReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageReceipt.
     */
    data: XOR<MessageReceiptCreateInput, MessageReceiptUncheckedCreateInput>
  }

  /**
   * MessageReceipt createMany
   */
  export type MessageReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReceipts.
     */
    data: MessageReceiptCreateManyInput | MessageReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageReceipt createManyAndReturn
   */
  export type MessageReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MessageReceipts.
     */
    data: MessageReceiptCreateManyInput | MessageReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageReceipt update
   */
  export type MessageReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageReceipt.
     */
    data: XOR<MessageReceiptUpdateInput, MessageReceiptUncheckedUpdateInput>
    /**
     * Choose, which MessageReceipt to update.
     */
    where: MessageReceiptWhereUniqueInput
  }

  /**
   * MessageReceipt updateMany
   */
  export type MessageReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReceipts.
     */
    data: XOR<MessageReceiptUpdateManyMutationInput, MessageReceiptUncheckedUpdateManyInput>
    /**
     * Filter which MessageReceipts to update
     */
    where?: MessageReceiptWhereInput
  }

  /**
   * MessageReceipt upsert
   */
  export type MessageReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageReceipt to update in case it exists.
     */
    where: MessageReceiptWhereUniqueInput
    /**
     * In case the MessageReceipt found by the `where` argument doesn't exist, create a new MessageReceipt with this data.
     */
    create: XOR<MessageReceiptCreateInput, MessageReceiptUncheckedCreateInput>
    /**
     * In case the MessageReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReceiptUpdateInput, MessageReceiptUncheckedUpdateInput>
  }

  /**
   * MessageReceipt delete
   */
  export type MessageReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    /**
     * Filter which MessageReceipt to delete.
     */
    where: MessageReceiptWhereUniqueInput
  }

  /**
   * MessageReceipt deleteMany
   */
  export type MessageReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReceipts to delete
     */
    where?: MessageReceiptWhereInput
  }

  /**
   * MessageReceipt.template
   */
  export type MessageReceipt$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * MessageReceipt without action
   */
  export type MessageReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    template_id: number | null
    created_by: number | null
    variable_count: number | null
  }

  export type TemplateSumAggregateOutputType = {
    template_id: bigint | null
    created_by: bigint | null
    variable_count: number | null
  }

  export type TemplateMinAggregateOutputType = {
    template_id: bigint | null
    created_by: bigint | null
    template_name: string | null
    category: string | null
    language: string | null
    template_type: string | null
    header_type: string | null
    header_text: string | null
    header_media_url: string | null
    message_body: string | null
    footer_text: string | null
    variable_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    template_id: bigint | null
    created_by: bigint | null
    template_name: string | null
    category: string | null
    language: string | null
    template_type: string | null
    header_type: string | null
    header_text: string | null
    header_media_url: string | null
    message_body: string | null
    footer_text: string | null
    variable_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    template_id: number
    created_by: number
    template_name: number
    category: number
    language: number
    template_type: number
    header_type: number
    header_text: number
    header_media_url: number
    message_body: number
    footer_text: number
    variable_count: number
    variables: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    template_id?: true
    created_by?: true
    variable_count?: true
  }

  export type TemplateSumAggregateInputType = {
    template_id?: true
    created_by?: true
    variable_count?: true
  }

  export type TemplateMinAggregateInputType = {
    template_id?: true
    created_by?: true
    template_name?: true
    category?: true
    language?: true
    template_type?: true
    header_type?: true
    header_text?: true
    header_media_url?: true
    message_body?: true
    footer_text?: true
    variable_count?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplateMaxAggregateInputType = {
    template_id?: true
    created_by?: true
    template_name?: true
    category?: true
    language?: true
    template_type?: true
    header_type?: true
    header_text?: true
    header_media_url?: true
    message_body?: true
    footer_text?: true
    variable_count?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplateCountAggregateInputType = {
    template_id?: true
    created_by?: true
    template_name?: true
    category?: true
    language?: true
    template_type?: true
    header_type?: true
    header_text?: true
    header_media_url?: true
    message_body?: true
    footer_text?: true
    variable_count?: true
    variables?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    template_id: bigint
    created_by: bigint
    template_name: string
    category: string
    language: string
    template_type: string
    header_type: string | null
    header_text: string | null
    header_media_url: string | null
    message_body: string
    footer_text: string | null
    variable_count: number
    variables: JsonValue | null
    created_at: Date
    updated_at: Date | null
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    template_id?: boolean
    created_by?: boolean
    template_name?: boolean
    category?: boolean
    language?: boolean
    template_type?: boolean
    header_type?: boolean
    header_text?: boolean
    header_media_url?: boolean
    message_body?: boolean
    footer_text?: boolean
    variable_count?: boolean
    variables?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    buttons?: boolean | Template$buttonsArgs<ExtArgs>
    receipts?: boolean | Template$receiptsArgs<ExtArgs>
    campaigns?: boolean | Template$campaignsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    template_id?: boolean
    created_by?: boolean
    template_name?: boolean
    category?: boolean
    language?: boolean
    template_type?: boolean
    header_type?: boolean
    header_text?: boolean
    header_media_url?: boolean
    message_body?: boolean
    footer_text?: boolean
    variable_count?: boolean
    variables?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    template_id?: boolean
    created_by?: boolean
    template_name?: boolean
    category?: boolean
    language?: boolean
    template_type?: boolean
    header_type?: boolean
    header_text?: boolean
    header_media_url?: boolean
    message_body?: boolean
    footer_text?: boolean
    variable_count?: boolean
    variables?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    buttons?: boolean | Template$buttonsArgs<ExtArgs>
    receipts?: boolean | Template$receiptsArgs<ExtArgs>
    campaigns?: boolean | Template$campaignsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buttons: Prisma.$TemplateButtonPayload<ExtArgs>[]
      receipts: Prisma.$MessageReceiptPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      template_id: bigint
      created_by: bigint
      template_name: string
      category: string
      language: string
      template_type: string
      header_type: string | null
      header_text: string | null
      header_media_url: string | null
      message_body: string
      footer_text: string | null
      variable_count: number
      variables: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `template_id`
     * const templateWithTemplate_idOnly = await prisma.template.findMany({ select: { template_id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `template_id`
     * const templateWithTemplate_idOnly = await prisma.template.createManyAndReturn({ 
     *   select: { template_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    buttons<T extends Template$buttonsArgs<ExtArgs> = {}>(args?: Subset<T, Template$buttonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findMany"> | Null>
    receipts<T extends Template$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Template$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReceiptPayload<ExtArgs>, T, "findMany"> | Null>
    campaigns<T extends Template$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Template$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Template model
   */ 
  interface TemplateFieldRefs {
    readonly template_id: FieldRef<"Template", 'BigInt'>
    readonly created_by: FieldRef<"Template", 'BigInt'>
    readonly template_name: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
    readonly language: FieldRef<"Template", 'String'>
    readonly template_type: FieldRef<"Template", 'String'>
    readonly header_type: FieldRef<"Template", 'String'>
    readonly header_text: FieldRef<"Template", 'String'>
    readonly header_media_url: FieldRef<"Template", 'String'>
    readonly message_body: FieldRef<"Template", 'String'>
    readonly footer_text: FieldRef<"Template", 'String'>
    readonly variable_count: FieldRef<"Template", 'Int'>
    readonly variables: FieldRef<"Template", 'Json'>
    readonly created_at: FieldRef<"Template", 'DateTime'>
    readonly updated_at: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
  }

  /**
   * Template.buttons
   */
  export type Template$buttonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    where?: TemplateButtonWhereInput
    orderBy?: TemplateButtonOrderByWithRelationInput | TemplateButtonOrderByWithRelationInput[]
    cursor?: TemplateButtonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateButtonScalarFieldEnum | TemplateButtonScalarFieldEnum[]
  }

  /**
   * Template.receipts
   */
  export type Template$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReceipt
     */
    select?: MessageReceiptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageReceiptInclude<ExtArgs> | null
    where?: MessageReceiptWhereInput
    orderBy?: MessageReceiptOrderByWithRelationInput | MessageReceiptOrderByWithRelationInput[]
    cursor?: MessageReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReceiptScalarFieldEnum | MessageReceiptScalarFieldEnum[]
  }

  /**
   * Template.campaigns
   */
  export type Template$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateButton
   */

  export type AggregateTemplateButton = {
    _count: TemplateButtonCountAggregateOutputType | null
    _avg: TemplateButtonAvgAggregateOutputType | null
    _sum: TemplateButtonSumAggregateOutputType | null
    _min: TemplateButtonMinAggregateOutputType | null
    _max: TemplateButtonMaxAggregateOutputType | null
  }

  export type TemplateButtonAvgAggregateOutputType = {
    button_id: number | null
    template_id: number | null
    position: number | null
  }

  export type TemplateButtonSumAggregateOutputType = {
    button_id: number | null
    template_id: bigint | null
    position: number | null
  }

  export type TemplateButtonMinAggregateOutputType = {
    button_id: number | null
    template_id: bigint | null
    button_type: string | null
    button_text: string | null
    button_value: string | null
    position: number | null
    created_at: Date | null
  }

  export type TemplateButtonMaxAggregateOutputType = {
    button_id: number | null
    template_id: bigint | null
    button_type: string | null
    button_text: string | null
    button_value: string | null
    position: number | null
    created_at: Date | null
  }

  export type TemplateButtonCountAggregateOutputType = {
    button_id: number
    template_id: number
    button_type: number
    button_text: number
    button_value: number
    position: number
    created_at: number
    _all: number
  }


  export type TemplateButtonAvgAggregateInputType = {
    button_id?: true
    template_id?: true
    position?: true
  }

  export type TemplateButtonSumAggregateInputType = {
    button_id?: true
    template_id?: true
    position?: true
  }

  export type TemplateButtonMinAggregateInputType = {
    button_id?: true
    template_id?: true
    button_type?: true
    button_text?: true
    button_value?: true
    position?: true
    created_at?: true
  }

  export type TemplateButtonMaxAggregateInputType = {
    button_id?: true
    template_id?: true
    button_type?: true
    button_text?: true
    button_value?: true
    position?: true
    created_at?: true
  }

  export type TemplateButtonCountAggregateInputType = {
    button_id?: true
    template_id?: true
    button_type?: true
    button_text?: true
    button_value?: true
    position?: true
    created_at?: true
    _all?: true
  }

  export type TemplateButtonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateButton to aggregate.
     */
    where?: TemplateButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateButtons to fetch.
     */
    orderBy?: TemplateButtonOrderByWithRelationInput | TemplateButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateButtons
    **/
    _count?: true | TemplateButtonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateButtonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateButtonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateButtonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateButtonMaxAggregateInputType
  }

  export type GetTemplateButtonAggregateType<T extends TemplateButtonAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateButton]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateButton[P]>
      : GetScalarType<T[P], AggregateTemplateButton[P]>
  }




  export type TemplateButtonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateButtonWhereInput
    orderBy?: TemplateButtonOrderByWithAggregationInput | TemplateButtonOrderByWithAggregationInput[]
    by: TemplateButtonScalarFieldEnum[] | TemplateButtonScalarFieldEnum
    having?: TemplateButtonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateButtonCountAggregateInputType | true
    _avg?: TemplateButtonAvgAggregateInputType
    _sum?: TemplateButtonSumAggregateInputType
    _min?: TemplateButtonMinAggregateInputType
    _max?: TemplateButtonMaxAggregateInputType
  }

  export type TemplateButtonGroupByOutputType = {
    button_id: number
    template_id: bigint
    button_type: string
    button_text: string
    button_value: string | null
    position: number
    created_at: Date
    _count: TemplateButtonCountAggregateOutputType | null
    _avg: TemplateButtonAvgAggregateOutputType | null
    _sum: TemplateButtonSumAggregateOutputType | null
    _min: TemplateButtonMinAggregateOutputType | null
    _max: TemplateButtonMaxAggregateOutputType | null
  }

  type GetTemplateButtonGroupByPayload<T extends TemplateButtonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateButtonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateButtonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateButtonGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateButtonGroupByOutputType[P]>
        }
      >
    >


  export type TemplateButtonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    button_id?: boolean
    template_id?: boolean
    button_type?: boolean
    button_text?: boolean
    button_value?: boolean
    position?: boolean
    created_at?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateButton"]>

  export type TemplateButtonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    button_id?: boolean
    template_id?: boolean
    button_type?: boolean
    button_text?: boolean
    button_value?: boolean
    position?: boolean
    created_at?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateButton"]>

  export type TemplateButtonSelectScalar = {
    button_id?: boolean
    template_id?: boolean
    button_type?: boolean
    button_text?: boolean
    button_value?: boolean
    position?: boolean
    created_at?: boolean
  }

  export type TemplateButtonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateButtonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateButtonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateButton"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      button_id: number
      template_id: bigint
      button_type: string
      button_text: string
      button_value: string | null
      position: number
      created_at: Date
    }, ExtArgs["result"]["templateButton"]>
    composites: {}
  }

  type TemplateButtonGetPayload<S extends boolean | null | undefined | TemplateButtonDefaultArgs> = $Result.GetResult<Prisma.$TemplateButtonPayload, S>

  type TemplateButtonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateButtonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateButtonCountAggregateInputType | true
    }

  export interface TemplateButtonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateButton'], meta: { name: 'TemplateButton' } }
    /**
     * Find zero or one TemplateButton that matches the filter.
     * @param {TemplateButtonFindUniqueArgs} args - Arguments to find a TemplateButton
     * @example
     * // Get one TemplateButton
     * const templateButton = await prisma.templateButton.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateButtonFindUniqueArgs>(args: SelectSubset<T, TemplateButtonFindUniqueArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TemplateButton that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateButtonFindUniqueOrThrowArgs} args - Arguments to find a TemplateButton
     * @example
     * // Get one TemplateButton
     * const templateButton = await prisma.templateButton.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateButtonFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateButtonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TemplateButton that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonFindFirstArgs} args - Arguments to find a TemplateButton
     * @example
     * // Get one TemplateButton
     * const templateButton = await prisma.templateButton.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateButtonFindFirstArgs>(args?: SelectSubset<T, TemplateButtonFindFirstArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TemplateButton that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonFindFirstOrThrowArgs} args - Arguments to find a TemplateButton
     * @example
     * // Get one TemplateButton
     * const templateButton = await prisma.templateButton.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateButtonFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateButtonFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TemplateButtons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateButtons
     * const templateButtons = await prisma.templateButton.findMany()
     * 
     * // Get first 10 TemplateButtons
     * const templateButtons = await prisma.templateButton.findMany({ take: 10 })
     * 
     * // Only select the `button_id`
     * const templateButtonWithButton_idOnly = await prisma.templateButton.findMany({ select: { button_id: true } })
     * 
     */
    findMany<T extends TemplateButtonFindManyArgs>(args?: SelectSubset<T, TemplateButtonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TemplateButton.
     * @param {TemplateButtonCreateArgs} args - Arguments to create a TemplateButton.
     * @example
     * // Create one TemplateButton
     * const TemplateButton = await prisma.templateButton.create({
     *   data: {
     *     // ... data to create a TemplateButton
     *   }
     * })
     * 
     */
    create<T extends TemplateButtonCreateArgs>(args: SelectSubset<T, TemplateButtonCreateArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TemplateButtons.
     * @param {TemplateButtonCreateManyArgs} args - Arguments to create many TemplateButtons.
     * @example
     * // Create many TemplateButtons
     * const templateButton = await prisma.templateButton.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateButtonCreateManyArgs>(args?: SelectSubset<T, TemplateButtonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateButtons and returns the data saved in the database.
     * @param {TemplateButtonCreateManyAndReturnArgs} args - Arguments to create many TemplateButtons.
     * @example
     * // Create many TemplateButtons
     * const templateButton = await prisma.templateButton.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateButtons and only return the `button_id`
     * const templateButtonWithButton_idOnly = await prisma.templateButton.createManyAndReturn({ 
     *   select: { button_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateButtonCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateButtonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TemplateButton.
     * @param {TemplateButtonDeleteArgs} args - Arguments to delete one TemplateButton.
     * @example
     * // Delete one TemplateButton
     * const TemplateButton = await prisma.templateButton.delete({
     *   where: {
     *     // ... filter to delete one TemplateButton
     *   }
     * })
     * 
     */
    delete<T extends TemplateButtonDeleteArgs>(args: SelectSubset<T, TemplateButtonDeleteArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TemplateButton.
     * @param {TemplateButtonUpdateArgs} args - Arguments to update one TemplateButton.
     * @example
     * // Update one TemplateButton
     * const templateButton = await prisma.templateButton.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateButtonUpdateArgs>(args: SelectSubset<T, TemplateButtonUpdateArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TemplateButtons.
     * @param {TemplateButtonDeleteManyArgs} args - Arguments to filter TemplateButtons to delete.
     * @example
     * // Delete a few TemplateButtons
     * const { count } = await prisma.templateButton.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateButtonDeleteManyArgs>(args?: SelectSubset<T, TemplateButtonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateButtons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateButtons
     * const templateButton = await prisma.templateButton.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateButtonUpdateManyArgs>(args: SelectSubset<T, TemplateButtonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateButton.
     * @param {TemplateButtonUpsertArgs} args - Arguments to update or create a TemplateButton.
     * @example
     * // Update or create a TemplateButton
     * const templateButton = await prisma.templateButton.upsert({
     *   create: {
     *     // ... data to create a TemplateButton
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateButton we want to update
     *   }
     * })
     */
    upsert<T extends TemplateButtonUpsertArgs>(args: SelectSubset<T, TemplateButtonUpsertArgs<ExtArgs>>): Prisma__TemplateButtonClient<$Result.GetResult<Prisma.$TemplateButtonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TemplateButtons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonCountArgs} args - Arguments to filter TemplateButtons to count.
     * @example
     * // Count the number of TemplateButtons
     * const count = await prisma.templateButton.count({
     *   where: {
     *     // ... the filter for the TemplateButtons we want to count
     *   }
     * })
    **/
    count<T extends TemplateButtonCountArgs>(
      args?: Subset<T, TemplateButtonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateButtonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateButton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateButtonAggregateArgs>(args: Subset<T, TemplateButtonAggregateArgs>): Prisma.PrismaPromise<GetTemplateButtonAggregateType<T>>

    /**
     * Group by TemplateButton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateButtonGroupByArgs} args - Group by arguments.
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
      T extends TemplateButtonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateButtonGroupByArgs['orderBy'] }
        : { orderBy?: TemplateButtonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateButtonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateButtonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateButton model
   */
  readonly fields: TemplateButtonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateButton.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateButtonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TemplateButton model
   */ 
  interface TemplateButtonFieldRefs {
    readonly button_id: FieldRef<"TemplateButton", 'Int'>
    readonly template_id: FieldRef<"TemplateButton", 'BigInt'>
    readonly button_type: FieldRef<"TemplateButton", 'String'>
    readonly button_text: FieldRef<"TemplateButton", 'String'>
    readonly button_value: FieldRef<"TemplateButton", 'String'>
    readonly position: FieldRef<"TemplateButton", 'Int'>
    readonly created_at: FieldRef<"TemplateButton", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateButton findUnique
   */
  export type TemplateButtonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter, which TemplateButton to fetch.
     */
    where: TemplateButtonWhereUniqueInput
  }

  /**
   * TemplateButton findUniqueOrThrow
   */
  export type TemplateButtonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter, which TemplateButton to fetch.
     */
    where: TemplateButtonWhereUniqueInput
  }

  /**
   * TemplateButton findFirst
   */
  export type TemplateButtonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter, which TemplateButton to fetch.
     */
    where?: TemplateButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateButtons to fetch.
     */
    orderBy?: TemplateButtonOrderByWithRelationInput | TemplateButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateButtons.
     */
    cursor?: TemplateButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateButtons.
     */
    distinct?: TemplateButtonScalarFieldEnum | TemplateButtonScalarFieldEnum[]
  }

  /**
   * TemplateButton findFirstOrThrow
   */
  export type TemplateButtonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter, which TemplateButton to fetch.
     */
    where?: TemplateButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateButtons to fetch.
     */
    orderBy?: TemplateButtonOrderByWithRelationInput | TemplateButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateButtons.
     */
    cursor?: TemplateButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateButtons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateButtons.
     */
    distinct?: TemplateButtonScalarFieldEnum | TemplateButtonScalarFieldEnum[]
  }

  /**
   * TemplateButton findMany
   */
  export type TemplateButtonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter, which TemplateButtons to fetch.
     */
    where?: TemplateButtonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateButtons to fetch.
     */
    orderBy?: TemplateButtonOrderByWithRelationInput | TemplateButtonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateButtons.
     */
    cursor?: TemplateButtonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateButtons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateButtons.
     */
    skip?: number
    distinct?: TemplateButtonScalarFieldEnum | TemplateButtonScalarFieldEnum[]
  }

  /**
   * TemplateButton create
   */
  export type TemplateButtonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateButton.
     */
    data: XOR<TemplateButtonCreateInput, TemplateButtonUncheckedCreateInput>
  }

  /**
   * TemplateButton createMany
   */
  export type TemplateButtonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateButtons.
     */
    data: TemplateButtonCreateManyInput | TemplateButtonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateButton createManyAndReturn
   */
  export type TemplateButtonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplateButtons.
     */
    data: TemplateButtonCreateManyInput | TemplateButtonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateButton update
   */
  export type TemplateButtonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateButton.
     */
    data: XOR<TemplateButtonUpdateInput, TemplateButtonUncheckedUpdateInput>
    /**
     * Choose, which TemplateButton to update.
     */
    where: TemplateButtonWhereUniqueInput
  }

  /**
   * TemplateButton updateMany
   */
  export type TemplateButtonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateButtons.
     */
    data: XOR<TemplateButtonUpdateManyMutationInput, TemplateButtonUncheckedUpdateManyInput>
    /**
     * Filter which TemplateButtons to update
     */
    where?: TemplateButtonWhereInput
  }

  /**
   * TemplateButton upsert
   */
  export type TemplateButtonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateButton to update in case it exists.
     */
    where: TemplateButtonWhereUniqueInput
    /**
     * In case the TemplateButton found by the `where` argument doesn't exist, create a new TemplateButton with this data.
     */
    create: XOR<TemplateButtonCreateInput, TemplateButtonUncheckedCreateInput>
    /**
     * In case the TemplateButton was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateButtonUpdateInput, TemplateButtonUncheckedUpdateInput>
  }

  /**
   * TemplateButton delete
   */
  export type TemplateButtonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
    /**
     * Filter which TemplateButton to delete.
     */
    where: TemplateButtonWhereUniqueInput
  }

  /**
   * TemplateButton deleteMany
   */
  export type TemplateButtonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateButtons to delete
     */
    where?: TemplateButtonWhereInput
  }

  /**
   * TemplateButton without action
   */
  export type TemplateButtonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateButton
     */
    select?: TemplateButtonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateButtonInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    whatsapp_number: 'whatsapp_number',
    website: 'website',
    country: 'country',
    gst_num: 'gst_num',
    password: 'password',
    business_name: 'business_name',
    role: 'role',
    api_key: 'api_key',
    status: 'status',
    isPremium: 'isPremium',
    created_by: 'created_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    campaignid: 'campaignid',
    userid: 'userid',
    campaign_name: 'campaign_name',
    templateid: 'templateid',
    createdON: 'createdON',
    status: 'status'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    contactid: 'contactid',
    name: 'name',
    phonenum: 'phonenum',
    userid: 'userid',
    created_at: 'created_at'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    messageid: 'messageid',
    message: 'message',
    image: 'image',
    campaignid: 'campaignid',
    user_id: 'user_id',
    button: 'button',
    created_at: 'created_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageReceiptScalarFieldEnum: {
    sentid: 'sentid',
    messageid: 'messageid',
    contactid: 'contactid',
    template_id: 'template_id',
    provider_msg_id: 'provider_msg_id',
    status: 'status',
    sent_at: 'sent_at',
    delivered_at: 'delivered_at',
    read_at: 'read_at',
    error_message: 'error_message'
  };

  export type MessageReceiptScalarFieldEnum = (typeof MessageReceiptScalarFieldEnum)[keyof typeof MessageReceiptScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    template_id: 'template_id',
    created_by: 'created_by',
    template_name: 'template_name',
    category: 'category',
    language: 'language',
    template_type: 'template_type',
    header_type: 'header_type',
    header_text: 'header_text',
    header_media_url: 'header_media_url',
    message_body: 'message_body',
    footer_text: 'footer_text',
    variable_count: 'variable_count',
    variables: 'variables',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateButtonScalarFieldEnum: {
    button_id: 'button_id',
    template_id: 'template_id',
    button_type: 'button_type',
    button_text: 'button_text',
    button_value: 'button_value',
    position: 'position',
    created_at: 'created_at'
  };

  export type TemplateButtonScalarFieldEnum = (typeof TemplateButtonScalarFieldEnum)[keyof typeof TemplateButtonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: BigIntFilter<"User"> | bigint | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    whatsapp_number?: StringFilter<"User"> | string
    website?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    gst_num?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    business_name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    api_key?: StringNullableFilter<"User"> | string | null
    status?: IntNullableFilter<"User"> | number | null
    isPremium?: BoolFilter<"User"> | boolean
    created_by?: StringNullableFilter<"User"> | string | null
    campaigns?: CampaignListRelationFilter
    contacts?: ContactListRelationFilter
    messages?: MessageListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    whatsapp_number?: SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    gst_num?: SortOrder
    password?: SortOrder
    business_name?: SortOrderInput | SortOrder
    role?: SortOrder
    api_key?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    created_by?: SortOrderInput | SortOrder
    campaigns?: CampaignOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number
    email?: string
    whatsapp_number?: string
    gst_num?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    website?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    business_name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    api_key?: StringNullableFilter<"User"> | string | null
    status?: IntNullableFilter<"User"> | number | null
    isPremium?: BoolFilter<"User"> | boolean
    created_by?: StringNullableFilter<"User"> | string | null
    campaigns?: CampaignListRelationFilter
    contacts?: ContactListRelationFilter
    messages?: MessageListRelationFilter
    templates?: TemplateListRelationFilter
  }, "user_id" | "email" | "whatsapp_number" | "gst_num">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    whatsapp_number?: SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    gst_num?: SortOrder
    password?: SortOrder
    business_name?: SortOrderInput | SortOrder
    role?: SortOrder
    api_key?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    whatsapp_number?: StringWithAggregatesFilter<"User"> | string
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    gst_num?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    business_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    api_key?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: IntNullableWithAggregatesFilter<"User"> | number | null
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    created_by?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    campaignid?: BigIntFilter<"Campaign"> | bigint | number
    userid?: BigIntFilter<"Campaign"> | bigint | number
    campaign_name?: StringFilter<"Campaign"> | string
    templateid?: BigIntFilter<"Campaign"> | bigint | number
    createdON?: DateTimeFilter<"Campaign"> | Date | string
    status?: BoolFilter<"Campaign"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>
    messages?: MessageListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    campaign_name?: SortOrder
    templateid?: SortOrder
    createdON?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    campaignid?: bigint | number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    userid?: BigIntFilter<"Campaign"> | bigint | number
    campaign_name?: StringFilter<"Campaign"> | string
    templateid?: BigIntFilter<"Campaign"> | bigint | number
    createdON?: DateTimeFilter<"Campaign"> | Date | string
    status?: BoolFilter<"Campaign"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>
    messages?: MessageListRelationFilter
  }, "campaignid">

  export type CampaignOrderByWithAggregationInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    campaign_name?: SortOrder
    templateid?: SortOrder
    createdON?: SortOrder
    status?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    campaignid?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    userid?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    campaign_name?: StringWithAggregatesFilter<"Campaign"> | string
    templateid?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    createdON?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    status?: BoolWithAggregatesFilter<"Campaign"> | boolean
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    contactid?: BigIntFilter<"Contact"> | bigint | number
    name?: StringNullableFilter<"Contact"> | string | null
    phonenum?: StringNullableFilter<"Contact"> | string | null
    userid?: BigIntNullableFilter<"Contact"> | bigint | number | null
    created_at?: DateTimeFilter<"Contact"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    receipts?: MessageReceiptListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    contactid?: SortOrder
    name?: SortOrderInput | SortOrder
    phonenum?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    receipts?: MessageReceiptOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    contactid?: bigint | number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringNullableFilter<"Contact"> | string | null
    phonenum?: StringNullableFilter<"Contact"> | string | null
    userid?: BigIntNullableFilter<"Contact"> | bigint | number | null
    created_at?: DateTimeFilter<"Contact"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    receipts?: MessageReceiptListRelationFilter
  }, "contactid">

  export type ContactOrderByWithAggregationInput = {
    contactid?: SortOrder
    name?: SortOrderInput | SortOrder
    phonenum?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    contactid?: BigIntWithAggregatesFilter<"Contact"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phonenum?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    userid?: BigIntNullableWithAggregatesFilter<"Contact"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    messageid?: BigIntFilter<"Message"> | bigint | number
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    campaignid?: BigIntNullableFilter<"Message"> | bigint | number | null
    user_id?: BigIntFilter<"Message"> | bigint | number
    button?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
    receipts?: MessageReceiptListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    messageid?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    campaignid?: SortOrderInput | SortOrder
    user_id?: SortOrder
    button?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    receipts?: MessageReceiptOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    messageid?: bigint | number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    campaignid?: BigIntNullableFilter<"Message"> | bigint | number | null
    user_id?: BigIntFilter<"Message"> | bigint | number
    button?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignNullableRelationFilter, CampaignWhereInput> | null
    receipts?: MessageReceiptListRelationFilter
  }, "messageid">

  export type MessageOrderByWithAggregationInput = {
    messageid?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    campaignid?: SortOrderInput | SortOrder
    user_id?: SortOrder
    button?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    messageid?: BigIntWithAggregatesFilter<"Message"> | bigint | number
    message?: StringWithAggregatesFilter<"Message"> | string
    image?: StringNullableWithAggregatesFilter<"Message"> | string | null
    campaignid?: BigIntNullableWithAggregatesFilter<"Message"> | bigint | number | null
    user_id?: BigIntWithAggregatesFilter<"Message"> | bigint | number
    button?: StringNullableWithAggregatesFilter<"Message"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageReceiptWhereInput = {
    AND?: MessageReceiptWhereInput | MessageReceiptWhereInput[]
    OR?: MessageReceiptWhereInput[]
    NOT?: MessageReceiptWhereInput | MessageReceiptWhereInput[]
    sentid?: BigIntFilter<"MessageReceipt"> | bigint | number
    messageid?: BigIntFilter<"MessageReceipt"> | bigint | number
    contactid?: BigIntFilter<"MessageReceipt"> | bigint | number
    template_id?: BigIntNullableFilter<"MessageReceipt"> | bigint | number | null
    provider_msg_id?: StringNullableFilter<"MessageReceipt"> | string | null
    status?: StringFilter<"MessageReceipt"> | string
    sent_at?: DateTimeFilter<"MessageReceipt"> | Date | string
    delivered_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    read_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    error_message?: StringNullableFilter<"MessageReceipt"> | string | null
    message?: XOR<MessageRelationFilter, MessageWhereInput>
    contact?: XOR<ContactRelationFilter, ContactWhereInput>
    template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
  }

  export type MessageReceiptOrderByWithRelationInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrderInput | SortOrder
    provider_msg_id?: SortOrderInput | SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    message?: MessageOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type MessageReceiptWhereUniqueInput = Prisma.AtLeast<{
    sentid?: bigint | number
    AND?: MessageReceiptWhereInput | MessageReceiptWhereInput[]
    OR?: MessageReceiptWhereInput[]
    NOT?: MessageReceiptWhereInput | MessageReceiptWhereInput[]
    messageid?: BigIntFilter<"MessageReceipt"> | bigint | number
    contactid?: BigIntFilter<"MessageReceipt"> | bigint | number
    template_id?: BigIntNullableFilter<"MessageReceipt"> | bigint | number | null
    provider_msg_id?: StringNullableFilter<"MessageReceipt"> | string | null
    status?: StringFilter<"MessageReceipt"> | string
    sent_at?: DateTimeFilter<"MessageReceipt"> | Date | string
    delivered_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    read_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    error_message?: StringNullableFilter<"MessageReceipt"> | string | null
    message?: XOR<MessageRelationFilter, MessageWhereInput>
    contact?: XOR<ContactRelationFilter, ContactWhereInput>
    template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
  }, "sentid">

  export type MessageReceiptOrderByWithAggregationInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrderInput | SortOrder
    provider_msg_id?: SortOrderInput | SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    _count?: MessageReceiptCountOrderByAggregateInput
    _avg?: MessageReceiptAvgOrderByAggregateInput
    _max?: MessageReceiptMaxOrderByAggregateInput
    _min?: MessageReceiptMinOrderByAggregateInput
    _sum?: MessageReceiptSumOrderByAggregateInput
  }

  export type MessageReceiptScalarWhereWithAggregatesInput = {
    AND?: MessageReceiptScalarWhereWithAggregatesInput | MessageReceiptScalarWhereWithAggregatesInput[]
    OR?: MessageReceiptScalarWhereWithAggregatesInput[]
    NOT?: MessageReceiptScalarWhereWithAggregatesInput | MessageReceiptScalarWhereWithAggregatesInput[]
    sentid?: BigIntWithAggregatesFilter<"MessageReceipt"> | bigint | number
    messageid?: BigIntWithAggregatesFilter<"MessageReceipt"> | bigint | number
    contactid?: BigIntWithAggregatesFilter<"MessageReceipt"> | bigint | number
    template_id?: BigIntNullableWithAggregatesFilter<"MessageReceipt"> | bigint | number | null
    provider_msg_id?: StringNullableWithAggregatesFilter<"MessageReceipt"> | string | null
    status?: StringWithAggregatesFilter<"MessageReceipt"> | string
    sent_at?: DateTimeWithAggregatesFilter<"MessageReceipt"> | Date | string
    delivered_at?: DateTimeNullableWithAggregatesFilter<"MessageReceipt"> | Date | string | null
    read_at?: DateTimeNullableWithAggregatesFilter<"MessageReceipt"> | Date | string | null
    error_message?: StringNullableWithAggregatesFilter<"MessageReceipt"> | string | null
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    template_id?: BigIntFilter<"Template"> | bigint | number
    created_by?: BigIntFilter<"Template"> | bigint | number
    template_name?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    language?: StringFilter<"Template"> | string
    template_type?: StringFilter<"Template"> | string
    header_type?: StringNullableFilter<"Template"> | string | null
    header_text?: StringNullableFilter<"Template"> | string | null
    header_media_url?: StringNullableFilter<"Template"> | string | null
    message_body?: StringFilter<"Template"> | string
    footer_text?: StringNullableFilter<"Template"> | string | null
    variable_count?: IntFilter<"Template"> | number
    variables?: JsonNullableFilter<"Template">
    created_at?: DateTimeFilter<"Template"> | Date | string
    updated_at?: DateTimeNullableFilter<"Template"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    buttons?: TemplateButtonListRelationFilter
    receipts?: MessageReceiptListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    template_name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    template_type?: SortOrder
    header_type?: SortOrderInput | SortOrder
    header_text?: SortOrderInput | SortOrder
    header_media_url?: SortOrderInput | SortOrder
    message_body?: SortOrder
    footer_text?: SortOrderInput | SortOrder
    variable_count?: SortOrder
    variables?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    buttons?: TemplateButtonOrderByRelationAggregateInput
    receipts?: MessageReceiptOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    template_id?: bigint | number
    template_name?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    created_by?: BigIntFilter<"Template"> | bigint | number
    category?: StringFilter<"Template"> | string
    language?: StringFilter<"Template"> | string
    template_type?: StringFilter<"Template"> | string
    header_type?: StringNullableFilter<"Template"> | string | null
    header_text?: StringNullableFilter<"Template"> | string | null
    header_media_url?: StringNullableFilter<"Template"> | string | null
    message_body?: StringFilter<"Template"> | string
    footer_text?: StringNullableFilter<"Template"> | string | null
    variable_count?: IntFilter<"Template"> | number
    variables?: JsonNullableFilter<"Template">
    created_at?: DateTimeFilter<"Template"> | Date | string
    updated_at?: DateTimeNullableFilter<"Template"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    buttons?: TemplateButtonListRelationFilter
    receipts?: MessageReceiptListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "template_id" | "template_name">

  export type TemplateOrderByWithAggregationInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    template_name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    template_type?: SortOrder
    header_type?: SortOrderInput | SortOrder
    header_text?: SortOrderInput | SortOrder
    header_media_url?: SortOrderInput | SortOrder
    message_body?: SortOrder
    footer_text?: SortOrderInput | SortOrder
    variable_count?: SortOrder
    variables?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    template_id?: BigIntWithAggregatesFilter<"Template"> | bigint | number
    created_by?: BigIntWithAggregatesFilter<"Template"> | bigint | number
    template_name?: StringWithAggregatesFilter<"Template"> | string
    category?: StringWithAggregatesFilter<"Template"> | string
    language?: StringWithAggregatesFilter<"Template"> | string
    template_type?: StringWithAggregatesFilter<"Template"> | string
    header_type?: StringNullableWithAggregatesFilter<"Template"> | string | null
    header_text?: StringNullableWithAggregatesFilter<"Template"> | string | null
    header_media_url?: StringNullableWithAggregatesFilter<"Template"> | string | null
    message_body?: StringWithAggregatesFilter<"Template"> | string
    footer_text?: StringNullableWithAggregatesFilter<"Template"> | string | null
    variable_count?: IntWithAggregatesFilter<"Template"> | number
    variables?: JsonNullableWithAggregatesFilter<"Template">
    created_at?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
  }

  export type TemplateButtonWhereInput = {
    AND?: TemplateButtonWhereInput | TemplateButtonWhereInput[]
    OR?: TemplateButtonWhereInput[]
    NOT?: TemplateButtonWhereInput | TemplateButtonWhereInput[]
    button_id?: IntFilter<"TemplateButton"> | number
    template_id?: BigIntFilter<"TemplateButton"> | bigint | number
    button_type?: StringFilter<"TemplateButton"> | string
    button_text?: StringFilter<"TemplateButton"> | string
    button_value?: StringNullableFilter<"TemplateButton"> | string | null
    position?: IntFilter<"TemplateButton"> | number
    created_at?: DateTimeFilter<"TemplateButton"> | Date | string
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>
  }

  export type TemplateButtonOrderByWithRelationInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    button_type?: SortOrder
    button_text?: SortOrder
    button_value?: SortOrderInput | SortOrder
    position?: SortOrder
    created_at?: SortOrder
    template?: TemplateOrderByWithRelationInput
  }

  export type TemplateButtonWhereUniqueInput = Prisma.AtLeast<{
    button_id?: number
    AND?: TemplateButtonWhereInput | TemplateButtonWhereInput[]
    OR?: TemplateButtonWhereInput[]
    NOT?: TemplateButtonWhereInput | TemplateButtonWhereInput[]
    template_id?: BigIntFilter<"TemplateButton"> | bigint | number
    button_type?: StringFilter<"TemplateButton"> | string
    button_text?: StringFilter<"TemplateButton"> | string
    button_value?: StringNullableFilter<"TemplateButton"> | string | null
    position?: IntFilter<"TemplateButton"> | number
    created_at?: DateTimeFilter<"TemplateButton"> | Date | string
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>
  }, "button_id">

  export type TemplateButtonOrderByWithAggregationInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    button_type?: SortOrder
    button_text?: SortOrder
    button_value?: SortOrderInput | SortOrder
    position?: SortOrder
    created_at?: SortOrder
    _count?: TemplateButtonCountOrderByAggregateInput
    _avg?: TemplateButtonAvgOrderByAggregateInput
    _max?: TemplateButtonMaxOrderByAggregateInput
    _min?: TemplateButtonMinOrderByAggregateInput
    _sum?: TemplateButtonSumOrderByAggregateInput
  }

  export type TemplateButtonScalarWhereWithAggregatesInput = {
    AND?: TemplateButtonScalarWhereWithAggregatesInput | TemplateButtonScalarWhereWithAggregatesInput[]
    OR?: TemplateButtonScalarWhereWithAggregatesInput[]
    NOT?: TemplateButtonScalarWhereWithAggregatesInput | TemplateButtonScalarWhereWithAggregatesInput[]
    button_id?: IntWithAggregatesFilter<"TemplateButton"> | number
    template_id?: BigIntWithAggregatesFilter<"TemplateButton"> | bigint | number
    button_type?: StringWithAggregatesFilter<"TemplateButton"> | string
    button_text?: StringWithAggregatesFilter<"TemplateButton"> | string
    button_value?: StringNullableWithAggregatesFilter<"TemplateButton"> | string | null
    position?: IntWithAggregatesFilter<"TemplateButton"> | number
    created_at?: DateTimeWithAggregatesFilter<"TemplateButton"> | Date | string
  }

  export type UserCreateInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
  }

  export type UserUpdateManyMutationInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignCreateInput = {
    campaignid?: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutCampaignsInput
    template: TemplateCreateNestedOneWithoutCampaignsInput
    messages?: MessageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    campaignid?: bigint | number
    userid: bigint | number
    campaign_name: string
    templateid: bigint | number
    createdON?: Date | string
    status?: boolean
    messages?: MessageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    template?: TemplateUpdateOneRequiredWithoutCampaignsNestedInput
    messages?: MessageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    templateid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    messages?: MessageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    campaignid?: bigint | number
    userid: bigint | number
    campaign_name: string
    templateid: bigint | number
    createdON?: Date | string
    status?: boolean
  }

  export type CampaignUpdateManyMutationInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampaignUncheckedUpdateManyInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    templateid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactCreateInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutContactsInput
    receipts?: MessageReceiptCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    userid?: bigint | number | null
    created_at?: Date | string
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutContactsNestedInput
    receipts?: MessageReceiptUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    userid?: bigint | number | null
    created_at?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    button?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    campaign?: CampaignCreateNestedOneWithoutMessagesInput
    receipts?: MessageReceiptCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    campaignid?: bigint | number | null
    user_id: bigint | number
    button?: string | null
    created_at?: Date | string
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    campaign?: CampaignUpdateOneWithoutMessagesNestedInput
    receipts?: MessageReceiptUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    campaignid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    campaignid?: bigint | number | null
    user_id: bigint | number
    button?: string | null
    created_at?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    campaignid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReceiptCreateInput = {
    sentid?: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    message: MessageCreateNestedOneWithoutReceiptsInput
    contact: ContactCreateNestedOneWithoutReceiptsInput
    template?: TemplateCreateNestedOneWithoutReceiptsInput
  }

  export type MessageReceiptUncheckedCreateInput = {
    sentid?: bigint | number
    messageid: bigint | number
    contactid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptUpdateInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    message?: MessageUpdateOneRequiredWithoutReceiptsNestedInput
    contact?: ContactUpdateOneRequiredWithoutReceiptsNestedInput
    template?: TemplateUpdateOneWithoutReceiptsNestedInput
  }

  export type MessageReceiptUncheckedUpdateInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptCreateManyInput = {
    sentid?: bigint | number
    messageid: bigint | number
    contactid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptUpdateManyMutationInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptUncheckedUpdateManyInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateCreateInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTemplatesInput
    buttons?: TemplateButtonCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    template_id?: bigint | number
    created_by: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    buttons?: TemplateButtonUncheckedCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    buttons?: TemplateButtonUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_by?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buttons?: TemplateButtonUncheckedUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUncheckedUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    template_id?: bigint | number
    created_by: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type TemplateUpdateManyMutationInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateUncheckedUpdateManyInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_by?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateButtonCreateInput = {
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
    template: TemplateCreateNestedOneWithoutButtonsInput
  }

  export type TemplateButtonUncheckedCreateInput = {
    button_id?: number
    template_id: bigint | number
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
  }

  export type TemplateButtonUpdateInput = {
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutButtonsNestedInput
  }

  export type TemplateButtonUncheckedUpdateInput = {
    button_id?: IntFieldUpdateOperationsInput | number
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateButtonCreateManyInput = {
    button_id?: number
    template_id: bigint | number
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
  }

  export type TemplateButtonUpdateManyMutationInput = {
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateButtonUncheckedUpdateManyInput = {
    button_id?: IntFieldUpdateOperationsInput | number
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    whatsapp_number?: SortOrder
    website?: SortOrder
    country?: SortOrder
    gst_num?: SortOrder
    password?: SortOrder
    business_name?: SortOrder
    role?: SortOrder
    api_key?: SortOrder
    status?: SortOrder
    isPremium?: SortOrder
    created_by?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    whatsapp_number?: SortOrder
    website?: SortOrder
    country?: SortOrder
    gst_num?: SortOrder
    password?: SortOrder
    business_name?: SortOrder
    role?: SortOrder
    api_key?: SortOrder
    status?: SortOrder
    isPremium?: SortOrder
    created_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    whatsapp_number?: SortOrder
    website?: SortOrder
    country?: SortOrder
    gst_num?: SortOrder
    password?: SortOrder
    business_name?: SortOrder
    role?: SortOrder
    api_key?: SortOrder
    status?: SortOrder
    isPremium?: SortOrder
    created_by?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    status?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TemplateRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    campaign_name?: SortOrder
    templateid?: SortOrder
    createdON?: SortOrder
    status?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    templateid?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    campaign_name?: SortOrder
    templateid?: SortOrder
    createdON?: SortOrder
    status?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    campaign_name?: SortOrder
    templateid?: SortOrder
    createdON?: SortOrder
    status?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    campaignid?: SortOrder
    userid?: SortOrder
    templateid?: SortOrder
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MessageReceiptListRelationFilter = {
    every?: MessageReceiptWhereInput
    some?: MessageReceiptWhereInput
    none?: MessageReceiptWhereInput
  }

  export type MessageReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    contactid?: SortOrder
    name?: SortOrder
    phonenum?: SortOrder
    userid?: SortOrder
    created_at?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    contactid?: SortOrder
    userid?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    contactid?: SortOrder
    name?: SortOrder
    phonenum?: SortOrder
    userid?: SortOrder
    created_at?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    contactid?: SortOrder
    name?: SortOrder
    phonenum?: SortOrder
    userid?: SortOrder
    created_at?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    contactid?: SortOrder
    userid?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type CampaignNullableRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    messageid?: SortOrder
    message?: SortOrder
    image?: SortOrder
    campaignid?: SortOrder
    user_id?: SortOrder
    button?: SortOrder
    created_at?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    messageid?: SortOrder
    campaignid?: SortOrder
    user_id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    messageid?: SortOrder
    message?: SortOrder
    image?: SortOrder
    campaignid?: SortOrder
    user_id?: SortOrder
    button?: SortOrder
    created_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    messageid?: SortOrder
    message?: SortOrder
    image?: SortOrder
    campaignid?: SortOrder
    user_id?: SortOrder
    button?: SortOrder
    created_at?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    messageid?: SortOrder
    campaignid?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MessageRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type ContactRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type TemplateNullableRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type MessageReceiptCountOrderByAggregateInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrder
    provider_msg_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
  }

  export type MessageReceiptAvgOrderByAggregateInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrder
  }

  export type MessageReceiptMaxOrderByAggregateInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrder
    provider_msg_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
  }

  export type MessageReceiptMinOrderByAggregateInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrder
    provider_msg_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
  }

  export type MessageReceiptSumOrderByAggregateInput = {
    sentid?: SortOrder
    messageid?: SortOrder
    contactid?: SortOrder
    template_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TemplateButtonListRelationFilter = {
    every?: TemplateButtonWhereInput
    some?: TemplateButtonWhereInput
    none?: TemplateButtonWhereInput
  }

  export type TemplateButtonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    template_name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    template_type?: SortOrder
    header_type?: SortOrder
    header_text?: SortOrder
    header_media_url?: SortOrder
    message_body?: SortOrder
    footer_text?: SortOrder
    variable_count?: SortOrder
    variables?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    variable_count?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    template_name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    template_type?: SortOrder
    header_type?: SortOrder
    header_text?: SortOrder
    header_media_url?: SortOrder
    message_body?: SortOrder
    footer_text?: SortOrder
    variable_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    template_name?: SortOrder
    category?: SortOrder
    language?: SortOrder
    template_type?: SortOrder
    header_type?: SortOrder
    header_text?: SortOrder
    header_media_url?: SortOrder
    message_body?: SortOrder
    footer_text?: SortOrder
    variable_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    template_id?: SortOrder
    created_by?: SortOrder
    variable_count?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TemplateButtonCountOrderByAggregateInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    button_type?: SortOrder
    button_text?: SortOrder
    button_value?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
  }

  export type TemplateButtonAvgOrderByAggregateInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    position?: SortOrder
  }

  export type TemplateButtonMaxOrderByAggregateInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    button_type?: SortOrder
    button_text?: SortOrder
    button_value?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
  }

  export type TemplateButtonMinOrderByAggregateInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    button_type?: SortOrder
    button_text?: SortOrder
    button_value?: SortOrder
    position?: SortOrder
    created_at?: SortOrder
  }

  export type TemplateButtonSumOrderByAggregateInput = {
    button_id?: SortOrder
    template_id?: SortOrder
    position?: SortOrder
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput> | TemplateCreateWithoutUserInput[] | TemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutUserInput | TemplateCreateOrConnectWithoutUserInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutUserInput | TemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemplateCreateManyUserInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutUserInput | TemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutUserInput | TemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignsInput
    connect?: TemplateWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput> | MessageCreateWithoutCampaignInput[] | MessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCampaignInput | MessageCreateOrConnectWithoutCampaignInput[]
    createMany?: MessageCreateManyCampaignInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput> | MessageCreateWithoutCampaignInput[] | MessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCampaignInput | MessageCreateOrConnectWithoutCampaignInput[]
    createMany?: MessageCreateManyCampaignInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type TemplateUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutCampaignsInput
    upsert?: TemplateUpsertWithoutCampaignsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutCampaignsInput, TemplateUpdateWithoutCampaignsInput>, TemplateUncheckedUpdateWithoutCampaignsInput>
  }

  export type MessageUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput> | MessageCreateWithoutCampaignInput[] | MessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCampaignInput | MessageCreateOrConnectWithoutCampaignInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCampaignInput | MessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MessageCreateManyCampaignInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCampaignInput | MessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCampaignInput | MessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput> | MessageCreateWithoutCampaignInput[] | MessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutCampaignInput | MessageCreateOrConnectWithoutCampaignInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutCampaignInput | MessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MessageCreateManyCampaignInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutCampaignInput | MessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutCampaignInput | MessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageReceiptCreateNestedManyWithoutContactInput = {
    create?: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput> | MessageReceiptCreateWithoutContactInput[] | MessageReceiptUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutContactInput | MessageReceiptCreateOrConnectWithoutContactInput[]
    createMany?: MessageReceiptCreateManyContactInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type MessageReceiptUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput> | MessageReceiptCreateWithoutContactInput[] | MessageReceiptUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutContactInput | MessageReceiptCreateOrConnectWithoutContactInput[]
    createMany?: MessageReceiptCreateManyContactInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
  }

  export type MessageReceiptUpdateManyWithoutContactNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput> | MessageReceiptCreateWithoutContactInput[] | MessageReceiptUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutContactInput | MessageReceiptCreateOrConnectWithoutContactInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutContactInput | MessageReceiptUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: MessageReceiptCreateManyContactInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutContactInput | MessageReceiptUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutContactInput | MessageReceiptUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type MessageReceiptUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput> | MessageReceiptCreateWithoutContactInput[] | MessageReceiptUncheckedCreateWithoutContactInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutContactInput | MessageReceiptCreateOrConnectWithoutContactInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutContactInput | MessageReceiptUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: MessageReceiptCreateManyContactInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutContactInput | MessageReceiptUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutContactInput | MessageReceiptUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CampaignCreateWithoutMessagesInput, CampaignUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMessagesInput
    connect?: CampaignWhereUniqueInput
  }

  export type MessageReceiptCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput> | MessageReceiptCreateWithoutMessageInput[] | MessageReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutMessageInput | MessageReceiptCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReceiptCreateManyMessageInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type MessageReceiptUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput> | MessageReceiptCreateWithoutMessageInput[] | MessageReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutMessageInput | MessageReceiptCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReceiptCreateManyMessageInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type CampaignUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<CampaignCreateWithoutMessagesInput, CampaignUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMessagesInput
    upsert?: CampaignUpsertWithoutMessagesInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMessagesInput, CampaignUpdateWithoutMessagesInput>, CampaignUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageReceiptUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput> | MessageReceiptCreateWithoutMessageInput[] | MessageReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutMessageInput | MessageReceiptCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutMessageInput | MessageReceiptUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReceiptCreateManyMessageInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutMessageInput | MessageReceiptUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutMessageInput | MessageReceiptUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type MessageReceiptUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput> | MessageReceiptCreateWithoutMessageInput[] | MessageReceiptUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutMessageInput | MessageReceiptCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutMessageInput | MessageReceiptUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReceiptCreateManyMessageInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutMessageInput | MessageReceiptUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutMessageInput | MessageReceiptUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<MessageCreateWithoutReceiptsInput, MessageUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReceiptsInput
    connect?: MessageWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<ContactCreateWithoutReceiptsInput, ContactUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutReceiptsInput
    connect?: ContactWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<TemplateCreateWithoutReceiptsInput, TemplateUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutReceiptsInput
    connect?: TemplateWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MessageUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<MessageCreateWithoutReceiptsInput, MessageUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReceiptsInput
    upsert?: MessageUpsertWithoutReceiptsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReceiptsInput, MessageUpdateWithoutReceiptsInput>, MessageUncheckedUpdateWithoutReceiptsInput>
  }

  export type ContactUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<ContactCreateWithoutReceiptsInput, ContactUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutReceiptsInput
    upsert?: ContactUpsertWithoutReceiptsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutReceiptsInput, ContactUpdateWithoutReceiptsInput>, ContactUncheckedUpdateWithoutReceiptsInput>
  }

  export type TemplateUpdateOneWithoutReceiptsNestedInput = {
    create?: XOR<TemplateCreateWithoutReceiptsInput, TemplateUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutReceiptsInput
    upsert?: TemplateUpsertWithoutReceiptsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutReceiptsInput, TemplateUpdateWithoutReceiptsInput>, TemplateUncheckedUpdateWithoutReceiptsInput>
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateButtonCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput> | TemplateButtonCreateWithoutTemplateInput[] | TemplateButtonUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateButtonCreateOrConnectWithoutTemplateInput | TemplateButtonCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateButtonCreateManyTemplateInputEnvelope
    connect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
  }

  export type MessageReceiptCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput> | MessageReceiptCreateWithoutTemplateInput[] | MessageReceiptUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutTemplateInput | MessageReceiptCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageReceiptCreateManyTemplateInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type TemplateButtonUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput> | TemplateButtonCreateWithoutTemplateInput[] | TemplateButtonUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateButtonCreateOrConnectWithoutTemplateInput | TemplateButtonCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateButtonCreateManyTemplateInputEnvelope
    connect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
  }

  export type MessageReceiptUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput> | MessageReceiptCreateWithoutTemplateInput[] | MessageReceiptUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutTemplateInput | MessageReceiptCreateOrConnectWithoutTemplateInput[]
    createMany?: MessageReceiptCreateManyTemplateInputEnvelope
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type TemplateButtonUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput> | TemplateButtonCreateWithoutTemplateInput[] | TemplateButtonUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateButtonCreateOrConnectWithoutTemplateInput | TemplateButtonCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateButtonUpsertWithWhereUniqueWithoutTemplateInput | TemplateButtonUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateButtonCreateManyTemplateInputEnvelope
    set?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    disconnect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    delete?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    connect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    update?: TemplateButtonUpdateWithWhereUniqueWithoutTemplateInput | TemplateButtonUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateButtonUpdateManyWithWhereWithoutTemplateInput | TemplateButtonUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateButtonScalarWhereInput | TemplateButtonScalarWhereInput[]
  }

  export type MessageReceiptUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput> | MessageReceiptCreateWithoutTemplateInput[] | MessageReceiptUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutTemplateInput | MessageReceiptCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutTemplateInput | MessageReceiptUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageReceiptCreateManyTemplateInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutTemplateInput | MessageReceiptUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutTemplateInput | MessageReceiptUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTemplateInput | CampaignUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTemplateInput | CampaignUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTemplateInput | CampaignUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type TemplateButtonUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput> | TemplateButtonCreateWithoutTemplateInput[] | TemplateButtonUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateButtonCreateOrConnectWithoutTemplateInput | TemplateButtonCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateButtonUpsertWithWhereUniqueWithoutTemplateInput | TemplateButtonUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateButtonCreateManyTemplateInputEnvelope
    set?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    disconnect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    delete?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    connect?: TemplateButtonWhereUniqueInput | TemplateButtonWhereUniqueInput[]
    update?: TemplateButtonUpdateWithWhereUniqueWithoutTemplateInput | TemplateButtonUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateButtonUpdateManyWithWhereWithoutTemplateInput | TemplateButtonUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateButtonScalarWhereInput | TemplateButtonScalarWhereInput[]
  }

  export type MessageReceiptUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput> | MessageReceiptCreateWithoutTemplateInput[] | MessageReceiptUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: MessageReceiptCreateOrConnectWithoutTemplateInput | MessageReceiptCreateOrConnectWithoutTemplateInput[]
    upsert?: MessageReceiptUpsertWithWhereUniqueWithoutTemplateInput | MessageReceiptUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: MessageReceiptCreateManyTemplateInputEnvelope
    set?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    disconnect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    delete?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    connect?: MessageReceiptWhereUniqueInput | MessageReceiptWhereUniqueInput[]
    update?: MessageReceiptUpdateWithWhereUniqueWithoutTemplateInput | MessageReceiptUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: MessageReceiptUpdateManyWithWhereWithoutTemplateInput | MessageReceiptUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput> | CampaignCreateWithoutTemplateInput[] | CampaignUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTemplateInput | CampaignCreateOrConnectWithoutTemplateInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTemplateInput | CampaignUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CampaignCreateManyTemplateInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTemplateInput | CampaignUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTemplateInput | CampaignUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutButtonsInput = {
    create?: XOR<TemplateCreateWithoutButtonsInput, TemplateUncheckedCreateWithoutButtonsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutButtonsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateUpdateOneRequiredWithoutButtonsNestedInput = {
    create?: XOR<TemplateCreateWithoutButtonsInput, TemplateUncheckedCreateWithoutButtonsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutButtonsInput
    upsert?: TemplateUpsertWithoutButtonsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutButtonsInput, TemplateUpdateWithoutButtonsInput>, TemplateUncheckedUpdateWithoutButtonsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CampaignCreateWithoutUserInput = {
    campaignid?: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
    template: TemplateCreateNestedOneWithoutCampaignsInput
    messages?: MessageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    campaignid?: bigint | number
    campaign_name: string
    templateid: bigint | number
    createdON?: Date | string
    status?: boolean
    messages?: MessageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutUserInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    created_at?: Date | string
    receipts?: MessageReceiptCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutUserInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    created_at?: Date | string
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutUserInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateManyUserInputEnvelope = {
    data: ContactCreateManyUserInput | ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    button?: string | null
    created_at?: Date | string
    campaign?: CampaignCreateNestedOneWithoutMessagesInput
    receipts?: MessageReceiptCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    campaignid?: bigint | number | null
    button?: string | null
    created_at?: Date | string
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutUserInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    buttons?: TemplateButtonCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutUserInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    buttons?: TemplateButtonUncheckedCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutUserInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateCreateManyUserInputEnvelope = {
    data: TemplateCreateManyUserInput | TemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    campaignid?: BigIntFilter<"Campaign"> | bigint | number
    userid?: BigIntFilter<"Campaign"> | bigint | number
    campaign_name?: StringFilter<"Campaign"> | string
    templateid?: BigIntFilter<"Campaign"> | bigint | number
    createdON?: DateTimeFilter<"Campaign"> | Date | string
    status?: BoolFilter<"Campaign"> | boolean
  }

  export type ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
  }

  export type ContactUpdateManyWithWhereWithoutUserInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    contactid?: BigIntFilter<"Contact"> | bigint | number
    name?: StringNullableFilter<"Contact"> | string | null
    phonenum?: StringNullableFilter<"Contact"> | string | null
    userid?: BigIntNullableFilter<"Contact"> | bigint | number | null
    created_at?: DateTimeFilter<"Contact"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    messageid?: BigIntFilter<"Message"> | bigint | number
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    campaignid?: BigIntNullableFilter<"Message"> | bigint | number | null
    user_id?: BigIntFilter<"Message"> | bigint | number
    button?: StringNullableFilter<"Message"> | string | null
    created_at?: DateTimeFilter<"Message"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
    create: XOR<TemplateCreateWithoutUserInput, TemplateUncheckedCreateWithoutUserInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutUserInput, TemplateUncheckedUpdateWithoutUserInput>
  }

  export type TemplateUpdateManyWithWhereWithoutUserInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    template_id?: BigIntFilter<"Template"> | bigint | number
    created_by?: BigIntFilter<"Template"> | bigint | number
    template_name?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    language?: StringFilter<"Template"> | string
    template_type?: StringFilter<"Template"> | string
    header_type?: StringNullableFilter<"Template"> | string | null
    header_text?: StringNullableFilter<"Template"> | string | null
    header_media_url?: StringNullableFilter<"Template"> | string | null
    message_body?: StringFilter<"Template"> | string
    footer_text?: StringNullableFilter<"Template"> | string | null
    variable_count?: IntFilter<"Template"> | number
    variables?: JsonNullableFilter<"Template">
    created_at?: DateTimeFilter<"Template"> | Date | string
    updated_at?: DateTimeNullableFilter<"Template"> | Date | string | null
  }

  export type UserCreateWithoutCampaignsInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    contacts?: ContactCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type TemplateCreateWithoutCampaignsInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTemplatesInput
    buttons?: TemplateButtonCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutCampaignsInput = {
    template_id?: bigint | number
    created_by: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    buttons?: TemplateButtonUncheckedCreateNestedManyWithoutTemplateInput
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutCampaignsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
  }

  export type MessageCreateWithoutCampaignInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    button?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    receipts?: MessageReceiptCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutCampaignInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    user_id: bigint | number
    button?: string | null
    created_at?: Date | string
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutCampaignInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput>
  }

  export type MessageCreateManyCampaignInputEnvelope = {
    data: MessageCreateManyCampaignInput | MessageCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateUpsertWithoutCampaignsInput = {
    update: XOR<TemplateUpdateWithoutCampaignsInput, TemplateUncheckedUpdateWithoutCampaignsInput>
    create: XOR<TemplateCreateWithoutCampaignsInput, TemplateUncheckedCreateWithoutCampaignsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutCampaignsInput, TemplateUncheckedUpdateWithoutCampaignsInput>
  }

  export type TemplateUpdateWithoutCampaignsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    buttons?: TemplateButtonUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutCampaignsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_by?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buttons?: TemplateButtonUncheckedUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutCampaignInput, MessageUncheckedUpdateWithoutCampaignInput>
    create: XOR<MessageCreateWithoutCampaignInput, MessageUncheckedCreateWithoutCampaignInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutCampaignInput, MessageUncheckedUpdateWithoutCampaignInput>
  }

  export type MessageUpdateManyWithWhereWithoutCampaignInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutCampaignInput>
  }

  export type UserCreateWithoutContactsInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type MessageReceiptCreateWithoutContactInput = {
    sentid?: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    message: MessageCreateNestedOneWithoutReceiptsInput
    template?: TemplateCreateNestedOneWithoutReceiptsInput
  }

  export type MessageReceiptUncheckedCreateWithoutContactInput = {
    sentid?: bigint | number
    messageid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptCreateOrConnectWithoutContactInput = {
    where: MessageReceiptWhereUniqueInput
    create: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput>
  }

  export type MessageReceiptCreateManyContactInputEnvelope = {
    data: MessageReceiptCreateManyContactInput | MessageReceiptCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageReceiptUpsertWithWhereUniqueWithoutContactInput = {
    where: MessageReceiptWhereUniqueInput
    update: XOR<MessageReceiptUpdateWithoutContactInput, MessageReceiptUncheckedUpdateWithoutContactInput>
    create: XOR<MessageReceiptCreateWithoutContactInput, MessageReceiptUncheckedCreateWithoutContactInput>
  }

  export type MessageReceiptUpdateWithWhereUniqueWithoutContactInput = {
    where: MessageReceiptWhereUniqueInput
    data: XOR<MessageReceiptUpdateWithoutContactInput, MessageReceiptUncheckedUpdateWithoutContactInput>
  }

  export type MessageReceiptUpdateManyWithWhereWithoutContactInput = {
    where: MessageReceiptScalarWhereInput
    data: XOR<MessageReceiptUpdateManyMutationInput, MessageReceiptUncheckedUpdateManyWithoutContactInput>
  }

  export type MessageReceiptScalarWhereInput = {
    AND?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
    OR?: MessageReceiptScalarWhereInput[]
    NOT?: MessageReceiptScalarWhereInput | MessageReceiptScalarWhereInput[]
    sentid?: BigIntFilter<"MessageReceipt"> | bigint | number
    messageid?: BigIntFilter<"MessageReceipt"> | bigint | number
    contactid?: BigIntFilter<"MessageReceipt"> | bigint | number
    template_id?: BigIntNullableFilter<"MessageReceipt"> | bigint | number | null
    provider_msg_id?: StringNullableFilter<"MessageReceipt"> | string | null
    status?: StringFilter<"MessageReceipt"> | string
    sent_at?: DateTimeFilter<"MessageReceipt"> | Date | string
    delivered_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    read_at?: DateTimeNullableFilter<"MessageReceipt"> | Date | string | null
    error_message?: StringNullableFilter<"MessageReceipt"> | string | null
  }

  export type UserCreateWithoutMessagesInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type CampaignCreateWithoutMessagesInput = {
    campaignid?: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutCampaignsInput
    template: TemplateCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutMessagesInput = {
    campaignid?: bigint | number
    userid: bigint | number
    campaign_name: string
    templateid: bigint | number
    createdON?: Date | string
    status?: boolean
  }

  export type CampaignCreateOrConnectWithoutMessagesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMessagesInput, CampaignUncheckedCreateWithoutMessagesInput>
  }

  export type MessageReceiptCreateWithoutMessageInput = {
    sentid?: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    contact: ContactCreateNestedOneWithoutReceiptsInput
    template?: TemplateCreateNestedOneWithoutReceiptsInput
  }

  export type MessageReceiptUncheckedCreateWithoutMessageInput = {
    sentid?: bigint | number
    contactid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptCreateOrConnectWithoutMessageInput = {
    where: MessageReceiptWhereUniqueInput
    create: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput>
  }

  export type MessageReceiptCreateManyMessageInputEnvelope = {
    data: MessageReceiptCreateManyMessageInput | MessageReceiptCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignUpsertWithoutMessagesInput = {
    update: XOR<CampaignUpdateWithoutMessagesInput, CampaignUncheckedUpdateWithoutMessagesInput>
    create: XOR<CampaignCreateWithoutMessagesInput, CampaignUncheckedCreateWithoutMessagesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMessagesInput, CampaignUncheckedUpdateWithoutMessagesInput>
  }

  export type CampaignUpdateWithoutMessagesInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    template?: TemplateUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMessagesInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    templateid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageReceiptUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReceiptWhereUniqueInput
    update: XOR<MessageReceiptUpdateWithoutMessageInput, MessageReceiptUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReceiptCreateWithoutMessageInput, MessageReceiptUncheckedCreateWithoutMessageInput>
  }

  export type MessageReceiptUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReceiptWhereUniqueInput
    data: XOR<MessageReceiptUpdateWithoutMessageInput, MessageReceiptUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReceiptUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReceiptScalarWhereInput
    data: XOR<MessageReceiptUpdateManyMutationInput, MessageReceiptUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutReceiptsInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    button?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    campaign?: CampaignCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiptsInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    campaignid?: bigint | number | null
    user_id: bigint | number
    button?: string | null
    created_at?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiptsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiptsInput, MessageUncheckedCreateWithoutReceiptsInput>
  }

  export type ContactCreateWithoutReceiptsInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateWithoutReceiptsInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    userid?: bigint | number | null
    created_at?: Date | string
  }

  export type ContactCreateOrConnectWithoutReceiptsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutReceiptsInput, ContactUncheckedCreateWithoutReceiptsInput>
  }

  export type TemplateCreateWithoutReceiptsInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTemplatesInput
    buttons?: TemplateButtonCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutReceiptsInput = {
    template_id?: bigint | number
    created_by: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    buttons?: TemplateButtonUncheckedCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutReceiptsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutReceiptsInput, TemplateUncheckedCreateWithoutReceiptsInput>
  }

  export type MessageUpsertWithoutReceiptsInput = {
    update: XOR<MessageUpdateWithoutReceiptsInput, MessageUncheckedUpdateWithoutReceiptsInput>
    create: XOR<MessageCreateWithoutReceiptsInput, MessageUncheckedCreateWithoutReceiptsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReceiptsInput, MessageUncheckedUpdateWithoutReceiptsInput>
  }

  export type MessageUpdateWithoutReceiptsInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    campaign?: CampaignUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiptsInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    campaignid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpsertWithoutReceiptsInput = {
    update: XOR<ContactUpdateWithoutReceiptsInput, ContactUncheckedUpdateWithoutReceiptsInput>
    create: XOR<ContactCreateWithoutReceiptsInput, ContactUncheckedCreateWithoutReceiptsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutReceiptsInput, ContactUncheckedUpdateWithoutReceiptsInput>
  }

  export type ContactUpdateWithoutReceiptsInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateWithoutReceiptsInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpsertWithoutReceiptsInput = {
    update: XOR<TemplateUpdateWithoutReceiptsInput, TemplateUncheckedUpdateWithoutReceiptsInput>
    create: XOR<TemplateCreateWithoutReceiptsInput, TemplateUncheckedCreateWithoutReceiptsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutReceiptsInput, TemplateUncheckedUpdateWithoutReceiptsInput>
  }

  export type TemplateUpdateWithoutReceiptsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    buttons?: TemplateButtonUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutReceiptsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_by?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buttons?: TemplateButtonUncheckedUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type UserCreateWithoutTemplatesInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    contacts?: ContactCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    user_id?: bigint | number
    first_name: string
    last_name: string
    email: string
    whatsapp_number: string
    website?: string | null
    country?: string | null
    gst_num: string
    password: string
    business_name?: string | null
    role?: string
    api_key?: string | null
    status?: number | null
    isPremium?: boolean
    created_by?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type TemplateButtonCreateWithoutTemplateInput = {
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
  }

  export type TemplateButtonUncheckedCreateWithoutTemplateInput = {
    button_id?: number
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
  }

  export type TemplateButtonCreateOrConnectWithoutTemplateInput = {
    where: TemplateButtonWhereUniqueInput
    create: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateButtonCreateManyTemplateInputEnvelope = {
    data: TemplateButtonCreateManyTemplateInput | TemplateButtonCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type MessageReceiptCreateWithoutTemplateInput = {
    sentid?: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    message: MessageCreateNestedOneWithoutReceiptsInput
    contact: ContactCreateNestedOneWithoutReceiptsInput
  }

  export type MessageReceiptUncheckedCreateWithoutTemplateInput = {
    sentid?: bigint | number
    messageid: bigint | number
    contactid: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptCreateOrConnectWithoutTemplateInput = {
    where: MessageReceiptWhereUniqueInput
    create: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput>
  }

  export type MessageReceiptCreateManyTemplateInputEnvelope = {
    data: MessageReceiptCreateManyTemplateInput | MessageReceiptCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTemplateInput = {
    campaignid?: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutCampaignsInput
    messages?: MessageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTemplateInput = {
    campaignid?: bigint | number
    userid: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
    messages?: MessageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignCreateManyTemplateInputEnvelope = {
    data: CampaignCreateManyTemplateInput | CampaignCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    contacts?: ContactUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    gst_num?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateButtonUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateButtonWhereUniqueInput
    update: XOR<TemplateButtonUpdateWithoutTemplateInput, TemplateButtonUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateButtonCreateWithoutTemplateInput, TemplateButtonUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateButtonUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateButtonWhereUniqueInput
    data: XOR<TemplateButtonUpdateWithoutTemplateInput, TemplateButtonUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateButtonUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateButtonScalarWhereInput
    data: XOR<TemplateButtonUpdateManyMutationInput, TemplateButtonUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateButtonScalarWhereInput = {
    AND?: TemplateButtonScalarWhereInput | TemplateButtonScalarWhereInput[]
    OR?: TemplateButtonScalarWhereInput[]
    NOT?: TemplateButtonScalarWhereInput | TemplateButtonScalarWhereInput[]
    button_id?: IntFilter<"TemplateButton"> | number
    template_id?: BigIntFilter<"TemplateButton"> | bigint | number
    button_type?: StringFilter<"TemplateButton"> | string
    button_text?: StringFilter<"TemplateButton"> | string
    button_value?: StringNullableFilter<"TemplateButton"> | string | null
    position?: IntFilter<"TemplateButton"> | number
    created_at?: DateTimeFilter<"TemplateButton"> | Date | string
  }

  export type MessageReceiptUpsertWithWhereUniqueWithoutTemplateInput = {
    where: MessageReceiptWhereUniqueInput
    update: XOR<MessageReceiptUpdateWithoutTemplateInput, MessageReceiptUncheckedUpdateWithoutTemplateInput>
    create: XOR<MessageReceiptCreateWithoutTemplateInput, MessageReceiptUncheckedCreateWithoutTemplateInput>
  }

  export type MessageReceiptUpdateWithWhereUniqueWithoutTemplateInput = {
    where: MessageReceiptWhereUniqueInput
    data: XOR<MessageReceiptUpdateWithoutTemplateInput, MessageReceiptUncheckedUpdateWithoutTemplateInput>
  }

  export type MessageReceiptUpdateManyWithWhereWithoutTemplateInput = {
    where: MessageReceiptScalarWhereInput
    data: XOR<MessageReceiptUpdateManyMutationInput, MessageReceiptUncheckedUpdateManyWithoutTemplateInput>
  }

  export type CampaignUpsertWithWhereUniqueWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTemplateInput, CampaignUncheckedUpdateWithoutTemplateInput>
    create: XOR<CampaignCreateWithoutTemplateInput, CampaignUncheckedCreateWithoutTemplateInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTemplateInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTemplateInput, CampaignUncheckedUpdateWithoutTemplateInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTemplateInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateCreateWithoutButtonsInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UserCreateNestedOneWithoutTemplatesInput
    receipts?: MessageReceiptCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutButtonsInput = {
    template_id?: bigint | number
    created_by: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    receipts?: MessageReceiptUncheckedCreateNestedManyWithoutTemplateInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutButtonsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutButtonsInput, TemplateUncheckedCreateWithoutButtonsInput>
  }

  export type TemplateUpsertWithoutButtonsInput = {
    update: XOR<TemplateUpdateWithoutButtonsInput, TemplateUncheckedUpdateWithoutButtonsInput>
    create: XOR<TemplateCreateWithoutButtonsInput, TemplateUncheckedCreateWithoutButtonsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutButtonsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutButtonsInput, TemplateUncheckedUpdateWithoutButtonsInput>
  }

  export type TemplateUpdateWithoutButtonsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    receipts?: MessageReceiptUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutButtonsInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_by?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipts?: MessageReceiptUncheckedUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type CampaignCreateManyUserInput = {
    campaignid?: bigint | number
    campaign_name: string
    templateid: bigint | number
    createdON?: Date | string
    status?: boolean
  }

  export type ContactCreateManyUserInput = {
    contactid?: bigint | number
    name?: string | null
    phonenum?: string | null
    created_at?: Date | string
  }

  export type MessageCreateManyUserInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    campaignid?: bigint | number | null
    button?: string | null
    created_at?: Date | string
  }

  export type TemplateCreateManyUserInput = {
    template_id?: bigint | number
    template_name: string
    category: string
    language: string
    template_type?: string
    header_type?: string | null
    header_text?: string | null
    header_media_url?: string | null
    message_body: string
    footer_text?: string | null
    variable_count?: number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type CampaignUpdateWithoutUserInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    template?: TemplateUpdateOneRequiredWithoutCampaignsNestedInput
    messages?: MessageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    templateid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    messages?: MessageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    templateid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactUpdateWithoutUserInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutUserInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutUserInput = {
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phonenum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutMessagesNestedInput
    receipts?: MessageReceiptUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    campaignid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    campaignid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutUserInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buttons?: TemplateButtonUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutUserInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buttons?: TemplateButtonUncheckedUpdateManyWithoutTemplateNestedInput
    receipts?: MessageReceiptUncheckedUpdateManyWithoutTemplateNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutUserInput = {
    template_id?: BigIntFieldUpdateOperationsInput | bigint | number
    template_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    template_type?: StringFieldUpdateOperationsInput | string
    header_type?: NullableStringFieldUpdateOperationsInput | string | null
    header_text?: NullableStringFieldUpdateOperationsInput | string | null
    header_media_url?: NullableStringFieldUpdateOperationsInput | string | null
    message_body?: StringFieldUpdateOperationsInput | string
    footer_text?: NullableStringFieldUpdateOperationsInput | string | null
    variable_count?: IntFieldUpdateOperationsInput | number
    variables?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyCampaignInput = {
    messageid?: bigint | number
    message: string
    image?: string | null
    user_id: bigint | number
    button?: string | null
    created_at?: Date | string
  }

  export type MessageUpdateWithoutCampaignInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receipts?: MessageReceiptUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutCampaignInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receipts?: MessageReceiptUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutCampaignInput = {
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    button?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReceiptCreateManyContactInput = {
    sentid?: bigint | number
    messageid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptUpdateWithoutContactInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    message?: MessageUpdateOneRequiredWithoutReceiptsNestedInput
    template?: TemplateUpdateOneWithoutReceiptsNestedInput
  }

  export type MessageReceiptUncheckedUpdateWithoutContactInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptUncheckedUpdateManyWithoutContactInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptCreateManyMessageInput = {
    sentid?: bigint | number
    contactid: bigint | number
    template_id?: bigint | number | null
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type MessageReceiptUpdateWithoutMessageInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: ContactUpdateOneRequiredWithoutReceiptsNestedInput
    template?: TemplateUpdateOneWithoutReceiptsNestedInput
  }

  export type MessageReceiptUncheckedUpdateWithoutMessageInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptUncheckedUpdateManyWithoutMessageInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    template_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateButtonCreateManyTemplateInput = {
    button_id?: number
    button_type: string
    button_text: string
    button_value?: string | null
    position: number
    created_at?: Date | string
  }

  export type MessageReceiptCreateManyTemplateInput = {
    sentid?: bigint | number
    messageid: bigint | number
    contactid: bigint | number
    provider_msg_id?: string | null
    status?: string
    sent_at?: Date | string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
  }

  export type CampaignCreateManyTemplateInput = {
    campaignid?: bigint | number
    userid: bigint | number
    campaign_name: string
    createdON?: Date | string
    status?: boolean
  }

  export type TemplateButtonUpdateWithoutTemplateInput = {
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateButtonUncheckedUpdateWithoutTemplateInput = {
    button_id?: IntFieldUpdateOperationsInput | number
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateButtonUncheckedUpdateManyWithoutTemplateInput = {
    button_id?: IntFieldUpdateOperationsInput | number
    button_type?: StringFieldUpdateOperationsInput | string
    button_text?: StringFieldUpdateOperationsInput | string
    button_value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageReceiptUpdateWithoutTemplateInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    message?: MessageUpdateOneRequiredWithoutReceiptsNestedInput
    contact?: ContactUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type MessageReceiptUncheckedUpdateWithoutTemplateInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageReceiptUncheckedUpdateManyWithoutTemplateInput = {
    sentid?: BigIntFieldUpdateOperationsInput | bigint | number
    messageid?: BigIntFieldUpdateOperationsInput | bigint | number
    contactid?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_msg_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutTemplateInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    messages?: MessageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTemplateInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    messages?: MessageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTemplateInput = {
    campaignid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    campaign_name?: StringFieldUpdateOperationsInput | string
    createdON?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignCountOutputTypeDefaultArgs instead
     */
    export type CampaignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactCountOutputTypeDefaultArgs instead
     */
    export type ContactCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageCountOutputTypeDefaultArgs instead
     */
    export type MessageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateCountOutputTypeDefaultArgs instead
     */
    export type TemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageReceiptDefaultArgs instead
     */
    export type MessageReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageReceiptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateDefaultArgs instead
     */
    export type TemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateButtonDefaultArgs instead
     */
    export type TemplateButtonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateButtonDefaultArgs<ExtArgs>

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