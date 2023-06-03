migrate((db) => {
  const collection = new Collection({
    "id": "mbsri1za1aw54vv",
    "created": "2023-05-27 11:25:41.926Z",
    "updated": "2023-05-27 11:25:41.926Z",
    "name": "aliments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mzpp9nk3",
        "name": "Nom",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "s8mw2mkc",
        "name": "Categorie",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Fruit",
            "légume",
            "viande",
            "autre"
          ]
        }
      },
      {
        "system": false,
        "id": "miwm3kiv",
        "name": "Image",
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
      },
      {
        "system": false,
        "id": "mggxu9yd",
        "name": "Description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mbsri1za1aw54vv");

  return dao.deleteCollection(collection);
})
