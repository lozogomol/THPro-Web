import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ergonomía Laboral en La Paz | THPro S.R.L.',
    description: 'Asesoramiento e intervención postural para prevenir molestias y lesiones derivadas de jornadas laborales y teletrabajo en La Paz, Bolivia.'
};

export default function ErgonomiaLaboralPage() {
    const service = servicesDetailMap['ergonomia-laboral'];
    return <ServiceDetailLayout service={service} />;
}
