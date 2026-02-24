export const authenticateUser = async (email: string, password:string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@test.com" && password === "password123") {
                resolve('mockjw_test_token');
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 300)
    })
}