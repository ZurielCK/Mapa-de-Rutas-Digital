import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  console.log("Estas en welcome")
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">¡Bienvenido a la Aplicación!</h1>
        <p className="text-lg mb-8">Estamos encantados de tenerte aquí.</p>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;