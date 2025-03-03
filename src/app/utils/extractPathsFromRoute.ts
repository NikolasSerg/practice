import { Router } from 'express';

export const extractRoutes = (router: Router): string[] => {
  const paths: string[] = [];

  router.stack.forEach((middleware) => {
    if (middleware.route) {
      paths.push(middleware.route.path);
    } else if (middleware.name === 'router') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      middleware.handle.stack.forEach((subRoute) => {
        if (subRoute.route) {
          paths.push(subRoute.route.path);
        }
      });
    }
  });

  return paths;
};
