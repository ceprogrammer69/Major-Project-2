const products = [
  // CPU
  {
    id: 0,
    name: "CPU1",
    price: 16388.9,
    description:
      "Intel Core i7-12700K Alder Lake 3.6GHz Twelve-Core LGA 1700 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu1.jpg",
  },
  {
    id: 1,
    name: "CPU2",
    price: 18149.45,
    description:
      "Intel Core i7-13700K Raptor Lake 3.4GHz Sixteen-Core LGA 1700 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu2.jpg",
  },
  {
    id: 2,
    name: "CPU3",
    price: 12099.45,
    description:
      "AMD Ryzen 7 5800X Vermeer 3.8GHz 8-Core AM4 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu3.jpg",
  },
  {
    id: 3,
    name: "CPU4",
    price: 18863.9,
    description:
      "AMD Ryzen 7 7700X Raphael AM5 4.5GHz 8-Core Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu4.jpg",
  },
  {
    id: 4,
    name: "CPU5",
    price: 29149.45,
    description:
      "Intel Core i9-13900K Raptor Lake 3.0GHz Twenty Four-Core LGA 1700 Boxed Processor - Heatsink Not Included ",
    imgSrc: "./assets/img/cpu5.jpg",
  },
  {
    id: 5,
    name: "CPU6",
    price: 13033.9,
    description:
      "Intel Core i5-12600K Alder Lake 3.7GHz Ten-Core LGA 1700 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu6.jpg",
  },
  {
    id: 6,
    name: "CPU7",
    price: 16499.45,
    description:
      "AMD Ryzen 7 5800X3D Vermeer 3.4GHz 8-Core AM4 Boxed Processor - Cooler Not Included",
    imgSrc: "./assets/img/cpu7.jpg",
  },
  {
    id: 7,
    name: "CPU8",
    price: 8799.45,
    description:
      "AMD Ryzen 5 5600X Vermeer 3.7GHz 6-Core AM4 Boxed Processor - Wraith Stealth Cooler Included",
    imgSrc: "./assets/img/cpu8.jpg",
  },
  // Motherboard

  {
    id: 8,
    name: "MB1",
    price: 27499.45
    ,
    description:
      "ASUS Z790-E ROG Strix Gaming WiFi Intel LGA 1700 ATX Motherboard",
    imgSrc: "./assets/img/mb1.jpg",
  },
  {
    id: 9,
    name: "MB2",
    price: 34649.45
    ,
    description:
      "ASUS Z790 ROG Maximus Hero Intel LGA 1700 ATX Motherboard",
    imgSrc: "./assets/img/mb2.jpg",
  },
  {
    id: 10,
    name: "MB3",
    price: 18149.45
    ,
    description:
      "ASUS X670E-PLUS TUF GAMING WIFI ATX Motherboard",
    imgSrc: "./assets/img/mb3.jpg",
  },
  {
    id: 11,
    name: "MB4",
    price: 12649.45
    ,
    description:
      "Gigabyte B650 AORUS Elite AX AMD AM5 ATX Motherboard ",
    imgSrc: "./assets/img/mb4.jpg",
  },
  {
    id: 12,
    name: "MB5",
    price: 11549.45
    ,
    description:
      "ASUS X570 TUF Gaming Plus (WIFI) AMD AM4 ATX Motherboard",
    imgSrc: "./assets/img/mb5.jpg",
  },
  {
    id: 13,
    name: "MB6",
    price: 27499.45,
    description:
      "ASUS X670E-E ROG Strix Gaming WiFi AMD AM5 ATX Motherboard",
    imgSrc: "./assets/img/mb6.jpg",
  },
  {
    id: 14,
    name: "MB7",
    price: 15949.45,
    description:
      "ASUS Z790-PLUS TUF Gaming WiFi D4 Intel LGA 1700 ATX Motherboard",
    imgSrc: "./assets/img/mb7.jpg",
  },
  {
    id: 15,
    name: "MB8",
    price: 20899.45,
    description:
      "ASUS Z790-A ROG Strix Gaming WiFi D4 Intel LGA 1700 ATX Motherboard",
    imgSrc: "./assets/img/mb8.jpg",
  },
  // Ram

  {
    id: 16,
    name: "RAM1",
    price: 9349.45
    ,
    description:
      "Corsair Vengeance RGB 32GB (2 x 16GB) DDR5-5600 PC5-44800 CL36 Dual Channel Desktop Memory Kit CMH32GX5M2B56K",
    imgSrc: "./assets/img/ram1.jpg",
  },
  {
    id: 17,
    name: "RAM2",
    price: 9349.45
    ,
    description:
      "Corsair Vengeance RGB 32GB (2 x 16GB) DDR5-5600 PC5-44800 CL36 Dual Channel Desktop Memory Kit CMH32GX5M2B56WK - White ",
    imgSrc: "./assets/img/ram2.jpg",
  },
  {
    id: 18,
    name: "RAM3",
    price: 14299.45
    ,
    description:
      "G.Skill Ripjaws S5 64GB (2 x 32GB) DDR5-5200 PC5-41600 CL36 Dual Channel Desktop Memory Kit F5-5200J3636D32GX2-RS5K ",
    imgSrc: "./assets/img/ram3.jpg",
  },
  {
    id: 19,
    name: "RAM4",
    price: 4399.45
    ,
    description:
      "Crucial 16GB (2 x 8GB) DDR5-4800 PC5-38400 CL40 Dual Channel Desktop Memory Kit CT2K8G48C40U5",
    imgSrc: "./assets/img/4.jpg",
  },
  {
    id: 20,
    name: "RAM5",
    price: 16499.45
    ,
    description:
      "Corsair Vengeance RGB 64GB (2 x 32GB) DDR5-5600 PC5-44800 CL40 Dual Channel Desktop Memory Kit CMH64GX5M2B5600 - Black ",
    imgSrc: "./assets/img/ram5.jpg",
  },
  {
    id: 21,
    name: "RAM6",
    price: 15289.45,
    description:
      "Corsair Vengeance RGB 64GB (2 x 32GB) DDR5-5200 PC5-41600 CL40 Dual Channel Desktop Memory Kit CMH64GX5M2B5200 - Black",
    imgSrc: "./assets/img/ram6.jpg",
  },
  {
    id: 22,
    name: "RAM7",
    price: 8524.45,
    description:
      "Corsair Vengeance RGB 32GB (2 x 16GB) DDR5-5200 PC5-41600 CL40 Dual Channel Desktop Memory Kit CMH32GX5M2B520 - Black ",
    imgSrc: "./assets/img/ram7.jpg",
  },
  {
    id: 23,
    name: "RAM8",
    price: 7699.45,
    description:
      "Corsair Vengeance 32GB (2 x 16GB) DDR5-5600 PC5-44800 CL36 Dual Channel Desktop Memory Kit CMK32GX5M2B5600 - Black ",
    imgSrc: "./assets/img/ram8.jpg",
  },
  // PC Case
  {
    id: 24,
    name: "CASE1",
    price: 9349.45
    ,
    description:
      "Lian Li LANCOOL III RGB Tempered Glass ATX Mid-Tower Computer Case - Black",
    imgSrc: "./assets/img/case1.jpg",
  },
  {
    id: 25,
    name: "CASE2",
    price: 7149.45
    ,
    description:
      "Lian Li Lancool II MESH Type C RGB Tempered Glass ATX Mid-Tower Computer Case",
    imgSrc: "./assets/img/case2.jpg",
  },
  {
    id: 26,
    name: "CASE3",
    price: 10999.45
    ,
    description:
      "Lian Li O11 Dynamic EVO Tempered Glass ATX Mid-Tower Computer Case",
    imgSrc: "./assets/img/case3.jpg",
  },
  {
    id: 27,
    name: "CASE4",
    price: 5499.45
    ,
    description:
      "Lian Li Lancool 215 Tempered Glass eATX Full Tower Computer Case",
    imgSrc: "./assets/img/case4.jpg",
  },
  {
    id: 28,
    name: "CASE5",
    price: 7424.45
    ,
    description:
      "Lian Li Lancool II MESH Type C RGB Tempered Glass ATX Mid-Tower Computer Case - Snow White",
    imgSrc: "./assets/img/case5.jpg",
  },
  {
    id: 29,
    name: "CASE6",
    price: 5224.45,
    description:
      "NZXT H5 Flow Tempered Glass ATX Mid-Tower Computer Case - Black",
    imgSrc: "./assets/img/case6.jpg",
  },
  {
    id: 30,
    name: "CASE7",
    price: 10449.45,
    description:
      "Lian Li PC-O11 Dynamic Tempered Glass ATX Mid-Tower Computer Case - Black",
    imgSrc: "./assets/img/case7.jpg",
  },
  {
    id: 31,
    name: "CASE8",
    price: 3134.45,
    description:
      "Montech X1 Tempered Glass ATX Mid-Tower Computer Case - Black",
    imgSrc: "./assets/img/case8.jpg",
  },
  // Power Supply
  {
    id: 32,
    name: "PSU1",
    price: 8249.45
    ,
    description:
      "Corsair RMx Series RM850x 850 Watt 80 Plus Gold ATX Fully Modular Power Supply",
    imgSrc: "./assets/img/psu1.jpg",
  },
  {
    id: 33,
    name: "PSU2",
    price: 10449.45
    ,
    description:
      "Corsair RMx Series RM1000x 1000 Watt 80 Plus Gold ATX Fully Modular Power Supply",
    imgSrc: "./assets/img/psu2.jpg",
  },
  {
    id: 34,
    name: "PSU3",
    price: 6599.45
    ,
    description:
      "EVGA SuperNOVA 750 GT 750 Watt 80 Plus Gold ATX Fully Modular Power Supply",
    imgSrc: "./assets/img/psu3.jpg",
  },
  {
    id: 35,
    name: "PSU4",
    price: 7699.45
    ,
    description:
      "Corsair RM850e 850 Watt 80 Plus Gold Fully Modular Low-Noise ATX Power Supply",
    imgSrc: "./assets/img/psu4.jpg",
  },
  {
    id: 36,
    name: "PSU5",
    price: 8799.45
    ,
    description:
      "EVGA SuperNOVA 850 GT 850 Watt 80 Plus Gold ATX Fully Modular Power Supply",
    imgSrc: "./assets/img/psu5.jpg",
  },
  {
    id: 37,
    name: "PSU6",
    price: 9899.45,
    description:
      "Corsair RMe Series RM1000e Fully Modular 80PLUS Gold ATX Power Supply",
    imgSrc: "./assets/img/psu6.jpg",
  },
  {
    id: 38,
    name: "PSU7",
    price: 2309.45,
    description:
      "Thermaltake Smart Series 500 Watt 80 Plus ATX Non-Modular Power Supply",
    imgSrc: "./assets/img/psu7.jpg",
  },
  {
    id: 39,
    name: "PSU8",
    price: 19799.45,
    description:
      "ASUS ROG Thor Platinum II 1000 Watt 80 Plus Platinum ATX Fully Modular Power Supply",
    imgSrc: "./assets/img/psu8.jpg",
  },
  // GPU
  {
    id: 40,
    name: "GPU1",
    price: 45649.45
    ,
    description:
      "Zotac NVIDIA GeForce RTX 4070 Ti Trinity Overclocked Triple Fan 12GB GDDR6X PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu1.jpg",
  },
  {
    id: 41,
    name: "GPU2",
    price: 46199.45
    ,
    description:
      "MSI NVIDIA GeForce RTX 4070 Ti Ventus 3X Overclocked Triple Fan 12GB GDDR6X PCIe 4.0 Graphics Card ",
    imgSrc: "./assets/img/gpu2.jpg",
  },
  {
    id: 42,
    name: "GPU3",
    price: 35749.45
    ,
    description:
      "ASUS NVIDIA GeForce RTX 3070 Ti TUF Gaming V2 Overclocked Triple Fan 8GB GDDR6X PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu3.jpg",
  },
  {
    id: 43,
    name: "GPU4",
    price: 47574.45
    ,
    description:
      "MSI NVIDIA GeForce RTX 4070 Ti Gaming Trio Triple Fan 12GB GDDR6X PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu4.jpg",
  },
  {
    id: 44,
    name: "GPU5",
    price: 49499.45
    ,
    description:
      "Gigabyte NVIDIA GeForce RTX 4070 Ti Aero Overclocked Triple Fan 12GB GDDR6X PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu5.jpg",
  },
  {
    id: 45,
    name: "GPU6",
    price: 68749.45,
    description:
      "Zotac NVIDIA GeForce RTX 4080 Trinity Overclocked Triple Fan 16GB GDDR6X PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu6.jpg",
  },
  {
    id: 46,
    name: "GPU7",
    price: 12649.45,
    description:
      "PowerColor AMD Radeon RX 6600 Fighter Dual-Fan 8GB GDDR6 PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu7.jpg",
  },
  {
    id: 47,
    name: "GPU8",
    price: 20349.45,
    description:
      "PowerColor AMD Radeon RX 6700 XT Fighter Dual-Fan 12GB GDDR6 PCIe 4.0 Graphics Card",
    imgSrc: "./assets/img/gpu8.jpg",
  },
  // SATA SSD
  {
    id: 48,
    name: "SATA1",
    price: 1374.45
    ,
    description:
      "Inland Professional 512GB SSD 3D TLC NAND SATA 3.0 6 GBps 2.5 Inch 7mm Internal Solid State Drive",
    imgSrc: "./assets/img/sata1.jpg",
  },
  {
    id: 49,
    name: "SATA2",
    price: 8249.45
    ,
    description:
      "Samsung 870 EVO 2TB SSD 3-bit MLC V-NAND SATA III 6Gb/s 2.5 Internal Solid State Drive",
    imgSrc: "./assets/img/sata2.jpg",
  },
  {
    id: 50,
    name: "SATA3",
    price: 4949.45
    ,
    description:
      "Samsung 870 EVO 1TB SSD 3-bit MLC V-NAND SATA III 6Gb/s 2.5",
    imgSrc: "./assets/img/sata3.jpg",
  },
  {
    id: 51,
    name: "SATA4",
    price: 3024.45
    ,
    description:
      "Inland Platinum 1TB SSD 3D TLC NAND SATA III 6Gb/s 2.5 Internal Solid State Drive",
    imgSrc: "./assets/img/sata4.jpg",
  },
  {
    id: 52,
    name: "SATA5",
    price: 3299.45
    ,
    description:
      "Inland Professional 1TB SSD 3D NAND SATA 3.0 6 GBps 2.5 Inch 7mm Internal Solid State Drive",
    imgSrc: "./assets/img/sata5.jpg",
  },
  {
    id: 53,
    name: "SATA6",
    price: 2749.45,
    description:
      "Samsung 870 EVO 500GB SSD 3-bit MLC V-NAND SATA III 6Gb/s 2.5 Internal Solid State Drive ",
    imgSrc: "./assets/img/sata6.jpg",
  },
  {
    id: 54,
    name: "SATA7",
    price: 1099.45,
    description:
      "Inland Professional 256GB SSD 3D TLC NAND SATA 3.0 6 GBps 2.5 Inch 7mm Internal Solid State Drive ",
    imgSrc: "./assets/img/sata7.jpg",
  },
  {
    id: 55,
    name: "SATA8",
    price: 14849.45,
    description:
      "Crucial MX500 4TB 3D TLC NAND SATA 3.0 6.0 GB/s 2.5 Internal SSD",
    imgSrc: "./assets/img/sata8.jpg",
  },
  // M.2 NVME
  {
    id: 56,
    name: "NVME1",
    price: 7149.45
    ,
    description:
      "Samsung 980 Pro SSD 1TB M.2 NVMe Interface PCIe Gen 4x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V8P1T0B)",
    imgSrc: "./assets/img/nvme1.jpg",
  },
  {
    id: 57,
    name: "NVME2",
    price: 5499.45
    ,
    description:
      "Samsung 970 EVO Plus SSD 1TB M.2 NVMe Interface PCIe 3.0 x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V7S1T0B/AM)",
    imgSrc: "./assets/img/nvme2.jpg",
  },
  {
    id: 58,
    name: "NVME3",
    price: 15949.45
    ,
    description:
      "Samsung 990 PRO 2TB Samsung V NAND 3-bit MLC PCIe Gen 4 x4 NVMe M.2 Internal SSD",
    imgSrc: "./assets/img/nvme3.jpg",
  },
  {
    id: 59,
    name: "NVME4",
    price: 8524.45
    ,
    description:
      "Inland Performance Plus 2TB 3D TLC NAND PCIe Gen 4 x4 NVMe M.2 Internal SSD ",
    imgSrc: "./assets/img/nvme4.jpg",
  },
  {
    id: 60,
    name: "NVME5",
    price: 8799.45
    ,
    description:
      "Samsung 970 EVO Plus SSD 2TB M.2 NVMe Interface PCIe 3.0 x4 Internal Solid State Drive with V-NAND 3 bit MLC Technology (MZ-V7S2T0B/AM) ",
    imgSrc: "./assets/img/nvme5.jpg",
  },
  {
    id: 61,
    name: "NVME6",
    price: 2749.45,
    description:
      "Inland QN322 1TB SSD NVMe PCIe Gen 3.0x4 M.2 2280 3D NAND QLC Internal Solid State Drive ",
    imgSrc: "./assets/img/nvme6.jpg",
  },
  {
    id: 62,
    name: "NVME7",
    price: 20899.45,
    description:
      "Inland Performance Plus 4TB 3D TLC NAND PCIe Gen 4 x4 NVMe M.2 Internal SSD ",
    imgSrc: "./assets/img/nvme7.jpg",
  },
  {
    id: 63,
    name: "NVME8",
    price: 7699.45,
    description:
      "Inland Performance 2TB 3D TLC NAND PCIe Gen 4 x4 NVMe M.2 Internal SSD ",
    imgSrc: "./assets/img/nvme8.jpg",
  },
  // HDD
  {
    id: 64,
    name: "HDD1",
    price: 2749.45
    ,
    description:
      "Seagate BarraCuda 2TB 7200RPM SATA III 6Gb/s 3.5 Internal SMR Hard Drive",
    imgSrc: "./assets/img/hdd1.jpg",
  },
  {
    id: 65,
    name: "HDD2",
    price: 5829.45
    ,
    description:
      "Toshiba N300 4TB 7200RPM SATA III 6Gb/s 3.5 Internal NAS CMR Hard Drive",
    imgSrc: "./assets/img/hdd2.jpg",
  },
  {
    id: 66,
    name: "HDD3",
    price: 15124.45
    ,
    description:
      "Toshiba N300 14TB 7200RPM SATA III 6Gb/s 3.5 Internal NAS CMR Hard Drive",
    imgSrc: "./assets/img/hdd3.jpg",
  },
  {
    id: 67,
    name: "HDD4",
    price: 3904.45
    ,
    description:
      "WD Purple 2TB 5400RPM SATA III 6Gb/s 3.5 Surveillance Internal CMR Hard Drive",
    imgSrc: "./assets/img/hdd4.jpg",
  },
  {
    id: 68,
    name: "HDD5",
    price: 7699.45
    ,
    description:
      "Seagate FireCuda 4TB 7200RPM SATA III 6Gb/s 3.5 Internal CMR Hard Drive",
    imgSrc: "./assets/img/hdd5.jpg",
  },
  {
    id: 69,
    name: "HDD6",
    price: 16664.45,
    description:
      "Toshiba N300 Pro 12TB 7200RPM SATA III 6Gb/s 3.5 Internal NAS CMR Hard Drive",
    imgSrc: "./assets/img/hdd6.jpg",
  },
  {
    id: 70,
    name: "HDD7",
    price: 9404.45,
    description:
      "WD Red Plus 8TB 5640RPM SATA III 6Gb/s 3.5 Internal NAS CMR Hard Drive ",
    imgSrc: "./assets/img/hdd7.jpg",
  },
  {
    id: 71,
    name: "HDD8",
    price: 6544.45,
    description:
      "Toshiba N300 Pro 4TB 7200RPM SATA III 6Gb/s 3.5 Internal NAS CMR Hard Drive",
    imgSrc: "./assets/img/hdd8.jpg",
  },
  // MONITOR
  {
    id: 72,
    name: "MON1",
    price: 5499.45
    ,
    description:
      "Dell SE2422H 23.8 inches Full HD (1920 x 1080) 75Hz LED Monitor; FreeSync; VGA HDMI; Flicker-Free",
    imgSrc: "./assets/img/mon1.jpg",
  },
  {
    id: 73,
    name: "MON2",
    price: 8799.45
    ,
    description:
      "ASUS TUF Gaming VG27VH1BR 27 inches FUll HD (1920 x 1080) 165Hz Curved Screen Gaming Monitor; AMD FreeSync; HDR; HDMI VGA; Game Mode ",
    imgSrc: "./assets/img/mon2.jpg",
  },
  {
    id: 74,
    name: "MON3",
    price: 19249.45
    ,
    description:
      "ASUS VG32AQL1A 31.5 inches 2K QHD (2560 x 1440) 170Hz Gaming Monitor; FreeSync; / NVIDIA G-Sync Compatible; HDR; HDMI, DisplayPort ",
    imgSrc: "./assets/img/mon3.jpg",
  },
  {
    id: 75,
    name: "MON4",
    price: 3849.45
    ,
    description:
      "Vizta V24CDH2 23.8 inches Full HD (1920 x 1080) 75Hz LED Monitor; FreeSync; VGA HDMI; 3-Sided Frameless; IPS Panel",
    imgSrc: "./assets/img/mon4.jpg",
  },
  {
    id: 76,
    name: "MON5",
    price: 9899.45
    ,
    description:
      "Dell S2421HS 24 inches Full HD (1920 x 1080) 75Hz LED Monitor; FreeSync; HDMI Displayport; Blue Light Filter; Flicker-Free",
    imgSrc: "./assets/img/mon5.jpg",
  },
  {
    id: 77,
    name: "MON6",
    price: 8249.45,
    description:
      "Samsung LC32R500FH 31.5 inches Full HD (1920 x 1080) 75Hz Curved Screen Monitor (Refurbished); AMD FreeSync; VGA HDMI; Flicker-Free; 3-Sided Borderless",
    imgSrc: "./assets/img/mon6.jpg",
  },
  {
    id: 78,
    name: "MON7",
    price: 3299.45,
    description:
      "AOC 22E1H 21.5 inches Full HD (1920 x 1080) 60Hz LED Monitor; HDMI VGA; Flicker Safe; Built-in KVM",
    imgSrc: "./assets/img/mon7.jpg",
  },
  {
    id: 79,
    name: "MON8",
    price: 13749.45,
    description:
      "AOC CQ27G3S 27 inches 2K QHD (2560 x 1440) 165Hz Curved Screen Gaming Monitor; AMD FreeSync; HDMI, DisplayPort; Flicker-Free; Blue Light Filter ",
    imgSrc: "./assets/img/mon8.jpg",
  },
  // KEYBOARD
  {
    id: 80,
    name: "KB1",
    price: 3849.45
    ,
    description:
      "Razer Ornata V3 Low-profile Mecha-membrane Gaming Keyboard",
    imgSrc: "./assets/img/kb1.jpg",
  },
  {
    id: 81,
    name: "KB2",
    price: 9349.45
    ,
    description:
      "Glorious GMMK PRO 75% Barebone ANSI USA - Black Slate",
    imgSrc: "./assets/img/kb2.jpg",
  },
  {
    id: 82,
    name: "KB3",
    price: 2199.45
    ,
    description:
      "Redragon Devarajas K556 RGB Mechanical Gaming Keyboard - Brown ",
    imgSrc: "./assets/img/kb3.jpg",
  },
  {
    id: 83,
    name: "KB4",
    price: 3299.45
    ,
    description:
      "Corsair K55 RGB PRO Gaming Keyboard, Backlit RGB LED, Black",
    imgSrc: "./assets/img/kb4.jpg",
  },
  // MOUSE
  {
    id: 84,
    name: "MOUSE1",
    price: 5499.45
    ,
    description:
      "Logitech MX Master 3s",
    imgSrc: "./assets/img/mouse1.jpg",
  },
  {
    id: 85,
    name: "MOUSE2",
    price: 3849.45
    ,
    description:
      "Razer Basilisk V3 Ergonomic Wired Gaming Mouse",
    imgSrc: "./assets/img/mouse2.jpg",
  },
  {
    id: 86,
    name: "MOUSE3",
    price: 3299.45
    ,
    description:
      "Corsair Harpoon RGB Wireless Gaming Mouse",
    imgSrc: "./assets/img/mouse3.jpg",
  },
  {
    id: 87,
    name: "MOUSE4",
    price: 2474.45
    ,
    description:
      "Redragon M801P Sniper Pro RGB Wired/ Wireless Gaming Mouse",
    imgSrc: "./assets/img/mouse4.jpg",
  },
  // HEADSET
  {
    id: 88,
    name: "HEADSET1",
    price: 6049.45
    ,
    description:
      "Corsair Void RGB Elite Wireless Gaming Headset; Omnidirectional Microphone, 7.1 Surround Sound - Carbon",
    imgSrc: "./assets/img/headset1.jpg",
  },
  {
    id: 89,
    name: "HEADSET2",
    price: 2749.45
    ,
    description:
      "Logitech G G435 LIGHTSPEED Wireless Gaming Headset Black and Neon Yellow",
    imgSrc: "./assets/img/headset2.jpg",
  },
  {
    id: 90,
    name: "HEADSET3",
    price: 5499.45
    ,
    description:
      "HyperX Cloud II Gaming Headset Black-Red",
    imgSrc: "./assets/img/headset3.jpg",
  },
  {
    id: 91,
    name: "HEADSET4",
    price: 5499.45
    ,
    description:
      "Razer Barracuda X Wireless Multi-platform Gaming and Mobile Headset",
    imgSrc: "./assets/img/headset4.jpg",
  },
];
