# Versioning

- The user wants to identify restore points by release version, not just commit hash.
- Before publishing user-visible code or style changes, create the next release with `scripts/release.ps1`. Stage only the intended files first. Use patch increments for fixes/styles, minor for features, and major for incompatible redesigns.
- Keep `VERSION`, `CHANGELOG.md`, and the annotated Git tag `vX.Y.Z` aligned. Never move or overwrite an existing release tag.
- Routine automated event-data refreshes may remain ordinary commits. When the user requests a full snapshot of current data, create a new release version too.
- A local release is not a remote backup or deployment. Report the version and whether it was pushed/published. Follow the user's publishing instructions.
- To restore a version, preserve current work first and review the tagged snapshot on a new branch. Restore via a new commit on the publishing branch; do not force-push or erase history.
