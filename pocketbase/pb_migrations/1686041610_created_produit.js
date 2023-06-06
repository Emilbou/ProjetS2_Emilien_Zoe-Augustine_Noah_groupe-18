migrate((db) => {
  const collection = new Collection({
    "id": "o0iuo4ilebujq4h",
    "created": "2023-06-06 08:53:30.263Z",
    "updated": "2023-06-06 08:53:30.263Z",
    "name": "produit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "82qinjb3",
        "name": "nom_produit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3tldfb93",
        "name": "image_produit",
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
        "id": "rnokpbnt",
        "name": "description_produit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zcq458rj",
        "name": "prix_produit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("o0iuo4ilebujq4h");

  return dao.deleteCollection(collection);
})
