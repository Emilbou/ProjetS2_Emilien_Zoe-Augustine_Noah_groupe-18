migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4nayxzem",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4nayxzem",
    "name": "images",
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
})
