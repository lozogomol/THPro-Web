import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fisioterapia Pediátrica en La Paz | THPro S.R.L.',
    description: 'Tratamiento especializado para bebés, niños y adolescentes en La Paz, Bolivia. Estimulación temprana, corrección postural y desarrollo psicomotor.'
};

export default function FisioterapiaPediatricaPage() {
    const service = servicesDetailMap['fisioterapia-pediatrica'];
    return <ServiceDetailLayout service={service} />;
}
