export type Mods = Record<string, boolean | string | undefined>;

<<<<<<< HEAD
export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = []
) => {
=======
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
<<<<<<< HEAD
            .map(([className]) => className)
    ].join(' ');
};
=======
            .map(([className]) => className),
    ].join(' ');
}
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
