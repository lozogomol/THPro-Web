import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Facial Controlador en La Paz | THPro S.R.L.',
    description: 'Tratamiento facial para controlar brotes, imperfecciones y enrojecimiento en La Paz, Bolivia.'
};

export default function FacialControladorPage() {
    const service = servicesDetailMap['facial-controlador'];
    return <ServiceDetailLayout service={service} />;
}
