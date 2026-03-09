
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.CampaignScalarFieldEnum = {
  campaignid: 'campaignid',
  userid: 'userid',
  campaign_name: 'campaign_name',
  templateid: 'templateid',
  createdON: 'createdON',
  status: 'status'
};

exports.Prisma.ContactScalarFieldEnum = {
  contactid: 'contactid',
  name: 'name',
  phonenum: 'phonenum',
  userid: 'userid',
  created_at: 'created_at'
};

exports.Prisma.MessageScalarFieldEnum = {
  messageid: 'messageid',
  message: 'message',
  image: 'image',
  campaignid: 'campaignid',
  user_id: 'user_id',
  button: 'button',
  created_at: 'created_at'
};

exports.Prisma.MessageReceiptScalarFieldEnum = {
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

exports.Prisma.TemplateScalarFieldEnum = {
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

exports.Prisma.TemplateButtonScalarFieldEnum = {
  button_id: 'button_id',
  template_id: 'template_id',
  button_type: 'button_type',
  button_text: 'button_text',
  button_value: 'button_value',
  position: 'position',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Campaign: 'Campaign',
  Contact: 'Contact',
  Message: 'Message',
  MessageReceipt: 'MessageReceipt',
  Template: 'Template',
  TemplateButton: 'TemplateButton'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\joshi\\Desktop\\CHVAPPS\\Wan Notifier Integration\\backend\\cwbackend\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\joshi\\Desktop\\CHVAPPS\\Wan Notifier Integration\\backend\\cwbackend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  user_id         BigInt  @id @default(autoincrement())\n  first_name      String  @db.VarChar(255)\n  last_name       String  @db.VarChar(255)\n  email           String  @unique @db.VarChar(255)\n  whatsapp_number String  @unique @db.VarChar(50)\n  website         String? @db.VarChar(255)\n  country         String? @db.VarChar(100)\n  gst_num         String  @unique @db.VarChar(50)\n\n  password      String  @db.VarChar(255) // 🔐 hashed password\n  business_name String? @db.VarChar(255) // optional business name\n  role          String  @default(\"client\") @db.VarChar(50)\n\n  api_key    String?\n  status     Int?    @default(1) @db.SmallInt\n  isPremium  Boolean @default(false)\n  created_by String? @default(\"self\") @db.VarChar(20)\n\n  campaigns Campaign[]\n  contacts  Contact[]\n  messages  Message[]\n  templates Template[]\n\n  @@map(\"User\")\n}\n\nmodel Campaign {\n  campaignid    BigInt   @id @default(autoincrement())\n  userid        BigInt\n  campaign_name String\n  templateid    BigInt // ✅ column name as you want\n  createdON     DateTime @default(now()) @db.Timestamptz\n  status        Boolean  @default(true)\n\n  user User @relation(fields: [userid], references: [user_id], onDelete: Cascade)\n\n  template Template @relation(fields: [templateid], references: [template_id], onDelete: Cascade)\n\n  messages Message[]\n\n  @@map(\"campaign\")\n}\n\nmodel Contact {\n  contactid BigInt  @id @default(autoincrement())\n  name      String? @db.VarChar(255)\n  phonenum  String? @db.VarChar(20)\n  userid    BigInt?\n\n  created_at DateTime @default(now()) @map(\"created_at\")\n\n  user User? @relation(fields: [userid], references: [user_id], onDelete: Cascade)\n\n  receipts MessageReceipt[]\n\n  @@map(\"contacts\")\n}\n\nmodel Message {\n  messageid  BigInt   @id @default(autoincrement())\n  message    String   @db.Text\n  image      String?  @db.VarChar(255)\n  campaignid BigInt?\n  user_id    BigInt\n  button     String?  @db.Text\n  created_at DateTime @default(now()) @db.Timestamptz\n\n  user     User      @relation(fields: [user_id], references: [user_id], onDelete: Cascade)\n  campaign Campaign? @relation(fields: [campaignid], references: [campaignid])\n\n  receipts MessageReceipt[]\n\n  @@map(\"messages\")\n}\n\nmodel MessageReceipt {\n  sentid          BigInt    @id @default(autoincrement())\n  messageid       BigInt\n  contactid       BigInt\n  template_id     BigInt?\n  provider_msg_id String?   @db.VarChar(100)\n  status          String    @default(\"queued\") @db.VarChar(50)\n  sent_at         DateTime  @default(now()) @db.Timestamptz\n  delivered_at    DateTime? @db.Timestamptz\n  read_at         DateTime? @db.Timestamptz\n  error_message   String?   @db.Text\n\n  message  Message   @relation(fields: [messageid], references: [messageid], onDelete: Cascade)\n  contact  Contact   @relation(fields: [contactid], references: [contactid], onDelete: Cascade)\n  template Template? @relation(fields: [template_id], references: [template_id], onDelete: SetNull)\n\n  @@index([messageid])\n  @@index([contactid])\n  @@index([status])\n  @@index([provider_msg_id])\n  @@index([template_id])\n  @@map(\"message_receipts\")\n}\n\nmodel Template {\n  template_id BigInt @id @default(autoincrement())\n  created_by  BigInt\n\n  template_name String @unique @db.VarChar(100)\n  category      String @db.VarChar(30)\n  language      String @db.VarChar(10)\n  template_type String @default(\"custom\") @db.VarChar(30)\n\n  header_type      String? @db.VarChar(20)\n  header_text      String? @db.VarChar(255)\n  header_media_url String? @db.Text\n\n  message_body String  @db.Text\n  footer_text  String? @db.VarChar(255)\n\n  variable_count Int   @default(0)\n  variables      Json?\n\n  created_at DateTime  @default(now())\n  updated_at DateTime? @updatedAt\n\n  user      User             @relation(fields: [created_by], references: [user_id], onDelete: Cascade)\n  buttons   TemplateButton[]\n  receipts  MessageReceipt[]\n  campaigns Campaign[]\n\n  @@map(\"template_table\")\n}\n\nmodel TemplateButton {\n  button_id    Int      @id @default(autoincrement())\n  template_id  BigInt\n  button_type  String   @db.VarChar(30)\n  button_text  String   @db.VarChar(25)\n  button_value String?  @db.VarChar(255)\n  position     Int\n  created_at   DateTime @default(now())\n\n  template Template @relation(fields: [template_id], references: [template_id], onDelete: Cascade)\n\n  @@map(\"template_buttons\")\n}\n",
  "inlineSchemaHash": "52d341aac1cb9a578dc043faf5feaf30ef1a5bdd55b36ff915198a81a020a9e6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"first_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"last_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"whatsapp_number\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gst_num\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"business_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"api_key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isPremium\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"created_by\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"campaigns\",\"kind\":\"object\",\"type\":\"Campaign\",\"relationName\":\"CampaignToUser\"},{\"name\":\"contacts\",\"kind\":\"object\",\"type\":\"Contact\",\"relationName\":\"ContactToUser\"},{\"name\":\"messages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageToUser\"},{\"name\":\"templates\",\"kind\":\"object\",\"type\":\"Template\",\"relationName\":\"TemplateToUser\"}],\"dbName\":\"User\"},\"Campaign\":{\"fields\":[{\"name\":\"campaignid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"userid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"campaign_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"templateid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"createdON\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CampaignToUser\"},{\"name\":\"template\",\"kind\":\"object\",\"type\":\"Template\",\"relationName\":\"CampaignToTemplate\"},{\"name\":\"messages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"CampaignToMessage\"}],\"dbName\":\"campaign\"},\"Contact\":{\"fields\":[{\"name\":\"contactid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phonenum\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ContactToUser\"},{\"name\":\"receipts\",\"kind\":\"object\",\"type\":\"MessageReceipt\",\"relationName\":\"ContactToMessageReceipt\"}],\"dbName\":\"contacts\"},\"Message\":{\"fields\":[{\"name\":\"messageid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"campaignid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"button\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"MessageToUser\"},{\"name\":\"campaign\",\"kind\":\"object\",\"type\":\"Campaign\",\"relationName\":\"CampaignToMessage\"},{\"name\":\"receipts\",\"kind\":\"object\",\"type\":\"MessageReceipt\",\"relationName\":\"MessageToMessageReceipt\"}],\"dbName\":\"messages\"},\"MessageReceipt\":{\"fields\":[{\"name\":\"sentid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"messageid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"contactid\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"template_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"provider_msg_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"delivered_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"read_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"error_message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"MessageToMessageReceipt\"},{\"name\":\"contact\",\"kind\":\"object\",\"type\":\"Contact\",\"relationName\":\"ContactToMessageReceipt\"},{\"name\":\"template\",\"kind\":\"object\",\"type\":\"Template\",\"relationName\":\"MessageReceiptToTemplate\"}],\"dbName\":\"message_receipts\"},\"Template\":{\"fields\":[{\"name\":\"template_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"created_by\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"template_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"language\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"template_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"header_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"header_text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"header_media_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message_body\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"footer_text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"variable_count\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"variables\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TemplateToUser\"},{\"name\":\"buttons\",\"kind\":\"object\",\"type\":\"TemplateButton\",\"relationName\":\"TemplateToTemplateButton\"},{\"name\":\"receipts\",\"kind\":\"object\",\"type\":\"MessageReceipt\",\"relationName\":\"MessageReceiptToTemplate\"},{\"name\":\"campaigns\",\"kind\":\"object\",\"type\":\"Campaign\",\"relationName\":\"CampaignToTemplate\"}],\"dbName\":\"template_table\"},\"TemplateButton\":{\"fields\":[{\"name\":\"button_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"template_id\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"button_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"button_text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"button_value\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"position\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"template\",\"kind\":\"object\",\"type\":\"Template\",\"relationName\":\"TemplateToTemplateButton\"}],\"dbName\":\"template_buttons\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

