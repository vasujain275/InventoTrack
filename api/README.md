# InvetoTrack API

# Models

- Admin
- Product
- Warehouse
- Order
- Seller
- Customer
- Category
- ProductWarehouse

![image](https://github.com/vasujain275/InventoTrack/assets/69643310/bb668fa3-45f5-4326-8251-6b037ff5b153)


# API Routes

## Product Routes
- **GET /api/v1/products**: Retrieve a list of all products.
- **GET /api/v1/products/:id**: Retrieve a specific product by `id`.
- **GET /api/v1/products/warehouse/:warehouseId**: Retrieve products for a specific warehouse by `warehouseId`.
- **GET /api/v1/products/seller/:sellerId**: Retrieve products for a specific seller by `sellerId`.
- **GET /api/v1/products/category/:categoryId**: Retrieve products for a specific category by `categoryId`.
- **GET /api/v1/products/:id/warehouse/:warehouseId**: Retrieve a specific product by `id` and `warehouseId`.
- **POST /api/v1/products**: Create a new product.
- **PUT /api/v1/products/:id**: Update a specific product by `id`.
- **DELETE /api/v1/products/:id**: Delete a specific product by `id`.

## Admin Routes
- **GET /api/v1/admins**: Retrieve a list of all admins.
- **GET /api/v1/admins/:id**: Retrieve a specific admin by `id`.
- **GET /api/v1/admins/email/:email**: Retrieve a specific admin by `email`.
- **POST /api/v1/admins**: Create a new admin.
- **PUT /api/v1/admins/:id**: Update a specific admin by `id`.
- **PUT /api/v1/admins/email/:email**: Update a specific admin by `email`.
- **DELETE /api/v1/admins/:id**: Delete a specific admin by `id`.

## Seller Routes
- **GET /api/v1/sellers**: Retrieve a list of all sellers.
- **GET /api/v1/sellers/:id**: Retrieve a specific seller by `id`.
- **GET /api/v1/sellers/email/:email**: Retrieve a specific seller by `email`.
- **POST /api/v1/sellers**: Create a new seller.
- **PUT /api/v1/sellers/:id**: Update a specific seller by `id`.
- **PUT /api/v1/sellers/email/:email**: Update a specific seller by `email`.
- **DELETE /api/v1/sellers/:id**: Delete a specific seller by `id`.

## Customer Routes
- **GET /api/v1/customers**: Retrieve a list of all customers.
- **GET /api/v1/customers/:id**: Retrieve a specific customer by `id`.
- **GET /api/v1/customers/email/:email**: Retrieve a specific customer by `email`.
- **POST /api/v1/customers**: Create a new customer.
- **PUT /api/v1/customers/:id**: Update a specific customer by `id`.
- **PUT /api/v1/customers/email/:email**: Update a specific customer by `email`.
- **DELETE /api/v1/customers/:id**: Delete a specific customer by `id`.

## Category Routes
- **GET /api/v1/categories**: Retrieve a list of all categories.
- **GET /api/v1/categories/:id**: Retrieve a specific category by `id`.
- **POST /api/v1/categories**: Create a new category.
- **PUT /api/v1/categories/:id**: Update a specific category by `id`.
- **DELETE /api/v1/categories/:id**: Delete a specific category by `id`.

## Warehouse Routes
- **GET /api/v1/warehouses**: Retrieve a list of all warehouses.
- **GET /api/v1/warehouses/:id**: Retrieve a specific warehouse by `id`.
- **POST /api/v1/warehouses**: Create a new warehouse.
- **PUT /api/v1/warehouses/:id**: Update a specific warehouse by `id`.
- **DELETE /api/v1/warehouses/:id**: Delete a specific warehouse by `id`.

## Order Routes
- **GET /api/v1/orders**: Retrieve a list of all orders.
- **GET /api/v1/orders/:id**: Retrieve a specific order by `id`.
- **GET /api/v1/orders/warehouse/:warehouseId**: Retrieve orders for a specific warehouse by `warehouseId`.
- **GET /api/v1/orders/seller/:sellerId**: Retrieve orders for a specific seller by `sellerId`.
- **GET /api/v1/orders/customer/:customerId**: Retrieve orders for a specific customer by `customerId`.
- **GET /api/v1/orders/category/:categoryId**: Retrieve orders for a specific category by `categoryId`.
- **GET /api/v1/orders/date-range?startDate=<startDate>&endDate=<endDate>**: Retrieve orders within a specific date range using query parameters `startDate` and `endDate`.
- **GET /api/v1/orders/:id/warehouse/:warehouseId**: Retrieve a specific order by `id` and `warehouseId`.
- **POST /api/v1/orders**: Create a new order.
- **PUT /api/v1/orders/:id**: Update a specific order by `id`.
- **DELETE /api/v1/orders/:id**: Delete a specific order by `id`.

## Summary of Routes with Parameters
1. **GET Routes**:
   - `/api/v1/products`
   - `/api/v1/products/:id`
   - `/api/v1/products/warehouse/:warehouseId`
   - `/api/v1/products/seller/:sellerId`
   - `/api/v1/products/category/:categoryId`
   - `/api/v1/products/:id/warehouse/:warehouseId`
   - `/api/v1/admins`
   - `/api/v1/admins/:id`
   - `/api/v1/admins/email/:email`
   - `/api/v1/sellers`
   - `/api/v1/sellers/:id`
   - `/api/v1/sellers/email/:email`
   - `/api/v1/customers`
   - `/api/v1/customers/:id`
   - `/api/v1/customers/email/:email`
   - `/api/v1/categories`
   - `/api/v1/categories/:id`
   - `/api/v1/warehouses`
   - `/api/v1/warehouses/:id`
   - `/api/v1/orders`
   - `/api/v1/orders/:id`
   - `/api/v1/orders/warehouse/:warehouseId`
   - `/api/v1/orders/seller/:sellerId`
   - `/api/v1/orders/customer/:customerId`
   - `/api/v1/orders/category/:categoryId`
   - `/api/v1/orders/date-range?startDate=<startDate>&endDate=<endDate>`
   - `/api/v1/orders/:id/warehouse/:warehouseId`

2. **POST Routes**:
   - `/api/v1/products`
   - `/api/v1/admins`
   - `/api/v1/sellers`
   - `/api/v1/customers`
   - `/api/v1/categories`
   - `/api/v1/warehouses`
   - `/api/v1/orders`

3. **PUT Routes**:
   - `/api/v1/products/:id`
   - `/api/v1/admins/:id`
   - `/api/v1/admins/email/:email`
   - `/api/v1/sellers/:id`
   - `/api/v1/sellers/email/:email`
   - `/api/v1/customers/:id`
   - `/api/v1/customers/email/:email`
   - `/api/v1/categories/:id`
   - `/api/v1/warehouses/:id`
   - `/api/v1/orders/:id`

4. **DELETE Routes**:
   - `/api/v1/products/:id`
   - `/api/v1/admins/:id`
   - `/api/v1/sellers/:id`
   - `/api/v1/customers/:id`
   - `/api/v1/categories/:id`
   - `/api/v1/warehouses/:id`
   - `/api/v1/orders/:id`
