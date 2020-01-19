type Primitive = number | string | boolean | bigint | symbol

type Recursive<T> = T | RecursiveObject<T>

interface RecursiveObject<T> {
  [key: string]: Recursive<T>,
}

const stubFalse = () => false

const isObjectLike = <T extends {}>(value: T | Primitive): value is T =>
  typeof value === 'object' && value !== null

type Predicate = (value: Recursive<Primitive>, key: string) => boolean

export default (
  obj: RecursiveObject<Primitive>,
  stopIf: Predicate = stubFalse,
  ignoreIf: Predicate = stubFalse,
) => {
  const getPaths = (o: RecursiveObject<Primitive>): string[][] =>
    Object.keys(o)
      .filter(k => !ignoreIf(o[k], k))
      .map(k => {
        const v = o[k]
        return !isObjectLike(v) || stopIf(v, k)
          ? [[k]]
          : getPaths(v).map(newKeys => [k, ...newKeys])
      })
      .flat()

  return getPaths(obj)
}