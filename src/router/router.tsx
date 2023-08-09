import React from "react";
import { Router, Route, RootRoute } from "@tanstack/react-router";
import { Events } from "../pages/Events";
import { CreateTicketing } from "../pages/CreateTicketing";
import { Home } from "../pages/Home";
import { Navbar } from "../layout/Navbar";

// Create a root route
const rootRoute = new RootRoute({
  component: Navbar,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const eventsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/events",
  component: Events,
});

const createTicketingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/create-ticketing",
  component: CreateTicketing,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  homeRoute,
  eventsRoute,
  createTicketingRoute,
]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
