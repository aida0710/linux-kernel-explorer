---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/aoa/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig SND_AOA
	tristate "Apple Onboard Audio driver"
	depends on PPC_PMAC
	select SND_PCM
	help
	This option enables the new driver for the various
	Apple Onboard Audio components.

if SND_AOA

source "sound/aoa/fabrics/Kconfig"

source "sound/aoa/codecs/Kconfig"

source "sound/aoa/soundbus/Kconfig"

endif	# SND_AOA

```
