import React from "react";
import {
  Calculator,
  Home,
  TrendingUp,
  DollarSign,
  Percent,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { FormField } from "@/components/molecules/FormField";
import { StatsDisplay } from "@/components/molecules/StatsDisplay";
import { calculateCompoundInterest } from "@/utils/calculator";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/templates/AppLayout";

const ExamplePage = () => {
  const navigate = useNavigate();

  // Datos del ejemplo fijos
  const exampleData = {
    principal: "1000000",
    annualRate: "12.5",
    days: "365",
  };

  // Calcular los resultados del ejemplo
  const results = calculateCompoundInterest(
    parseFloat(exampleData.principal),
    parseFloat(exampleData.annualRate),
    parseInt(exampleData.days)
  );

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleGoToCalculator = () => {
    navigate("/calculadora-interes-compuesto");
  };

  return (
    <AppLayout
      title="Ejemplo - Calculadora de Interés Compuesto - ToolStack"
      description="Ejemplo práctico de cálculo de interés compuesto con datos reales."
    >
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full lg:overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header muy compacto */}
          <div className="px-4 py-3">
            <Button
              variant="ghost"
              onClick={handleBackToHome}
              className="hover:bg-white/60 cursor-pointer text-toolstack-primary"
            >
              <Home className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </div>

          {/* Contenido principal */}
          <div className="flex-1 lg:flex lg:items-start lg:justify-center px-4 pb-8 overflow-auto lg:overflow-hidden">
            <div className="w-full max-w-6xl lg:pt-4">
              {/* Título con diseño responsivo */}
              <div className="text-center mb-4 lg:mb-6 pt-4 lg:pt-0">
                {/* Desktop: icono a la izquierda */}
                <div className="hidden lg:flex items-center justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl shadow-lg mr-4">
                    <Calculator className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Ejemplo de Calculadora de Interés Compuesto
                    </h1>
                    <p className="text-gray-600">
                      Demostración práctica con datos reales
                    </p>
                  </div>
                </div>

                {/* Mobile: icono arriba y título centrado */}
                <div className="lg:hidden">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl shadow-lg mb-4">
                    <Calculator className="w-8 h-8 text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Ejemplo de Calculadora de Interés Compuesto
                  </h1>
                  <p className="text-gray-600 text-sm px-4">
                    Demostración práctica con datos reales
                  </p>
                </div>
              </div>

              {/* Explicación "¿Cómo funciona?" - SOLO MÓVIL arriba */}
              <div className="lg:hidden bg-white rounded-2xl p-4 border border-gray-200 shadow-sm mb-4">
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  💡 ¿Cómo funciona?
                </h4>
                <p className="text-sm text-gray-700">
                  Al invertir $1,000,000 a una tasa del 12.5% efectiva anual
                  durante 365 días, tu dinero crece diariamente. La tasa diaria
                  equivalente es de 0.0323%, lo que resulta en una ganancia
                  total de $
                  {results.totalGain.toLocaleString("es-CO", {
                    maximumFractionDigits: 0,
                  })}
                  .
                </p>
              </div>

              {/* Grid principal - mobile responsivo */}
              <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                {/* Datos de ejemplo (solo visualización) */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-fit">
                  <div className="p-6 space-y-4">
                    {/* Título del formulario */}
                    <div className="text-center border-b border-gray-100 pb-4">
                      <h2 className="text-lg font-bold text-gray-900 mb-1">
                        Datos del ejemplo
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Inversión de $1,000,000 a 12.5% anual por 1 año
                      </p>
                    </div>

                    {/* Campos del ejemplo (solo lectura) */}
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute left-3 top-8 transform text-green-600 z-10">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <FormField
                          label="Monto inicial"
                          id="principal"
                          type="number"
                          value="1000000"
                          readOnly
                          description="Cantidad inicial que vas a invertir"
                          className="pl-10"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute left-3 top-8 transform text-blue-600 z-10">
                          <Percent className="w-4 h-4" />
                        </div>
                        <FormField
                          label="Tasa efectiva anual"
                          id="annualRate"
                          type="number"
                          step="0.01"
                          value="12.5"
                          readOnly
                          description="Tasa de rentabilidad anual (%)"
                          className="pl-10"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute left-3 top-8 transform text-purple-600 z-10">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <FormField
                          label="Número de días"
                          id="days"
                          type="number"
                          value="365"
                          readOnly
                          description="Tiempo de inversión en días"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Botón para ir a la calculadora */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button
                        onClick={handleGoToCalculator}
                        className="w-full cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-10"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Usar Calculadora
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Resultados del ejemplo */}
                <div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-xl">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <h3 className="text-lg font-bold">
                          Resultados del ejemplo
                        </h3>
                      </div>
                      <p className="text-green-100 text-sm">
                        Basado en interés compuesto diario
                      </p>
                    </div>

                    <StatsDisplay
                      dailyRate={results.dailyRate}
                      totalGain={results.totalGain}
                      finalAmount={results.finalAmount}
                      days={results.days}
                      className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    />

                    {/* Resumen del ejemplo */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h3 className="text-base font-bold text-gray-900 mb-3">
                          Resumen del ejemplo
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                          <div className="bg-blue-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-toolstack-primary">
                              ${results.principal.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">
                              Inversión inicial
                            </div>
                          </div>

                          <div className="bg-green-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-green-600">
                              +$
                              {results.totalGain.toLocaleString("es-CO", {
                                maximumFractionDigits: 0,
                              })}
                            </div>
                            <div className="text-sm text-gray-600">
                              Ganancia total
                            </div>
                          </div>

                          <div className="bg-purple-50 rounded-lg p-3">
                            <div className="text-lg font-bold text-purple-600">
                              {results.days} días
                            </div>
                            <div className="text-sm text-gray-600">
                              al {results.annualRate}% E.A.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Explicación "¿Cómo funciona?" - SOLO DESKTOP abajo */}
                    <div className="hidden lg:block bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                      <h4 className="text-base font-bold text-gray-900 mb-2">
                        💡 ¿Cómo funciona?
                      </h4>
                      <p className="text-sm text-gray-700">
                        Al invertir $1,000,000 a una tasa del 12.5% efectiva
                        anual durante 365 días, tu dinero crece diariamente. La
                        tasa diaria equivalente es de 0.0323%, lo que resulta en
                        una ganancia total de $
                        {results.totalGain.toLocaleString("es-CO", {
                          maximumFractionDigits: 0,
                        })}
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export { ExamplePage };
