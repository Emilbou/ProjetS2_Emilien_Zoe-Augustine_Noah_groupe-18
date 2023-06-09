import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

try { const records = await pb.collection('aliments').getFullList() ;
console.table(records) ;
} catch (e) {
console.error(e) ;
}

export async function allAliments() {

    return await pb.collection('aliment').getFullList<AlimentResponse>(0)
  
  }
  
