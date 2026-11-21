import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Drenaje Linfático en La Paz | THPro S.R.L.',
    description: 'Drenaje linfático manual para reducir la retención de líquidos e hinchazón en La Paz, Bolivia.'
};

export default function DrenajeLinfaticoPage() {
    const service = servicesDetailMap['drenaje-linfatico'];
    return <ServiceDetailLayout service={service} />;
}
