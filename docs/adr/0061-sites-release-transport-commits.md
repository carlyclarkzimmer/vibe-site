# ADR 0061: Verified release transport commits for Sites

## Status

Accepted

## Context

Sites rejects the complete canonical GitHub history because an old, removed
103 MB video exceeds the source server's unpack memory limit. The current site
source tree does not contain that file. Normal pushes with delta compression
disabled also fail. Rewriting shared history would risk collaborators' work.

## Decision

GitHub remains canonical, and feature changes still merge through pull requests.
For this release, create a transport commit whose parent is the current Sites
source head and whose Git tree is exactly the tested, merged GitHub main tree.
Push that exact transport commit to a named `codex/` release branch on the
canonical GitHub repository and verify its remote SHA and tree before publishing.
Then fast-forward the existing Sites source branch to that same commit and build,
package, and deploy that exact GitHub-verified revision using existing Sites tools.

Record both the canonical main revision and transport revision in the release
handoff. Reject or restart the release if either remote advances unexpectedly.
Never force-push, rewrite shared history, change project identity or access,
substitute uncommitted source, or create another production pipeline.

## Consequences

- Source content is identical to reviewed main, with a distinct auditable release
  SHA also present on GitHub and on Sites.
- Obsolete large blobs are not transmitted because they are not ancestors of the
  transport commit; no existing history or files are deleted or rewritten.
- Sites deployment records identify the exact transport SHA that was verified
  on GitHub. The normal main revision remains independently traceable.
