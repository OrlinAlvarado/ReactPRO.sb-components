import './mylabel.css';

export interface MyLabelProps{
   /**
   * Este es el texto a mostrar
   */
    label?: string;
   /**
   * Este es el tamaño de letra a utilizar
   */
    size?: 'normal'|'h1'|'h2'|'h3';
   /**
   * Indica se se debe colocar el texto en MAYUSCULA
   */
    allCaps?: boolean;
   /**
   * Este es el color que tendra el texto
   */
    color?: 'primary'|'secondary'|'tertiary';
   /**
   * Color de fuente
   */
    fontColor?: string;
}

/**
 * Label personalizable
 */
export const MyLabel = ( { 
    allCaps = false, 
    color   = 'primary',
    label   = 'No Label', 
    size    = 'normal',
    fontColor = 'black'
}: MyLabelProps ) => {
    return (
        <span className={ `label ${ size } text-${ color }`} style={{ color: fontColor }}>
           { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
