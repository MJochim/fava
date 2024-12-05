import { get } from "../../api";
import { _ } from "../../i18n";
import { getURLFilters } from "../../stores/filters";
import { Route } from "../route";
import Events from "./Events.svelte";

export const events = new Route(
  "events",
  Events,
  async (url: URL) =>
    get("events", getURLFilters(url)).then((data) => ({ events: data })),
  () => _("Events"),
);
