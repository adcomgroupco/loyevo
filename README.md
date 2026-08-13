# Loyevo · Diagnóstico inicial de adquisición

Centro de documentos web para revisar el ecosistema público de Loyevo y construir una estrategia de Meta enfocada en adquirir **mandantes**: personas que necesitan enviar objetos entre ciudades.

## Entregable

- `index.html`: hub principal y punto de entrada a los entregables.
- `diagnostico-inicial.html`: diagnóstico navegable, responsive e imprimible.
- No requiere instalación, dependencias ni proceso de compilación.
- Puede abrirse directamente o publicarse con GitHub Pages.

## Uso local

1. Abre `index.html` en el navegador; o
2. Ejecuta `python -m http.server 8000` en esta carpeta y visita `http://localhost:8000`.

## Contenido

- Portada preparada para incorporar nuevos documentos independientes.
- Resumen ejecutivo e índice de madurez diagnóstico.
- Hallazgos del sitio, cotizador y datos reales de Meta.
- Priorización de oportunidades.
- Journey ideal desde anuncio hasta mandado entregado.
- Arquitectura de Meta: prospección, retargeting y laboratorio creativo, con jerarquía y convención de nombres.
- Auditoría de 94 anuncios, copies, formatos, CTA y piezas de mayor inversión.
- Territorios de comunicación e ideas de captación para mandantes.
- Mapa de eventos Pixel + CAPI y tablero de KPI.
- Roadmap de implementación a 90 días.
- Checklist de datos operativos necesarios para conciliar Meta con mandados pagados y entregados.

## Alcance y limitaciones

La cuenta auditada es `811773518495568`. Se consultó mediante Meta Marketing API v21.0 usando una credencial local que no se copió al repositorio ni a los HTML. El documento separa explícitamente:

- **Datos de cuenta:** inversión, campañas, conjuntos, anuncios, insights, píxeles y conversiones configuradas.
- **Observaciones públicas:** sitio oficial, cotizador, ficha de Google Play, HTML/JavaScript público y documentación legal.
- **Hipótesis estratégicas:** estructura de campañas, asignación inicial de presupuesto y sistema de pruebas.
- **Pendientes de validación:** conciliación con pagos y entregas, margen por corredor, historial de cambios y calidad técnica dentro de Events Manager.

El puntaje de madurez mostrado es una rúbrica diagnóstica, no una métrica extraída de Meta.

## Hallazgo central

La cuenta invirtió **$11.157.787 COP** entre noviembre de 2025 y agosto de 2026. El **74,2%** se destinó a captar viajeros y solo el **21,3%** a líneas explícitas de mandantes. Meta reporta 7.553 registros, 44 leads y 939 conversaciones, pero **cero Purchase**. Hay tres píxeles y una sola conversión personalizada, asociada a descarga de app.

La portada prioriza la descarga mientras la ruta web de cotización queda relegada. La recomendación central es unificar medición y optimizar a mandado pagado, usando la entrega completada como señal de calidad.

## Fuentes revisadas

- [Sitio oficial de Loyevo](https://loyevo.co/)
- [Cotizador web para mandantes](https://loyevo.co/emisor-web/cotizar)
- [Loyevo en Google Play](https://play.google.com/store/apps/details?id=com.luquedigital.loyevo)
- [Política de tratamiento de datos](https://loyevo.co/legal/datos-personales/)
- [Biblioteca de anuncios de Meta](https://www.facebook.com/ads/library/)
- [Ayuda oficial sobre la Biblioteca de anuncios](https://www.facebook.com/help/259468828226154)

Revisión pública y consulta de Marketing API realizadas el **13 de agosto de 2026**. Última inversión registrada: **1 de agosto de 2026**; todas las campañas estaban pausadas al momento de la auditoría.
