import RatingCard from "./RatingCard";
import avatarImg from "@/app/assets/avatar.png";

const reviews = [
  {
    avatar: avatarImg,
    name: "Farwa",
    comment: "This product was awesome! Smooth and lightweight.",
    date: "April 24, 2025",
    initialRating: 4,
  },
];

const RatingContainer = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <RatingCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default RatingContainer;
