import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fisioterapia Geriátrica en La Paz | THPro S.R.L.',
    description: 'Cuidado integral para adultos mayores en La Paz, Bolivia. Preservación de la autonomía, movilidad articular, equilibrio y bienestar general.'
};

export default function FisioterapiaGeriatricaPage() {
    const service = servicesDetailMap['fisioterapia-geriatrica'];
    return <ServiceDetailLayout service={service} />;
}
