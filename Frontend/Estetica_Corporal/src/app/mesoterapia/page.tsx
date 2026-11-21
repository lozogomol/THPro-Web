import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mesoterapia en La Paz | THPro S.R.L.',
    description: 'Mesoterapia corporal para grasa localizada, celulitis y flacidez en La Paz, Bolivia.'
};

export default function MesoterapiaPage() {
    const service = servicesDetailMap['mesoterapia'];
    return <ServiceDetailLayout service={service} />;
}
