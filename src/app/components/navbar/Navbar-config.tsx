//import { Icons } from "./icons"

type TNavConfig = {
    label: string,
    slug: string,
   // icon: keyof typeof Icons
}[]

export const navConfig: TNavConfig = [
    {
        label: 'Strona Główna',
        slug: '/',
       // icon: 'bookOpenIcon'
    },
    {
        label: 'Produkty',
        slug: '/products',
      //  icon: 'shoppingCart'
    },
    {
        label: 'Subskrybcje',
        slug: '/subscriptions',
      //  icon: 'subscript'
    },
]