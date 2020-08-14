import LoginContainer from "~p/login";
import DashboardContainer from "~p/dashboard";

const routes = [
  {
    name: "login",
    url: "/",
    component: LoginContainer,
    exact: true,
  },
  {
    name: "dashboard",
    url: "/dashboard",
    component: DashboardContainer,
    exact: true,
  },
];

const routesMap = {};

routes.forEach((route) => {
  routesMap[route.name] = route.url;
});

const getSomeRoutes = (...routeNames) => {
  return routes.filter((e) => routeNames.includes(e.name));
};

export default routes;

export { routesMap, getSomeRoutes };
