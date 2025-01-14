---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/aoa/fabrics/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SND_AOA_FABRIC_LAYOUT
	tristate "layout-id fabric"
	select SND_AOA_SOUNDBUS
	select SND_AOA_SOUNDBUS_I2S
	help
	This enables the layout-id fabric for the Apple Onboard
	Audio driver, the module holding it all together
	based on the device-tree's layout-id property.
	
	If you are unsure and have a later Apple machine,
	compile it as a module.

```
