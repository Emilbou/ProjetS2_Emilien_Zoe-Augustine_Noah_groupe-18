<script setup lang="ts">
import { pb } from '@/backend';
import type { MaisonResponse } from '@/pocketbase-types';

const props: MaisonResponse = defineProps<MaisonResponse>()

const img0 = props.images[0]
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>
<template>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative rounded-lg bg-white border-[1.5px] border-indigo-100">
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[200px]">
        <div className="w-[342px] h-[200px] absolute left-[-0.5px] top-[-0.5px] rounded-tl-lg rounded-tr-lg bg-gray-500" />
        <img
          :src="urlImg0"
          className="w-[342px] h-[235px] absolute left-[-0.5px] top-[-24.5px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[15px] px-5 py-[30px]">
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
          <div className="flex-grow-0 flex-shrink-0 w-[249px] h-[75px]">
            <div className="flex justify-start items-end w-[164.11px] absolute left-0 top-0 gap-0.5">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-indigo-500">
                {{prix}}
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[58px] h-8 text-base text-left text-gray-500">
                /month
              </p>
            </div>
            <p className="w-[249px] absolute left-0 top-[43px] text-2xl font-semibold text-left text-gray-900">
              {{nomMaison}}
            </p>
          </div>
          
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[302px] text-base text-left text-gray-500">
          {{adresse}}
        </p>
        
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{surface}}</p>
          </div>
        </div>
     
</template>