type Resolver = (
  parent: unknown,
  args: Record<string, any>,
  context: Record<string, unknown>,
  info: unknown
) => unknown;
type Resolvers = Record<string, Resolver>;
