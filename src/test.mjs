<script lang='ts'></script>

import PocketBase from 'pocketbase';
import { Script } from 'vm';

const pb = new PocketBase('http://127.0.0.1:8090');


// fetch a paginated records list

// you can also fetch all records at once via getFullList

// or fetch only the first record that matches the specified filter
const test = pb.getFileUrl;
return test