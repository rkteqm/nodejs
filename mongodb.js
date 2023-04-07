// Mongo DB is case sensitive
// Mongo DB has no schema
// It stores data in the form of BSON (like JSON)

// show databases
"show dbs";

// create or use database
"use db_name";

// for creating and inserting one row/document in "items" table/collection
db.items.insertOne({ name: "Kunal Singh", age: 24, address: "Mani Majra" });
db.items.insertOne({
  name: "Kunal Singh",
  age: 19,
  price: 1234,
  address: "Mani Majra",
});

// for inserting many row/document in items table/collection
db.items.insertMany([
  { name: "Kunal Singh", age: 20, price: 40, address: "Mani Majra" },
  { name: "Deepu", age: 28, price: 1110, address: "Haryana" },
  { name: "Abishek", age: 44, price: 500, address: "Punjab" },
  { name: "Abishek", age: 44, price: 10, address: "Punjab" },
]);

// This query will return all the objects/data from items collection/table
db.items.find();

// This query will return all the objects from items collection where age equals to 23
db.items.find({ age: 23 });

// This query will return all the objects from items collection where age equals or greater than to 23
db.items.find({ age: { $gte: 23 } });

// This query will return all the objects from items collection where age greater than to 23
db.items.find({ age: { $gt: 23 } });

// This query will return all the objects from items collection where age equals or less than to 23
db.items.find({ age: { $lte: 23 } });

// This query will return all the objects from items collection where age less than to 23
db.items.find({ age: { $lt: 23 } });

// This query will return all the objects from items collection where age greater than to 23 & name equal to "Abishek"
db.items.find({ age: { $gt: 23 }, name: "Abishek" });

// This query will return all the objects from items collection where age equal to 23 *****AND***** name equal to "Rahul Kumar"
db.items.find({ age: 23, name: "Rahul Kumar" });

// This query will return all the objects from items collection where age greater than 23 *****AND***** price less than 100
db.items.find({ age: { $gt: 23 }, price: { $lt: 100 } })

// This query will return all the objects from items collection where age greater than 23 *****OR***** price less than 100
db.items.find({ $or: [{ age: { $gt: 23 } }, { price: { $lt: 100 } }] })
