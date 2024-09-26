import React, { useEffect, useRef, useState } from 'react';
import styles from './Animations.module.css'; // Estilos de animação

const useScrollAnimation = (initialClass, animationClass) => {
    const elementRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const elementTop = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                // Verifica se o topo do elemento está dentro da janela de visualização
                if (elementTop <= windowHeight && elementTop >= 0) {
                    setIsAnimated(true); // Apenas adiciona a animação, sem removê-la
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Executa ao carregar a página para verificar se o elemento já está na visualização

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return [elementRef, isAnimated ? animationClass : initialClass];
};

export default useScrollAnimation;
