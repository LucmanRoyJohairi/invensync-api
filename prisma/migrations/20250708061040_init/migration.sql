-- CreateTable
CREATE TABLE "inventory_items" (
    "id" UUID NOT NULL,
    "item_id" TEXT,
    "store_id" TEXT,
    "quantity" TEXT,
    "updated_at" DATE,

    CONSTRAINT "inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_stocks" (
    "id" UUID NOT NULL,
    "item_id" TEXT,
    "store_id" TEXT,
    "quantity" INTEGER,
    "updated_at" DATE,

    CONSTRAINT "inventory_stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" UUID NOT NULL,
    "order_id" TEXT,
    "item_id" TEXT,
    "quantity" INTEGER,
    "unit_price" MONEY,
    "sub_total" MONEY,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "store_id" TEXT,
    "user_id" TEXT,
    "order_date" DATE,
    "status" TEXT,
    "total_amount" MONEY,
    "created_at" DATE,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" UUID NOT NULL,
    "store_name" TEXT,
    "location" TEXT,
    "type" TEXT,
    "created_at" DATE,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_order_items" (
    "id" UUID NOT NULL,
    "supplier_id" TEXT,
    "item_id" TEXT,
    "quantity" INTEGER,
    "unit_cost" MONEY,
    "sub_total" MONEY,

    CONSTRAINT "supplier_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_orders" (
    "id" UUID NOT NULL,
    "supplier_id" TEXT,
    "store_id" TEXT,
    "order_date" DATE,
    "status" TEXT,
    "total_amount" TEXT,

    CONSTRAINT "supplier_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "contact_name" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "created_at" DATE,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "store_id" INTEGER,
    "name" TEXT,
    "email" TEXT,
    "password_hash" TEXT,
    "role" TEXT,
    "created_at" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
