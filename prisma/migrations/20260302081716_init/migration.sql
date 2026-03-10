-- CreateTable
CREATE TABLE "User" (
    "user_id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "whatsapp_number" VARCHAR(50) NOT NULL,
    "website" VARCHAR(255),
    "country" VARCHAR(100),
    "gst_num" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "business_name" VARCHAR(255),
    "role" VARCHAR(50) NOT NULL DEFAULT 'client',
    "api_key" TEXT,
    "status" SMALLINT DEFAULT 1,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "created_by" VARCHAR(20) DEFAULT 'self',

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "campaign" (
    "campaignid" BIGSERIAL NOT NULL,
    "userid" BIGINT NOT NULL,
    "createdON" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "campaign_pkey" PRIMARY KEY ("campaignid")
);

-- CreateTable
CREATE TABLE "contacts" (
    "contactId" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),
    "phoneNum" VARCHAR(20),
    "userId" BIGINT,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "messages" (
    "messageid" BIGSERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "image" VARCHAR(255),
    "campaignid" BIGINT,
    "user_id" BIGINT NOT NULL,
    "button" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("messageid")
);

-- CreateTable
CREATE TABLE "message_receipts" (
    "sentid" BIGSERIAL NOT NULL,
    "messageid" BIGINT NOT NULL,
    "contactid" BIGINT NOT NULL,
    "template_id" INTEGER,
    "provider_msg_id" VARCHAR(100),
    "status" VARCHAR(50) NOT NULL DEFAULT 'queued',
    "sent_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivered_at" TIMESTAMPTZ,
    "read_at" TIMESTAMPTZ,
    "error_message" TEXT,

    CONSTRAINT "message_receipts_pkey" PRIMARY KEY ("sentid")
);

-- CreateTable
CREATE TABLE "template_table" (
    "template_id" SERIAL NOT NULL,
    "created_by" BIGINT NOT NULL,
    "template_name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(30) NOT NULL,
    "language" VARCHAR(10) NOT NULL,
    "template_type" VARCHAR(30) NOT NULL DEFAULT 'custom',
    "header_type" VARCHAR(20),
    "header_text" VARCHAR(255),
    "header_media_url" TEXT,
    "message_body" TEXT NOT NULL,
    "footer_text" VARCHAR(255),
    "variable_count" INTEGER NOT NULL DEFAULT 0,
    "variables" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_table_pkey" PRIMARY KEY ("template_id")
);

-- CreateTable
CREATE TABLE "template_buttons" (
    "button_id" SERIAL NOT NULL,
    "template_id" INTEGER NOT NULL,
    "button_type" VARCHAR(30) NOT NULL,
    "button_text" VARCHAR(25) NOT NULL,
    "button_value" VARCHAR(255),
    "position" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "template_buttons_pkey" PRIMARY KEY ("button_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_whatsapp_number_key" ON "User"("whatsapp_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_gst_num_key" ON "User"("gst_num");

-- CreateIndex
CREATE INDEX "message_receipts_messageid_idx" ON "message_receipts"("messageid");

-- CreateIndex
CREATE INDEX "message_receipts_contactid_idx" ON "message_receipts"("contactid");

-- CreateIndex
CREATE INDEX "message_receipts_status_idx" ON "message_receipts"("status");

-- CreateIndex
CREATE INDEX "message_receipts_provider_msg_id_idx" ON "message_receipts"("provider_msg_id");

-- CreateIndex
CREATE INDEX "message_receipts_template_id_idx" ON "message_receipts"("template_id");

-- CreateIndex
CREATE UNIQUE INDEX "template_table_template_name_key" ON "template_table"("template_name");

-- AddForeignKey
ALTER TABLE "campaign" ADD CONSTRAINT "campaign_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_campaignid_fkey" FOREIGN KEY ("campaignid") REFERENCES "campaign"("campaignid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_messageid_fkey" FOREIGN KEY ("messageid") REFERENCES "messages"("messageid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_contactid_fkey" FOREIGN KEY ("contactid") REFERENCES "contacts"("contactId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_receipts" ADD CONSTRAINT "message_receipts_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "template_table"("template_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "template_table" ADD CONSTRAINT "template_table_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "template_buttons" ADD CONSTRAINT "template_buttons_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "template_table"("template_id") ON DELETE CASCADE ON UPDATE CASCADE;
