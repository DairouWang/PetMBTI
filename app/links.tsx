
export const ROUTES = {
    HOME: '/',
    QUESTION_1: '/dashboard/q1',
    QUESTION_2: '/dashboard/q2',
    PET_NAME: '/dashboard/pet-name',
    RESULT: '/dashboard/result'
};

export const NAVIGATION = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Question 1', path: ROUTES.QUESTION_1 },
    { name: 'Question 2', path: ROUTES.QUESTION_2 },
    { name: 'Pet Name', path: ROUTES.PET_NAME},
    { name: 'Result', path: ROUTES.RESULT }
];

export function getNextQuestionPath(currentPath: string): string {
    switch (currentPath) {
        case ROUTES.HOME:
            return ROUTES.QUESTION_1;
        case ROUTES.QUESTION_1:
            return ROUTES.QUESTION_2;
        case ROUTES.QUESTION_2:
            return ROUTES.PET_NAME;
        case ROUTES.PET_NAME:
            return ROUTES.RESULT;
        default:
            return ROUTES.HOME;
    }
}