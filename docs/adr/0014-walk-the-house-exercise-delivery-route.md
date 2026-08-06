# ADR 0014: Walk the House exercise delivery route

## Status

Accepted

## Decision

Add `/walk-the-house-exercise` as a focused campaign landing route for the
approved Walk the House exercise delivery experience. It uses the campaign
shell without shared site navigation, embeds the verified Vimeo exercise, and
links to the verified Google Drive companion guide, Voxer profile, email,
Instagram profile, and Carly Clark Zimmer services destination.

Preserve the reference copy and translate its composition into the existing
black, white, berry-pink editorial brand system. Reuse approved project
photography through CSS cropping only. Add page-specific metadata and a
route-relative canonical URL while omitting the legacy page's mismatched
newsletter metadata, analytics, tracking scripts, and platform fields.

## Consequences

The route remains server-rendered and adds no application state, dependency,
analytics, form, or storage integration. Vimeo owns exercise playback and
Google Drive owns companion-guide delivery. Those external destinations must
continue to be maintained and tested independently.
