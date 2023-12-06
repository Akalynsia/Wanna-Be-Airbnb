const HouseData = [
  {
    id: 1,
    name: "Beautiful Villa",
    price: "$200",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-10",
    },
    img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cozy Cottage",
    price: "$150",
    availableDates: {
      start: "2023-12-05",
      end: "2023-12-15",
      img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 3,
    name: "Hambulden",
    price: "$175",
    availableDates: {
      start: "2023-12-12",
      end: "2023-12-18",
    },
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Trailer Park",
    price: "$125",
    availableDates: {
      start: "2023-12-15",
      end: "2023-12-22",
    },
    img: "https://images.unsplash.com/photo-1566847838486-b298b04c9d86?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Homeless Shelter",
    price: "$15",
    availableDates: {
      start: "2023-12-16",
      end: "2023-12-23",
    },
    img: "https://images.unsplash.com/photo-1621482058366-9915f5d9bec2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Hey Listen",
    price: "$250",
    availableDates: {
      start: "2023-12-12",
      end: "2023-12-19",
    },
    img: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "All I Want For Christmas",
    price: "$400",
    availableDates: {
      start: "2023-12-24",
      end: "2023-12-31",
    },
    img: "https://images.unsplash.com/photo-1602628902352-73639e174673?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hyaXN0bWFzJTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Studio Apartment",
    price: "$75",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-31",
    },
    img: "https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Malibu",
    price: "$190",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-14",
    },
    img: "https://images.unsplash.com/photo-1620796523448-c319f1566a91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Bench",
    price: "$15",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-31",
    },
    img: "https://images.unsplash.com/photo-1445937888010-cc262f556033?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Trash Can",
    price: "$25",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-31",
    },
    img: "https://plus.unsplash.com/premium_photo-1661290296426-d55fd01740c1?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Turkey",
    price: "$0",
    availableDates: {
      start: "2023-12-05",
      end: "2023-12-19",
    },
    img: "https://plus.unsplash.com/premium_photo-1671101506168-881c3bad90b0?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Not Very Cozy Cottage",
    price: "$150",
    availableDates: {
      start: "2023-12-01",
      end: "2023-12-31",
    },
    img: "https://images.unsplash.com/photo-1603862026184-14a7f7b91026?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default HouseData;
