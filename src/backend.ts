import PocketBase from 'pocketbase';
import type { AlimentsResponse, ProduitResponse, RecetteResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');



export async function allProduit() {
  return await pb.collection('produit').getFullList<ProduitResponse>();
}

export async function allRecette() {
  return await pb.collection('recette').getFullList<RecetteResponse>();
}


export async function getIDproduit(id:string) {
  
  const records = await pb.collection('produit').getOne<ProduitResponse>(id)
  return records;
}

export async function getIDrecette(id:string) {
  
  const records = await pb.collection('recette').getOne<RecetteResponse>(id)
  return records;
}
