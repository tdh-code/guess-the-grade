// Palettes du jeu Guess The Grade.
// Chaque film : titre + couleurs (hex) + poids (proportion à l'écran).
// "vraie palette" = couleurs relevées sur une image du film. Les autres sont approximatives.
window.CP_FILMS = [
  { title: "Blade Runner 2049", colors: ["#1b120c","#6b3a1a","#c8692a","#e9a347","#f3d08a"], weights: [30,24,20,16,10] },
  { title: "The Grand Budapest Hotel", colors: ["#3c1f3a","#b23a5b","#e88aa0","#f4c9c4","#e7b061"], weights: [18,24,24,20,14] },
  { title: "The Matrix", colors: ["#050806","#0e2214","#2f5e2e","#7fae63","#c9dfb0"], weights: [36,26,18,12,8] },
  { title: "Amélie", colors: ["#391507","#681706","#982100","#bf6900","#ffa722","#efc245","#838500","#636900","#4c7500","#262e05"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Moonlight", colors: ["#0b1026","#17366b","#2f74a8","#8e3f8a","#e7a56f"], weights: [30,24,20,14,12] },
  { title: "Mad Max: Fury Road", colors: ["#0d656c","#15393b","#404843","#b79076","#ffd2b4","#ee8f46","#e5790e","#5c2b09","#2e1512","#0f1018"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "In the Mood for Love", colors: ["#120707","#4b0d0f","#8f1c1a","#c4622b","#d9b07a"], weights: [32,26,20,12,10] },
  { title: "Her", colors: ["#3a1712","#a83b2a","#e0704f","#f2b49a","#f6e1d2"], weights: [14,24,26,20,16] },
  { title: "La La Land", colors: ["#141a3b","#3b3f8f","#7a4fb0","#e5b53a","#f1e6c8"], weights: [28,22,20,16,14] },
  { title: "Drive", colors: ["#07070d","#1c1440","#c4317a","#f067a6","#f4c06b"], weights: [38,22,16,14,10] },
  { title: "Joker", colors: ["#141412","#3e3a2a","#8a2b1c","#d6612a","#e8c35a"], weights: [30,26,18,14,12] },
  { title: "Dune", colors: ["#1a1410","#5a4330","#a47e55","#d8b585","#efe0c4"], weights: [22,24,24,18,12] },
  { title: "Suspiria", colors: ["#0a0608","#5e0a1a","#c4142a","#2a3a9a","#e8a03a"], weights: [34,22,20,14,10] },
  { title: "The Shining", colors: ["#2a0c0a","#7a1a12","#c25a2a","#e4c48a","#3e5a6a"], weights: [24,26,20,18,12] },
  { title: "Spirited Away", colors: ["#65738e","#766c90","#79566d","#513a59","#803c3c","#bc5e53","#ee8b78","#faca86","#eca15d","#9b5031"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Midsommar", colors: ["#e9eef0","#f6f0d4","#bfd9e8","#7fb06a","#f3c94a"], weights: [26,26,20,16,12] },
  { title: "Fight Club", colors: ["#0d0f0a","#2b3220","#5b6a3a","#9aa86a","#d9d2a8"], weights: [34,26,18,12,10] },
  { title: "Se7en", colors: ["#0b0b09","#2a2a1e","#5a5535","#8f8455","#c9bd8a"], weights: [36,26,18,12,8] },
  { title: "The Revenant", colors: ["#161a1e","#272e2e","#7e7d79","#e5e1e0","#b2bac0","#92b0c1","#4e8ca7","#0f3e52","#031a27","#040b19"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Sicario", colors: ["#0c0c10","#3a2a1e","#8a5a2e","#c79a5e","#2a3a4e"], weights: [32,22,18,14,14] },
  { title: "Arrival", colors: ["#1a1e22","#3e4a52","#7a8a92","#b8c2c6","#e4e8e8"], weights: [26,24,22,16,12] },
  { title: "Interstellar", colors: ["#0a0c0e","#3c3a30","#8a7a58","#c8b48a","#e9e2cc"], weights: [30,22,20,16,12] },
  { title: "No Country for Old Men", colors: ["#2a2016","#6a5232","#a8885a","#d2bc8e","#8a9aa4"], weights: [22,24,22,18,14] },
  { title: "O Brother, Where Art Thou?", colors: ["#3a2a14","#7a5a24","#b89040","#d8c070","#efe2b0"], weights: [20,24,24,18,14] },
  { title: "Amores Perros", colors: ["#120c08","#4a2a12","#9a4a1a","#d8822e","#e8c46a"], weights: [30,24,20,14,12] },
  { title: "Black Swan", colors: ["#060606","#2a2a2c","#6a6a70","#c8c8cc","#a01e2a"], weights: [34,22,18,18,8] },
  { title: "The Lighthouse", colors: ["#050505","#2a2a2a","#6a6a6a","#a8a8a8","#e8e8e8"], weights: [30,24,20,16,10] },
  { title: "Moonrise Kingdom", colors: ["#5a3a1a","#c8862a","#e8c25a","#8aa04a","#e7d9b0"], weights: [18,24,24,18,16] },
  { title: "The Florida Project", colors: ["#7a3aa0","#e86aa8","#f2a2c8","#6ac0d8","#f6e27a"], weights: [20,24,20,18,18] },
  { title: "Barbie", colors: ["#c41e6a","#ec4f96","#f79ac4","#fbd0e2","#5ec8e6"], weights: [20,26,24,16,14] },
  { title: "Oppenheimer", colors: ["#0a0806","#3a2414","#8a4a1e","#e08a2e","#f6d48a"], weights: [32,24,18,14,12] },
  { title: "Parasite", colors: ["#000000","#0d170e","#1d2a1b","#2e4026","#596c56","#869e86","#927436","#583b11","#462810","#30150e"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Roma", colors: ["#101010","#3a3a3a","#7a7a7a","#b4b4b4","#ececec"], weights: [22,22,22,20,14] },
  { title: "Skyfall", colors: ["#06080c","#14243a","#2a5a8a","#e07a2a","#f2c46a"], weights: [34,24,16,14,12] },
  { title: "Lost in Translation", colors: ["#584f4f","#3c2e2c","#160f13","#3a1c23","#4d3d4e","#767688","#aaaac6","#585c6f","#282f3f","#050716"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Only God Forgives", colors: ["#080404","#3a0606","#8a0e12","#d41e1e","#2a1e4a"], weights: [34,24,18,14,10] },
  { title: "The Neon Demon", colors: ["#05050a","#1a0a3a","#5a1a9a","#e02a8a","#3ae0f0"], weights: [36,20,16,16,12] },
  { title: "Euphoria", colors: ["#0a0614","#2a1a5a","#7a3ab8","#e84aa8","#f4c04a"], weights: [32,22,18,16,12] },
  { title: "Sin City", colors: ["#020202","#3a3a3a","#e8e8e8","#c8101a","#f2d21a"], weights: [40,18,24,12,6] },
  { title: "Up", colors: ["#2a6ab8","#7ac0e8","#e84a3a","#f2c23a","#8ac04a"], weights: [26,24,18,16,16] },
  { title: "Wall-E", colors: ["#2a1e12","#7a5a2a","#c89a4a","#e8c87a","#3a5a7a"], weights: [24,26,22,16,12] },
  { title: "Kill Bill: Vol. 1", colors: ["#0a0a0a","#f2c41a","#e8e0c8","#b01a1a","#2a4a8a"], weights: [30,22,20,16,12] },
  { title: "The Godfather", colors: ["#080604","#2e1e10","#6a4422","#a8763e","#d8b07a"], weights: [36,26,18,12,8] },
  { title: "Vertigo", colors: ["#0a1a12","#1e5a3a","#3a9a6a","#c8a46a","#a82a2a"], weights: [28,24,20,16,12] },
  { title: "The Substance", colors: ["#0a172a","#1e2a42","#2c364d","#3f445a","#808291","#c3bacb","#d6cbd9","#c6a1a9","#997277","#905061"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Inside Llewyn Davis", colors: ["#0d1019","#2a394c","#27475e","#686369","#8d8c87","#d4d5b6","#cab9a7","#a48c80","#8d716d","#584446"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Spring Breakers", colors: ["#100408","#48180d","#592f26","#d4957f","#fdf0de","#f5bb8b","#dd8457","#c56e63","#923e41","#6f1035"], weights: [10,10,10,10,10,10,10,10,10,10] }, // vraie palette
  { title: "Eternal Sunshine of the Spotless Mind", colors: ["#0a082d","#192f6b","#304a68","#536f96","#5c7fa5","#889bac","#848580","#6b6378","#4f2759","#66142a"], weights: [10,10,10,10,10,10,10,10,10,10] } // vraie palette
];
