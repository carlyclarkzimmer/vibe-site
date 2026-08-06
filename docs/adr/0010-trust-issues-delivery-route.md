# ADR 0010: Trust Issues delivery route

## Status

Accepted

## Decision

Add `/trust-issues` as a focused campaign landing route for the Trust Issues private podcast delivery experience. It uses the campaign shell without shared site navigation, preserves the approved delivery copy and external Apple Podcasts, Spotify, and Hello Audio destinations, and expresses the source layout through the existing editorial brand system. `/trust` remains the separate email opt-in route.

## Consequences

The signup and delivery experiences have distinct URLs. Podcast playback remains provider-owned, opens in a new tab, and does not require application state or a new integration. The route includes page-specific metadata based on the legacy page but omits legacy platform and analytics metadata.
