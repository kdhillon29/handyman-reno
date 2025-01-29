"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {

      const pathName =  usePathname();
      const paths=pathName.split('/').filter(path=>path !=='')
      paths.forEach((path,index) => {
         paths[index]=path.replace(/-/g,' ')
        
      });
    return (
        <nav className="">
            <ol className="flex items-center space-x-1  text-sm">
            <li>
                <Link href={'/'} className="text-white">Home</Link>
            </li>
            {paths.map((path,index)=>{
                const href=`/${paths.slice(0,index+1).join('/')}`;
                const isLast= index===paths.length-1;
                path =path.charAt(0).toUpperCase() + path.slice(1);
                return (
                    <li key={path}>
                        <div className="flex items-center gap-2">
                            <span className="mx-1 text-gray-400">/</span>
                            {isLast?(
                                <span className="text-white font-medium">{path}</span>
                            ):(
                                <Link href={href} className="text-white">{path}</Link>
                            )}
                            
                        </div>
                    </li>
                )
            }
                
            )}

            </ol>



        </nav>
            
    
    );
}