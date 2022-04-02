import {post} from './post'
export function register(params)
{
    return post({
     url:'/register',
     params:params
    })
}