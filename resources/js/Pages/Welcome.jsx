import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../Components/Card";

const LandingPage = () => {
    const [bookingData, setBookingData] = useState({
        checkIn: "",
        checkOut: "",
        rooms: "",
        guests: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking data:", bookingData);
    };

    return (
        <div className="min-h-screen font-sans">
            <Helmet>
                <title>Costa Rica Paradise</title>
            </Helmet>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-paradise shadow-lg">
                <nav className="flex justify-between items-center max-w-7xl mx-auto p-5">
                    <h1 className="text-white text-3xl font-serif">
                        Costa Rica Paradise
                    </h1>
                    <div className="space-x-6 text-white">
                        <a href="#servicios" className="hover:underline">
                            Servicios
                        </a>
                        <a href="#galeria" className="hover:underline">
                            Galería
                        </a>
                        <a href="#contactanos" className="hover:underline">
                            Contáctanos
                        </a>
                        <a href="#blog" className="hover:underline">
                            Blog
                        </a>
                    </div>
                </nav>
            </header>

            {/* Formulario */}
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <img
                        src="/images/inicio.jpeg"
                        alt="Beach at sunset with palm trees"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white bg-opacity-10 text-xl backdrop-blur-sm p-8 rounded-lg space-y-4 w-full max-w-4xl mx-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-white mb-2">
                                    Check in
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-2 rounded"
                                    value={bookingData.checkIn}
                                    onChange={(e) =>
                                        setBookingData({
                                            ...bookingData,
                                            checkIn: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2">
                                    Check out
                                </label>
                                <input
                                    type="date"
                                    className="w-full p-2 rounded"
                                    value={bookingData.checkOut}
                                    onChange={(e) =>
                                        setBookingData({
                                            ...bookingData,
                                            checkOut: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2">
                                    Habitaciones
                                </label>
                                <select
                                    className="w-full p-2 rounded"
                                    value={bookingData.rooms}
                                    onChange={(e) =>
                                        setBookingData({
                                            ...bookingData,
                                            rooms: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-white mb-2">
                                    Huéspedes
                                </label>
                                <select
                                    className="w-full p-2 rounded"
                                    value={bookingData.guests}
                                    onChange={(e) =>
                                        setBookingData({
                                            ...bookingData,
                                            guests: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4+</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-white text-blue-900 px-8 py-2 rounded hover:bg-blue-300 transition-all duration-200"
                            >
                                Reservar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Cards */}
            <section className="relative py-16 px-4">
                <div className="absolute inset-0">
                    <img
                        src="/images/escapate.jpg"
                        alt="Escápate"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-4xl font-serif text-center mb-16 text-white">
                        Escápate al Paraíso
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        <Card
                            image="/images/aventura.jpg"
                            title="Aventura"
                            description="Desde el surf en las playas de Guanacaste hasta caminatas por senderos tropicales, nuestra ubicación ofrece experiencias emocionantes para todos."
                        />
                        <Card
                            image="/images/gastronomia.jpg"
                            title="Gastronomía Local"
                            description="Disfruta de una experiencia culinaria única con platillos inspirados en los sabores Guanacastecos."
                        />
                        <Card
                            image="/images/relax.jpg"
                            title="Relax"
                            description="Sumérgete en un ambiente de tranquilidad. Disfruta de nuestra piscina, áreas de descanso y servicios de spa."
                        />
                        <Card
                            image="/images/pet.jpg"
                            title="Pet-Friendly"
                            description="¡No dejes a nadie en casa! Somos un hotel que da la bienvenida a tus mascotas."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
