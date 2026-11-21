import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dermaplaning en La Paz | THPro S.R.L.',
    description: 'Exfoliación profesional con hoja estéril para una piel lisa, luminosa y libre de vello fino en La Paz, Bolivia.'
};

export default function DermaplaningPage() {
    const service = servicesDetailMap['dermaplaning'];
    return <ServiceDetailLayout service={service} />;
}
