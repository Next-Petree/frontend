import LayoutPage from "@pages/Layout";
import { lazy, FC } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@pages/Home/index"));
const homeRoute = [
  {
    path: "home",
    element: <HomePage />,
  },
];

const SignUpPage = lazy(() => import("@pages/SignUp/index"));
const signUpRoute: RouteObject[] = [
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
];

const TestPage = lazy(() => import("@pages/Test/index"));
const TestResultPage = lazy(() => import("@pages/Test/Result/index"));
const TestIntroducePage = lazy(() => import("@pages/Test/Introduce/index"));
const TestQuestionPage = lazy(() => import("@pages/Test/Question/index"));

const testRoute: RouteObject[] = [
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "test/result",
    element: <TestResultPage />,
  },
  {
    path: "test/introduce",
    element: <TestIntroducePage />,
  },
  {
    path: "test/question",
    element: <TestQuestionPage />,
  },
];

const SearchBreederPage = lazy(() => import("@pages/Search/Breeder/index"));
const SearchAnimalPage = lazy(() => import("@pages/Search/Animal/index"));
const SearchRoute: RouteObject[] = [
  {
    path: "search/breeder",
    element: <SearchBreederPage />,
  },
  {
    path: "search/animal",
    element: <SearchAnimalPage />,
  },
];

const BreederAuthorizationPage = lazy(
  () => import("@pages/Breeder/Authorization/index"),
);

const BreederRoute: RouteObject[] = [
  {
    path: "breeder/authorization",
    element: <BreederAuthorizationPage />,
  },
];

const RenderRouter: FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        ...homeRoute,
        ...signUpRoute,
        ...testRoute,
        ...SearchRoute,
        ...BreederRoute,
        // { 404 페이지 제작시 작업할 예정
        //   path: "*",
        //   element: (
        //     <AuthenticatedComponent>
        //       <NotFoundPage />
        //     </AuthenticatedComponent>
        //   ),
        // },
      ],
    },
  ]);
};

export default RenderRouter;
