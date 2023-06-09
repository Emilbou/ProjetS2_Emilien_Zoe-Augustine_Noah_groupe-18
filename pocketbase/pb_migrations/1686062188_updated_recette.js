migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8pifaauhvlcel5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "92u7cfty",
    "name": "image_recette",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8pifaauhvlcel5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "92u7cfty",
    "name": "image_recette",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
