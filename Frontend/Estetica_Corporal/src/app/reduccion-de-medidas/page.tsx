import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reducción de Medidas en La Paz | THPro S.R.L.',
    description: 'Programa corporal para reducir centímetros y moldear la figura en La Paz, Bolivia.'
};

export default function ReduccionDeMedidasPage() {
    const service = servicesDetailMap['reduccion-de-medidas'];
    return <ServiceDetailLayout service={service} />;
}
