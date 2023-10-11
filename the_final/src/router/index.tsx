import { HomeTemplates } from 'components'
import HomeLayout from 'components/layouts/HomeLayout'
import UserInfomation from 'pages/UserInformation/UserInfomation'

import {RouteObject} from 'react-router-dom'


export const router:RouteObject[] = [
    {
        element:<HomeLayout/>,
        path:'/',
        children:[
            {
               element:<UserInfomation/>,
                // element:<HomeTemplates/>,
                index:true,
            }
        ]
    }
    
  
]