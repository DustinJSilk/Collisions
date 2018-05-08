#!/bin/bash

babel src/Collisions.mjs --out-file src/Collisions.js

babel src/modules/Body.mjs --out-file src/modules/Body.js
babel src/modules/BVH.mjs --out-file src/modules/BVH.js
babel src/modules/BVHBranch.mjs --out-file src/modules/BVHBranch.js
babel src/modules/Circle.mjs --out-file src/modules/Circle.js
babel src/modules/Point.mjs --out-file src/modules/Point.js
babel src/modules/Polygon.mjs --out-file src/modules/Polygon.js
babel src/modules/Result.mjs --out-file src/modules/Result.js
babel src/modules/SAT.mjs --out-file src/modules/SAT.js