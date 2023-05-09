migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // remove
  collection.schema.removeField("vwwlkvvr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qbipiyqn",
    "name": "nomMaison",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("swhy2r0ofcnrrab")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwwlkvvr",
    "name": "nomMaison",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("qbipiyqn")

  return dao.saveCollection(collection)
})
