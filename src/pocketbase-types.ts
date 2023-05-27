/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Aliments = "aliments",
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

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AlimentsResponse = Required<AlimentsRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	aliments: AlimentsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	aliments: AlimentsResponse
	users: UsersResponse
}