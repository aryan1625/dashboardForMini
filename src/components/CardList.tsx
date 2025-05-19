import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// const popularContent = [
//   {
//     id: 1,
//     title: "JavaScript Tutorial",
//     badge: "Coding",
//     image:
//       "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
//     dept: 4300,
//   },
//   {
//     id: 2,
//     title: "Tech Trends 2025",
//     badge: "Tech",
//     image:
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
//     dept: 3200,
//   },
//   {
//     id: 3,
//     title: "The Future of AI",
//     badge: "AI",
//     image:
//       "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
//     dept: 2400,
//   },
//   {
//     id: 4,
//     title: "React Hooks Explained",
//     badge: "Coding",
//     image:
//       "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
//     dept: 1500,
//   },  
//   {
//     id: 5,
//     title: "Image Generation with AI",
//     badge: "AI",
//     image:
//       "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
//     dept: 1200,
//   },
// ];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Agent: John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    dept: "Sales",
    status: "Pending",
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Agent: Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    dept: "Accounting",
    status: "Resolved",
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Agent: Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    dept: "Marketing",
    status: "Pending",
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Agent: Lily Adams",
    dept: "Support",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Pending",
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Agent: Sam Brown",
    dept: "HR",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Resolved",
  },
];

const CardList = ({ title }: { title: string }) => {
  const list = latestTransactions;
    // title === "Popular Content" ? popularContent : latestTransactions;
    // title === latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className={item.status === "Pending" ? " flex-row items-center justify-between gap-4 p-4" : " flex-row items-center justify-between gap-4 p-4"} >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className={item.status === "Pending"?"text-yellow-500 text-sm font-medium":"text-green-500 text-sm font-medium"}>{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0 flex flex-col">
              <div >
                {item.dept}
              </div>
              <div className={item.status === "Pending"?"text-yellow-500 text-sm":"text-green-500 text-sm"}>
                {item.status}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
