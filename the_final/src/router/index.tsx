import { HomeTemplates } from 'components'
import HomeLayout from 'components/layouts/HomeLayout'
import { PATH } from 'constant'
import { AllCourse, CourseDetailPage, CourseFollowMenu } from 'pages'

// import UserInfomation from 'pages/UserInformation/UserInfomation'

import {RouteObject} from 'react-router-dom'


export const router:RouteObject[] = [
    {
        element:<HomeLayout/>,
        path:'/',
        children:[
            {
            //    element:<UserInfomation/>,
                element:<HomeTemplates/>,
                index:true,
            },
            {
                element:<CourseDetailPage/>,
                path: PATH.detail,
            },
            {
                element:<CourseFollowMenu/>,
                path: PATH.course,
            },
            {
                element:<AllCourse/>,
                path:PATH.allcourse,
            },

            

        ]
    }
    
  
]