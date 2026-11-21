import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Limpieza Facial en La Paz | THPro S.R.L.',
    description: 'Limpieza facial profunda con extracción profesional de impurezas y puntos negros en La Paz, Bolivia.'
};

export default function LimpiezaFacialPage() {
    const service = servicesDetailMap['limpieza-facial'];
    return <ServiceDetailLayout service={service} />;
}
