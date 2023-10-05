import { HomeTemplates } from 'components'
import HomeLayout from 'components/layouts/HomeLayout'
import {RouteObject} from 'react-router-dom'


export const router:RouteObject[] = [
    {
        element:<HomeLayout/>,
        path:'/',
        children:[
            {
                element:<HomeTemplates/>,
                index:true,
            }
        ]
    }
    
  
]