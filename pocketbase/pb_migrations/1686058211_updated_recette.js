migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8pifaauhvlcel5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xqhl4ywo",
    "name": "temps_recette",
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
  const collection = dao.findCollectionByNameOrId("b8pifaauhvlcel5")

  // remove
  collection.schema.removeField("xqhl4ywo")

  return dao.saveCollection(collection)
})
