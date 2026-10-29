# Moving to the masterplan3d namespace

The Home Assistant integration directory and domain are now `custom_components/masterplan3d` and `masterplan3d`. Services, WebSocket commands, the sidebar URL, static resources, bundle filenames and dashboard card use the same namespace.

## Existing Home Assistant installations

1. Export a full backup from the existing integration.
2. Remove the old integration entry while its original files are still installed. Its plan, pictures and packs remain in Home Assistant's `.storage`; removing the entry also cleans up its generated Assist sentence files.
3. Install this repository's `custom_components/masterplan3d` directory and remove the old `custom_components/neonplan3d` directory. Restart Home Assistant and add **MasterPlan3D** under **Settings → Devices & services**.
4. On first load, the new integration copies existing plan, images, history, packs, shop licence, locating, voice and diagnostics stores from the previous namespace. Source stores remain untouched. Any already saved `masterplan3d.*` store takes precedence, including an empty store.
5. Update dashboard YAML to `type: custom:masterplan3d-card`, automation actions to `masterplan3d.ask` / `masterplan3d.announce`, and sidebar links to `/masterplan3d`. Update YAML dashboard resources to `/masterplan3d_static/masterplan3d-loader.js`. Resources in dashboard storage mode are registered automatically.
6. Review entity references to locating sensors: Home Assistant may assign new sensor entity IDs when the integration domain changes. Reload each browser so its saved UI preferences can be copied to the new namespace.

New plan exports and backups use `masterplan3d` and `masterplan3d-backup`. Existing exports and backups from the previous format can still be imported. Browser preferences are copied once without overwriting newer preferences; generated thumbnail caches rebuild under the new name.

## References to the earlier name

The old namespace remains only in data-import compatibility, tests for that compatibility, the shop's existing signed-pack binding salt, and real upstream URLs or repository references. The salt must stay unchanged to keep already signed packs valid. This source rename does not rename the GitHub repository or external shop/demo websites.
