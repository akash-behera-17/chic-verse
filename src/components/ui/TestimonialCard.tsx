
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  rating,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white border border-border rounded-lg p-6 transition-all duration-300 ease-smooth hover:shadow-md",
        className
      )}
    >
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              "transition-colors duration-300",
              i < rating ? "fill-salon-500 text-salon-500" : "text-salon-200"
            )}
          />
        ))}
      </div>
      <p className="mb-4 italic text-foreground/90">{text}</p>
      <div className="flex items-center mt-4">
        {image && (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-medium">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
