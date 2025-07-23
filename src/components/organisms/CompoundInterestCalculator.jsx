import React, { useState, useEffect } from "react";
import {
  Calculator,
  Home,
  TrendingUp,
  DollarSign,
  Percent,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/Card";
import { FormField } from "@/components/molecules/FormField";
import { StatsDisplay } from "@/components/molecules/StatsDisplay";
import { calculateCompoundInterest } from "@/utils/calculator";
import { useNavigate, useLocation } from "react-router-dom";

const CompoundInterestCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    principal: "",
    annualRate: "",
    days: "",
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Cargar datos de ejemplo si viene del botón "Ver Ejemplo"
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("example") === "true") {
      const exampleData = {
        principal: "1000000",
        annualRate: "12.5",
        days: "365",
      };
      setFormData(exampleData);

      // Calcular automáticamente el ejemplo
      const calculationResults = calculateCompoundInterest(
        parseFloat(exampleData.principal),
        parseFloat(exampleData.annualRate),
        parseInt(exampleData.days)
      );
      setResults(calculationResults);
    }
  }, [location.search]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.principal || formData.principal <= 0) {
      newErrors.principal = "Debe ingresar un monto inicial válido";
    }

    if (
      !formData.annualRate ||
      formData.annualRate <= 0 ||
      formData.annualRate > 100
    ) {
      newErrors.annualRate = "Debe ingresar una tasa entre 0.01% y 100%";
    }

    if (!formData.days || formData.days <= 0 || formData.days > 3650) {
      newErrors.days = "Debe ingresar días entre 1 y 3650";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = () => {
    if (validateForm()) {
      const principal = parseFloat(formData.principal);
      const annualRate = parseFloat(formData.annualRate);
      const days = parseInt(formData.days);

      const calculationResults = calculateCompoundInterest(
        principal,
        annualRate,
        days
      );
      setResults(calculationResults);
    }
  };

  const handleReset = () => {
    setFormData({
      principal: "",
      annualRate: "",
      days: "",
    });
    setResults(null);
    setErrors({});

    // Limpiar el parámetro example de la URL
    navigate("/calculadora-interes-compuesto", { replace: true });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 h-full overflow-hidden">
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

        {/* Contenido principal más arriba */}
        <div className="flex-1 flex items-start justify-center px-4 pt-4 pb-8 overflow-auto">
          <div className="w-full max-w-6xl">
            {/* Título con diseño responsivo */}
            <div className="text-center mb-4">
              {/* Desktop: icono a la izquierda */}
              <div className="hidden lg:flex items-center justify-center mb-2">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl shadow-lg mr-4">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Calculadora de Interés Compuesto
                  </h1>
                  <p className="text-gray-600">
                    Calcula la rentabilidad diaria de tus inversiones
                  </p>
                </div>
              </div>

              {/* Mobile: icono arriba y título centrado */}
              <div className="lg:hidden">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl shadow-lg mb-4">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Calculadora de Interés Compuesto
                </h1>
                <p className="text-gray-600 text-sm px-4">
                  Calcula la rentabilidad diaria de tus inversiones
                </p>
              </div>
            </div>

            {/* Grid principal - mobile responsivo */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Formulario compacto */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="p-6 space-y-4">
                  {/* Título del formulario */}
                  <div className="text-center border-b border-gray-100 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-1">
                      Datos de tu inversión
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Completa la información para calcular
                    </p>
                  </div>

                  {/* Campos del formulario */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-3 top-8 transform text-green-600 z-10">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <FormField
                        label="Monto inicial"
                        id="principal"
                        type="number"
                        placeholder="1,000,000"
                        value={formData.principal}
                        onChange={(e) =>
                          handleInputChange("principal", e.target.value)
                        }
                        error={errors.principal}
                        description="Cantidad inicial que vas a invertir"
                        required
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
                        placeholder="12.5"
                        value={formData.annualRate}
                        onChange={(e) =>
                          handleInputChange("annualRate", e.target.value)
                        }
                        error={errors.annualRate}
                        description="Tasa de rentabilidad anual (%)"
                        required
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
                        placeholder="365"
                        value={formData.days}
                        onChange={(e) =>
                          handleInputChange("days", e.target.value)
                        }
                        error={errors.days}
                        description="Tiempo de inversión en días"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <Button
                      onClick={handleCalculate}
                      className="flex-1 cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-10"
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calcular Rentabilidad
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="cursor-pointer border-gray-300 hover:bg-gray-50 h-10 px-4"
                    >
                      Limpiar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Resultados - ahora visible en mobile */}
              <div className="lg:block">
                {results ? (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-xl">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <h3 className="text-lg font-bold">
                          Resultados del cálculo
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
                      className="grid-cols-2 lg:grid-cols-4 gap-3"
                    />

                    {/* Resumen muy compacto */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h3 className="text-base font-bold text-gray-900 mb-3">
                          Resumen de tu inversión
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
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 h-full flex items-center justify-center p-6">
                    <div className="text-center text-gray-500">
                      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calculator className="w-7 h-7 text-gray-400" />
                      </div>
                      <h3 className="text-base font-semibold mb-1">
                        ¿Listo para calcular?
                      </h3>
                      <p className="text-sm">
                        Completa los datos del formulario y presiona "Calcular"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CompoundInterestCalculator };
