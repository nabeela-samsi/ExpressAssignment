declare namespace Express{
    interface Request{
        user:{
            id: number,
            first_name: string,
            last_name: string,
            email: string,
            gender: string,
            ip_address: string
        }
    }
}