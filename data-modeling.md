# Tables:
+ remember: Sequelize creates implicit `id`, `createdAt` and `updatedAt` fields in each table.
+ seeder file bulkInsert function does not need the `id` field included in each object, but will fail if there is no `createdAt` or `updatedAt` fields in a record.

## Stores:
+ (`id`): integer (primary key, corresponds with store_number)
+ `name`: string
+ `abbr`: string
+ `street_address`: string
+ `city`: string
+ `state`: string
+ `zip`: string
+ `phone_number`: string
+ `fax_number`: string
+ `store_manager`: string
+ (`createdAt`): timestamp
+ (`updatedAt`): timestamp

## Users:
+ (`id`): integer (primary key)
+ `first_name`: string
+ `last_name`: string
+ `email`: string, unique
+ `salted_hashed_pass`: string
+ `email_verified`:boolean (default false; true once email verification is complete)
+ `store_number`: integer
+ `role`: enum('member', 'steward', 'admin')
+ (`createdAt`): timestamp
+ (`updatedAt`): timestamp

## Ulpdata:
+ (`id`): integer (primary key)
+ `submitted_by`: integer (foreign key: `Users.id`)
+ `subsec1` : boolean
+ `subsec2` : boolean
+ `subsec3` : boolean
+ `subsec4` : boolean
+ `subsec5` : boolean
+ `subsec6` : boolean
+ `subsec7` : boolean
+ `date_of_incident`: string
+ `store_number`: integer (foreign key: `Stores.id`)
+ `staff_witnesses`: string
+ `offending_manager`: string
+ `incident_summary`: string
+ (`createdAt`): timestamp
+ (`updatedAt`): timestamp
