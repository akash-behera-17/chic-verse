
import React from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden bg-white border border-border rounded-lg transition-all duration-500 ease-smooth hover:shadow-lg",
        className
      )}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-2000 ease-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      <div className="p-6">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-lg font-medium text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" className="w-full mt-2">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
