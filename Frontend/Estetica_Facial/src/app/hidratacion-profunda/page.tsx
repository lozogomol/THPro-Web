import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hidratación Profunda en La Paz | THPro S.R.L.',
    description: 'Tratamiento de hidratación intensiva para pieles secas y deshidratadas en La Paz, Bolivia.'
};

export default function HidratacionProfundaPage() {
    const service = servicesDetailMap['hidratacion-profunda'];
    return <ServiceDetailLayout service={service} />;
}
