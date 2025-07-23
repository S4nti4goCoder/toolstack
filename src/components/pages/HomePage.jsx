import React from "react";
import {
  Calculator,
  TrendingUp,
  ArrowRight,
  BarChart3,
  DollarSign,
  Zap,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { AppLayout } from "@/components/templates/AppLayout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCalculatorClick = () => {
    navigate("/calculadora-interes-compuesto");
  };

  const handleExampleClick = () => {
    navigate("/ejemplo-interes-compuesto");
  };

  const features = [
    {
      icon: Zap,
      title: "Cálculo instantáneo",
      description: "Resultados al momento",
    },
    {
      icon: BarChart3,
      title: "Resultados detallados",
      description: "Análisis completo",
    },
    {
      icon: DollarSign,
      title: "100% gratuito",
      description: "Sin costo alguno",
    },
  ];

  return (
    <AppLayout
      title="ToolStack - Herramientas Financieras Profesionales"
      description="Calcula interés compuesto con nuestra herramienta financiera gratuita y profesional."
    >
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-full lg:h-full lg:flex lg:items-center">
        {/* Contenido con padding-top para móvil */}
        <div className="container mx-auto px-4 pt-6 pb-8 lg:py-0 w-full">
          {/* Todo el contenido centrado y responsive */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8 lg:mb-12">
              {/* Icon Section - ahora visible en móvil también */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                  Calculadora de
                  <span className="text-green-600 font-extrabold">
                    {" "}
                    Interés Compuesto
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-6">
                  Calcula la rentabilidad diaria de tus inversiones basada en
                  tasa efectiva anual. Obtén resultados precisos sobre
                  ganancias, saldo final y tasa diaria equivalente.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:gap-4 lg:flex-row lg:justify-start">
                  <Button
                    size="lg"
                    onClick={handleCalculatorClick}
                    className="bg-toolstack-primary hover:bg-blue-600 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 text-white w-full lg:w-auto"
                  >
                    <Calculator className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
                    Usar Calculadora
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleExampleClick}
                    className="border-2 border-toolstack-primary text-toolstack-primary hover:bg-blue-50 hover:border-blue-600 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 w-full lg:w-auto"
                  >
                    <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
                    Ver Ejemplo
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Grid - layout responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-md lg:shadow-lg hover:shadow-lg lg:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-toolstack-primary rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-sm">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export { HomePage };
