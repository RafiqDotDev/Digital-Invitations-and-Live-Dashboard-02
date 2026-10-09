import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("overview", "routes/overview.tsx"),
  route("guests", "routes/guests.tsx"),
  route("invitation", "routes/invitation.tsx"),
  route("rsvp", "routes/rsvp.tsx"),
  route("invite/:code?", "routes/invite.tsx"),
] satisfies RouteConfig;
