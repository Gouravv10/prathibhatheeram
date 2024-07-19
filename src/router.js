import { createRouter,createWebHistory } from "vue-router";
// import NavB from "./components/NavB.vue";
import ContactUs from "./components/ContactUs.vue";
import GalleryPg from "./components/GalleryPg.vue";
import AboUt from "./components/AboUt.vue";
import HomePage from "./components/HomePage.vue";
const router=createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/", redirect:"/home"
        },
        {
        path:"/gallery", component:GalleryPg
        },
        {
            path:"/home", component:HomePage
            },
            {
                path:"/contact", component:ContactUs
                },
                {
                    path:"/about", component:AboUt
                    }
    ]
})
export default router;