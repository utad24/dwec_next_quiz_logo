
const getLogo = (url: string) => {
    return `https://cdn.brandfetch.io/${url}/w/400/h/400?c=1idTamdCYBW8koiNd94`
}

export const questions = [
    {
        id: 1,
        question: "¿Cuál de estas imágenes representa a Apple?",
        options: [
            { id: 1, src: getLogo("nike.com"), isCorrect: false },
            { id: 2, src: getLogo("apple.com"), isCorrect: true },
            { id: 3, src: getLogo("microsoft.com"), isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "¿Cuál de estas imágenes representa a Nike?",
        options: [
            { id: 2, src: getLogo("renault.es"), isCorrect: false },
            { id: 3, src: getLogo("amazon.com"), isCorrect: false },
            { id: 1, src: getLogo("nike.com"), isCorrect: true },
        ],
    },
];
