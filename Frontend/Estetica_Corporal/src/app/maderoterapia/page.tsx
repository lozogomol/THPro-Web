import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Maderoterapia en La Paz | THPro S.R.L.',
    description: 'Masaje con instrumentos de madera para moldear la figura y reducir la celulitis en La Paz, Bolivia.'
};

export default function MaderoterapiaPage() {
    const service = servicesDetailMap['maderoterapia'];
    return <ServiceDetailLayout service={service} />;
}
