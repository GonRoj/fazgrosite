"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronRight,
  Headphones,
  Users,
  Wrench,
  Monitor,
  FileCheck,
  ShieldCheck,
  Globe,
  Network,
  ChevronLeft,
  ChevronRightIcon,
  Zap,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Calendar,
  FileText,
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* ========== HEADER: BEGIN ========== */}
      <header className="sticky top-0 z-50 w-full border-b border-[#111] bg-black/90 backdrop-blur 
      supports-[backdrop-filter]:bg-black/80 border-b-4">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FazGro Solutions"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#inicio" className="text-sm font-medium text-[#888] hover:text-[#4cbb16]">
              Inicio
            </Link>
            <Link href="#services" className="text-sm font-medium text-[#888] hover:text-[#4cbb16]">
              Servicios
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-[#888] hover:text-[#4cbb16]">
              Testimonios
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-[#4cbb16] border border-[#4cbb16] rounded hover:bg-[#00a86b] hover:text-black transition"
            >
              Contact
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-[#111] text-white p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#111]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="FazGro Solutions"
                      width={160}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                {/* Mobile Menu Links */}
                <nav className="flex flex-col p-4 space-y-2">
                  <Link
                    href="#about"
                    className="flex items-center py-4 px-4 rounded-md text-[#888] hover:text-[#4cbb16] hover:bg-[#0A0A0A]"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="#services"
                    className="flex items-center py-4 px-4 rounded-md text-[#888] hover:text-[#4cbb16] hover:bg-[#0A0A0A]"
                  >Servicios
                  </Link>
                  <Link
                    href="#testimonials"
                    className="flex items-center py-4 px-4 rounded-md text-[#888] hover:text-[#4cbb16] hover:bg-[#0A0A0A]"
                  >
                    Testimonios
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center justify-center py-4 px-4 mt-4 text-[#4cbb16] border border-[#4cbb16] rounded hover:bg-[#00a86b] hover:text-black transition"
                  >
                    Contact
                  </Link>
                </nav>
                {/* Mobile Menu Footer */}
                <div className="mt-auto p-4 border-t border-[#111]">
                  <div className="flex gap-4 justify-center">
                    <Link href="#" className="text-[#888] hover:text-white">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-[#888] hover:text-white">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-[#888] hover:text-white">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/* ========== HEADER: END ========== */}

      <main className="flex-1">
        {/* ========== HERO SECTION: BEGIN ========== */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* Hero Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Agilice su flujo de trabajo y amplifique su productividad
                  </h1>
                  <p className="max-w-[600px] text-[#888] md:text-xl">
                    La plataforma todo en uno que ayuda a los equipos a gestionar proyectos, automatizar flujos de trabajo y colaborar sin problemas.
                  </p>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-[#4cbb16] hover:bg-[#00a86b] text-black">
                    <Link href="#" className="px-8">
                      Start for free
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-[#222] text-[#00a86b] hover:bg-[#4cbb16]">
                    <Link href="#" className="px-8">
                      Book a demo
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
              </div>
              {/* Hero Image */}
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Product screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        {/* ========== HERO SECTION: END ========== */}

        {/* ========== SERVICES SECTION: BEGIN ========== */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#00a86b]/30 px-3 py-1 text-sm text-[#4cbb16]">Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Comprehensive IT Solutions for Your Business
                </h2>
                <p className="max-w-[900px] text-[#888] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a wide range of technology services to help your business thrive in the digital age.
                </p>
              </div>
            </div>
            {/* Services Grid */}
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {/* Service Card 1 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Headphones className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">IT Support & Help Desk</CardTitle>
                  <CardDescription className="text-[#888]">
                    Remote and on-site technical assistance to resolve IT issues, ensuring business continuity.
                    <br />
                    <br />   
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 2 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Users className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">IT Outsourcing Services</CardTitle>
                  <CardDescription className="text-[#888]">
                    Outsource your technology infrastructure and let our experts manage your systems while you focus on
                    growth.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 3 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Wrench className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">Custom Engineering Projects</CardTitle>
                  <CardDescription className="text-[#888]">
                    Design and implementation of tailored technology solutions, from planning to deployment.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 4 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Monitor className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">Technology Equipment Sales</CardTitle>
                  <CardDescription className="text-[#888]">
                    Supply of reliable hardware and software from trusted brands, with specialized consulting.
                    <br />
                    <br />
                
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 5 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <FileCheck className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">Software License Management</CardTitle>
                  <CardDescription className="text-[#888]">
                    Assistance in acquiring and managing essential software licenses, ensuring legal compliance.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 6 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-[#00a86b]" />
                  <CardTitle className="mt-4 text-white">Cybersecurity Solutions</CardTitle>
                  <CardDescription className="text-[#888]">
                    Protect your business with security audits, proactive monitoring, firewalls, and employee training.
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 7 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Globe className="h-10 w-10 text-green-500" />
                  <CardTitle className="mt-4 text-white">Website Development</CardTitle>
                  <CardDescription className="text-[#888]">
                    Creation of modern, secure, and responsive websites that strengthen your online presence.
                    <br />
                    <br />
                  </CardDescription>
                </CardHeader>
              </Card>
              {/* Service Card 8 */}
              <Card className="bg-[#0A0A0A] border-[#111]">
                <CardHeader>
                  <Network className="h-10 w-10 text-green-500" />
                  <CardTitle className="mt-4 text-white">Networks & IT Infrastructure</CardTitle>
                  <CardDescription className="text-[#888]">
                    Installation and maintenance of secure, fast, and scalable computer networks for connectivity.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            {/* Services CTA */}
            <div className="flex justify-center">
              <Button variant="outline" asChild className="border-[#222] text-[#00a86b] hover:bg-[#4cbb16]">
                <Link href="#">Explorar todos los servicios</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* ========== SERVICES SECTION: END ========== */}

        {/* ========== TESTIMONIALS SECTION: BEGIN ========== */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-900/30 px-3 py-1 text-sm text-green-400">
                  Testimonios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Loved by teams worldwide
                </h2>
                <p className="max-w-[900px] text-[#888] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about FazGro.
                </p>
              </div>
            </div>

            {/* Testimonials Carousel Component */}
            <TestimonialsCarousel />
          </div>
        </section>
        {/* ========== TESTIMONIALS SECTION: END ========== */}

        {/* ========== CONTACT SECTION: BEGIN ========== */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-900/30 px-3 py-1 text-sm text-green-400">
                Contáctanos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Ready to transform your workflow?
                </h2>
                <p className="max-w-[900px] text-[#888] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to learn more about FazGro? Our team is here to help.
                </p>
              </div>
            </div>
            {/* Contact Content */}
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Contact Information</h3>
                    <p className="text-[#888]">Fill out the form and our team will get back to you within 24 hours.</p>
                  </div>
                  {/* Contact Methods */}
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900/30">
                        <MessageSquare className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Correo electrónico</p>
                        <p className="text-sm text-[#888]">contacto@fazgro.com</p>
                      </div>
                    </div>
                    {/* Book a Demo */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900/30">
                        <Calendar className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Agenda una cita</p>
                        <p className="text-sm text-[#888]">Schedule a personalized demo</p>
                      </div>
                    </div>
                    {/* Resources */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900/30">
                        <FileText className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Sucursales</p>
                        <p className="text-sm text-[#888]">Check out our helpful resources</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Form */}
                <Card className="bg-[#0A0A0A] border-[#111]">
                  <CardHeader>
                    <CardTitle className="text-white">Send us a message</CardTitle>
                    <CardDescription className="text-[#888]">
                      We&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      {/* Name Field */}
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          className="bg-black border-[#222] text-white placeholder:text-[#444]"
                        />
                      </div>
                      {/* Email Field */}
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-black border-[#222] text-white placeholder:text-[#444]"
                        />
                      </div>
                      {/* Company Field */}
                      <div className="grid gap-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Enter your company name (optional)"
                          className="bg-black border-[#222] text-white placeholder:text-[#444]"
                        />
                      </div>
                      {/* Message Field */}
                      <div className="grid gap-2">
                        <Label htmlFor="message" className="text-white">
                          Message
                        </Label>
                        <textarea
                          id="message"
                          className="min-h-[120px] rounded-md border border-[#222] bg-black px-3 py-2 text-sm text-white placeholder:text-[#444] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      {/* Submit Button */}
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-black">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* ========== CONTACT SECTION: END ========== */}

        {/* ========== CTA PARTNERSHIP: BEGIN ========== */}
        <section className="w-full py-12 bg-black overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="inline-block rounded-lg bg-green-900/30 px-3 py-1 text-sm text-green-400">
                Partners
                </div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-white">
                Alguno de nuestros partners
                <br />
                <br />
              </h2>
            </div>
            
            <div className="relative">
              {/* Gradient overlays for smooth scroll effect */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
              
              {/* Logos container with continuous scroll animation */}
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex">
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/lenovo.png"
                      alt="Lenovo"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                   <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/dell.png"
                      alt="/Dell"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/hp.png"
                      alt="HP"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                   <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/fortinet-1.png"
                      alt="Fortinet"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/asus.png"
                      alt="asus"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/samsung.png"
                      alt="samsung"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/brother.png"
                      alt="brother"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/lynksys.png"
                      alt="lynksys"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/hyperx.png"
                      alt="hyperx"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/zotac.png"
                      alt="zotac"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/microsoft.png"
                      alt="microsoft"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/sophos.png"
                      alt="sophos"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/mcafee.png"
                      alt="mcafee"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/kaspersky.png"
                      alt="kaspersky"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/symantec.png"
                      alt="symantec"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                     <div className="flex-shrink-0 mx-4">
                    <Image
                      src="/vscode.png"
                      alt="Visual Studio Code"
                      width={100}
                      height={50}
                      className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== CTA PARTNERSHIP: END ========== */}
      </main>

      {/* ========== FOOTER: BEGIN ========== */}
      <footer className="w-full border-t border-[#111] bg-black py-6 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Footer Links Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="FazGro Solutions"
                  width={140}
                  height={45}
                  className="h-11 w-auto"
                />
              </div>
       {/* Social Links */}
              <div className="flex gap-4">
                <Link href="#" className="text-[#888] hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#888] hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-[#888] hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-[#888] hover:text-[#4cbb16]">
                  About
                </Link>
                <Link href="#" className="text-sm text-[#888] hover:text-[#4cbb16]">
                  Carrers
                </Link>
                <Link href="#" className="text-sm text-[#888] hover:text-[#4cbb16]">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-[#888] hover:text-[#4cbb16]">
                  Privacy
                </Link>
              </nav>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-8 border-t border-[#111] pt-8 text-center text-sm text-[#888]">
            &copy; {new Date().getFullYear()} FazGro. All rights reserved.
          </div>
        </div>
      </footer>
      {/* ========== FOOTER: END ========== */}
    </div>
  )
}

{
  /* ========== TESTIMONIALS CAROUSEL COMPONENT: BEGIN ========== */
}
function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "FazGro has transformed how our team works. We've increased productivity by 35% and reduced meeting time by half. The analytics features give us valuable insights into our workflow.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      content:
        "As our team grew from 5 to 50, FazGro scaled perfectly with us. The resource management tools have been crucial for maintaining efficiency as we expand.",
    },
    {
      name: "Emily Rodriguez",
      role: "Team Lead at DesignHub",
      content:
        "The collaboration features in FazGro have been a game-changer for our remote team. We can seamlessly work together regardless of time zones.",
    },
    {
      name: "David Kim",
      role: "Project Manager at GlobalCorp",
      content:
        "We evaluated 7 different project management tools before choosing FazGro. The intuitive interface and comprehensive feature set made it the clear winner.",
    },
    {
      name: "Priya Sharma",
      role: "Operations Director at InnovateCo",
      content:
        "The workflow automation in FazGro has saved our team countless hours on repetitive tasks. We've been able to focus more on strategic initiatives.",
    },
    {
      name: "James Wilson",
      role: "Engineering Lead at DevForce",
      content:
        "The document management system is exceptional. Being able to collaborate on files in real-time with version control has eliminated confusion and rework.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="mx-auto max-w-5xl py-12">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Current Testimonial */}
        <div className="mx-auto max-w-3xl px-4">
          <Card className="border-4 border-[#00a86b]/30 bg-[#0A0A0A] shadow-lg shadow-black/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#111]" />
                <div>
                  <CardTitle className="text-lg text-white">{testimonials[currentIndex].name}</CardTitle>
                  <CardDescription className="text-[#888]">{testimonials[currentIndex].role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#CCC] text-lg">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/80 border-[#222] backdrop-blur-sm"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4 text-white" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/80 border-[#222] backdrop-blur-sm"
            onClick={nextTestimonial}
          >
            <ChevronRightIcon className="h-4 w-4 text-white" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-green-500" : "bg-[#222]"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
{
  /* ========== TESTIMONIALS CAROUSEL COMPONENT: END ========== */
}

