export function TextToCopy (inquiry, infoPatience) {
    const textToCopy = `
        El/la paciente ${infoPatience.namePat} de ${28} años edad, asiste a consulta por presentar 
        ${infoPatience.inquiry} a la evaluación en UD ${infoPatience.ud}
        se observa 
        ${inquiry.cav ? 'caries,' : ""}
        ${inquiry.hor ? 'horizontal,' : "" } 
        ${inquiry.ver ? 'vertical,' : ""}
        ${inquiry.tra ? 'trauma,' : ""}
        ${inquiry.dys ? 'discromia,' : ""}
        ${inquiry.fis ? 'fistula,' : ""}
        ${inquiry.abs ? 'absceso,' : ""}
        `;
    return textToCopy.replace(/\s+/g, ' ')
} 
