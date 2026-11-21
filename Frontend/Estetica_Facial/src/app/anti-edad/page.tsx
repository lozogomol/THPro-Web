import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tratamiento Anti Edad en La Paz | THPro S.R.L.',
    description: 'Tratamiento facial rejuvenecedor para atenuar arrugas y devolver firmeza al rostro en La Paz, Bolivia.'
};

export default function AntiEdadPage() {
    const service = servicesDetailMap['anti-edad'];
    return <ServiceDetailLayout service={service} />;
}
