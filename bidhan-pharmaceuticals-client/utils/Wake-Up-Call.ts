export default async function WakeUpCall(){

    try {
        const request = await fetch('https://bidhan-pharmaceuticals.vercel.app/api/wake-up-call', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error)
    }
}