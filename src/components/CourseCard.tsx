import React from 'react';
import { CheckIcon } from './Icons';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  isHighlight?: boolean;
  link?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subtitle,
  price,
  duration,
  features,
  isHighlight = false,
  link = "/checkout"
}) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl border ${isHighlight ? 'border-primary bg-gray-90 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-gray-80 bg-gray-90'} h-full transition-transform hover:-translate-y-1`}>
      {isHighlight && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Empfohlen
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-50 text-sm h-10">{subtitle}</p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-extrabold text-white">{price}</span>
        </div>
        <p className="text-primary font-medium mt-2">{duration}</p>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckIcon />
            <span className="ml-3 text-gray-30 text-sm leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={link}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          isHighlight
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-80 text-white hover:bg-gray-70 hover:text-primary'
        }`}
      >
        Jetzt Kurs buchen
      </Link>
    </div>
  );
};

export default CourseCard;
