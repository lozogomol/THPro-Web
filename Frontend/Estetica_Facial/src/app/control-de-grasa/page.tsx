import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Control de Grasa en La Paz | THPro S.R.L.',
    description: 'Tratamiento seborregulador y matificante para pieles grasas y mixtas en La Paz, Bolivia.'
};

export default function ControlDeGrasaPage() {
    const service = servicesDetailMap['control-de-grasa'];
    return <ServiceDetailLayout service={service} />;
}
