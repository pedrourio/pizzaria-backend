import {Request, Response} from 'express'
import {CreateUserService} from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body; //desconstruindo o body da requisição

        const createUserService = new CreateUserService(); //instanciando o service
        const user = await createUserService.execute({
            name,
            email,
            password
        })
        
        return res.json(user);
    }
}

export { CreateUserController }