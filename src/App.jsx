import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  Code,
  Smartphone,
  Zap,
  Users,
  Target,
  Rocket,
  Brain,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Play,
  Settings,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'
import heroImage from './assets/hero-image.jpg'
import aiWebDev from './assets/ai-web-dev.webp'
import './App.css'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCtaClick = (action) => {
    if (action === 'test') {
      alert('Vielen Dank für Ihr Interesse! Die kostenlose Testversion wird bald verfügbar sein.')
    } else if (action === 'demo') {
      alert('Eine interaktive Demo ist in Vorbereitung! Bleiben Sie dran für Updates.')
    } else if (action === 'contact') {
      alert('Vielen Dank für Ihr Interesse! Bitte kontaktieren Sie uns unter info@webappify.ai.')
    } else if (action === 'start') {
      alert('Vielen Dank! Sie werden zum Registrierungsformular weitergeleitet, sobald es verfügbar ist.')
    }
  }

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "KI-gestützte Optimierung",
      description: "Intelligente Code-Analyse und automatische Verbesserungen für bessere Performance"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Online Code-Editor",
      description: "Monaco Editor Integration mit Live-Vorschau und Syntax-Highlighting"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "PWA-Generation",
      description: "Automatische Erstellung von Progressive Web Apps aus bestehenden Webinhalten"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Schnelle Bereitstellung",
      description: "Von der Idee zur fertigen App in wenigen Minuten"
    }
  ]

  const targetGroups = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Webentwickler",
      description: "Schnellere Prototypenerstellung ohne komplexen Build-Prozess",
      benefits: ["Zeitersparnis bei Projekten", "PWA-Transformation bestehender Sites", "Optimierte Workflows"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Nicht-Entwickler",
      description: "Benutzerfreundliche Plattform ohne Programmierkenntnisse",
      benefits: ["Intuitive Bedienung", "Eigene Inhalte verwenden", "Keine technischen Vorkenntnisse nötig"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Startups & Unternehmen",
      description: "Kostengünstige App-Entwicklung für Dienstleistungen",
      benefits: ["Geringe Investitionskosten", "Schnelle Markteinführung", "Skalierbare Lösungen"]
    }
  ]

  const pricingPlans = [
    {
      name: "Basis",
      price: "Kostenlos",
      description: "Perfekt für den Einstieg",
      features: [
        "Grundlegende PWA-Erstellung",
        "Online Code-Editor",
        "Live-Vorschau",
        "Community Support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "29€/Monat",
      description: "Für professionelle Entwickler",
      features: [
        "Erweiterte KI-Optimierungen",
        "Unbegrenzter Speicherplatz",
        "Priority Support",
        "Advanced Analytics",
        "Custom Branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Individuell",
      description: "Für große Unternehmen",
      features: [
        "Alle Premium Features",
        "Dedicated Support",
        "On-Premise Deployment",
        "Custom Integrations",
        "SLA Garantie"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">WebAppify AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#zielgruppen" onClick={() => scrollToSection('zielgruppen')} className="text-slate-600 hover:text-blue-600 transition-colors">Zielgruppen</a>
              <a href="#preise" onClick={() => scrollToSection('preise')} className="text-slate-600 hover:text-blue-600 transition-colors">Preise</a>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleCtaClick('start')}>
                Jetzt starten
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🚀 Revolutionäre KI-Technologie
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  WebAppify AI
                  <span className="block text-blue-600">Die Zukunft der PWA-Entwicklung</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Erstellen Sie mühelos hochwertige Progressive Web Apps mit der Kraft der künstlichen Intelligenz.
                  Von der Idee zur fertigen App in wenigen Minuten – ohne komplexe Programmierung.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4" onClick={() => handleCtaClick('test')}>
                  <Play className="w-5 h-5 mr-2" />
                  Kostenlos testen
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 px-8 py-4" onClick={() => handleCtaClick('demo')}>
                  <Download className="w-5 h-5 mr-2" />
                  Demo ansehen
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Keine Kreditkarte erforderlich</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sofort einsatzbereit</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="WebAppify AI Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-slate-500 text-sm">von 1000+ Nutzern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Revolutionäre Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              WebAppify AI kombiniert modernste KI-Technologie mit benutzerfreundlichem Design,
              um die PWA-Entwicklung zu revolutionieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 hover:shadow-lg cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={aiWebDev}
              alt="AI Web Development"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">KI-gestützte Entwicklung</h3>
                <p className="text-lg opacity-90">Intelligente Code-Optimierung in Echtzeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Plan */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              MVP-Entwicklungsplan
            </h2>
            <p className="text-xl text-slate-600">
              Strukturierter Ansatz für die Entwicklung der WebAppify AI-Plattform
            </p>
          </div>

          <Tabs defaultValue="anforderungen" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="anforderungen">Anforderungen</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="ki">KI-Integration</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
              <TabsTrigger value="launch">Launch</TabsTrigger>
            </TabsList>

            <TabsContent value="anforderungen" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 mr-2 text-blue-600" />
                    Anforderungsanalyse
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Kernfeatures definieren</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Finalisierung mit Stakeholdern</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Benutzerfeedback zu Prototypen</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Technische Spezifikationen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Zielgruppen-Analyse</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" />Webentwickler Bedürfnisse</li>
                        <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" />Nicht-Entwickler Anforderungen</li>
                        <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" />Unternehmens-Use-Cases</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="frontend" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-blue-600" />
                    Frontend-Entwicklung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Benutzeroberfläche</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Settings className="w-4 h-4 mr-2 text-blue-500" />React Framework Integration</li>
                        <li className="flex items-center"><Settings className="w-4 h-4 mr-2 text-blue-500" />Responsive Design</li>
                        <li className="flex items-center"><Settings className="w-4 h-4 mr-2 text-blue-500" />Moderne UI/UX Patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Code-Editor</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-green-500" />Monaco Editor Integration</li>
                        <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-green-500" />Live-Vorschau in iframe</li>
                        <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-green-500" />Syntax-Highlighting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backend" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-6 h-6 mr-2 text-blue-600" />
                    Backend-Entwicklung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">API-Gateway</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-500" />Service-Orchestrierung</li>
                        <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-500" />Load Balancing</li>
                        <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-500" />Rate Limiting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Microservices</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />Content Loader Service</li>
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />KI Engine Service</li>
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />File Generation Service</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ki" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-6 h-6 mr-2 text-blue-600" />
                    KI-Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">GPT-API Integration</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Brain className="w-4 h-4 mr-2 text-blue-500" />Verbindung zur KI-Plattform</li>
                        <li className="flex items-center"><Brain className="w-4 h-4 mr-2 text-blue-500" />Spezifische Prompts entwickeln</li>
                        <li className="flex items-center"><Brain className="w-4 h-4 mr-2 text-blue-500" />Response-Optimierung</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Qualitätssicherung</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-500" />Genauigkeitstests</li>
                        <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-500" />Nützlichkeits-Validierung</li>
                        <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-green-500" />Kontinuierliche Verbesserung</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testing" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Testing & Qualitätssicherung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Usability Tests</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-blue-500" />Ausgewählte Nutzergruppen</li>
                        <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-blue-500" />Feedback-Integration</li>
                        <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-blue-500" />Iterative Verbesserungen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Funktionale Tests</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-green-500" />PWA-Funktionalität</li>
                        <li className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-green-500" />Cross-Platform Tests</li>
                        <li className="flex items-center"><Smartphone className="w-4 h-4 mr-2 text-green-500" />Performance-Optimierung</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="launch" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="w-6 h-6 mr-2 text-blue-600" />
                    Launch & Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">MVP-Veröffentlichung</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />Plattform-Deployment</li>
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />Monitoring-Setup</li>
                        <li className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-500" />Support-System</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Marketing-Initiative</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-green-500" />Erste Nutzer gewinnen</li>
                        <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-green-500" />Community aufbauen</li>
                        <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-green-500" />Feedback sammeln</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Target Groups */}
      <section id="zielgruppen" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Unsere Zielgruppen
            </h2>
            <p className="text-xl text-slate-600">
              WebAppify AI ist für verschiedene Nutzergruppen konzipiert
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {group.icon}
                    </div>
                    <CardTitle>{group.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Vorteile:</h4>
                    <ul className="space-y-2">
                      {group.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preise" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Transparente Preisgestaltung
            </h2>
            <p className="text-xl text-slate-600">
              Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-all ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Beliebtester Plan
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 my-4">
                    {plan.price}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.name === 'Enterprise' ? 'bg-slate-600 hover:bg-slate-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                    onClick={() => handleCtaClick(plan.name === 'Enterprise' ? 'contact' : 'start')}
                  >
                    {plan.name === 'Enterprise' ? 'Kontakt aufnehmen' : 'Jetzt starten'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Warum WebAppify AI?
            </h2>
            <p className="text-xl text-slate-600">
              Unsere Alleinstellungsmerkmale im Vergleich zu bestehenden Lösungen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>KI-basierte Optimierung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Im Gegensatz zu herkömmlichen PWA-Generatoren nutzen wir fortschrittliche KI
                  zur automatischen Code-Optimierung und Verbesserung der Benutzererfahrung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Intelligente Erweiterungen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unsere KI analysiert bestehende Webinhalte und schlägt automatisch
                  sinnvolle Erweiterungen und Verbesserungen vor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Benutzerfreundlichkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entwickelt für sowohl Entwickler als auch Nicht-Entwickler,
                  mit intuitiver Bedienung und professionellen Ergebnissen.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit für die Zukunft der PWA-Entwicklung?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Starten Sie noch heute und erleben Sie, wie KI Ihre Entwicklungsprozesse revolutioniert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4" onClick={() => handleCtaClick('start')}>
              <Rocket className="w-5 h-5 mr-2" />
              Kostenlos starten
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4" onClick={() => handleCtaClick('demo')}>
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">WebAppify AI</span>
              </div>
              <p className="text-slate-400">
                Die Zukunft der PWA-Entwicklung mit künstlicher Intelligenz.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#preise" onClick={() => scrollToSection('preise')} className="hover:text-white transition-colors">Preise</a></li>
                <li><a href="#" onClick={() => alert('Dokumentation ist in Arbeit!')} className="hover:text-white transition-colors">Dokumentation</a></li>
                <li><a href="#" onClick={() => alert('API-Informationen folgen bald!')} className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" onClick={() => alert('Informationen über uns folgen bald!')} className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" onClick={() => alert('Karrierechancen werden bald veröffentlicht!')} className="hover:text-white transition-colors">Karriere</a></li>
                <li><a href="#" onClick={() => alert('Unser Blog ist in Vorbereitung!')} className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" onClick={() => handleCtaClick('contact')} className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" onClick={() => alert('Hilfe-Center ist in Arbeit!')} className="hover:text-white transition-colors">Hilfe-Center</a></li>
                <li><a href="#" onClick={() => alert('Community-Forum kommt bald!')} className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" onClick={() => alert('Systemstatus ist stabil!')} className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" onClick={() => alert('Datenschutzrichtlinien sind in Vorbereitung!')} className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 WebAppify AI. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
