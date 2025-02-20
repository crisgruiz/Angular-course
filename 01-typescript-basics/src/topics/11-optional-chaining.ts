export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Joe",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Nathan", "Elizabeth"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger1);
