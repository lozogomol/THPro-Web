import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Masaje de Cuerpo Completo en La Paz | THPro S.R.L.',
    description: 'Experiencia terapéutica integral de pies a cabeza que combina técnicas descontracturantes y relajantes para renovar tu cuerpo en La Paz, Bolivia.'
};

export default function MasajeDeCuerpoCompletoPage() {
    const service = servicesDetailMap['masaje-de-cuerpo-completo'];
    return <ServiceDetailLayout service={service} />;
}
