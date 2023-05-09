migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // remove
  collection.schema.removeField("8rl7pwq9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8z7h6fc",
    "name": "favori",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rl7pwq9",
    "name": "favori",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("u8z7h6fc")

  return dao.saveCollection(collection)
})
