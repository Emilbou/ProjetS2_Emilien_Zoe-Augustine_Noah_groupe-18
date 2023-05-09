import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');




const records2 = await pb.collection('maison').getFullList({
    sort: '-created',
});
console.log(JSON.stringify(records2,null,2));

debugger



