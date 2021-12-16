/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el texto a mostrar
    */
    label?: string;
    /**
    * Este es el tamaño de letra a utilizar
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Indica se se debe colocar el texto en MAYUSCULA
    */
    allCaps?: boolean;
    /**
    * Este es el color que tendra el texto
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color de fuente
    */
    fontColor?: string;
    /**
    * Fondo de text
    */
    backgroundColor?: string;
}
/**
 * Label personalizable
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
