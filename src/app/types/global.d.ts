declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
<<<<<<< HEAD

declare type TNullable<T> = T | null
=======
declare type TNullable<T>=T|null    
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
