export function calculateAge(userDOB){
    const dateOfBirth = new Date(userDOB);
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    return age
}