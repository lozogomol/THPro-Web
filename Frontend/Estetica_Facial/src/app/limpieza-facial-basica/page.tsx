import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Limpieza Facial Básica en La Paz | THPro S.R.L.',
    description: 'Limpieza facial esencial de mantenimiento para una piel sana y fresca en La Paz, Bolivia.'
};

export default function LimpiezaFacialBasicaPage() {
    const service = servicesDetailMap['limpieza-facial-basica'];
    return <ServiceDetailLayout service={service} />;
}
