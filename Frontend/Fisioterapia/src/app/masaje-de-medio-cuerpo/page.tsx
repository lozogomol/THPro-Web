import React from 'react';
import ServiceDetailLayout from '@/component/ServiceDetailLayout';
import { servicesDetailMap } from '@/constant/serviceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Masaje de Medio Cuerpo en La Paz | THPro S.R.L.',
    description: 'Tratamiento focalizado en las zonas con mayor sobrecarga: espalda alta y baja, cuello, trapecios y hombros en La Paz, Bolivia.'
};

export default function MasajeDeMedioCuerpoPage() {
    const service = servicesDetailMap['masaje-de-medio-cuerpo'];
    return <ServiceDetailLayout service={service} />;
}
