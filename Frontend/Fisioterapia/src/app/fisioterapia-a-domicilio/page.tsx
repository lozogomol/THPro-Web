import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fisioterapia a Domicilio en La Paz | THPro S.R.L.',
    description: 'Atención y rehabilitación profesional en la comodidad de tu hogar en La Paz, Bolivia. Especialistas certificados y equipamiento portátil de vanguardia.'
};

export default function FisioterapiaADomicilioPage() {
    const service = servicesDetailMap['fisioterapia-a-domicilio'];
    return <ServiceDetailLayout service={service} />;
}
