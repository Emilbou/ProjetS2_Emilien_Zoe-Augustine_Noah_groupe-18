/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Aliments = "aliments",
	Produit = "produit",
	Recette = "recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AlimentsCategorieOptions {
	"Fruit" = "Fruit",
	"légume" = "légume",
	"viande" = "viande",
	"autre" = "autre",
}
export type AlimentsRecord = {
	Nom: string
	Categorie: AlimentsCategorieOptions
	Image?: string
	Description?: HTMLString
}

export type ProduitRecord = {
	nom_produit?: string
	image_produit?: string
	description_produit?: string
	prix_produit?: string
}

export type RecetteRecord = {
	titre_recette?: string
	image_recette?: string
	description_recette?: string
	ingredient_recette?: string
	etapes_preparation?: string
	id_consommateur?: string
	temps_recette?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AlimentsResponse = Required<AlimentsRecord> & BaseSystemFields
export type ProduitResponse = Required<ProduitRecord> & BaseSystemFields
export type RecetteResponse = Required<RecetteRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	aliments: AlimentsRecord
	produit: ProduitRecord
	recette: RecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	aliments: AlimentsResponse
	produit: ProduitResponse
	recette: RecetteResponse
	users: UsersResponse
}