import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fisioterapia General en La Paz | THPro S.R.L.',
    description: 'Diagnóstico, tratamiento y recuperación de afecciones traumatológicas, musculares, articulares y procesos postoperatorios en La Paz, Bolivia.'
};

export default function FisioterapiaGeneralPage() {
    const service = servicesDetailMap['fisioterapia-general'];
    return <ServiceDetailLayout service={service} />;
}
