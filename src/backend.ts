import PocketBase from 'pocketbase';
import type { AlimentsResponse, ProduitResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function allAliments() {
  return await pb.collection('aliments').getFullList<AlimentsResponse>();
}

export async function allProduit() {
  return await pb.collection('produit').getFullList<ProduitResponse>();
}