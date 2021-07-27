(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    341: function(t, e, i) {
        t.exports = function() {
            return i(342)('!function(t){var e={};function r(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var o,s=function(t,e,r){return{x:t,y:e,z:r}},n=("undefined"==typeof navigator||void 0===navigator.hardwareConcurrency||navigator.hardwareConcurrency,32),a=.5;s(.35,1.3,.35),s(.3,1.3,.3);!function(t){t[t.AIR=0]="AIR",t[t.GRASS=1]="GRASS",t[t.DIRT=2]="DIRT",t[t.SAND=3]="SAND",t[t.ROCK=4]="ROCK",t[t.LOG_UP=5]="LOG_UP",t[t.LEAVES=6]="LEAVES",t[t.LEAVES_WITH_RED_BERRIES=7]="LEAVES_WITH_RED_BERRIES",t[t.LEAVES_WITH_ORANGE_BERRIES=8]="LEAVES_WITH_ORANGE_BERRIES",t[t.BEDROCK=9]="BEDROCK",t[t.TEMPLE_BRICK=10]="TEMPLE_BRICK",t[t.MOSSY_TEMPLE_BRICK=11]="MOSSY_TEMPLE_BRICK",t[t.CRACKED_TEMPLE_BRICK=12]="CRACKED_TEMPLE_BRICK",t[t.MYSTICAL_TEMPLE_BRICK=13]="MYSTICAL_TEMPLE_BRICK",t[t.WATER_SOURCE=14]="WATER_SOURCE",t[t.WOODEN_CRATE=15]="WOODEN_CRATE",t[t.REINFORCED_IRON=16]="REINFORCED_IRON",t[t.EMERALD_ORE=17]="EMERALD_ORE",t[t.RUBY_ORE=18]="RUBY_ORE",t[t.SAPPHIRE_ORE=19]="SAPPHIRE_ORE",t[t.IRON_ORE=20]="IRON_ORE",t[t.WOOD=21]="WOOD",t[t.STONE_BRICK=22]="STONE_BRICK",t[t.WOODEN_CHEST=23]="WOODEN_CHEST",t[t.IRON_CHEST=24]="IRON_CHEST",t[t.GOLDEN_CHEST=25]="GOLDEN_CHEST",t[t.CACTUS_X=26]="CACTUS_X",t[t.CACTUS_Y=27]="CACTUS_Y",t[t.CACTUS_Z=28]="CACTUS_Z",t[t.SAND_TREASURE_MARKER=29]="SAND_TREASURE_MARKER",t[t.GRASS_TREASURE_MARKER=30]="GRASS_TREASURE_MARKER",t[t.SANDSTONE_BRICK=31]="SANDSTONE_BRICK",t[t.SANDSTONE_PILLAR=32]="SANDSTONE_PILLAR",t[t.SMOOTH_SANDSTONE_BRICK=33]="SMOOTH_SANDSTONE_BRICK",t[t.WORK_STATION=34]="WORK_STATION",t[t.SNOWY_GRASS=35]="SNOWY_GRASS",t[t.SAPPHIRE_STONE_BRICK=36]="SAPPHIRE_STONE_BRICK",t[t.RUBY_STONE_BRICK=37]="RUBY_STONE_BRICK",t[t.LOADOUT_STATION=38]="LOADOUT_STATION",t[t.BEDROCK_BRICK=39]="BEDROCK_BRICK",t[t.REINFORCED_RUBY=40]="REINFORCED_RUBY",t[t.REINFORCED_SAPPHIRE=41]="REINFORCED_SAPPHIRE",t[t.SULFUR_ORE=42]="SULFUR_ORE",t[t.BOMB=43]="BOMB",t[t.WATER_LEVEL_1=44]="WATER_LEVEL_1",t[t.WATER_LEVEL_2=45]="WATER_LEVEL_2",t[t.WATER_LEVEL_3=46]="WATER_LEVEL_3",t[t.WATER_LEVEL_4=47]="WATER_LEVEL_4",t[t.WATER_LEVEL_5=48]="WATER_LEVEL_5",t[t.WATER_LEVEL_6=49]="WATER_LEVEL_6",t[t.WATER_LEVEL_7=50]="WATER_LEVEL_7",t[t.WATER_FALL=51]="WATER_FALL"}(o||(o={}));var h,u=o;!function(t){t[t.FOOTSTEP_GRASS=0]="FOOTSTEP_GRASS",t[t.FOOTSTEP_SAND=1]="FOOTSTEP_SAND",t[t.FOOTSTEP_ROCKS=2]="FOOTSTEP_ROCKS",t[t.FOOTSTEP_BRICKS=3]="FOOTSTEP_BRICKS",t[t.FOOTSTEP_DIRT=4]="FOOTSTEP_DIRT",t[t.FOOTSTEP_LEAVES=5]="FOOTSTEP_LEAVES",t[t.ITEM_PICKUP=6]="ITEM_PICKUP",t[t.WATER_SPLASH=7]="WATER_SPLASH",t[t.FOOTSTEP_WATER=8]="FOOTSTEP_WATER",t[t.FOOTSTEP_WOOD=9]="FOOTSTEP_WOOD",t[t.GUN_SHOT_COMBAT_ASSAULT_RIFLE=10]="GUN_SHOT_COMBAT_ASSAULT_RIFLE",t[t.GUN_SHOT_TACTICAL_ASSAULT_RIFLE=11]="GUN_SHOT_TACTICAL_ASSAULT_RIFLE",t[t.GUN_SHOT_SURGE_ASSAULT_RIFLE=12]="GUN_SHOT_SURGE_ASSAULT_RIFLE",t[t.GUN_SHOT_STRIKE_PISTOL=13]="GUN_SHOT_STRIKE_PISTOL",t[t.GUN_SHOT_MAGNUM_PISTOL=14]="GUN_SHOT_MAGNUM_PISTOL",t[t.GUN_SHOT_BURST_SHOTGUN=15]="GUN_SHOT_BURST_SHOTGUN",t[t.GUN_SHOT_LIGHT_SUBMACHINE_GUN=16]="GUN_SHOT_LIGHT_SUBMACHINE_GUN",t[t.GUN_SHOT_COMPACT_SUBMACHINE_GUN=17]="GUN_SHOT_COMPACT_SUBMACHINE_GUN",t[t.GUN_SHOT_LIGHT_SNIPER_RIFLE=18]="GUN_SHOT_LIGHT_SNIPER_RIFLE",t[t.GUN_SHOT_HEAVY_SNIPER_RIFLE=19]="GUN_SHOT_HEAVY_SNIPER_RIFLE",t[t.GUN_RELOAD_START=20]="GUN_RELOAD_START",t[t.GUN_RELOAD_FINISH=21]="GUN_RELOAD_FINISH",t[t.HIT=22]="HIT",t[t.HIT_HEADSHOT=23]="HIT_HEADSHOT",t[t.KILL=24]="KILL",t[t.DAMAGE=25]="DAMAGE",t[t.ALERT_SHORT=26]="ALERT_SHORT",t[t.ALERT_LONG=27]="ALERT_LONG",t[t.ALERT_NEGATIVE=28]="ALERT_NEGATIVE",t[t.ALERT_AMBIENT=29]="ALERT_AMBIENT",t[t.ALERT_TICK=30]="ALERT_TICK",t[t.SPRAY=31]="SPRAY",t[t.CRATE_OPEN=32]="CRATE_OPEN",t[t.BOMB_FUSE=33]="BOMB_FUSE",t[t.BOMB_EXPLOSION=34]="BOMB_EXPLOSION"}(h||(h={}));var i,E,S=h,_={opaque:!1,solid:!1,textures:{top:{x:4,y:1},bottom:{x:4,y:1},left:{x:4,y:1},right:{x:4,y:1},front:{x:4,y:1},back:{x:4,y:1}},name:"Water",description:"Blue fluid that flows",hardness:1,maxStackSize:255},x=((i={})[u.AIR]={opaque:!1,solid:!1,name:"Air",description:"How did you get this?",hardness:1,maxStackSize:255},i[u.GRASS]={opaque:!0,solid:!0,textures:{top:{x:2,y:0},bottom:{x:0,y:0},left:{x:1,y:0},right:{x:1,y:0},front:{x:1,y:0},back:{x:1,y:0}},name:"Grass",description:"A dirt block with grass on top",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.DIRT]={opaque:!0,solid:!0,textures:{top:{x:0,y:0},bottom:{x:0,y:0},left:{x:0,y:0},right:{x:0,y:0},front:{x:0,y:0},back:{x:0,y:0}},name:"Dirt",description:"Muddy and squishy",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_DIRT},i[u.SAND]={opaque:!0,solid:!0,textures:{top:{x:3,y:0},bottom:{x:3,y:0},left:{x:3,y:0},right:{x:3,y:0},front:{x:3,y:0},back:{x:3,y:0}},name:"Sand",description:"Grainy, found near water",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_SAND},i[u.ROCK]={opaque:!0,solid:!0,textures:{top:{x:1,y:1},bottom:{x:1,y:1},left:{x:1,y:1},right:{x:1,y:1},front:{x:1,y:1},back:{x:1,y:1}},name:"Rock",description:"A natural resource found underground",hardness:2,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.LOG_UP]={opaque:!0,solid:!0,textures:{top:{x:5,y:0},bottom:{x:5,y:0},left:{x:4,y:0},right:{x:4,y:0},front:{x:4,y:0},back:{x:4,y:0}},name:"Log",description:"Unprocessed raw wood",hardness:1.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.LEAVES]={opaque:!0,solid:!0,textures:{top:{x:0,y:1},bottom:{x:0,y:1},left:{x:0,y:1},right:{x:0,y:1},front:{x:0,y:1},back:{x:0,y:1}},name:"Leaves",description:"Grow on logs",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_LEAVES},i[u.LEAVES_WITH_RED_BERRIES]={opaque:!0,solid:!0,textures:{top:{x:3,y:6},bottom:{x:3,y:6},left:{x:3,y:6},right:{x:3,y:6},front:{x:3,y:6},back:{x:3,y:6}},name:"Leaves",description:"Nurtures healthy red berries",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_LEAVES},i[u.LEAVES_WITH_ORANGE_BERRIES]={opaque:!0,solid:!0,textures:{top:{x:4,y:6},bottom:{x:4,y:6},left:{x:4,y:6},right:{x:4,y:6},front:{x:4,y:6},back:{x:4,y:6}},name:"Leaves",description:"Nurtures healthy orange berries",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_LEAVES},i[u.BEDROCK]={opaque:!0,solid:!0,textures:{top:{x:2,y:1},bottom:{x:2,y:1},left:{x:2,y:1},right:{x:2,y:1},front:{x:2,y:1},back:{x:2,y:1}},name:"Bedrock",description:"Indestructable",hardness:999999,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.TEMPLE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:3,y:1},bottom:{x:3,y:1},left:{x:3,y:1},right:{x:3,y:1},front:{x:3,y:1},back:{x:3,y:1}},name:"Temple Brick",description:"Myterious brick found on the temple walls",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.MOSSY_TEMPLE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:5,y:1},bottom:{x:5,y:1},left:{x:5,y:1},right:{x:5,y:1},front:{x:5,y:1},back:{x:5,y:1}},name:"Mossy Temple Brick",description:"Temple brick with some moss grown on it",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.CRACKED_TEMPLE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:0,y:2},bottom:{x:0,y:2},left:{x:0,y:2},right:{x:0,y:2},front:{x:0,y:2},back:{x:0,y:2}},name:"Cracked Temple Brick",description:"Temple brick with some cracks",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.MYSTICAL_TEMPLE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:1,y:2},bottom:{x:1,y:2},left:{x:1,y:2},right:{x:1,y:2},front:{x:1,y:2},back:{x:1,y:2}},name:"Mystical Temple Brick",description:"Temple brick with a mysterious pattern. No one knows what it means",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.WATER_SOURCE]=_,i[u.WATER_LEVEL_1]=_,i[u.WATER_LEVEL_2]=_,i[u.WATER_LEVEL_3]=_,i[u.WATER_LEVEL_4]=_,i[u.WATER_LEVEL_5]=_,i[u.WATER_LEVEL_6]=_,i[u.WATER_LEVEL_7]=_,i[u.WATER_FALL]=_,i[u.WOODEN_CRATE]={opaque:!0,solid:!0,textures:{top:{x:2,y:2},bottom:{x:2,y:2},left:{x:2,y:2},right:{x:2,y:2},front:{x:2,y:2},back:{x:2,y:2}},name:"Wooden Crate",description:"You might find some items inside",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.REINFORCED_IRON]={opaque:!0,solid:!0,textures:{top:{x:3,y:2},bottom:{x:3,y:2},left:{x:3,y:2},right:{x:3,y:2},front:{x:3,y:2},back:{x:3,y:2}},name:"Reinforced Iron",description:"Very durable material. Perfect for defense",hardness:6,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.EMERALD_ORE]={opaque:!0,solid:!0,textures:{top:{x:4,y:2},bottom:{x:4,y:2},left:{x:4,y:2},right:{x:4,y:2},front:{x:4,y:2},back:{x:4,y:2}},name:"Emerald Ore",description:"Stone filled with some emerald ore",hardness:2.1,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.SAPPHIRE_ORE]={opaque:!0,solid:!0,textures:{top:{x:5,y:2},bottom:{x:5,y:2},left:{x:5,y:2},right:{x:5,y:2},front:{x:5,y:2},back:{x:5,y:2}},name:"Sapphire Ore",description:"Stone filled with some sapphire ore",hardness:2.1,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.RUBY_ORE]={opaque:!0,solid:!0,textures:{top:{x:0,y:3},bottom:{x:0,y:3},left:{x:0,y:3},right:{x:0,y:3},front:{x:0,y:3},back:{x:0,y:3}},name:"Ruby Ore",description:"Stone filled with some ruby ore",hardness:2.1,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.IRON_ORE]={opaque:!0,solid:!0,textures:{top:{x:1,y:3},bottom:{x:1,y:3},left:{x:1,y:3},right:{x:1,y:3},front:{x:1,y:3},back:{x:1,y:3}},name:"Iron Ore",description:"Stone filled with some iron ore",hardness:2.1,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.WOOD]={opaque:!0,solid:!0,textures:{top:{x:7,y:0},bottom:{x:7,y:0},left:{x:7,y:0},right:{x:7,y:0},front:{x:7,y:0},back:{x:7,y:0}},name:"Wood",description:"Useful building material crafted from logs",hardness:1.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.STONE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:6,y:0},bottom:{x:6,y:0},left:{x:6,y:0},right:{x:6,y:0},front:{x:6,y:0},back:{x:6,y:0}},name:"Stone Brick",description:"Useful building material crafted from rocks",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.WOODEN_CHEST]={opaque:!0,solid:!0,textures:{top:{x:0,y:4},bottom:{x:0,y:4},left:{x:1,y:4},right:{x:1,y:4},front:{x:2,y:4},back:{x:1,y:4}},name:"Wooden Chest",description:"Low tier chest that can store some items",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.IRON_CHEST]={opaque:!0,solid:!0,textures:{top:{x:0,y:5},bottom:{x:0,y:5},left:{x:1,y:5},right:{x:1,y:5},front:{x:2,y:5},back:{x:1,y:5}},name:"Iron Chest",description:"Mid-tier chest that can store more items",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.GOLDEN_CHEST]={opaque:!0,solid:!0,textures:{top:{x:0,y:6},bottom:{x:0,y:6},left:{x:1,y:6},right:{x:1,y:6},front:{x:2,y:6},back:{x:1,y:6}},name:"Golden Chest",description:"High tier chest that can store many items",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.CACTUS_X]={opaque:!0,solid:!0,textures:{top:{x:4,y:3},bottom:{x:4,y:3},left:{x:3,y:3},right:{x:3,y:3},front:{x:4,y:3},back:{x:4,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.CACTUS_Y]={opaque:!0,solid:!0,textures:{top:{x:3,y:3},bottom:{x:3,y:3},left:{x:2,y:3},right:{x:2,y:3},front:{x:2,y:3},back:{x:2,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.CACTUS_Z]={opaque:!0,solid:!0,textures:{top:{x:2,y:3},bottom:{x:2,y:3},left:{x:4,y:3},right:{x:4,y:3},front:{x:3,y:3},back:{x:3,y:3}},name:"Cactus",description:"A plant that grows in the desert",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.SAND_TREASURE_MARKER]={opaque:!0,solid:!0,textures:{top:{x:6,y:1},bottom:{x:3,y:0},left:{x:3,y:0},right:{x:3,y:0},front:{x:3,y:0},back:{x:3,y:0}},name:"Sand with Treasure Marker",description:"Sand marked with a red cross on top. Treasures might be hidden below it",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_SAND},i[u.GRASS_TREASURE_MARKER]={opaque:!0,solid:!0,textures:{top:{x:7,y:1},bottom:{x:0,y:0},left:{x:1,y:0},right:{x:1,y:0},front:{x:1,y:0},back:{x:1,y:0}},name:"Grass with Treasure Marker",description:"Grass marked with a red cross on top. Treasures might be hidden below it",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.SANDSTONE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:6,y:2},bottom:{x:6,y:2},left:{x:6,y:2},right:{x:6,y:2},front:{x:6,y:2},back:{x:6,y:2}},name:"Sandstone Brick",description:"Useful building material crafted from sand",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.SANDSTONE_PILLAR]={opaque:!0,solid:!0,textures:{top:{x:7,y:2},bottom:{x:7,y:2},left:{x:6,y:3},right:{x:6,y:3},front:{x:6,y:3},back:{x:6,y:3}},name:"Sandstone Pillar",description:"Useful building material crafted from sand",hardness:2.5,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.SMOOTH_SANDSTONE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:7,y:2},bottom:{x:7,y:2},left:{x:7,y:2},right:{x:7,y:2},front:{x:7,y:2},back:{x:7,y:2}},name:"Smooth Sandstone Brick",description:"Useful building material crafted from sand",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.WORK_STATION]={opaque:!0,solid:!0,textures:{top:{x:4,y:4},bottom:{x:2,y:2},left:{x:3,y:4},right:{x:3,y:4},front:{x:5,y:4},back:{x:5,y:4}},name:"Work Station",description:"Allows you to craft more advanced items when placed on the ground nearby",hardness:.5,maxStackSize:255,sound:S.FOOTSTEP_WOOD},i[u.SNOWY_GRASS]={opaque:!0,solid:!0,textures:{top:{x:4,y:5},bottom:{x:0,y:0},left:{x:3,y:5},right:{x:3,y:5},front:{x:3,y:5},back:{x:3,y:5}},name:"Snowy Grass",description:"A dirt block with snowy grass on top",hardness:1,maxStackSize:255,sound:S.FOOTSTEP_GRASS},i[u.SAPPHIRE_STONE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:6,y:4},bottom:{x:6,y:4},left:{x:6,y:4},right:{x:6,y:4},front:{x:6,y:4},back:{x:6,y:4}},name:"Sapphire Stone Brick",description:"Stone brick made out of sapphire",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.RUBY_STONE_BRICK]={opaque:!0,solid:!0,textures:{top:{x:7,y:4},bottom:{x:7,y:4},left:{x:7,y:4},right:{x:7,y:4},front:{x:7,y:4},back:{x:7,y:4}},name:"Ruby Stone Brick",description:"Stone brick made out of ruby",hardness:4,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.LOADOUT_STATION]={opaque:!0,solid:!0,textures:{top:{x:5,y:5},bottom:{x:6,y:5},left:{x:6,y:5},right:{x:6,y:5},front:{x:6,y:5},back:{x:6,y:5}},name:"Loadout Station",description:"Supply station that allows you to choose your loadouts",hardness:2.5,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.BEDROCK_BRICK]={opaque:!0,solid:!0,textures:{top:{x:7,y:5},bottom:{x:7,y:5},left:{x:7,y:5},right:{x:7,y:5},front:{x:7,y:5},back:{x:7,y:5}},name:"Bedrock Brick",description:"Indestructible bricks made out of bedrock",hardness:999999,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.REINFORCED_RUBY]={opaque:!0,solid:!0,textures:{top:{x:5,y:6},bottom:{x:5,y:6},left:{x:5,y:6},right:{x:5,y:6},front:{x:5,y:6},back:{x:5,y:6}},name:"Reinforced Ruby",description:"Indestructable blocks made out of ruby",hardness:999999,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.REINFORCED_SAPPHIRE]={opaque:!0,solid:!0,textures:{top:{x:6,y:6},bottom:{x:6,y:6},left:{x:6,y:6},right:{x:6,y:6},front:{x:6,y:6},back:{x:6,y:6}},name:"Reinforced Sapphire",description:"Indestructable blocks made out of sapphire",hardness:999999,maxStackSize:255,sound:S.FOOTSTEP_BRICKS},i[u.SULFUR_ORE]={opaque:!0,solid:!0,textures:{top:{x:7,y:3},bottom:{x:7,y:3},left:{x:7,y:3},right:{x:7,y:3},front:{x:7,y:3},back:{x:7,y:3}},name:"Sulfur Ore",description:"Stone filled with some sulfur ore",hardness:2.1,maxStackSize:255,sound:S.FOOTSTEP_ROCKS},i[u.BOMB]={opaque:!0,solid:!0,textures:{top:{x:7,y:7},bottom:{x:7,y:6},left:{x:6,y:7},right:{x:6,y:7},front:{x:6,y:7},back:{x:6,y:7}},name:"Bomb",description:"Dangerous explosives that can be detonated when shot",hardness:.2,maxStackSize:4,sound:S.FOOTSTEP_GRASS},i),p=function(t,e,r,o){return e===n&&r===n&&o===n?t.topFrontLeft:-1===e&&r===n&&o===n?t.topFrontRight:e===n&&r===n&&-1===o?t.topBackLeft:-1===e&&r===n&&-1===o?t.topBackRight:e===n&&-1===r&&o===n?t.bottomFrontLeft:-1===e&&-1===r&&o===n?t.bottomFrontRight:e===n&&-1===r&&-1===o?t.bottomBackLeft:-1===e&&-1===r&&-1===o?t.bottomBackRight:e===n&&o===n?t.frontLeft[r]:-1===e&&o===n?t.frontRight[r]:e===n&&-1===o?t.backLeft[r]:-1===e&&-1===o?t.backRight[r]:r===n&&o===n?t.topFront[e]:r===n&&-1===o?t.topBack[e]:r===n&&e===n?t.topLeft[o]:r===n&&-1===e?t.topRight[o]:-1===r&&o===n?t.bottomFront[e]:-1===r&&-1===o?t.bottomBack[e]:-1===r&&e===n?t.bottomLeft[o]:-1===r&&-1===e?t.bottomRight[o]:-1===e?t.right[r][o]:e===n?t.left[r][o]:-1===r?t.bottom[e][o]:r===n?t.top[e][o]:-1===o?t.back[e][r]:o===n?t.front[e][r]:t.blocks[e*n*n+r*n+o]},T=function(t,e,r){return 255*[.3,.5,.7,1][t&&e?0:3-(t+e+r)]},l=function(t,e,r,o){var s=p(t,e,r,o);return x[s].solid},y=function(t,e,r,o){return p(t,e,r,o)===u.AIR},R=function(t,e,r,o){var s=p(t,e,r,o);return O(s)},O=function(t){return t===u.WATER_SOURCE||t===u.WATER_LEVEL_1||t===u.WATER_LEVEL_2||t===u.WATER_LEVEL_3||t===u.WATER_LEVEL_4||t===u.WATER_LEVEL_5||t===u.WATER_LEVEL_6||t===u.WATER_LEVEL_7||t===u.WATER_FALL},d=function(t,e,r,o){var s=p(t,e,r,o);return x[s].opaque},A=function(t){return t===u.WATER_LEVEL_1?.125:t===u.WATER_LEVEL_2?.25:t===u.WATER_LEVEL_3?.375:t===u.WATER_LEVEL_4?.5:t===u.WATER_LEVEL_5?.625:t===u.WATER_LEVEL_6?.75:t===u.WATER_LEVEL_7?.875:t===u.WATER_SOURCE||t===u.WATER_FALL?1:0},c=function(t){return t===u.WATER_LEVEL_1||t===u.WATER_LEVEL_2||t===u.WATER_LEVEL_3||t===u.WATER_LEVEL_4||t===u.WATER_LEVEL_5||t===u.WATER_LEVEL_6||t===u.WATER_LEVEL_7||t===u.WATER_FALL||t===u.WATER_SOURCE},f=function(t,e,r,o,s,n,a,h){if(s===u.WATER_FALL||n===u.WATER_FALL||a===u.WATER_FALL||h===u.WATER_FALL)return 1;if(s===u.WATER_SOURCE||n===u.WATER_SOURCE||a===u.WATER_SOURCE||h===u.WATER_SOURCE)return.9;var i=0;return(t>0||s===u.AIR)&&i++,(e>0||n===u.AIR)&&i++,(r>0||a===u.AIR)&&i++,(o>0||h===u.AIR)&&i++,(t+e+r+o)/i};!function(t){t.CHUNK_MESH_DATA="CHUNK_MESH_DATA",t.BLOCKS_MESH_DATA="BLOCKS_MESH_DATA"}(E||(E={}));var g,L=E;!function(t){t.CHUNK_MESH="CHUNK_MESH",t.BLOCKS_MESH="BLOCKS_MESH"}(g||(g={}));var m=g,b=function(t,e,r){return t+":"+e+":"+r},I=function(t,e,r,o){var s=t.blocks[b(e,r,o)];return void 0===s?u.AIR:s},C=function(t,e,r,o){return I(t,e,r,o)!==u.AIR},k=function(t,e,r,o){return void 0!==t.blocks[b(e,r,o)]},N=function(t){var e=[],r=[],o=[],n=[],h=[t.origin],u=new Set;for(u.add(b(t.origin.x,t.origin.y,t.origin.z));h.length>0;){var i=h.pop(),E=i.x,S=i.y,_=i.z,p=E-t.origin.x,l=S-t.origin.y,y=_-t.origin.z,R=C(t,E,S,_),O=b(E,S+1,_);if(R&&!C(t,E,S+1,_)){e.push((p+.5)*a,(l+.5)*a,(y+.5)*a),e.push((p-.5)*a,(l+.5)*a,(y+.5)*a),e.push((p-.5)*a,(l+.5)*a,(y-.5)*a),e.push((p+.5)*a,(l+.5)*a,(y-.5)*a);var d=T(C(t,E+1,S+1,_),C(t,E,S+1,_+1),C(t,E+1,S+1,_+1)),A=T(C(t,E,S+1,_+1),C(t,E-1,S+1,_),C(t,E-1,S+1,_+1)),c=T(C(t,E-1,S+1,_),C(t,E,S+1,_-1),C(t,E-1,S+1,_-1)),f=T(C(t,E,S+1,_-1),C(t,E+1,S+1,_),C(t,E+1,S+1,_-1));o.push(d),o.push(A),o.push(c),o.push(f),d+c<A+f?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var g=x[I(t,E,S,_)].textures.top;n.push(g.x,g.y,0,1),n.push(g.x,g.y,1,1),n.push(g.x,g.y,1,0),n.push(g.x,g.y,0,0)}else k(t,E,S+1,_)&&!u.has(O)&&(h.push(s(E,S+1,_)),u.add(O));var L=b(E,S-1,_);if(R&&!C(t,E,S-1,_)){e.push((p+.5)*a,(l-.5)*a,(y-.5)*a),e.push((p-.5)*a,(l-.5)*a,(y-.5)*a),e.push((p-.5)*a,(l-.5)*a,(y+.5)*a),e.push((p+.5)*a,(l-.5)*a,(y+.5)*a);var m=T(C(t,E+1,S-1,_),C(t,E,S-1,_-1),C(t,E+1,S-1,_-1)),N=T(C(t,E,S-1,_-1),C(t,E-1,S-1,_),C(t,E-1,S-1,_-1)),v=T(C(t,E-1,S-1,_),C(t,E,S-1,_+1),C(t,E-1,S-1,_+1)),P=T(C(t,E,S-1,_+1),C(t,E+1,S-1,_),C(t,E+1,S-1,_+1));o.push(m),o.push(N),o.push(v),o.push(P),m+v<N+P?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var U=x[I(t,E,S,_)].textures.bottom;n.push(U.x,U.y,0,1),n.push(U.x,U.y,1,1),n.push(U.x,U.y,1,0),n.push(U.x,U.y,0,0)}else k(t,E,S-1,_)&&!u.has(L)&&(h.push(s(E,S-1,_)),u.add(L));var B=b(E+1,S,_);if(R&&!C(t,E+1,S,_)){e.push((p+.5)*a,(l+.5)*a,(y+.5)*a),e.push((p+.5)*a,(l+.5)*a,(y-.5)*a),e.push((p+.5)*a,(l-.5)*a,(y-.5)*a),e.push((p+.5)*a,(l-.5)*a,(y+.5)*a);var F=T(C(t,E+1,S,_+1),C(t,E+1,S+1,_),C(t,E+1,S+1,_+1)),W=T(C(t,E+1,S+1,_),C(t,E+1,S,_-1),C(t,E+1,S+1,_-1)),K=T(C(t,E+1,S,_-1),C(t,E+1,S-1,_),C(t,E+1,S-1,_-1)),H=T(C(t,E+1,S-1,_),C(t,E+1,S,_+1),C(t,E+1,S-1,_+1));o.push(F),o.push(W),o.push(K),o.push(H),F+K<W+H?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var D=x[I(t,E,S,_)].textures.left;n.push(D.x,D.y,0,1),n.push(D.x,D.y,1,1),n.push(D.x,D.y,1,0),n.push(D.x,D.y,0,0)}else k(t,E+1,S,_)&&!u.has(B)&&(h.push(s(E+1,S,_)),u.add(B));var M=b(E-1,S,_);if(R&&!C(t,E-1,S,_)){e.push((p-.5)*a,(l+.5)*a,(y-.5)*a),e.push((p-.5)*a,(l+.5)*a,(y+.5)*a),e.push((p-.5)*a,(l-.5)*a,(y+.5)*a),e.push((p-.5)*a,(l-.5)*a,(y-.5)*a);var G=T(C(t,E-1,S,_-1),C(t,E-1,S+1,_),C(t,E-1,S+1,_-1)),V=T(C(t,E-1,S+1,_),C(t,E-1,S,_+1),C(t,E-1,S+1,_+1)),w=T(C(t,E-1,S,_+1),C(t,E-1,S-1,_),C(t,E-1,S-1,_+1)),q=T(C(t,E-1,S-1,_),C(t,E-1,S,_-1),C(t,E-1,S-1,_-1));o.push(G),o.push(V),o.push(w),o.push(q),G+w<V+q?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var z=x[I(t,E,S,_)].textures.right;n.push(z.x,z.y,0,1),n.push(z.x,z.y,1,1),n.push(z.x,z.y,1,0),n.push(z.x,z.y,0,0)}else k(t,E-1,S,_)&&!u.has(M)&&(h.push(s(E-1,S,_)),u.add(M));var Y=b(E,S,_+1);if(R&&!C(t,E,S,_+1)){e.push((p-.5)*a,(l+.5)*a,(y+.5)*a),e.push((p+.5)*a,(l+.5)*a,(y+.5)*a),e.push((p+.5)*a,(l-.5)*a,(y+.5)*a),e.push((p-.5)*a,(l-.5)*a,(y+.5)*a);var j=T(C(t,E-1,S,_+1),C(t,E,S+1,_+1),C(t,E-1,S+1,_+1)),X=T(C(t,E,S+1,_+1),C(t,E+1,S,_+1),C(t,E+1,S+1,_+1)),Z=T(C(t,E+1,S,_+1),C(t,E,S-1,_+1),C(t,E+1,S-1,_+1)),J=T(C(t,E,S-1,_+1),C(t,E-1,S,_+1),C(t,E-1,S-1,_+1));o.push(j),o.push(X),o.push(Z),o.push(J),j+Z<X+J?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var Q=x[I(t,E,S,_)].textures.front;n.push(Q.x,Q.y,0,1),n.push(Q.x,Q.y,1,1),n.push(Q.x,Q.y,1,0),n.push(Q.x,Q.y,0,0)}else k(t,E,S,_+1)&&!u.has(Y)&&(h.push(s(E,S,_+1)),u.add(Y));var $=b(E,S,_-1);if(R&&!C(t,E,S,_-1)){e.push((p+.5)*a,(l+.5)*a,(y-.5)*a),e.push((p-.5)*a,(l+.5)*a,(y-.5)*a),e.push((p-.5)*a,(l-.5)*a,(y-.5)*a),e.push((p+.5)*a,(l-.5)*a,(y-.5)*a);var tt=T(C(t,E+1,S,_-1),C(t,E,S+1,_-1),C(t,E+1,S+1,_-1)),et=T(C(t,E,S+1,_-1),C(t,E-1,S,_-1),C(t,E-1,S+1,_-1)),rt=T(C(t,E-1,S,_-1),C(t,E,S-1,_-1),C(t,E-1,S-1,_-1)),ot=T(C(t,E,S-1,_-1),C(t,E+1,S,_-1),C(t,E+1,S-1,_-1));o.push(tt),o.push(et),o.push(rt),o.push(ot),tt+rt<et+ot?(r.push(e.length/3-3,e.length/3-4,e.length/3-1),r.push(e.length/3-1,e.length/3-2,e.length/3-3)):(r.push(e.length/3-4,e.length/3-1,e.length/3-2),r.push(e.length/3-2,e.length/3-3,e.length/3-4));var st=x[I(t,E,S,_)].textures.back;n.push(st.x,st.y,0,1),n.push(st.x,st.y,1,1),n.push(st.x,st.y,1,0),n.push(st.x,st.y,0,0)}else k(t,E,S,_-1)&&!u.has($)&&(h.push(s(E,S,_-1)),u.add($))}return{position:s((t.origin.x+.5)*a,(t.origin.y+.5)*a,(t.origin.z+.5)*a),vertices:e,indices:r,aos:o,uvs:n}};onmessage=function(t){switch(t.data.event){case m.CHUNK_MESH:const e=function(t){for(var e=[],r=[],o=[],s=[],a=[],h=[],i=[],E=[],S=new Uint8Array(n*n*n*4),_=new Uint8Array(n*n*n*4),g=new Uint8Array(n*n*n*4),L=new Uint8Array(n*n*n*4),m=new Uint8Array(n*n*n*4),b=new Uint8Array(n*n*n*4),I=0;I<n;I++)for(var C=0;C<n;C++)for(var k=0;k<n;k++)if(!y(t,I,C,k)){var N=d(t,I,C,k),v=R(t,I,C,k),P=d(t,I,C+1,k);if(N&&!P||!N&&y(t,I,C+1,k)||v&&!R(t,I,C+1,k)){var U=4*(I*n*n+C*n+k);if(v&&P)S[U]=76,S[U+1]=76,S[U+2]=76,S[U+3]=76;else{var B=T(l(t,I+1,C+1,k),l(t,I,C+1,k+1),l(t,I+1,C+1,k+1)),F=T(l(t,I,C+1,k+1),l(t,I-1,C+1,k),l(t,I-1,C+1,k+1)),W=T(l(t,I-1,C+1,k),l(t,I,C+1,k-1),l(t,I-1,C+1,k-1)),K=T(l(t,I,C+1,k-1),l(t,I+1,C+1,k),l(t,I+1,C+1,k-1));S[U]=B,S[U+1]=F,S[U+2]=W,S[U+3]=K}}if(N&&!d(t,I,C-1,k)||!N&&y(t,I,C-1,k)){var H=T(l(t,I+1,C-1,k),l(t,I,C-1,k-1),l(t,I+1,C-1,k-1)),D=T(l(t,I,C-1,k-1),l(t,I-1,C-1,k),l(t,I-1,C-1,k-1)),M=T(l(t,I-1,C-1,k),l(t,I,C-1,k+1),l(t,I-1,C-1,k+1)),G=T(l(t,I,C-1,k+1),l(t,I+1,C-1,k),l(t,I+1,C-1,k+1)),V=4*(I*n*n+C*n+k);_[V]=H,_[V+1]=D,_[V+2]=M,_[V+3]=G}if(N&&!d(t,I+1,C,k)||!N&&y(t,I+1,C,k)){var w=T(l(t,I+1,C,k+1),l(t,I+1,C+1,k),l(t,I+1,C+1,k+1)),q=T(l(t,I+1,C+1,k),l(t,I+1,C,k-1),l(t,I+1,C+1,k-1)),z=T(l(t,I+1,C,k-1),l(t,I+1,C-1,k),l(t,I+1,C-1,k-1)),Y=T(l(t,I+1,C-1,k),l(t,I+1,C,k+1),l(t,I+1,C-1,k+1)),j=4*(I*n*n+C*n+k);g[j]=w,g[j+1]=q,g[j+2]=z,g[j+3]=Y}if(N&&!d(t,I-1,C,k)||!N&&y(t,I-1,C,k)){var X=T(l(t,I-1,C,k-1),l(t,I-1,C+1,k),l(t,I-1,C+1,k-1)),Z=T(l(t,I-1,C+1,k),l(t,I-1,C,k+1),l(t,I-1,C+1,k+1)),J=T(l(t,I-1,C,k+1),l(t,I-1,C-1,k),l(t,I-1,C-1,k+1)),Q=T(l(t,I-1,C-1,k),l(t,I-1,C,k-1),l(t,I-1,C-1,k-1)),$=4*(I*n*n+C*n+k);L[$]=X,L[$+1]=Z,L[$+2]=J,L[$+3]=Q}if(N&&!d(t,I,C,k+1)||!N&&y(t,I,C,k+1)){var tt=T(l(t,I-1,C,k+1),l(t,I,C+1,k+1),l(t,I-1,C+1,k+1)),et=T(l(t,I,C+1,k+1),l(t,I+1,C,k+1),l(t,I+1,C+1,k+1)),rt=T(l(t,I+1,C,k+1),l(t,I,C-1,k+1),l(t,I+1,C-1,k+1)),ot=T(l(t,I,C-1,k+1),l(t,I-1,C,k+1),l(t,I-1,C-1,k+1)),st=4*(I*n*n+C*n+k);m[st]=tt,m[st+1]=et,m[st+2]=rt,m[st+3]=ot}if(N&&!d(t,I,C,k-1)||!N&&y(t,I,C,k-1)){var nt=T(l(t,I+1,C,k-1),l(t,I,C+1,k-1),l(t,I+1,C+1,k-1)),at=T(l(t,I,C+1,k-1),l(t,I-1,C,k-1),l(t,I-1,C+1,k-1)),ht=T(l(t,I-1,C,k-1),l(t,I,C-1,k-1),l(t,I-1,C-1,k-1)),ut=T(l(t,I,C-1,k-1),l(t,I+1,C,k-1),l(t,I+1,C-1,k-1)),it=4*(I*n*n+C*n+k);b[it]=nt,b[it+1]=at,b[it+2]=ht,b[it+3]=ut}}for(var Et=0;Et<n;Et++)for(var St=0;St<n;St++)for(var _t=0;_t<n;_t++){var xt=St,pt=Et,Tt=_t,lt=e,yt=r,Rt=o,Ot=s;d(t,St,Et,_t)||(lt=a,yt=h,Rt=i,Ot=E);var dt=4*(St*n*n+Et*n+_t),At=t.blocks[St*n*n+Et*n+_t],ct=1,ft=1,gt=1,Lt=1;if(O(At)&&At!==u.WATER_FALL){var mt=p(t,St,Et+1,_t);if(!O(mt)){var bt=[[p(t,St-1,Et,_t-1),p(t,St,Et,_t-1),p(t,St+1,Et,_t-1)],[p(t,St-1,Et,_t),At,p(t,St+1,Et,_t)],[p(t,St-1,Et,_t+1),p(t,St,Et,_t+1),p(t,St+1,Et,_t+1)]],It=[[A(bt[0][0]),A(bt[0][1]),A(bt[0][2])],[A(bt[1][0]),A(bt[1][1]),A(bt[1][2])],[A(bt[2][0]),A(bt[2][1]),A(bt[2][2])]];ct=f(It[1][1],It[1][2],It[2][1],It[2][2],bt[1][1],bt[1][2],bt[2][1],bt[2][2]),ft=f(It[1][0],It[1][1],It[2][0],It[2][1],bt[1][0],bt[1][1],bt[2][0],bt[2][1]),gt=f(It[0][1],It[0][2],It[1][1],It[1][2],bt[0][1],bt[0][2],bt[1][1],bt[1][2]),Lt=f(It[0][0],It[0][1],It[1][0],It[1][1],bt[0][0],bt[0][1],bt[1][0],bt[1][1])}}var Ct=S[dt];if(0!==Ct){for(var kt=S[dt+1],Nt=S[dt+2],vt=S[dt+3],Pt=1,Ut=1,Bt=_t+1;Bt<n;Bt++){var Ft=4*(St*n*n+Et*n+Bt),Wt=t.blocks[St*n*n+Et*n+Bt];if(0===S[Ft]||At!==Wt||c(Wt)||Ct!==S[Ft]||kt!==S[Ft+1]||Nt!==S[Ft+2]||vt!==S[Ft+3])break;++Pt}for(var Kt=!0,Ht=St+1;Ht<n&&Kt;Ht++){Kt=!0;for(var Dt=_t;Dt<_t+Pt;Dt++){var Mt=4*(Ht*n*n+Et*n+Dt),Gt=t.blocks[Ht*n*n+Et*n+Dt];if(0===S[Mt]||At!==Gt||c(Gt)||Ct!==S[Mt]||kt!==S[Mt+1]||Nt!==S[Mt+2]||vt!==S[Mt+3]){Kt=!1;break}}Kt&&++Ut}for(var Vt=St;Vt<St+Ut;Vt++)for(var wt=_t;wt<_t+Pt;wt++)S[4*(Vt*n*n+Et*n+wt)]=0;lt.push(1*(xt+1+(Ut-1)),1*pt+ct,1*(Tt+1+(Pt-1))),lt.push(1*xt,1*pt+ft,1*(Tt+1+(Pt-1))),lt.push(1*xt,1*pt+Lt,1*Tt),lt.push(1*(xt+1+(Ut-1)),1*pt+gt,1*Tt),Rt.push(Ct,kt,Nt,vt),Ct+Nt<kt+vt?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var qt=x[At].textures.top;Ot.push(qt.x,qt.y,0,Pt),Ot.push(qt.x,qt.y,Ut,Pt),Ot.push(qt.x,qt.y,Ut,0),Ot.push(qt.x,qt.y,0,0)}var zt=_[dt];if(0!==zt){for(var Yt=_[dt+1],jt=_[dt+2],Xt=_[dt+3],Zt=1,Jt=1,Qt=_t+1;Qt<n;Qt++){var $t=4*(St*n*n+Et*n+Qt),te=t.blocks[St*n*n+Et*n+Qt];if(0===_[$t]||At!==te||c(te)||zt!==_[$t]||Yt!==_[$t+1]||jt!==_[$t+2]||Xt!==_[$t+3])break;++Zt}for(var ee=!0,re=St+1;re<n&&ee;re++){ee=!0;for(var oe=_t;oe<_t+Zt;oe++){var se=4*(re*n*n+Et*n+oe),ne=t.blocks[re*n*n+Et*n+oe];if(0===_[se]||At!==ne||c(ne)||zt!==_[se]||Yt!==_[se+1]||jt!==_[se+2]||Xt!==_[se+3]){ee=!1;break}}ee&&++Jt}for(var ae=St;ae<St+Jt;ae++)for(var he=_t;he<_t+Zt;he++)_[4*(ae*n*n+Et*n+he)]=0;lt.push(1*(xt+1+(Jt-1)),1*pt,1*Tt),lt.push(1*xt,1*pt,1*Tt),lt.push(1*xt,1*pt,1*(Tt+1+(Zt-1))),lt.push(1*(xt+1+(Jt-1)),1*pt,1*(Tt+1+(Zt-1))),Rt.push(zt,Yt,jt,Xt),zt+jt<Yt+Xt?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var ue=x[At].textures.bottom;Ot.push(ue.x,ue.y,0,Zt),Ot.push(ue.x,ue.y,Jt,Zt),Ot.push(ue.x,ue.y,Jt,0),Ot.push(ue.x,ue.y,0,0)}var ie=g[dt];if(0!==ie){for(var Ee=g[dt+1],Se=g[dt+2],_e=g[dt+3],xe=1,pe=1,Te=_t+1;Te<n;Te++){var le=4*(St*n*n+Et*n+Te),ye=t.blocks[St*n*n+Et*n+Te];if(0===g[le]||At!==ye||c(ye)||ie!==g[le]||Ee!==g[le+1]||Se!==g[le+2]||_e!==g[le+3])break;++xe}for(var Re=!0,Oe=Et+1;Oe<n&&Re;Oe++){Re=!0;for(var de=_t;de<_t+xe;de++){var Ae=4*(St*n*n+Oe*n+de),ce=t.blocks[St*n*n+Oe*n+de];if(0===g[Ae]||At!==ce||c(ce)||ie!==g[Ae]||Ee!==g[Ae+1]||Se!==g[Ae+2]||_e!==g[Ae+3]){Re=!1;break}}Re&&++pe}for(var fe=Et;fe<Et+pe;fe++)for(var ge=_t;ge<_t+xe;ge++)g[4*(St*n*n+fe*n+ge)]=0;lt.push(1*(xt+1),1*(pt+(pe-1))+ct,1*(Tt+1+(xe-1))),lt.push(1*(xt+1),1*(pt+(pe-1))+gt,1*Tt),lt.push(1*(xt+1),1*pt,1*Tt),lt.push(1*(xt+1),1*pt,1*(Tt+1+(xe-1))),Rt.push(ie,Ee,Se,_e),ie+Se<Ee+_e?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var Le=x[At].textures.left;Ot.push(Le.x,Le.y,0,pe),Ot.push(Le.x,Le.y,xe,pe),Ot.push(Le.x,Le.y,xe,0),Ot.push(Le.x,Le.y,0,0)}var me=L[dt];if(0!==me){for(var be=L[dt+1],Ie=L[dt+2],Ce=L[dt+3],ke=1,Ne=1,ve=_t+1;ve<n;ve++){var Pe=4*(St*n*n+Et*n+ve),Ue=t.blocks[St*n*n+Et*n+ve];if(0===L[Pe]||At!==Ue||c(Ue)||me!==L[Pe]||be!==L[Pe+1]||Ie!==L[Pe+2]||Ce!==L[Pe+3])break;++ke}for(var Be=!0,Fe=Et+1;Fe<n&&Be;Fe++){Be=!0;for(var We=_t;We<_t+ke;We++){var Ke=4*(St*n*n+Fe*n+We),He=t.blocks[St*n*n+Fe*n+We];if(0===L[Ke]||At!==He||c(He)||me!==L[Ke]||be!==L[Ke+1]||Ie!==L[Ke+2]||Ce!==L[Ke+3]){Be=!1;break}}Be&&++Ne}for(var De=Et;De<Et+Ne;De++)for(var Me=_t;Me<_t+ke;Me++)L[4*(St*n*n+De*n+Me)]=0;lt.push(1*xt,1*(pt+(Ne-1))+Lt,1*Tt),lt.push(1*xt,1*(pt+(Ne-1))+ft,1*(Tt+1+(ke-1))),lt.push(1*xt,1*pt,1*(Tt+1+(ke-1))),lt.push(1*xt,1*pt,1*Tt),Rt.push(me,be,Ie,Ce),me+Ie<be+Ce?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var Ge=x[At].textures.right;Ot.push(Ge.x,Ge.y,0,Ne),Ot.push(Ge.x,Ge.y,ke,Ne),Ot.push(Ge.x,Ge.y,ke,0),Ot.push(Ge.x,Ge.y,0,0)}var Ve=m[dt];if(0!==Ve){for(var we=m[dt+1],qe=m[dt+2],ze=m[dt+3],Ye=1,je=1,Xe=St+1;Xe<n;Xe++){var Ze=4*(Xe*n*n+Et*n+_t),Je=t.blocks[Xe*n*n+Et*n+_t];if(0===m[Ze]||At!==Je||c(Je)||Ve!==m[Ze]||we!==m[Ze+1]||qe!==m[Ze+2]||ze!==m[Ze+3])break;++Ye}for(var Qe=!0,$e=Et+1;$e<n&&Qe;$e++){Qe=!0;for(var tr=St;tr<St+Ye;tr++){var er=4*(tr*n*n+$e*n+_t),rr=t.blocks[tr*n*n+$e*n+_t];if(0===m[er]||At!==rr||c(rr)||Ve!==m[er]||we!==m[er+1]||qe!==m[er+2]||ze!==m[er+3]){Qe=!1;break}}Qe&&++je}for(var or=Et;or<Et+je;or++)for(var sr=St;sr<St+Ye;sr++)m[4*(sr*n*n+or*n+_t)]=0;lt.push(1*xt,1*(pt+(je-1))+ft,1*(Tt+1)),lt.push(1*(xt+1+(Ye-1)),1*(pt+(je-1))+ct,1*(Tt+1)),lt.push(1*(xt+1+(Ye-1)),1*pt,1*(Tt+1)),lt.push(1*xt,1*pt,1*(Tt+1)),Rt.push(Ve,we,qe,ze),Ve+qe<we+ze?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var nr=x[At].textures.front;Ot.push(nr.x,nr.y,0,je),Ot.push(nr.x,nr.y,Ye,je),Ot.push(nr.x,nr.y,Ye,0),Ot.push(nr.x,nr.y,0,0)}var ar=b[dt];if(0!==ar){for(var hr=b[dt+1],ur=b[dt+2],ir=b[dt+3],Er=1,Sr=1,_r=St+1;_r<n;_r++){var xr=4*(_r*n*n+Et*n+_t),pr=t.blocks[_r*n*n+Et*n+_t];if(0===b[xr]||At!==pr||c(pr)||ar!==b[xr]||hr!==b[xr+1]||ur!==b[xr+2]||ir!==b[xr+3])break;++Er}for(var Tr=!0,lr=Et+1;lr<n&&Tr;lr++){Tr=!0;for(var yr=St;yr<St+Er;yr++){var Rr=4*(yr*n*n+lr*n+_t),Or=t.blocks[yr*n*n+lr*n+_t];if(0===b[Rr]||At!==Or||c(Or)||ar!==b[Rr]||hr!==b[Rr+1]||ur!==b[Rr+2]||ir!==b[Rr+3]){Tr=!1;break}}Tr&&++Sr}for(var dr=Et;dr<Et+Sr;dr++)for(var Ar=St;Ar<St+Er;Ar++)b[4*(Ar*n*n+dr*n+_t)]=0;lt.push(1*(xt+1+(Er-1)),1*(pt+(Sr-1))+gt,1*Tt),lt.push(1*xt,1*(pt+(Sr-1))+Lt,1*Tt),lt.push(1*xt,1*pt,1*Tt),lt.push(1*(xt+1+(Er-1)),1*pt,1*Tt),Rt.push(ar,hr,ur,ir),ar+ur<hr+ir?(yt.push(lt.length/3-3,lt.length/3-4,lt.length/3-1),yt.push(lt.length/3-1,lt.length/3-2,lt.length/3-3)):(yt.push(lt.length/3-4,lt.length/3-1,lt.length/3-2),yt.push(lt.length/3-2,lt.length/3-3,lt.length/3-4));var cr=x[At].textures.back;Ot.push(cr.x,cr.y,0,Sr),Ot.push(cr.x,cr.y,Er,Sr),Ot.push(cr.x,cr.y,Er,0),Ot.push(cr.x,cr.y,0,0)}}return{version:t.version,opaqueVertices:new Float32Array(e),opaqueIndices:new Uint16Array(r),opaqueAos:new Uint8Array(o),opaqueUvs:new Uint8Array(s),alphaVertices:new Float32Array(a),alphaIndices:new Uint16Array(h),alphaAos:new Uint8Array(i),alphaUvs:new Uint8Array(E),chunkPos:t.chunkPos}}(t.data);postMessage({event:L.CHUNK_MESH_DATA,data:e},[e.opaqueVertices.buffer,e.opaqueIndices.buffer,e.opaqueAos.buffer,e.opaqueUvs.buffer,e.alphaVertices.buffer,e.alphaIndices.buffer,e.alphaAos.buffer,e.alphaUvs.buffer]);break;case m.BLOCKS_MESH:postMessage({event:L.BLOCKS_MESH_DATA,data:N(t.data)})}}}]);', null)
        }
    },
    498: function(t, e, i) {
        "use strict";
        i.r(e);
        var n, s = i(15), r = i.n(s), a = i(22), o = i.n(a), h = i(32), c = i(81), _ = i.n(c), l = i(27), u = function() {
            function t(t, e) {
                var i = this;
                this._settings = t,
                this._canvasId = e,
                this._canvas = void 0,
                this._scale = void 0,
                this._appWidth = void 0,
                this._appHeight = void 0,
                this._scene = void 0,
                this._uiScene = void 0,
                this._crosshairScene = void 0,
                this._frontScene = void 0,
                this._camera = void 0,
                this._crosshairCamera = void 0,
                this._uiCamera = void 0,
                this._renderer = void 0,
                this._clearColor = void 0,
                this._canvas = document.getElementById(this._canvasId),
                this._scale = 1,
                this._appWidth = l.a.CLIENT_WIDTH,
                this._appHeight = l.a.CLIENT_HEIGHT,
                this._camera = new h.jb(60,window.innerWidth / window.innerHeight,.01,1e3),
                this._crosshairCamera = new h.jb(60,window.innerWidth / window.innerHeight,.01,1e3),
                this._uiCamera = new h.ib(-window.innerWidth / 2,window.innerWidth / 2,window.innerHeight / 2,-window.innerHeight / 2,.01,1e3),
                this._clearColor = l.a.SKY_CLEAR_COLOR,
                this.rebuildScene(),
                this.resizeCanvas(),
                window.addEventListener("resize", (function(t) {
                    i.resizeCanvas()
                }
                ))
            }
            var e = t.prototype;
            return e.rebuildScene = function() {
                this._scene && this._scene.dispose(),
                this._frontScene && this._frontScene.dispose(),
                this._uiScene && this._uiScene.dispose(),
                this._crosshairScene && this._crosshairScene.dispose(),
                this._scene = new h.vb,
                this._frontScene = new h.vb,
                this._uiScene = new h.vb,
                this._crosshairScene = new h.vb,
                this._uiScene.add(this._uiCamera),
                this._renderer && this._renderer.dispose(),
                this._renderer = new h.Qb({
                    canvas: this._canvas,
                    antialias: !1,
                    powerPreference: "high-performance"
                }),
                this._renderer.setClearColor(this._clearColor),
                this._renderer.debug.checkShaderErrors = !1,
                this._renderer.setPixelRatio(window.devicePixelRatio * this._settings.renderScale),
                this._renderer.setSize(window.innerWidth, window.innerHeight),
                this._renderer.autoClear = !1,
                this._renderer.gammaFactor = 2.2,
                this._renderer.outputEncoding = h.Rb,
                this._renderer.info.autoReset = !1
            }
            ,
            e.render = function(t, e) {
                this._renderer.info.reset(),
                this._renderer.clear(),
                this._renderer.render(this._scene, this._camera),
                this._renderer.clearDepth(),
                this._renderer.render(this._frontScene, this._camera),
                this._renderer.clearDepth(),
                this._renderer.render(this._crosshairScene, this._crosshairCamera),
                this._renderer.render(this._uiScene, this._uiCamera)
            }
            ,
            e.resizeCanvas = function() {
                var t = window.innerWidth
                  , e = window.innerHeight;
                this._scale = Math.max(t / this._appWidth, e / this._appHeight),
                this._renderer.setSize(t, e),
                this._camera.aspect = t / e,
                this._camera.updateProjectionMatrix(),
                this._crosshairCamera.aspect = t / e,
                this._crosshairCamera.updateProjectionMatrix(),
                this._uiCamera.top = e / 2,
                this._uiCamera.bottom = -e / 2,
                this._uiCamera.left = -t / 2,
                this._uiCamera.right = t / 2,
                this._uiCamera.updateProjectionMatrix()
            }
            ,
            e.setClearColor = function(t) {
                this._clearColor !== t && (this._clearColor = t,
                this._renderer.setClearColor(this._clearColor))
            }
            ,
            _()(t, [{
                key: "scale",
                get: function() {
                    return this._scale
                }
            }, {
                key: "scene",
                get: function() {
                    return this._scene
                }
            }, {
                key: "frontScene",
                get: function() {
                    return this._frontScene
                }
            }, {
                key: "uiScene",
                get: function() {
                    return this._uiScene
                }
            }, {
                key: "crosshairScene",
                get: function() {
                    return this._crosshairScene
                }
            }, {
                key: "camera",
                get: function() {
                    return this._camera
                }
            }, {
                key: "renderer",
                get: function() {
                    return this._renderer
                }
            }, {
                key: "canvas",
                get: function() {
                    return this._canvas
                }
            }]),
            t
        }(), d = i(83), p = i(84), v = i(8), S = i(26), y = i(88), m = function() {
            function t() {
                var t = this;
                this._prevTime = void 0,
                this._frames = void 0,
                this._upload = void 0,
                this._download = void 0,
                this._visible = void 0,
                this._fps = void 0,
                this._ups = void 0,
                this._dps = void 0,
                this.playerPos = void 0,
                this.playerBlockPos = void 0,
                this.playerChunkPos = void 0,
                this.playerVelocity = void 0,
                this.playerYaw = void 0,
                this.playerPitch = void 0,
                this.totalChunksLoaded = void 0,
                this.ping = void 0,
                this._dom = void 0,
                this._upload = 0,
                this._download = 0,
                this._ups = 0,
                this._dps = 0,
                this._fps = 0,
                this.playerPos = Object(S.l)(0, 0, 0),
                this.playerBlockPos = Object(S.l)(0, 0, 0),
                this.playerChunkPos = Object(S.l)(0, 0, 0),
                this.playerVelocity = Object(S.l)(0, 0, 0),
                this.playerYaw = 0,
                this.playerPitch = 0,
                this.totalChunksLoaded = 0,
                this.ping = 0,
                this._prevTime = Date.now(),
                this._frames = 0,
                this._dom = document.body.appendChild(document.createElement("div")),
                this._dom.style.cssText = "width: 550px; position: absolute; top: 0; left: 0; padding: 10px; pointer-events: none; background-color: rgba(0, 0, 0, 0.8);",
                this._visible = !1,
                this.hide(),
                d.a.on(p.a.KEY_PRESS, (function(e) {
                    Object(y.j)() || e === v.a[0] && t.toggle()
                }
                ))
            }
            var e = t.prototype;
            return e.toggle = function() {
                this._visible = !this._visible,
                this._visible ? this.show() : this.hide()
            }
            ,
            e.show = function() {
                this._dom.style.display = "block",
                this._visible = !0
            }
            ,
            e.hide = function() {
                this._dom.style.display = "none",
                this._visible = !1
            }
            ,
            e.update = function() {
                if (this._visible) {
                    ++this._frames;
                    var t = Date.now();
                    t - this._prevTime >= 1e3 && (this._fps = 1e3 * this._frames / (t - this._prevTime),
                    this._ups = 1e3 * this._upload / (t - this._prevTime),
                    this._dps = 1e3 * this._download / (t - this._prevTime),
                    this._frames = 0,
                    this._upload = 0,
                    this._download = 0,
                    this._prevTime = t),
                    this._dom.innerText = this.getStatsText()
                }
            }
            ,
            e.recordUpload = function(t) {
                this._upload += t
            }
            ,
            e.recordDownload = function(t) {
                this._download += t
            }
            ,
            e.getStatsText = function() {
                return "FPS: " + this._fps + "\n            Player Position:\n            x: " + this.playerPos.x + " y: " + this.playerPos.y + " z: " + this.playerPos.z + "\n            Player Block Position:\n            x: " + this.playerBlockPos.x + " y: " + this.playerBlockPos.y + " z: " + this.playerBlockPos.z + "\n            Player Chunk Position:\n            x: " + this.playerChunkPos.x + " y: " + this.playerChunkPos.y + " z: " + this.playerChunkPos.z + "\n            Player Velocity:\n            x: " + this.playerVelocity.x + " y: " + this.playerVelocity.y + " z: " + this.playerVelocity.z + "\n            Player Yaw: " + this.playerYaw + " Player Pitch: " + this.playerPitch + "\n            Total Chunks Loaded: " + this.totalChunksLoaded + "\n            Latency: " + this.ping + "ms\n            Download: " + this._dps.toFixed(2) + "bps Upload: " + this._ups.toFixed(2) + "bps"
            }
            ,
            _()(t, [{
                key: "visible",
                get: function() {
                    return this._visible
                }
            }]),
            t
        }(), E = i(341), g = i.n(E), k = i(82);
        !function(t) {
            t.CHUNK_MESH = "CHUNK_MESH",
            t.BLOCKS_MESH = "BLOCKS_MESH"
        }(n || (n = {}));
        var f, I = n;
        !function(t) {
            t.CHUNK_MESH_DATA = "CHUNK_MESH_DATA",
            t.BLOCKS_MESH_DATA = "BLOCKS_MESH_DATA"
        }(f || (f = {}));
        var T = f
          , O = i(104)
          , A = function() {
            function t(t, e) {
                var i = this;
                this._terrainRenderer = t,
                this._numWorkers = e,
                this._workers = void 0,
                this._jobs = void 0,
                this._terrainMaterial = void 0,
                this._transparentTerrainMaterial = void 0,
                this._nextWorkerIdx = void 0,
                this._jobs = [],
                this._workers = [],
                this._nextWorkerIdx = 0;
                var n = "\n            attribute float ao;\n            attribute vec4 realUv;\n            varying float vAo;\n            varying vec4 vRealUv;\n            void main() {\n                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n                gl_Position = projectionMatrix * mvPosition;\n                vAo = ao;\n                vRealUv = realUv;\n            }\n        "
                  , s = "\n            uniform sampler2D map;\n            varying float vAo;\n            varying vec4 vRealUv;\n            void main() {\n                vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0);\n                diffuseColor *= vec4(vec3(1.0, 1.0, 1.0) * vAo, 1.0);\n\n                float tilePosX = max(0.05, min(0.95, fract(vRealUv.z)));\n                float tilePosY = max(0.05, min(0.95, fract(vRealUv.w)));\n                vec2 uv = vec2(vRealUv.x * (1.0 / 8.0) + tilePosX * (1.0 / 8.0), vRealUv.y * (1.0 / 8.0) + tilePosY * (1.0 / 8.0));\n\n                vec2 rawUv = vec2(\n                    fract(uv.x * 8.0) / 8.0,\n                    fract(uv.y * 8.0) / 8.0\n                );\n\n                diffuseColor *= texture2D(map, uv);\n\n                gl_FragColor = diffuseColor;\n            }\n        ";
                this._terrainMaterial = new h.wb({
                    uniforms: {
                        map: {
                            value: k.a.blockTexture
                        }
                    },
                    vertexShader: n,
                    fragmentShader: s,
                    fog: !1
                }),
                this._transparentTerrainMaterial = new h.wb({
                    transparent: !0,
                    uniforms: {
                        map: {
                            value: k.a.blockTexture
                        }
                    },
                    side: h.r,
                    vertexShader: n,
                    fragmentShader: s,
                    fog: !1,
                    depthWrite: !1
                });
                for (var r = 0; r < this._numWorkers; r++) {
                    var a = new g.a;
                    a.onmessage = function(t) {
                        switch (t.data.event) {
                        case T.CHUNK_MESH_DATA:
                            i.processChunkMeshData(t.data.data);
                            break;
                        case T.BLOCKS_MESH_DATA:
                            var e = t.data.data
                              , n = e.position
                              , s = e.indices
                              , r = e.vertices
                              , a = e.uvs
                              , o = e.aos
                              , c = new h.l;
                            c.setAttribute("position", new h.v(r,3)),
                            c.setIndex(new h.Lb(s,1)),
                            c.setAttribute("ao", new h.Mb(o,1,!0)),
                            c.setAttribute("realUv", new h.Mb(a,4));
                            var _ = new h.X(c,i._terrainMaterial);
                            _.position.set(n.x, n.y, n.z),
                            i._terrainRenderer.processFallingBlocks(n, _)
                        }
                    }
                    ,
                    this._workers.push(a)
                }
            }
            var e = t.prototype;
            return e.cleanUp = function() {
                this._jobs = [],
                this._terrainMaterial.dispose();
                for (var t = 0; t < this._workers.length; t++)
                    this._workers[t].terminate();
                this._workers = []
            }
            ,
            e.process = function() {
                for (; this._jobs.length > 0; ) { // this value changed, orig value is 0
                    0;
                    var t = this._jobs.shift();
                    switch (t.event) {
                    case I.CHUNK_MESH:
                        if (this._terrainRenderer.chunkStorageManager.hasChunk(t.chunkPos.x, t.chunkPos.y, t.chunkPos.z))
                            this.getNextWorker().postMessage(t);
                        break;
                    case I.BLOCKS_MESH:
                    default:
                        this.getNextWorker().postMessage(t)
                    }
                }
            }
            ,
            e.getNextWorker = function() {
                var t = this._workers[this._nextWorkerIdx];
                return ++this._nextWorkerIdx >= this._workers.length && (this._nextWorkerIdx = 0),
                t
            }
            ,
            e.processChunkMeshData = function(t) {
                var e = t.version
                  , i = t.chunkPos
                  , n = t.opaqueVertices
                  , s = t.opaqueIndices
                  , r = t.opaqueUvs
                  , a = t.opaqueAos
                  , o = t.alphaVertices
                  , c = t.alphaIndices
                  , _ = t.alphaUvs
                  , l = t.alphaAos
                  , u = void 0;
                if (n.length > 0) {
                    var d = new h.l;
                    d.setAttribute("position", new h.v(n,3)),
                    d.setIndex(new h.Lb(s,1)),
                    d.setAttribute("ao", new h.Mb(a,1,!0)),
                    d.setAttribute("realUv", new h.Mb(r,4)),
                    u = new h.X(d,this._terrainMaterial)
                }
                var p = void 0;
                if (o.length > 0) {
                    var v = new h.l;
                    v.setAttribute("position", new h.v(o,3)),
                    v.setIndex(new h.Lb(c,1)),
                    v.setAttribute("ao", new h.Mb(l,1,!0)),
                    v.setAttribute("realUv", new h.Mb(_,4)),
                    p = new h.X(v,this._transparentTerrainMaterial)
                }
                this._terrainRenderer.processChunkData(e, i.x, i.y, i.z, u, p)
            }
            ,
            e.queueChunkGeneration = function(t, e, i, n, s, r, a, o, h, c, _, l, u, d, p, v, S, y, m, E, g, k, f, T, A, C, R, b, P, M) {
                var x = {
                    event: I.CHUNK_MESH,
                    version: t,
                    chunkPos: {
                        x: e.x,
                        y: e.y,
                        z: e.z
                    },
                    blocks: i,
                    top: n,
                    bottom: s,
                    left: r,
                    right: a,
                    front: o,
                    back: h,
                    topFrontLeft: c,
                    topFrontRight: _,
                    topBackLeft: l,
                    topBackRight: u,
                    bottomFrontLeft: d,
                    bottomFrontRight: p,
                    bottomBackLeft: v,
                    bottomBackRight: S,
                    frontLeft: y,
                    frontRight: m,
                    backLeft: E,
                    backRight: g,
                    topFront: k,
                    topBack: f,
                    topLeft: T,
                    topRight: A,
                    bottomFront: C,
                    bottomBack: R,
                    bottomLeft: b,
                    bottomRight: P
                };
                M ? this._jobs.push(x) : this.processChunkMeshData(Object(O.b)(x))
            }
            ,
            e.queueBlocksGeneration = function(t, e) {
                this._jobs.push({
                    event: I.BLOCKS_MESH,
                    origin: t,
                    blocks: e
                })
            }
            ,
            _()(t, [{
                key: "numJobs",
                get: function() {
                    return this._jobs.length
                }
            }, {
                key: "terrainMaterial",
                get: function() {
                    return this._terrainMaterial
                }
            }]),
            t
        }()
          , C = i(86)
          , R = function(t, e, i) {
            return (t + 128 & 255) << 16 | (e + 128 & 255) << 8 | i + 128 & 255
        }
          , b = function(t, e, i) {
            return t + ":" + e + ":" + i
        }
          , P = function() {
            function t(t, e, i, n) {
                if (this._chunkStorageManager = t,
                this._chunkPos = e,
                this._numNonEmptyBlocks = i,
                this._blocks = void 0,
                this._needsUpdate = void 0,
                this._chunkKey = void 0,
                this._chunkKey = R(this._chunkPos.x, this._chunkPos.y, this._chunkPos.z),
                n)
                    this._blocks = n;
                else {
                    this._blocks = new Uint8Array(l.a.CHUNK_NUM_BLOCKS);
                    for (var s = 0; s < l.a.CHUNK_NUM_BLOCKS; s++)
                        this._blocks[s] = C.a.AIR
                }
                this._needsUpdate = !1,
                this._numNonEmptyBlocks > 0 && this.requestUpdate(!1)
            }
            var e = t.prototype;
            return e.getChunkBlockAt = function(t, e, i) {
                return this._blocks[t * l.a.CHUNK_SIZE * l.a.CHUNK_SIZE + e * l.a.CHUNK_SIZE + i]
            }
            ,
            e.setChunkBlockAt = function(t, e, i, n) {
                var s = this.getChunkBlockAt(t, e, i);
                this._blocks[t * l.a.CHUNK_SIZE * l.a.CHUNK_SIZE + e * l.a.CHUNK_SIZE + i] = n,
                s !== n && this.requestUpdate(!0),
                s === C.a.AIR && n !== C.a.AIR ? ++this._numNonEmptyBlocks : s !== C.a.AIR && n === C.a.AIR && --this._numNonEmptyBlocks
            }
            ,
            e.chunkBlockPosToWorldBlockPos = function(t, e, i) {
                return Object(S.l)(this._chunkPos.x * l.a.CHUNK_SIZE + t, this._chunkPos.y * l.a.CHUNK_SIZE + e, this._chunkPos.z * l.a.CHUNK_SIZE + i)
            }
            ,
            e.isEmpty = function() {
                return 0 === this._numNonEmptyBlocks
            }
            ,
            e.requestUpdate = function(t) {
                this._needsUpdate || (++this._chunkStorageManager.numChunksNeedUpdate,
                this._needsUpdate = !0,
                t ? this._chunkStorageManager.queueChunkUpdatePriority(this) : this._chunkStorageManager.queueChunkUpdate(this))
            }
            ,
            e.doneUpdate = function() {
                this._needsUpdate && (--this._chunkStorageManager.numChunksNeedUpdate,
                this._needsUpdate = !1)
            }
            ,
            _()(t, [{
                key: "chunkKey",
                get: function() {
                    return this._chunkKey
                }
            }, {
                key: "needsUpdate",
                get: function() {
                    return this._needsUpdate
                }
            }, {
                key: "blocks",
                get: function() {
                    return this._blocks
                },
                set: function(t) {
                    this._blocks = t
                }
            }, {
                key: "chunkPos",
                get: function() {
                    return this._chunkPos
                }
            }, {
                key: "numNonEmptyBlocks",
                get: function() {
                    return this._numNonEmptyBlocks
                },
                set: function(t) {
                    this._numNonEmptyBlocks = t
                }
            }]),
            t
        }()
          , M = function() {
            function t(t) {
                this._dirVector = t
            }
            return _()(t, [{
                key: "dir",
                get: function() {
                    return Object(S.b)(this._dirVector)
                }
            }], [{
                key: "immediateNeighbors",
                get: function() {
                    return [t.UP, t.DOWN, t.FRONT, t.BACK, t.RIGHT, t.LEFT]
                }
            }, {
                key: "secondaryNeighbors",
                get: function() {
                    return [t.UP_LEFT, t.UP_RIGHT, t.UP_FRONT, t.UP_BACK, t.DOWN_LEFT, t.DOWN_RIGHT, t.DOWN_FRONT, t.DOWN_BACK, t.LEFT_FRONT, t.FRONT_RIGHT, t.RIGHT_BACK, t.BACK_LEFT]
                }
            }, {
                key: "tertiaryNeighbors",
                get: function() {
                    return [t.RIGHT_UP_BACK, t.RIGHT_UP_FRONT, t.RIGHT_DOWN_BACK, t.RIGHT_DOWN_FRONT, t.LEFT_UP_BACK, t.LEFT_UP_FRONT, t.LEFT_DOWN_BACK, t.LEFT_DOWN_FRONT]
                }
            }, {
                key: "values",
                get: function() {
                    return [t.UP, t.DOWN, t.FRONT, t.BACK, t.RIGHT, t.LEFT, t.UP_LEFT, t.UP_RIGHT, t.UP_FRONT, t.UP_BACK, t.DOWN_LEFT, t.DOWN_RIGHT, t.DOWN_FRONT, t.DOWN_BACK, t.LEFT_FRONT, t.FRONT_RIGHT, t.RIGHT_BACK, t.BACK_LEFT, t.RIGHT_UP_BACK, t.RIGHT_UP_FRONT, t.RIGHT_DOWN_BACK, t.RIGHT_DOWN_FRONT, t.LEFT_UP_BACK, t.LEFT_UP_FRONT, t.LEFT_DOWN_BACK, t.LEFT_DOWN_FRONT]
                }
            }]),
            t
        }();
        M.UP = new M(Object(S.l)(0, 1, 0)),
        M.DOWN = new M(Object(S.l)(0, -1, 0)),
        M.FRONT = new M(Object(S.l)(0, 0, 1)),
        M.BACK = new M(Object(S.l)(0, 0, -1)),
        M.LEFT = new M(Object(S.l)(1, 0, 0)),
        M.RIGHT = new M(Object(S.l)(-1, 0, 0)),
        M.UP_LEFT = new M(Object(S.l)(1, 1, 0)),
        M.UP_RIGHT = new M(Object(S.l)(-1, 1, 0)),
        M.UP_FRONT = new M(Object(S.l)(0, 1, 1)),
        M.UP_BACK = new M(Object(S.l)(0, 1, -1)),
        M.DOWN_LEFT = new M(Object(S.l)(1, -1, 0)),
        M.DOWN_RIGHT = new M(Object(S.l)(-1, -1, 0)),
        M.DOWN_FRONT = new M(Object(S.l)(0, -1, 1)),
        M.DOWN_BACK = new M(Object(S.l)(0, -1, -1)),
        M.LEFT_FRONT = new M(Object(S.l)(1, 0, 1)),
        M.FRONT_RIGHT = new M(Object(S.l)(-1, 0, 1)),
        M.RIGHT_BACK = new M(Object(S.l)(-1, 0, -1)),
        M.BACK_LEFT = new M(Object(S.l)(1, 0, -1)),
        M.RIGHT_UP_BACK = new M(Object(S.l)(-1, 1, -1)),
        M.RIGHT_UP_FRONT = new M(Object(S.l)(-1, 1, 1)),
        M.RIGHT_DOWN_BACK = new M(Object(S.l)(-1, -1, -1)),
        M.RIGHT_DOWN_FRONT = new M(Object(S.l)(-1, -1, 1)),
        M.LEFT_UP_BACK = new M(Object(S.l)(1, 1, -1)),
        M.LEFT_UP_FRONT = new M(Object(S.l)(1, 1, 1)),
        M.LEFT_DOWN_BACK = new M(Object(S.l)(1, -1, -1)),
        M.LEFT_DOWN_FRONT = new M(Object(S.l)(1, -1, 1));
        var x = i(48)
          , N = function() {
            function t() {
                this._set = void 0,
                this._head = void 0,
                this._tail = void 0,
                this._set = new Set,
                this._head = void 0,
                this._tail = void 0
            }
            var e = t.prototype;
            return e.pushBack = function(t) {
                if (!this._set.has(t)) {
                    this._set.add(t);
                    var e = {
                        val: t,
                        next: void 0
                    };
                    void 0 === this._head ? this._head = this._tail = e : (this._tail.next = e,
                    this._tail = e)
                }
            }
            ,
            e.popFront = function() {
                if (void 0 !== this._head) {
                    if (this._head === this._tail) {
                        var t = this._head.val;
                        return this._set.delete(t),
                        this._head = this._tail = void 0,
                        t
                    }
                    var e = this._head.val;
                    return this._set.delete(e),
                    this._head = this._head.next,
                    e
                }
            }
            ,
            e.pushFront = function(t) {
                if (!this._set.has(t)) {
                    this._set.add(t);
                    var e = {
                        val: t,
                        next: void 0
                    };
                    void 0 === this._head ? this._head = this._tail = e : (e.next = this._head,
                    this._head = e)
                }
            }
            ,
            t
        }();
        function L(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return w(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return w(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function w(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var U = function() {
            function t(t, e) {
                this._chunkPosMin = t,
                this._chunkPosMax = e,
                this._chunks = void 0,
                this._numChunksNeedUpdate = void 0,
                this._chunksQueue = void 0,
                this._chunks = new Map,
                this._numChunksNeedUpdate = 0,
                this._chunksQueue = new N
            }
            var e = t.prototype;
            return e.queueChunkUpdate = function(t) {
                this._chunksQueue.pushBack(t.chunkKey)
            }
            ,
            e.queueChunkUpdatePriority = function(t) {
                this._chunksQueue.pushFront(t.chunkKey)
            }
            ,
            e.getNextChunkToUpdate = function() {
                for (var t = this._chunksQueue.popFront(); void 0 !== t; ) {
                    var e = this._chunks.get(t);
                    if (void 0 !== e)
                        return e;
                    t = this._chunksQueue.popFront()
                }
            }
            ,
            e.getChunkPos = function(t, e, i) {
                return Object(S.l)(Math.floor(t / l.a.CHUNK_SIZE), Math.floor(e / l.a.CHUNK_SIZE), Math.floor(i / l.a.CHUNK_SIZE))
            }
            ,
            e.getChunkBlockPos = function(t, e, i) {
                return Object(S.l)(0 | Object(x.e)(t, l.a.CHUNK_SIZE), 0 | Object(x.e)(e, l.a.CHUNK_SIZE), 0 | Object(x.e)(i, l.a.CHUNK_SIZE))
            }
            ,
            e.roundToWorldBlockPos = function(t, e, i) {
                return Object(S.l)(Math.floor(t), Math.floor(e), Math.floor(i))
            }
            ,
            e.roundToBlockCenterPos = function(t, e, i) {
                return Object(S.l)((Math.floor(t) + .5) * l.a.BLOCK_SIZE, (Math.floor(e) + .5) * l.a.BLOCK_SIZE, (Math.floor(i) + .5) * l.a.BLOCK_SIZE)
            }
            ,
            e.isValidChunkPos = function(t, e, i) {
                return t >= this._chunkPosMin.x && e >= this._chunkPosMin.y && i >= this._chunkPosMin.z && t <= this._chunkPosMax.x && e <= this._chunkPosMax.y && i <= this._chunkPosMax.z
            }
            ,
            e.hasChunk = function(t, e, i) {
                return this._chunks.has(R(t, e, i))
            }
            ,
            e.getChunk = function(t, e, i) {
                return this._chunks.get(R(t, e, i))
            }
            ,
            e.loadChunk = function(t, e, i, n, s) {
                var r = new P(this,Object(S.l)(t, e, i),n,s);
                return this._chunks.set(r.chunkKey, r),
                this.notifyNeighborChunks(t, e, i, !1),
                r
            }
            ,
            e.deleteChunk = function(t, e, i) {
                this.hasChunk(t, e, i) && (this.getChunk(t, e, i).doneUpdate(),
                this._chunks.delete(R(t, e, i)))
            }
            ,
            e.getBlockAt = function(t, e, i) {
                var n = this.getChunkPos(t, e, i);
                if (!this.hasChunk(n.x, n.y, n.z))
                    return C.a.AIR;
                var s = this.getChunk(n.x, n.y, n.z)
                  , r = this.getChunkBlockPos(t, e, i);
                return s.getChunkBlockAt(r.x, r.y, r.z)
            }
            ,
            e.setBlockAt = function(t, e, i, n) {
                var s = this.getChunkPos(t, e, i);
                if (this.hasChunk(s.x, s.y, s.z)) {
                    var r = this.getChunk(s.x, s.y, s.z)
                      , a = this.getChunkBlockPos(t, e, i);
                    r.setChunkBlockAt(a.x, a.y, a.z, n);
                    for (var o, h = L(M.values); !(o = h()).done; ) {
                        var c = o.value;
                        (1 === c.dir.x && a.x === l.a.CHUNK_SIZE - 1 || -1 === c.dir.x && 0 === a.x || 0 === c.dir.x) && (1 === c.dir.y && a.y === l.a.CHUNK_SIZE - 1 || -1 === c.dir.y && 0 === a.y || 0 === c.dir.y) && (1 === c.dir.z && a.z === l.a.CHUNK_SIZE - 1 || -1 === c.dir.z && 0 === a.z || 0 === c.dir.z) && this.notifyNeighborChunk(s.x, s.y, s.z, c.dir.x, c.dir.y, c.dir.z, !0)
                    }
                }
            }
            ,
            e.notifyChunk = function(t, e, i, n) {
                this.hasChunk(t, e, i) && this.getChunk(t, e, i).requestUpdate(n)
            }
            ,
            e.notifyNeighborChunk = function(t, e, i, n, s, r, a) {
                this.notifyChunk(t + n, e + s, i + r, a)
            }
            ,
            e.notifyNeighborChunks = function(t, e, i, n) {
                for (var s, r = L(M.values); !(s = r()).done; ) {
                    var a = s.value;
                    this.notifyNeighborChunk(t, e, i, a.dir.x, a.dir.y, a.dir.z, n)
                }
            }
            ,
            _()(t, [{
                key: "minChunkPos",
                get: function() {
                    return this._chunkPosMin
                }
            }, {
                key: "maxChunkPos",
                get: function() {
                    return this._chunkPosMax
                }
            }, {
                key: "chunks",
                get: function() {
                    return this._chunks
                }
            }, {
                key: "numChunksNeedUpdate",
                set: function(t) {
                    this._numChunksNeedUpdate = t
                },
                get: function() {
                    return this._numChunksNeedUpdate
                }
            }]),
            t
        }()
          , D = function() {
            function t(t, e, i, n) {
                this._chunkGenWorkerPool = t,
                this._chunkStorageManager = e,
                this._chunk = i,
                this._terrainRenderer = n,
                this._lastSentVersion = void 0,
                this._lastReceivedVersion = void 0,
                this._opaqueMesh = void 0,
                this._alphaMesh = void 0,
                this._lastSentVersion = 0,
                this._lastReceivedVersion = -1
            }
            var e = t.prototype;
            return e.cleanUp = function() {
                this._opaqueMesh && (this._terrainRenderer.object.remove(this._opaqueMesh),
                this._opaqueMesh.geometry.dispose(),
                this._opaqueMesh = void 0),
                this._alphaMesh && (this._terrainRenderer.object.remove(this._alphaMesh),
                this._alphaMesh.geometry.dispose(),
                this._alphaMesh = void 0)
            }
            ,
            e.updateMesh = function(t, e, i) {
                t < this._lastReceivedVersion || (this._lastReceivedVersion = t,
                this.cleanUp(),
                e && (this._opaqueMesh = e,
                this._opaqueMesh.scale.set(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE),
                this._opaqueMesh.position.set(this._chunk.chunkPos.x * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.y * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.z * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)),
                this._opaqueMesh.matrixAutoUpdate = !1,
                this._opaqueMesh.updateMatrix(),
                this._terrainRenderer.object.add(this._opaqueMesh)),
                i && (this._alphaMesh = i,
                this._alphaMesh.scale.set(l.a.BLOCK_SIZE, l.a.BLOCK_SIZE, l.a.BLOCK_SIZE),
                this._alphaMesh.position.set(this._chunk.chunkPos.x * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.y * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE), this._chunk.chunkPos.z * (l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)),
                this._alphaMesh.matrixAutoUpdate = !1,
                this._alphaMesh.updateMatrix(),
                this._terrainRenderer.object.add(this._alphaMesh)))
            }
            ,
            e.generateMesh = function(t) {
                if (this._chunk.isEmpty())
                    this.cleanUp();
                else {
                    for (var e = [], i = [], n = [], s = [], r = [], a = [], o = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), h = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), c = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), _ = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z), u = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), d = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), p = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), v = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), S = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), y = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), m = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), E = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), g = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, l.a.CHUNK_SIZE, l.a.CHUNK_SIZE), k = this._chunkStorageManager.getBlockAt(g.x, g.y, g.z), f = this._chunk.chunkBlockPosToWorldBlockPos(-1, l.a.CHUNK_SIZE, l.a.CHUNK_SIZE), I = this._chunkStorageManager.getBlockAt(f.x, f.y, f.z), T = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, l.a.CHUNK_SIZE, -1), O = this._chunkStorageManager.getBlockAt(T.x, T.y, T.z), A = this._chunk.chunkBlockPosToWorldBlockPos(-1, l.a.CHUNK_SIZE, -1), R = this._chunkStorageManager.getBlockAt(A.x, A.y, A.z), b = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, -1, l.a.CHUNK_SIZE), P = this._chunkStorageManager.getBlockAt(b.x, b.y, b.z), M = this._chunk.chunkBlockPosToWorldBlockPos(-1, -1, l.a.CHUNK_SIZE), x = this._chunkStorageManager.getBlockAt(M.x, M.y, M.z), N = this._chunk.chunkBlockPosToWorldBlockPos(l.a.CHUNK_SIZE, -1, -1), L = this._chunkStorageManager.getBlockAt(N.x, N.y, N.z), w = this._chunk.chunkBlockPosToWorldBlockPos(-1, -1, -1), U = this._chunkStorageManager.getBlockAt(w.x, w.y, w.z), D = [], B = [], z = [], F = [], j = [], K = [], G = [], H = [], W = [], Y = [], V = [], Z = [], q = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), Q = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), X = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), J = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z + 1), $ = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), tt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), et = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), it = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y, this._chunk.chunkPos.z - 1), nt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z + 1), st = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z + 1), rt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z - 1), at = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z - 1), ot = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), ht = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), ct = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), _t = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y + 1, this._chunk.chunkPos.z), lt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z + 1), ut = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z + 1), dt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z - 1), pt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z - 1), vt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), St = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x + 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), yt = this._chunkStorageManager.hasChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), mt = this._chunkStorageManager.getChunk(this._chunk.chunkPos.x - 1, this._chunk.chunkPos.y - 1, this._chunk.chunkPos.z), Et = 0; Et < l.a.CHUNK_SIZE; Et++) {
                        e[Et] = [],
                        i[Et] = [],
                        n[Et] = [],
                        s[Et] = [],
                        r[Et] = [],
                        a[Et] = [];
                        for (var gt = 0; gt < l.a.CHUNK_SIZE; gt++)
                            e[Et][gt] = o ? h.getChunkBlockAt(0, Et, gt) : C.a.AIR,
                            i[Et][gt] = c ? _.getChunkBlockAt(l.a.CHUNK_SIZE - 1, Et, gt) : C.a.AIR,
                            n[Et][gt] = u ? d.getChunkBlockAt(Et, 0, gt) : C.a.AIR,
                            s[Et][gt] = p ? v.getChunkBlockAt(Et, l.a.CHUNK_SIZE - 1, gt) : C.a.AIR,
                            r[Et][gt] = S ? y.getChunkBlockAt(Et, gt, 0) : C.a.AIR,
                            a[Et][gt] = m ? E.getChunkBlockAt(Et, gt, l.a.CHUNK_SIZE - 1) : C.a.AIR;
                        D[Et] = q ? Q.getChunkBlockAt(0, Et, 0) : C.a.AIR,
                        B[Et] = X ? J.getChunkBlockAt(l.a.CHUNK_SIZE - 1, Et, 0) : C.a.AIR,
                        z[Et] = $ ? tt.getChunkBlockAt(0, Et, l.a.CHUNK_SIZE - 1) : C.a.AIR,
                        F[Et] = et ? it.getChunkBlockAt(l.a.CHUNK_SIZE - 1, Et, l.a.CHUNK_SIZE - 1) : C.a.AIR,
                        j[Et] = nt ? st.getChunkBlockAt(Et, 0, 0) : C.a.AIR,
                        K[Et] = rt ? at.getChunkBlockAt(Et, 0, l.a.CHUNK_SIZE - 1) : C.a.AIR,
                        G[Et] = ot ? ht.getChunkBlockAt(0, 0, Et) : C.a.AIR,
                        H[Et] = ct ? _t.getChunkBlockAt(l.a.CHUNK_SIZE - 1, 0, Et) : C.a.AIR,
                        W[Et] = lt ? ut.getChunkBlockAt(Et, l.a.CHUNK_SIZE - 1, 0) : C.a.AIR,
                        Y[Et] = dt ? pt.getChunkBlockAt(Et, l.a.CHUNK_SIZE - 1, l.a.CHUNK_SIZE - 1) : C.a.AIR,
                        V[Et] = vt ? St.getChunkBlockAt(0, l.a.CHUNK_SIZE - 1, Et) : C.a.AIR,
                        Z[Et] = yt ? mt.getChunkBlockAt(l.a.CHUNK_SIZE - 1, l.a.CHUNK_SIZE - 1, Et) : C.a.AIR
                    }
                    this._chunkGenWorkerPool.queueChunkGeneration(++this._lastSentVersion, this._chunk.chunkPos, this._chunk.blocks, n, s, e, i, r, a, k, I, O, R, P, x, L, U, D, B, z, F, j, K, G, H, W, Y, V, Z, t)
                }
            }
            ,
            t
        }()
          , B = function() {
            function t(t) {
                var e = this;
                this._terrainRenderer = t,
                this._fallingBlocksGroups = void 0,
                this.render = function(t, i) {
                    for (var n = 0; n < e._fallingBlocksGroups.length; n++) {
                        var s = e._fallingBlocksGroups[n]
                          , r = s.mesh.position;
                        s.mesh.position.set(r.x, r.y - 2 * t, r.z);
                        var a = new h.Ob(1,0,1);
                        a.normalize(),
                        s.mesh.rotateOnAxis(a, 1.5 * t),
                        s.mesh.position.y < s.originY - 5 * l.a.BLOCK_SIZE && (e._terrainRenderer.sceneRenderer.scene.remove(s.mesh),
                        s.mesh.geometry.dispose(),
                        e._fallingBlocksGroups[n] = e._fallingBlocksGroups[e._fallingBlocksGroups.length - 1],
                        e._fallingBlocksGroups.pop(),
                        --n)
                    }
                }
                ,
                this._fallingBlocksGroups = []
            }
            var e = t.prototype;
            return e.register = function(t) {
                this._fallingBlocksGroups.push({
                    mesh: t,
                    originY: t.position.y
                }),
                this._terrainRenderer.sceneRenderer.scene.add(t)
            }
            ,
            e.cleanUp = function() {
                for (var t = 0; t < this._fallingBlocksGroups.length; t++) {
                    var e = this._fallingBlocksGroups[t];
                    e.mesh.geometry.dispose(),
                    this._terrainRenderer.sceneRenderer.scene.remove(e.mesh)
                }
            }
            ,
            t
        }()
          , z = i(91)
          , F = i(80)
          , j = function() {
            function t(t) {
                var e = this;
                this._terrainRenderer = t,
                this._cracksMap = void 0,
                this._cracksArr = void 0,
                this._crackMesh = void 0,
                this._instanceCrackAttribute = void 0,
                this._dummyObj = void 0,
                this.render = function(t, e) {}
                ,
                this.update = function(t) {
                    for (var i = Date.now(), n = 0, s = Object.entries(e._cracksMap); n < s.length; n++) {
                        var r = s[n]
                          , a = r[0]
                          , o = r[1];
                        if (i - o.lastActiveTime >= 3e3)
                            if (o.progress = Math.max(0, o.progress - Object(F.d)(1) / 4),
                            o.progress <= 0)
                                e.removeBlockBreakProgressByKey(a);
                            else {
                                var h = z.a[e._terrainRenderer.chunkStorageManager.getBlockAt(o.pos.x, o.pos.y, o.pos.z)].hardness;
                                o.instanceIdx >= 0 && o.instanceIdx < l.a.CRACK_INSTANCE_LIMIT && (o.percent = Math.max(0, Math.min(1, o.progress / h)),
                                e._instanceCrackAttribute.set([o.percent], o.instanceIdx),
                                e._instanceCrackAttribute.needsUpdate = !0)
                            }
                    }
                }
                ,
                this._cracksMap = {},
                this._cracksArr = [];
                for (var i = new h.j(l.a.BLOCK_SIZE,l.a.BLOCK_SIZE,l.a.BLOCK_SIZE), n = new h.Y({
                    transparent: !0,
                    map: k.a.blockTexture,
                    blending: h.cb,
                    fog: !1
                }), s = [], r = 0; r < l.a.CRACK_INSTANCE_LIMIT; r++)
                    s.push(0);
                this._instanceCrackAttribute = new h.A(new Float32Array(s),1),
                i.setAttribute("instanceCrack", this._instanceCrackAttribute),
                n.onBeforeCompile = function(t) {
                    t.vertexShader = t.vertexShader.replace("#include <common>", "\n                attribute float instanceCrack;\n                varying float vInstanceCrack;\n                #include <common>\n            ").replace("#include <begin_vertex>", "\n                #include <begin_vertex>\n                vInstanceCrack = instanceCrack;\n            "),
                    t.fragmentShader = t.fragmentShader.replace("#include <common>", "\n                varying float vInstanceCrack;\n                #include <common>\n            ").replace("#include <map_fragment>", "\n                vec2 rawUv = vec2(\n                    fract(vUv.x) / 8.0,\n                    fract(vUv.y) / 8.0\n                );\n                float crackU = floor(vInstanceCrack * 5.0) / 8.0;\n                float crackV = 7.0 / 8.0;\n                vec4 crackTexture = sRGBToLinear(texture2D(map, vec2(rawUv.x + crackU, rawUv.y + crackV)));\n                vec4 identity = vec4(1.0, 1.0, 1.0, 1.0);\n                float hasPixel = step(0.5, crackTexture.a);\n                crackTexture = (1.0 - hasPixel) * identity + hasPixel * crackTexture;\n                diffuseColor = crackTexture;\n            ")
                }
                ,
                this._crackMesh = new h.B(i,n,l.a.CRACK_INSTANCE_LIMIT),
                this._terrainRenderer.sceneRenderer.scene.add(this._crackMesh),
                this._crackMesh.count = this._cracksArr.length,
                this._dummyObj = new h.hb,
                this._dummyObj.scale.set(1.002, 1.002, 1.002)
            }
            var e = t.prototype;
            return e.setBlockBreakProgress = function(t, e, i, n, s) {
                var r = Object(S.l)(t, e, i)
                  , a = b(t, e, i)
                  , o = z.a[this._terrainRenderer.chunkStorageManager.getBlockAt(r.x, r.y, r.z)].hardness;
                n = Math.min(o, n);
                var h = Math.max(0, Math.min(n / o))
                  , c = this.getBlockProgress(t, e, i) / o;
                if (a in this._cracksMap)
                    this._cracksMap[a].progress = n,
                    this._cracksMap[a].percent = h,
                    this._cracksMap[a].lastActiveTime = Date.now();
                else {
                    var _ = this._cracksArr.length
                      , u = {
                        progress: n,
                        percent: h,
                        lastActiveTime: Date.now(),
                        pos: r,
                        instanceIdx: _
                    };
                    if (this._cracksMap[a] = u,
                    this._cracksArr.push(u),
                    _ >= 0 && _ < l.a.CRACK_INSTANCE_LIMIT) {
                        var d = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t, e, i);
                        this._dummyObj.position.set(d.x, d.y, d.z),
                        this._dummyObj.updateMatrix(),
                        this._crackMesh.setMatrixAt(_, this._dummyObj.matrix),
                        this._crackMesh.count = Math.min(l.a.CRACK_INSTANCE_LIMIT, this._cracksArr.length),
                        this._crackMesh.instanceMatrix.needsUpdate = !0
                    }
                }
                var p = h;
                if (this._cracksMap[a].instanceIdx >= 0 && this._cracksMap[a].instanceIdx < l.a.CRACK_INSTANCE_LIMIT && (this._instanceCrackAttribute.set([h], this._cracksMap[a].instanceIdx),
                this._instanceCrackAttribute.needsUpdate = !0),
                this._cracksMap[a].progress >= o)
                    this._terrainRenderer.sceneRenderer.controlsRenderer.controls.predictBlockEdit(r.x, r.y, r.z, C.a.AIR),
                    this.removeBlockBreakProgressByKey(a);
                else if (s) {
                    if (c < p && Math.floor(c / .2) !== Math.floor(p / .2)) {
                        var v = this._terrainRenderer.chunkStorageManager.getBlockAt(t, e, i)
                          , y = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t, e, i)
                          , m = z.a[v].sound;
                        void 0 !== m && this._terrainRenderer.sceneRenderer.controlsRenderer.playPositionalSound(y, m, -1200, 1, 40 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 4)
                    }
                }
            }
            ,
            e.removeBlockBreakProgress = function(t, e, i) {
                var n = b(t, e, i);
                this.removeBlockBreakProgressByKey(n)
            }
            ,
            e.removeBlockBreakProgressByKey = function(t) {
                if (t in this._cracksMap) {
                    if (this._cracksArr.length > 1) {
                        var e = this._cracksMap[t]
                          , i = this._cracksArr[this._cracksArr.length - 1];
                        if (this._cracksArr[e.instanceIdx] = i,
                        i.instanceIdx = e.instanceIdx,
                        i.instanceIdx >= 0 && i.instanceIdx < l.a.CRACK_INSTANCE_LIMIT) {
                            var n = this._terrainRenderer.chunkStorageManager.roundToBlockCenterPos(i.pos.x, i.pos.y, i.pos.z);
                            this._dummyObj.position.set(n.x, n.y, n.z),
                            this._dummyObj.updateMatrix(),
                            this._crackMesh.setMatrixAt(i.instanceIdx, this._dummyObj.matrix),
                            this._instanceCrackAttribute.set([i.percent], i.instanceIdx),
                            this._instanceCrackAttribute.needsUpdate = !0
                        }
                    }
                    delete this._cracksMap[t],
                    this._cracksArr.pop(),
                    this._crackMesh.count = Math.min(l.a.CRACK_INSTANCE_LIMIT, this._cracksArr.length),
                    this._crackMesh.instanceMatrix.needsUpdate = !0
                }
            }
            ,
            e.getBlockProgress = function(t, e, i) {
                var n = b(t, e, i);
                return n in this._cracksMap ? this._cracksMap[n].progress : 0
            }
            ,
            e.addBlockBreakProgress = function(t, e, i, n, s) {
                this.setBlockBreakProgress(t, e, i, this.getBlockProgress(t, e, i) + n, s)
            }
            ,
            e.cleanUp = function() {}
            ,
            t
        }()
          , K = i(3);
        function G(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return H(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return H(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function H(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var W, Y = function() {
            function t(t, e, i, n) {
                var s = this;
                this._config = t,
                this._camera = e,
                this._sceneRenderer = i,
                this._statsRenderer = n,
                this._wrapper = void 0,
                this._chunkStorageManager = void 0,
                this._chunkGenWorkerPool = void 0,
                this._chunkRenderers = void 0,
                this._fallingBlocksRenderer = void 0,
                this._cracksRenderer = void 0,
                this._blockBreakProgress = void 0,
                this._initialChunksToLoad = void 0,
                this.onSetBlock = function(t, e, i, n) {
                    s._cracksRenderer.removeBlockBreakProgress(t, e, i)
                }
                ,
                this.onSetBlockBreakProgress = function(t, e, i, n) {
                    s._cracksRenderer.setBlockBreakProgress(t, e, i, n, !0)
                }
                ,
                this.loadChunk = function(t, e, i, n, r) {
                    if (!s._chunkStorageManager.hasChunk(t, e, i)) {
                        var a = s._chunkStorageManager.loadChunk(t, e, i, n, r)
                          , o = new D(s._chunkGenWorkerPool,s._chunkStorageManager,a,s);
                        s._chunkRenderers.set(R(t, e, i), o)
                    }
                }
                ,
                this.unloadChunk = function(t, e, i) {
                    if (s._chunkStorageManager.hasChunk(t, e, i)) {
                        var n = R(t, e, i);
                        s._chunkStorageManager.deleteChunk(t, e, i),
                        s._chunkRenderers.get(n).cleanUp(),
                        s._chunkRenderers.delete(n)
                    }
                }
                ,
                this.onGameJoin = function(t, e, i, n, r, a, o) {
                    s._chunkStorageManager = new U(a,o),
                    s.processInitialMapLoading()
                }
                ,
                this.processInitialMapLoading = function() {
                    var t = 70 * (s._chunkStorageManager.maxChunkPos.y - s._chunkStorageManager.minChunkPos.y);
                    if (Object(y.f)() === K.a.DOWNLOADING) {
                        var e = Math.min(1, Math.max(0, s._chunkStorageManager.chunks.size / t)) / 2;
                        e >= .5 && (s._initialChunksToLoad = s._chunkStorageManager.numChunksNeedUpdate),
                        d.a.emit(p.a.TERRAIN_LOADING_STATUS, e >= .5 ? K.a.LOADING : K.a.DOWNLOADING, e),
                        setTimeout(s.processInitialMapLoading, 100)
                    } else {
                        for (var i = 0, n = void 0; void 0 !== (n = s._chunkStorageManager.getNextChunkToUpdate()); )
                            if (s._chunkRenderers.get(n.chunkKey).generateMesh(!1),
                            n.doneUpdate(),
                            ++i >= 20 || 0 === s._chunkStorageManager.numChunksNeedUpdate) {
                                var r = Math.max(0, Math.min(1, 1 - s._chunkStorageManager.numChunksNeedUpdate / s._initialChunksToLoad)) / 2 + .5;
                                d.a.emit(p.a.TERRAIN_LOADING_STATUS, K.a.LOADING, r);
                                break
                            }
                        s._chunkStorageManager.numChunksNeedUpdate > 0 && setTimeout(s.processInitialMapLoading, 0)
                    }
                }
                ,
                this.update = function(t) {
                    s._chunkStorageManager && (Object(y.e)() >= 1 && (s.updateChunkMeshes(),
                    s._chunkGenWorkerPool.process()),
                    s._statsRenderer.totalChunksLoaded = s._chunkStorageManager.chunks.size,
                    s._cracksRenderer.update(t))
                }
                ,
                this.render = function(t, e) {
                    s._fallingBlocksRenderer.render(t, e)
                }
                ,
                this._wrapper = new h.hb,
                this._chunkRenderers = new Map,
                this._chunkGenWorkerPool = new A(this,Math.min(3, l.a.NUM_CORES)),
                this._fallingBlocksRenderer = new B(this),
                this._cracksRenderer = new j(this),
                this._blockBreakProgress = {},
                this._initialChunksToLoad = 0,
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin),
                d.a.on(p.a.LOAD_CHUNK, this.loadChunk),
                d.a.on(p.a.UNLOAD_CHUNK, this.unloadChunk),
                d.a.on(p.a.SET_BLOCK_BREAK_PROGRESS, this.onSetBlockBreakProgress),
                d.a.on(p.a.SET_BLOCK, this.onSetBlock)
            }
            ,
            e.unbindEvents = function() {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin),
                d.a.off(p.a.LOAD_CHUNK, this.loadChunk),
                d.a.off(p.a.UNLOAD_CHUNK, this.unloadChunk),
                d.a.off(p.a.SET_BLOCK_BREAK_PROGRESS, this.onSetBlockBreakProgress),
                d.a.off(p.a.SET_BLOCK, this.onSetBlock)
            }
            ,
            e.cleanUp = function() {
                this.unbindEvents();
                for (var t, e = G(this._chunkRenderers); !(t = e()).done; ) {
                    var i = t.value;
                    i[0];
                    i[1].cleanUp()
                }
                this._chunkGenWorkerPool.cleanUp(),
                this._fallingBlocksRenderer.cleanUp()
            }
            ,
            e.processChunkData = function(t, e, i, n, s, r) {
                var a = R(e, i, n);
                this._chunkRenderers.has(a) && this._chunkRenderers.get(a).updateMesh(t, s, r)
            }
            ,
            e.processFallingBlocks = function(t, e) {
                this._fallingBlocksRenderer.register(e)
            }
            ,
            e.updateChunkMeshes = function() {
                var t = 0;
                if (this._chunkStorageManager.numChunksNeedUpdate > 0)
                    for (var e = void 0; void 0 !== (e = this._chunkStorageManager.getNextChunkToUpdate()) && (this._chunkRenderers.get(e.chunkKey).generateMesh(!0),
                    e.doneUpdate(),
                    !(++t >= 2)); )
                        ;
            }
            ,
            e.setBlockAt = function(t, e, i, n, s) {
                var r = this._chunkStorageManager.getBlockAt(t, e, i);
                if (this._chunkStorageManager.setBlockAt(t, e, i, n),
                s && r !== n) {
                    var a = this._chunkStorageManager.roundToBlockCenterPos(t, e, i)
                      , o = z.a[n].sound;
                    n === C.a.AIR && (o = z.a[r].sound),
                    void 0 !== o && this._sceneRenderer.controlsRenderer.playPositionalSound(a, o, 0, 1, 40 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 4)
                }
            }
            ,
            _()(t, [{
                key: "chunkStorageManager",
                get: function() {
                    return this._chunkStorageManager
                }
            }, {
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }, {
                key: "sceneRenderer",
                get: function() {
                    return this._sceneRenderer
                }
            }, {
                key: "chunkGenWorkerPool",
                get: function() {
                    return this._chunkGenWorkerPool
                }
            }, {
                key: "cracksRenderer",
                get: function() {
                    return this._cracksRenderer
                }
            }]),
            t
        }(), V = i(161), Z = i(95), q = i(354), Q = i.n(q), X = i(108), J = i(94), $ = function() {
            function t() {
                var t = this;
                this._keyHoldStates = void 0,
                this._keyPressStates = void 0,
                this._hasScrolledUp = void 0,
                this._hasScrolledDown = void 0,
                this.onWindowBlur = function() {
                    t._keyHoldStates = {},
                    t._keyPressStates = {}
                }
                ,
                this.onMouseWheel = function(e) {
                    Object(y.l)() || (e.deltaX > 0 || e.deltaY > 0 ? t._hasScrolledUp = !0 : (e.deltaX < 0 || e.deltaY < 0) && (t._hasScrolledDown = !0))
                }
                ,
                this.onMouseDown = function(e) {
                    t.onGameKeyDown(-e.button)
                }
                ,
                this.onMouseUp = function(e) {
                    t.onGameKeyUp(-e.button)
                }
                ,
                this.onKeyDown = function(e) {
                    t.onGameKeyDown(e.keyCode)
                }
                ,
                this.onKeyUp = function(e) {
                    t.onGameKeyUp(e.keyCode)
                }
                ,
                this._keyHoldStates = {},
                this._keyPressStates = {},
                this._hasScrolledUp = !1,
                this._hasScrolledDown = !1,
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                document.addEventListener("keydown", this.onKeyDown, !1),
                document.addEventListener("keyup", this.onKeyUp, !1),
                document.addEventListener("mousedown", this.onMouseDown, !1),
                document.addEventListener("mouseup", this.onMouseUp, !1),
                document.addEventListener("wheel", this.onMouseWheel, !1),
                window.addEventListener("blur", this.onWindowBlur, !1)
            }
            ,
            e.unbindEvents = function() {
                document.removeEventListener("keydown", this.onKeyDown, !1),
                document.removeEventListener("keyup", this.onKeyUp, !1),
                document.removeEventListener("mousedown", this.onMouseDown, !1),
                document.removeEventListener("mouseup", this.onMouseUp, !1),
                document.removeEventListener("wheel", this.onMouseWheel, !1),
                window.removeEventListener("blur", this.onWindowBlur, !1)
            }
            ,
            e.cleanUp = function() {
                this.unbindEvents()
            }
            ,
            e.onGameKeyDown = function(t) {
                this.isKeyDown(t) || (d.a.emit(p.a.KEY_PRESS, t),
                this._keyPressStates[t] = !0),
                this._keyHoldStates[t] = !0
            }
            ,
            e.onGameKeyUp = function(t) {
                delete this._keyHoldStates[t],
                delete this._keyPressStates[t]
            }
            ,
            e.isGameKeyDownBypassPause = function(t) {
                return this.isKeyDown(t)
            }
            ,
            e.isGameKeyDownInventoryInactive = function(t) {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.isKeyDown(t)
            }
            ,
            e.isGameKeyDown = function(t) {
                return !Object(y.l)() && !Object(y.j)() && this.isKeyDown(t)
            }
            ,
            e.isGameKeyPressed = function(t) {
                return !Object(y.l)() && !Object(y.j)() && this.isKeyPressed(t)
            }
            ,
            e.isKeyDown = function(t) {
                return !0 === this._keyHoldStates[t]
            }
            ,
            e.isKeyPressed = function(t) {
                var e = this._keyPressStates[t];
                return delete this._keyPressStates[t],
                e
            }
            ,
            e.hasGameScrolledUp = function() {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.hasScrolledUp()
            }
            ,
            e.hasGameScrolledDown = function() {
                return !(Object(y.l)() || Object(y.j)() || Object(y.m)()) && this.hasScrolledDown()
            }
            ,
            e.hasScrolledUp = function() {
                var t = this._hasScrolledUp;
                return this._hasScrolledUp = !1,
                t
            }
            ,
            e.hasScrolledDown = function() {
                var t = this._hasScrolledDown;
                return this._hasScrolledDown = !1,
                t
            }
            ,
            t
        }(), tt = i(139), et = i(78), it = i.n(et), nt = i(87);
        !function(t) {
            t[t.FIRST_PERSON = 0] = "FIRST_PERSON",
            t[t.THIRD_PERSON = 1] = "THIRD_PERSON"
        }(W || (W = {}));
        var st, rt = function(t) {
            function e(e, i, n, s) {
                var r;
                return (r = t.call(this) || this)._settings = e,
                r._camera = i,
                r._domElement = n,
                r._controls = s,
                r._controlMode = void 0,
                r._isLocked = void 0,
                r._minPolarAngle = void 0,
                r._maxPolarAngle = void 0,
                r._euler = void 0,
                r._base = void 0,
                r._recoilShake = void 0,
                r._recoilShakeDir = void 0,
                r._recoil = void 0,
                r._recoilMax = void 0,
                r._recoilGainVel = void 0,
                r._recoilRecoverVel = void 0,
                r._recoilStartTime = void 0,
                r._recoilActiveTime = void 0,
                r._vec = void 0,
                r._mouseOffset = void 0,
                r._orbitBase = void 0,
                r._orbitTarget = void 0,
                r._orbitRadius = void 0,
                r._orbitOffset = void 0,
                r._changeEvent = void 0,
                r._lockEvent = void 0,
                r._unlockEvent = void 0,
                r._skipOneMouseMoveEvent = void 0,
                r.setRecoilMax = function(t) {
                    r._recoilMax = t
                }
                ,
                r.setRecoilVel = function(t, e, i) {
                    r._recoilGainVel = t,
                    r._recoilRecoverVel = e,
                    r._recoilActiveTime = i,
                    r._recoilStartTime = Date.now()
                }
                ,
                r.reset = function() {
                    r._controlMode = W.FIRST_PERSON,
                    r._recoilShake = 0,
                    r._recoilShakeDir = !0,
                    r._recoil = 0,
                    r._recoilMax = 1,
                    r._recoilGainVel = 0,
                    r._recoilRecoverVel = 0,
                    r._recoilActiveTime = 0,
                    r._recoilStartTime = Date.now()
                }
                ,
                r.render = function(t, e) {
                    if (r._controlMode === W.FIRST_PERSON) {
                        r._base.x -= r._mouseOffset.y,
                        r._base.y -= r._mouseOffset.x,
                        r._base.x = Math.max(Math.PI / 2 - r._maxPolarAngle, Math.min(Math.PI / 2 - r._minPolarAngle, r._base.x)),            Date.now() - r._recoilStartTime <= r._recoilActiveTime ? r._recoil = Math.max(0, Math.min(0)) : r._recoil = Math.max(0, Math.min(r._recoilMax, r._recoil - r._recoilRecoverVel * t)); // Until updaterecoil lines changed
                        r._recoil === r._recoilMax ? (r._recoilShakeDir ? r._recoilShake = Math.min(0) : r._recoilShake = Math.max(0), 0 === Math.abs(r._recoilShake) && (r._recoilShakeDir = !r._recoilShakeDir)) : (r._recoilShake <= 0 ? r._recoilShake = Math.min(0) : r._recoilShake = Math.max(0), r._recoilShakeDir = !0),
                        r.updateRecoil()
                    } else
                        r._controlMode === W.THIRD_PERSON && (r._orbitBase.setFromVector3(r._orbitOffset),
                        r._orbitBase.theta -= r._mouseOffset.x,
                        r._orbitBase.phi -= r._mouseOffset.y,
                        r._orbitBase.makeSafe(),
                        r._orbitBase.radius = r._orbitRadius,
                        r._orbitOffset.setFromSpherical(r._orbitBase),
                        r._camera.position.copy(r._orbitTarget.position).add(r._orbitOffset),
                        r._camera.lookAt(r._orbitTarget.position));
                    r._mouseOffset.set(0, 0)
                }
                ,
                r.updateRecoil = function() {
                    r._euler.x = r._base.x + r._recoil + r._recoilShake,
                    r._euler.y = r._base.y,
                    r._camera.quaternion.setFromEuler(r._euler)
                }
                ,
                r.onMouseMove = function(t) {
                    if (r._isLocked)
                        if (r._skipOneMouseMoveEvent)
                            r._skipOneMouseMoveEvent = !1;
                        else {
                            var e = t.movementX || t.mozMovementX || t.webkitMovementX || 0
                              , i = t.movementY || t.mozMovementY || t.webkitMovementY || 0;
                            r._settings.invertYAxis && (i *= -1);
                            var n = 2e-4
                              , s = Object(X.d)(r._controls.getLastInput(), r._controls.playerState);
                            s && Object(nt.h)(r._controls.playerState.inventory.getSelected().item.type) ? n *= r._settings.scopedSensitivityMultiplier : s && (n *= r._settings.adsSensitivityMultiplier),
                            r._mouseOffset.x += e * r._settings.sensitivity * n,
                            r._mouseOffset.y += i * r._settings.sensitivity * n,
                            r.dispatchEvent(r._changeEvent)
                        }
                }
                ,
                r.onPointerlockChange = function() {
                    r._domElement.ownerDocument.pointerLockElement === r._domElement ? (r.dispatchEvent(r._lockEvent),
                    r._isLocked = !0) : (r.dispatchEvent(r._unlockEvent),
                    r._isLocked = !1)
                }
                ,
                r.onPointerlockError = function(t) {
                    console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")
                }
                ,
                r.connect = function() {
                    r._domElement.ownerDocument.addEventListener("mousemove", r.onMouseMove, !1),
                    r._domElement.ownerDocument.addEventListener("pointerlockchange", r.onPointerlockChange, !1),
                    r._domElement.ownerDocument.addEventListener("pointerlockerror", r.onPointerlockError, !1),
                    d.a.on(p.a.GAME_UNFOCUS, r.onGameUnfocus)
                }
                ,
                r.disconnect = function() {
                    r._domElement.ownerDocument.removeEventListener("mousemove", r.onMouseMove, !1),
                    r._domElement.ownerDocument.removeEventListener("pointerlockchange", r.onPointerlockChange, !1),
                    r._domElement.ownerDocument.removeEventListener("pointerlockerror", r.onPointerlockError, !1),
                    d.a.off(p.a.GAME_UNFOCUS, r.onGameUnfocus)
                }
                ,
                r.onGameUnfocus = function() {
                    r._skipOneMouseMoveEvent = !0
                }
                ,
                r.dispose = function() {
                    r.disconnect()
                }
                ,
                r.getObject = function() {
                    return r._camera
                }
                ,
                r.getDirection = function(t) {
                    return t.set(0, 0, -1).applyQuaternion(r._camera.quaternion)
                }
                ,
                r.moveForward = function(t) {
                    r._vec.setFromMatrixColumn(r._camera.matrix, 0),
                    r._vec.crossVectors(r._camera.up, r._vec),
                    r._camera.position.addScaledVector(r._vec, t)
                }
                ,
                r.moveRight = function(t) {
                    r._vec.setFromMatrixColumn(r._camera.matrix, 0),
                    r._camera.position.addScaledVector(r._vec, t)
                }
                ,
                r.lock = function() {
                    r.hasPointerLockSupport() && r._domElement.requestPointerLock()
                }
                ,
                r.unlock = function() {
                    r.hasPointerLockSupport() && r._domElement.ownerDocument.exitPointerLock()
                }
                ,
                r.hasPointerLockSupport = function() {
                    return "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document
                }
                ,
                r._isLocked = !1,
                r._minPolarAngle = 0,
                r._maxPolarAngle = Math.PI,
                r._changeEvent = {
                    type: "change"
                },
                r._lockEvent = {
                    type: "lock"
                },
                r._unlockEvent = {
                    type: "unlock"
                },
                r._euler = new h.s(0,0,0,"YXZ"),
                r._base = new h.s(0,0,0,"YXZ"),
                r._recoilShake = 0,
                r._recoilShakeDir = !0,
                r._recoil = 0,
                r._recoilMax = 1,
                r._recoilGainVel = 0,
                r._recoilRecoverVel = 0,
                r._recoilActiveTime = 0,
                r._recoilStartTime = Date.now(),
                r._vec = new h.Ob,
                r._controlMode = W.FIRST_PERSON,
                r._mouseOffset = new h.Nb(0,0),
                r._orbitBase = new h.Bb,
                r._orbitTarget = void 0,
                r._orbitRadius = 0,
                r._orbitOffset = new h.Ob(0,0,0),
                r._skipOneMouseMoveEvent = !1,
                r.connect(),
                r
            }
            it()(e, t);
            var i = e.prototype;
            return i.startThirdPersonCamera = function(t, e, i) {
                this.reset(),
                this._controlMode = W.THIRD_PERSON,
                this._orbitTarget = t,
                this._orbitRadius = e,
                void 0 !== i && this._orbitOffset.set(i.x, i.y, i.z)
            }
            ,
            i.startFirstPersonCamera = function(t) {
                this.reset(),
                this._orbitTarget = void 0,
                this._orbitRadius = 0,
                this._base.x = t.x,
                this._base.y = t.y
            }
            ,
            i.getBase = function() {
                return this._base
            }
            ,
            _()(e, [{
                key: "isLocked",
                get: function() {
                    return this._isLocked
                }
            }]),
            e
        }(h.t), at = i(49), ot = i(122), ht = i(154), ct = i(21), _t = i(85), lt = function() {
            this.walkedDistFromLastSoundPlayed = void 0,
            this.prevWaterSoundPlayedTime = void 0,
            this.swamDistFromLastSoundPlayed = void 0,
            this.prevOnGround = void 0,
            this.prevPos = void 0,
            this.walkedDistFromLastSoundPlayed = 0,
            this.prevWaterSoundPlayedTime = 0,
            this.swamDistFromLastSoundPlayed = 0
        }, ut = function(t, e, i, n, s, r, a) {
            var o = a ? r.playFootstepSound.bind(r) : function(e, i) {
                r.playPositionalFootstepSound(t, e, i)
            }
              , h = a ? r.playSound.bind(r) : function(e, i, n) {
                r.playPositionalSound(t, e, i, n)
            }
            ;
            void 0 === n.prevOnGround && (n.prevOnGround = i),
            void 0 === n.prevPos && (n.prevPos = Object(S.b)(t));
            var c = s.getBlockAt(n.prevPos.x / l.a.BLOCK_SIZE, n.prevPos.y / l.a.BLOCK_SIZE, n.prevPos.z / l.a.BLOCK_SIZE)
              , _ = s.getBlockAt(t.x / l.a.BLOCK_SIZE, t.y / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE)
              , u = s.getBlockAt(t.x / l.a.BLOCK_SIZE, (t.y + l.a.BLOCK_SIZE) / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE)
              , d = s.getBlockAt(t.x / l.a.BLOCK_SIZE, (t.y + 2 * l.a.BLOCK_SIZE) / l.a.BLOCK_SIZE, t.z / l.a.BLOCK_SIZE);
            if (Object(O.e)(_))
                n.walkedDistFromLastSoundPlayed = 0,
                Object(O.e)(c) ? !Object(O.e)(_) || Object(O.e)(u) && Object(O.e)(d) || (n.swamDistFromLastSoundPlayed += Object(S.d)(t, n.prevPos),
                n.swamDistFromLastSoundPlayed >= 4 && (h(_t.a.FOOTSTEP_WATER, 2400 * Math.random() - 1200, .2),
                n.swamDistFromLastSoundPlayed = 0)) : (Date.now() - n.prevWaterSoundPlayedTime < 1e3 ? h(_t.a.WATER_SPLASH, 800, .1) : h(_t.a.WATER_SPLASH),
                n.prevWaterSoundPlayedTime = Date.now());
            else if (e !== Z.a.CROUCHING) {
                n.swamDistFromLastSoundPlayed = 0;
                var p = Object(X.c)(t, s)
                  , v = z.a[p].sound
                  , y = 1e3;
                p !== C.a.LEAVES && p !== C.a.SAND || (y = 0),
                void 0 !== v && (!n.prevOnGround && i ? (o(v, y),
                n.walkedDistFromLastSoundPlayed = 0) : i && n.prevOnGround && (n.walkedDistFromLastSoundPlayed += Object(S.d)(t, n.prevPos),
                n.walkedDistFromLastSoundPlayed >= 1.5 && (o(v, y),
                n.walkedDistFromLastSoundPlayed = 0)))
            }
            n.prevPos = Object(S.b)(t),
            n.prevOnGround = i
        }, dt = function(t, e, i, n) {
            var s = document.createElement("canvas").getContext("2d")
              , r = e + "px Arial";
            s.font = r;
            var a = s.measureText(t).width + 4
              , o = e + 4;
            s.canvas.width = a,
            s.canvas.height = o,
            s.font = r,
            s.textBaseline = "top",
            s.fillStyle = "rgba(0, 0, 0, 0)",
            s.fillRect(0, 0, a, o),
            s.fillStyle = i,
            s.fillText(t, 2, 2);
            var c = new h.n(s.canvas);
            c.minFilter = h.L,
            c.wrapS = h.o,
            c.wrapT = h.o;
            var _ = new h.Eb({
                map: c,
                transparent: !0,
                depthWrite: !1
            })
              , l = new h.Db(_)
              , u = .2 * n;
            return l.scale.set(a / o * 1 * u, 1 * u, 1),
            l.renderOrder = -1,
            l
        }, pt = function() {
            function t(t, e, i) {
                this._id = t,
                this._type = e,
                this._entitiesRenderer = i,
                this._wrapper = void 0,
                this._previousLerpPosition = void 0,
                this._previousLerpDirection = void 0,
                this._posInitialized = void 0,
                this._dirInitialized = void 0,
                this._wrapper = new h.hb,
                this._wrapper.matrixAutoUpdate = !1,
                this._wrapper.name = "Entity " + this._id,
                this._previousLerpDirection = Object(J.e)(0, 0),
                this._previousLerpPosition = Object(S.l)(0, 0, 0),
                this._posInitialized = !1,
                this._dirInitialized = !1
            }
            var e = t.prototype;
            return e.onUpdateMetadata = function(t) {}
            ,
            e.onEntityAction = function(t) {}
            ,
            e.onEntityDamage = function(t, e, i) {}
            ,
            e.render = function(t, e) {}
            ,
            e.update = function(t) {}
            ,
            e.cleanUp = function() {}
            ,
            e.processSnapshots = function(t, e, i) {
                if (void 0 !== t && (t.positionChanged && (this._previousLerpPosition = t.pos,
                this._posInitialized || (this.position = Object(S.b)(t.pos),
                this._posInitialized = !0)),
                t.directionChanged && (this._previousLerpDirection = Object(J.a)(t.pitchYaw),
                this._dirInitialized || (this.pitchYaw = Object(J.e)(t.pitchYaw.x, t.pitchYaw.y),
                this._dirInitialized = !0))),
                void 0 !== e && this._posInitialized) {
                    if (e.positionChanged) {
                        var n = Object(S.l)(0, 0, 0);
                        n.x = Object(x.c)(this._previousLerpPosition.x, e.pos.x, 1 - i),
                        n.y = Object(x.c)(this._previousLerpPosition.y, e.pos.y, 1 - i),
                        n.z = Object(x.c)(this._previousLerpPosition.z, e.pos.z, 1 - i),
                        this.position = n
                    }
                    if (e.directionChanged) {
                        var s = Object(x.d)(this._previousLerpDirection.y, e.pitchYaw.y, 1 - i)
                          , r = Object(x.c)(this._previousLerpDirection.x, e.pitchYaw.x, 1 - i);
                        this.pitchYaw = Object(J.e)(r, s)
                    }
                }
            }
            ,
            e.hide = function() {
                this._wrapper.visible = !1
            }
            ,
            e.show = function() {
                this._wrapper.visible = !0
            }
            ,
            _()(t, [{
                key: "previousLerpPosition",
                set: function(t) {
                    this._previousLerpPosition = t
                }
            }, {
                key: "previousLerpDirection",
                set: function(t) {
                    this._previousLerpDirection = t
                }
            }, {
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }, {
                key: "entitiesRenderer",
                get: function() {
                    return this._entitiesRenderer
                }
            }]),
            t
        }();
        !function(t) {
            t[t.PLAYER = 0] = "PLAYER",
            t[t.ITEM = 1] = "ITEM",
            t[t.SPRAY = 2] = "SPRAY",
            t[t.BOMB = 3] = "BOMB"
        }(st || (st = {}));
        var vt, St = st, yt = i(101);
        !function(t) {
            t[t.CUSTOM_NAME = 0] = "CUSTOM_NAME",
            t[t.PLAYER_STATUS = 1] = "PLAYER_STATUS",
            t[t.PLAYER_TEAM = 2] = "PLAYER_TEAM",
            t[t.ITEM_TYPE = 3] = "ITEM_TYPE",
            t[t.ITEM_PICKUP_TARGET = 4] = "ITEM_PICKUP_TARGET",
            t[t.ITEM_COUNT = 5] = "ITEM_COUNT",
            t[t.ITEM_OWNER_NAME = 6] = "ITEM_OWNER_NAME",
            t[t.IS_ALIVE = 7] = "IS_ALIVE",
            t[t.SPRAY_TYPE = 8] = "SPRAY_TYPE",
            t[t.SPRAY_ROTATION = 9] = "SPRAY_ROTATION",
            t[t.ITEM_SKIN_TYPE = 10] = "ITEM_SKIN_TYPE",
            t[t.ITEM_SKIN_SEED = 11] = "ITEM_SKIN_SEED",
            t[t.BOMB_DETONATION_TIME = 12] = "BOMB_DETONATION_TIME",
            t[t.__LENGTH = 13] = "__LENGTH"
        }(vt || (vt = {}));
        var mt, Et = [yt.a.STRING, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_SHORT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_CHAR, yt.a.STRING, yt.a.BOOLEAN, yt.a.UNSIGNED_CHAR, yt.a.FLOAT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT], gt = vt, kt = i(38);
        !function(t) {
            t[t.SHOOT = 0] = "SHOOT",
            t[t.RELOAD_START = 1] = "RELOAD_START",
            t[t.RELOAD_FINISH = 2] = "RELOAD_FINISH",
            t[t.ATTACK = 3] = "ATTACK"
        }(mt || (mt = {}));
        var ft = mt
          , It = i(90)
          , Tt = i(51);
        function Ot(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return At(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return At(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function At(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var Ct, Rt = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, i, St.PLAYER, e) || this)._parachuteModel = void 0,
                n._nameSprite = void 0,
                n._damageSprites = void 0,
                n._playerModel = void 0,
                n._activeItem = void 0,
                n._activeItemModel = void 0,
                n._itemSkinType = void 0,
                n._itemSkinSeed = void 0,
                n._mixer = void 0,
                n._walkAction = void 0,
                n._crouchAction = void 0,
                n._freeFallingUpAction = void 0,
                n._freeFallingDownAction = void 0,
                n._glideAction = void 0,
                n._walkForwardAction = void 0,
                n._walkUpAction = void 0,
                n._walkDownAction = void 0,
                n._crouchForwardAction = void 0,
                n._crouchUpAction = void 0,
                n._crouchDownAction = void 0,
                n._walkForwardBlockAction = void 0,
                n._walkUpBlockAction = void 0,
                n._walkDownBlockAction = void 0,
                n._crouchForwardBlockAction = void 0,
                n._crouchUpBlockAction = void 0,
                n._crouchDownBlockAction = void 0,
                n._walkForwardFistAction = void 0,
                n._walkUpFistAction = void 0,
                n._walkDownFistAction = void 0,
                n._crouchForwardFistAction = void 0,
                n._crouchUpFistAction = void 0,
                n._crouchDownFistAction = void 0,
                n._walkingMiddlePause = void 0,
                n._crouchingMiddlePause = void 0,
                n._fistPauseState = void 0,
                n._controlState = void 0,
                n._pitchYaw = void 0,
                n._damageIndicatorStartTime = void 0,
                n._playerModelMaterials = void 0,
                n._name = void 0,
                n._team = void 0,
                n._playerSoundState = void 0,
                n.firstSetPos = void 0,
                n._onGround = void 0,
                n._playSound = void 0,
                n._isAlive = void 0,
                n.update = function(t) {
                    n._playSound && ut(n.object.position, n._controlState, n._onGround, n._playerSoundState, n.entitiesRenderer.sceneRenderer.terrainRenderer.chunkStorageManager, n.entitiesRenderer.sceneRenderer.controlsRenderer, !1)
                }
                ,
                n._parachuteModel = k.a.getMiscModel(It.a.PARACHUTE),
                k.a.removeFog(n._parachuteModel),
                n.object.add(n._parachuteModel),
                n._parachuteModel.visible = !1,
                n._parachuteModel.matrixAutoUpdate = !1,
                n._team = kt.a.GREEN,
                n._itemSkinType = Tt.a.DEFAULT,
                n._itemSkinSeed = 0,
                n._damageIndicatorStartTime = 0,
                n._playerModelMaterials = [],
                n._damageSprites = [],
                n._controlState = Z.a.WALKING,
                n._pitchYaw = Object(J.e)(0, 0),
                n._walkingMiddlePause = !1,
                n._crouchingMiddlePause = !1,
                n._fistPauseState = 0,
                n._playerModel = k.a.playerModel,
                n._playerModel.matrixAutoUpdate = !1,
                n.object.add(n._playerModel),
                n._mixer = new h.c(n._playerModel),
                n._playerModel.traverse((function(t) {
                    t.material && (n._playerModelMaterials.push(t.material),
                    t.material.fog = !1, t.material.depthTest = !1, t.material.transparent = !0 )
                }
                )),
                n._freeFallingUpAction = n._mixer.clipAction(k.a.playerFreeFallingUpAnimation),
                n._freeFallingDownAction = n._mixer.clipAction(k.a.playerFreeFallingDownAnimation),
                n._glideAction = n._mixer.clipAction(k.a.playerGlideAnimation),
                n._walkAction = n._mixer.clipAction(k.a.playerWalkAnimation),
                n._crouchAction = n._mixer.clipAction(k.a.playerCrouchAnimation),
                n._walkForwardAction = n._mixer.clipAction(k.a.playerWalkForwardAnimation),
                n._walkUpAction = n._mixer.clipAction(k.a.playerWalkUpAnimation),
                n._walkDownAction = n._mixer.clipAction(k.a.playerWalkDownAnimation),
                n._crouchForwardAction = n._mixer.clipAction(k.a.playerCrouchForwardAnimation),
                n._crouchUpAction = n._mixer.clipAction(k.a.playerCrouchUpAnimation),
                n._crouchDownAction = n._mixer.clipAction(k.a.playerCrouchDownAnimation),
                n._walkForwardBlockAction = n._mixer.clipAction(k.a.playerWalkForwardBlockAnimation),
                n._walkUpBlockAction = n._mixer.clipAction(k.a.playerWalkUpBlockAnimation),
                n._walkDownBlockAction = n._mixer.clipAction(k.a.playerWalkDownBlockAnimation),
                n._crouchForwardBlockAction = n._mixer.clipAction(k.a.playerCrouchForwardBlockAnimation),
                n._crouchUpBlockAction = n._mixer.clipAction(k.a.playerCrouchUpBlockAnimation),
                n._crouchDownBlockAction = n._mixer.clipAction(k.a.playerCrouchDownBlockAnimation),
                n._walkForwardFistAction = n._mixer.clipAction(k.a.playerWalkForwardFistAnimation),
                n._walkUpFistAction = n._mixer.clipAction(k.a.playerWalkUpFistAnimation),
                n._walkDownFistAction = n._mixer.clipAction(k.a.playerWalkDownFistAnimation),
                n._crouchForwardFistAction = n._mixer.clipAction(k.a.playerCrouchForwardFistAnimation),
                n._crouchUpFistAction = n._mixer.clipAction(k.a.playerCrouchUpFistAnimation),
                n._crouchDownFistAction = n._mixer.clipAction(k.a.playerCrouchDownFistAnimation),
                n._walkForwardAction.setEffectiveWeight(0),
                n._walkUpAction.setEffectiveWeight(0),
                n._walkDownAction.setEffectiveWeight(0),
                n._crouchForwardAction.setEffectiveWeight(0),
                n._crouchUpAction.setEffectiveWeight(0),
                n._crouchDownAction.setEffectiveWeight(0),
                n._walkAction.setEffectiveTimeScale(2),
                n._crouchAction.setEffectiveTimeScale(1),
                n._walkForwardBlockAction.setEffectiveWeight(0),
                n._walkUpBlockAction.setEffectiveWeight(0),
                n._walkDownBlockAction.setEffectiveWeight(0),
                n._crouchForwardBlockAction.setEffectiveWeight(0),
                n._crouchUpBlockAction.setEffectiveWeight(0),
                n._crouchDownBlockAction.setEffectiveWeight(0),
                n._walkForwardFistAction.setEffectiveWeight(0),
                n._walkUpFistAction.setEffectiveWeight(0),
                n._walkDownFistAction.setEffectiveWeight(0),
                n._crouchForwardFistAction.setEffectiveWeight(0),
                n._crouchUpFistAction.setEffectiveWeight(0),
                n._crouchDownFistAction.setEffectiveWeight(0),
                n._walkForwardAction.play(),
                n._walkUpAction.play(),
                n._walkDownAction.play(),
                n._crouchForwardAction.play(),
                n._crouchUpAction.play(),
                n._crouchDownAction.play(),
                n._walkForwardBlockAction.play(),
                n._walkUpBlockAction.play(),
                n._walkDownBlockAction.play(),
                n._crouchForwardBlockAction.play(),
                n._crouchUpBlockAction.play(),
                n._crouchDownBlockAction.play(),
                n._walkForwardFistAction.play(),
                n._walkUpFistAction.play(),
                n._walkDownFistAction.play(),
                n._crouchForwardFistAction.play(),
                n._crouchUpFistAction.play(),
                n._crouchDownFistAction.play(),
                n._walkForwardFistAction.paused = !0,
                n._walkUpFistAction.paused = !0,
                n._walkDownFistAction.paused = !0,
                n._crouchForwardFistAction.paused = !0,
                n._crouchUpFistAction.paused = !0,
                n._crouchDownFistAction.paused = !0,
                n._walkForwardFistAction.setLoop(h.Q, 1),
                n._walkUpFistAction.setLoop(h.Q, 1),
                n._walkDownFistAction.setLoop(h.Q, 1),
                n._crouchForwardFistAction.setLoop(h.Q, 1),
                n._crouchUpFistAction.setLoop(h.Q, 1),
                n._crouchDownFistAction.setLoop(h.Q, 1),
                n._walkForwardFistAction.clampWhenFinished = !0,
                n._walkUpFistAction.clampWhenFinished = !0,
                n._walkDownFistAction.clampWhenFinished = !0,
                n._crouchForwardFistAction.clampWhenFinished = !0,
                n._crouchUpFistAction.clampWhenFinished = !0,
                n._crouchDownFistAction.clampWhenFinished = !0,
                n._walkAction.play(),
                n._crouchAction.stop(),
                n._walkAction.paused = !0,
                n._crouchAction.paused = !0,
                n._playerSoundState = new lt,
                n.firstSetPos = !0,
                n._activeItem = Object(nt.c)(ct.a.EMPTY),
                n._onGround = !1,
                n._playSound = !0,
                n.position = Object(S.l)(0, -9999, 0),
                n._isAlive = !0,
                n
            }
            it()(e, t);
            var i = e.prototype;
            return i.cleanUpActiveItem = function() {
                this._activeItemModel && (this.getRightHand().remove(this._activeItemModel),
                k.a.cleanUpModelExcludeMaterial(this._activeItemModel),
                this._activeItemModel = void 0)
            }
            ,
            i.cleanUp = function() {
                this.cleanUpActiveItem(),
                k.a.cleanUpModel(this._playerModel),
                k.a.cleanUpModel(this._parachuteModel);
                for (var t = 0; t < this._damageSprites.length; t++) {
                    var e = this._damageSprites[t];
                    e.sprite.geometry.dispose(),
                    e.sprite.material.map.dispose(),
                    e.sprite.material.dispose()
                }
                this._nameSprite && (this._nameSprite.geometry.dispose(),
                this._nameSprite.material.map.dispose(),
                this._nameSprite.material.dispose())
            }
            ,
            i.render = function(t, e) {
                this._walkingMiddlePause && this._walkAction.time >= .8 && (this._walkAction.paused = !0,
                this._walkingMiddlePause = !1),
                this._crouchingMiddlePause && this._crouchAction.time >= .8 && (this._crouchAction.paused = !0,
                this._crouchingMiddlePause = !1),
                0 === this._fistPauseState && this._walkForwardFistAction.time >= 1 / 3 && (this._walkForwardFistAction.paused = !0,
                this._walkUpFistAction.paused = !0,
                this._walkDownFistAction.paused = !0,
                this._crouchForwardFistAction.paused = !0,
                this._crouchUpFistAction.paused = !0,
                this._crouchDownFistAction.paused = !0,
                this._fistPauseState = 1),
                this._mixer.update(t);
                var i = Date.now() - this._damageIndicatorStartTime
                  , n = l.a.PLAYER_MODEL_HITMARK_VISIBLE_DURATION
                  , s = l.a.PLAYER_MODEL_HITMARK_FADE_DURATION;
                if (i > n) {
                    var r = 1 - Math.max(0, (n + s - i) / s);
                    this.setModelColor(1, r, r)
                }
                for (var a = 0; a < this._damageSprites.length; a++) {
                    var o = this._damageSprites[a];
                    o.sprite.position.set(o.sprite.position.x + 2 * o.dir.x * t, o.sprite.position.y + 3 * o.dir.y * t, o.sprite.position.z + 2 * o.dir.z * t),
                    Date.now() - o.spawnTime > 800 && (this.object.remove(o.sprite),
                    o.sprite.geometry.dispose(),
                    o.sprite.material.map.dispose(),
                    o.sprite.material.dispose(),
                    this._damageSprites[a] = this._damageSprites[this._damageSprites.length - 1],
                    this._damageSprites.pop(),
                    --a)
                }
            }
            ,
            i.shoot = function() {
                var t = this._activeItem
                  , e = this._controlState === Z.a.CROUCHING ? l.a.PLAYER_CROUCHING_EYE_POSITION : l.a.PLAYER_STANDING_EYE_POSITION
                  , i = Object(S.l)(this.object.position.x, this.object.position.y + e, this.object.position.z)
                  , n = Object(J.a)(this._pitchYaw);
                n.y = -n.y;
                var s = Object(x.g)(n);
                Object(S.a)(i, Object(S.l)(1 * s.x, 1 * s.y, 1 * s.z));
                for (var r = 0; r < t.bulletsPerShot; r++)
                    this.entitiesRenderer.sceneRenderer.bulletsRenderer.addBullet(i, s, 0);
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, t.gunShotSoundType, 0, 1, 200 * l.a.BLOCK_SIZE, 30 * l.a.BLOCK_SIZE, 10)
            }
            ,
            i.reloadStart = function() {
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.GUN_RELOAD_START, 0, 1, 80 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 5)
            }
            ,
            i.reloadFinish = function() {
                this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.GUN_RELOAD_FINISH, 0, 1, 80 * l.a.BLOCK_SIZE, 5 * l.a.BLOCK_SIZE, 5)
            }
            ,
            i.addDamageSprite = function(t, e, i) {
                var n = dt(t.toString(), 64, e, i);
                n.material.depthTest = !1,
                n.position.set(0, 1, 0),
                this.object.add(n);
                var s = Object(S.l)(2 * Math.random() - 1, 2 * Math.random() + 1, 2 * Math.random() - 1);
                Object(S.j)(s),
                this._damageSprites.push({
                    sprite: n,
                    dir: s,
                    spawnTime: Date.now()
                })
            }
            ,
            i.onUpdateMetadata = function(t) {
                for (var e, i = Ot(t); !(e = i()).done; ) {
                    var n = e.value;
                    switch (n.metadataType) {
                    case gt.CUSTOM_NAME:
                        this.name = n.value;
                        break;
                    case gt.PLAYER_TEAM:
                        this.team = n.value;
                        break;
                    case gt.ITEM_SKIN_TYPE:
                        this._itemSkinType = n.value;
                        break;
                    case gt.ITEM_SKIN_SEED:
                        this._itemSkinSeed = n.value;
                        break;
                    case gt.ITEM_TYPE:
                        this.setActiveItem(n.value);
                        break;
                    case gt.PLAYER_STATUS:
                        var s = n.value;
                        this.controlState = 7 & s,
                        this._onGround = (8 & s) > 0;
                        break;
                    case gt.IS_ALIVE:
                        var r = n.value;
                        this.object.visible = r,
                        this._isAlive = r
                    }
                }
            }
            ,
            i.onEntityAction = function(t) {
                switch (t) {
                case ft.SHOOT:
                    this.shoot();
                    break;
                case ft.RELOAD_START:
                    this.reloadStart();
                    break;
                case ft.RELOAD_FINISH:
                    this.reloadFinish();
                    break;
                case ft.ATTACK:
                    this._activeItem.id === ct.a.EMPTY && this._walkForwardFistAction.paused && (1 === this._fistPauseState ? this._fistPauseState = 2 : 2 === this._fistPauseState && (this._walkForwardFistAction.reset(),
                    this._walkUpFistAction.reset(),
                    this._walkDownFistAction.reset(),
                    this._crouchForwardFistAction.reset(),
                    this._crouchUpFistAction.reset(),
                    this._crouchDownFistAction.reset(),
                    this._fistPauseState = 0),
                    this._walkForwardFistAction.paused = !1,
                    this._walkUpFistAction.paused = !1,
                    this._walkDownFistAction.paused = !1,
                    this._crouchForwardFistAction.paused = !1,
                    this._crouchUpFistAction.paused = !1,
                    this._crouchDownFistAction.paused = !1)
                }
            }
            ,
            i.updateLookPose = function() {
                this._walkForwardAction.setEffectiveWeight(0),
                this._walkDownAction.setEffectiveWeight(0),
                this._walkUpAction.setEffectiveWeight(0),
                this._crouchForwardAction.setEffectiveWeight(0),
                this._crouchDownAction.setEffectiveWeight(0),
                this._crouchUpAction.setEffectiveWeight(0),
                this._walkForwardBlockAction.setEffectiveWeight(0),
                this._walkDownBlockAction.setEffectiveWeight(0),
                this._walkUpBlockAction.setEffectiveWeight(0),
                this._crouchForwardBlockAction.setEffectiveWeight(0),
                this._crouchDownBlockAction.setEffectiveWeight(0),
                this._crouchUpBlockAction.setEffectiveWeight(0),
                this._walkForwardFistAction.setEffectiveWeight(0),
                this._walkUpFistAction.setEffectiveWeight(0),
                this._walkDownFistAction.setEffectiveWeight(0),
                this._crouchForwardFistAction.setEffectiveWeight(0),
                this._crouchUpFistAction.setEffectiveWeight(0),
                this._crouchDownFistAction.setEffectiveWeight(0);
                var t = this._walkForwardAction
                  , e = this._walkUpAction
                  , i = this._walkDownAction
                  , n = this._crouchForwardAction
                  , s = this._crouchUpAction
                  , r = this._crouchDownAction;
                if (Object(nt.e)(this._activeItem.id) || Object(nt.g)(this._activeItem.id) ? (t = this._walkForwardBlockAction,
                e = this._walkUpBlockAction,
                i = this._walkDownBlockAction,
                n = this._crouchForwardBlockAction,
                s = this._crouchUpBlockAction,
                r = this._crouchDownBlockAction) : this._activeItem.id === ct.a.EMPTY && (t = this._walkForwardFistAction,
                e = this._walkUpFistAction,
                i = this._walkDownFistAction,
                n = this._crouchForwardFistAction,
                s = this._crouchUpFistAction,
                r = this._crouchDownFistAction),
                void 0 !== this._activeItemModel && (this._controlState === Z.a.FREE_FALLING || this._controlState === Z.a.GLIDING ? this._activeItemModel.visible = !1 : this._activeItemModel.visible = !0),
                this._controlState === Z.a.FREE_FALLING) {
                    var a = Math.abs(Math.min(this._pitchYaw.x / (Math.PI / 2), 0));
                    this._freeFallingUpAction.setEffectiveWeight(1 - a),
                    this._freeFallingDownAction.setEffectiveWeight(a)
                } else if (this._controlState === Z.a.WALKING || this._controlState === Z.a.RUNNING || this._controlState === Z.a.CROUCHING || this._controlState === Z.a.NOCLIP) {
                    var o = Math.abs(this._pitchYaw.x / (Math.PI / 2));
                    this._pitchYaw.x <= 0 ? this._controlState === Z.a.CROUCHING ? (n.setEffectiveWeight(1 - o),
                    r.setEffectiveWeight(o),
                    s.setEffectiveWeight(0)) : (t.setEffectiveWeight(1 - o),
                    i.setEffectiveWeight(o),
                    e.setEffectiveWeight(0)) : this._controlState === Z.a.CROUCHING ? (n.setEffectiveWeight(1 - o),
                    r.setEffectiveWeight(0),
                    s.setEffectiveWeight(o)) : (t.setEffectiveWeight(1 - o),
                    i.setEffectiveWeight(0),
                    e.setEffectiveWeight(o))
                }
            }
            ,
            i.getRightHand = function() {
                return this._playerModel.getObjectByName("Bone_Right_Hand")
            }
            ,
            i.setActiveItem = function() {
                var t = o()(r.a.mark((function t(e) {
                    var i, n;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return (i = Object(nt.c)(e)).setSkin(this._itemSkinType, this._itemSkinSeed),
                                t.next = 4,
                                i.generateThirdPersonModel(!1);
                            case 4:
                                n = t.sent,
                                k.a.removeFog(n),
                                this.cleanUpActiveItem(),
                                this._activeItem = i,
                                this._activeItemModel = n,
                                this.getRightHand().add(n),
                                this.updateLookPose();
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            i.onEntityDamage = function(t, e, i) {
                this._damageIndicatorStartTime = Date.now(),
                this.setModelColor(1, 0, 0),
                t > 0 && this.addDamageSprite(t, "#ffb900", i ? 2 : 1),
                e > 0 && this.addDamageSprite(e, "white", i ? 2 : 1)
            }
            ,
            i.setModelColor = function(t, e, i) {
                for (var n = 0; n < this._playerModelMaterials.length; n++)
                    this._playerModelMaterials[n].color.r = t,
                    this._playerModelMaterials[n].color.g = e,
                    this._playerModelMaterials[n].color.b = i
            }
            ,
            _()(e, [{
                key: "position",
                set: function(t) {
                    this.modelPos = t,
                    this.object.updateMatrix(),
                    this._playerModel.updateMatrix(),
                    this._parachuteModel.updateMatrix()
                }
            }, {
                key: "pitchYaw",
                set: function(t) {
                    this.modelPitch = t.x,
                    this.modelYaw = -t.y,
                    this.object.updateMatrix(),
                    this._playerModel.updateMatrix(),
                    this._parachuteModel.updateMatrix()
                }
            }, {
                key: "modelPos",
                set: function(t) {
                    var e = Object(S.l)(this.object.position.x, this.object.position.y, this.object.position.z);
                    this.firstSetPos && (e = t,
                    this.firstSetPos = !1),
                    this.object.position.set(t.x, t.y, t.z),
                    (t.x - e.x) * (t.x - e.x) + (t.z - e.z) * (t.z - e.z) >= 1e-4 ? (this._crouchAction.paused && (this._crouchAction.paused = !1),
                    this._crouchAction.setLoop(h.R, 1 / 0),
                    this._walkAction.paused && (this._walkAction.paused = !1),
                    this._walkAction.setLoop(h.R, 1 / 0)) : (this._crouchAction.time < .8 ? this._crouchingMiddlePause = !0 : (this._crouchAction.setLoop(h.Q, 1),
                    this._crouchAction.clampWhenFinished = !0),
                    this._walkAction.time < .8 ? this._walkingMiddlePause = !0 : (this._walkAction.setLoop(h.Q, 1),
                    this._walkAction.clampWhenFinished = !0))
                }
            }, {
                key: "controlState",
                set: function(t) {
                    t === Z.a.CROUCHING && this._controlState !== Z.a.CROUCHING ? (this._freeFallingDownAction.stop(),
                    this._freeFallingUpAction.stop(),
                    this._glideAction.stop(),
                    this._walkAction.stop(),
                    this._crouchAction.reset(),
                    this._crouchAction.play(),
                    this._crouchAction.paused = !0,
                    this._parachuteModel.visible = !1) : t !== Z.a.WALKING && t !== Z.a.RUNNING && t !== Z.a.NOCLIP || this._controlState === Z.a.WALKING || this._controlState === Z.a.RUNNING || this._controlState === Z.a.NOCLIP ? t === Z.a.FREE_FALLING && this._controlState !== Z.a.FREE_FALLING ? (this._walkAction.stop(),
                    this._crouchAction.stop(),
                    this._glideAction.stop(),
                    this._freeFallingUpAction.play(),
                    this._freeFallingDownAction.play(),
                    this._parachuteModel.visible = !1) : t === Z.a.GLIDING && this._controlState !== Z.a.GLIDING && (this._walkAction.stop(),
                    this._crouchAction.stop(),
                    this._freeFallingUpAction.stop(),
                    this._freeFallingDownAction.stop(),
                    this._glideAction.play(),
                    this._parachuteModel.visible = !0) : (this._freeFallingDownAction.stop(),
                    this._freeFallingUpAction.stop(),
                    this._glideAction.stop(),
                    this._crouchAction.stop(),
                    this._walkAction.reset(),
                    this._walkAction.play(),
                    this._walkAction.paused = !0,
                    this._parachuteModel.visible = !1),
                    this._controlState = t,
                    this.updateLookPose()
                },
                get: function() {
                    return this._controlState
                }
            }, {
                key: "modelYaw",
                set: function(t) {
                    this._pitchYaw.y = t,
                    this._playerModel.rotation.y = t,
                    this._parachuteModel.rotation.y = -t
                }
            }, {
                key: "modelPitch",
                set: function(t) {
                    this._pitchYaw.x = t,
                    this.updateLookPose()
                }
            }, {
                key: "name",
                get: function() {
                    return this._name
                },
                set: function(t) {
                    this._name = t,
                    this._nameSprite && (this.object.remove(this._nameSprite),
                    this._nameSprite.geometry.dispose(),
                    this._nameSprite.material.map.dispose(),
                    this._nameSprite.material.dispose(),
                    this._nameSprite = void 0),
                    this._nameSprite = dt(this._name, 64, "white", .8),
                    this._nameSprite.position.set(0, 1.5, 0),
                    this.object.add(this._nameSprite)
                }
            }, {
                key: "team",
                get: function() {
                    return this._team
                },
                set: function(t) {
                    this._team = t,
                    this._playerModel.traverse((function(e) {
                        e.material && (e.material.map.dispose(),
                        t === kt.a.GREEN ? e.material.map = k.a.soldierGreenTexture : t === kt.a.RED ? e.material.map = k.a.soldierRedTexture : t === kt.a.BLUE && (e.material.map = k.a.soldierBlueTexture))
                    }
                    ))
                }
            }, {
                key: "playSound",
                set: function(t) {
                    this._playSound = t
                }
            }, {
                key: "isAlive",
                get: function() {
                    return this._isAlive
                }
            }]),
            e
        }(pt), bt = i(128), Pt = i(13), Mt = i(2), xt = i(25), Nt = i(36), Lt = i(102);
        function wt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Ut(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return Ut(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function Ut(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        !function(t) {
            t[t.ALIVE = 0] = "ALIVE",
            t[t.DEAD = 1] = "DEAD"
        }(Ct || (Ct = {}));
        var Dt = function() {
            function t(t, e, i, n, s) {
                var r = this;
                this._settings = t,
                this._canvasRenderer = e,
                this._sceneRenderer = i,
                this._statsRenderer = n,
                this._controlsRenderer = s,
                this._controls = void 0,
                this._keyboardManager = void 0,
                this._lastInputState = void 0,
                this._inputStates = void 0,
                this._prevPlayerState = void 0,
                this._playerState = void 0,
                this._pendingBlockEdits = void 0,
                this._playerMode = void 0,
                this._deathTime = void 0,
                this._deathStartDirection = void 0,
                this._deathTargetDirection = void 0,
                this._didClickSlot = void 0,
                this._inventoryStatusChanged = void 0,
                this._clickedSlotIdx = void 0,
                this._clickedSlotMouseCode = void 0,
                this._inventoryStatus = void 0,
                this._didTryToCraft = void 0,
                this._recipeType = void 0,
                this._lastConfirmedPlayerState = void 0,
                this._playerSoundState = void 0,
                this._initialInventoryUpdate = void 0,
                this._thirdPersonRenderer = void 0,
                this._prevPos = void 0,
                this._raycastItemCounter = void 0,
                this._lastRaycastItemId = void 0,
                this._lastRacyastItemCount = void 0,
                this.onInputVerificationReceived = function(t, e, i, n, s, a, o, h, c, _, l, u, d, p, v, S, y, m) {
                    for (var E = -1, g = 0; g < r._inputStates.length; g++)
                        if (r._inputStates[g].seqId >= c.seqId) {
                            E = g;
                            break
                        }
                    -1 === E ? r._inputStates = [] : r._inputStates.splice(0, E - 1),
                    r._lastConfirmedPlayerState.physicsStep.onGround = c.onGround,
                    r._lastConfirmedPlayerState.physicsStep.canJump = c.canJump,
                    r._lastConfirmedPlayerState.physicsStep.controlState = c.controlState,
                    r._lastConfirmedPlayerState.physicsStep.seqId = c.seqId,
                    t && (r._lastConfirmedPlayerState.physicsStep.pos = c.pos),
                    e && (r._lastConfirmedPlayerState.physicsStep.vel = c.vel),
                    i && (r._lastConfirmedPlayerState.physicsStep.eyeHeight = c.eyeHeight),
                    n && (r._lastConfirmedPlayerState.physicsStep.aimSpread = c.aimSpread),
                    s && r._lastConfirmedPlayerState.inventory.select(_, !1),
                    o && (r._lastConfirmedPlayerState.buildMode = y),
                    h && (r._lastConfirmedPlayerState.inventoryStatus = m,
                    m === at.a.WOODEN_CHEST ? r._lastConfirmedPlayerState.inventory.resize(4) : m === at.a.IRON_CHEST ? r._lastConfirmedPlayerState.inventory.resize(8) : m === at.a.GOLD_CHEST ? r._lastConfirmedPlayerState.inventory.resize(12) : r._lastConfirmedPlayerState.inventory.resize(0));
                    for (var k, f = !0, I = wt(l.entries()); !(k = I()).done; ) {
                        var T = k.value
                          , O = T[0]
                          , A = T[1];
                        r._initialInventoryUpdate && (r._initialInventoryUpdate = !1,
                        f = !1),
                        -2 === O ? r._lastConfirmedPlayerState.inventory.setCursorItem(A) : r._lastConfirmedPlayerState.inventory.setItemAtIndex(O, A, !1)
                    }
                    for (var C, R = wt(u.entries()); !(C = R()).done; ) {
                        var b = C.value
                          , P = b[0]
                          , M = b[1];
                        r._lastConfirmedPlayerState.cooldownManager.cooldowns.set(P, M)
                    }
                    a && (r._lastConfirmedPlayerState.maxHealth = d,
                    r._lastConfirmedPlayerState.health = p,
                    r._lastConfirmedPlayerState.maxShield = v,
                    r._lastConfirmedPlayerState.shield = S);
                    for (var x = r._lastConfirmedPlayerState.clone(), N = 1; N < r._inputStates.length; N++) {
                        var L = r._inputStates[N - 1]
                          , w = r._inputStates[N];
                        r.updatePlayerState(x, L, w, !1)
                    }
                    r._prevPlayerState = r._playerState.clone(),
                    r._playerState = x,
                    r.updateGUIView(r._prevPlayerState, r._playerState, f)
                }
                ,
                this.clearPendingBlockEdit = function(t, e, i) {
                    for (var n = 0; n < r._pendingBlockEdits.length; n++) {
                        var s = r._pendingBlockEdits[n];
                        if (s.x === t && s.y === e && s.z === i) {
                            for (var a = 0; a < s.timeoutIds.length; a++)
                                clearTimeout(s.timeoutIds[a]);
                            r._pendingBlockEdits.splice(n, 1);
                            break
                        }
                    }
                }
                ,
                this.onSetBlock = function(t, e, i, n) {
                    r.clearPendingBlockEdit(t, e, i),
                    r._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, n, !0)
                }
                ,
                this.onFloatingBlocksBreak = function(t, e, i, n) {
                    for (var s = {}, a = 0; a < i.length; a++) {
                        var o = b(i[a].x, i[a].y, i[a].z);
                        s[o] = r._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(i[a].x, i[a].y, i[a].z),
                        r.clearPendingBlockEdit(i[a].x, i[a].y, i[a].z),
                        r._sceneRenderer.terrainRenderer.setBlockAt(i[a].x, i[a].y, i[a].z, C.a.AIR, !1),
                        r._sceneRenderer.terrainRenderer.cracksRenderer.removeBlockBreakProgressByKey(o)
                    }
                    t && r._sceneRenderer.terrainRenderer.chunkGenWorkerPool.queueBlocksGeneration(e, s);
                    for (var h = 0; h < n.length; h++)
                        r._sceneRenderer.terrainRenderer.cracksRenderer.setBlockBreakProgress(n[h].pos.x, n[h].pos.y, n[h].pos.z, n[h].progress, !1)
                }
                ,
                this.onRespawn = function(t, e, i) {
                    t === Object(y.a)() && r._playerMode === Ct.DEAD && (r._playerMode = Ct.ALIVE,
                    r._controlsRenderer.showHands(),
                    r._controlsRenderer.showCrosshair(),
                    r.setupPhysics(e, i))
                }
                ,
                this.onCanvasClick = function(t) {
                    Object(y.c)() === Pt.a.CONNECTED && r._controls.lock()
                }
                ,
                this.onGameFocus = function(t) {
                    d.a.emit(p.a.GAME_FOCUS)
                }
                ,
                this.onGameUnfocus = function(t) {
                    d.a.emit(p.a.GAME_UNFOCUS)
                }
                ,
                this.onInventorySlotClick = function(t, e) {
                    r._didClickSlot = !0,
                    r._clickedSlotIdx = t,
                    r._clickedSlotMouseCode = e,
                    r._keyboardManager.isGameKeyDownBypassPause(r._settings.keys[Mt.b.INVENTORY_HELPER_KEY]) && (r._clickedSlotMouseCode = V.a.SHIFT_CLICK)
                }
                ,
                this.onRequestInventoryStatusUpdate = function(t) {
                    r._inventoryStatusChanged = !0,
                    r._inventoryStatus = t
                }
                ,
                this.onInventoryCraft = function(t) {
                    r._didTryToCraft = !0,
                    r._recipeType = t,
                    r._clickedSlotMouseCode = V.a.LEFT,
                    r._keyboardManager.isGameKeyDownBypassPause(r._settings.keys[Mt.b.INVENTORY_HELPER_KEY]) && (r._clickedSlotMouseCode = V.a.SHIFT_CLICK)
                }
                ,
                this.onRequestRespawn = function() {
                    r._controls.lock()
                }
                ,
                this.onRequestFocus = function() {
                    Object(y.c)() !== Pt.a.CONNECTED || r._controls.isLocked || r._controls.lock()
                }
                ,
                this.onRequestUnfocus = function() {
                    r._controls.unlock()
                }
                ,
                this.onGameLeave = function() {
                    r._controls.unlock()
                }
                ,
                this.onClientDamageReceived = function(t, e) {
                    e && r.kill(t)
                }
                ,
                this.voxelRaycast = function(t, e, i) {
                    var n = []
                      , s = [];
                    return Q()(r.isVoxelSolid, [t.x, t.y, t.z], [e.x, e.y, e.z], i, n, s) === C.a.AIR ? {
                        hit: !1,
                        position: Object(S.l)(0, 0, 0),
                        normal: Object(S.l)(0, 0, 0)
                    } : {
                        hit: !0,
                        position: Object(S.l)(n[0], n[1], n[2]),
                        normal: Object(S.l)(s[0], s[1], s[2])
                    }
                }
                ,
                this.getVoxel = function(t, e, i) {
                    return r._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t, e, i)
                }
                ,
                this.isVoxelSolid = function(t, e, i) {
                    return z.a[r.getVoxel(t, e, i)].solid
                }
                ,
                this.render = function(t, e) {
                    if (r._playerMode === Ct.ALIVE) {
                        if (Object(y.c)() === Pt.a.ENDED)
                            return;
                        r._playerState.inventory.getSelected().item.onItemHoldingRender(t, r),
                        r._controls.render(t, e);
                        var i = e / l.a.PHYSICS_TIME_STEP;
                        if (r._playerState.physicsStep.controlState === Z.a.FREE_FALLING || r._playerState.physicsStep.controlState === Z.a.GLIDING) {
                            var n, s = r.getPitchYaw(), a = Object(x.c)(r._prevPos.x, r._playerState.physicsStep.pos.x, i), o = Object(x.c)(r._prevPos.y, r._playerState.physicsStep.pos.y, i), c = Object(x.c)(r._prevPos.z, r._playerState.physicsStep.pos.z, i);
                            r._thirdPersonRenderer.position = Object(S.l)(a, o, c),
                            r._thirdPersonRenderer.pitchYaw = s,
                            null == (n = r._thirdPersonRenderer) || n.render(t, e)
                        } else {
                            var _ = Object(x.c)(r._prevPos.x, r._playerState.physicsStep.pos.x, i)
                              , u = Object(x.c)(r._prevPos.y + r._prevPlayerState.physicsStep.eyeHeight, r._playerState.physicsStep.pos.y + r._playerState.physicsStep.eyeHeight, i)
                              , d = Object(x.c)(r._prevPos.z, r._playerState.physicsStep.pos.z, i);
                            r._controls.getObject().position.set(_, u, d)
                        }
                    } else if (r._playerMode === Ct.DEAD && Date.now() - r._deathTime <= 1e3) {
                        var p = Math.max(0, Math.min(1, (Date.now() - r._deathTime) / 1e3));
                        h.qb.slerp(r._deathStartDirection, r._deathTargetDirection, r._canvasRenderer.camera.quaternion, p)
                    }
                }
                ,
                this._controls = new rt(this._settings,this._canvasRenderer.camera,this._canvasRenderer.canvas,this),
                this._prevPos = Object(S.l)(0, 0, 0),
                this._pendingBlockEdits = [],
                this._playerMode = Ct.ALIVE,
                this._didClickSlot = !1,
                this._inventoryStatusChanged = !1,
                this._clickedSlotIdx = 0,
                this._clickedSlotMouseCode = V.a.WHEEL,
                this._inventoryStatus = at.a.CLOSED,
                this._didTryToCraft = !1,
                this._recipeType = bt.a.WOOD,
                this._deathTime = 0,
                this._deathStartDirection = new h.qb,
                this._deathTargetDirection = new h.qb,
                this._raycastItemCounter = 0,
                this._lastRaycastItemId = -1,
                this._lastRacyastItemCount = 0
            }
            var e = t.prototype;
            return e.cleanUp = function() {
                this.unbindEvents(),
                this._controls.dispose(),
                this._keyboardManager.cleanUp()
            }
            ,
            e.initialize = function(t, e, i) {
                this._keyboardManager = new $,
                this.setupPhysics(e, i),
                this._controls.lock(),
                this.bindEvents()
            }
            ,
            e.kill = function(t) {
                window.gtag && gtag("event", "kill", {
                    event_category: "game_view"
                }),
                this._playerMode = Ct.DEAD,
                this._controls.reset(),
                this._controlsRenderer.hideHands(),
                this._controlsRenderer.hideCrosshair(),
                d.a.emit(p.a.CLIENT_PLAYER_DEATH),
                d.a.emit(p.a.INVENTORY_STATUS_UPDATE, at.a.CLOSED),
                this._playerState.inventory.getSelected().item.onInactive(this._playerState, this, !0);
                var e = Object(S.b)(t);
                Object(S.k)(e, this._canvasRenderer.camera.position),
                Object(S.j)(e),
                this._deathTime = Date.now(),
                this._deathStartDirection.copy(this._canvasRenderer.camera.quaternion),
                this._deathTargetDirection.setFromUnitVectors(new h.Ob(0,0,-1), new h.Ob(e.x,e.y,e.z)),
                this._controls.unlock()
            }
            ,
            e.bindEvents = function() {
                d.a.on(p.a.INPUT_VERIFICATION_RECEIVED, this.onInputVerificationReceived),
                d.a.on(p.a.SET_BLOCK, this.onSetBlock),
                d.a.on(p.a.FLOATING_BLOCKS_BREAK, this.onFloatingBlocksBreak),
                d.a.on(p.a.RESPAWN, this.onRespawn),
                d.a.on(p.a.INVENTORY_SLOT_CLICK, this.onInventorySlotClick),
                d.a.on(p.a.REQUEST_INVENTORY_STATUS_UPDATE, this.onRequestInventoryStatusUpdate),
                d.a.on(p.a.INVENTORY_CRAFT, this.onInventoryCraft),
                d.a.on(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived),
                d.a.on(p.a.GAME_LEAVE, this.onGameLeave),
                d.a.on(p.a.REQUEST_FOCUS, this.onRequestFocus),
                d.a.on(p.a.REQUEST_UNFOCUS, this.onRequestUnfocus),
                d.a.on(p.a.REQUEST_RESPAWN, this.onRequestRespawn),
                this.canvasRenderer.canvas.addEventListener("click", this.onCanvasClick, !1),
                this._controls.addEventListener("lock", this.onGameFocus),
                this._controls.addEventListener("unlock", this.onGameUnfocus)
            }
            ,
            e.unbindEvents = function() {
                d.a.off(p.a.INPUT_VERIFICATION_RECEIVED, this.onInputVerificationReceived),
                d.a.off(p.a.SET_BLOCK, this.onSetBlock),
                d.a.off(p.a.FLOATING_BLOCKS_BREAK, this.onFloatingBlocksBreak),
                d.a.off(p.a.RESPAWN, this.onRespawn),
                d.a.off(p.a.INVENTORY_SLOT_CLICK, this.onInventorySlotClick),
                d.a.off(p.a.REQUEST_INVENTORY_STATUS_UPDATE, this.onRequestInventoryStatusUpdate),
                d.a.off(p.a.INVENTORY_CRAFT, this.onInventoryCraft),
                d.a.off(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived),
                d.a.off(p.a.GAME_LEAVE, this.onGameLeave),
                d.a.off(p.a.REQUEST_FOCUS, this.onRequestFocus),
                d.a.off(p.a.REQUEST_UNFOCUS, this.onRequestUnfocus),
                d.a.off(p.a.REQUEST_RESPAWN, this.onRequestRespawn),
                this.canvasRenderer.canvas.removeEventListener("click", this.onCanvasClick, !1),
                this._controls.removeEventListener("lock", this.onGameFocus),
                this._controls.removeEventListener("unlock", this.onGameUnfocus)
            }
            ,
            e.setupPhysics = function(t, e) {
                this._inputStates = [],
                this._lastInputState = {
                    selectedIndexChanged: !1,
                    didClickSlot: !1,
                    inventoryStatusChanged: !1,
                    didTryToCraft: !1,
                    moveLeft: !1,
                    moveRight: !1,
                    moveForward: !1,
                    moveBackward: !1,
                    jump: !1,
                    primaryAction: !1,
                    secondaryAction: !1,
                    crouch: !1,
                    run: !1,
                    reload: !1,
                    drop: !1,
                    spray: !1,
                    selectedIdx: 0,
                    clickedSlotIdx: 0,
                    clickedSlotMouseCode: V.a.WHEEL,
                    recipeType: bt.a.WOOD,
                    inventoryStatus: at.a.CLOSED,
                    pitchYaw: Object(J.e)(0, 0),
                    seqId: -1,
                    tick: 0
                },
                this._inputStates.push(this._lastInputState);
                var i = this._lastConfirmedPlayerState;
                this._lastConfirmedPlayerState = new ht.b(this),
                this._lastConfirmedPlayerState.physicsStep.pos = t,
                this._prevPos = t,
                this._prevPlayerState = new ht.b(this),
                this._prevPlayerState.physicsStep.pos = t,
                this._playerState = new ht.b(this),
                this._playerState.physicsStep.pos = t,
                void 0 !== i && (this._lastConfirmedPlayerState.maxHealth = i.maxHealth,
                this._lastConfirmedPlayerState.health = i.health,
                this._lastConfirmedPlayerState.maxShield = i.maxShield,
                this._lastConfirmedPlayerState.shield = i.shield,
                this._lastConfirmedPlayerState.buildMode = i.buildMode,
                this._prevPlayerState.maxHealth = i.maxHealth,
                this._prevPlayerState.health = i.health,
                this._prevPlayerState.maxShield = i.maxShield,
                this._prevPlayerState.shield = i.shield,
                this._prevPlayerState.inventory = i.inventory,
                this._prevPlayerState.buildMode = i.buildMode,
                this._playerState.maxHealth = i.maxHealth,
                this._playerState.health = i.health,
                this._playerState.maxShield = i.maxShield,
                this._playerState.shield = i.shield,
                this._playerState.buildMode = i.buildMode,
                this.updateGUIView(this._prevPlayerState, this._playerState, !1)),
                this._playerSoundState = new lt,
                this._initialInventoryUpdate = !0,
                this._controls.getBase().set(e.x, e.y, 0),
                this._canvasRenderer.camera.rotation.set(e.x, e.y, 0)
            }
            ,
            e.updatePhysics = function(t) {
                if (this._playerMode === Ct.ALIVE) {
                    var e = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.MOVE_LEFT])
                      , i = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.MOVE_RIGHT])
                      , n = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.MOVE_FORWARD])
                      , s = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.MOVE_BACKWARD])
                      , r = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.JUMP])
                      , a = this._keyboardManager.isGameKeyDownInventoryInactive(this._settings.keys[Mt.b.PRIMARY_ACTION])
                      , o = this._keyboardManager.isGameKeyDownInventoryInactive(this._settings.keys[Mt.b.SECONDARY_ACTION]) || this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SECONDARY_ACTION_2])
                      , h = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.CROUCH])
                      , c = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SPRINT])
                      , _ = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.RELOAD])
                      , l = this._keyboardManager.isGameKeyPressed(this._settings.keys[Mt.b.DROP_CURRENT_ITEM])
                      , u = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SELECT_SLOT_1])
                      , v = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SELECT_SLOT_2])
                      , S = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SELECT_SLOT_3])
                      , y = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SELECT_SLOT_4])
                      , m = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SELECT_SLOT_5])
                      , E = this._keyboardManager.isGameKeyDown(this._settings.keys[Mt.b.SPRAY]);
                    this._keyboardManager.isGameKeyPressed(this._settings.keys[Mt.b.INTERACT]) && (this._lastRaycastItemId >= 0 ? d.a.emit(p.a.ITEM_PICKUP_REQUEST, this._lastRaycastItemId) : -2 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.WORK_STATION) : -3 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.LOADOUT_STATION) : -4 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.WOODEN_CHEST) : -5 === this._lastRaycastItemId ? this.onRequestInventoryStatusUpdate(at.a.IRON_CHEST) : -6 === this._lastRaycastItemId && this.onRequestInventoryStatusUpdate(at.a.GOLD_CHEST));
                    var g = this.getPitchYaw()
                      , k = g.x
                      , f = g.y;
                    this._prevPlayerState = this._playerState.clone(),
                    this._prevPos = this._prevPlayerState.physicsStep.pos;
                    var I = this.getInventory().getSelectedIndex()
                      , T = this._keyboardManager.hasGameScrolledUp()
                      , O = this._keyboardManager.hasGameScrolledDown()
                      , A = this._settings.invertMouseWheel ? T : O;
                    (this._settings.invertMouseWheel ? O : T) ? this.getInventory().selectPrev(!0) : A ? this.getInventory().selectNext(!0) : u ? this.getInventory().select(0, !0) : v ? this.getInventory().select(1, !0) : S ? this.getInventory().select(2, !0) : y ? this.getInventory().select(3, !0) : m && this.getInventory().select(4, !0);
                    var C = I !== this.getInventory().getSelectedIndex()
                      , R = this._playerState.physicsStep.seqId
                      , b = {
                        selectedIndexChanged: C,
                        didClickSlot: this._didClickSlot,
                        inventoryStatusChanged: this._inventoryStatusChanged,
                        didTryToCraft: this._didTryToCraft,
                        moveLeft: e,
                        moveRight: i,
                        moveForward: n,
                        moveBackward: s,
                        jump: r,
                        primaryAction: a,
                        secondaryAction: o,
                        crouch: h,
                        run: c,
                        reload: _,
                        drop: l,
                        spray: E,
                        pitchYaw: Object(J.e)(k, f),
                        seqId: R,
                        selectedIdx: this.getInventory().getSelectedIndex(),
                        clickedSlotIdx: this._clickedSlotIdx,
                        clickedSlotMouseCode: this._clickedSlotMouseCode,
                        recipeType: this._recipeType,
                        inventoryStatus: this._inventoryStatus,
                        tick: this._sceneRenderer.entitiesRenderer.getInterpolatedWorldTick()
                    };
                    this._didClickSlot = !1,
                    this._inventoryStatusChanged = !1,
                    this._didTryToCraft = !1;
                    var P = this._lastInputState;
                    this._lastInputState = b,
                    this._inputStates.push(b),
                    d.a.emit(p.a.INPUT_RECEIVED, b),
                    this.updatePlayerState(this._playerState, P, b, !0),
                    this.updateGUIView(this._prevPlayerState, this._playerState, !0),
                    this.updateDebugInfo()
                }
            }
            ,
            e.updatePlayerState = function(t, e, i, n) {
                var s = l.a.PHYSICS_TIME_STEP
                  , r = t.physicsStep.controlState;
                i.selectedIndexChanged && t.inventory.select(i.selectedIdx, n),
                t.physicsStep = Object(X.g)(i, this.getVoxel, this.isVoxelSolid, this.voxelRaycast, s, t),
                i.inventoryStatusChanged && (t.inventoryStatus = i.inventoryStatus,
                i.inventoryStatus === at.a.WOODEN_CHEST ? t.inventory.resize(4) : i.inventoryStatus === at.a.IRON_CHEST ? t.inventory.resize(8) : i.inventoryStatus === at.a.GOLD_CHEST ? t.inventory.resize(12) : t.inventory.resize(0)),
                i.didClickSlot ? t.inventory.onSlotClick(i.clickedSlotIdx, i.clickedSlotMouseCode, n) : i.didTryToCraft && t.inventory.onRecipeCraft(i.recipeType, i.clickedSlotMouseCode),
                r === Z.a.RUNNING && t.physicsStep.controlState !== Z.a.RUNNING && t.cooldownManager.setCooldown(ot.a.SPRINT_STOP_ITEM_USE_GRACE),
                t.inventory.getSelected().item.canInput(t) && (t.inventory.getSelected().item.onInput(t, this, e, i, n),
                t.inventory.useSelected(n)),
                t.physicsStep.aimSpread = Object(X.f)(this, i, t),
                t.inventory.getSelected().item.onItemHoldingUpdate(s, t, this, n),
                t.inventory.useSelected(n),
                i.drop && t.cooldownManager.requestCooldown(ot.a.DROP_ITEM) && t.inventory.dropActiveItem(n),
                n && ut(t.physicsStep.pos, t.physicsStep.controlState, t.physicsStep.onGround, this._playerSoundState, this._sceneRenderer.terrainRenderer.chunkStorageManager, this._controlsRenderer, !0)
            }
            ,
            e.updateGUIView = function(t, e, i) {
                var n = new Map
                  , s = l.a.PLAYER_INVENTORY_HOT_SLOTS_COUNT + l.a.PLAYER_INVENTORY_STORAGE_SLOTS_COUNT + l.a.PLAYER_INVENTORY_AMMO_SLOTS_COUNT;
                if (t.inventory.getItems().length !== e.inventory.getItems().length)
                    if (t.inventory.getItems().length < e.inventory.getItems().length)
                        for (var r = t.inventory.getItems().length; r < e.inventory.getItems().length; r++) {
                            var a = e.inventory.getItems()[r];
                            n.set(r, a)
                        }
                    else
                        for (var o = e.inventory.getItems().length; o < t.inventory.getItems().length; o++)
                            n.set(o, new tt.a(Object(nt.c)(ct.a.EMPTY),1));
                else
                    s = e.inventory.getItems().length;
                for (var h = 0; h < s; h++) {
                    var c = t.inventory.getItems()[h]
                      , _ = e.inventory.getItems()[h];
                    c.item.id === _.item.id && c.count === _.count && Object(nt.b)(c.item) === Object(nt.b)(_.item) || (n.set(h, _),
                    i && _.item.id !== ct.a.EMPTY && (c.item.id !== _.item.id || c.count < _.count) && this.controlsRenderer.playSound(_t.a.ITEM_PICKUP))
                }
                if (t.inventory.getCursorItem().item.id === e.inventory.getCursorItem().item.id && t.inventory.getCursorItem().count === e.inventory.getCursorItem().count && Object(nt.b)(t.inventory.getCursorItem().item) === Object(nt.b)(e.inventory.getCursorItem().item) || (d.a.emit(p.a.INVENTORY_SET_CURSOR_ITEM, e.inventory.getCursorItem()),
                i && this.controlsRenderer.playSound(_t.a.ITEM_PICKUP)),
                t.inventory.getSelectedIndex() !== e.inventory.getSelectedIndex() && d.a.emit(p.a.INVENTORY_SELECT_ITEM, e.inventory.getSelectedIndex()),
                t.inventory.getSelectedIndex() === e.inventory.getSelectedIndex() && t.inventory.getSelected().item.id === e.inventory.getSelected().item.id && t.inventory.getSelected().item.skinType === e.inventory.getSelected().item.skinType && t.inventory.getSelected().item.skinSeed === e.inventory.getSelected().item.skinSeed || d.a.emit(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, e.inventory, e.inventory.getSelected()),
                n.size > 0 && (d.a.emit(p.a.INVENTORY_SET_ITEMS, n),
                Object(nt.f)(e.inventory.getSelected().item.id))) {
                    var u = e.inventory.getSelected().item;
                    d.a.emit(p.a.AMMO_UPDATE, u.currClipAmmo, e.inventory.countItem(u.ammoItemType))
                }
                t.inventoryStatus !== e.inventoryStatus && d.a.emit(p.a.INVENTORY_STATUS_UPDATE, e.inventoryStatus),
                t.maxHealth === e.maxHealth && t.health === e.health && t.maxShield === e.maxShield && t.shield === e.shield || d.a.emit(p.a.UPDATE_CLIENT_HEALTH_AND_SHIELD, e.maxHealth, e.health, e.maxShield, e.shield),
                t.physicsStep.controlState !== Z.a.FREE_FALLING && t.physicsStep.controlState !== Z.a.GLIDING || e.physicsStep.controlState === Z.a.FREE_FALLING || e.physicsStep.controlState === Z.a.GLIDING ? t.physicsStep.controlState === Z.a.FREE_FALLING || t.physicsStep.controlState === Z.a.GLIDING || e.physicsStep.controlState !== Z.a.FREE_FALLING && e.physicsStep.controlState !== Z.a.GLIDING || (this._controlsRenderer.hideHands(),
                this._controlsRenderer.hideCrosshair(),
                this._thirdPersonRenderer = new Rt(this._sceneRenderer.entitiesRenderer,Object(y.a)()),
                this._thirdPersonRenderer.team = this._controlsRenderer.team,
                this._sceneRenderer.scene.add(this._thirdPersonRenderer.object),
                this._controls.startThirdPersonCamera(this._thirdPersonRenderer.object, 10)) : (this._controlsRenderer.showHands(),
                this._controlsRenderer.showCrosshair(),
                this._controls.startFirstPersonCamera(this.getPitchYaw()),
                this._sceneRenderer.scene.remove(this._thirdPersonRenderer.object)),
                void 0 !== this._thirdPersonRenderer && (this._thirdPersonRenderer.controlState = e.physicsStep.controlState)
            }
            ,
            e.getPlayerSelectedBlockSidePosition = function() {
                var t = this.camVoxelRaycast();
                if (t.hit)
                    return this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x + .01 * t.normal.x, t.position.y + .01 * t.normal.y, t.position.z + .01 * t.normal.z)
            }
            ,
            e.getPlayerSelectedBlockPosition = function() {
                var t = this.camVoxelRaycast();
                if (t.hit)
                    return this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x - .01 * t.normal.x, t.position.y - .01 * t.normal.y, t.position.z - .01 * t.normal.z)
            }
            ,
            e.camVoxelRaycast = function() {
                if (!this._lastInputState)
                    return {
                        hit: !1,
                        position: Object(S.l)(0, 0, 0),
                        normal: Object(S.l)(0, 0, 0)
                    };
                var t = Object(S.b)(this._playerState.physicsStep.pos);
                Object(S.a)(t, Object(S.l)(0, this._playerState.physicsStep.eyeHeight, 0)),
                Object(S.f)(t, l.a.BLOCK_SIZE);
                var e = this._lastInputState.pitchYaw.x
                  , i = this._lastInputState.pitchYaw.y
                  , n = Object(x.g)(Object(J.e)(e, i));
                return this.voxelRaycast(t, n, l.a.BLOCK_EDIT_RADIUS)
            }
            ,
            e.predictBlockEdit = function(t, e, i, n) {
                var s = this
                  , r = this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t, e, i);
                this._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, n, !0);
                for (var a = setTimeout((function() {
                    for (var n = 0; n < s._pendingBlockEdits.length; n++) {
                        var r = s._pendingBlockEdits[n];
                        if (r.x === t && r.y === e && r.z === i) {
                            s._sceneRenderer.terrainRenderer.setBlockAt(t, e, i, r.blockIds[r.blockIds.length - 1], !1),
                            0 === r.blockIds.length ? s._pendingBlockEdits.splice(n, 1) : (r.blockIds.pop(),
                            r.timeoutIds.pop());
                            break
                        }
                    }
                }
                ), 1e3 * l.a.BLOCK_EDIT_VERIFICATION_DELAY_IN_SECS), o = !1, h = 0; h < this._pendingBlockEdits.length; h++) {
                    var c = this._pendingBlockEdits[h];
                    if (c.x === t && c.y === e && c.z === i) {
                        this._pendingBlockEdits[h].blockIds.push(r),
                        this._pendingBlockEdits[h].timeoutIds.push(a),
                        o = !0;
                        break
                    }
                }
                o || this._pendingBlockEdits.push({
                    x: t,
                    y: e,
                    z: i,
                    blockIds: [r],
                    timeoutIds: [a]
                })
            }
            ,
            e.updateDebugInfo = function() {
                if (this._statsRenderer.visible) {
                    this._statsRenderer.playerPos = Object(S.l)(this._playerState.physicsStep.pos.x, this._playerState.physicsStep.pos.y, this._playerState.physicsStep.pos.z),
                    this._statsRenderer.playerBlockPos = Object(S.l)(Math.floor(this._playerState.physicsStep.pos.x / l.a.BLOCK_SIZE), Math.floor(this._playerState.physicsStep.pos.y / l.a.BLOCK_SIZE), Math.floor(this._playerState.physicsStep.pos.z / l.a.BLOCK_SIZE)),
                    this._statsRenderer.playerChunkPos = this._sceneRenderer.terrainRenderer.chunkStorageManager.getChunkPos(this._playerState.physicsStep.pos.x / l.a.BLOCK_SIZE, this._playerState.physicsStep.pos.y / l.a.BLOCK_SIZE, this._playerState.physicsStep.pos.z / l.a.BLOCK_SIZE),
                    this._statsRenderer.playerVelocity = Object(S.l)(this._playerState.physicsStep.vel.x, this._playerState.physicsStep.vel.y, this._playerState.physicsStep.vel.z);
                    var t = this.getPitchYaw();
                    this._statsRenderer.playerPitch = t.x,
                    this._statsRenderer.playerYaw = t.y
                }
            }
            ,
            e.update = function(t) {
                this.updatePhysics(t),
                2 == ++this._raycastItemCounter && (this._raycastItemCounter = 0,
                this.raycastItemPickups())
            }
            ,
            e.raycastItemPickups = function() {
                for (var t, e = Object(S.l)(this._canvasRenderer.camera.position.x, this._canvasRenderer.camera.position.y, this._canvasRenderer.camera.position.z), i = this.getCameraDir(), n = 999999, s = void 0, r = wt(this.sceneRenderer.entitiesRenderer.getEntities()); !(t = r()).done; ) {
                    var a = t.value;
                    if (a.type === St.ITEM && -1 === a.itemPickupTarget) {
                        var o = Object(S.l)(a.object.position.x, a.object.position.y, a.object.position.z);
                        if (!(Object(S.e)(e, o) >= 16)) {
                            var h = Object(S.l)(o.x - e.x, o.y - e.y, o.z - e.z)
                              , c = Object(S.g)(h, i)
                              , _ = Object(S.l)(e.x + i.x * c, e.y + i.y * c, e.z + i.z * c)
                              , u = Object(S.e)(o, _);
                            if (!(u > .09)) {
                                var v = c - Math.sqrt(.09 - u);
                                v <= n && (n = v,
                                s = a)
                            }
                        }
                    }
                }
                var m = void 0 !== s && void 0 !== s.item
                  , E = Object(S.b)(e);
                Object(S.f)(E, l.a.BLOCK_SIZE);
                var g = this.camVoxelRaycast()
                  , k = C.a.AIR;
                if (!Object(y.m)() && g.hit) {
                    var f = this._sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(g.position.x - .01 * g.normal.x, g.position.y - .01 * g.normal.y, g.position.z - .01 * g.normal.z);
                    k = this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(f.x, f.y, f.z)
                }
                if (m && g.hit) {
                    var I = Object(S.b)(g.position);
                    Object(S.i)(I, l.a.BLOCK_SIZE),
                    Object(S.e)(I, e) < n * n && (m = !1)
                }
                if (this._playerMode === Ct.DEAD)
                    -1 !== this._lastRaycastItemId && (this._lastRaycastItemId = -1,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.EMPTY, xt.a.COMMON, "", "", 1));
                else if (m) {
                    if (s.id !== this._lastRaycastItemId || s.count !== this._lastRacyastItemCount) {
                        var T = this._playerState.inventory.hasSpaceForItemEvenPartially(s.item.id, s.count);
                        this._lastRaycastItemId = s.id,
                        this._lastRacyastItemCount = s.count,
                        d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, s.item.getModelID(), s.item.itemTier, Object(Lt.a)(s.item.skinType).tier, s.item.displayName, "Press " + Object(y.d)(Mt.b.INTERACT) + " to " + (T ? "pick up" : "swap"), s.count)
                    }
                } else
                    k === C.a.WORK_STATION ? -2 !== this._lastRaycastItemId && (this._lastRaycastItemId = -2,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + C.a.WORK_STATION, xt.a.COMMON, Nt.a.COMMON, "Work Station", "Press " + Object(y.d)(Mt.b.INTERACT) + " to use", 1)) : k === C.a.LOADOUT_STATION ? -3 !== this._lastRaycastItemId && (this._lastRaycastItemId = -3,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + C.a.LOADOUT_STATION, xt.a.COMMON, Nt.a.COMMON, "Loadout Station", "Press " + Object(y.d)(Mt.b.INTERACT) + " to change loadouts", 1)) : k === C.a.WOODEN_CHEST ? -4 !== this._lastRaycastItemId && (this._lastRaycastItemId = -4,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + C.a.WOODEN_CHEST, xt.a.COMMON, Nt.a.COMMON, "Wooden Chest", "Press " + Object(y.d)(Mt.b.INTERACT) + " to open", 1)) : k === C.a.IRON_CHEST ? -5 !== this._lastRaycastItemId && (this._lastRaycastItemId = -5,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + C.a.IRON_CHEST, xt.a.COMMON, Nt.a.COMMON, "Iron Chest", "Press " + Object(y.d)(Mt.b.INTERACT) + " to open", 1)) : k === C.a.GOLDEN_CHEST ? -6 !== this._lastRaycastItemId && (this._lastRaycastItemId = -6,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.BLOCK + C.a.GOLDEN_CHEST, xt.a.COMMON, Nt.a.COMMON, "Golden Chest", "Press " + Object(y.d)(Mt.b.INTERACT) + " to open", 1)) : -1 !== this._lastRaycastItemId && (this._lastRaycastItemId = -1,
                    this._lastRacyastItemCount = 0,
                    d.a.emit(p.a.ITEM_PICKUP_HINT_UPDATE, ct.a.EMPTY, xt.a.COMMON, "", "", 1))
            }
            ,
            e.isNearBlock = function(t, e) {
                for (var i = -e; i <= e; i++)
                    for (var n = -e; n <= e; n++)
                        for (var s = -e; s <= e; s++) {
                            var r = Object(S.b)(this._playerState.physicsStep.pos);
                            if (Object(S.f)(r, l.a.BLOCK_SIZE),
                            Object(S.a)(r, Object(S.l)(i, n, s)),
                            this._sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(r.x, r.y, r.z) === t)
                                return !0
                        }
                return !1
            }
            ,
            e.getLastInput = function() {
                return this._lastInputState
            }
            ,
            e.isMoving = function() {
                return this._lastInputState.moveBackward || this._lastInputState.moveForward || this._lastInputState.moveLeft || this._lastInputState.moveRight
            }
            ,
            e.isOnGround = function() {
                return this._playerState.physicsStep.onGround
            }
            ,
            e.getControlState = function() {
                return this._playerState.physicsStep.controlState
            }
            ,
            e.isJumping = function() {
                return !this._playerState.physicsStep.canJump
            }
            ,
            e.getPrevAimSpread = function() {
                return 6 * this._prevPlayerState.physicsStep.aimSpread
            }
            ,
            e.getCurrAimSpread = function() {
                return 6 * this._playerState.physicsStep.aimSpread
            }
            ,
            e.getPitchYaw = function() {
                var t = (new h.s).setFromQuaternion(this._canvasRenderer.camera.quaternion, "YXZ");
                return Object(J.e)(t.x, t.y)
            }
            ,
            e.getBasePitchYaw = function() {
                var t = this._controls.getBase();
                return Object(J.e)(t.x, t.y)
            }
            ,
            e.getCameraDir = function() {
                var t = this.getPitchYaw();
                return Object(x.g)(t)
            }
            ,
            e.getInventory = function() {
                return this._playerState.inventory
            }
            ,
            _()(t, [{
                key: "playerState",
                get: function() {
                    return this._playerState
                }
            }, {
                key: "physicsStep",
                get: function() {
                    return this._playerState.physicsStep
                }
            }, {
                key: "canvasRenderer",
                get: function() {
                    return this._canvasRenderer
                }
            }, {
                key: "sceneRenderer",
                get: function() {
                    return this._sceneRenderer
                }
            }, {
                key: "statsRenderer",
                get: function() {
                    return this._statsRenderer
                }
            }, {
                key: "controlsRenderer",
                get: function() {
                    return this._controlsRenderer
                }
            }, {
                key: "pointerLockControls",
                get: function() {
                    return this._controls
                }
            }]),
            t
        }()
          , Bt = i(162)
          , zt = i(138)
          , Ft = function(t, e, i, n) {
            var s = t.blocks[b(e, i, n)];
            return void 0 === s ? C.a.AIR : s
        }
          , jt = function(t, e, i, n) {
            return Ft(t, e, i, n) !== C.a.AIR
        }
          , Kt = function(t, e, i, n) {
            return void 0 !== t.blocks[b(e, i, n)]
        }
          , Gt = function(t) {
            var e = []
              , i = []
              , n = []
              , s = []
              , r = [t.origin]
              , a = new Set;
            for (a.add(b(t.origin.x, t.origin.y, t.origin.z)); r.length > 0; ) {
                var o = r.pop()
                  , h = o.x
                  , c = o.y
                  , _ = o.z
                  , u = h - t.origin.x
                  , d = c - t.origin.y
                  , p = _ - t.origin.z
                  , v = jt(t, h, c, _)
                  , y = b(h, c + 1, _);
                if (v && !jt(t, h, c + 1, _)) {
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                    var m = Object(O.a)(jt(t, h + 1, c + 1, _), jt(t, h, c + 1, _ + 1), jt(t, h + 1, c + 1, _ + 1))
                      , E = Object(O.a)(jt(t, h, c + 1, _ + 1), jt(t, h - 1, c + 1, _), jt(t, h - 1, c + 1, _ + 1))
                      , g = Object(O.a)(jt(t, h - 1, c + 1, _), jt(t, h, c + 1, _ - 1), jt(t, h - 1, c + 1, _ - 1))
                      , k = Object(O.a)(jt(t, h, c + 1, _ - 1), jt(t, h + 1, c + 1, _), jt(t, h + 1, c + 1, _ - 1));
                    n.push(m),
                    n.push(E),
                    n.push(g),
                    n.push(k),
                    m + g < E + k ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var f = z.a[Ft(t, h, c, _)].textures.top;
                    s.push(f.x, f.y, 0, 1),
                    s.push(f.x, f.y, 1, 1),
                    s.push(f.x, f.y, 1, 0),
                    s.push(f.x, f.y, 0, 0)
                } else
                    Kt(t, h, c + 1, _) && !a.has(y) && (r.push(Object(S.l)(h, c + 1, _)),
                    a.add(y));
                var I = b(h, c - 1, _);
                if (v && !jt(t, h, c - 1, _)) {
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                    var T = Object(O.a)(jt(t, h + 1, c - 1, _), jt(t, h, c - 1, _ - 1), jt(t, h + 1, c - 1, _ - 1))
                      , A = Object(O.a)(jt(t, h, c - 1, _ - 1), jt(t, h - 1, c - 1, _), jt(t, h - 1, c - 1, _ - 1))
                      , C = Object(O.a)(jt(t, h - 1, c - 1, _), jt(t, h, c - 1, _ + 1), jt(t, h - 1, c - 1, _ + 1))
                      , R = Object(O.a)(jt(t, h, c - 1, _ + 1), jt(t, h + 1, c - 1, _), jt(t, h + 1, c - 1, _ + 1));
                    n.push(T),
                    n.push(A),
                    n.push(C),
                    n.push(R),
                    T + C < A + R ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var P = z.a[Ft(t, h, c, _)].textures.bottom;
                    s.push(P.x, P.y, 0, 1),
                    s.push(P.x, P.y, 1, 1),
                    s.push(P.x, P.y, 1, 0),
                    s.push(P.x, P.y, 0, 0)
                } else
                    Kt(t, h, c - 1, _) && !a.has(I) && (r.push(Object(S.l)(h, c - 1, _)),
                    a.add(I));
                var M = b(h + 1, c, _);
                if (v && !jt(t, h + 1, c, _)) {
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                    var x = Object(O.a)(jt(t, h + 1, c, _ + 1), jt(t, h + 1, c + 1, _), jt(t, h + 1, c + 1, _ + 1))
                      , N = Object(O.a)(jt(t, h + 1, c + 1, _), jt(t, h + 1, c, _ - 1), jt(t, h + 1, c + 1, _ - 1))
                      , L = Object(O.a)(jt(t, h + 1, c, _ - 1), jt(t, h + 1, c - 1, _), jt(t, h + 1, c - 1, _ - 1))
                      , w = Object(O.a)(jt(t, h + 1, c - 1, _), jt(t, h + 1, c, _ + 1), jt(t, h + 1, c - 1, _ + 1));
                    n.push(x),
                    n.push(N),
                    n.push(L),
                    n.push(w),
                    x + L < N + w ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var U = z.a[Ft(t, h, c, _)].textures.left;
                    s.push(U.x, U.y, 0, 1),
                    s.push(U.x, U.y, 1, 1),
                    s.push(U.x, U.y, 1, 0),
                    s.push(U.x, U.y, 0, 0)
                } else
                    Kt(t, h + 1, c, _) && !a.has(M) && (r.push(Object(S.l)(h + 1, c, _)),
                    a.add(M));
                var D = b(h - 1, c, _);
                if (v && !jt(t, h - 1, c, _)) {
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                    var B = Object(O.a)(jt(t, h - 1, c, _ - 1), jt(t, h - 1, c + 1, _), jt(t, h - 1, c + 1, _ - 1))
                      , F = Object(O.a)(jt(t, h - 1, c + 1, _), jt(t, h - 1, c, _ + 1), jt(t, h - 1, c + 1, _ + 1))
                      , j = Object(O.a)(jt(t, h - 1, c, _ + 1), jt(t, h - 1, c - 1, _), jt(t, h - 1, c - 1, _ + 1))
                      , K = Object(O.a)(jt(t, h - 1, c - 1, _), jt(t, h - 1, c, _ - 1), jt(t, h - 1, c - 1, _ - 1));
                    n.push(B),
                    n.push(F),
                    n.push(j),
                    n.push(K),
                    B + j < F + K ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var G = z.a[Ft(t, h, c, _)].textures.right;
                    s.push(G.x, G.y, 0, 1),
                    s.push(G.x, G.y, 1, 1),
                    s.push(G.x, G.y, 1, 0),
                    s.push(G.x, G.y, 0, 0)
                } else
                    Kt(t, h - 1, c, _) && !a.has(D) && (r.push(Object(S.l)(h - 1, c, _)),
                    a.add(D));
                var H = b(h, c, _ + 1);
                if (v && !jt(t, h, c, _ + 1)) {
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p + .5) * l.a.BLOCK_SIZE);
                    var W = Object(O.a)(jt(t, h - 1, c, _ + 1), jt(t, h, c + 1, _ + 1), jt(t, h - 1, c + 1, _ + 1))
                      , Y = Object(O.a)(jt(t, h, c + 1, _ + 1), jt(t, h + 1, c, _ + 1), jt(t, h + 1, c + 1, _ + 1))
                      , V = Object(O.a)(jt(t, h + 1, c, _ + 1), jt(t, h, c - 1, _ + 1), jt(t, h + 1, c - 1, _ + 1))
                      , Z = Object(O.a)(jt(t, h, c - 1, _ + 1), jt(t, h - 1, c, _ + 1), jt(t, h - 1, c - 1, _ + 1));
                    n.push(W),
                    n.push(Y),
                    n.push(V),
                    n.push(Z),
                    W + V < Y + Z ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var q = z.a[Ft(t, h, c, _)].textures.front;
                    s.push(q.x, q.y, 0, 1),
                    s.push(q.x, q.y, 1, 1),
                    s.push(q.x, q.y, 1, 0),
                    s.push(q.x, q.y, 0, 0)
                } else
                    Kt(t, h, c, _ + 1) && !a.has(H) && (r.push(Object(S.l)(h, c, _ + 1)),
                    a.add(H));
                var Q = b(h, c, _ - 1);
                if (v && !jt(t, h, c, _ - 1)) {
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d + .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u - .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE),
                    e.push((u + .5) * l.a.BLOCK_SIZE, (d - .5) * l.a.BLOCK_SIZE, (p - .5) * l.a.BLOCK_SIZE);
                    var X = Object(O.a)(jt(t, h + 1, c, _ - 1), jt(t, h, c + 1, _ - 1), jt(t, h + 1, c + 1, _ - 1))
                      , J = Object(O.a)(jt(t, h, c + 1, _ - 1), jt(t, h - 1, c, _ - 1), jt(t, h - 1, c + 1, _ - 1))
                      , $ = Object(O.a)(jt(t, h - 1, c, _ - 1), jt(t, h, c - 1, _ - 1), jt(t, h - 1, c - 1, _ - 1))
                      , tt = Object(O.a)(jt(t, h, c - 1, _ - 1), jt(t, h + 1, c, _ - 1), jt(t, h + 1, c - 1, _ - 1));
                    n.push(X),
                    n.push(J),
                    n.push($),
                    n.push(tt),
                    X + $ < J + tt ? (i.push(e.length / 3 - 3, e.length / 3 - 4, e.length / 3 - 1),
                    i.push(e.length / 3 - 1, e.length / 3 - 2, e.length / 3 - 3)) : (i.push(e.length / 3 - 4, e.length / 3 - 1, e.length / 3 - 2),
                    i.push(e.length / 3 - 2, e.length / 3 - 3, e.length / 3 - 4));
                    var et = z.a[Ft(t, h, c, _)].textures.back;
                    s.push(et.x, et.y, 0, 1),
                    s.push(et.x, et.y, 1, 1),
                    s.push(et.x, et.y, 1, 0),
                    s.push(et.x, et.y, 0, 0)
                } else
                    Kt(t, h, c, _ - 1) && !a.has(Q) && (r.push(Object(S.l)(h, c, _ - 1)),
                    a.add(Q))
            }
            return {
                position: Object(S.l)((t.origin.x + .5) * l.a.BLOCK_SIZE, (t.origin.y + .5) * l.a.BLOCK_SIZE, (t.origin.z + .5) * l.a.BLOCK_SIZE),
                vertices: e,
                indices: i,
                aos: n,
                uvs: s
            }
        };
        function Ht(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Wt(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return Wt(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function Wt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var Yt = function() {
            function t(t) {
                var e = this;
                this._controlsRenderer = t,
                this._blockPlacementGuide = void 0,
                this._blockDestructionGuide = void 0,
                this._activeItem = void 0,
                this._buildMode = void 0,
                this._blockMaterial = void 0,
                this._redMaterial = void 0,
                this.onInventoryActiveSlotChange = function(t, i) {
                    if (void 0 !== e._activeItem) {
                        if (e._activeItem.id === i.item.id)
                            return;
                        Object(nt.e)(e._activeItem.id) ? e.hideBlockPlacementGuide() : e._activeItem instanceof zt.a && e.setBlockDestructionGuidePosition(void 0)
                    }
                    e._activeItem = i.item,
                    Object(nt.e)(i.item.id) ? (e.showBlockPlacementGuide(i.item.id - ct.a.BLOCK),
                    e.updateBlockPlacementGuidePosition()) : i.item instanceof zt.a && e.updateBlockDestructionGuidePosition()
                }
                ;
                var i = new h.j(l.a.BLOCK_SIZE,l.a.BLOCK_SIZE,l.a.BLOCK_SIZE)
                  , n = new h.Y({
                    color: 16777215,
                    transparent: !0,
                    opacity: .1
                });
                this._blockDestructionGuide = new h.X(i,n),
                this._blockDestructionGuide.renderOrder = -1,
                this._blockDestructionGuide.scale.set(1.001, 1.001, 1.001),
                this.controlsRenderer.controls.sceneRenderer.scene.add(this._blockDestructionGuide),
                this._buildMode = ht.a.BLOCK,
                this._blockMaterial = new h.wb({
                    transparent: !0,
                    uniforms: {
                        map: {
                            value: k.a.blockTexture
                        }
                    },
                    vertexShader: "\n                attribute vec4 realUv;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vRealUv = realUv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 0.4);\n                    \n                    float tilePosX = max(0.05, min(0.95, fract(vRealUv.z)));\n                    float tilePosY = max(0.05, min(0.95, fract(vRealUv.w)));\n                    vec2 uv = vec2(vRealUv.x * (1.0 / 8.0) + tilePosX * (1.0 / 8.0), vRealUv.y * (1.0 / 8.0) + tilePosY * (1.0 / 8.0));\n    \n                    vec4 texelColor = texture2D(map, uv);\n                    texelColor = mapTexelToLinear(texelColor);\n                    diffuseColor *= texelColor.rgba;\n    \n                    gl_FragColor = diffuseColor;\n                }\n            ",
                    fog: !1,
                    depthWrite: !1
                }),
                this._redMaterial = new h.Y({
                    color: 16711680,
                    transparent: !0,
                    opacity: .3,
                    depthWrite: !1
                }),
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange)
            }
            ,
            e.render = function(t, e) {
                void 0 !== this._activeItem && (Object(nt.e)(this._activeItem.id) ? (this._buildMode !== this._controlsRenderer.controls.playerState.buildMode && (this._buildMode = this._controlsRenderer.controls.playerState.buildMode,
                this.showBlockPlacementGuide(this._activeItem.id - ct.a.BLOCK)),
                this.updateBlockPlacementGuidePosition()) : this._activeItem instanceof zt.a && this.updateBlockDestructionGuidePosition())
            }
            ,
            e.updateBlockDestructionGuidePosition = function() {
                var t = this.controlsRenderer.controls.getPlayerSelectedBlockPosition();
                this.setBlockDestructionGuidePosition(t)
            }
            ,
            e.setBlockDestructionGuidePosition = function(t) {
                var e = this._activeItem;
                if (t && e.canBreak(this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(t.x, t.y, t.z))) {
                    var i = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(t.x, t.y, t.z);
                    this._blockDestructionGuide.position.set(i.x, i.y, i.z)
                } else
                    this._blockDestructionGuide.position.set(0, -999, 0)
            }
            ,
            e.showBlockPlacementGuide = function(t) {
                this.hideBlockPlacementGuide();
                var e = {
                    origin: Object(S.l)(0, 0, 0),
                    blocks: {}
                };
                if (this._buildMode === ht.a.BLOCK)
                    e.blocks[b(0, 0, 0)] = t;
                else if (this._buildMode === ht.a.WALL)
                    for (var i = -1; i <= 1; i++)
                        for (var n = 0; n <= 2; n++)
                            e.blocks[b(i, n, 0)] = t;
                else if (this._buildMode === ht.a.STAIRS)
                    for (var s = -1; s <= 1; s++)
                        e.blocks[b(s, 0, 0)] = t,
                        e.blocks[b(s, 0, 1)] = t,
                        e.blocks[b(s, 1, 1)] = t,
                        e.blocks[b(s, 1, 2)] = t;
                else if (this._buildMode === ht.a.FLOOR)
                    for (var r = -1; r <= 1; r++)
                        for (var a = -1; a <= 1; a++)
                            e.blocks[b(r, 0, a)] = t;
                var o = Gt(e)
                  , c = o.indices
                  , _ = o.vertices
                  , l = o.uvs
                  , u = o.aos
                  , d = new h.l;
                d.setAttribute("position", new h.v(_,3)),
                d.setIndex(new h.Lb(c,1)),
                d.setAttribute("ao", new h.Mb(u,1,!0)),
                d.setAttribute("realUv", new h.Mb(l,4)),
                this._blockPlacementGuide = new h.X(d,this._blockMaterial),
                this._blockPlacementGuide.scale.set(.999, .999, .999),
                this._blockPlacementGuide.renderOrder = -1,
                this.controlsRenderer.controls.sceneRenderer.scene.add(this._blockPlacementGuide)
            }
            ,
            e.hideBlockPlacementGuide = function() {
                void 0 !== this._blockPlacementGuide && (this._blockPlacementGuide.geometry.dispose(),
                this.controlsRenderer.controls.sceneRenderer.scene.remove(this._blockPlacementGuide),
                this._blockPlacementGuide = void 0)
            }
            ,
            e.updateBlockPlacementGuidePosition = function() {
                if (void 0 !== this._blockPlacementGuide) {
                    var t = this.controlsRenderer.controls.camVoxelRaycast();
                    if (t.hit) {
                        var e = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x + .01 * t.normal.x, t.position.y + .01 * t.normal.y, t.position.z + .01 * t.normal.z)
                          , i = [];
                        if (this._buildMode === ht.a.WALL) {
                            var n = Object(S.g)(this._controlsRenderer.controls.getCameraDir(), Object(S.l)(0, 0, 1));
                            if (Math.abs(n) < .5) {
                                for (var s = -1; s <= 1; s++)
                                    for (var r = 0; r <= 2; r++)
                                        i.push(Object(S.l)(e.x, r + e.y, s + e.z));
                                this._blockPlacementGuide.rotation.set(0, Math.PI / 2, 0)
                            } else {
                                for (var a = -1; a <= 1; a++)
                                    for (var o = 0; o <= 2; o++)
                                        i.push(Object(S.l)(a + e.x, o + e.y, e.z));
                                this._blockPlacementGuide.rotation.set(0, 0, 0)
                            }
                        } else if (this._buildMode === ht.a.BLOCK)
                            i.push(e);
                        else if (this._buildMode === ht.a.STAIRS) {
                            var h = this._controlsRenderer.controls.getPitchYaw().y;
                            if (h >= -Math.PI / 4 && h <= Math.PI / 4) {
                                for (var c = -1; c <= 1; c++)
                                    i.push(Object(S.l)(c + e.x, 0 + e.y, 0 + e.z)),
                                    i.push(Object(S.l)(c + e.x, 0 + e.y, -1 + e.z)),
                                    i.push(Object(S.l)(c + e.x, 1 + e.y, -1 + e.z)),
                                    i.push(Object(S.l)(c + e.x, 1 + e.y, -2 + e.z));
                                this._blockPlacementGuide.rotation.set(0, -Math.PI, 0)
                            } else if (h >= -Math.PI / 4 * 3 && h < -Math.PI / 4) {
                                for (var _ = -1; _ <= 1; _++)
                                    i.push(Object(S.l)(0 + e.x, 0 + e.y, _ + e.z)),
                                    i.push(Object(S.l)(1 + e.x, 0 + e.y, _ + e.z)),
                                    i.push(Object(S.l)(1 + e.x, 1 + e.y, _ + e.z)),
                                    i.push(Object(S.l)(2 + e.x, 1 + e.y, _ + e.z));
                                this._blockPlacementGuide.rotation.set(0, Math.PI / 2, 0)
                            } else if (h < -Math.PI / 4 * 3 || h >= Math.PI / 4 * 3) {
                                for (var l = -1; l <= 1; l++)
                                    i.push(Object(S.l)(l + e.x, 0 + e.y, 0 + e.z)),
                                    i.push(Object(S.l)(l + e.x, 0 + e.y, 1 + e.z)),
                                    i.push(Object(S.l)(l + e.x, 1 + e.y, 1 + e.z)),
                                    i.push(Object(S.l)(l + e.x, 1 + e.y, 2 + e.z));
                                this._blockPlacementGuide.rotation.set(0, 0, 0)
                            } else {
                                for (var u = -1; u <= 1; u++)
                                    i.push(Object(S.l)(0 + e.x, 0 + e.y, u + e.z)),
                                    i.push(Object(S.l)(-1 + e.x, 0 + e.y, u + e.z)),
                                    i.push(Object(S.l)(-1 + e.x, 1 + e.y, u + e.z)),
                                    i.push(Object(S.l)(-2 + e.x, 1 + e.y, u + e.z));
                                this._blockPlacementGuide.rotation.set(0, -Math.PI / 2, 0)
                            }
                        } else if (this._buildMode === ht.a.FLOOR) {
                            var d = this._controlsRenderer.controls.getCameraDir()
                              , p = Math.abs(d.x) > Math.abs(d.z) ? d.x > 0 ? Object(S.l)(1, 0, 0) : Object(S.l)(-1, 0, 0) : d.z > 0 ? Object(S.l)(0, 0, 1) : Object(S.l)(0, 0, -1);
                            if (0 === t.normal.y)
                                Object(S.a)(e, t.normal);
                            else {
                                var v = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToWorldBlockPos(t.position.x - .01 * t.normal.x, t.position.y - .01 * t.normal.y, t.position.z - .01 * t.normal.z)
                                  , y = Object(S.b)(v)
                                  , m = Object(S.b)(v);
                                Object(S.a)(y, p),
                                Object(S.a)(m, p),
                                Object(S.a)(m, Object(S.l)(0, 1, 0));
                                var E = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(y.x, y.y, y.z)
                                  , g = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(m.x, m.y, m.z);
                                z.a[E].solid || z.a[g].solid || (Object(S.a)(e, p),
                                Object(S.a)(e, p),
                                Object(S.a)(e, Object(S.l)(0, -1, 0)))
                            }
                            for (var k = -1; k <= 1; k++)
                                for (var f = -1; f <= 1; f++)
                                    i.push(Object(S.l)(k + e.x, e.y, f + e.z))
                        }
                        this._blockPlacementGuide.visible = !0;
                        var I = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(e.x, e.y, e.z);
                        if (this._blockPlacementGuide.position.set(I.x, I.y, I.z),
                        this.validBlocksAABB(i)) {
                            for (var T = 0, O = 0; O < i.length; O++) {
                                var A = i[O]
                                  , C = this._controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.getBlockAt(A.x, A.y, A.z);
                                z.a[C].solid || ++T
                            }
                            this._controlsRenderer.controls.playerState.inventory.hasItems([{
                                type: this._activeItem.id,
                                count: T
                            }]) ? this._blockPlacementGuide.material = this._blockMaterial : this._blockPlacementGuide.material = this._redMaterial
                        } else
                            this._blockPlacementGuide.material = this._redMaterial
                    } else
                        this._blockPlacementGuide.visible = !1
                }
            }
            ,
            e.validBlocksAABB = function(t) {
                for (var e = this.controlsRenderer.controls.sceneRenderer.entitiesRenderer.getEntities(), i = Object(X.e)(this.controlsRenderer.controls.physicsStep.pos, this.controlsRenderer.controls.physicsStep.eyeHeight), n = 0; n < t.length; n++) {
                    var s = t[n]
                      , r = this.controlsRenderer.controls.sceneRenderer.terrainRenderer.chunkStorageManager.roundToBlockCenterPos(s.x, s.y, s.z)
                      , a = Object(X.a)(r);
                    if (Object(Bt.a)(i, a))
                        return !1;
                    for (var o, h = Ht(e); !(o = h()).done; ) {
                        var c = o.value;
                        if (c.type === St.PLAYER) {
                            var _ = c;
                            if (_.isAlive) {
                                var u = Object(X.e)(_.object.position, _.controlState === Z.a.CROUCHING ? l.a.PLAYER_CROUCHING_EYE_POSITION : l.a.PLAYER_STANDING_EYE_POSITION);
                                if (Object(Bt.a)(u, a))
                                    return !1
                            }
                        }
                    }
                }
                return !0
            }
            ,
            _()(t, [{
                key: "controlsRenderer",
                get: function() {
                    return this._controlsRenderer
                }
            }]),
            t
        }()
          , Vt = function() {
            function t(t) {
                this._controlsRenderer = t,
                this._wrapper = void 0,
                this._shells = void 0,
                this._wrapper = new h.hb,
                this._shells = []
            }
            var e = t.prototype;
            return e.addShell = function(t, e, i) {
                var n = k.a.getMiscModel(i);
                Object(S.j)(e);
                var s = new h.qb;
                s.setFromUnitVectors(new h.Ob(0,0,1), new h.Ob(e.x,e.y,e.z)),
                n.position.set(t.x, t.y, t.z),
                n.rotation.setFromQuaternion(s);
                var r = new h.Ob(0,0,1);
                r.applyQuaternion(s),
                this._wrapper.add(n);
                var a = new h.Ob;
                a.setFromMatrixColumn(this._controlsRenderer.controls.canvasRenderer.camera.matrix, 0),
                a.normalize(),
                a.multiplyScalar(2),
                a.y = 1.5,
                this._shells.push({
                    mesh: n,
                    origin: t,
                    velocity: a,
                    rotationalAxis: r
                })
            }
            ,
            e.render = function(t, e) {
                for (var i = 0; i < this._shells.length; i++) {
                    var n = this._shells[i]
                      , s = n.mesh.position;
                    n.mesh.position.set(s.x + n.velocity.x * t, s.y + n.velocity.y * t, s.z + n.velocity.z * t),
                    n.velocity.y -= 15 * t,
                    n.mesh.rotateOnWorldAxis(n.rotationalAxis, 20 * t),
                    n.origin.y - s.y > 5 && (this._wrapper.remove(n.mesh),
                    k.a.cleanUpModel(n.mesh),
                    this._shells[i] = this._shells[this._shells.length - 1],
                    this._shells.pop(),
                    --i)
                }
            }
            ,
            _()(t, [{
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }]),
            t
        }()
          , Zt = function() {
            function t(t, e, i, n) {
                var s = this;
                this._settings = t,
                this._canvasRenderer = e,
                this._sceneRenderer = i,
                this._statsRenderer = n,
                this._initialized = void 0,
                this._adsWrapper = void 0,
                this._swingingWrapper = void 0,
                this._oscillationWrapper = void 0,
                this._kickBackWrapper = void 0,
                this._armAnimationWrapper = void 0,
                this._blockPlaceAnimationWrapper = void 0,
                this._handModel = void 0,
                this._itemModel = void 0,
                this._animationMixer = void 0,
                this._playerHoldBlockAction = void 0,
                this._playerHoldItemAction = void 0,
                this._playerFistAction = void 0,
                this._activeItemType = void 0,
                this._muzzleFlash = void 0,
                this._controls = void 0,
                this._prevPitchYaw = void 0,
                this._adsOverrideTimer = void 0,
                this._adsOverrideExpireCallback = void 0,
                this._adsVel = void 0,
                this._adsTargetPos = void 0,
                this._swingingVel = void 0,
                this._oscillationVel = void 0,
                this._kickBackVel = void 0,
                this._kickBackTargetPos = void 0,
                this._prevIsMoving = void 0,
                this._prevIsOnGround = void 0,
                this._prevIsJumping = void 0,
                this._jumpSwayTimer = void 0,
                this._oscillationDir = void 0,
                this._topLine = void 0,
                this._bottomLine = void 0,
                this._leftLine = void 0,
                this._rightLine = void 0,
                this._centerDot = void 0,
                this._crosshairMaterial = void 0,
                this._crosshair = void 0,
                this._topLeftLine = void 0,
                this._topRightLine = void 0,
                this._bottomLeftLine = void 0,
                this._bottomRightLine = void 0,
                this._crosshairHitMark = void 0,
                this._crosshairHitMarkStartTime = void 0,
                this._damageIndicators = void 0,
                this._blockEditGuideRenderer = void 0,
                this._weaponShellsRenderer = void 0,
                this._weaponShellOriginIndicator = void 0,
                this._audioListener = void 0,
                this._shovelAnimationStartTime = void 0,
                this._shovelAnimationRunningTime = void 0,
                this._shovelAnimationGracePeriod = void 0,
                this._shovelHitAnimationStartTime = void 0,
                this._blockPlaceAnimationStartTime = void 0,
                this._blockPlaceAnimationGracePeriod = void 0,
                this._punchAnimationState = void 0,
                this._soundsLastTimePlayed = void 0,
                this._waterOverlay = void 0,
                this._toxicFogOverlay = void 0,
                this._blockClippingOverlay = void 0,
                this._currCrossHairGap = void 0,
                this._team = void 0,
                this.onPlayDirectSound = function(t, e, i) {
                    s.playSound(t, e, i)
                }
                ,
                this.onPlayPositionalSound = function(t, e, i, n) {
                    s.playPositionalSound(t, e, i, n)
                }
                ,
                this.onEntityDamage = function(t, e, i, n, r, a) {
                    n && (s.showCrosshairHitMark(),
                    r && s.playSound(_t.a.HIT_HEADSHOT, 0, 1),
                    s.playSound(_t.a.HIT, 0, .8),
                    a && s.playSound(_t.a.KILL, 0, 1))
                }
                ,
                this.onClientDamageReceived = function(t, e) {
                    s.playSound(_t.a.DAMAGE, 0, 1);
                    var i = new h.Eb({
                        map: k.a.damageIndicatorTexture,
                        transparent: !0
                    })
                      , n = new h.Db(i);
                    n.scale.set(4, k.a.damageIndicatorTexture.image.height / k.a.damageIndicatorTexture.image.width * 4, 1),
                    n.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE / 2,
                    s._canvasRenderer.camera.add(n);
                    var r = {
                        sprite: n,
                        sourcePos: t,
                        startTime: Date.now()
                    };
                    s.updateDamageIndicator(r),
                    s._damageIndicators.push(r)
                }
                ,
                this.onGameJoin = function(t, e, i, n, r, a, o) {
                    s.initialize(),
                    Object(y.r)(Pt.a.CONNECTED),
                    Object(y.p)(t),
                    Object(y.q)(e),
                    s.team = r,
                    s._controls.initialize(t, i, n)
                }
                ,
                this.onInventoryActiveSlotChange = function(t, e) {
                    s._activeItemType = e.item.id,
                    s.startADSTargetOverride(new h.Ob(0,-.5,0), 3, .3, s.generateItemMesh.bind(s, e.item))
                }
                ,
                this.onReload = function(t) {
                    s.startADSTargetOverride(new h.Ob(0,-.5,0), 3, Object(F.d)(t - Object(F.c)(.5)), (function() {}
                    ))
                }
                ,
                this._initialized = !1,
                this._currCrossHairGap = 0,
                this._team = kt.a.GREEN,
                this._adsWrapper = new h.hb,
                this._swingingWrapper = new h.hb,
                this._oscillationWrapper = new h.hb,
                this._kickBackWrapper = new h.hb,
                this._armAnimationWrapper = new h.hb,
                this._blockPlaceAnimationWrapper = new h.hb,
                this._damageIndicators = [],
                this._crosshairHitMarkStartTime = 0,
                this._kickBackVel = 0,
                this._kickBackTargetPos = new h.Ob(0,0,0),
                this._controls = new Dt(this._settings,this._canvasRenderer,this._sceneRenderer,this._statsRenderer,this),
                this._blockEditGuideRenderer = new Yt(this),
                this._weaponShellsRenderer = new Vt(this),
                this._weaponShellOriginIndicator = new h.hb,
                this._shovelAnimationStartTime = 0,
                this._shovelAnimationRunningTime = 0,
                this._shovelAnimationGracePeriod = 100,
                this._shovelHitAnimationStartTime = 0,
                this._blockPlaceAnimationStartTime = 0,
                this._blockPlaceAnimationGracePeriod = 1e3 * Object(F.d)(ot.a.BLOCK_PLACE.duration) / 2,
                this._activeItemType = ct.a.EMPTY,
                this._handModel = k.a.playerFirstPersonModel,
                this._animationMixer = new h.c(this._handModel),
                this._playerHoldItemAction = this._animationMixer.clipAction(k.a.playerFirstPersonItemHoldAnimation),
                this._playerHoldBlockAction = this._animationMixer.clipAction(k.a.playerFirstPersonBlockHoldAnimation),
                this._playerFistAction = this._animationMixer.clipAction(k.a.playerFirstPersonFistAnimation),
                this._playerHoldBlockAction.play(),
                this._playerHoldBlockAction.paused = !0,
                this._playerHoldItemAction.play(),
                this._playerHoldItemAction.paused = !0,
                this._playerFistAction.play(),
                this._playerFistAction.paused = !0,
                this._soundsLastTimePlayed = {},
                this._playerFistAction.setLoop(h.Q, 1),
                this._playerFistAction.clampWhenFinished = !0,
                this._punchAnimationState = 0,
                this._oscillationDir = 0,
                this.generateItemMesh(Object(nt.c)(ct.a.EMPTY)),
                this.bindEvents()
            }
            var e = t.prototype;
            return e.playPunchAnimation = function() {
                this._playerFistAction.paused && (1 === this._punchAnimationState ? this._punchAnimationState = 2 : 2 === this._punchAnimationState && (this._playerFistAction.reset(),
                this._punchAnimationState = 0),
                this._playerFistAction.paused = !1)
            }
            ,
            e.playBlockPlaceAnimation = function() {
                this._blockPlaceAnimationStartTime = Date.now()
            }
            ,
            e.playShovelAnimation = function() {
                this._shovelAnimationStartTime = Date.now()
            }
            ,
            e.playShovelHitAnimation = function() {
                this._shovelHitAnimationStartTime = Date.now()
            }
            ,
            e.bindEvents = function() {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin),
                d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange),
                d.a.on(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived),
                d.a.on(p.a.ENTITY_DAMAGE, this.onEntityDamage),
                d.a.on(p.a.RELOAD, this.onReload),
                d.a.on(p.a.PLAY_DIRECT_SOUND, this.onPlayDirectSound),
                d.a.on(p.a.PLAY_POSITIONAL_SOUND, this.onPlayPositionalSound)
            }
            ,
            e.unbindEvents = function() {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin),
                d.a.off(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, this.onInventoryActiveSlotChange),
                d.a.off(p.a.CLIENT_DAMAGE_RECEIVED, this.onClientDamageReceived),
                d.a.off(p.a.ENTITY_DAMAGE, this.onEntityDamage),
                d.a.off(p.a.RELOAD, this.onReload),
                d.a.off(p.a.PLAY_DIRECT_SOUND, this.onPlayDirectSound),
                d.a.off(p.a.PLAY_POSITIONAL_SOUND, this.onPlayPositionalSound)
            }
            ,
            e.renderDamageIndicators = function(t) {
                for (var e = 0; e < this._damageIndicators.length; e++) {
                    this.updateDamageIndicator(this._damageIndicators[e]) && (this._damageIndicators[e] = this._damageIndicators[this._damageIndicators.length - 1],
                    this._damageIndicators.pop(),
                    --e)
                }
            }
            ,
            e.updateDamageIndicator = function(t) {
                var e = Date.now() - t.startTime
                  , i = l.a.PLAYER_DAMAGE_INDICATOR_VISIBLE_DURATION
                  , n = l.a.PLAYER_DAMAGE_INDICATOR_FADE_DURATION;
                if (e > i + n)
                    return this._canvasRenderer.camera.remove(t.sprite),
                    t.sprite.geometry.dispose(),
                    t.sprite.material.dispose(),
                    !0;
                e > i && (t.sprite.material.opacity = (i + n - e) / n);
                var s = this._controls.getPitchYaw().y
                  , r = Object(J.e)(-Math.sin(s), -Math.cos(s))
                  , a = Object(J.e)(t.sourcePos.x - this._canvasRenderer.camera.position.x, t.sourcePos.z - this._canvasRenderer.camera.position.z);
                Object(J.c)(a);
                var o = Math.PI - (Math.atan2(r.x * a.y - r.y * a.x, r.x * a.x + r.y * a.y) + Math.PI / 2);
                return t.sprite.position.x = 5 * Math.cos(o),
                t.sprite.position.y = 5 * Math.sin(o),
                t.sprite.material.rotation = o - Math.PI / 2,
                !1
            }
            ,
            e.startADSTargetOverride = function(t, e, i, n) {
                this._adsOverrideTimer = i,
                this._adsTargetPos = t,
                this._adsVel = e,
                n && (this._adsOverrideExpireCallback = n)
            }
            ,
            e.cleanUp = function() {
                this.unbindEvents(),
                this._canvasRenderer.frontScene.remove(this._canvasRenderer.camera),
                this._canvasRenderer.camera.remove(this._adsWrapper),
                this.cleanUpCrosshair(),
                this._controls.cleanUp(),
                k.a.cleanUpModel(this._handModel)
            }
            ,
            e.cleanUpCrosshair = function() {
                this._crosshairMaterial.dispose(),
                this._topLine.geometry.dispose(),
                this._bottomLine.geometry.dispose(),
                this._leftLine.geometry.dispose(),
                this._rightLine.geometry.dispose(),
                this._centerDot.geometry.dispose(),
                this.hideCrosshair()
            }
            ,
            e.hideCrosshair = function() {
                this._crosshair.visible = !1
            }
            ,
            e.showCrosshair = function() {
                this._crosshair.visible = !0
            }
            ,
            e.setCrosshairGap = function(t) {
                this._topLine.position.set(0, t + this._settings.crosshairLength / 2, 0),
                this._bottomLine.position.set(0, -t - this._settings.crosshairLength / 2, 0),
                this._leftLine.position.set(-t - this._settings.crosshairLength / 2, 0, 0),
                this._rightLine.position.set(t + this._settings.crosshairLength / 2, 0, 0)
            }
            ,
            e.initializeCrosshair = function() {
                this._crosshairMaterial = new h.Eb({
                    color: this._settings.crosshairColor
                }),
                this._topLine = new h.Db(this._crosshairMaterial),
                this._topLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._topLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._bottomLine = new h.Db(this._crosshairMaterial),
                this._bottomLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._leftLine = new h.Db(this._crosshairMaterial),
                this._leftLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1),
                this._leftLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._rightLine = new h.Db(this._crosshairMaterial),
                this._rightLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1),
                this._rightLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._centerDot = new h.Db(this._crosshairMaterial),
                this._centerDot.scale.set(this._settings.crosshairWidth, this._settings.crosshairWidth, 1),
                this._centerDot.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.DOT,
                this._crosshair = new h.hb,
                this._crosshair.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE,
                this._crosshair.add(this._topLine),
                this._crosshair.add(this._bottomLine),
                this._crosshair.add(this._leftLine),
                this._crosshair.add(this._rightLine),
                this._crosshair.add(this._centerDot),
                this._canvasRenderer.crosshairScene.add(this._crosshair)
            }
            ,
            e.renderCrosshair = function(t) {
                this.setCrosshairGap(this._currCrossHairGap)
            }
            ,
            e.setCrosshairHitMarkGap = function(t) {
                var e = this._settings.crosshairLength;
                this._topLeftLine.position.set(-t - e / 2, t + e / 2, 0),
                this._topRightLine.position.set(t + e / 2, t + e / 2, 0),
                this._bottomLeftLine.position.set(-t - e / 2, -t - e / 2, 0),
                this._bottomRightLine.position.set(t + e / 2, -t - e / 2, 0)
            }
            ,
            e.updateCrosshairSettings = function() {
                void 0 !== this._crosshairMaterial && (this._crosshairMaterial.color.set(this._settings.crosshairColor),
                this._crosshairMaterial.needsUpdate = !0,
                this._topLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._topLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._bottomLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._leftLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1),
                this._leftLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._rightLine.scale.set(this._settings.crosshairLength, this._settings.crosshairWidth, 1),
                this._rightLine.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.CROSS,
                this._centerDot.scale.set(this._settings.crosshairWidth, this._settings.crosshairWidth, 1),
                this._centerDot.visible = this._settings.crosshairStyle === Mt.a.CROSS_WITH_DOT || this._settings.crosshairStyle === Mt.a.DOT,
                this._topLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._topLeftLine.material.color.set(this._settings.crosshairHitColor),
                this._topLeftLine.material.needsUpdate = !0,
                this._topRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._topRightLine.material.color.set(this._settings.crosshairHitColor),
                this._topRightLine.material.needsUpdate = !0,
                this._bottomLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomLeftLine.material.color.set(this._settings.crosshairHitColor),
                this._bottomLeftLine.material.needsUpdate = !0,
                this._bottomRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomRightLine.material.color.set(this._settings.crosshairHitColor),
                this._bottomRightLine.material.needsUpdate = !0)
            }
            ,
            e.initializeCrosshairHitMark = function() {
                this._topLeftLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: Math.PI / 4
                })),
                this._topLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._topRightLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: -Math.PI / 4
                })),
                this._topRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomLeftLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: -Math.PI / 4
                })),
                this._bottomLeftLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._bottomRightLine = new h.Db(new h.Eb({
                    color: this._settings.crosshairHitColor,
                    rotation: Math.PI / 4
                })),
                this._bottomRightLine.scale.set(this._settings.crosshairWidth, this._settings.crosshairLength, 1),
                this._crosshairHitMark = new h.hb,
                this._crosshairHitMark.position.z = -l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE,
                this._crosshairHitMark.add(this._topLeftLine),
                this._crosshairHitMark.add(this._topRightLine),
                this._crosshairHitMark.add(this._bottomLeftLine),
                this._crosshairHitMark.add(this._bottomRightLine),
                this._canvasRenderer.camera.add(this._crosshairHitMark)
            }
            ,
            e.initializeMuzzleFlash = function() {
                var t = new h.Eb({
                    map: k.a.muzzleFlashtexture,
                    transparent: !0,
                    opacity: 0
                });
                this._muzzleFlash = new h.Db(t),
                this._muzzleFlash.scale.set(1, k.a.muzzleFlashtexture.image.height / k.a.muzzleFlashtexture.image.width, 1),
                this.getRightHand().add(this._muzzleFlash)
            }
            ,
            e.setCrosshairHitMarkOpacity = function(t) {
                this._topLeftLine.material.opacity = t,
                this._topRightLine.material.opacity = t,
                this._bottomLeftLine.material.opacity = t,
                this._bottomRightLine.material.opacity = t
            }
            ,
            e.renderCrosshairHitMark = function(t) {
                this.setCrosshairHitMarkGap(this._currCrossHairGap);
                var e = Date.now() - this._crosshairHitMarkStartTime;
                if (e > l.a.PLAYER_CROSSHAIR_HITMARK_VISIBLE_DURATION) {
                    var i = Math.max(0, (l.a.PLAYER_CROSSHAIR_HITMARK_VISIBLE_DURATION + l.a.PLAYER_CROSSHAIR_HITMARK_FADE_DURATION - e) / l.a.PLAYER_CROSSHAIR_HITMARK_FADE_DURATION);
                    this.setCrosshairHitMarkOpacity(i)
                }
            }
            ,
            e.showCrosshairHitMark = function() {
                this.setCrosshairHitMarkOpacity(1),
                this._crosshairHitMarkStartTime = Date.now()
            }
            ,
            e.initialize = function() {
                this._initialized = !0,
                this._audioListener = new h.f,
                this.initializeCrosshair(),
                this.initializeCrosshairHitMark(),
                this._oscillationWrapper.add(this._handModel),
                this._swingingWrapper.add(this._oscillationWrapper),
                this._adsWrapper.add(this._swingingWrapper),
                this._kickBackWrapper.add(this._adsWrapper),
                this._armAnimationWrapper.add(this._kickBackWrapper),
                this._blockPlaceAnimationWrapper.add(this._armAnimationWrapper),
                this._canvasRenderer.camera.add(this._blockPlaceAnimationWrapper),
                this.initializeMuzzleFlash(),
                this._adsOverrideTimer = 0,
                this._adsOverrideExpireCallback = function() {}
                ,
                this._adsTargetPos = new h.Ob(0,0,0),
                this._adsVel = 0,
                this._swingingVel = new h.Ob(0,0,0),
                this._oscillationVel = new h.Ob(0,0,0),
                this._prevPitchYaw = Object(J.e)(0, 0),
                this._prevIsMoving = !1,
                this._prevIsOnGround = !1,
                this._prevIsJumping = !1,
                this._jumpSwayTimer = 0,
                this._canvasRenderer.frontScene.add(this._canvasRenderer.camera),
                this._canvasRenderer.frontScene.add(this._weaponShellsRenderer.object),
                this._canvasRenderer.camera.add(this._audioListener);
                var t = new h.Eb({
                    color: 255,
                    transparent: !0,
                    opacity: .3,
                    depthTest: !1
                });
                this._waterOverlay = new h.Db(t),
                this._waterOverlay.scale.set(10, 10, 0),
                this._waterOverlay.position.set(0, 0, -1),
                this._waterOverlay.visible = !1,
                this._canvasRenderer.camera.add(this._waterOverlay);
                var e = new h.Eb({
                    color: 16711680,
                    transparent: !0,
                    opacity: .3,
                    depthTest: !1
                });
                this._toxicFogOverlay = new h.Db(e),
                this._toxicFogOverlay.scale.set(10, 10, 0),
                this._toxicFogOverlay.position.set(0, 0, -1),
                this._toxicFogOverlay.visible = !1,
                this._canvasRenderer.camera.add(this._toxicFogOverlay);
                var i = new h.Eb({
                    color: 0,
                    transparent: !1,
                    depthTest: !1
                });
                this._blockClippingOverlay = new h.Db(i),
                this._blockClippingOverlay.scale.set(10, 10, 0),
                this._blockClippingOverlay.position.set(0, 0, -1),
                this._blockClippingOverlay.visible = !1,
                this._canvasRenderer.camera.add(this._blockClippingOverlay)
            }
            ,
            e.playFootstepSound = function(t, e) {
                this.playSound(t, Math.random() * e - e / 2, .5)
            }
            ,
            e.playPositionalFootstepSound = function(t, e, i) {
                this.playPositionalSound(t, e, Math.random() * i - i / 2, .5)
            }
            ,
            e.playSound = function(t, e, i) {
                void 0 === e && (e = 0),
                void 0 === i && (i = 1);
                var n = this._soundsLastTimePlayed[t];
                if (!(void 0 !== n && Date.now() - n < 40)) {
                    var s = new h.d(this._audioListener);
                    s.setBuffer(k.a.getSound(t)),
                    s.detune = e,
                    s.gain.gain.value = i * (this._settings.soundVolume * this._settings.soundVolume),
                    s.play(),
                    this._soundsLastTimePlayed[t] = Date.now()
                }
            }
            ,
            e.playPositionalSound = function(t, e, i, n, s, r, a) {
                var o = this;
                if (void 0 === i && (i = 0),
                void 0 === n && (n = 1),
                void 0 === s && (s = 80 * l.a.BLOCK_SIZE),
                void 0 === r && (r = 10 * l.a.BLOCK_SIZE),
                void 0 === a && (a = 2),
                !(Object(S.e)(t, this._canvasRenderer.camera.position) >= s * s)) {
                    var c = this._soundsLastTimePlayed[e];
                    if (!(void 0 !== c && Date.now() - c < 40)) {
                        var _ = new h.ob(this._audioListener);
                        _.setBuffer(k.a.getSound(e)),
                        _.detune = i,
                        _.gain.gain.value = n * (this._settings.soundVolume * this._settings.soundVolume),
                        _.setRefDistance(r),
                        _.setRolloffFactor(a);
                        var u = new h.hb;
                        u.add(_),
                        this._canvasRenderer.frontScene.add(u),
                        u.position.set(t.x, t.y, t.z),
                        _.play(),
                        _.source.onended = function() {
                            _.isPlaying = !1,
                            o._canvasRenderer.frontScene.remove(u)
                        }
                        ,
                        this._soundsLastTimePlayed[e] = Date.now()
                    }
                }
            }
            ,
            e.update = function(t) {
                Object(y.c)() === Pt.a.CONNECTED && (this.updateColorOverlays(),
                this._controls.update(t))
            }
            ,
            e.updateColorOverlays = function() {
                var t = Object(S.l)(this._controls.physicsStep.pos.x, this._controls.physicsStep.pos.y + this._controls.physicsStep.eyeHeight, this._controls.physicsStep.pos.z);
                Object(S.f)(t, l.a.BLOCK_SIZE);
                var e = this._controls.getVoxel(t.x, t.y, t.z)
                  , i = !1;
                if (Object(O.e)(e)) {
                    var n = Object(O.d)(e);
                    i = Object(x.e)(t.y, 1) <= n
                }
                var s = z.a[e].solid;
                this._waterOverlay.visible = i,
                this._blockClippingOverlay.visible = s && this._controls.playerState.physicsStep.controlState !== Z.a.NOCLIP,
                this._sceneRenderer.toxicFogRenderer.isInCircle(Object(J.e)(this._controls.physicsStep.pos.x, this._controls.physicsStep.pos.z)) ? (this._toxicFogOverlay.visible = !1,
                this._canvasRenderer.setClearColor(l.a.SKY_CLEAR_COLOR),
                this._sceneRenderer.scene.fog.color.set(l.a.SKY_CLEAR_COLOR)) : (this._toxicFogOverlay.visible = !0,
                this._canvasRenderer.setClearColor(l.a.SKY_STORM_COLOR),
                this._sceneRenderer.scene.fog.color.set(l.a.SKY_STORM_COLOR))
            }
            ,
            e.render = function(t, e) {
                if (this._initialized) {
                    0 === this._punchAnimationState && this._playerFistAction.time >= 1 / 3 && (this._playerFistAction.paused = !0,
                    this._punchAnimationState = 1),
                    this._animationMixer.update(t);
                    var i = e / l.a.PHYSICS_TIME_STEP;
                    this._currCrossHairGap = Object(x.c)(this._controls.getPrevAimSpread(), this._controls.getCurrAimSpread(), i),
                    this.renderCrosshair(t),
                    this.renderCrosshairHitMark(t),
                    this.renderDamageIndicators(t),
                    this._controls.render(t, e),
                    this.renderADS(t),
                    this.renderSwinging(t),
                    this.renderShovelAnimation(t),
                    this.renderBlockPlaceAnimation(t),
                    this.renderFOV(t);
                    var n = Date.now() - this._shovelAnimationStartTime <= this._shovelAnimationGracePeriod
                      , s = Date.now() - this._blockPlaceAnimationStartTime <= this._blockPlaceAnimationGracePeriod;
                    n || s || this.renderOscillation(t),
                    this.renderKickBack(t),
                    this._blockEditGuideRenderer.render(t, e),
                    this._weaponShellsRenderer.render(t, e)
                }
            }
            ,
            e.renderFOV = function(t) {
                if (this.isADSing()) {
                    var e = this._controls.getInventory().getSelected().item;
                    if (this._canvasRenderer.camera.fov != e.adsFOV) {
                        var i = Math.abs(e.adsFOV - this._canvasRenderer.camera.fov)
                          , n = e.adsFOV - this._canvasRenderer.camera.fov < 0 ? -1 : 1;
                        this._canvasRenderer.camera.fov += Math.min(10 * i * t, i) * n,
                        this._canvasRenderer.camera.updateProjectionMatrix()
                    }
                } else {
                    var s = Math.abs(l.a.PLAYER_WALKING_FOV - this._canvasRenderer.camera.fov)
                      , r = l.a.PLAYER_WALKING_FOV - this._canvasRenderer.camera.fov < 0 ? -1 : 1;
                    this._canvasRenderer.camera.fov += Math.min(10 * s * t, s) * r,
                    this._canvasRenderer.camera.updateProjectionMatrix()
                }
            }
            ,
            e.isADSing = function() {
                return Object(X.d)(this._controls.getLastInput(), this._controls.playerState)
            }
            ,
            e.renderADS = function(t) {
                var e = this._adsWrapper.position;
                if (this._adsOverrideTimer > 0)
                    this._adsOverrideTimer = this._adsOverrideTimer - t,
                    this._adsOverrideTimer <= 0 && (this._adsOverrideTimer = 0,
                    this._adsOverrideExpireCallback(),
                    this._adsOverrideExpireCallback = function() {}
                    );
                else if (this._controls.getControlState() === Z.a.RUNNING)
                    this._adsTargetPos = new h.Ob(0,-.5,0),
                    this._adsVel = 2;
                else if (this.isADSing()) {
                    var i = this._controls.getInventory().getSelected().item.getADSPosition();
                    this._adsTargetPos = new h.Ob(i.x,i.y,i.z),
                    this._adsVel = 1
                } else
                    this._adsTargetPos = new h.Ob(0,0,0),
                    this._adsVel = 1.5;
                var n = Object(y.n)();
                this.isADSing() && this._controls.getInventory().getSelected().item.useScope ? n || (d.a.emit(p.a.SET_SHOW_SCOPE, !0),
                this._adsWrapper.visible = !1,
                this.hideCrosshair()) : n && (d.a.emit(p.a.SET_SHOW_SCOPE, !1),
                this._adsWrapper.visible = !0,
                this.showCrosshair());
                var s = this._adsTargetPos.clone().sub(e)
                  , r = s.length()
                  , a = s.normalize().multiplyScalar(Math.min(r, this._adsVel * t));
                this._adsWrapper.position.set(e.x + a.x, e.y + a.y, e.z + a.z)
            }
            ,
            e.renderShovelAnimation = function(t) {
                var e = this._armAnimationWrapper.position;
                Date.now() - this._shovelAnimationStartTime <= this._shovelAnimationGracePeriod || Date.now() - this._shovelHitAnimationStartTime <= 300 ? (e.z = .1 * (Math.cos(20 * this._shovelAnimationRunningTime) - 1) + .1,
                void 0 !== this._itemModel && this._itemModel.rotation.x < Math.PI / 3 && (this._itemModel.rotation.x = Math.min(Math.PI / 3, this._itemModel.rotation.x + 10 * t)),
                this._shovelAnimationRunningTime += t) : (this._shovelAnimationRunningTime = 0,
                e.z > 0 ? e.z = Math.max(0, e.z - 10 * t) : e.z < 0 && (e.z = Math.min(0, e.z + 10 * t)),
                void 0 !== this._itemModel && this._itemModel.rotation.x > 0 && (this._itemModel.rotation.x = Math.max(0, this._itemModel.rotation.x - 10 * t)))
            }
            ,
            e.renderBlockPlaceAnimation = function(t) {
                var e = this._blockPlaceAnimationWrapper.position;
                if (Date.now() - this._blockPlaceAnimationStartTime <= this._blockPlaceAnimationGracePeriod / 2)
                    e.z = (Date.now() - this._blockPlaceAnimationStartTime) / (this._blockPlaceAnimationGracePeriod / 2) * -.2;
                else {
                    var i = 1 - Math.min(1, (Date.now() - this._blockPlaceAnimationStartTime - this._blockPlaceAnimationGracePeriod / 2) / (this._blockPlaceAnimationGracePeriod / 2));
                    e.z = -.2 * i
                }
            }
            ,
            e.renderOscillation = function(t) {
                var e = this._oscillationWrapper.position;
                e.add(this._oscillationVel.clone().multiplyScalar(t));
                e.lengthSq() > .2 * .2 && (e.normalize(),
                e.multiplyScalar(.2));
                var i = .008
                  , n = .009;
                this._controls.isMoving() && this._controls.getControlState() !== Z.a.CROUCHING && (i = .01,
                n = .04);
                var s = this._controls.isMoving();
                this._controls.getLastInput().secondaryAction ? (this._oscillationVel.y = 3 * -e.y,
                this._oscillationDir = 0) : !this._prevIsMoving && s || this._prevIsMoving && !s ? this._oscillationDir <= 0 ? (this._oscillationVel.y = -n,
                this._oscillationDir = -1) : (this._oscillationVel.y = n,
                this._oscillationDir = 1) : 0 === this._oscillationDir || e.y < -i && -1 === this._oscillationDir ? (this._oscillationVel.y = n,
                this._oscillationDir = 1) : e.y > i && 1 === this._oscillationDir && (this._oscillationVel.y = -n,
                this._oscillationDir = -1),
                this._prevIsMoving = s
            }
            ,
            e.renderSwinging = function(t) {
                var e = this._swingingWrapper.position;
                e.add(this._swingingVel.clone().multiplyScalar(t));
                e.lengthSq() > 9e-4 && (e.normalize(),
                e.multiplyScalar(.03));
                var i = this._controls.getBasePitchYaw()
                  , n = !0
                  , s = Object(x.b)(this._prevPitchYaw.x, i.x)
                  , r = Object(x.b)(this._prevPitchYaw.y, i.y)
                  , a = this._controls.isJumping()
                  , o = this._controls.isOnGround();
                Math.abs(s) > 0 && (n = !1,
                this._swingingVel.y = .7 * s),
                Math.abs(r) > 0 && (n = !1,
                this._swingingVel.x = .7 * -r),
                !this._prevIsJumping && a || !this._prevIsOnGround && o ? (n = !1,
                this._swingingVel.y = -.5,
                this._jumpSwayTimer = .1) : this._jumpSwayTimer > 0 && (n = !1,
                this._swingingVel.y = -.6,
                this._jumpSwayTimer -= t,
                this._jumpSwayTimer = Math.max(0, this._jumpSwayTimer)),
                n && (this._swingingVel.x = 5 * -e.x,
                this._swingingVel.y = 5 * -e.y),
                this._prevIsJumping = a,
                this._prevIsOnGround = o,
                this._prevPitchYaw = i
            }
            ,
            e.kickBack = function(t) {
                this._kickBackWrapper.position.set(0, 0, 0),
                this._kickBackTargetPos.set(0, 0, t),
                this._kickBackVel = .5,
                this._muzzleFlash.material.opacity = .9,
                this._muzzleFlash.material.rotation = Math.random() * Math.PI * 2
            }
            ,
            e.renderKickBack = function(t) {
                var e = this._kickBackWrapper.position
                  , i = this._kickBackTargetPos.clone().sub(e)
                  , n = i.length();
                n < 1e-4 && (this._kickBackTargetPos.set(0, 0, 0),
                this._kickBackVel = .5),
                this._muzzleFlash.material.opacity = Math.max(0, this._muzzleFlash.material.opacity - 20 * t);
                var s = i.normalize().multiplyScalar(Math.min(n, this._kickBackVel * t));
                this._kickBackWrapper.position.set(e.x + s.x, e.y + s.y, e.z + s.z)
            }
            ,
            e.getRightHand = function() {
                return this._handModel.getObjectByName("Bone_Right_Hand")
            }
            ,
            e.generateItemMesh = function() {
                var t = o()(r.a.mark((function t(e) {
                    var i;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this._itemModel && (this.getRightHand().remove(this._itemModel),
                                this._itemModel.remove(this._weaponShellOriginIndicator),
                                k.a.cleanUpModelExcludeMaterial(this._itemModel)),
                                t.next = 3,
                                e.generateFirstPersonModel(!1);
                            case 3:
                                this._itemModel = t.sent,
                                k.a.removeFog(this._itemModel),
                                Object(nt.f)(e.id) && (i = e,
                                this._itemModel.add(this._weaponShellOriginIndicator),
                                this._weaponShellOriginIndicator.position.set(i.shellModelOrigin.x, i.shellModelOrigin.y, i.shellModelOrigin.z)),
                                Object(nt.e)(e.id) || Object(nt.g)(e.id) ? (this._playerHoldBlockAction.setEffectiveWeight(1),
                                this._playerHoldItemAction.setEffectiveWeight(0),
                                this._playerFistAction.setEffectiveWeight(0)) : e.id === ct.a.EMPTY ? (this._playerHoldBlockAction.setEffectiveWeight(0),
                                this._playerHoldItemAction.setEffectiveWeight(0),
                                this._playerFistAction.setEffectiveWeight(1)) : (this._playerHoldBlockAction.setEffectiveWeight(0),
                                this._playerHoldItemAction.setEffectiveWeight(1),
                                this._playerFistAction.setEffectiveWeight(0)),
                                this.getRightHand().add(this._itemModel);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            e.addBullet = function() {
                var t = Object(S.l)(this._controls.canvasRenderer.camera.position.x, this._controls.canvasRenderer.camera.position.y, this._controls.canvasRenderer.camera.position.z);
                this._controls.sceneRenderer.bulletsRenderer.addBullet(t, this._controls.getCameraDir(), this._currCrossHairGap)
            }
            ,
            e.addShell = function(t) {
                var e = new h.Ob;
                this._weaponShellOriginIndicator.getWorldPosition(e),
                this._weaponShellsRenderer.addShell(e, this._controls.getCameraDir(), t)
            }
            ,
            e.hideHands = function() {
                this._blockPlaceAnimationWrapper.visible = !1
            }
            ,
            e.showHands = function() {
                this._blockPlaceAnimationWrapper.visible = !0
            }
            ,
            _()(t, [{
                key: "controls",
                get: function() {
                    return this._controls
                }
            }, {
                key: "muzzleFlash",
                get: function() {
                    return this._muzzleFlash
                }
            }, {
                key: "blockEditGuideRenderer",
                get: function() {
                    return this._blockEditGuideRenderer
                }
            }, {
                key: "weaponShellsRenderer",
                get: function() {
                    return this._weaponShellsRenderer
                }
            }, {
                key: "team",
                get: function() {
                    return this._team
                },
                set: function(t) {
                    this._team = t,
                    this._handModel.traverse((function(e) {
                        e.material && "Arms" === e.name && (t === kt.a.GREEN ? e.material.map = k.a.soldierGreenTexture : t === kt.a.RED ? e.material.map = k.a.soldierRedTexture : t === kt.a.BLUE && (e.material.map = k.a.soldierBlueTexture))
                    }
                    ))
                }
            }]),
            t
        }();
        function qt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Qt(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return Qt(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function Qt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var Xt = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, i, St.ITEM, e) || this)._itemModel = void 0,
                n._itemModelOutline = void 0,
                n._item = void 0,
                n._itemCount = void 0,
                n._itemSkinType = void 0,
                n._itemSkinSeed = void 0,
                n._stableY = void 0,
                n._time = void 0,
                n._itemPickupTarget = void 0,
                n._stableY = 0,
                n._time = Math.random() * Math.PI * 2,
                n._itemCount = 1,
                n._itemPickupTarget = -1,
                n._itemSkinType = Tt.a.DEFAULT,
                n._itemSkinSeed = 0,
                n
            }
            it()(e, t);
            var i = e.prototype;
            return i.onUpdateMetadata = function(t) {
                for (var e, i = qt(t); !(e = i()).done; ) {
                    var n = e.value;
                    switch (n.metadataType) {
                    case gt.ITEM_TYPE:
                        this.setItemType(n.value);
                        break;
                    case gt.ITEM_PICKUP_TARGET:
                        this._itemPickupTarget = n.value;
                        break;
                    case gt.ITEM_COUNT:
                        this._itemCount = n.value;
                        break;
                    case gt.ITEM_OWNER_NAME:
                        void 0 !== this._item && (this._item.ownerName = n.value);
                        break;
                    case gt.ITEM_SKIN_TYPE:
                        this._itemSkinType = n.value;
                        break;
                    case gt.ITEM_SKIN_SEED:
                        this._itemSkinSeed = n.value
                    }
                }
            }
            ,
            i.render = function(t, e) {
                if (this._itemPickupTarget >= 0) {
                    var i = !0
                      , n = Object(S.l)(0, 0, 0);
                    if (this._itemPickupTarget === Object(y.a)())
                        n = Object(S.b)(this.entitiesRenderer.sceneRenderer.controlsRenderer.controls.physicsStep.pos);
                    else {
                        var s = this.entitiesRenderer.getEntity(this._itemPickupTarget);
                        void 0 === s ? (this.entitiesRenderer.removeEntity(this.id),
                        i = !1) : n = Object(S.l)(s.object.position.x, s.object.position.y, s.object.position.z)
                    }
                    if (i) {
                        n.y += l.a.BLOCK_SIZE;
                        var r = Object(S.l)(this.object.position.x, this.object.position.y, this.object.position.z);
                        if (Object(S.e)(r, n) < .2 * .2 || Object(S.e)(r, n) > 25)
                            this.entitiesRenderer.removeEntity(this.id);
                        else {
                            var a = Object(S.l)(n.x - this.object.position.x, n.y - this.object.position.y, n.z - this.object.position.z);
                            Object(S.j)(a),
                            Object(S.i)(a, 10 * t),
                            this.object.position.set(r.x + a.x, r.y + a.y, r.z + a.z),
                            this.object.updateMatrix()
                        }
                    }
                } else
                    void 0 !== this._itemModel && (this._time += t,
                    this._itemModel.position.set(0, Math.cos(this._time) * (l.a.BLOCK_SIZE / 32), 0),
                    this._itemModel.updateMatrix(),
                    this.object.updateMatrix())
            }
            ,
            i.cleanUp = function() {
                void 0 !== this._itemModel && (this.object.remove(this._itemModel),
                k.a.cleanUpModelExcludeMaterial(this._itemModel),
                this._itemModel = void 0),
                void 0 !== this._itemModelOutline && (this.object.remove(this._itemModelOutline),
                k.a.cleanUpModelExcludeMaterial(this._itemModelOutline),
                this._itemModelOutline = void 0)
            }
            ,
            i.setItemType = function() {
                var t = o()(r.a.mark((function t(e) {
                    var i, n, s, a;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return (i = Object(nt.c)(e)).setSkin(this._itemSkinType, this._itemSkinSeed),
                                t.next = 4,
                                i.generateEntityModel(!1);
                            case 4:
                                n = t.sent,
                                k.a.removeFog(n),
                                this.cleanUp(),
                                this._item = i,
                                this._itemModel = n,
                                this.object.add(this._itemModel),
                                s = new h.Y({
                                    map: k.a.itemGlowTexture,
                                    color: Object(xt.b)(this._item.itemTier),
                                    transparent: !0,
                                    opacity: .9,
                                    side: h.r,
                                    depthWrite: !1,
                                    fog: !1
                                }),
                                a = new h.kb(1,1,1,1),
                                this._itemModelOutline = new h.X(a,s),
                                this._itemModelOutline.position.set(this._itemModel.position.x, this._itemModel.position.y - .08, this._itemModel.position.z),
                                this._itemModelOutline.scale.set(.5, .5, .5),
                                this._itemModelOutline.rotation.set(-Math.PI / 2, 0, 0),
                                this.object.add(this._itemModelOutline);
                            case 17:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            _()(e, [{
                key: "item",
                get: function() {
                    return this._item
                }
            }, {
                key: "count",
                get: function() {
                    return this._itemCount
                }
            }, {
                key: "itemPickupTarget",
                get: function() {
                    return this._itemPickupTarget
                }
            }, {
                key: "position",
                set: function(t) {
                    this._stableY = t.y,
                    this.object.position.set(t.x, t.y, t.z),
                    this.object.updateMatrix()
                }
            }, {
                key: "pitchYaw",
                set: function(t) {}
            }]),
            e
        }(pt);
        function Jt(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return $t(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return $t(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function $t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var te = function(t) {
            function e(e, i) {
                var n, s;
                (s = t.call(this, i, St.BOMB, e) || this)._mesh = void 0,
                s._bombMaterial = void 0,
                s._startTime = void 0,
                s._detonationTime = void 0,
                s._detonationStart = void 0,
                s._firstRenderAfterDetonation = void 0;
                var r = {
                    origin: Object(S.l)(0, 0, 0),
                    blocks: (n = {},
                    n[b(0, 0, 0)] = C.a.BOMB,
                    n)
                }
                  , a = Gt(r)
                  , o = a.indices
                  , c = a.vertices
                  , _ = a.uvs
                  , l = a.aos
                  , u = new h.l;
                u.setAttribute("position", new h.v(c,3)),
                u.setIndex(new h.Lb(o,1)),
                u.setAttribute("ao", new h.Mb(l,1,!0)),
                u.setAttribute("realUv", new h.Mb(_,4)),
                s._bombMaterial = new h.wb({
                    transparent: !1,
                    uniforms: {
                        map: {
                            value: k.a.blockTexture
                        },
                        blendValue: {
                            value: 0
                        }
                    },
                    vertexShader: "\n                attribute vec4 realUv;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vRealUv = realUv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n                uniform float blendValue;\n                varying vec4 vRealUv;\n                void main() {\n                    vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0);\n                    \n                    float tilePosX = max(0.05, min(0.95, fract(vRealUv.z)));\n                    float tilePosY = max(0.05, min(0.95, fract(vRealUv.w)));\n                    vec2 uv = vec2(vRealUv.x * (1.0 / 8.0) + tilePosX * (1.0 / 8.0), vRealUv.y * (1.0 / 8.0) + tilePosY * (1.0 / 8.0));\n    \n                    vec4 texelColor = texture2D(map, uv);\n                    texelColor = mapTexelToLinear(texelColor);\n                    diffuseColor *= texelColor.rgba;\n                    diffuseColor = mix(diffuseColor, vec4(1.0, 1.0, 1.0, 1.0), blendValue);\n    \n                    gl_FragColor = diffuseColor;\n                }\n            ",
                    fog: !1
                });
                var d = new h.X(u,s._bombMaterial);
                return s.object.add(d),
                s._detonationTime = 0,
                s._detonationStart = !1,
                s._firstRenderAfterDetonation = !1,
                s._startTime = Date.now(),
                s
            }
            it()(e, t);
            var i = e.prototype;
            return i.onUpdateMetadata = function(t) {
                for (var e, i = Jt(t); !(e = i()).done; ) {
                    var n = e.value;
                    switch (n.metadataType) {
                    case gt.BOMB_DETONATION_TIME:
                        this._detonationStart = !0,
                        this._firstRenderAfterDetonation = !0,
                        this._startTime = Date.now(),
                        this._detonationTime = 1e3 * Object(F.d)(n.value)
                    }
                }
            }
            ,
            i.render = function(t, e) {
                if (this._detonationStart) {
                    !this._firstRenderAfterDetonation || 0 === this.object.position.x && 0 === this.object.position.y && 0 === this.object.position.z || (this._firstRenderAfterDetonation = !1,
                    this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.BOMB_FUSE));
                    var i = Date.now() - this._startTime;
                    this._bombMaterial.uniforms.blendValue.value = Math.sin(i / 1e3 * 10) / 2 + .5;
                    var n = this._detonationTime - 100;
                    if (i > n) {
                        1 === this.object.scale.x && this.entitiesRenderer.sceneRenderer.controlsRenderer.playPositionalSound(this.object.position, _t.a.BOMB_EXPLOSION);
                        var s = (i - n) / 100 * .5 + 1;
                        this.object.scale.set(s, s, s),
                        this.object.updateMatrix()
                    }
                }
            }
            ,
            i.cleanUp = function() {
                void 0 !== this._mesh && (this.object.remove(this._mesh),
                k.a.cleanUpModelExcludeMaterial(this._mesh),
                this._mesh = void 0)
            }
            ,
            _()(e, [{
                key: "position",
                set: function(t) {
                    this.object.position.set(t.x, t.y, t.z),
                    this.object.updateMatrix()
                }
            }, {
                key: "pitchYaw",
                set: function(t) {}
            }]),
            e
        }(pt)
          , ee = i(158);
        function ie(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ne(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return ne(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function ne(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var se, re = function(t) {
            function e(e, i) {
                var n;
                (n = t.call(this, i, St.SPRAY, e) || this)._spray = void 0;
                var s = new h.kb
                  , r = new h.Y({
                    transparent: !0,
                    depthWrite: !1
                });
                return n._spray = new h.X(s,r),
                n.object.add(n._spray),
                n
            }
            it()(e, t);
            var i = e.prototype;
            return i.onUpdateMetadata = function(t) {
                for (var e, i = ie(t); !(e = i()).done; ) {
                    var n = e.value;
                    switch (n.metadataType) {
                    case gt.SPRAY_ROTATION:
                        var s = n.value;
                        this.object.rotateOnWorldAxis(new h.Ob(0,1,0), s);
                        break;
                    case gt.SPRAY_TYPE:
                        var r = void 0;
                        if (n.value === ee.a.VOXIOM_LOGO && (r = k.a.getSprayTexture(ee.a.VOXIOM_LOGO)),
                        r) {
                            this._spray.material.map = r,
                            this._spray.material.needsUpdate = !0;
                            var a = r.image.width
                              , o = r.image.height;
                            a > o ? this._spray.scale.set(.8, o / a * .8, 1) : this._spray.scale.set(a / o * .8, .8, 1)
                        }
                    }
                }
            }
            ,
            i.render = function(t, e) {}
            ,
            i.cleanUp = function() {
                k.a.cleanUpModelExcludeMaterial(this._spray)
            }
            ,
            _()(e, [{
                key: "position",
                set: function(t) {
                    this.object.position.set(t.x, t.y, t.z),
                    this.object.updateMatrix()
                }
            }, {
                key: "pitchYaw",
                set: function(t) {
                    var e = Object(J.d)(t)
                      , i = (new h.W).lookAt(new h.Ob(e.x,e.y,e.z), new h.Ob(0,0,0), new h.Ob(0,1,0));
                    this._spray.setRotationFromMatrix(i)
                }
            }]),
            e
        }(pt), ae = function() {
            function t(t) {
                var e = this;
                this._sceneRenderer = t,
                this._wrapper = void 0,
                this._worldUpdates = void 0,
                this._entities = void 0,
                this.onWorldUpdateReceived = function(t) {
                    e._worldUpdates.push(t)
                }
                ,
                this.onEntityCreate = function(t, i) {
                    e.spawnEntity(t, i)
                }
                ,
                this.onEntityDestroy = function(t) {
                    e.removeEntity(t)
                }
                ,
                this.onEntityAction = function(t, i) {
                    e.hasEntity(t) ? e.getEntity(t).onEntityAction(i) : console.error("Invalid entity action command!")
                }
                ,
                this.onEntityUpdateMetadata = function(t, i) {
                    var n = e.getEntity(t);
                    void 0 !== n && n.onUpdateMetadata(i)
                }
                ,
                this.onEntityDamage = function(t, i, n, s, r, a) {
                    var o = e._entities[t];
                    void 0 !== o && o.onEntityDamage(i, n, r)
                }
                ,
                this.onRespawn = function(t, i, n) {
                    if (t !== Object(y.a)()) {
                        var s = e.getEntity(t);
                        if (void 0 !== s) {
                            var r = s;
                            r.previousLerpPosition = i,
                            r.previousLerpDirection = n,
                            r.position = i,
                            r.pitchYaw = n,
                            r.firstSetPos = !0,
                            r.show()
                        }
                    } else
                        e._worldUpdates = []
                }
                ,
                this.update = function(t) {
                    for (var i = 0, n = Object.values(e._entities); i < n.length; i++) {
                        n[i].update(t)
                    }
                }
                ,
                this._wrapper = new h.hb,
                this._worldUpdates = [],
                this._entities = {},
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                d.a.on(p.a.WORLD_UPDATE_RECEIVED, this.onWorldUpdateReceived),
                d.a.on(p.a.ENTITY_CREATE, this.onEntityCreate),
                d.a.on(p.a.ENTITY_ACTION, this.onEntityAction),
                d.a.on(p.a.ENTITY_DESTROY, this.onEntityDestroy),
                d.a.on(p.a.ENTITY_UPDATE_METADATAS, this.onEntityUpdateMetadata),
                d.a.on(p.a.ENTITY_DAMAGE, this.onEntityDamage),
                d.a.on(p.a.RESPAWN, this.onRespawn)
            }
            ,
            e.unbindEvents = function() {
                d.a.off(p.a.WORLD_UPDATE_RECEIVED, this.onWorldUpdateReceived),
                d.a.off(p.a.ENTITY_CREATE, this.onEntityCreate),
                d.a.off(p.a.ENTITY_ACTION, this.onEntityAction),
                d.a.off(p.a.ENTITY_DESTROY, this.onEntityDestroy),
                d.a.off(p.a.ENTITY_UPDATE_METADATAS, this.onEntityUpdateMetadata),
                d.a.off(p.a.ENTITY_DAMAGE, this.onEntityDamage),
                d.a.off(p.a.RESPAWN, this.onRespawn)
            }
            ,
            e.cleanUp = function() {
                this.unbindEvents();
                for (var t = 0, e = Object.values(this._entities); t < e.length; t++) {
                    e[t].cleanUp()
                }
            }
            ,
            e.render = function(t, e) {
                for (var i, n, s = Date.now() - 100; this._worldUpdates.length >= 2 && s >= this._worldUpdates[0].clientTimestamp; ) {
                    i = this._worldUpdates[0];
                    for (var r = (n = this._worldUpdates[1]).clientTimestamp - s, a = n.clientTimestamp - i.clientTimestamp, o = n.clientTimestamp <= s ? 0 : r / a, h = 0, c = Object.values(this._entities); h < c.length; h++) {
                        var _ = c[h]
                          , l = i.entitySnapshots.get(_.id)
                          , u = n.entitySnapshots.get(_.id);
                        _.processSnapshots(l, u, o)
                    }
                    if (!(this._worldUpdates.length > 2 && n.clientTimestamp <= s))
                        break;
                    this._worldUpdates.shift()
                }
                for (var d = 0, p = Object.values(this._entities); d < p.length; d++) {
                    p[d].render(t, e)
                }
            }
            ,
            e.getInterpolatedWorldTick = function() {
                if (0 === this._worldUpdates.length)
                    return -1;
                for (var t = Date.now() - 100, e = 0, i = this._worldUpdates.length - 1, n = -1; e <= i; ) {
                    var s = Math.floor((e + i) / 2);
                    this._worldUpdates[s].clientTimestamp > t ? i = s - 1 : (n = s,
                    e = s + 1)
                }
                if (-1 === n)
                    return this._worldUpdates[0].tick;
                var r = n
                  , a = r < this._worldUpdates.length - 1 ? r + 1 : r
                  , o = r === a ? 0 : (t - this._worldUpdates[r].clientTimestamp) / (this._worldUpdates[a].clientTimestamp - this._worldUpdates[r].clientTimestamp);
                return Object(x.c)(this._worldUpdates[r].tick, this._worldUpdates[a].tick, o)
            }
            ,
            e.spawnEntity = function(t, e) {
                if (this.hasEntity(t))
                    console.error("Duplicate entity spawn command!", t, St[e]);
                else
                    switch (e) {
                    case St.PLAYER:
                        var i = new Rt(this,t);
                        this._wrapper.add(i.object),
                        this._entities[t] = i;
                        break;
                    case St.ITEM:
                        var n = new Xt(this,t);
                        this._wrapper.add(n.object),
                        this._entities[t] = n;
                        break;
                    case St.SPRAY:
                        var s = new re(this,t);
                        this._wrapper.add(s.object),
                        this._entities[t] = s;
                        break;
                    case St.BOMB:
                        var r = new te(this,t);
                        this._wrapper.add(r.object),
                        this._entities[t] = r
                    }
            }
            ,
            e.removeEntity = function(t) {
                if (this.hasEntity(t)) {
                    var e = this.getEntity(t);
                    this._wrapper.remove(e.object),
                    e.cleanUp(),
                    this.deleteEntity(t)
                } else
                    console.error("Invalid entity remove command!", t)
            }
            ,
            e.getEntity = function(t) {
                return this._entities[t]
            }
            ,
            e.deleteEntity = function(t) {
                delete this._entities[t]
            }
            ,
            e.hasEntity = function(t) {
                return void 0 !== this._entities[t]
            }
            ,
            e.getEntities = function() {
                return Object.values(this._entities)
            }
            ,
            _()(t, [{
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }, {
                key: "sceneRenderer",
                get: function() {
                    return this._sceneRenderer
                }
            }]),
            t
        }(), oe = function() {
            function t(t) {
                this._sceneRenderer = t,
                this._wrapper = void 0,
                this._bullets = void 0,
                this.update = function(t) {}
                ,
                this._wrapper = new h.hb,
                this._bullets = [],
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {}
            ,
            e.unbindEvents = function() {}
            ,
            e.addBullet = function(t, e, i) {
                void 0 === i && (i = 0);
                var n = new h.j(.05,.05,.3)
                  , s = new h.Y({
                    color: 16775068
                })
                  , r = new h.X(n,s);
                Object(S.j)(e),
                r.position.set(t.x + 1 * e.x, t.y + 1 * e.y, t.z + 1 * e.z);
                var a = Math.random() * i
                  , o = Math.random() * Math.PI * 2
                  , c = Object(S.l)(Math.cos(o) * a, Math.sin(o) * a, l.a.PLAYER_CROSSHAIR_PLANE_DISTANCE)
                  , _ = new h.qb;
                _.setFromUnitVectors(new h.Ob(0,0,1), new h.Ob(e.x,e.y,e.z));
                var u = new h.Ob(c.x,c.y,c.z).applyQuaternion(_);
                r.rotation.setFromQuaternion(_);
                var d = Object(S.l)(u.x, u.y, u.z);
                Object(S.j)(d);
                var p = Object(S.b)(d);
                Object(S.i)(p, 100);
                var v = Object(S.b)(t);
                Object(S.f)(v, l.a.BLOCK_SIZE);
                var y = this._sceneRenderer.controlsRenderer.controls.voxelRaycast(v, d, 1e3)
                  , m = 1e6;
                y.hit && (Object(S.i)(y.position, l.a.BLOCK_SIZE),
                m = Object(S.e)(y.position, t)),
                this._wrapper.add(r),
                this._bullets.push({
                    mesh: r,
                    origin: t,
                    velocity: p,
                    maxDistSqr: m
                })
            }
            ,
            e.cleanUp = function() {
                this.unbindEvents();
                for (var t = 0; t < this._bullets.length; t++)
                    this._wrapper.remove(this._bullets[t].mesh),
                    this._bullets[t].mesh.geometry.dispose(),
                    this._bullets[t].mesh.material.dispose();
                this._bullets = []
            }
            ,
            e.render = function(t, e) {
                for (var i = 0; i < this._bullets.length; i++) {
                    var n = this._bullets[i]
                      , s = n.mesh.position;
                    n.mesh.position.set(s.x + n.velocity.x * t, s.y + n.velocity.y * t, s.z + n.velocity.z * t),
                    s.distanceToSquared(new h.Ob(n.origin.x,n.origin.y,n.origin.z)) > n.maxDistSqr && (this._wrapper.remove(n.mesh),
                    n.mesh.geometry.dispose(),
                    n.mesh.material.dispose(),
                    this._bullets[i] = this._bullets[this._bullets.length - 1],
                    this._bullets.pop(),
                    --i)
                }
            }
            ,
            _()(t, [{
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }]),
            t
        }(), he = function() {
            function t(t) {
                var e = this;
                this._sceneRenderer = t,
                this._wrapper = void 0,
                this._lastSyncTime = void 0,
                this._updatePosCounter = void 0,
                this._lerpedPosition = void 0,
                this._lerpedRadius = void 0,
                this._currPosition = void 0,
                this._currRadius = void 0,
                this._nextPosition = void 0,
                this._nextRadius = void 0,
                this._prepTime = void 0,
                this._shrinkTime = void 0,
                this._currentCircleMesh = void 0,
                this.onGameJoin = function(t, i, n, s, r, a, o) {
                    for (var c = new Float32Array(768), _ = new Uint16Array(384), l = new Float32Array(512), u = 0; u < 64; u++) {
                        var d = 1 * Math.cos(u / 64 * Math.PI * 2)
                          , p = 1 * Math.sin(u / 64 * Math.PI * 2)
                          , v = 1 * Math.cos((u + 1) / 64 * Math.PI * 2)
                          , S = 1 * Math.sin((u + 1) / 64 * Math.PI * 2);
                        c[12 * u + 0] = d,
                        c[12 * u + 1] = 0,
                        c[12 * u + 2] = p,
                        c[12 * u + 3] = d,
                        c[12 * u + 4] = 150,
                        c[12 * u + 5] = p,
                        c[12 * u + 6] = v,
                        c[12 * u + 7] = 0,
                        c[12 * u + 8] = S,
                        c[12 * u + 9] = v,
                        c[12 * u + 10] = 150,
                        c[12 * u + 11] = S,
                        l[8 * u + 0] = 0,
                        l[8 * u + 1] = 0,
                        l[8 * u + 2] = 0,
                        l[8 * u + 3] = 300,
                        l[8 * u + 4] = 2,
                        l[8 * u + 5] = 0,
                        l[8 * u + 6] = 2,
                        l[8 * u + 7] = 300,
                        _[6 * u + 0] = 4 * u,
                        _[6 * u + 1] = 4 * u + 1,
                        _[6 * u + 2] = 4 * u + 2,
                        _[6 * u + 3] = 4 * u + 2,
                        _[6 * u + 4] = 4 * u + 1,
                        _[6 * u + 5] = 4 * u + 3
                    }
                    var y = new h.l;
                    y.setAttribute("position", new h.v(c,3)),
                    y.setIndex(new h.Lb(_,1)),
                    y.setAttribute("uv", new h.v(l,2));
                    var m = new h.Y({
                        map: k.a.toxicCircleTexture,
                        transparent: !0,
                        opacity: .6,
                        side: h.r
                    });
                    e._currentCircleMesh = new h.X(y,m),
                    e._wrapper.add(e._currentCircleMesh)
                }
                ,
                this.onToxicCircleInfoSync = function(t, i, n, s, r, a) {
                    e._currPosition = t,
                    e._currRadius = i,
                    e._lerpedPosition = Object(J.a)(t),
                    e._lerpedRadius = i,
                    e._nextPosition = n,
                    e._nextRadius = s,
                    e._prepTime = r,
                    e._shrinkTime = a,
                    e._lastSyncTime = Date.now()
                }
                ,
                this.update = function(t) {
                    if (++e._updatePosCounter % Math.floor(Object(F.c)(.05)) == 0) {
                        var i = Date.now();
                        Math.max(0, e._prepTime - (i - e._lastSyncTime) / 1e3),
                        Math.max(0, e._shrinkTime + e._prepTime - (i - e._lastSyncTime) / 1e3);
                        if (i - e._lastSyncTime >= 1e3 * e._prepTime) {
                            var n = Math.max(0, Math.min(1, (i - e._lastSyncTime - 1e3 * e._prepTime) / (1e3 * e._shrinkTime)));
                            e._lerpedPosition.x = Object(x.c)(e._currPosition.x, e._nextPosition.x, n),
                            e._lerpedPosition.y = Object(x.c)(e._currPosition.y, e._nextPosition.y, n),
                            e._lerpedRadius = Object(x.c)(e._currRadius, e._nextRadius, n),
                            void 0 !== e._currentCircleMesh && (e._currentCircleMesh.scale.set(e._lerpedRadius, 1, e._lerpedRadius),
                            e._currentCircleMesh.position.set(e._lerpedPosition.x, 0, e._lerpedPosition.y))
                        }
                    }
                }
                ,
                this._wrapper = new h.hb,
                this._lerpedPosition = Object(J.e)(0, 0),
                this._lerpedRadius = 1200,
                this._currPosition = Object(J.e)(0, 0),
                this._currRadius = 1200,
                this._nextPosition = Object(J.e)(0, 0),
                this._nextRadius = 1200,
                this._prepTime = 0,
                this._shrinkTime = 0,
                this._lastSyncTime = 0,
                this._updatePosCounter = 0,
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                d.a.on(p.a.GAME_JOIN, this.onGameJoin),
                d.a.on(p.a.TOXIC_CIRCLE_INFO_SYNC, this.onToxicCircleInfoSync)
            }
            ,
            e.unbindEvents = function() {
                d.a.off(p.a.GAME_JOIN, this.onGameJoin),
                d.a.off(p.a.TOXIC_CIRCLE_INFO_SYNC, this.onToxicCircleInfoSync)
            }
            ,
            e.isInCircle = function(t) {
                return Object(J.b)(t, this._lerpedPosition) <= this._lerpedRadius * this._lerpedRadius
            }
            ,
            e.render = function(t, e) {}
            ,
            _()(t, [{
                key: "currPosition",
                get: function() {
                    return this._lerpedPosition
                }
            }, {
                key: "currRadius",
                get: function() {
                    return this._lerpedRadius
                }
            }, {
                key: "nextPosition",
                get: function() {
                    return this._nextPosition
                }
            }, {
                key: "nextRadius",
                get: function() {
                    return this._nextRadius
                }
            }, {
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }]),
            t
        }(), ce = function() {
            function t(t) {
                var e = this;
                this._sceneRenderer = t,
                this._wrapper = void 0,
                this._miniMap = void 0,
                this._minimapMat = void 0,
                this._mapTexture = void 0,
                this._isTabMapVisible = void 0,
                this._fullMap = void 0,
                this._fullMapMat = void 0,
                this._fullMapPlayerCursor = void 0,
                this.onMinimapData = function(t) {
                    var i = new Image;
                    i.src = "data:image/png;base64," + t,
                    i.onload = function() {
                        e._mapTexture.image = i,
                        e._mapTexture.needsUpdate = !0
                    }
                }
                ,
                this.unitToMapPercent = function(t) {
                    return t / ((e._sceneRenderer.terrainRenderer.chunkStorageManager.maxChunkPos.x - e._sceneRenderer.terrainRenderer.chunkStorageManager.minChunkPos.x + 1) * l.a.CHUNK_SIZE * l.a.BLOCK_SIZE) * 100
                }
                ,
                this.coordsToMapPercent = function(t) {
                    return e.unitToMapPercent(t - e._sceneRenderer.terrainRenderer.chunkStorageManager.minChunkPos.x * l.a.CHUNK_SIZE * l.a.BLOCK_SIZE)
                }
                ,
                this.update = function(t) {
                    var i = e._sceneRenderer.controlsRenderer.controls.playerState;
                    if (void 0 !== i) {
                        var n = Object(y.o)();
                        n !== e._isTabMapVisible && (e._isTabMapVisible = n,
                        e._fullMap.visible = e._isTabMapVisible,
                        e._fullMapPlayerCursor.visible = e._isTabMapVisible,
                        e._miniMap.visible = !e._isTabMapVisible);
                        var s = e._sceneRenderer.controlsRenderer.controls.getPitchYaw().y
                          , r = e.coordsToMapPercent(i.physicsStep.pos.x) / 100
                          , a = 1 - e.coordsToMapPercent(i.physicsStep.pos.z) / 100
                          , o = e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.currPosition.x) / 100
                          , h = 1 - e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.currPosition.y) / 100
                          , c = e.unitToMapPercent(e._sceneRenderer.toxicFogRenderer.currRadius) / 100
                          , _ = e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.nextPosition.x) / 100
                          , l = 1 - e.coordsToMapPercent(e._sceneRenderer.toxicFogRenderer.nextPosition.y) / 100
                          , u = e.unitToMapPercent(e._sceneRenderer.toxicFogRenderer.nextRadius) / 100;
                        e._isTabMapVisible ? (e._fullMapMat.uniforms.currCirclePos.value.set(o, h),
                        e._fullMapMat.uniforms.currCircleRadius.value = c,
                        e._fullMapMat.uniforms.nextCirclePos.value.set(_, l),
                        e._fullMapMat.uniforms.nextCircleRadius.value = u) : (e._minimapMat.uniforms.currCirclePos.value.set(o, h),
                        e._minimapMat.uniforms.currCircleRadius.value = c,
                        e._minimapMat.uniforms.nextCirclePos.value.set(_, l),
                        e._minimapMat.uniforms.nextCircleRadius.value = u,
                        e._minimapMat.uniforms.playerPos.value.set(r, a),
                        e._minimapMat.uniforms.playerDir.value = s)
                    }
                }
                ,
                this._wrapper = new h.hb,
                this._isTabMapVisible = !1,
                this._mapTexture = new h.Hb;
                var i = new h.kb(1,1);
                this._minimapMat = new h.wb({
                    uniforms: {
                        map: {
                            value: this._mapTexture
                        },
                        playerPos: {
                            value: new h.Nb
                        },
                        playerDir: {
                            value: 0
                        },
                        currCirclePos: {
                            value: new h.Nb
                        },
                        currCircleRadius: {
                            value: 0
                        },
                        nextCirclePos: {
                            value: new h.Nb
                        },
                        nextCircleRadius: {
                            value: 0
                        }
                    },
                    vertexShader: "\n                varying vec2 vUv;\n\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vUv = uv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n                uniform vec2 playerPos;\n                uniform float playerDir;\n\n                uniform vec2 currCirclePos;\n                uniform float currCircleRadius;\n\n                uniform vec2 nextCirclePos;\n                uniform float nextCircleRadius;\n\n                varying vec2 vUv;\n\n                float inverselerpstep(float a, float b, float x) {\n                    return step(0.9999, (x - a) / (b - a));\n                }\n\n                void main() {\n                    vec4 diffuseColor = vec4(0.204, 0.549, 0.925, 1.0);\n\n                    float circleOutlineWidth = 0.001;\n                    float scale = 6.0;\n                    mat2 rotMat = mat2(cos(playerDir), sin(playerDir), -sin(playerDir), cos(playerDir)); \n\n                    // scale\n                    vec2 mapUv = vec2(\n                        (vUv.x - 0.5) / scale,\n                        (vUv.y - 0.5) / scale\n                    );\n\n                    // rotate\n                    mapUv = rotMat * mapUv;\n\n                    // translate\n                    mapUv.x += playerPos.x;\n                    mapUv.y += playerPos.y;\n\n                    float currCircleDx = mapUv.x - currCirclePos.x;\n                    float currCircleDy = mapUv.y - currCirclePos.y;\n                    float currCircleDist = sqrt(currCircleDx * currCircleDx + currCircleDy * currCircleDy);\n\n                    float nextCircleDx = mapUv.x - nextCirclePos.x;\n                    float nextCircleDy = mapUv.y - nextCirclePos.y;\n                    float nextCircleDist = sqrt(nextCircleDx * nextCircleDx + nextCircleDy * nextCircleDy);\n\n                    vec4 mapColor = texture2D(map, mapUv);\n                    \n                    float currCircle = smoothstep(0.0, circleOutlineWidth, abs(currCircleDist - currCircleRadius));\n                    float nextCircle = smoothstep(0.0, circleOutlineWidth, abs(nextCircleDist - nextCircleRadius));\n                    float outsideCurrCircle = 1.0 - inverselerpstep(0.0, currCircleRadius, currCircleDist - circleOutlineWidth);\n\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), mapColor, currCircle);\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), diffuseColor, nextCircle);\n                    diffuseColor = mix(mix(diffuseColor, vec4(1.0, 0.0, 0.0, 0.0), 0.4), diffuseColor, outsideCurrCircle);\n\n                    gl_FragColor = diffuseColor;\n                }\n            "
                }),
                this._miniMap = new h.X(i,this._minimapMat),
                this._wrapper.add(this._miniMap);
                var n = new h.kb(1,1);
                this._fullMapMat = new h.wb({
                    uniforms: {
                        map: {
                            value: this._mapTexture
                        },
                        currCirclePos: {
                            value: new h.Nb
                        },
                        currCircleRadius: {
                            value: 0
                        },
                        nextCirclePos: {
                            value: new h.Nb
                        },
                        nextCircleRadius: {
                            value: 0
                        }
                    },
                    vertexShader: "\n                varying vec2 vUv;\n\n                void main() {\n                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);;\n                    gl_Position = projectionMatrix * mvPosition;\n                    vUv = uv;\n                }\n            ",
                    fragmentShader: "\n                uniform sampler2D map;\n\n                uniform vec2 currCirclePos;\n                uniform float currCircleRadius;\n\n                uniform vec2 nextCirclePos;\n                uniform float nextCircleRadius;\n\n                varying vec2 vUv;\n\n                float inverselerpstep(float a, float b, float x) {\n                    return step(0.9999, (x - a) / (b - a));\n                }\n\n                void main() {\n                    vec4 diffuseColor = vec4(0.204, 0.549, 0.925, 1.0);\n\n                    float circleOutlineWidth = 0.002;\n                    float scale = 1.0;\n\n                    float currCircleDx = vUv.x - currCirclePos.x;\n                    float currCircleDy = vUv.y - currCirclePos.y;\n                    float currCircleDist = sqrt(currCircleDx * currCircleDx + currCircleDy * currCircleDy);\n\n                    float nextCircleDx = vUv.x - nextCirclePos.x;\n                    float nextCircleDy = vUv.y - nextCirclePos.y;\n                    float nextCircleDist = sqrt(nextCircleDx * nextCircleDx + nextCircleDy * nextCircleDy);\n\n                    vec4 mapColor = texture2D(map, vUv);\n                    \n                    float currCircle = smoothstep(0.0, circleOutlineWidth, abs(currCircleDist - currCircleRadius));\n                    float nextCircle = smoothstep(0.0, circleOutlineWidth, abs(nextCircleDist - nextCircleRadius));\n                    float outsideCurrCircle = 1.0 - inverselerpstep(0.0, currCircleRadius, currCircleDist - circleOutlineWidth);\n\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), mapColor, currCircle);\n                    diffuseColor = mix(vec4(1.0, 1.0, 1.0, 1.0), diffuseColor, nextCircle);\n                    diffuseColor = mix(mix(diffuseColor, vec4(1.0, 0.0, 0.0, 0.0), 0.4), diffuseColor, outsideCurrCircle);\n\n                    gl_FragColor = diffuseColor;\n                }\n            "
                }),
                this._fullMap = new h.X(n,this._fullMapMat),
                this._fullMap.visible = !1,
                this._fullMap.position.set(0, 0, -1),
                this._wrapper.add(this._fullMap);
                var s = new h.kb(1,1)
                  , r = new h.Y({
                    map: k.a.playerCursorTexture,
                    transparent: !0
                });
                this._fullMapPlayerCursor = new h.X(s,r),
                this._fullMapPlayerCursor.visible = !1,
                this._wrapper.add(this._fullMapPlayerCursor),
                this.bindEvents()
            }
            var e = t.prototype;
            return e.bindEvents = function() {
                d.a.on(p.a.MINIMAP_DATA, this.onMinimapData)
            }
            ,
            e.unbindEvents = function() {}
            ,
            e.cleanUp = function() {
                this.unbindEvents()
            }
            ,
            e.render = function(t, e) {
                if (this._isTabMapVisible) {
                    var i = this._sceneRenderer.controlsRenderer.controls.playerState;
                    if (void 0 === i)
                        return;
                    var n = 700 * this._sceneRenderer.canvasRenderer.scale
                      , s = 700 * this._sceneRenderer.canvasRenderer.scale;
                    this._fullMap.scale.set(n, s, 1);
                    var r = 30 * this._sceneRenderer.canvasRenderer.scale
                      , a = 30 * this._sceneRenderer.canvasRenderer.scale
                      , o = this._sceneRenderer.controlsRenderer.controls.getPitchYaw().y
                      , h = this.coordsToMapPercent(i.physicsStep.pos.x) / 100
                      , c = 1 - this.coordsToMapPercent(i.physicsStep.pos.z) / 100;
                    this._fullMapPlayerCursor.position.set(-n / 2 + h * n, -s / 2 + c * n, -1),
                    this._fullMapPlayerCursor.scale.set(r, a, 1),
                    this._fullMapPlayerCursor.rotation.set(0, 0, o)
                } else {
                    var _ = 200 * this._sceneRenderer.canvasRenderer.scale
                      , l = 200 * this._sceneRenderer.canvasRenderer.scale;
                    this._miniMap.position.set(-window.innerWidth / 2 + 121 * this._sceneRenderer.canvasRenderer.scale, window.innerHeight / 2 - 121 * this._sceneRenderer.canvasRenderer.scale, -1),
                    this._miniMap.scale.set(_, l, 1)
                }
            }
            ,
            _()(t, [{
                key: "object",
                get: function() {
                    return this._wrapper
                }
            }]),
            t
        }(), _e = function() {
            function t(t, e, i) {
                var n = this;
                this._settings = t,
                this._canvasRenderer = e,
                this._statsRenderer = i,
                this._ambientLight = void 0,
                this._hemisphereLight = void 0,
                this._directionalLight = void 0,
                this._frontPointLight = void 0,
                this._terrainRenderer = void 0,
                this._controlsRenderer = void 0,
                this._entitiesRenderer = void 0,
                this._bulletsRenderer = void 0,
                this._toxicCircleRenderer = void 0,
                this._gameHudRenderer = void 0,
                this._lights = void 0,
                this.update = function(t) {
                    n._terrainRenderer.update(t),
                    n._controlsRenderer.update(t),
                    n._bulletsRenderer.update(t),
                    n._entitiesRenderer.update(t),
                    n._toxicCircleRenderer.update(t),
                    n._gameHudRenderer.update(t)
                }
                ,
                this.render = function(t, e) {
                    n._terrainRenderer.render(t, e),
                    n._entitiesRenderer.render(t, e),
                    n._controlsRenderer.render(t, e),
                    n._bulletsRenderer.render(t, e),
                    n._toxicCircleRenderer.render(t, e),
                    n._gameHudRenderer.render(t, e)
                }
                ,
                this._lights = [],
                this._ambientLight = new h.a(16777215,.1),
                this.addLight(this._ambientLight),
                this.scene.fog = new h.w(l.a.SKY_CLEAR_COLOR,60,70),
                this._canvasRenderer.frontScene.fog = new h.w(l.a.SKY_CLEAR_COLOR,60,70),
                this._hemisphereLight = new h.z(16777215,16777215,.3),
                this.addLight(this._hemisphereLight),
                this._directionalLight = new h.q(16777215,.5),
                this._directionalLight.position.set(1, 1, 1),
                this.addLight(this._directionalLight),
                this._frontPointLight = new h.lb(16777215,.1),
                this._frontPointLight.position.set(-1, 1, -1),
                this.addLight(this._frontPointLight),
                this._terrainRenderer = new Y(this._settings,this._canvasRenderer.camera,this,this._statsRenderer),
                this.scene.add(this._terrainRenderer.object),
                this._entitiesRenderer = new ae(this),
                this.scene.add(this._entitiesRenderer.object),
                this._bulletsRenderer = new oe(this),
                this.scene.add(this._bulletsRenderer.object),
                this._controlsRenderer = new Zt(this._settings,this._canvasRenderer,this,this._statsRenderer),
                this._toxicCircleRenderer = new he(this),
                this.scene.add(this._toxicCircleRenderer.object),
                this._gameHudRenderer = new ce(this),
                this._canvasRenderer.uiScene.add(this._gameHudRenderer.object)
            }
            var e = t.prototype;
            return e.addLight = function(t) {
                var e = t.clone();
                this._canvasRenderer.scene.add(t),
                this._canvasRenderer.frontScene.add(e),
                this._lights.push(t),
                this._lights.push(e)
            }
            ,
            e.removeLights = function() {
                for (var t = 0; t < this._lights.length; t++)
                    this._canvasRenderer.scene.remove(this._lights[t]),
                    this._canvasRenderer.frontScene.remove(this._lights[t]);
                this._lights = []
            }
            ,
            e.cleanUp = function() {
                this.removeLights(),
                this.scene.fog = null,
                this.scene.remove(this._terrainRenderer.object),
                this.scene.remove(this._entitiesRenderer.object),
                this.scene.remove(this._bulletsRenderer.object),
                this._terrainRenderer.cleanUp(),
                this._entitiesRenderer.cleanUp(),
                this._controlsRenderer.cleanUp(),
                this._bulletsRenderer.cleanUp()
            }
            ,
            _()(t, [{
                key: "scene",
                get: function() {
                    return this._canvasRenderer.scene
                }
            }, {
                key: "terrainRenderer",
                get: function() {
                    return this._terrainRenderer
                }
            }, {
                key: "entitiesRenderer",
                get: function() {
                    return this._entitiesRenderer
                }
            }, {
                key: "controlsRenderer",
                get: function() {
                    return this._controlsRenderer
                }
            }, {
                key: "bulletsRenderer",
                get: function() {
                    return this._bulletsRenderer
                }
            }, {
                key: "toxicFogRenderer",
                get: function() {
                    return this._toxicCircleRenderer
                }
            }, {
                key: "canvasRenderer",
                get: function() {
                    return this._canvasRenderer
                }
            }, {
                key: "gameHudRenderer",
                get: function() {
                    return this._gameHudRenderer
                }
            }]),
            t
        }(), le = i(355), ue = function() {
            function t(t) {
                var e = this;
                this._settings = t,
                this._canvasRenderer = void 0,
                this._statsRenderer = void 0,
                this._sceneRenderer = void 0,
                this._prevFrameTime = void 0,
                this._animationFrameID = void 0,
                this._timeAccumulator = void 0,
                this.render = function(t) {
                    var i = Math.min(t - e._prevFrameTime, 50) / 1e3;
                    for (e._animationFrameID = requestAnimationFrame(e.render),
                    e._prevFrameTime = t,
                    e._timeAccumulator += i; e._timeAccumulator >= l.a.PHYSICS_TIME_STEP; )
                        e._timeAccumulator -= l.a.PHYSICS_TIME_STEP,
                        e.update(l.a.PHYSICS_TIME_STEP);
                    le.a.update(t),
                    e._canvasRenderer.render(i, e._timeAccumulator),
                    e._sceneRenderer.render(i, e._timeAccumulator),
                    e._statsRenderer.update()
                }
                ,
                this.update = function(t) {
                    e._sceneRenderer.update(t)
                }
                ,
                this._canvasRenderer = new u(this._settings,"canvas"),
                this._statsRenderer = new m,
                this.rebuildScene(),
                this._timeAccumulator = 0,
                this._prevFrameTime = 0,
                this._animationFrameID = requestAnimationFrame(this.render)
            }
            var e = t.prototype;
            return e.rebuildScene = function() {
                this._sceneRenderer && this._sceneRenderer.cleanUp(),
                this._canvasRenderer.rebuildScene(),
                this._sceneRenderer = new _e(this._settings,this._canvasRenderer,this._statsRenderer)
            }
            ,
            e.cancelUpdate = function() {
                cancelAnimationFrame(this._animationFrameID)
            }
            ,
            _()(t, [{
                key: "canvasRenderer",
                get: function() {
                    return this._canvasRenderer
                }
            }, {
                key: "statsRenderer",
                get: function() {
                    return this._statsRenderer
                }
            }, {
                key: "sceneRenderer",
                get: function() {
                    return this._sceneRenderer
                }
            }, {
                key: "config",
                get: function() {
                    return this._settings
                }
            }]),
            t
        }(), de = i(50), pe = i(137), ve = i(29), Se = i(93);
        !function(t) {
            t[t.ITEM = 0] = "ITEM",
            t[t.FALL = 1] = "FALL",
            t[t.FOG = 2] = "FOG",
            t[t.VOID = 3] = "VOID",
            t[t.CACTUS = 4] = "CACTUS",
            t[t.SPAWN_PROTECTION = 5] = "SPAWN_PROTECTION",
            t[t.EXPLOSION = 6] = "EXPLOSION"
        }(se || (se = {}));
        var ye, me = se;
        !function(t) {
            t[t.NUM_PLAYERS_REMAIN = 0] = "NUM_PLAYERS_REMAIN",
            t[t.CLIENT_NUM_KILLS = 1] = "CLIENT_NUM_KILLS",
            t[t.TOTAL_NUM_PLAYERS = 2] = "TOTAL_NUM_PLAYERS",
            t[t.TIME_ALIVE = 3] = "TIME_ALIVE",
            t[t.TIMER = 4] = "TIMER",
            t[t.XP_GAINED = 5] = "XP_GAINED",
            t[t.ELIMINATED_BY = 6] = "ELIMINATED_BY",
            t[t.SHOW_TEAM_SCORE_PANEL = 7] = "SHOW_TEAM_SCORE_PANEL",
            t[t.SHOW_FFA_SCORE_PANEL = 8] = "SHOW_FFA_SCORE_PANEL",
            t[t.SHOW_MINIMAP_STATS_PANEL = 9] = "SHOW_MINIMAP_STATS_PANEL",
            t[t.TAB_SHOW_PLAYER_SCORE = 10] = "TAB_SHOW_PLAYER_SCORE",
            t[t.TEAM1_SCORE = 11] = "TEAM1_SCORE",
            t[t.TEAM2_SCORE = 12] = "TEAM2_SCORE",
            t[t.RESPAWN_TIME = 13] = "RESPAWN_TIME",
            t[t.GAME_MODE = 14] = "GAME_MODE",
            t[t.ENABLE_CHAT = 15] = "ENABLE_CHAT",
            t[t.CAN_CHANGE_LOADOUT = 16] = "CAN_CHANGE_LOADOUT",
            t[t.FFA_RANK_1_SCORE = 17] = "FFA_RANK_1_SCORE",
            t[t.FFA_RANK_1_NAME = 18] = "FFA_RANK_1_NAME",
            t[t.FFA_RANK_2_EXISTS = 19] = "FFA_RANK_2_EXISTS",
            t[t.FFA_RANK_2_SCORE = 20] = "FFA_RANK_2_SCORE",
            t[t.FFA_RANK_2_NAME = 21] = "FFA_RANK_2_NAME",
            t[t.FFA_MY_SCORE = 22] = "FFA_MY_SCORE",
            t[t.FFA_MY_RANK = 23] = "FFA_MY_RANK",
            t[t.VGEMS_GAINED = 24] = "VGEMS_GAINED",
            t[t.__LENGTH = 25] = "__LENGTH"
        }(ye || (ye = {}));
        var Ee, ge = [yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.SIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.BOOLEAN, yt.a.UNSIGNED_INT, yt.a.STRING, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT], ke = ye, fe = i(1), Ie = i(119);
        !function(t) {
            t[t.SHOW = 0] = "SHOW",
            t[t.UPDATE = 1] = "UPDATE",
            t[t.HIDE = 2] = "HIDE"
        }(Ee || (Ee = {}));
        var Te, Oe = Ee;
        !function(t) {
            t[t.CUSTOM_NAME = 0] = "CUSTOM_NAME",
            t[t.TEAM = 1] = "TEAM",
            t[t.KILLS = 2] = "KILLS",
            t[t.DEATHS = 3] = "DEATHS",
            t[t.ASSISTS = 4] = "ASSISTS",
            t[t.SCORE = 5] = "SCORE"
        }(Te || (Te = {}));
        var Ae = [yt.a.STRING, yt.a.UNSIGNED_CHAR, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT, yt.a.UNSIGNED_INT]
          , Ce = Te;
        function Re(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return be(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return be(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function be(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var Pe, Me = function() {
            function t(t, e) {
                var i = this;
                this._store = t,
                this._settings = e,
                this._hudCenterMessageClearTimeOut = void 0,
                this._timer = void 0,
                this._timerTimeOut = void 0,
                this._deathTime = void 0,
                this._respawnTimer = void 0,
                this._tabShowsScoreboard = void 0,
                this._killMedalTimeOut = void 0,
                this._deathTime = 0,
                this._respawnTimer = -1,
                this._tabShowsScoreboard = !1,
                d.a.on(p.a.UPDATE_CLIENT_HEALTH_AND_SHIELD, (function(t, e, n, s) {
                    i._store.dispatch(Object(pe.t)(t, e, n, s))
                }
                )),
                d.a.on(p.a.GAME_FOCUS, (function() {
                    Object(y.c)() === Pt.a.CONNECTED && (Object(y.m)() || i._store.dispatch(Object(ve.t)(fe.a.NONE)))
                }
                )),
                d.a.on(p.a.GAME_UNFOCUS, (function() {
                    Object(y.c)() === Pt.a.CONNECTED && (Object(y.m)() || i._store.dispatch(Object(ve.t)(fe.a.MAIN_MENU)))
                }
                )),
                d.a.on(p.a.CHAT_MESSAGE_RECEIVE, (function(t) {
                    i._store.dispatch(Object(ve.a)(t))
                }
                )),
                d.a.on(p.a.GAME_LEAVE, (function() {
                    i._store.dispatch(Object(ve.F)(!1)),
                    i._store.dispatch(Object(ve.t)(fe.a.NONE)),
                    i._store.dispatch(Object(pe.w)(at.a.CLOSED))
                }
                )),
                d.a.on(p.a.AMMO_UPDATE, (function(t, e) {
                    i._store.dispatch(Object(pe.g)(t)),
                    i._store.dispatch(Object(pe.D)(e))
                }
                )),
                d.a.on(p.a.INVENTORY_ACTIVE_SLOT_CHANGE, (function(t, e) {
                    if (e.item instanceof Se.a) {
                        var n = e.item
                          , s = t.countItem(n.ammoItemType);
                        i._store.dispatch(Object(pe.O)(!0)),
                        i._store.dispatch(Object(pe.g)(n.currClipAmmo)),
                        i._store.dispatch(Object(pe.D)(s))
                    } else
                        i._store.dispatch(Object(pe.O)(!1))
                }
                )),
                d.a.on(p.a.INVENTORY_SELECT_ITEM, (function(t) {
                    i._store.dispatch(Object(pe.b)(t))
                }
                )),
                d.a.on(p.a.INVENTORY_SET_CURSOR_ITEM, (function(t) {
                    i._store.dispatch(Object(pe.h)(t.item.getModelID(), t.item.itemTier, t.count, Object(nt.b)(t.item)))
                }
                )),
                d.a.on(p.a.UPDATE_ITEM_USAGE, (function(t, e, n, s) {
                    i._store.dispatch(Object(pe.y)(t, e, n, s))
                }
                )),
                d.a.on(p.a.HUD_CENTER_MESSAGE, (function(t, e) {
                    i._store.dispatch(Object(pe.P)(!0)),
                    i._store.dispatch(Object(pe.u)(e)),
                    void 0 !== i._hudCenterMessageClearTimeOut && (clearTimeout(i._hudCenterMessageClearTimeOut),
                    i._hudCenterMessageClearTimeOut = void 0),
                    t > 0 && (i._hudCenterMessageClearTimeOut = setTimeout((function() {
                        i._store.dispatch(Object(pe.P)(!1))
                    }
                    ), 1e3 * t))
                }
                )),
                this._timer = 0,
                d.a.on(p.a.GAME_METADATA, (function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.metadataType === ke.CLIENT_NUM_KILLS ? i._store.dispatch(Object(pe.c)(n.value)) : n.metadataType === ke.NUM_PLAYERS_REMAIN ? i._store.dispatch(Object(pe.A)(n.value)) : n.metadataType === ke.ELIMINATED_BY ? i._store.dispatch(Object(pe.i)(n.value)) : n.metadataType === ke.TOTAL_NUM_PLAYERS ? i._store.dispatch(Object(pe.L)(n.value)) : n.metadataType === ke.TIME_ALIVE ? i._store.dispatch(Object(pe.J)(n.value)) : n.metadataType === ke.XP_GAINED ? i._store.dispatch(Object(pe.N)(n.value)) : n.metadataType === ke.TIMER ? function() {
                            i._timer = n.value,
                            i._store.dispatch(Object(pe.K)(i._timer)),
                            void 0 !== i._timerTimeOut && (clearTimeout(i._timerTimeOut),
                            i._timerTimeOut = void 0);
                            i._timerTimeOut = setTimeout((function t() {
                                --i._timer,
                                i._store.dispatch(Object(pe.K)(i._timer)),
                                i._timer > 0 && (i._timerTimeOut = setTimeout(t, 1e3))
                            }
                            ), 1e3)
                        }() : n.metadataType === ke.SHOW_TEAM_SCORE_PANEL ? i._store.dispatch(Object(ve.C)(n.value)) : n.metadataType === ke.SHOW_FFA_SCORE_PANEL ? i._store.dispatch(Object(ve.A)(n.value)) : n.metadataType === ke.SHOW_MINIMAP_STATS_PANEL ? i._store.dispatch(Object(ve.B)(n.value)) : n.metadataType === ke.TEAM1_SCORE ? i._store.dispatch(Object(pe.H)(n.value)) : n.metadataType === ke.TEAM2_SCORE ? i._store.dispatch(Object(pe.I)(n.value)) : n.metadataType === ke.TAB_SHOW_PLAYER_SCORE ? (i._tabShowsScoreboard = n.value,
                        i._store.dispatch(Object(ve.D)(i._tabShowsScoreboard))) : n.metadataType === ke.RESPAWN_TIME ? (i._respawnTimer = n.value,
                        i._store.dispatch(Object(pe.E)(n.value))) : n.metadataType === ke.GAME_MODE ? i._store.dispatch(Object(pe.r)(n.value)) : n.metadataType === ke.ENABLE_CHAT ? i._store.dispatch(Object(ve.s)(n.value)) : n.metadataType === ke.CAN_CHANGE_LOADOUT ? Object(y.s)(n.value) : n.metadataType === ke.FFA_RANK_1_SCORE ? i._store.dispatch(Object(pe.m)(n.value)) : n.metadataType === ke.FFA_RANK_1_NAME ? i._store.dispatch(Object(pe.l)(n.value)) : n.metadataType === ke.FFA_RANK_2_EXISTS ? i._store.dispatch(Object(pe.n)(n.value)) : n.metadataType === ke.FFA_RANK_2_SCORE ? i._store.dispatch(Object(pe.p)(n.value)) : n.metadataType === ke.FFA_RANK_2_NAME ? i._store.dispatch(Object(pe.o)(n.value)) : n.metadataType === ke.FFA_MY_RANK ? i._store.dispatch(Object(pe.j)(n.value)) : n.metadataType === ke.FFA_MY_SCORE ? i._store.dispatch(Object(pe.k)(n.value)) : n.metadataType === ke.VGEMS_GAINED && i._store.dispatch(Object(pe.M)(n.value))
                    }
                }
                )),
                d.a.on(p.a.CLIENT_PLAYER_DEATH, (function() {
                    i._respawnTimer > 0 && (i._deathTime = Date.now(),
                    i._store.dispatch(Object(ve.y)(!0)))
                }
                )),
                d.a.on(p.a.SCOREBOARD_TEAM_INFO, (function(t) {
                    i._store.dispatch(Object(pe.F)(t))
                }
                )),
                d.a.on(p.a.GAME_OVER, (function(t) {
                    i._store.dispatch(Object(pe.s)(!0, t))
                }
                )),
                d.a.on(p.a.PLAYER_KILL, (function(t, e, n, s, r, a) {
                    var o = "{{victim}} somehow died...";
                    if (r === me.ITEM) {
                        var h = Math.random();
                        o = h < .3 ? "{{killer}} killed {{victim}} with {{item}}" : h < .6 ? "{{killer}} eliminated {{victim}} with {{item}}" : "{{killer}} destroyed {{victim}} using {{item}}"
                    } else
                        r === me.FALL ? o = "{{victim}} fell to their death" : r === me.FOG ? o = "{{victim}} was lost in the fog" : r === me.VOID ? o = "{{victim}} fell out of the world" : r === me.CACTUS ? o = "{{victim}} was poked to death by a cactus" : r === me.SPAWN_PROTECTION ? o = "{{victim}} got too close to enemy spawn" : r === me.EXPLOSION && (o = t.length > 0 && t !== n ? "{{killer}} made {{victim}} explode" : "{{victim}} exploded");
                    var c = Object(nt.c)(a);
                    i._store.dispatch(Object(ve.b)(t, Object(kt.b)(e), n, Object(kt.b)(s), c.itemName, Object(xt.b)(c.itemTier), o)),
                    setTimeout((function() {
                        i._store.dispatch(Object(ve.l)())
                    }
                    ), 8e3)
                }
                )),
                d.a.on(p.a.NOTIFICATION_MESSAGE_RECEIVED, (function(t) {
                    i._store.dispatch(Object(ve.d)(t)),
                    setTimeout((function() {
                        i._store.dispatch(Object(ve.n)())
                    }
                    ), 8e3)
                }
                )),
                d.a.on(p.a.KILL_MEDAL, (function(t, e) {
                    i._store.dispatch(Object(ve.c)(t, e)),
                    i.debounceKillMedals()
                }
                )),
                d.a.on(p.a.TERRAIN_LOADING_STATUS, (function(t, e) {
                    i._store.dispatch(Object(pe.z)(t, e))
                }
                )),
                d.a.on(p.a.GAME_JOIN, (function(t, e, n, s, r, a, o) {
                    i._store.dispatch(Object(pe.d)(t)),
                    i._store.dispatch(Object(pe.e)(e)),
                    i._store.dispatch(Object(pe.f)(r))
                }
                )),
                d.a.on(p.a.GAME_JOIN_DENY, (function(t) {
                    i._store.dispatch(Object(ve.r)(t))
                }
                )),
                d.a.on(p.a.PLAYER_KICK, (function(t) {
                    i._store.dispatch(Object(ve.r)(t))
                }
                )),
                d.a.on(p.a.RESOURCE_LOADING_STATUS_UPDATE, (function(t, e) {
                    t || i._store.dispatch(Object(ve.e)(Pt.a.DISCONNECTED)),
                    i._store.dispatch(Object(ve.x)(e))
                }
                )),
                d.a.on(p.a.ITEM_HELP_MESSAGE_UPDATE, (function(t, e) {
                    i._store.dispatch(Object(ve.u)(t, e))
                }
                )),
                d.a.on(p.a.ITEM_PICKUP_HINT_UPDATE, (function(t, e, n, s, r, a) {
                    i._store.dispatch(Object(pe.x)(t, e, n, s, r, a))
                }
                )),
                d.a.on(p.a.SET_SHOW_SCOPE, (function(t) {
                    i._store.dispatch(Object(pe.G)(t))
                }
                )),
                document.addEventListener("keyup", (function(t) {
                    Object(y.c)() === Pt.a.CONNECTED && (Object(y.l)() ? t.keyCode === v.a.ESC && d.a.emit(p.a.REQUEST_FOCUS) : Object(y.j)() || (t.keyCode === i._settings.keys[Mt.b.MAP] ? (t.preventDefault(),
                    Object(y.t)() ? i._store.dispatch(Object(ve.z)(!1)) : i._store.dispatch(Object(ve.v)(!1))) : t.keyCode === v.a.ESC && Object(y.m)() && d.a.emit(p.a.REQUEST_INVENTORY_STATUS_UPDATE, at.a.CLOSED)))
                }
                ), !1),
                document.addEventListener("keydown", (function(t) {
                    Object(y.c)() === Pt.a.CONNECTED && (Object(y.l)() || Object(y.j)() || t.keyCode === i._settings.keys[Mt.b.MAP] && (t.preventDefault(),
                    Object(y.t)() ? i._store.dispatch(Object(ve.z)(!0)) : i._store.dispatch(Object(ve.v)(!0))))
                }
                ), !1);
                var n = this._store.getState();
                void 0 !== n.settings.playerName && 0 !== n.settings.playerName.length || this._store.dispatch(Object(Ie.a)("Soldier"))
            }
            var e = t.prototype;
            return e.debounceKillMedals = function() {
                var t = this;
                if (void 0 === this._killMedalTimeOut) {
                    !function e() {
                        t._store.getState().ui.killMedals.length > 0 ? t._killMedalTimeOut = setTimeout((function() {
                            t._store.dispatch(Object(ve.m)()),
                            e()
                        }
                        ), 3e3) : t._killMedalTimeOut = void 0
                    }()
                }
            }
            ,
            e.loadSettingsFromState = function(t, e, i) {
                var n = this._store.getState();
                t.sensitivity = parseFloat(n.settings.sensitivity),
                t.adsSensitivityMultiplier = parseFloat(n.settings.adsSensitivityMultiplier),
                t.scopedSensitivityMultiplier = parseFloat(n.settings.scopedSensitivityMultiplier),
                t.renderScale !== n.settings.renderScale && (t.renderScale = n.settings.renderScale,
                void 0 !== e && e.renderer.setPixelRatio(window.devicePixelRatio * t.renderScale)),
                t.primaryLoadout = n.settings.primaryLoadout,
                t.secondaryLoadout = n.settings.secondaryLoadout,
                t.terrainTextureURL = n.settings.terrainTextureURL,
                t.soundVolume = parseFloat(n.settings.soundVolume),
                t.invertYAxis = n.settings.invertYAxis,
                t.invertMouseWheel = n.settings.invertMouseWheel;
                for (var s = 0, r = Object.entries(n.settings.keys); s < r.length; s++) {
                    var a = r[s]
                      , o = a[0]
                      , h = a[1];
                    t.keys[o] = h.keyCode
                }
                var c = !1;
                t.crosshairWidth !== n.settings.crosshairWidth && (t.crosshairWidth = n.settings.crosshairWidth,
                c = !0),
                t.crosshairLength !== n.settings.crosshairLength && (t.crosshairLength = n.settings.crosshairLength,
                c = !0),
                t.crosshairColor !== n.settings.crosshairColor && (t.crosshairColor = n.settings.crosshairColor,
                c = !0),
                t.crosshairHitColor !== n.settings.crosshairHitColor && (t.crosshairHitColor = n.settings.crosshairHitColor,
                c = !0),
                t.crosshairStyle !== n.settings.crosshairStyle && (t.crosshairStyle = n.settings.crosshairStyle,
                c = !0),
                c && void 0 !== i && i.controlsRenderer.updateCrosshairSettings()
            }
            ,
            e.updateCraftingRecipeStatus = function(t) {
                t.__buildItemCountCache();
                for (var e = [], i = 0; i < bt.a.__LENGTH; i++) {
                    var n = i
                      , s = t.__checkHasItemsFromCache(Object(bt.b)(n).ingredients);
                    e.push(s)
                }
                this._store.dispatch(Object(pe.C)(e))
            }
            ,
            e.listen = function(t, e, i) {
                var n = this;
                this._store.subscribe((function() {
                    n.loadSettingsFromState(n._settings, e, i)
                }
                )),
                d.a.on(p.a.INVENTORY_STATUS_UPDATE, (function(t) {
                    n._store.dispatch(Object(pe.w)(t)),
                    t === at.a.CLOSED ? n._store.getState().ui.respawnScreenVisible ? i.controlsRenderer.controls.pointerLockControls.unlock() : i.controlsRenderer.controls.pointerLockControls.lock() : t === at.a.PLAYER_INVENTORY || t === at.a.WORK_STATION ? (i.controlsRenderer.controls.pointerLockControls.unlock(),
                    n.updateCraftingRecipeStatus(i.controlsRenderer.controls.getInventory())) : (t === at.a.LOADOUT_STATION || t === at.a.WOODEN_CHEST || t === at.a.IRON_CHEST || t === at.a.GOLD_CHEST || t === at.a.PLAYER_ACTIONS) && i.controlsRenderer.controls.pointerLockControls.unlock()
                }
                )),
                d.a.on(p.a.KEY_PRESS, (function(t) {
                    if (Object(y.c)() === Pt.a.CONNECTED && !Object(y.k)() && !(Object(y.l)() && t !== v.a.ENTER || Object(y.j)() && t !== v.a.ENTER))
                        if (t === v.a.ENTER && Object(y.i)())
                            if (Object(y.j)()) {
                                var e = n._store.getState().ui.gameChatPendingMessage;
                                e.length > 0 && (d.a.emit(p.a.CHAT_MESSAGE_SEND, e),
                                n._store.dispatch(Object(ve.h)(""))),
                                n._store.dispatch(Object(ve.F)(!1))
                            } else
                                n._store.dispatch(Object(ve.F)(!0));
                        else if (t === n._settings.keys[Mt.b.TOGGLE_INVENTORY]) {
                            var i = n._store.getState().gameData.inventoryStatus
                              , s = at.a.CLOSED;
                            i === at.a.CLOSED ? s = Object(y.h)() ? at.a.LOADOUT_STATION : at.a.PLAYER_INVENTORY : i === at.a.PLAYER_ACTIONS && (s = at.a.PLAYER_INVENTORY),
                            d.a.emit(p.a.REQUEST_INVENTORY_STATUS_UPDATE, s)
                        } else if (t === n._settings.keys[Mt.b.TOGGLE_MAP])
                            n._store.dispatch(Object(ve.G)());
                        else if (t === n._settings.keys[Mt.b.TOGGLE_PLAYER_MENU]) {
                            var r = n._store.getState().gameData.inventoryStatus
                              , a = at.a.PLAYER_ACTIONS;
                            r === at.a.PLAYER_ACTIONS && (a = at.a.CLOSED),
                            d.a.emit(p.a.REQUEST_INVENTORY_STATUS_UPDATE, a)
                        }
                }
                )),
                d.a.on(p.a.INVENTORY_SET_ITEMS, (function(t) {
                    for (var e, s = Re(t); !(e = s()).done; ) {
                        var r = e.value
                          , a = r[0]
                          , o = r[1];
                        n._store.dispatch(Object(pe.v)(a, o.item.displayName, o.item.itemDescription, o.item.itemTier, Object(Lt.a)(o.item.skinType).tier, o.item.getModelID(), o.count, Object(nt.b)(o.item)))
                    }
                    n.updateCraftingRecipeStatus(i.controlsRenderer.controls.getInventory())
                }
                )),
                d.a.on(p.a.GLOBAL_PLAYER_METADATA, (function(t, e, i) {
                    for (var s, r = void 0, a = void 0, o = void 0, h = void 0, c = void 0, _ = void 0, l = Re(i); !(s = l()).done; ) {
                        var u = s.value;
                        u.metadataType === Ce.KILLS ? o = u.value : u.metadataType === Ce.DEATHS ? h = u.value : u.metadataType === Ce.ASSISTS ? c = u.value : u.metadataType === Ce.SCORE ? _ = u.value : u.metadataType === Ce.CUSTOM_NAME ? r = u.value : u.metadataType === Ce.TEAM && (a = u.value)
                    }
                    e === Oe.HIDE ? n._store.dispatch(Object(pe.a)(t)) : n._store.dispatch(Object(pe.B)(t, a, r, o, h, c, _))
                }
                ))
            }
            ,
            t
        }(), xe = i(6), Ne = function() {
            this.sensitivity = void 0,
            this.adsSensitivityMultiplier = void 0,
            this.scopedSensitivityMultiplier = void 0,
            this.renderScale = void 0,
            this.soundVolume = void 0,
            this.invertYAxis = void 0,
            this.invertMouseWheel = void 0,
            this.crosshairWidth = void 0,
            this.crosshairLength = void 0,
            this.crosshairColor = void 0,
            this.crosshairHitColor = void 0,
            this.crosshairStyle = void 0,
            this.chatVisible = void 0,
            this.primaryLoadout = void 0,
            this.secondaryLoadout = void 0,
            this.terrainTextureURL = void 0,
            this.keys = void 0,
            this.sensitivity = xe.c.sensitivity,
            this.adsSensitivityMultiplier = xe.c.adsSensitivityMultiplier,
            this.scopedSensitivityMultiplier = xe.c.scopedSensitivityMultiplier,
            this.renderScale = xe.c.renderScale,
            this.soundVolume = xe.c.soundVolume,
            this.invertYAxis = xe.c.invertYAxis,
            this.invertMouseWheel = xe.c.invertMouseWheel,
            this.crosshairWidth = xe.c.crosshairWidth,
            this.crosshairLength = xe.c.crosshairLength,
            this.crosshairColor = xe.c.crosshairColor,
            this.crosshairHitColor = xe.c.crosshairHitColor,
            this.crosshairStyle = xe.c.crosshairStyle,
            this.chatVisible = xe.c.chatVisible,
            this.primaryLoadout = xe.c.primaryLoadout,
            this.secondaryLoadout = xe.c.secondaryLoadout,
            this.terrainTextureURL = xe.c.terrainTextureURL,
            this.keys = {};
            for (var t = 0, e = Object.entries(xe.b); t < e.length; t++) {
                var i = e[t]
                  , n = i[0]
                  , s = i[1];
                this.keys[n] = s.keyCode
            }
        }, Le = function() {
            return new Promise((function(t, e) {
                Object(de.a)(function() {
                    var e = o()(r.a.mark((function e(i) {
                        var n, s, a;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i.pause(),
                                    n = new Ne,
                                    (s = new Me(de.d,n)).loadSettingsFromState(n, void 0, void 0),
                                    e.next = 6,
                                    k.a.load(n);
                                case 6:
                                    a = new ue(n),
                                    s.listen(a.statsRenderer, a.canvasRenderer, a.sceneRenderer),
                                    t(a);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            ))
        }, we = i(157);
        !function(t) {
            t[t.CLIENT_INPUT_OUT = 0] = "CLIENT_INPUT_OUT",
            t[t.SERVER_INPUT_RESPONSE_IN = 1] = "SERVER_INPUT_RESPONSE_IN",
            t[t.WORLD_UPDATE_IN = 2] = "WORLD_UPDATE_IN",
            t[t.REQUEST_JOIN_OUT = 3] = "REQUEST_JOIN_OUT",
            t[t.REQUEST_JOIN_RESPONSE_IN = 4] = "REQUEST_JOIN_RESPONSE_IN",
            t[t.SET_BLOCK_IN = 5] = "SET_BLOCK_IN",
            t[t.FLOATING_BLOCKS_BREAK_IN = 6] = "FLOATING_BLOCKS_BREAK_IN",
            t[t.RESPAWN_IN = 7] = "RESPAWN_IN",
            t[t.CHAT_MESSAGE_IN = 8] = "CHAT_MESSAGE_IN",
            t[t.SEND_CHAT_MESSAGE_OUT = 9] = "SEND_CHAT_MESSAGE_OUT",
            t[t.ENTITY_CREATE_IN = 10] = "ENTITY_CREATE_IN",
            t[t.ENTITY_DESTROY_IN = 11] = "ENTITY_DESTROY_IN",
            t[t.PLAYER_KILL_IN = 12] = "PLAYER_KILL_IN",
            t[t.ENTITY_METADATA_IN = 13] = "ENTITY_METADATA_IN",
            t[t.SET_BLOCK_BREAK_PROGRESS_IN = 14] = "SET_BLOCK_BREAK_PROGRESS_IN",
            t[t.ENTITY_ACTION_IN = 15] = "ENTITY_ACTION_IN",
            t[t.HEARTBEAT_OUT = 16] = "HEARTBEAT_OUT",
            t[t.HEARTBEAT_IN = 17] = "HEARTBEAT_IN",
            t[t.DAMAGE_RECEIVED_IN = 18] = "DAMAGE_RECEIVED_IN",
            t[t.ENTITY_DAMAGE_IN = 19] = "ENTITY_DAMAGE_IN",
            t[t.MINIMAP_DATA_IN = 20] = "MINIMAP_DATA_IN",
            t[t.HUD_CENTER_MESSAGE_IN = 21] = "HUD_CENTER_MESSAGE_IN",
            t[t.TOXIC_CIRCLE_INFO_IN = 22] = "TOXIC_CIRCLE_INFO_IN",
            t[t.GAME_METADATA_IN = 23] = "GAME_METADATA_IN",
            t[t.PLAYER_KICK_IN = 24] = "PLAYER_KICK_IN",
            t[t.GAME_OVER_IN = 25] = "GAME_OVER_IN",
            t[t.REQUEST_JOIN_DENY_IN = 26] = "REQUEST_JOIN_DENY_IN",
            t[t.ITEM_PICK_UP_REQUEST_OUT = 27] = "ITEM_PICK_UP_REQUEST_OUT",
            t[t.GLOBAL_PLAYER_METADATA_IN = 28] = "GLOBAL_PLAYER_METADATA_IN",
            t[t.REQUEST_LOADOUT_OUT = 29] = "REQUEST_LOADOUT_OUT",
            t[t.NOTIFICATION_MESSAGE_IN = 30] = "NOTIFICATION_MESSAGE_IN",
            t[t.PLAY_DIRECT_SOUND_IN = 31] = "PLAY_DIRECT_SOUND_IN",
            t[t.PLAY_POSITIONAL_SOUND_IN = 32] = "PLAY_POSITIONAL_SOUND_IN",
            t[t.KILL_MEDAL_IN = 33] = "KILL_MEDAL_IN",
            t[t.REQUEST_RESPAWN_OUT = 34] = "REQUEST_RESPAWN_OUT",
            t[t.SCOREBOARD_TEAM_INFO_IN = 35] = "SCOREBOARD_TEAM_INFO_IN",
            t[t.LOAD_CHUNK_IN = 36] = "LOAD_CHUNK_IN",
            t[t.UNLOAD_CHUNK_IN = 37] = "UNLOAD_CHUNK_IN"
        }(Pe || (Pe = {}));
        var Ue = Pe
          , De = function() {
            function t(t) {
                this._id = t
            }
            return _()(t, [{
                key: "id",
                get: function() {
                    return this._id
                }
            }]),
            t
        }()
          , Be = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return it()(e, t),
            e
        }(De)
          , ze = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.LOAD_CHUNK_IN) || this)._x = void 0,
                e._y = void 0,
                e._z = void 0,
                e._blocks = void 0,
                e._numNonEmptyBlocks = void 0,
                e._size = void 0,
                e._size = 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                if (this._x = e.getInt16(1),
                this._y = e.getInt16(3),
                this._z = e.getInt16(5),
                this._numNonEmptyBlocks = e.getUint16(7),
                this._size = 9,
                this._numNonEmptyBlocks > 0) {
                    var i = e.getUint8(this._size) > 0;
                    this._size += 1,
                    this._blocks = new Uint8Array(l.a.CHUNK_NUM_BLOCKS);
                    var n = 0;
                    if (i) {
                        var s = e.getUint16(this._size);
                        this._size += 2;
                        for (var r = 0; r < s; r++) {
                            var a = e.getUint8(this._size);
                            this._size += 1;
                            var o = e.getUint8(this._size);
                            this._size += 1;
                            for (var h = 0; h < a; h++)
                                this._blocks[n++] = o
                        }
                    } else
                        this._blocks[n++] = e.getUint8(this._size),
                        ++this._size
                }
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "x",
                get: function() {
                    return this._x
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                }
            }, {
                key: "z",
                get: function() {
                    return this._z
                }
            }, {
                key: "blocks",
                get: function() {
                    return this._blocks
                }
            }, {
                key: "numNonEmptyBlocks",
                get: function() {
                    return this._numNonEmptyBlocks
                }
            }]),
            e
        }(Be)
          , Fe = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.UNLOAD_CHUNK_IN) || this)._x = void 0,
                e._y = void 0,
                e._z = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._x = e.getInt16(1),
                this._y = e.getInt16(3),
                this._z = e.getInt16(5)
            }
            ,
            i.size = function() {
                return 7
            }
            ,
            _()(e, [{
                key: "x",
                get: function() {
                    return this._x
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                }
            }, {
                key: "z",
                get: function() {
                    return this._z
                }
            }]),
            e
        }(Be)
          , je = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return it()(e, t),
            e
        }(De)
          , Ke = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, Ue.CLIENT_INPUT_OUT) || this)._inputState = e,
                i._offset = void 0,
                i._offset = 0,
                i
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size())
                  , e = new DataView(t);
                e.setUint8(0, this.id),
                e.setUint32(1, this._inputState.seqId),
                e.setFloat32(5, this._inputState.pitchYaw.y),
                e.setFloat32(9, this._inputState.pitchYaw.x),
                e.setFloat32(13, this._inputState.tick);
                var i = 0;
                return i |= this._inputState.moveForward ? 1 : 0,
                i |= (this._inputState.moveBackward ? 1 : 0) << 1,
                i |= (this._inputState.moveLeft ? 1 : 0) << 2,
                i |= (this._inputState.moveRight ? 1 : 0) << 3,
                i |= (this._inputState.jump ? 1 : 0) << 4,
                i |= (this._inputState.primaryAction ? 1 : 0) << 5,
                i |= (this._inputState.secondaryAction ? 1 : 0) << 6,
                i |= (this._inputState.crouch ? 1 : 0) << 7,
                i |= (this._inputState.run ? 1 : 0) << 8,
                i |= (this._inputState.reload ? 1 : 0) << 9,
                i |= (this._inputState.drop ? 1 : 0) << 10,
                i |= (this._inputState.spray ? 1 : 0) << 11,
                i |= (this._inputState.selectedIndexChanged ? 1 : 0) << 12,
                i |= (this._inputState.didClickSlot ? 1 : 0) << 13,
                i |= (this._inputState.inventoryStatusChanged ? 1 : 0) << 14,
                i |= (this._inputState.didTryToCraft ? 1 : 0) << 15,
                e.setUint16(17, i),
                this._offset = 19,
                this._inputState.selectedIndexChanged && (e.setUint8(this._offset, this._inputState.selectedIdx),
                this._offset += 1),
                this._inputState.didClickSlot && (e.setInt8(this._offset, this._inputState.clickedSlotIdx),
                this._offset += 1,
                e.setInt8(this._offset, this._inputState.clickedSlotMouseCode),
                this._offset += 1),
                this._inputState.inventoryStatusChanged && (e.setUint8(this._offset, this._inputState.inventoryStatus),
                this._offset += 1),
                this._inputState.didTryToCraft && (e.setUint8(this._offset, this._inputState.recipeType),
                this._offset += 1,
                e.setInt8(this._offset, this._inputState.clickedSlotMouseCode),
                this._offset += 1),
                t
            }
            ,
            i.size = function() {
                var t = 0;
                return this._inputState.selectedIndexChanged && (t += 1),
                this._inputState.didClickSlot && (t += 2),
                this._inputState.inventoryStatusChanged && (t += 1),
                this._inputState.didTryToCraft && (t += 2),
                19 + t
            }
            ,
            e
        }(je)
          , Ge = i(105)
          , He = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.SERVER_INPUT_RESPONSE_IN) || this)._positionChanged = void 0,
                e._velocityChanged = void 0,
                e._eyeHeightChanged = void 0,
                e._aimSpreadChanged = void 0,
                e._selectedIndexChanged = void 0,
                e._healthOrShieldChanged = void 0,
                e._buildModeChanged = void 0,
                e._inventoryStatusChanged = void 0,
                e._physicsStep = void 0,
                e._selectedIndex = void 0,
                e._size = void 0,
                e._inventoryStatus = void 0,
                e._items = void 0,
                e._cooldowns = void 0,
                e._maxHealth = void 0,
                e._health = void 0,
                e._maxShield = void 0,
                e._shield = void 0,
                e._buildMode = void 0,
                e._selectedIndex = -1,
                e._size = 0,
                e._items = new Map,
                e._cooldowns = new Map,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint16(1);
                this._size += 3;
                var n = 0 != (1 & i)
                  , s = 0 != (2 & i)
                  , r = (28 & i) >> 2
                  , a = 0 != (32 & i);
                this._aimSpreadChanged = 0 != (64 & i),
                this._positionChanged = 0 != (128 & i),
                this._velocityChanged = 0 != (256 & i),
                this._eyeHeightChanged = 0 != (512 & i),
                this._selectedIndexChanged = 0 != (1024 & i);
                var o = 0 != (2048 & i);
                this._healthOrShieldChanged = 0 != (4096 & i),
                this._buildModeChanged = 0 != (8192 & i),
                this._inventoryStatusChanged = 0 != (16384 & i);
                var h = e.getUint32(this._size);
                this._size += 4;
                var c = 0;
                this._aimSpreadChanged && (c = e.getFloat32(this._size),
                this._size += 4);
                var _ = Object(S.l)(0, 0, 0);
                if (this._positionChanged) {
                    var l = e.getFloat32(this._size);
                    this._size += 4;
                    var u = e.getFloat32(this._size);
                    this._size += 4;
                    var d = e.getFloat32(this._size);
                    this._size += 4,
                    _.x = l,
                    _.y = u,
                    _.z = d
                }
                var p = Object(S.l)(0, 0, 0);
                if (this._velocityChanged) {
                    var v = e.getFloat32(this._size);
                    this._size += 4;
                    var y = e.getFloat32(this._size);
                    this._size += 4;
                    var m = e.getFloat32(this._size);
                    this._size += 4,
                    p.x = v,
                    p.y = y,
                    p.z = m
                }
                var E = -1;
                if (this._eyeHeightChanged && (E = e.getFloat32(this._size),
                this._size += 4),
                this._physicsStep = {
                    aimSpread: c,
                    pos: _,
                    vel: p,
                    onGround: n,
                    canJump: s,
                    controlState: r,
                    eyeHeight: E,
                    seqId: h
                },
                this._selectedIndexChanged && (this._selectedIndex = e.getUint8(this._size),
                this._size += 1),
                this._buildModeChanged && (this._buildMode = e.getUint8(this._size),
                this._size += 1),
                this._inventoryStatusChanged && (this._inventoryStatus = e.getUint8(this._size),
                this._size += 1),
                a) {
                    var g = e.getUint8(this._size);
                    this._size += 1;
                    for (var k = 0; k < g; k++) {
                        var f = e.getInt8(this._size);
                        this._size += 1;
                        var I = e.getUint16(this._size);
                        this._size += 2;
                        var T = e.getUint8(this._size);
                        this._size += 1;
                        var O = []
                          , A = e.getUint8(this._size);
                        this._size += 1;
                        for (var C = 0; C < A; C++) {
                            var R = e.getUint8(this._size);
                            this._size += 1;
                            var b = Object(Ge.b)(R)
                              , P = 0;
                            switch (b) {
                            case yt.a.UNSIGNED_CHAR:
                                P = e.getUint8(this._size),
                                this._size += 1;
                                break;
                            case yt.a.SIGNED_CHAR:
                                P = e.getInt8(this._size),
                                this._size += 1;
                                break;
                            case yt.a.UNSIGNED_SHORT:
                                P = e.getUint16(this._size),
                                this._size += 2;
                                break;
                            case yt.a.SIGNED_SHORT:
                                P = e.getInt16(this._size),
                                this._size += 2;
                                break;
                            case yt.a.UNSIGNED_INT:
                                P = e.getUint32(this._size),
                                this._size += 4;
                                break;
                            case yt.a.SIGNED_INT:
                                P = e.getInt32(this._size),
                                this._size += 4;
                                break;
                            case yt.a.FLOAT:
                                P = e.getFloat32(this._size),
                                this._size += 4;
                                break;
                            case yt.a.DOUBLE:
                                P = e.getFloat64(this._size),
                                this._size += 8;
                                break;
                            case yt.a.STRING:
                                var M = e.getUint8(this._size);
                                this._size += 1,
                                P = "";
                                for (var x = 0; x < M; x++)
                                    P += String.fromCharCode(e.getUint8(this._size)),
                                    this._size += 1;
                                break;
                            case yt.a.BOOLEAN:
                                P = e.getUint8(this._size) > 0,
                                this._size += 1;
                                break;
                            default:
                                console.error("Encountered unknown data type when reading Item Metadata in Input Response Packet")
                            }
                            O.push({
                                metadataType: R,
                                dataType: b,
                                value: P
                            })
                        }
                        var N = Object(nt.c)(I);
                        N.onUpdateMetadata(O),
                        this._items.set(f, new tt.a(N,T))
                    }
                }
                if (o) {
                    var L = e.getUint8(this._size);
                    this._size += 1;
                    for (var w = 0; w < L; w++) {
                        var U = e.getUint8(this._size);
                        this._size += 1;
                        var D = e.getUint32(this._size);
                        this._size += 4,
                        this._cooldowns.set(U, D)
                    }
                }
                this._healthOrShieldChanged && (this._maxHealth = e.getUint8(this._size),
                this._size += 1,
                this._health = e.getUint8(this._size),
                this._size += 1,
                this._maxShield = e.getUint8(this._size),
                this._size += 1,
                this._shield = e.getUint8(this._size),
                this._size += 1)
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "physicsStep",
                get: function() {
                    return this._physicsStep
                }
            }, {
                key: "selectedIndex",
                get: function() {
                    return this._selectedIndex
                }
            }, {
                key: "items",
                get: function() {
                    return this._items
                }
            }, {
                key: "cooldowns",
                get: function() {
                    return this._cooldowns
                }
            }, {
                key: "positionChanged",
                get: function() {
                    return this._positionChanged
                }
            }, {
                key: "velocityChanged",
                get: function() {
                    return this._velocityChanged
                }
            }, {
                key: "eyeHeightChanged",
                get: function() {
                    return this._eyeHeightChanged
                }
            }, {
                key: "aimSpreadChanged",
                get: function() {
                    return this._aimSpreadChanged
                }
            }, {
                key: "selectedIndexChanged",
                get: function() {
                    return this._selectedIndexChanged
                }
            }, {
                key: "healthOrShieldChanged",
                get: function() {
                    return this._healthOrShieldChanged
                }
            }, {
                key: "buildModeChanged",
                get: function() {
                    return this._buildModeChanged
                }
            }, {
                key: "inventoryStatusChanged",
                get: function() {
                    return this._inventoryStatusChanged
                }
            }, {
                key: "inventoryStatus",
                get: function() {
                    return this._inventoryStatus
                }
            }, {
                key: "maxHealth",
                get: function() {
                    return this._maxHealth
                }
            }, {
                key: "health",
                get: function() {
                    return this._health
                }
            }, {
                key: "maxShield",
                get: function() {
                    return this._maxShield
                }
            }, {
                key: "shield",
                get: function() {
                    return this._shield
                }
            }, {
                key: "buildMode",
                get: function() {
                    return this._buildMode
                }
            }]),
            e
        }(Be)
          , We = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, Ue.REQUEST_JOIN_OUT) || this)._primaryLoadout = e,
                n._secondaryLoadout = i,
                n
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size())
                  , e = new DataView(t);
                return e.setUint8(0, this.id),
                e.setUint8(1, l.a.CLIENT_VERSION),
                e.setUint8(2, this._primaryLoadout),
                e.setUint8(3, this._secondaryLoadout),
                t
            }
            ,
            i.size = function() {
                return 4
            }
            ,
            e
        }(je)
          , Ye = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.REQUEST_JOIN_RESPONSE_IN) || this)._playerId = void 0,
                e._playerName = void 0,
                e._spawnLocation = void 0,
                e._spawnPitchYaw = void 0,
                e._team = void 0,
                e._minChunkPos = void 0,
                e._maxChunkPos = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._playerId = e.getUint32(1);
                var i = e.getUint8(5);
                this._playerName = "";
                for (var n = 0; n < i; n++)
                    this._playerName += String.fromCharCode(e.getUint8(6 + n));
                var s = e.getFloat32(6 + i)
                  , r = e.getFloat32(6 + i + 4)
                  , a = e.getFloat32(6 + i + 8);
                this._spawnLocation = Object(S.l)(s, r, a);
                var o = e.getFloat32(6 + i + 12)
                  , h = e.getFloat32(6 + i + 16);
                this._spawnPitchYaw = Object(J.e)(h, o),
                this._team = e.getUint8(6 + i + 20);
                var c = e.getFloat32(6 + i + 21)
                  , _ = e.getFloat32(6 + i + 25)
                  , l = e.getFloat32(6 + i + 29);
                this._minChunkPos = Object(S.l)(c, _, l);
                var u = e.getFloat32(6 + i + 33)
                  , d = e.getFloat32(6 + i + 37)
                  , p = e.getFloat32(6 + i + 41);
                this._maxChunkPos = Object(S.l)(u, d, p)
            }
            ,
            i.size = function() {
                return 6 + this._playerName.length + 20 + 1 + 12 + 12
            }
            ,
            _()(e, [{
                key: "playerId",
                get: function() {
                    return this._playerId
                }
            }, {
                key: "spawnLocation",
                get: function() {
                    return this._spawnLocation
                }
            }, {
                key: "spawnPitchYaw",
                get: function() {
                    return this._spawnPitchYaw
                }
            }, {
                key: "playerName",
                get: function() {
                    return this._playerName
                }
            }, {
                key: "playerTeam",
                get: function() {
                    return this._team
                }
            }, {
                key: "minChunkPos",
                get: function() {
                    return this._minChunkPos
                }
            }, {
                key: "maxChunkPos",
                get: function() {
                    return this._maxChunkPos
                }
            }]),
            e
        }(Be)
          , Ve = function() {
            function t(t, e) {
                this._id = t,
                this._ghostFlags = e,
                this.pos = void 0,
                this.pitchYaw = void 0,
                this.pos = Object(S.l)(0, 0, 0),
                this.pitchYaw = Object(J.e)(0, 0)
            }
            return _()(t, [{
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "ghostFlags",
                get: function() {
                    return this._ghostFlags
                }
            }, {
                key: "positionChanged",
                get: function() {
                    return (1 & this._ghostFlags) > 0
                }
            }, {
                key: "directionChanged",
                get: function() {
                    return (2 & this._ghostFlags) > 0
                }
            }]),
            t
        }()
          , Ze = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, Ue.WORLD_UPDATE_IN) || this)._prevPacketWorldUpdate = e,
                i._serverTimestamp = void 0,
                i._tick = void 0,
                i._entitySnapshots = void 0,
                i._size = void 0,
                i._clientTimestamp = void 0,
                i._clientTimestamp = Date.now(),
                i
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                this._size = 0;
                var e = new DataView(t);
                for (this._serverTimestamp = e.getFloat64(1),
                this._entitySnapshots = new Map,
                this._tick = e.getUint32(9),
                this._size = 13; ; ) {
                    var i = e.getUint32(this._size);
                    if (this._size += 4,
                    0 === i)
                        break;
                    var n = e.getUint8(this._size);
                    this._size += 1;
                    var s = new Ve(i,n);
                    s.positionChanged && (s.pos.x = e.getFloat32(this._size),
                    s.pos.y = e.getFloat32(this._size + 4),
                    s.pos.z = e.getFloat32(this._size + 8),
                    this._size += 12),
                    s.directionChanged && (s.pitchYaw.y = e.getFloat32(this._size),
                    s.pitchYaw.x = e.getFloat32(this._size + 4),
                    this._size += 8),
                    this._entitySnapshots.set(i, s)
                }
                if (void 0 !== this._prevPacketWorldUpdate) {
                    this._clientTimestamp = this._prevPacketWorldUpdate.clientTimestamp + (this._serverTimestamp - this._prevPacketWorldUpdate.serverTimestamp);
                    var r = Date.now() - this._clientTimestamp;
                    this._clientTimestamp += .05 * r,
                    this._prevPacketWorldUpdate = void 0
                }
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "serverTimestamp",
                get: function() {
                    return this._serverTimestamp
                }
            }, {
                key: "clientTimestamp",
                get: function() {
                    return this._clientTimestamp
                }
            }, {
                key: "entitySnapshots",
                get: function() {
                    return this._entitySnapshots
                }
            }, {
                key: "tick",
                get: function() {
                    return this._tick
                }
            }]),
            e
        }(Be)
          , qe = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.SET_BLOCK_IN) || this)._x = void 0,
                e._y = void 0,
                e._z = void 0,
                e._blockId = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._x = e.getInt32(1),
                this._y = e.getInt32(5),
                this._z = e.getInt32(9),
                this._blockId = e.getUint8(13)
            }
            ,
            i.size = function() {
                return 14
            }
            ,
            _()(e, [{
                key: "x",
                get: function() {
                    return this._x
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                }
            }, {
                key: "z",
                get: function() {
                    return this._z
                }
            }, {
                key: "blockId",
                get: function() {
                    return this._blockId
                }
            }]),
            e
        }(Be)
          , Qe = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.RESPAWN_IN) || this)._playerId = void 0,
                e._pos = void 0,
                e._dir = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._playerId = e.getUint32(1);
                var i = e.getFloat32(5)
                  , n = e.getFloat32(9)
                  , s = e.getFloat32(13);
                this._pos = Object(S.l)(i, n, s);
                var r = e.getFloat32(17)
                  , a = e.getFloat32(21);
                this._dir = Object(J.e)(r, a)
            }
            ,
            i.size = function() {
                return 25
            }
            ,
            _()(e, [{
                key: "playerId",
                get: function() {
                    return this._playerId
                }
            }, {
                key: "pos",
                get: function() {
                    return this._pos
                }
            }, {
                key: "dir",
                get: function() {
                    return this._dir
                }
            }]),
            e
        }(Be)
          , Xe = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.ENTITY_METADATA_IN) || this)._entityId = void 0,
                e._size = void 0,
                e._metadatas = void 0,
                e._size = 0,
                e._metadatas = [],
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._size += 1,
                this._entityId = e.getUint32(this._size),
                this._size += 4;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (Et[s]) {
                    case yt.a.UNSIGNED_CHAR:
                        r = e.getUint8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.SIGNED_CHAR:
                        r = e.getInt8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.UNSIGNED_SHORT:
                        r = e.getUint16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.SIGNED_SHORT:
                        r = e.getInt16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.UNSIGNED_INT:
                        r = e.getUint32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.SIGNED_INT:
                        r = e.getInt32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.FLOAT:
                        r = e.getFloat32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.DOUBLE:
                        r = e.getFloat64(this._size),
                        this._size += 8;
                        break;
                    case yt.a.STRING:
                        var a = e.getUint8(this._size);
                        this._size += 1,
                        r = "";
                        for (var o = 0; o < a; o++)
                            r += String.fromCharCode(e.getUint8(this._size)),
                            this._size += 1;
                        break;
                    case yt.a.BOOLEAN:
                        r = e.getUint8(this._size) > 0,
                        this._size += 1;
                        break;
                    default:
                        console.error("Encountered unknown data type when reading Entity Metadata Packet")
                    }
                    this._metadatas.push({
                        metadataType: s,
                        value: r
                    })
                }
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }, {
                key: "metadatas",
                get: function() {
                    return this._metadatas
                }
            }]),
            e
        }(Be)
          , Je = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.GAME_METADATA_IN) || this)._size = void 0,
                e._metadatas = void 0,
                e._size = 0,
                e._metadatas = [],
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._size += 1;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (ge[s]) {
                    case yt.a.UNSIGNED_CHAR:
                        r = e.getUint8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.SIGNED_CHAR:
                        r = e.getInt8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.UNSIGNED_SHORT:
                        r = e.getUint16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.SIGNED_SHORT:
                        r = e.getInt16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.UNSIGNED_INT:
                        r = e.getUint32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.SIGNED_INT:
                        r = e.getInt32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.FLOAT:
                        r = e.getFloat32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.DOUBLE:
                        r = e.getFloat64(this._size),
                        this._size += 8;
                        break;
                    case yt.a.STRING:
                        var a = e.getUint8(this._size);
                        this._size += 1,
                        r = "";
                        for (var o = 0; o < a; o++)
                            r += String.fromCharCode(e.getUint8(this._size)),
                            this._size += 1;
                        break;
                    case yt.a.BOOLEAN:
                        r = e.getUint8(this._size) > 0,
                        this._size += 1;
                        break;
                    default:
                        console.error("Encountered unknown data type when reading Game Metadata Packet")
                    }
                    this._metadatas.push({
                        metadataType: s,
                        value: r
                    })
                }
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "metadatas",
                get: function() {
                    return this._metadatas
                }
            }]),
            e
        }(Be)
          , $e = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.ENTITY_ACTION_IN) || this)._entityId = void 0,
                e._entityActionType = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1),
                this._entityActionType = e.getUint8(5)
            }
            ,
            i.size = function() {
                return 6
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }, {
                key: "actionType",
                get: function() {
                    return this._entityActionType
                }
            }]),
            e
        }(Be)
          , ti = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.FLOATING_BLOCKS_BREAK_IN) || this)._showDestruction = void 0,
                e._origin = void 0,
                e._destroyedBlocks = void 0,
                e._damagedBlocks = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._showDestruction = 1 === e.getUint8(1);
                var i = e.getInt32(2)
                  , n = e.getInt32(6)
                  , s = e.getInt32(10);
                this._origin = Object(S.l)(i, n, s);
                var r = e.getUint16(14);
                this._destroyedBlocks = [];
                for (var a = 0; a < r; a++) {
                    var o = e.getInt32(16 + 12 * a)
                      , h = e.getInt32(16 + 12 * a + 4)
                      , c = e.getInt32(16 + 12 * a + 8);
                    this._destroyedBlocks.push(Object(S.l)(o, h, c))
                }
                var _ = e.getUint16(16 + 12 * r);
                this._damagedBlocks = [];
                for (var l = 0; l < _; l++) {
                    var u = e.getInt32(18 + 12 * r + 16 * l)
                      , d = e.getInt32(18 + 12 * r + 16 * l + 4)
                      , p = e.getInt32(18 + 12 * r + 16 * l + 8)
                      , v = e.getFloat32(18 + 12 * r + 16 * l + 12);
                    this._damagedBlocks.push({
                        pos: Object(S.l)(u, d, p),
                        progress: v
                    })
                }
            }
            ,
            i.size = function() {
                return 16 + 12 * this._destroyedBlocks.length + 2 + 16 * this._damagedBlocks.length
            }
            ,
            _()(e, [{
                key: "showDestruction",
                get: function() {
                    return this._showDestruction
                }
            }, {
                key: "origin",
                get: function() {
                    return this._origin
                }
            }, {
                key: "destroyedBlocks",
                get: function() {
                    return this._destroyedBlocks
                }
            }, {
                key: "damagedBlocks",
                get: function() {
                    return this._damagedBlocks
                }
            }]),
            e
        }(Be)
          , ei = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.DAMAGE_RECEIVED_IN) || this)._sourcePos = void 0,
                e._killed = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getFloat32(1)
                  , n = e.getFloat32(5)
                  , s = e.getFloat32(9);
                this._sourcePos = Object(S.l)(i, n, s);
                var r = e.getUint8(13);
                this._killed = 0 != (1 & r)
            }
            ,
            i.size = function() {
                return 14
            }
            ,
            _()(e, [{
                key: "sourcePos",
                get: function() {
                    return this._sourcePos
                }
            }, {
                key: "killed",
                get: function() {
                    return this._killed
                }
            }]),
            e
        }(Be)
          , ii = i(123)
          , ni = i.n(ii)
          , si = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.CHAT_MESSAGE_IN) || this)._message = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++)
                    this._message += ni()(e.getUint32(2 + 4 * n))
            }
            ,
            i.size = function() {
                return 2 + 4 * this._message.length
            }
            ,
            _()(e, [{
                key: "message",
                get: function() {
                    return this._message
                }
            }]),
            e
        }(Be);
        i(184);
        function ri(t, e) {
            var i;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ai(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return ai(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (i = t[Symbol.iterator]()).next.bind(i)
        }
        function ai(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var oi = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, Ue.SEND_CHAT_MESSAGE_OUT) || this)._message = e,
                i._message = i._message.substr(0, 100),
                i
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size())
                  , e = new DataView(t);
                e.setUint8(0, this.id);
                for (var i, n = [], s = ri(this._message); !(i = s()).done; ) {
                    var r = i.value;
                    n.push(r)
                }
                e.setUint8(1, n.length);
                for (var a = 0; a < n.length; a++) {
                    var o = n[a].codePointAt(0)
                      , h = void 0 === o ? 0 : o;
                    e.setUint32(2 + 4 * a, h)
                }
                return t
            }
            ,
            i.size = function() {
                return 2 + 4 * this._message.length
            }
            ,
            e
        }(je)
          , hi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.ENTITY_CREATE_IN) || this)._entityId = void 0,
                e._entityType = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1),
                this._entityType = e.getUint8(5)
            }
            ,
            i.size = function() {
                return 6
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }, {
                key: "entityType",
                get: function() {
                    return this._entityType
                }
            }]),
            e
        }(Be)
          , ci = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.ENTITY_DESTROY_IN) || this)._entityId = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1)
            }
            ,
            i.size = function() {
                return 2
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }]),
            e
        }(Be)
          , _i = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.PLAYER_KILL_IN) || this)._killerName = void 0,
                e._killerTeam = void 0,
                e._victimName = void 0,
                e._victimTeam = void 0,
                e._deathCause = void 0,
                e._deathCauseItemType = void 0,
                e._size = void 0,
                e._size = 0,
                e._killerName = "",
                e._killerTeam = kt.a.RED,
                e._victimName = "",
                e._victimTeam = kt.a.RED,
                e._deathCauseItemType = ct.a.EMPTY,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                this._size += 1;
                var e = new DataView(t)
                  , i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++)
                    this._killerName += String.fromCharCode(e.getUint8(this._size)),
                    this._size += 1;
                this._killerTeam = e.getUint8(this._size),
                this._size += 1;
                var s = e.getUint8(this._size);
                this._size += 1;
                for (var r = 0; r < s; r++)
                    this._victimName += String.fromCharCode(e.getUint8(this._size)),
                    this._size += 1;
                this._victimTeam = e.getUint8(this._size),
                this._size += 1,
                this._deathCause = e.getUint8(this._size),
                this._size += 1,
                this._deathCause === me.ITEM && (this._deathCauseItemType = e.getUint8(this._size),
                this._size += 1)
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "killerName",
                get: function() {
                    return this._killerName
                }
            }, {
                key: "killerTeam",
                get: function() {
                    return this._killerTeam
                }
            }, {
                key: "victimName",
                get: function() {
                    return this._victimName
                }
            }, {
                key: "victimTeam",
                get: function() {
                    return this._victimTeam
                }
            }, {
                key: "deathCause",
                get: function() {
                    return this._deathCause
                }
            }, {
                key: "deathCauseItemType",
                get: function() {
                    return this._deathCauseItemType
                }
            }]),
            e
        }(Be)
          , li = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.SET_BLOCK_BREAK_PROGRESS_IN) || this)._x = void 0,
                e._y = void 0,
                e._z = void 0,
                e._progress = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._x = e.getInt32(1),
                this._y = e.getInt32(5),
                this._z = e.getInt32(9),
                this._progress = e.getFloat32(13)
            }
            ,
            i.size = function() {
                return 17
            }
            ,
            _()(e, [{
                key: "x",
                get: function() {
                    return this._x
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                }
            }, {
                key: "z",
                get: function() {
                    return this._z
                }
            }, {
                key: "progress",
                get: function() {
                    return this._progress
                }
            }]),
            e
        }(Be)
          , ui = function(t) {
            function e() {
                return t.call(this, Ue.HEARTBEAT_OUT) || this
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size());
                return new DataView(t).setUint8(0, this.id),
                t
            }
            ,
            i.size = function() {
                return 1
            }
            ,
            e
        }(je)
          , di = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.MINIMAP_DATA_IN) || this)._data = void 0,
                e._size = void 0,
                e._data = "",
                e._size = 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint32(1);
                this._data = "";
                for (var n = 0; n < i; n++)
                    this._data += String.fromCharCode(e.getUint8(5 + n));
                this._data = window.btoa(this._data),
                this._size = 5 + i
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "data",
                get: function() {
                    return this._data
                }
            }]),
            e
        }(Be)
          , pi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.PLAYER_KICK_IN) || this)._message = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++)
                    this._message += ni()(e.getUint32(2 + 4 * n))
            }
            ,
            i.size = function() {
                return 2 + this._message.length
            }
            ,
            _()(e, [{
                key: "message",
                get: function() {
                    return this._message
                }
            }]),
            e
        }(Be)
          , vi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.GAME_OVER_IN) || this)._won = void 0,
                e._won = !1,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._won = 0 !== e.getUint8(1)
            }
            ,
            i.size = function() {
                return 2
            }
            ,
            _()(e, [{
                key: "won",
                get: function() {
                    return this._won
                }
            }]),
            e
        }(Be)
          , Si = function(t) {
            function e() {
                return t.call(this, Ue.HEARTBEAT_IN) || this
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                new DataView(t)
            }
            ,
            i.size = function() {
                return 1
            }
            ,
            e
        }(Be)
          , yi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.HUD_CENTER_MESSAGE_IN) || this)._duration = void 0,
                e._message = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._duration = e.getUint8(1);
                var i = e.getUint8(2);
                this._message = "";
                for (var n = 0; n < i; n++)
                    this._message += ni()(e.getUint32(3 + 4 * n))
            }
            ,
            i.size = function() {
                return 3 + 4 * this._message.length
            }
            ,
            _()(e, [{
                key: "duration",
                get: function() {
                    return this._duration
                }
            }, {
                key: "message",
                get: function() {
                    return this._message
                }
            }]),
            e
        }(Be)
          , mi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.TOXIC_CIRCLE_INFO_IN) || this)._currPosition = void 0,
                e._currRadius = void 0,
                e._nextPosition = void 0,
                e._nextRadius = void 0,
                e._prepTime = void 0,
                e._shrinkTime = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getFloat32(1)
                  , n = e.getFloat32(5);
                this._currPosition = Object(J.e)(i, n),
                this._currRadius = e.getFloat32(9);
                var s = e.getFloat32(13)
                  , r = e.getFloat32(17);
                this._nextPosition = Object(J.e)(s, r),
                this._nextRadius = e.getFloat32(21),
                this._prepTime = e.getUint32(25),
                this._shrinkTime = e.getUint32(29)
            }
            ,
            i.size = function() {
                return 33
            }
            ,
            _()(e, [{
                key: "currPosition",
                get: function() {
                    return this._currPosition
                }
            }, {
                key: "currRadius",
                get: function() {
                    return this._currRadius
                }
            }, {
                key: "nextPosition",
                get: function() {
                    return this._nextPosition
                }
            }, {
                key: "nextRadius",
                get: function() {
                    return this._nextRadius
                }
            }, {
                key: "prepTime",
                get: function() {
                    return this._prepTime
                }
            }, {
                key: "shrinkTime",
                get: function() {
                    return this._shrinkTime
                }
            }]),
            e
        }(Be)
          , Ei = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.ENTITY_DAMAGE_IN) || this)._entityId = void 0,
                e._shieldDamage = void 0,
                e._healthDamage = void 0,
                e._showHitMark = void 0,
                e._isHeadshot = void 0,
                e._killed = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._entityId = e.getUint32(1),
                this._shieldDamage = e.getUint8(5),
                this._healthDamage = e.getUint8(6);
                var i = e.getUint8(7);
                this._showHitMark = 0 != (1 & i),
                this._isHeadshot = 0 != (2 & i),
                this._killed = 0 != (4 & i)
            }
            ,
            i.size = function() {
                return 8
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }, {
                key: "healthDamage",
                get: function() {
                    return this._healthDamage
                }
            }, {
                key: "shieldDamage",
                get: function() {
                    return this._shieldDamage
                }
            }, {
                key: "showHitMark",
                get: function() {
                    return this._showHitMark
                }
            }, {
                key: "isHeadshot",
                get: function() {
                    return this._isHeadshot
                }
            }, {
                key: "killed",
                get: function() {
                    return this._killed
                }
            }]),
            e
        }(Be)
          , gi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.REQUEST_JOIN_DENY_IN) || this)._message = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++)
                    this._message += ni()(e.getUint32(2 + 4 * n))
            }
            ,
            i.size = function() {
                return 2 + this._message.length
            }
            ,
            _()(e, [{
                key: "message",
                get: function() {
                    return this._message
                }
            }]),
            e
        }(Be)
          , ki = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, Ue.ITEM_PICK_UP_REQUEST_OUT) || this)._itemEntityId = e,
                i
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size())
                  , e = new DataView(t);
                return e.setUint8(0, this.id),
                e.setUint32(1, this._itemEntityId),
                t
            }
            ,
            i.size = function() {
                return 5
            }
            ,
            e
        }(je)
          , fi = function(t) {
            function e() {
                return t.call(this, Ue.REQUEST_RESPAWN_OUT) || this
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size());
                return new DataView(t).setUint8(0, this.id),
                t
            }
            ,
            i.size = function() {
                return 1
            }
            ,
            e
        }(je)
          , Ii = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.GLOBAL_PLAYER_METADATA_IN) || this)._entityId = void 0,
                e._commandType = void 0,
                e._size = void 0,
                e._metadatas = void 0,
                e._size = 0,
                e._metadatas = [],
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._size += 1,
                this._entityId = e.getUint32(this._size),
                this._size += 4,
                this._commandType = e.getUint8(this._size),
                this._size += 1;
                var i = e.getUint8(this._size);
                this._size += 1;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = 0;
                    switch (Ae[s]) {
                    case yt.a.UNSIGNED_CHAR:
                        r = e.getUint8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.SIGNED_CHAR:
                        r = e.getInt8(this._size),
                        this._size += 1;
                        break;
                    case yt.a.UNSIGNED_SHORT:
                        r = e.getUint16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.SIGNED_SHORT:
                        r = e.getInt16(this._size),
                        this._size += 2;
                        break;
                    case yt.a.UNSIGNED_INT:
                        r = e.getUint32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.SIGNED_INT:
                        r = e.getInt32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.FLOAT:
                        r = e.getFloat32(this._size),
                        this._size += 4;
                        break;
                    case yt.a.DOUBLE:
                        r = e.getFloat64(this._size),
                        this._size += 8;
                        break;
                    case yt.a.STRING:
                        var a = e.getUint8(this._size);
                        this._size += 1,
                        r = "";
                        for (var o = 0; o < a; o++)
                            r += String.fromCharCode(e.getUint8(this._size)),
                            this._size += 1;
                        break;
                    case yt.a.BOOLEAN:
                        r = e.getUint8(this._size) > 0,
                        this._size += 1;
                        break;
                    default:
                        console.error("Encountered unknown data type when reading Entity Metadata Packet")
                    }
                    this._metadatas.push({
                        metadataType: s,
                        value: r
                    })
                }
            }
            ,
            i.size = function() {
                return this._size
            }
            ,
            _()(e, [{
                key: "entityId",
                get: function() {
                    return this._entityId
                }
            }, {
                key: "commandType",
                get: function() {
                    return this._commandType
                }
            }, {
                key: "metadatas",
                get: function() {
                    return this._metadatas
                }
            }]),
            e
        }(Be)
          , Ti = i(31)
          , Oi = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, Ue.REQUEST_LOADOUT_OUT) || this)._loadoutType = e,
                n._weaponType = i,
                n
            }
            it()(e, t);
            var i = e.prototype;
            return i.pack = function() {
                var t = new ArrayBuffer(this.size())
                  , e = new DataView(t);
                return e.setUint8(0, this.id),
                e.setUint8(1, this._loadoutType),
                e.setUint8(2, this._weaponType),
                t
            }
            ,
            i.size = function() {
                return 3
            }
            ,
            e
        }(je)
          , Ai = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.NOTIFICATION_MESSAGE_IN) || this)._message = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint8(1);
                this._message = "";
                for (var n = 0; n < i; n++)
                    this._message += ni()(e.getUint32(2 + 4 * n))
            }
            ,
            i.size = function() {
                return 2 + 4 * this._message.length
            }
            ,
            _()(e, [{
                key: "message",
                get: function() {
                    return this._message
                }
            }]),
            e
        }(Be)
          , Ci = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.PLAY_DIRECT_SOUND_IN) || this)._soundType = void 0,
                e._detune = void 0,
                e._volume = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._soundType = e.getUint8(1),
                this._detune = e.getFloat32(2),
                this._volume = e.getFloat32(6)
            }
            ,
            i.size = function() {
                return 10
            }
            ,
            _()(e, [{
                key: "soundType",
                get: function() {
                    return this._soundType
                }
            }, {
                key: "detune",
                get: function() {
                    return this._detune
                }
            }, {
                key: "volume",
                get: function() {
                    return this._volume
                }
            }]),
            e
        }(Be)
          , Ri = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.PLAY_POSITIONAL_SOUND_IN) || this)._position = void 0,
                e._soundType = void 0,
                e._detune = void 0,
                e._volume = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getFloat32(1)
                  , n = e.getFloat32(5)
                  , s = e.getFloat32(9);
                this._position = Object(S.l)(i, n, s),
                this._soundType = e.getUint8(13),
                this._detune = e.getFloat32(14),
                this._volume = e.getFloat32(18)
            }
            ,
            i.size = function() {
                return 22
            }
            ,
            _()(e, [{
                key: "position",
                get: function() {
                    return this._position
                }
            }, {
                key: "soundType",
                get: function() {
                    return this._soundType
                }
            }, {
                key: "detune",
                get: function() {
                    return this._detune
                }
            }, {
                key: "volume",
                get: function() {
                    return this._volume
                }
            }]),
            e
        }(Be)
          , bi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.KILL_MEDAL_IN) || this)._killMedalType = void 0,
                e._score = void 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t);
                this._killMedalType = e.getUint8(1),
                this._score = e.getUint16(2)
            }
            ,
            i.size = function() {
                return 4
            }
            ,
            _()(e, [{
                key: "killMedalType",
                get: function() {
                    return this._killMedalType
                }
            }, {
                key: "score",
                get: function() {
                    return this._score
                }
            }]),
            e
        }(Be)
          , Pi = function(t) {
            function e() {
                var e;
                return (e = t.call(this, Ue.RESPAWN_IN) || this)._teams = void 0,
                e._size = void 0,
                e._teams = [],
                e._size = 0,
                e
            }
            it()(e, t);
            var i = e.prototype;
            return i.unpack = function(t) {
                var e = new DataView(t)
                  , i = e.getUint8(1);
                this._size += 2;
                for (var n = 0; n < i; n++) {
                    var s = e.getUint8(this._size);
                    this._size += 1;
                    var r = ""
                      , a = String.fromCharCode(e.getUint8(this._size));
                    for (this._size += 1; a !== String.fromCharCode(0); )
                        r += a,
                        a = String.fromCharCode(e.getUint8(this._size)),
                        this._size += 1;
                    var o = e.getUint32(this._size);
                    this._size += 4,
                    this._teams.push({
                        type: s,
                        name: r,
                        color: o
                    })
                }
            }
            ,
            i.size = function() {
                return 1 + this._size
            }
            ,
            _()(e, [{
                key: "teams",
                get: function() {
                    return this._teams
                }
            }]),
            e
        }(Be)
          , Mi = function() {
            function t(t) {
                var e = this;
                this._statsRenderer = t,
                this._primaryLoadout = void 0,
                this._secondaryLoadout = void 0,
                this._socket = void 0,
                this._ip = void 0,
                this._port = void 0,
                this._lastHeartbeatSendTime = void 0,
                this._prevPacketWorldUpdate = void 0,
                this.onInputReceived = function(t) {
                    var i = new Ke(t);
                    e.sendPacket(i)
                }
                ,
                this.onChatMessageSend = function(t) {
                    var i = new oi(t);
                    e.sendPacket(i)
                }
                ,
                this.onItemPickupRequest = function(t) {
                    var i = new ki(t);
                    e.sendPacket(i)
                }
                ,
                this.onRequestLoadout = function(t, i) {
                    var n = new Oi(t,i);
                    e.sendPacket(n)
                }
                ,
                this.onRequestRespawn = function() {
                    var t = new fi;
                    e.sendPacket(t)
                }
                ,
                this.onSocketOpen = function() {
                    we.a.log("Connected to " + e.address + ":" + e.port);
                    var t = new We(e._primaryLoadout,e._secondaryLoadout);
                    e.sendPacket(t)
                }
                ,
                this.heartBeat = function() {
                    if (e.connected) {
                        e._lastHeartbeatSendTime = Date.now();
                        var t = new ui;
                        e.sendPacket(t)
                    }
                }
                ,
                this.onHeartBeat = function() {
                    var t = Date.now() - e._lastHeartbeatSendTime;
                    e._statsRenderer.ping = t,
                    setTimeout(e.heartBeat, l.a.PING_CHECK_INTERVAL)
                }
                ,
                this.onSocketMessage = function(t) {
                    var i = t.data;
                    switch (new DataView(i).getUint8(0)) {
                    case Ue.LOAD_CHUNK_IN:
                        var n = new ze;
                        n.unpack(i),
                        d.a.emit(p.a.LOAD_CHUNK, n.x, n.y, n.z, n.numNonEmptyBlocks, n.blocks),
                        e._statsRenderer.recordDownload(n.size());
                        break;
                    case Ue.UNLOAD_CHUNK_IN:
                        var s = new Fe;
                        s.unpack(i),
                        d.a.emit(p.a.UNLOAD_CHUNK, s.x, s.y, s.z),
                        e._statsRenderer.recordDownload(s.size());
                        break;
                    case Ue.SERVER_INPUT_RESPONSE_IN:
                        var r = new He;
                        r.unpack(i),
                        d.a.emit(p.a.INPUT_VERIFICATION_RECEIVED, r.positionChanged, r.velocityChanged, r.eyeHeightChanged, r.aimSpreadChanged, r.selectedIndexChanged, r.healthOrShieldChanged, r.buildModeChanged, r.inventoryStatusChanged, r.physicsStep, r.selectedIndex, r.items, r.cooldowns, r.maxHealth, r.health, r.maxShield, r.shield, r.buildMode, r.inventoryStatus),
                        e._statsRenderer.recordDownload(r.size());
                        break;
                    case Ue.WORLD_UPDATE_IN:
                        var a = new Ze(e._prevPacketWorldUpdate);
                        e._prevPacketWorldUpdate = a,
                        a.unpack(i),
                        d.a.emit(p.a.WORLD_UPDATE_RECEIVED, a),
                        e._statsRenderer.recordDownload(a.size());
                        break;
                    case Ue.REQUEST_JOIN_RESPONSE_IN:
                        var o = new Ye;
                        o.unpack(i),
                        d.a.emit(p.a.GAME_JOIN, o.playerId, o.playerName, o.spawnLocation, o.spawnPitchYaw, o.playerTeam, o.minChunkPos, o.maxChunkPos),
                        e._statsRenderer.recordDownload(o.size()),
                        e.heartBeat();
                        break;
                    case Ue.SET_BLOCK_IN:
                        var h = new qe;
                        h.unpack(i),
                        d.a.emit(p.a.SET_BLOCK, h.x, h.y, h.z, h.blockId),
                        e._statsRenderer.recordDownload(h.size());
                        break;
                    case Ue.FLOATING_BLOCKS_BREAK_IN:
                        var c = new ti;
                        c.unpack(i),
                        d.a.emit(p.a.FLOATING_BLOCKS_BREAK, c.showDestruction, c.origin, c.destroyedBlocks, c.damagedBlocks),
                        e._statsRenderer.recordDownload(c.size());
                        break;
                    case Ue.RESPAWN_IN:
                        var _ = new Qe;
                        _.unpack(i),
                        d.a.emit(p.a.RESPAWN, _.playerId, _.pos, _.dir),
                        e._statsRenderer.recordDownload(_.size());
                        break;
                    case Ue.CHAT_MESSAGE_IN:
                        var l = new si;
                        l.unpack(i),
                        d.a.emit(p.a.CHAT_MESSAGE_RECEIVE, l.message),
                        e._statsRenderer.recordDownload(l.size());
                        break;
                    case Ue.ENTITY_CREATE_IN:
                        var u = new hi;
                        u.unpack(i),
                        d.a.emit(p.a.ENTITY_CREATE, u.entityId, u.entityType),
                        e._statsRenderer.recordDownload(u.size());
                        break;
                    case Ue.ENTITY_DESTROY_IN:
                        var v = new ci;
                        v.unpack(i),
                        d.a.emit(p.a.ENTITY_DESTROY, v.entityId),
                        e._statsRenderer.recordDownload(v.size());
                        break;
                    case Ue.PLAYER_KILL_IN:
                        var S = new _i;
                        S.unpack(i),
                        d.a.emit(p.a.PLAYER_KILL, S.killerName, S.killerTeam, S.victimName, S.victimTeam, S.deathCause, S.deathCauseItemType),
                        e._statsRenderer.recordDownload(S.size());
                        break;
                    case Ue.ENTITY_METADATA_IN:
                        var y = new Xe;
                        y.unpack(i),
                        d.a.emit(p.a.ENTITY_UPDATE_METADATAS, y.entityId, y.metadatas),
                        e._statsRenderer.recordDownload(y.size());
                        break;
                    case Ue.GLOBAL_PLAYER_METADATA_IN:
                        var m = new Ii;
                        m.unpack(i),
                        d.a.emit(p.a.GLOBAL_PLAYER_METADATA, m.entityId, m.commandType, m.metadatas),
                        e._statsRenderer.recordDownload(m.size());
                        break;
                    case Ue.SET_BLOCK_BREAK_PROGRESS_IN:
                        var E = new li;
                        E.unpack(i),
                        d.a.emit(p.a.SET_BLOCK_BREAK_PROGRESS, E.x, E.y, E.z, E.progress),
                        e._statsRenderer.recordDownload(E.size());
                        break;
                    case Ue.ENTITY_ACTION_IN:
                        var g = new $e;
                        g.unpack(i),
                        d.a.emit(p.a.ENTITY_ACTION, g.entityId, g.actionType),
                        e._statsRenderer.recordDownload(g.size());
                        break;
                    case Ue.HEARTBEAT_IN:
                        var k = new Si;
                        k.unpack(i),
                        e._statsRenderer.recordDownload(k.size()),
                        e.onHeartBeat();
                        break;
                    case Ue.DAMAGE_RECEIVED_IN:
                        var f = new ei;
                        f.unpack(i),
                        d.a.emit(p.a.CLIENT_DAMAGE_RECEIVED, f.sourcePos, f.killed),
                        e._statsRenderer.recordDownload(f.size());
                        break;
                    case Ue.ENTITY_DAMAGE_IN:
                        var I = new Ei;
                        I.unpack(i),
                        d.a.emit(p.a.ENTITY_DAMAGE, I.entityId, I.shieldDamage, I.healthDamage, I.showHitMark, I.isHeadshot, I.killed),
                        e._statsRenderer.recordDownload(I.size());
                        break;
                    case Ue.MINIMAP_DATA_IN:
                        var T = new di;
                        T.unpack(i),
                        d.a.emit(p.a.MINIMAP_DATA, T.data),
                        e._statsRenderer.recordDownload(T.size());
                        break;
                    case Ue.HUD_CENTER_MESSAGE_IN:
                        var O = new yi;
                        O.unpack(i),
                        d.a.emit(p.a.HUD_CENTER_MESSAGE, O.duration, O.message),
                        e._statsRenderer.recordDownload(O.size());
                        break;
                    case Ue.TOXIC_CIRCLE_INFO_IN:
                        var A = new mi;
                        A.unpack(i),
                        d.a.emit(p.a.TOXIC_CIRCLE_INFO_SYNC, A.currPosition, A.currRadius, A.nextPosition, A.nextRadius, A.prepTime, A.shrinkTime),
                        e._statsRenderer.recordDownload(A.size());
                        break;
                    case Ue.GAME_METADATA_IN:
                        var C = new Je;
                        C.unpack(i),
                        d.a.emit(p.a.GAME_METADATA, C.metadatas),
                        e._statsRenderer.recordDownload(C.size());
                        break;
                    case Ue.GAME_OVER_IN:
                        var R = new vi;
                        R.unpack(i),
                        d.a.emit(p.a.GAME_OVER, R.won),
                        e._statsRenderer.recordDownload(R.size());
                        break;
                    case Ue.PLAYER_KICK_IN:
                        var b = new pi;
                        b.unpack(i),
                        d.a.emit(p.a.PLAYER_KICK, b.message),
                        e._statsRenderer.recordDownload(b.size());
                        break;
                    case Ue.REQUEST_JOIN_DENY_IN:
                        var P = new gi;
                        P.unpack(i),
                        d.a.emit(p.a.GAME_JOIN_DENY, P.message),
                        e._statsRenderer.recordDownload(P.size());
                        break;
                    case Ue.NOTIFICATION_MESSAGE_IN:
                        var M = new Ai;
                        M.unpack(i),
                        d.a.emit(p.a.NOTIFICATION_MESSAGE_RECEIVED, M.message),
                        e._statsRenderer.recordDownload(M.size());
                        break;
                    case Ue.PLAY_DIRECT_SOUND_IN:
                        var x = new Ci;
                        x.unpack(i),
                        d.a.emit(p.a.PLAY_DIRECT_SOUND, x.soundType, x.detune, x.volume),
                        e._statsRenderer.recordDownload(x.size());
                        break;
                    case Ue.PLAY_POSITIONAL_SOUND_IN:
                        var N = new Ri;
                        N.unpack(i),
                        d.a.emit(p.a.PLAY_POSITIONAL_SOUND, N.position, N.soundType, N.detune, N.volume),
                        e._statsRenderer.recordDownload(N.size());
                        break;
                    case Ue.KILL_MEDAL_IN:
                        var L = new bi;
                        L.unpack(i),
                        d.a.emit(p.a.KILL_MEDAL, L.killMedalType, L.score),
                        e._statsRenderer.recordDownload(L.size());
                        break;
                    case Ue.SCOREBOARD_TEAM_INFO_IN:
                        var w = new Pi;
                        w.unpack(i),
                        d.a.emit(p.a.SCOREBOARD_TEAM_INFO, w.teams),
                        e._statsRenderer.recordDownload(w.size())
                    }
                }
                ,
                this.onSocketError = function(t) {
                    e.disconnect(),
                    we.a.log("An unknown error has occurred during the connection")
                }
                ,
                this.onSocketClose = function(t) {
                    e.disconnect(),
                    we.a.log("Disconnected from " + e.address + ":" + e.port)
                }
                ,
                this._primaryLoadout = Ti.b.COMBAT_ASSAULT_RIFLE,
                this._secondaryLoadout = Ti.c.STRIKE_PISTOL,
                this._lastHeartbeatSendTime = 0
            }
            var e = t.prototype;
            return e.connect = function(t, e, i, n) {
                this._primaryLoadout = t,
                this._secondaryLoadout = e,
                this._ip = i,
                this._port = n,
                this._socket = new WebSocket("wss://" + this._ip + ":" + this._port),
                this._socket.binaryType = "arraybuffer",
                this.bindSocketListeners(),
                this.bindEventListeners()
            }
            ,
            e.bindEventListeners = function() {
                d.a.on(p.a.INPUT_RECEIVED, this.onInputReceived),
                d.a.on(p.a.CHAT_MESSAGE_SEND, this.onChatMessageSend),
                d.a.on(p.a.ITEM_PICKUP_REQUEST, this.onItemPickupRequest),
                d.a.on(p.a.REQUEST_LOADOUT, this.onRequestLoadout),
                d.a.on(p.a.REQUEST_RESPAWN, this.onRequestRespawn)
            }
            ,
            e.unbindEventListeners = function() {
                d.a.off(p.a.INPUT_RECEIVED, this.onInputReceived),
                d.a.off(p.a.CHAT_MESSAGE_SEND, this.onChatMessageSend),
                d.a.off(p.a.ITEM_PICKUP_REQUEST, this.onItemPickupRequest),
                d.a.off(p.a.REQUEST_LOADOUT, this.onRequestLoadout),
                d.a.off(p.a.REQUEST_RESPAWN, this.onRequestRespawn)
            }
            ,
            e.bindSocketListeners = function() {
                void 0 !== this._socket && (this._socket.addEventListener("open", this.onSocketOpen),
                this._socket.addEventListener("message", this.onSocketMessage),
                this._socket.addEventListener("error", this.onSocketError),
                this._socket.addEventListener("close", this.onSocketClose))
            }
            ,
            e.unbindSocketListeners = function() {
                void 0 !== this._socket && (this._socket.removeEventListener("open", this.onSocketOpen),
                this._socket.removeEventListener("message", this.onSocketMessage),
                this._socket.removeEventListener("error", this.onSocketError),
                this._socket.removeEventListener("close", this.onSocketClose))
            }
            ,
            e.sendPacket = function(t) {
                this.connected && (this._socket.send(t.pack()),
                this._statsRenderer.recordUpload(t.size()))
            }
            ,
            e.sendBuffer = function(t) {
                this.connected && this._socket.send(t)
            }
            ,
            e.disconnect = function() {
                this.connected && this._socket.close(),
                this.unbindEventListeners(),
                this.unbindSocketListeners(),
                this._socket = void 0,
                this._ip = void 0,
                this._port = void 0,
                Object(y.c)() !== Pt.a.ENDED && (Object(y.r)(Pt.a.ENDED),
                d.a.emit(p.a.GAME_LEAVE))
            }
            ,
            _()(t, [{
                key: "address",
                get: function() {
                    return void 0 === this._ip ? "unavailable" : this._ip
                }
            }, {
                key: "port",
                get: function() {
                    return void 0 === this._port ? -1 : this._port
                }
            }, {
                key: "connected",
                get: function() {
                    return void 0 !== this._socket && 1 == this._socket.readyState
                }
            }]),
            t
        }()
          , xi = function() {
            var t = o()(r.a.mark((function t() {
                var e, i;
                return r.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return h.m.enabled = !0,
                            function() {
                                var t = h.hb.prototype.updateMatrixWorld;
                                h.hb.prototype.updateMatrixWorld = function() {
                                    this.visible && t.apply(this)
                                }
                            }(),
                            t.next = 4,
                            Le();
                        case 4:
                            e = t.sent,
                            i = new Mi(e.statsRenderer),
                            d.a.on(p.a.REQUEST_GAME_START, (function(t, e, n, s) {
                                i.connect(t, e, n, s),
                                window.onbeforeunload = function() {
                                    return ""
                                }
                            }
                            )),
                            d.a.on(p.a.REQUEST_GAME_LEAVE, (function(t, n, s) {
                                i.disconnect(),
                                e.rebuildScene()
                            }
                            )),
                            de.d.dispatch(Object(pe.q)(!0));
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }();
        e.default = xi
    }
}]);
