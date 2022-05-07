const songListReducer = (history = [], data) => {
  return [
    {
      name: "Uzbek",
      time: "3:12",
      author: "Uzim",
    },
    {
      name: "Kazak",
      time: "4:12",
      author: "Jelsinbay",
    },
    {
      name: "USA",
      time: "5:12",
      author: "Alex",
    },
    {
      name: "Russia",
      time: "6:12",
      author: "Sergey",
    },
  ];
};
export default songListReducer;
