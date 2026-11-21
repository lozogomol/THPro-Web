import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Masaje Exprés en La Paz | THPro S.R.L.',
    description: 'Sesión corta e intensiva orientada a liberar la rigidez y el estrés en zonas clave para quienes cuentan con poco tiempo en La Paz, Bolivia.'
};

export default function MasajeExpresPage() {
    const service = servicesDetailMap['masaje-expres'];
    return <ServiceDetailLayout service={service} />;
}
