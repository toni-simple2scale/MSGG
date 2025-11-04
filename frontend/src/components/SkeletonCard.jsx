import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';

export const ProductCardSkeleton = () => {
  return (
    <Card className="product-card h-full">
      <CardHeader>
        <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse mb-3"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export const BrandCardSkeleton = () => {
  return (
    <Card className="brand-card text-center h-full">
      <CardHeader>
        <div className="h-24 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
      </CardHeader>
    </Card>
  );
};

export const TestimonialCardSkeleton = () => {
  return (
    <Card className="testimonial-card h-full">
      <CardHeader>
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-4/6"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

// Shimmer effect CSS
export const SkeletonShimmer = () => {
  return (
    <style>{`
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
      
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        background: linear-gradient(
          90deg,
          #f0f0f0 0px,
          #e0e0e0 40px,
          #f0f0f0 80px
        );
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }
    `}</style>
  );
};
