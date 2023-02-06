const products = [
  // CPU
  {
    id: 0,
    name: "CPU1",
    price: 16388.9,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu1.jpg",
  },
  {
    id: 1,
    name: "CPU2",
    price: 18149.45,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu2.jpg",
  },
  {
    id: 2,
    name: "CPU3",
    price: 12099.45,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu3.jpg",
  },
  {
    id: 3,
    name: "CPU4",
    price: 18863.9,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu4.jpg",
  },
  {
    id: 4,
    name: "CPU5",
    price: 29149.45,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu5.jpg",
  },
  {
    id: 5,
    name: "CPU6",
    price: 13033.9
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu6.jpg",
  },
  {
    id: 6,
    name: "CPU7",
    price: 16499.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu7.jpg",
  },
  {
    id: 7,
    name: "CPU8",
    price: 8799.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/cpu8.jpg",
  },
  // Motherboard

  {
    id: 8,
    name: "MB1",
    price: 27499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb1.jpg",
  },
  {
    id: 9,
    name: "MB2",
    price: 34649.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb2.jpg",
  },
  {
    id: 10,
    name: "EDIT",
    price: 18149.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb3.jpg",
  },
  {
    id: 11,
    name: "EDIT",
    price: 12649.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb4.jpg",
  },
  {
    id: 12,
    name: "EDIT",
    price: 11549.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb5.jpg",
  },
  {
    id: 13,
    name: "EDIT",
    price: 27499.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb6.jpg",
  },
  {
    id: 14,
    name: "EDIT",
    price: 15949.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb7.jpg",
  },
  {
    id: 15,
    name: "EDIT",
    price: 20899.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mb8.jpg",
  },
  // Ram

  {
    id: 16,
    name: "RAM1",
    price: 9349.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram1.jpg",
  },
  {
    id: 17,
    name: "RAM2",
    price: 9349.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram2.jpg",
  },
  {
    id: 18,
    name: "RAM3",
    price: 14299.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram3.jpg",
  },
  {
    id: 19,
    name: "RAM4",
    price: 4399.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/4.jpg",
  },
  {
    id: 20,
    name: "RAM5",
    price: 16499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram5.jpg",
  },
  {
    id: 21,
    name: "RAM6",
    price: 15289.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram6.jpg",
  },
  {
    id: 22,
    name: "RAM7",
    price: 8524.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram7.jpg",
  },
  {
    id: 23,
    name: "RAM8",
    price: 7699.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/ram8.jpg",
  },
  // PC Case
  {
    id: 24,
    name: "CASE1",
    price: 9349.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/case1.jpg",
  },
  {
    id: 25,
    name: "CASE2",
    price: 7149.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/case2.jpg",
  },
  {
    id: 26,
    name: "CASE3",
    price: 10999.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/case3.jpg",
  },
  {
    id: 27,
    name: "CASE4",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/case4.jpg",
  },
  {
    id: 28,
    name: "CASE5",
    price: 7424.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/case5.jpg",
  },
  {
    id: 29,
    name: "CASE6",
    price: 5224.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/case6.jpg",
  },
  {
    id: 30,
    name: "CASE7",
    price: 10449.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/case7.jpg",
  },
  {
    id: 31,
    name: "CASE8",
    price: 3134.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/case8.jpg",
  },
  // Power Supply
  {
    id: 32,
    name: "PSU1",
    price: 8249.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu1.jpg",
  },
  {
    id: 33,
    name: "PSU2",
    price: 10449.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu2.jpg",
  },
  {
    id: 34,
    name: "PSU3",
    price: 6599.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu3.jpg",
  },
  {
    id: 35,
    name: "PSU4",
    price: 7699.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu4.jpg",
  },
  {
    id: 36,
    name: "PSU5",
    price: 8799.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu5.jpg",
  },
  {
    id: 37,
    name: "PSU6",
    price: 9899.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu6.jpg",
  },
  {
    id: 38,
    name: "PSU7",
    price: 2309.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu7.jpg",
  },
  {
    id: 39,
    name: "PSU8",
    price: 19799.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/psu8.jpg",
  },
  // GPU
  {
    id: 40,
    name: "GPU1",
    price: 45649.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu1.jpg",
  },
  {
    id: 41,
    name: "GPU2",
    price: 46199.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu2.jpg",
  },
  {
    id: 42,
    name: "GPU3",
    price: 35749.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu3.jpg",
  },
  {
    id: 43,
    name: "GPU4",
    price: 47574.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu4.jpg",
  },
  {
    id: 44,
    name: "GPU5",
    price: 49499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu5.jpg",
  },
  {
    id: 45,
    name: "GPU6",
    price: 68749.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu6.jpg",
  },
  {
    id: 46,
    name: "GPU7",
    price: 12649.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu7.jpg",
  },
  {
    id: 47,
    name: "GPU8",
    price: 20349.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/gpu8.jpg",
  },
  // SATA SSD
  {
    id: 48,
    name: "SATA1",
    price: 1374.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata1.jpg",
  },
  {
    id: 49,
    name: "SATA2",
    price: 8249.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata2.jpg",
  },
  {
    id: 50,
    name: "SATA3",
    price: 4949.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata3.jpg",
  },
  {
    id: 51,
    name: "SATA4",
    price: 3024.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata4.jpg",
  },
  {
    id: 52,
    name: "SATA5",
    price: 3299.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata5.jpg",
  },
  {
    id: 53,
    name: "SATA6",
    price: 2749.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata6.jpg",
  },
  {
    id: 54,
    name: "SATA7",
    price: 1099.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata7.jpg",
  },
  {
    id: 55,
    name: "SATA8",
    price: 14849.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/sata8.jpg",
  },
  // M.2 NVME
  {
    id: 56,
    name: "NVME1",
    price: 7149.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme1.jpg",
  },
  {
    id: 57,
    name: "NVME2",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme2.jpg",
  },
  {
    id: 58,
    name: "NVME3",
    price: 15949.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme3.jpg",
  },
  {
    id: 59,
    name: "NVME4",
    price: 8524.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme4.jpg",
  },
  {
    id: 60,
    name: "NVME5",
    price: 8799.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme5.jpg",
  },
  {
    id: 61,
    name: "NVME6",
    price: 2749.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme6.jpg",
  },
  {
    id: 62,
    name: "NVME7",
    price: 20899.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme7.jpg",
  },
  {
    id: 63,
    name: "NVME8",
    price: 7699.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/nvme8.jpg",
  },
  // HDD
  {
    id: 64,
    name: "HDD1",
    price: 2749.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd1.jpg",
  },
  {
    id: 65,
    name: "HDD2",
    price: 5829.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd2.jpg",
  },
  {
    id: 66,
    name: "HDD3",
    price: 15124.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd3.jpg",
  },
  {
    id: 67,
    name: "HDD4",
    price: 3904.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd4.jpg",
  },
  {
    id: 68,
    name: "HDD5",
    price: 7699.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd5.jpg",
  },
  {
    id: 69,
    name: "HDD6",
    price: 16664.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd6.jpg",
  },
  {
    id: 70,
    name: "HDD7",
    price: 9404.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd7.jpg",
  },
  {
    id: 71,
    name: "HDD8",
    price: 6544.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/hdd8.jpg",
  },
  // MONITOR
  {
    id: 72,
    name: "MON1",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon1.jpg",
  },
  {
    id: 73,
    name: "MON2",
    price: 8799.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon2.jpg",
  },
  {
    id: 74,
    name: "MON3",
    price: 19249.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon3.jpg",
  },
  {
    id: 75,
    name: "MON4",
    price: 3849.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon4.jpg",
  },
  {
    id: 76,
    name: "MON5",
    price: 9899.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon5.jpg",
  },
  {
    id: 77,
    name: "MON6",
    price: 8249.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon6.jpg",
  },
  {
    id: 78,
    name: "MON7",
    price: 3299.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon7.jpg",
  },
  {
    id: 79,
    name: "MON8",
    price: 13749.45
    ,
    instock: 40,
    description:
      "EDIT",
    imgSrc: "./assets/img/mon8.jpg",
  },
  // KEYBOARD
  {
    id: 80,
    name: "KB1",
    price: 3849.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/kb1.jpg",
  },
  {
    id: 81,
    name: "KB2",
    price: 9349.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/kb2.jpg",
  },
  {
    id: 82,
    name: "KB3",
    price: 2199.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/kb3.jpg",
  },
  {
    id: 83,
    name: "KB4",
    price: 3299.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/kb4.jpg",
  },
  // MOUSE
  {
    id: 84,
    name: "MOUSE1",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mouse1.jpg",
  },
  {
    id: 85,
    name: "MOUSE2",
    price: 3849.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mouse2.jpg",
  },
  {
    id: 86,
    name: "MOUSE3",
    price: 3299.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mouse3.jpg",
  },
  {
    id: 87,
    name: "MOUSE4",
    price: 2474.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/mouse4.jpg",
  },
  // HEADSET
  {
    id: 88,
    name: "HEADSET1",
    price: 6049.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/headset1.jpg",
  },
  {
    id: 89,
    name: "HEADSET2",
    price: 2749.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/headset2.jpg",
  },
  {
    id: 90,
    name: "HEADSET3",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/headset3.jpg",
  },
  {
    id: 91,
    name: "HEADSET4",
    price: 5499.45
    ,
    description:
      "EDIT",
    imgSrc: "./assets/img/headset4.jpg",
  },
];
