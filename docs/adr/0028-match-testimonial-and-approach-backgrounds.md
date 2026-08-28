# ADR 0028: Match the homepage testimonial and approach backgrounds

## Status

Accepted

## Context

The final homepage testimonial used the berry accent as a full-section
background, while the earlier approach section used the site's quiet neutral
surface. The requested design direction is for these sections to share the same
background treatment.

## Decision

Use `--color-surface-muted` for both the approach section and the final
testimonial. Render the testimonial copy in `--color-ink` to preserve readable
contrast on the light neutral background.

## Consequences

The bottom of the homepage now visually echoes the “Most business owners try
to solve the problem at the surface.” section. The testimonial's copy,
typography, spacing, and centered layout remain unchanged.
