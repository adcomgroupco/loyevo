# Loyevo · Centro de diagnósticos estratégicos

Centro de documentos web para revisar producto, mercado, posicionamiento y adquisición de Loyevo.

## Entregable

- `index.html`: hub principal y punto de entrada a los entregables.
- `diagnostico-producto-mercado.html`: diagnóstico condensado de posicionamiento, barreras, canales, audiencias, competencia, DOFA y prioridades.
- `diagnostico-crm.html`: diagnóstico de desarrollo de demanda y CRM, con investigación, perfilamiento, embajadores, referidos y journeys de mandantes.
- `diagnostico-inicial.html`: diagnóstico de pauta y adquisición, navegable, responsive e imprimible.
- `cronograma-arranque.html`: cronograma visual de ocho semanas para activar la base, consolidar medición, producir piezas y ejecutar un piloto de adquisición.
- `flujo-crm-mandantes.html`: guía de cinco etapas con 21 plantillas de correo, eventos de automatización y criterios de uso para WhatsApp.
- `inteligencia-competitiva-skydropx.html`: investigación de la pauta activa de Skydropx y aprendizajes aplicables al cuadro de materiales de noviembre.
- El sitio publicado no requiere compilación ni dependencias de producción.
- Puede abrirse directamente o publicarse con GitHub Pages.

Los estilos están organizados en `assets/css`: `shared.css` contiene la base común de accesibilidad y cada documento conserva una hoja propia. Los comportamientos interactivos viven en `assets/js`.

## Uso local

1. Ejecuta `npm install` para instalar las herramientas locales de auditoría.
2. Ejecuta `npm run serve` y visita `http://127.0.0.1:8000`.

## Validación

- `npm run validate`: comprueba estructura, recursos, enlaces y anclas internas.
- `npm run audit:desktop`: genera `reports/lighthouse-desktop.json` con el servidor local activo.
- `npm run audit:mobile`: genera `reports/lighthouse-mobile.json` con el servidor local activo.

`node_modules`, resultados de Lighthouse y archivos temporales están excluidos mediante `.gitignore`.

## Contenido

- Portada preparada para incorporar nuevos documentos independientes.
- Resumen ejecutivo e índice de madurez diagnóstico.
- Hallazgos del sitio, cotizador y datos reales de Meta.
- Priorización de oportunidades.
- Journey ideal desde anuncio hasta mandado entregado.
- Arquitectura de Meta: prospección, retargeting y laboratorio creativo, con jerarquía y convención de nombres.
- Ejercicio de proyección con $6.000.000 COP mensuales a tres meses: rampa de reparto, ejecución mes a mes, costo estimado por KPI y resultados en escenario pesimista, realista y optimista.
- Auditoría de 94 anuncios, copies, formatos, CTA y piezas de mayor inversión.
- Territorios de comunicación e ideas de captación para mandantes.
- Mapa de eventos y tablero de KPI.
- Roadmap de implementación a 90 días.
- Checklist de datos operativos necesarios para conciliar Meta con mandados pagados y entregados.
- Calendario de ocho semanas para integrar pauta, CRM, medición, creatividad, QA y primeros lanzamientos.
- Enlace directo al [informe de pauta](https://datastudio.google.com/reporting/75593648-d0c8-48d2-969a-2131c9580d3f).
- Actualización de acceso y línea base de eventos de Firebase Analytics al 27 de octubre de 2026.

## Alcance y limitaciones

El diagnóstico toma como referencia la cuenta de Loyevo y su ecosistema digital. El documento separa explícitamente:

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

Revisión pública y de la cuenta de Loyevo realizada el **13 de agosto de 2026**. Última inversión registrada: **1 de agosto de 2026**; todas las campañas estaban pausadas al momento de la auditoría.
